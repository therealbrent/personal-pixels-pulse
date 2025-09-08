import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Leadership principles data with left-to-right progression
const principlesData = [
  {
    title: "Empathy fuels innovation",
    condensed: "EMPATHY FUELS INNOVATION",
    fullText: "Understanding users, customers, and teammates isn't soft—it's the spark for progress.",
    color: "mustard",
    bgColor: "hsl(43, 100%, 52%)", // Primary Mustard from design system
    shadowColor: "hsl(43, 100%, 42%)",
    position: "left"
  },
  {
    title: "Transformation must land", 
    condensed: "TRANSFORMATION MUST LAND",
    fullText: "Ideas matter when they shift reality. I make big bets tangible.",
    color: "hotpink",
    bgColor: "hsl(328, 87%, 54%)", // Accent Hot Pink from design system
    shadowColor: "hsl(328, 87%, 44%)",
    position: "left-center"
  },
  {
    title: "Data earns decisions",
    condensed: "DATA EARNS DECISIONS",
    fullText: "Gut sparks ideas. Evidence unlocks investment and trust.",
    color: "onyx",
    bgColor: "hsl(0, 0%, 15%)", // Secondary Onyx from design system
    shadowColor: "hsl(0, 0%, 5%)",
    position: "center"
  },
  {
    title: "Collaboration multiplies force",
    condensed: "COLLABORATION MULTIPLIES FORCE",
    fullText: "Silos kill momentum. I break them down.",
    color: "oxblood", 
    bgColor: "hsl(2, 66%, 29%)", // Destructive Oxblood from design system
    shadowColor: "hsl(2, 66%, 19%)",
    position: "right-center"
  },
  {
    title: "Play the long game",
    condensed: "PLAY THE LONG GAME",
    fullText: "Today's wins should compound into tomorrow's advantage.",
    color: "cobalt",
    bgColor: "hsl(220, 100%, 59%)", // Focus Cobalt from design system  
    shadowColor: "hsl(220, 100%, 49%)",
    position: "right"
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
  <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 bg-foreground relative overflow-hidden">
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
        <span className="block text-background drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
          LEADERSHIP THAT SPANS
        </span>
        <span className="block mt-4 drop-shadow-[4px_4px_0px_hsl(var(--foreground))]">
          <span style={{ color: 'hsl(43, 100%, 52%)' }}>VISION</span>
          <span className="text-background"> & </span>
          <span style={{ color: 'hsl(220, 100%, 59%)' }}>EXECUTION</span>
        </span>
      </h1>
      
      {/* Thin mustard line */}
      <div className="w-full h-1 bg-primary my-12 shadow-[0_4px_0px_hsl(var(--foreground))]" />
      
      <p className="text-xl md:text-3xl text-background font-bold mb-16 uppercase tracking-wide">
        Spotting trends and building bridges that unlock capability
      </p>
    </div>
  </section>
);

// Structural beam component that contains text
interface StructuralBeamProps {
  title: string;
  condensed: string;
  fullText: string;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  color: string;
  bgColor: string;
  shadowColor: string;
  position: string;
}

const StructuralBeam: React.FC<StructuralBeamProps> = ({ 
  title, 
  condensed, 
  fullText,
  index, 
  isActive, 
  isExpanded, 
  onToggle,
  color,
  bgColor,
  shadowColor,
  position
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
          "mx-auto transition-all duration-500 ease-out border-4 border-foreground relative overflow-hidden group-hover:scale-105 group-hover:shadow-2xl",
          beamHeight,
          beamWidth
        )}
        style={{
          backgroundColor: isActive ? bgColor : 'transparent',
          boxShadow: isActive ? `12px 12px 0px ${shadowColor}` : 'none',
          transitionDelay: isActive ? `${index * 200}ms` : '0ms'
        }}
      >
        {/* Text content embedded inside the beam */}
        <div 
          id={`beam-content-${index}`}
          className={cn(
            "absolute inset-2 flex flex-col justify-center items-center text-center transition-all duration-500",
            isActive ? "opacity-100 delay-700" : "opacity-0"
          )}
        >
          {/* Always visible headline - no obstructing number */}
          <h3 className="text-base font-black leading-tight text-white transform -rotate-90 whitespace-nowrap uppercase tracking-tight">
            {condensed}
          </h3>
        </div>
        
        {/* Expanded detail text - appears as overlay card */}
        {isExpanded && (
          <div className="absolute -top-4 left-full ml-4 bg-background border-4 border-foreground p-4 shadow-[8px_8px_0px_hsl(var(--foreground))] z-50 w-64">
            <p className="text-sm font-bold text-foreground leading-tight">
              {fullText}
            </p>
          </div>
        )}
        
        {/* Glow effect on hover */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none",
            isActive && "animate-pulse"
          )}
          style={{
            background: `radial-gradient(circle, ${bgColor}80 0%, transparent 70%)`
          }}
        />
      </div>
    </div>
  );
};

