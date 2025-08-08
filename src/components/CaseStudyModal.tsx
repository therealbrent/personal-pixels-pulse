import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ConfettiEffect from './ConfettiEffect';
import { useState } from 'react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const CaseStudyModal = ({ isOpen, onClose, title, description, link, buttonText }: CaseStudyModalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
      onClose();
    }
  };

  return (
    <>
      <ConfettiEffect 
        isActive={showConfetti && isOpen} 
        onComplete={() => setShowConfetti(false)} 
      />
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[600px] border-4 border-foreground bg-background">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl font-bold text-foreground mb-4">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed mb-6">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => window.open(link, '_blank')}
              className="bg-primary text-primary-foreground font-semibold py-3 px-6 border-2 border-foreground hover:bg-primary/90 transition-colors"
            >
              {buttonText}
            </button>
            
            <button 
              onClick={() => onClose()}
              className="bg-muted text-muted-foreground font-semibold py-2 px-6 border-2 border-foreground hover:bg-muted/80 transition-colors"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudyModal;