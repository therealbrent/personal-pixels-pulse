import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV = [
  { label: "Work", to: "/v2/work" },
  { label: "Ideas", to: "/v2/ideas" },
  { label: "Speaking", to: "/v2/speaking" },
  { label: "About", to: "/v2/about" },
];

export function V2Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-4 border-foreground">
      <a href="#v2-main" className="skip-to-content">
        Skip to main content
      </a>
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link
            to="/v2"
            className="text-lg md:text-xl font-black tracking-tight text-foreground uppercase"
          >
            Brent Summers
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/v2/contact"
              className="bg-foreground text-background px-5 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden border-2 border-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest"
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div id="v2-mobile-nav" className="md:hidden pb-6 flex flex-col gap-1">
            {[...NAV, { label: "Contact", to: "/v2/contact" }].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="py-3 border-t-2 border-foreground/20 text-base font-bold uppercase tracking-widest text-foreground justify-start"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export function V2Footer() {
  return (
    <footer className="bg-foreground text-background border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xl font-black uppercase tracking-tight">Brent Summers</p>
          <p className="mt-3 text-sm opacity-80 leading-relaxed">
            Enterprise AI + GTM Transformation
            <br />
            San Diego, California
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end items-start">
          {[...NAV, { label: "Contact", to: "/v2/contact" }].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/brentjsummers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pb-12">
        <p className="text-xs opacity-60 max-w-2xl leading-relaxed">
          Views expressed here are my own and do not necessarily represent those of my employer.
        </p>
        <p className="text-xs opacity-60 mt-3">© {new Date().getFullYear()} Brent Summers.</p>
      </div>
    </footer>
  );
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <V2Nav />
      <main id="v2-main" className="flex-1">
        {children}
      </main>
      <V2Footer />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-6">{children}</p>
  );
}

export function Section({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-20 md:py-28 ${className}`} {...rest}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">{children}</div>
    </section>
  );
}