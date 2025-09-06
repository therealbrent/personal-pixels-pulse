import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background" role="banner" aria-label="Site header">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Full-width shadow container - spans viewport edge to edge */}
      <div className="w-screen shadow-neo-md bg-background" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        <nav className="w-full max-w-none" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20 px-4 max-w-7xl mx-auto">
            {/* Left: BRENT SUMMERS - Home Link */}
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-black text-primary hover:text-primary/80 transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] flex items-center"
              role="banner"
              aria-label="Navigate to home page"
            >
              BRENT SUMMERS
            </Link>

            {/* Right: Navigation Links */}
            <div className="flex items-center gap-4">
              <a 
                href="/llms.txt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg md:text-xl font-bold text-foreground border-4 border-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] flex items-center"
                aria-label="View LLMs.txt file - Opens in new tab"
              >
                LLMs.txt
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}