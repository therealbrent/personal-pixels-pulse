import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Briefcase, Mic, FileText, Command, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Leadership', url: '/leadership', icon: Briefcase },
  { title: 'Speaking', url: '/speaking', icon: Mic },
  { title: 'LLMs.txt', url: '/llms.txt', icon: FileText },
];

interface AmbientContextBarProps {
  onOpenCommandPalette: () => void;
}

export function AmbientContextBar({ onOpenCommandPalette }: AmbientContextBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Context Bar */}
      <nav 
        className="hidden lg:flex fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b-4 border-foreground shadow-neo-sm transition-all duration-300"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        role="navigation"
        aria-label="Main navigation"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--primary) / 0.05) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url;
              
              return (
                <NavLink
                  key={item.url}
                  to={item.url}
                  end={item.url === '/'}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded transition-all duration-200 group relative",
                    "min-h-[44px]",
                    isActive 
                      ? "bg-accent text-accent-foreground shadow-neo-xs" 
                      : "hover:bg-primary/10 text-foreground",
                    "focus:ring-4 focus:ring-focus-ring focus:ring-offset-2"
                  )}
                  aria-label={item.title}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon 
                    size={isScrolled && !isExpanded ? 20 : 24} 
                    strokeWidth={2.5}
                    className={cn(
                      "transition-all duration-200 flex-shrink-0",
                      isActive && "text-accent-foreground"
                    )}
                  />
                  <span 
                    className={cn(
                      "font-bold text-sm transition-all duration-200 whitespace-nowrap",
                      (isScrolled && !isExpanded) ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
                    )}
                  >
                    {item.title}
                  </span>
                  
                  {/* Tooltip for collapsed state */}
                  {isScrolled && !isExpanded && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.title}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className={cn(
              "flex items-center gap-2 px-4 py-2 border-2 border-foreground rounded",
              "hover:bg-accent hover:text-accent-foreground hover:border-accent",
              "transition-all duration-200 min-h-[44px]",
              "focus:ring-4 focus:ring-focus-ring focus:ring-offset-2"
            )}
            aria-label="Open command palette (⌘K)"
          >
            <Command size={18} strokeWidth={2.5} />
            <span 
              className={cn(
                "font-mono text-sm font-bold transition-all duration-200",
                (isScrolled && !isExpanded) ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
              )}
            >
              ⌘K
            </span>
          </button>
        </div>

        {/* Ambient gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.1), transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.1), transparent 50%)',
          }}
          aria-hidden="true"
        />
      </nav>

      {/* Mobile Bottom Nav */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background border-t-4 border-primary shadow-neo-lg"
        role="navigation"
        aria-label="Mobile navigation"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--secondary)) 100%)',
        }}
      >
        {/* Ambient gradient */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 0% 100%, hsl(var(--accent) / 0.2), transparent 50%), radial-gradient(circle at 100% 100%, hsl(var(--primary) / 0.2), transparent 50%)',
          }}
          aria-hidden="true"
        />
        
        <div className="relative flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.url;
            
            return (
              <NavLink
                key={item.url}
                to={item.url}
                end={item.url === '/'}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[64px] flex-1",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-background hover:bg-background/10",
                  "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                )}
                aria-label={item.title}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={24} strokeWidth={2.5} className="flex-shrink-0" />
                <span className="text-[10px] font-bold truncate w-full text-center">
                  {item.title}
                </span>
              </NavLink>
            );
          })}
          
          {/* Search button for mobile */}
          <button
            onClick={onOpenCommandPalette}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[64px] flex-1",
              "text-background hover:bg-background/10",
              "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
            )}
            aria-label="Search"
          >
            <Command size={24} strokeWidth={2.5} className="flex-shrink-0" />
            <span className="text-[10px] font-bold">Search</span>
          </button>
        </div>
      </nav>
    </>
  );
}
