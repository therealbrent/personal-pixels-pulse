import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Briefcase, Mic, FileText, Search, X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCommandPaletteSound } from '@/hooks/useCommandPaletteSound';

interface CommandItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  keywords?: string[];
}

const commands: CommandItem[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    icon: Home,
    keywords: ['home', 'start', 'main', 'index'],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    url: '/leadership',
    icon: Briefcase,
    keywords: ['leadership', 'principles', 'management', 'lead'],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    url: '/speaking',
    icon: Mic,
    keywords: ['speaking', 'talks', 'presentations', 'media', 'speeches'],
  },
  {
    id: 'llms',
    title: 'LLMs.txt',
    url: '/llms.txt',
    icon: FileText,
    keywords: ['llms', 'llm', 'txt', 'ai', 'models'],
  },
];

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
      setRecentPages(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (isOpen && location.pathname) {
      const recent = [...new Set([location.pathname, ...recentPages])].slice(0, 3);
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

  // Fuzzy search
  const filteredCommands = commands.filter((cmd) => {
    if (!query) return true;
    const searchText = query.toLowerCase();
    const titleMatch = cmd.title.toLowerCase().includes(searchText);
    const keywordMatch = cmd.keywords?.some((kw) => kw.includes(searchText));
    return titleMatch || keywordMatch;
  });

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
          handleSelect(filteredCommands[selectedIndex].url);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filteredCommands, selectedIndex]);

  const handleSelect = (url: string) => {
    playSelect();
    navigate(url);
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
        className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 animate-scale-in"
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
              placeholder="Search pages..."
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
          <div className="max-h-[400px] overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            ) : (
              <div className="py-2">
                {filteredCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  const isSelected = index === selectedIndex;
                  const isRecent = recentPages.includes(cmd.url);

                  return (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd.url)}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-3 text-left transition-colors",
                        isSelected 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted",
                        "focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-inset"
                      )}
                      aria-selected={isSelected}
                    >
                      <Icon 
                        size={24} 
                        className={cn(
                          "flex-shrink-0",
                          isSelected ? "text-primary-foreground" : "text-accent"
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base truncate">
                          {cmd.title}
                        </div>
                        <div className={cn(
                          "text-sm truncate",
                          isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
                        )}>
                          {cmd.url}
                        </div>
                      </div>
                      {isRecent && (
                        <span className={cn(
                          "text-xs font-semibold px-2 py-1 rounded",
                          isSelected 
                            ? "bg-primary-foreground/20 text-primary-foreground" 
                            : "bg-accent/20 text-accent"
                        )}>
                          RECENT
                        </span>
                      )}
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
            <span><kbd className="px-2 py-1 bg-background border-2 border-foreground rounded font-mono">ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    </>
  );
}
