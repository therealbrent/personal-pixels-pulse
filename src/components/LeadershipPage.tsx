import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Leadership principles data
const principlesData = [
  {
    title: "Empathy fuels innovation",
    summary: "Understanding users, customers, and teammates isn't soft—it's the spark for progress."
  },
  {
    title: "Transformation must land",
    summary: "Ideas matter when they shift reality. I make big bets tangible."
  },
  {
    title: "Data earns decisions",
    summary: "Gut sparks ideas. Evidence unlocks investment and trust."
  },
  {
    title: "Collaboration is a force multiplier",
    summary: "Silos kill momentum. I break them down."
  },
  {
    title: "Play the long game",
    summary: "Today's wins should compound into tomorrow's advantage."
  }
];

// Skip to content link component
const SkipToContent: React.FC = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 z-50 border-2 border-foreground"
  >
    Skip to main content
  </a>
);

// Bridge motif SVG component
const BridgeMotif: React.FC = () => (
  <svg 
    className="w-32 h-16 mx-auto mb-8" 
    viewBox="0 0 128 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Bridge deck */}
    <rect x="0" y="48" width="128" height="8" fill="currentColor" className="text-primary" />
    
    {/* Support beams */}
    <rect x="20" y="32" width="4" height="16" fill="currentColor" className="text-foreground" />
    <rect x="36" y="24" width="4" height="24" fill="currentColor" className="text-foreground" />
    <rect x="52" y="16" width="4" height="32" fill="currentColor" className="text-foreground" />
    <rect x="68" y="24" width="4" height="24" fill="currentColor" className="text-foreground" />
    <rect x="84" y="32" width="4" height="16" fill="currentColor" className="text-foreground" />
    
    {/* Anchor points */}
    <rect x="0" y="40" width="12" height="16" fill="currentColor" className="text-destructive" />
    <rect x="116" y="40" width="12" height="16" fill="currentColor" className="text-destructive" />
  </svg>
);

// Hero section component
const HeroSection: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-background">
    <div className="text-center max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
        I lead at the intersection of{' '}
        <span className="text-primary">vision</span> and{' '}
        <span className="text-destructive">execution</span>.
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
        Spotting trends and building bridges that unlock capability
      </p>
      
      <BridgeMotif />
      
      <Link 
        to="#bridge-model"
        className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-lg font-bold border-4 border-foreground hover:bg-primary/80 transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px]"
        aria-label="Learn about my leadership approach"
      >
        Explore My Approach
      </Link>
    </div>
  </section>
);

// Progress indicator component
const ProgressIndicator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="fixed top-4 right-4 z-40 bg-background border-2 border-foreground px-3 py-2">
    <span className="text-sm font-bold text-foreground" aria-live="polite">
      {current} / {total}
    </span>
  </div>
);

// Principle card component
interface PrincipleCardProps {
  title: string;
  summary: string;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ 
  title, 
  summary, 
  index, 
  isActive, 
  isExpanded, 
  onToggle 
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

  return (
    <div 
      className={cn(
        "bg-background border-4 border-foreground p-6 transition-all duration-200 cursor-pointer",
        "focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-4",
        isActive && "shadow-neo-md",
        isExpanded && "bg-primary text-primary-foreground border-primary"
      )}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-controls={`principle-detail-${index}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className={cn(
          "w-4 h-4 border-2 transition-transform duration-200",
          isExpanded ? "rotate-45 border-primary-foreground" : "border-foreground"
        )} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-3">
        {title}
      </h3>
      
      <div 
        id={`principle-detail-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-base md:text-lg">
          {summary}
        </p>
      </div>
    </div>
  );
};

// Bridge model section component
const BridgeModelSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
      const section = document.getElementById('bridge-model');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));
      const newActiveCard = Math.floor(scrollProgress * principlesData.length);
      
      setActiveCard(Math.min(newActiveCard, principlesData.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  if (prefersReducedMotion) {
    // Static grid for reduced motion preference
    return (
      <section id="bridge-model" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              The Bridge Model
            </h2>
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-bold text-primary">Vision</div>
              <div className="flex-1 h-2 bg-foreground mx-8"></div>
              <div className="text-2xl font-bold text-destructive">Execution</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {principlesData.map((principle, index) => (
              <PrincipleCard
                key={index}
                title={principle.title}
                summary={principle.summary}
                index={index}
                isActive={true}
                isExpanded={expandedCard === index}
                onToggle={() => toggleCard(index)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="bridge-model" className="min-h-[500vh] relative">
      <ProgressIndicator current={activeCard + 1} total={principlesData.length} />
      
      <div className="sticky top-0 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              The Bridge Model
            </h2>
            
            {/* Bridge visualization */}
            <div className="relative mb-16">
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold text-primary">Vision</div>
                <div className="text-2xl font-bold text-destructive">Execution</div>
              </div>
              
              <div className="relative h-24">
                {/* Bridge deck */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-foreground transform -translate-y-1/2"></div>
                
                {/* Support beams that animate in */}
                {principlesData.map((_, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "absolute w-1 bg-foreground transition-all duration-300",
                      "transform -translate-y-1/2 top-1/2",
                      index <= activeCard ? "h-16 opacity-100" : "h-0 opacity-50"
                    )}
                    style={{ 
                      left: `${20 + (index * 15)}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <PrincipleCard
              title={principlesData[activeCard].title}
              summary={principlesData[activeCard].summary}
              index={activeCard}
              isActive={true}
              isExpanded={expandedCard === activeCard}
              onToggle={() => toggleCard(activeCard)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Credibility section component
const CredibilitySection: React.FC = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <p className="text-xl md:text-2xl font-bold text-foreground mb-8">
        This isn't theory—it's how I've led transformations at Qualcomm and beyond.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          to="/design-case-studies"
          className="bg-primary text-primary-foreground px-8 py-4 text-lg font-bold border-4 border-foreground hover:bg-primary/80 transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] inline-flex items-center"
        >
          Case Studies
        </Link>
        
        <Link 
          to="/speaking-media"
          className="bg-background text-foreground px-8 py-4 text-lg font-bold border-4 border-foreground hover:bg-muted transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] inline-flex items-center"
        >
          Speaking & Media
        </Link>
      </div>
      
      <p className="text-lg text-muted-foreground mt-8 italic">
        "This isn't a philosophy deck—it's my operating system."
      </p>
    </div>
  </section>
);

// Contact section component
const ContactSection: React.FC = () => (
  <section className="py-16 bg-muted/20">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
        Have a hard problem worth crossing?
      </h2>
      
      <a 
        href="https://www.linkedin.com/in/brentjsummers"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-destructive text-destructive-foreground px-8 py-4 text-xl font-bold border-4 border-foreground hover:bg-destructive/80 transition-colors focus:ring-4 focus:ring-focus-ring focus:ring-offset-4 min-h-[44px] inline-flex items-center"
      >
        Let's connect
      </a>
    </div>
  </section>
);

// Main Leadership page component
const LeadershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipToContent />
      
      <main id="main-content">
        <HeroSection />
        <BridgeModelSection />
        <CredibilitySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default LeadershipPage;