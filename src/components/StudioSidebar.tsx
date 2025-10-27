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
    title: 'Designer in Residence', 
    url: '/designer-in-residence', 
    icon: Users,
    external: false,
    comingSoon: true 
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

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 border-r-4 border-foreground bg-gradient-to-b from-background via-background to-primary/5",
        open ? "w-64" : "w-20"
      )}
      collapsible="icon"
    >
      <SidebarContent className="pt-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.url);
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative group h-14 transition-all duration-200",
                        "hover:bg-primary/10 hover:scale-105 hover:rotate-1",
                        active && "bg-primary/20 border-l-4 border-accent shadow-neo-xs",
                        !active && "border-l-4 border-transparent",
                        "focus:ring-4 focus:ring-focus-ring focus:ring-offset-2"
                      )}
                      tooltip={open ? undefined : item.title}
                    >
                      {item.external ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full px-3"
                          aria-label={`${item.title} - Opens in new tab`}
                        >
                          <Icon 
                            className={cn(
                              "transition-all duration-200",
                              active ? "text-accent" : "text-foreground",
                              "group-hover:rotate-3 group-hover:scale-110"
                            )} 
                            size={24} 
                            strokeWidth={2.5}
                          />
                          {open && (
                            <span className={cn(
                              "font-bold text-sm",
                              active ? "text-accent" : "text-foreground"
                            )}>
                              {item.title}
                            </span>
                          )}
                          {item.comingSoon && open && (
                            <span className="ml-auto flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                          )}
                        </a>
                      ) : (
                        <NavLink 
                          to={item.url} 
                          end={item.url === '/'}
                          className="flex items-center gap-3 w-full px-3"
                          aria-label={item.title}
                        >
                          <Icon 
                            className={cn(
                              "transition-all duration-200",
                              active ? "text-accent" : "text-foreground",
                              "group-hover:rotate-3 group-hover:scale-110"
                            )} 
                            size={24} 
                            strokeWidth={2.5}
                          />
                          {open && (
                            <span className={cn(
                              "font-bold text-sm",
                              active ? "text-accent" : "text-foreground"
                            )}>
                              {item.title}
                            </span>
                          )}
                          {item.comingSoon && open && (
                            <span className="ml-auto flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
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

  const primaryItems = navigationItems.slice(0, 4);
  const secondaryItems = navigationItems.slice(4);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Mobile Bottom Nav - Only visible on mobile */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t-4 border-foreground shadow-neo-lg"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.url);
            
            return (
              <NavLink
                key={item.title}
                to={item.url}
                end={item.url === '/'}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[56px]",
                  active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-primary/10",
                  "focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                )}
                aria-label={item.title}
              >
                <Icon size={20} strokeWidth={2.5} />
                <span className="text-xs font-bold truncate max-w-[50px]">
                  {item.title.split(' ')[0]}
                </span>
              </NavLink>
            );
          })}
          
          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-all duration-200 min-w-[56px]",
              showMore ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-primary/10",
              "focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
            )}
            aria-label="More menu"
            aria-expanded={showMore}
          >
            {showMore ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            <span className="text-xs font-bold">More</span>
          </button>
        </div>
      </nav>

      {/* More Menu Overlay */}
      {showMore && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowMore(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-8">
            {secondaryItems.map((item) => {
              const Icon = item.icon;
              
              return item.external ? (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full max-w-md p-4 bg-card border-4 border-foreground hover:bg-primary/10 transition-all duration-200 focus:ring-4 focus:ring-focus-ring"
                  onClick={() => setShowMore(false)}
                >
                  <Icon size={32} strokeWidth={2.5} className="text-accent" />
                  <div className="flex-1">
                    <span className="font-bold text-lg">{item.title}</span>
                    {item.comingSoon && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs bg-accent text-accent-foreground px-2 py-1 font-bold">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </a>
              ) : (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className="flex items-center gap-4 w-full max-w-md p-4 bg-card border-4 border-foreground hover:bg-primary/10 transition-all duration-200 focus:ring-4 focus:ring-focus-ring"
                  onClick={() => setShowMore(false)}
                >
                  <Icon size={32} strokeWidth={2.5} className="text-accent" />
                  <div className="flex-1">
                    <span className="font-bold text-lg">{item.title}</span>
                    {item.comingSoon && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs bg-accent text-accent-foreground px-2 py-1 font-bold">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
