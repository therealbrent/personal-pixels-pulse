import LastUpdated from './LastUpdated';
import { Icon } from './ui/icon';
import { ExternalLink } from './ui/ExternalLink';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Leadership */}
            <a 
              href="/leadership" 
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-[hsl(var(--cobalt))] hover:text-[hsl(var(--cobalt-foreground))] hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group relative"
            >
              <div className="absolute top-2 right-2 w-4 h-4 bg-background/30 group-hover:bg-background transform rotate-45"></div>
              <h4 className="text-xl font-bold mb-2">LEADERSHIP</h4>
              <p className="text-sm opacity-80">Spotting trends, leading teams, and building new capabilities</p>
            </a>

            {/* Speaking & Media */}
            <a 
              href="/speaking-media" 
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-accent hover:text-accent-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group relative"
            >
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-background/30 group-hover:bg-background transform -rotate-12"></div>
              <h4 className="text-xl font-bold mb-2">SPEAKING & MEDIA</h4>
              <p className="text-sm opacity-80">Talks, interviews, and media appearances</p>
            </a>

            {/* Full Stack Content */}
              <ExternalLink
                href="https://contentstrategy.substack.com/"
                variant="primary"
                className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-primary hover:text-primary-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group no-underline relative"
                showIcon={false}
              >
                <div className="absolute top-2 left-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-background/30 group-hover:border-b-background"></div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl">FULL STACK CONTENT</h4>
                  <Icon name="external-link" size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-sm opacity-80">Newsletter about content strategy</p>
              </ExternalLink>

            {/* 200 MAX */}
            <ExternalLink
              href="https://in200max.com/"
              variant="destructive"
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-destructive hover:text-destructive-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group no-underline relative"
              showIcon={false}
            >
              <div className="absolute bottom-3 right-3 w-3 h-8 bg-background/30 group-hover:bg-background transform skew-x-12"></div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xl">200 MAX</h4>
                <Icon name="external-link" size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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