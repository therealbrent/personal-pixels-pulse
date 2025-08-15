import LastUpdated from './LastUpdated';

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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/brentsummers" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/therealbrent" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
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
            <a 
              href="https://contentstrategy.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-primary hover:text-primary-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xl">FULL STACK CONTENT</h4>
                <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <p className="text-sm opacity-80">Newsletter</p>
            </a>

            {/* 200 MAX */}
            <a 
              href="https://in200max.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-background/10 text-background border-2 border-background/30 p-6 transform hover:bg-destructive hover:text-destructive-foreground hover:border-background hover:border-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xl">200 MAX</h4>
                <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-sm opacity-80">Platform</p>
            </a>
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