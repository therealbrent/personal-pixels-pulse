import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, X, ChevronRight, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCommandPaletteSound } from '@/hooks/useCommandPaletteSound';
import { commandPaletteData, CommandItem } from '@/data/commandPaletteData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentPages, setRecentPages] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { playClose, playSelect } = useCommandPaletteSound();

  // Track recent pages
  useEffect(() => {
    const stored = localStorage.getItem('recentPages');
    if (stored) {
      try {
        setRecentPages(JSON.parse(stored));
      } catch {
        setRecentPages([]);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen && location.pathname) {
      const recent = [...new Set([location.pathname, ...recentPages])].slice(0, 5);
      setRecentPages(recent);
      localStorage.setItem('recentPages', JSON.stringify(recent));
    }
  }, [location.pathname]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Fuzzy search with scoring
  const filteredCommands = commandPaletteData
    .map((cmd) => {
      if (!query) return { cmd, score: 0 };
      
      const searchText = query.toLowerCase();
      let score = 0;
      
      // Title match (highest weight)
      const titleLower = cmd.title.toLowerCase();
      if (titleLower === searchText) score += 100;
      else if (titleLower.startsWith(searchText)) score += 50;
      else if (titleLower.includes(searchText)) score += 25;
      
      // Keyword match
      const keywordMatch = cmd.keywords?.some((kw) => kw.includes(searchText));
      if (keywordMatch) score += 15;
      
      // Description match
      if (cmd.description?.toLowerCase().includes(searchText)) score += 10;
      
      // Badge match
      if (cmd.badge?.toLowerCase().includes(searchText)) score += 8;
      
      // Type match
      if (cmd.type === searchText) score += 5;
      
      return { cmd, score };
    })
    .filter(({ score }) => !query || score > 0)
    .sort((a, b) => {
      // Sort by score, then by type priority (page > section > action > external)
      if (b.score !== a.score) return b.score - a.score;
      
      const typePriority = { page: 4, section: 3, action: 2, external: 1 };
      const aPriority = typePriority[a.cmd.type] || 0;
      const bPriority = typePriority[b.cmd.type] || 0;
      return bPriority - aPriority;
    })
    .map(({ cmd }) => cmd)
    .slice(0, 12); // Limit results

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleSelect(filteredCommands[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filteredCommands, selectedIndex]);

  const handleSelect = (item: CommandItem) => {
    playSelect();
    
    if (item.type === 'external') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.url);
    }
    
    onClose();
  };

  const handleClose = () => {
    playClose();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Palette */}
      <div 
        className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="mx-4 bg-background border-4 border-foreground shadow-neo-lg">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b-4 border-foreground">
            <Search size={24} className="text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Search pages, sections, and more..."
              className="flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground"
              aria-label="Search command palette"
            />
            <button
              onClick={handleClose}
              className="p-2 hover:bg-muted rounded transition-colors"
              aria-label="Close command palette"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[500px] overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                {query ? `No results found for "${query}"` : 'Start typing to search...'}
              </div>
            ) : (
              <div className="py-2">
                {filteredCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  const isSelected = index === selectedIndex;
                  const isRecent = recentPages.includes(cmd.url);
                  const isExternal = cmd.type === 'external';

                  return (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd)}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-3 text-left transition-colors group",
                        isSelected 
                          ? "bg-accent text-accent-foreground" 
                          : "hover:bg-muted",
                        "focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-inset"
                      )}
                      aria-selected={isSelected}
                    >
                      <Icon 
                        size={20} 
                        className={cn(
                          "flex-shrink-0",
                          isSelected ? "text-accent-foreground" : "text-accent"
                        )}
                        strokeWidth={2.5}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base truncate">
                            {cmd.title}
                          </span>
                          {isExternal && (
                            <ExternalLinkIcon size={14} className="flex-shrink-0" />
                          )}
                        </div>
                        {cmd.description && (
                          <div className={cn(
                            "text-xs truncate mt-0.5",
                            isSelected ? "text-accent-foreground/70" : "text-muted-foreground"
                          )}>
                            {cmd.description}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {cmd.badge && (
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-1 rounded border-2",
                            isSelected 
                              ? "border-accent-foreground/30 text-accent-foreground" 
                              : "border-foreground/30 text-muted-foreground"
                          )}>
                            {cmd.badge}
                          </span>
                        )}
                        {isRecent && !cmd.badge && (
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-1 rounded",
                            isSelected 
                              ? "bg-accent-foreground/20 text-accent-foreground" 
                              : "bg-accent/20 text-accent"
                          )}>
                            RECENT
                          </span>
                        )}
                        <ChevronRight 
                          size={16} 
                          className={cn(
                            "transition-transform duration-200",
                            isSelected && "translate-x-1"
                          )}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="flex items-center justify-between px-4 py-3 border-t-4 border-foreground bg-muted/20 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span><kbd className="px-2 py-1 bg-background border-2 border-foreground rounded font-mono">↑↓</kbd> Navigate</span>
              <span><kbd className="px-2 py-1 bg-background border-2 border-foreground rounded font-mono">↵</kbd> Select</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">{filteredCommands.length} results</span>
              <span><kbd className="px-2 py-1 bg-background border-2 border-foreground rounded font-mono">ESC</kbd> Close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
