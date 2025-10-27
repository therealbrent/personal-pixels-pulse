import LastUpdated from './LastUpdated';
import { Icon } from './ui/icon';
import { ExternalLink } from './ui/ExternalLink';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Mic, Palette, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigationSound } from '@/hooks/useNavigationSound';

const navigationItems = [
  { 
    title: 'Home', 
    url: '/', 
    icon: Home,
  },
  { 
    title: 'Design Case Studies', 
    url: '/design-case-studies', 
    icon: Palette,
  },
  { 
    title: 'Leadership', 
    url: '/leadership', 
    icon: Briefcase,
  },
  { 
    title: 'Speaking', 
    url: '/speaking', 
    icon: Mic,
  },
  { 
    title: 'Designer in Residence (Coming Soon)', 
    url: '#', 
    icon: Users,
    disabled: true
  },
  { 
    title: 'Schedule a Call', 
    url: 'https://outlook.office.com/bookwithme/user/f752142364414ef39fe29066ebb21219%40qti.qualcomm.com?anonymous&ismsaljsauthenabled=true', 
    icon: Calendar,
    external: true 
  },
];

export default function Footer() {
  const { playSound } = useNavigationSound();
  
  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <nav 
          className="mb-12 pb-8 border-b border-background/20"
          aria-label="Main navigation"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isDisabled = item.disabled || false;
              const isExternal = item.external || false;
              
              if (isDisabled) {
                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-background/10 border-2 border-background/30 opacity-60 cursor-not-allowed"
                  >
                    <Icon size={32} strokeWidth={2.5} className="flex-shrink-0" />
                    <span className="font-bold text-sm md:text-base text-center leading-tight">
                      Coming Soon
                    </span>
                  </div>
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
                      "flex flex-col items-center justify-center gap-3 p-6",
                      "bg-background/10 border-2 border-background/30",
                      "hover:bg-accent hover:text-accent-foreground hover:border-background hover:border-4",
                      "hover:scale-105 transition-all duration-300 hover:shadow-neo-md",
                      "focus:ring-4 focus:ring-primary focus:ring-offset-2"
                    )}
                    aria-label={`${item.title} - Opens in new tab`}
                    onClick={playSound}
                  >
                    <Icon size={32} strokeWidth={2.5} className="flex-shrink-0" />
                    <span className="font-bold text-sm md:text-base text-center leading-tight">
                      {item.title}
                    </span>
                  </a>
                );
              }
              
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  end={item.url === '/'}
                  className={({ isActive }) => cn(
                    "flex flex-col items-center justify-center gap-3 p-6",
                    "bg-background/10 border-2 border-background/30",
                    isActive 
                      ? "bg-primary text-primary-foreground border-primary border-4 shadow-neo-sm" 
                      : "hover:bg-primary hover:text-primary-foreground hover:border-background hover:border-4",
                    "hover:scale-105 transition-all duration-300",
                    "focus:ring-4 focus:ring-primary focus:ring-offset-2"
                  )}
                  aria-label={item.title}
                  onClick={playSound}
                >
                  <Icon size={32} strokeWidth={2.5} className="flex-shrink-0" />
                  <span className="font-bold text-sm md:text-base text-center leading-tight">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </nav>
        {/* Upper Footer - Links Section */}
        <div className="relative mb-12 pb-8 border-b border-background/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Let's Connect</h3>
          <p className="text-lg mb-8 opacity-80 text-center">Did something spark your curiousity? I'd love to hear from you.</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/brentjsummers/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <Icon name="linkedin" size={24} />
            </a>
            <a href="https://x.com/brentsummers" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <Icon name="twitter" size={24} />
            </a>
            <a href="https://github.com/therealbrent" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <Icon name="github" size={24} />
            </a>
          </div>
          
          {/* Neo-brutalist link layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Speaking & Media */}
            <a 
              href="/speaking-media" 
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-accent hover:text-accent-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="absolute top-2 right-2 w-4 h-4 bg-background/30 group-hover:bg-background transform rotate-45"></div>
              <h4 className="text-xl font-bold mb-2">SPEAKING & MEDIA</h4>
              <p className="text-sm opacity-80">Talks, interviews, and media appearances</p>
            </a>

            {/* Full Stack Content */}
              <ExternalLink
                href="https://contentstrategy.substack.com/"
                variant="primary"
                className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-primary hover:text-primary-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group no-underline"
                showIcon={false}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl">FULL STACK CONTENT</h4>
                  <Icon name="plus" size={20} className="transform group-hover:rotate-12 transition-transform" />
                </div>
                <p className="text-sm opacity-80">Newsletter about content strategy</p>
              </ExternalLink>

            {/* 200 MAX */}
            <ExternalLink
              href="https://in200max.com/"
              variant="destructive"
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-destructive hover:text-destructive-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group no-underline"
              showIcon={false}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xl">200 MAX</h4>
                <Icon name="star" size={20} className="transform group-hover:rotate-45 transition-transform" />
              </div>
              <p className="text-sm opacity-80">Maximum clarity. Minimal fluff. Actionable insights in fewer than 200 words.</p>
            </ExternalLink>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-background/20 border-2 border-background/30 transform rotate-45 -translate-x-3 -translate-y-3"></div>
          <div className="absolute bottom-4 right-0 w-4 h-12 bg-background/20 border-2 border-background/30 transform skew-x-12"></div>
        </div>
        
        <div className="mt-8 pt-8 text-center">
          <LastUpdated />
          <p className="opacity-60">© {new Date().getFullYear()} Brent Summers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}