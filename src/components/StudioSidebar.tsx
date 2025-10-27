import { Home, Briefcase, Users, Mic, Calendar, Palette, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useNavigationSound } from '@/hooks/useNavigationSound';

const navigationItems = [
  { 
    title: 'Home', 
    url: '/', 
    icon: Home,
    external: false 
  },
  { 
    title: 'Design Case Studies', 
    url: '/design-case-studies', 
    icon: Palette,
    external: false 
  },
  { 
    title: 'Leadership', 
    url: '/leadership', 
    icon: Briefcase,
    external: false 
  },
  { 
    title: 'Speaking', 
    url: '/speaking', 
    icon: Mic,
    external: false 
  },
  { 
    title: 'Designer in Residence (Coming Soon)', 
    url: '#', 
    icon: Users,
    external: false,
    comingSoon: true,
    disabled: true
  },
  { 
    title: 'Schedule a Call', 
    url: 'https://outlook.office.com/bookwithme/user/f752142364414ef39fe29066ebb21219%40qti.qualcomm.com?anonymous&ismsaljsauthenabled=true', 
    icon: Calendar,
    external: true 
  },
];

export function StudioSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const { playSound } = useNavigationSound();

  const isActive = (path: string) => {
    if (path === '/' || path === '#') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 border-r-4 border-foreground",
        "bg-gradient-to-b from-primary/5 via-background to-accent/5",
        "relative",
        open ? "w-64" : "w-20"
      )}
      collapsible="icon"
    >
      {/* Ambient animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.1), transparent 70%), radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.1), transparent 70%)',
          animationDuration: '4s'
        }}
        aria-hidden="true"
      />
      
      <SidebarContent className="pt-20 relative z-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.url);
                const isDisabled = item.disabled || false;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild={!isDisabled}
                      className={cn(
                        "relative group h-14 transition-all duration-200",
                        !isDisabled && "hover:bg-primary/20 hover:scale-105 hover:rotate-1",
                        active && "bg-primary/30 border-l-4 border-accent shadow-neo-xs",
                        !active && "border-l-4 border-transparent",
                        isDisabled && "opacity-60 cursor-not-allowed bg-muted/20",
                        "focus:ring-4 focus:ring-focus-ring focus:ring-offset-2"
                      )}
                      tooltip={open ? undefined : item.title}
                      disabled={isDisabled}
                    >
                      {isDisabled ? (
                        <div className="flex items-center gap-3 w-full px-3">
                          <Icon 
                            className="text-muted-foreground flex-shrink-0" 
                            size={24} 
                            strokeWidth={2.5}
                          />
                          {open && (
                            <span className="font-bold text-sm text-muted-foreground truncate">
                              {item.title}
                            </span>
                          )}
                        </div>
                      ) : item.external ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full px-3"
                          aria-label={`${item.title} - Opens in new tab`}
                          onClick={playSound}
                        >
                          <Icon 
                            className={cn(
                              "transition-all duration-200 flex-shrink-0",
                              active ? "text-accent" : "text-foreground",
                              "group-hover:rotate-3 group-hover:scale-110"
                            )} 
                            size={24} 
                            strokeWidth={2.5}
                          />
                          {open && (
                            <span className={cn(
                              "font-bold text-sm truncate",
                              active ? "text-accent" : "text-foreground"
                            )}>
                              {item.title}
                            </span>
                          )}
                        </a>
                      ) : (
                        <NavLink 
                          to={item.url} 
                          end={item.url === '/'}
                          className="flex items-center gap-3 w-full px-3"
                          aria-label={item.title}
                          onClick={playSound}
                        >
                          <Icon 
                            className={cn(
                              "transition-all duration-200 flex-shrink-0",
                              active ? "text-accent" : "text-foreground",
                              "group-hover:rotate-3 group-hover:scale-110"
                            )} 
                            size={24} 
                            strokeWidth={2.5}
                          />
                          {open && (
                            <span className={cn(
                              "font-bold text-sm truncate",
                              active ? "text-accent" : "text-foreground"
                            )}>
                              {item.title}
                            </span>
                          )}
                        </NavLink>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// Mobile Bottom Navigation
export function MobileBottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showMore, setShowMore] = useState(false);
  const { playSound } = useNavigationSound();

  const isActive = (path: string) => {
    if (path === '/' || path === '#') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Mobile Bottom Nav - Only visible on mobile */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-primary/10 to-background border-t-4 border-foreground shadow-neo-lg"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Ambient gradient */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 0% 100%, hsl(var(--accent) / 0.15), transparent 50%), radial-gradient(circle at 100% 100%, hsl(var(--primary) / 0.15), transparent 50%)'
          }}
          aria-hidden="true"
        />
        
        <div className="flex items-center justify-around h-16 px-1 relative z-10">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.url);
            const isDisabled = item.disabled || false;
            const isExternal = item.external || false;
            
            if (isDisabled) {
              return (
                <button
                  key={item.title}
                  disabled
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[64px] flex-1 max-w-[80px]",
                    "opacity-50 cursor-not-allowed",
                    "focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  )}
                  aria-label={item.title}
                  title={item.title}
                >
                  <Icon size={20} strokeWidth={2.5} className="flex-shrink-0" />
                  <span className="text-[10px] font-bold truncate w-full text-center leading-tight">
                    Coming Soon
                  </span>
                </button>
              );
            }
            
            if (isExternal) {
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[64px] flex-1 max-w-[80px]",
                    active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-primary/20 active:bg-primary/30",
                    "focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  )}
                  aria-label={`${item.title} - Opens in new tab`}
                  title={item.title}
                  onClick={playSound}
                >
                  <Icon size={20} strokeWidth={2.5} className="flex-shrink-0" />
                  <span className="text-[10px] font-bold truncate w-full text-center leading-tight">
                    {item.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </a>
              );
            }
            
            return (
              <NavLink
                key={item.title}
                to={item.url}
                end={item.url === '/'}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[64px] flex-1 max-w-[80px]",
                  active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-primary/20 active:bg-primary/30",
                  "focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                )}
                aria-label={item.title}
                title={item.title}
                onClick={playSound}
              >
                <Icon size={20} strokeWidth={2.5} className="flex-shrink-0" />
                <span className="text-[10px] font-bold truncate w-full text-center leading-tight">
                  {item.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}
