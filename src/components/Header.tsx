import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-neo-md w-full border-b-[6px] border-foreground relative overflow-hidden" role="banner" aria-label="Site header">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Geometric brutalist accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Hot Pink square - top left */}
        <div 
          className="absolute top-3 left-[140px] w-6 h-6 bg-accent border-2 border-foreground rotate-45 opacity-70 animate-[pulse_13s_ease-in-out_infinite]"
        />
        {/* Mustard triangle - top right */}
        <div 
          className="absolute top-4 right-[180px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary opacity-60 animate-[pulse_13s_ease-in-out_infinite_3s]"
        />
        {/* Small Onyx square - left side */}
        <div 
          className="absolute bottom-3 left-8 w-4 h-4 border-2 border-foreground -rotate-12 opacity-40"
        />
      </div>

      <nav className="w-full relative z-10" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 px-4 max-w-7xl mx-auto">
          {/* Left: BRENT SUMMERS with geometric hover effect */}
          <div className="flex items-center gap-4 relative group">
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-black text-foreground hover:text-primary transition-all duration-300 focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] flex items-center relative"
              aria-label="Navigate to home page"
            >
              BRENT SUMMERS
              {/* Hover accent - appears on brand hover */}
              <div 
                className="absolute -bottom-1 -left-2 w-6 h-6 bg-primary border-2 border-foreground rotate-45 opacity-0 group-hover:opacity-80 transition-all duration-300 -z-10"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Right: LLMs.txt Link - Filled Mustard Button */}
          <div className="flex items-center gap-4">
            <a 
              href="/llms.txt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative text-lg md:text-xl font-bold text-primary-foreground bg-primary border-4 border-foreground px-6 py-3 hover:bg-primary/90 hover:shadow-neo-sm transition-all duration-200 focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] flex items-center group overflow-visible"
              aria-label="View LLMs.txt file - Opens in new tab"
            >
              LLMs.txt
              {/* Hot Pink geometric overlay accent */}
              <div 
                className="absolute -top-2 -right-2 w-4 h-4 bg-accent border-2 border-foreground rotate-45 opacity-0 group-hover:opacity-90 transition-all duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}