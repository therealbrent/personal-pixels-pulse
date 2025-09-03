import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import ConfettiEffect from './ConfettiEffect';
import { LazyImage } from './LazyImage';

interface CaseStudyCardProps {
  title: string;
  tag: string;
  client: string;
  description: string;
  details: string;
  contributions: string[];
  logoSrc: string;
  logoAlt: string;
  cardIndex: number;
}

function AccessibleCaseStudyCard({ 
  title, 
  tag, 
  client, 
  description, 
  details, 
  contributions, 
  logoSrc, 
  logoAlt,
  cardIndex 
}: CaseStudyCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <article 
          className="border-4 border-foreground bg-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
          onClick={(e) => {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <LazyImage 
              src={logoSrc} 
              alt={logoAlt} 
              width={120}
              height={60}
              className="h-16 object-contain"
            />
            <span 
              className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold border-2 border-foreground"
              aria-label={`Case study tag: ${tag}`}
            >
              {tag}
            </span>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground font-medium">{client}</p>
            </div>
          </div>
          <span className="visually-hidden">
            Click to view detailed case study for {client}. Opens dialog with full project details.
          </span>
        </article>
      </DialogTrigger>
      
      <DialogContent 
        className="max-w-2xl max-h-[80vh] overflow-y-auto border-4 border-foreground bg-card"
        aria-describedby={`case-study-${cardIndex}-description`}
      >
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center space-y-3">
            <LazyImage 
              src={logoSrc} 
              alt={logoAlt} 
              width={96}
              height={48}
              className="h-12 md:h-24 object-contain"
            />
            <span 
              className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold border-2 border-foreground"
              aria-label={`Case study category: ${tag}`}
            >
              {tag}
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div 
          className="space-y-6 pt-4"
          id={`case-study-${cardIndex}-description`}
        >
          <section>
            <h4 className="font-semibold text-primary mb-2">Client</h4>
            <p className="text-muted-foreground">{client}</p>
          </section>
          
          <section>
            <h4 className="font-semibold text-primary mb-2">Project Description</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">{description}</p>
              <p className="text-muted-foreground">{details}</p>
            </div>
          </section>
          
          <section>
            <h4 className="font-semibold text-primary mb-2">My Contributions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </section>
        </div>
      </DialogContent>
      
      <ConfettiEffect 
        isActive={showConfetti} 
        origin={origin ?? undefined}
        onComplete={() => setShowConfetti(false)} 
      />
    </Dialog>
  );
}

export default AccessibleCaseStudyCard;