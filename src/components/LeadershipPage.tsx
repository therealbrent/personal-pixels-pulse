import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Leadership principles data with color assignments
const principlesData = [
  {
    title: "Empathy fuels innovation",
    summary: "Understanding users, customers, and teammates isn't soft—it's the spark for progress.",
    color: "accent", // hot pink
    bgClass: "bg-accent/20"
  },
  {
    title: "Transformation must land",
    summary: "Ideas matter when they shift reality. I make big bets tangible.",
    color: "primary", // mustard
    bgClass: "bg-primary/20"
  },
  {
    title: "Data earns decisions",
    summary: "Gut sparks ideas. Evidence unlocks investment and trust.",
    color: "destructive", // crimson
    bgClass: "bg-destructive/20"
  },
  {
    title: "Collaboration is a force multiplier",
    summary: "Silos kill momentum. I break them down.",
    color: "split", // dual color
    bgClass: "bg-gradient-to-r from-accent/20 to-primary/20"
  },
  {
    title: "Play the long game",
    summary: "Today's wins should compound into tomorrow's advantage.",
    color: "timeless", // gradient shift
    bgClass: "bg-gradient-to-r from-foreground/10 to-background"
  }
];

// Skip to content link component
const SkipToContent: React.FC = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 z-50 border-4 border-foreground"
  >
    Skip to main content
  </a>
);

// Hero section component with aggressive Neo-brutalist design
const HeroSection: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-foreground relative overflow-hidden">
    {/* Grid background pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
    
    <div className="text-center max-w-6xl mx-auto relative z-10">
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tight">
        <span className="block text-accent drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
          I LEAD AT THE
        </span>
        <span className="block text-primary drop-shadow-[4px_4px_0px_hsl(var(--foreground))] mt-4">
          INTERSECTION
        </span>
        <span className="block text-background drop-shadow-[4px_4px_0px_hsl(var(--accent))] mt-4">
          OF VISION &
        </span>
        <span className="block text-background drop-shadow-[4px_4px_0px_hsl(var(--destructive))] mt-4">
          EXECUTION
        </span>
      </h1>
      
      {/* Thin mustard line */}
      <div className="w-full h-1 bg-primary my-12 shadow-[0_4px_0px_hsl(var(--foreground))]" />
      
      <p className="text-xl md:text-3xl text-background font-bold mb-16 uppercase tracking-wide">
        Spotting trends and building bridges that unlock capability
      </p>
      
      <Link 
        to="#bridge-construction"
        className="inline-flex bg-accent text-accent-foreground px-12 py-6 text-xl font-black border-4 border-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 shadow-[8px_8px_0px_hsl(var(--foreground))] uppercase tracking-wide"
        aria-label="Watch the bridge construction"
      >
        BUILD THE BRIDGE
      </Link>
    </div>
  </section>
);

// Structural beam component that contains text
interface StructuralBeamProps {
  title: string;
  summary: string;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  color: string;
  bgClass: string;
}

