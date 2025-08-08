import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  delay: number;
  shape: 'square' | 'triangle';
}

interface ConfettiEffectProps {
  isActive: boolean;
  onComplete?: () => void;
}

function ConfettiEffect({ isActive, onComplete }: ConfettiEffectProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces: ConfettiPiece[] = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Random horizontal position (%)
        y: Math.random() * 20 + 40, // Start from center area
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4, // 4-12px
        color: ['hsl(var(--accent))', 'hsl(var(--primary))', 'hsl(var(--card))'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 0.3, // Stagger animations
        shape: Math.random() > 0.5 ? 'square' : 'triangle'
      }));

      setConfetti(pieces);
      setIsVisible(true);

      // Clean up after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
        setConfetti([]);
        onComplete?.();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isVisible || confetti.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[51] overflow-hidden"
      aria-hidden="true"
      style={{ display: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'block' }}
    >
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        Celebration animation active
      </div>
      
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute animate-confetti-complete ${piece.shape === 'triangle' ? 'confetti-triangle' : 'confetti-square'}`}
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.shape === 'square' ? piece.color : 'transparent',
            borderColor: piece.shape === 'triangle' ? piece.color : 'transparent',
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .confetti-square {
            border: 2px solid hsl(var(--foreground));
          }
          
          .confetti-triangle {
            width: 0 !important;
            height: 0 !important;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 8px solid;
            background: transparent !important;
          }
        `
      }} />
    </div>
  );
}

export default ConfettiEffect;