// Bridge construction section component
const BridgeConstructionSection: React.FC = () => {
  const [activeBeam, setActiveBeam] = useState(-1); // Start with no beams active
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
      const viewportHeight = window.innerHeight;
      
      // Start animation when section is 50% visible, ensure first pillar animates in
      const scrollProgress = Math.max(0, Math.min(1, 
        (-rect.top + viewportHeight * 0.5) / (sectionHeight - viewportHeight)
      ));
      
      // Map progress to beam index, starting from -1 so first beam animates in
      const newActiveBeam = Math.floor(scrollProgress * (principlesData.length + 1)) - 1;
      
      setActiveBeam(Math.max(-1, Math.min(newActiveBeam, principlesData.length - 1)));
      
      // Set background color mode based on active beam
      const currentPrinciple = principlesData[Math.max(0, newActiveBeam)] || principlesData[0];
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
                condensed={principle.condensed}
                fullText={principle.fullText}
                index={index}
                isActive={true}
                isExpanded={expandedBeam === index}
                onToggle={() => toggleBeam(index)}
                color={principle.color}
                bgColor={principle.bgColor}
                shadowColor={principle.shadowColor}
                position={principle.position}
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
              PRINCIPLES THAT
              <br />
              CARRY WEIGHT
            </h2>
            
            {/* Bridge span visualization */}
            <div className="relative mb-16 max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <div className="text-3xl font-black drop-shadow-[2px_2px_0px_hsl(var(--foreground))]" style={{ color: 'hsl(43, 100%, 52%)' }}>
                  VISION
                </div>
                <div className="text-3xl font-black drop-shadow-[2px_2px_0px_hsl(var(--foreground))]" style={{ color: 'hsl(220, 100%, 59%)' }}>
                  EXECUTION
                </div>
              </div>
              
              {/* Left-to-right progressive bridge span */}
              <div className="relative w-full h-3 mb-8">
                {/* Foundation anchors - solid colors, no gradient */}
                <div 
                  className="absolute left-0 top-0 w-8 h-8 border-4 border-foreground -mt-2 shadow-[4px_4px_0px_hsl(var(--foreground))]"
                  style={{ backgroundColor: 'hsl(43, 100%, 52%)' }}
                />
                <div 
                  className="absolute right-0 top-0 w-8 h-8 border-4 border-foreground -mt-2 shadow-[4px_4px_0px_hsl(var(--foreground))]"
                  style={{ backgroundColor: 'hsl(220, 100%, 59%)' }}
                />
                
                {/* Progressive gradient bridge deck - starts from zero, more yellow/blue */}
                {activeBeam >= 0 && (
                  <div 
                    className="h-full border-4 border-foreground shadow-[0_8px_0px_hsl(var(--foreground))] transition-all duration-1000 ease-out origin-left"
                    style={{
                      width: `${Math.min(100, (activeBeam + 1) * 20)}%`,
                      transformOrigin: 'left center',
                      background: `linear-gradient(90deg, 
                        hsl(43, 100%, 52%) 0%, 
                        hsl(43, 100%, 56%) ${activeBeam >= 1 ? '15%' : '100%'}, 
                        hsl(328, 87%, 54%) ${activeBeam >= 1 ? '35%' : '100%'}, 
                        hsl(0, 0%, 15%) ${activeBeam >= 2 ? '50%' : '100%'}, 
                        hsl(2, 66%, 29%) ${activeBeam >= 3 ? '65%' : '100%'}, 
                        hsl(220, 100%, 56%) ${activeBeam >= 4 ? '85%' : '100%'}, 
                        hsl(220, 100%, 59%) ${activeBeam >= 4 ? '100%' : '100%'})`
                    }}
                  />
                )}
                
                {/* Completion stabilizing effect */}
                {activeBeam >= principlesData.length - 1 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                )}
              </div>
            </div>
          </div>
          
          {/* Structural beams container */}
          <div className="flex justify-center items-end gap-4 md:gap-8 min-h-[400px]">
            {principlesData.map((principle, index) => (
              <StructuralBeam
                key={index}
                title={principle.title}
                condensed={principle.condensed}
                fullText={principle.fullText}
                index={index}
                isActive={index <= activeBeam}
                isExpanded={expandedBeam === index}
                onToggle={() => {
                  // Only allow interaction after bridge is complete
                  if (activeBeam >= principlesData.length - 1) {
                    toggleBeam(index);
                  }
                }}
                color={principle.color}
                bgColor={principle.bgColor}
                shadowColor={principle.shadowColor}
                position={principle.position}
              />
            ))}
          </div>
          
          {/* Active principle display - now interactive foundation */}
          {activeBeam >= 0 && activeBeam < principlesData.length && (
            <div className="text-center mt-16">
              <div 
                className="border-4 border-foreground p-8 shadow-[8px_8px_0px_hsl(var(--foreground))] max-w-2xl mx-auto transition-all duration-500 min-h-[120px] flex items-center justify-center"
                style={{
                  backgroundColor: activeBeam >= principlesData.length - 1 && expandedBeam !== null 
                    ? principlesData[expandedBeam].bgColor 
                    : activeBeam >= 0 ? principlesData[activeBeam].bgColor : 'hsl(0, 0%, 50%)'
                }}
              >
                {activeBeam >= principlesData.length - 1 && expandedBeam !== null ? (
                  <div className="text-center">
                    <h3 className="text-2xl md:text-4xl font-black mb-4 text-white tracking-tight">
                      {principlesData[expandedBeam].condensed}
                    </h3>
                    <p className="text-lg md:text-xl font-bold text-white">
                      {principlesData[expandedBeam].fullText}
                    </p>
                  </div>
                ) : activeBeam >= principlesData.length - 1 ? (
                  <div className="text-center">
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                      CLICK A PILLAR TO EXPLORE
                    </h3>
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
                      {principlesData[activeBeam].title.toUpperCase()}
                    </h3>
                    <p className="text-lg md:text-xl font-bold text-foreground">
                      {principlesData[activeBeam].fullText}
                    </p>
                  </div>
                )}
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