const StructuralBeam: React.FC<StructuralBeamProps> = ({ 
  title, 
  summary, 
  index, 
  isActive, 
  isExpanded, 
  onToggle,
  color,
  bgClass
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
    if (e.key === 'Escape' && isExpanded) {
      onToggle();
    }
  };

  const beamHeight = isActive ? 'h-96' : 'h-0';
  const beamWidth = isExpanded ? 'w-32' : 'w-20';
  
  return (
    <div 
      className={cn(
        "relative transition-all duration-300 ease-out cursor-pointer group",
        "focus-within:outline-4 focus-within:outline-accent focus-within:outline-offset-4"
      )}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-controls={`beam-content-${index}`}
    >
      {/* Vertical structural beam */}
      <div 
        className={cn(
          "mx-auto transition-all duration-500 ease-out border-4 border-foreground relative overflow-hidden",
          beamHeight,
          beamWidth,
          isActive && "shadow-[8px_8px_0px_hsl(var(--foreground))]",
          color === "accent" && "bg-accent",
          color === "primary" && "bg-primary", 
          color === "destructive" && "bg-destructive",
          color === "split" && "bg-gradient-to-b from-accent to-primary",
          color === "timeless" && "bg-gradient-to-b from-foreground to-muted"
        )}
        style={{
          transitionDelay: isActive ? `${index * 150}ms` : '0ms'
        }}
      >
        {/* Text content inside the beam */}
        <div 
          id={`beam-content-${index}`}
          className={cn(
            "absolute inset-4 flex flex-col justify-center text-center transition-all duration-300",
            isActive ? "opacity-100 delay-500" : "opacity-0"
          )}
        >
          <div className="text-xs font-black mb-2 text-foreground tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </div>
          
          <h3 className="text-lg font-black mb-2 leading-tight text-foreground transform -rotate-90 whitespace-nowrap">
            {title.toUpperCase()}
          </h3>
          
          {isExpanded && (
            <div className="text-xs text-foreground font-bold transform -rotate-90 whitespace-nowrap mt-4">
              {summary}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Bridge construction section component
const BridgeConstructionSection: React.FC = () => {
  const [activeBeam, setActiveBeam] = useState(0);
  const [expandedBeam, setExpandedBeam] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState('default');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const section = document.getElementById('bridge-construction');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));
      const newActiveBeam = Math.floor(scrollProgress * principlesData.length);
      
      setActiveBeam(Math.min(newActiveBeam, principlesData.length - 1));
      
      // Set background color mode based on active beam
      const currentPrinciple = principlesData[newActiveBeam] || principlesData[0];
      setBackgroundMode(currentPrinciple.color);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const toggleBeam = (index: number) => {
    setExpandedBeam(expandedBeam === index ? null : index);
  };

  if (prefersReducedMotion) {
    // Static grid for reduced motion preference
    return (
      <section id="bridge-construction" className="py-16 bg-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-background tracking-tight">
              STRUCTURAL PRINCIPLES
            </h2>
            <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
              <div className="text-3xl font-black text-primary">VISION</div>
              <div className="flex-1 h-2 bg-background mx-8 shadow-[0_4px_0px_hsl(var(--primary))]"></div>
              <div className="text-3xl font-black text-destructive">EXECUTION</div>
            </div>
          </div>
          
          <div className="flex justify-center items-end gap-8 mb-16">
            {principlesData.map((principle, index) => (
              <StructuralBeam
                key={index}
                title={principle.title}
                summary={principle.summary}
                index={index}
                isActive={true}
                isExpanded={expandedBeam === index}
                onToggle={() => toggleBeam(index)}
                color={principle.color}
                bgClass={principle.bgClass}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Dynamic background based on active beam
  const getBackgroundClass = () => {
    switch (backgroundMode) {
      case 'accent':
        return 'bg-accent/30';
      case 'primary':
        return 'bg-primary/30';
      case 'destructive':
        return 'bg-destructive/30';
      case 'split':
        return 'bg-gradient-to-r from-accent/20 to-primary/20';
      case 'timeless':
        return 'bg-gradient-to-b from-foreground to-muted';
      default:
        return 'bg-foreground';
    }
  };

  return (
    <section 
      id="bridge-construction" 
      className={cn(
        "min-h-[600vh] relative transition-all duration-700",
        getBackgroundClass()
      )}
    >
      {/* Progress indicator */}
      <div className="fixed top-4 right-4 z-40 bg-foreground border-4 border-background px-4 py-3">
        <span className="text-lg font-black text-background" aria-live="polite">
          {activeBeam + 1} / {principlesData.length}
        </span>
      </div>
      
      <div className="sticky top-0 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Enhanced grid pattern that "snaps" */}
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-300",
            activeBeam > 0 ? "opacity-20" : "opacity-10"
          )}
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--background)) 2px, transparent 2px),
              linear-gradient(90deg, hsl(var(--background)) 2px, transparent 2px)
            `,
            backgroundSize: activeBeam > 0 ? '60px 60px' : '40px 40px'
          }}
        />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-8xl font-black mb-8 text-background tracking-tight drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
              BRIDGE CONSTRUCTION
            </h2>
            
            {/* Bridge span visualization */}
            <div className="relative mb-16 max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <div className="text-3xl font-black text-background drop-shadow-[2px_2px_0px_hsl(var(--foreground))]">
                  VISION
                </div>
                <div className="text-3xl font-black text-background drop-shadow-[2px_2px_0px_hsl(var(--foreground))]">
                  EXECUTION
                </div>
              </div>
              
              {/* Horizontal bridge span */}
              <div className="w-full h-3 bg-background border-4 border-foreground shadow-[0_8px_0px_hsl(var(--foreground))] mb-8" />
            </div>
          </div>
          
          {/* Structural beams container */}
          <div className="flex justify-center items-end gap-4 md:gap-8 min-h-[400px]">
            {principlesData.map((principle, index) => (
              <StructuralBeam
                key={index}
                title={principle.title}
                summary={principle.summary}
                index={index}
                isActive={index <= activeBeam}
                isExpanded={expandedBeam === index}
                onToggle={() => toggleBeam(index)}
                color={principle.color}
                bgClass={principle.bgClass}
              />
            ))}
          </div>
          
          {/* Active principle display */}
          {activeBeam < principlesData.length && (
            <div className="text-center mt-16">
              <div className="bg-background border-4 border-foreground p-8 shadow-[8px_8px_0px_hsl(var(--foreground))] max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
                  {principlesData[activeBeam].title.toUpperCase()}
                </h3>
                <p className="text-lg md:text-xl font-bold text-foreground">
                  {principlesData[activeBeam].summary}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Manifesto/Outro section component
const ManifestoSection: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-foreground relative">
    <div className="text-center max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-8xl font-black mb-12 text-background tracking-tight leading-[0.9]">
        THESE ARE MY
        <br />
        <span className="text-accent drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
          LEADERSHIP
        </span>
        <br />
        <span className="text-primary drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
          PRINCIPLES
        </span>
      </h2>
      
      <div className="w-full h-2 bg-background my-12 shadow-[0_4px_0px_hsl(var(--accent))]" />
      
      <p className="text-xl md:text-3xl font-black text-background mb-16 tracking-wide">
        THIS ISN'T A PHILOSOPHY DECK—IT'S MY OPERATING SYSTEM.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link 
          to="/design-case-studies"
          className="bg-primary text-primary-foreground px-12 py-6 text-xl font-black border-4 border-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 shadow-[8px_8px_0px_hsl(var(--background))] uppercase tracking-wide"
        >
          CASE STUDIES
        </Link>
        
        <Link 
          to="/speaking-media"
          className="bg-accent text-accent-foreground px-12 py-6 text-xl font-black border-4 border-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 shadow-[8px_8px_0px_hsl(var(--background))] uppercase tracking-wide"
        >
          SPEAKING
        </Link>
      </div>
    </div>
  </section>
);

// Contact section component
const ContactSection: React.FC = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    {/* Grid background */}
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    />
    
    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
      <h2 className="text-4xl md:text-7xl font-black mb-12 text-foreground tracking-tight leading-tight">
        HAVE A HARD
        <br />
        <span className="text-destructive drop-shadow-[2px_2px_0px_hsl(var(--foreground))]">
          PROBLEM
        </span>
        <br />
        WORTH CROSSING?
      </h2>
      
      <a 
        href="https://www.linkedin.com/in/brentjsummers"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-destructive text-destructive-foreground px-16 py-8 text-2xl font-black border-4 border-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 shadow-[12px_12px_0px_hsl(var(--foreground))] uppercase tracking-wide inline-flex items-center"
      >
        LET'S CONNECT
      </a>
    </div>
  </section>
);

// Main Leadership page component
const LeadershipPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      
      <main id="main-content">
        <HeroSection />
        <BridgeConstructionSection />
        <ManifestoSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default LeadershipPage;