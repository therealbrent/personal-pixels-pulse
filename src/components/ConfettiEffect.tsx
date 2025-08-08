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
  origin?: { x: number; y: number };
  onComplete?: () => void;
}

function ConfettiEffect({ isActive, origin, onComplete }: ConfettiEffectProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces: ConfettiPiece[] = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Random horizontal position (%)
        y: Math.random() * 10 + 45, // Start from center area
        rotation: Math.random() * 360,
        size: Math.random() * 48 + 12, // 12-60px dramatic size range
        color: ['hsl(var(--accent))', 'hsl(var(--primary))', 'hsl(var(--card))'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 0.15, // Staggered delays for realistic burst
        shape: Math.random() > 0.5 ? 'square' : 'triangle'
      }));

      setConfetti(pieces);
      setIsVisible(true);

      // Clean up after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
        setConfetti([]);
        onComplete?.();
      }, 4700); // Extended for longer drift phase

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isVisible || confetti.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[51] overflow-hidden"
      aria-hidden="true"
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
          className={`absolute animate-confetti-physics ${piece.shape === 'triangle' ? 'confetti-triangle' : 'confetti-square'}`}
          style={{
            left: origin ? `${origin.x - piece.size / 2}px` : `${piece.x}%`,
            top: origin ? `${origin.y - piece.size / 2}px` : `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.shape === 'square' ? piece.color : 'transparent',
            borderColor: piece.shape === 'triangle' ? piece.color : 'transparent',
            borderLeftWidth: piece.shape === 'triangle' ? `${(piece.size / 2).toFixed(0)}px` : undefined,
            borderRightWidth: piece.shape === 'triangle' ? `${(piece.size / 2).toFixed(0)}px` : undefined,
            borderBottomWidth: piece.shape === 'triangle' ? `${(piece.size * 0.9).toFixed(0)}px` : undefined,
            animationDelay: `${piece.delay}s`,
            '--drift-x': (Math.random() - 0.5) * 2, // Enhanced horizontal drift (-1 to 1)
            '--spread-multiplier': Math.random() * 0.3 + 0.7, // Individual spread variation (0.7-1.0)
            '--rotation-speed': `${Math.round(Math.random() * 360 + 360)}deg`, // Variable rotation speed with unit
            willChange: 'transform, opacity'
          } as React.CSSProperties & { '--drift-x': number; '--spread-multiplier': number; '--rotation-speed': string }}
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
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 14px solid;
            background: transparent !important;
          }
        `
      }} />
    </div>
  );
}

export default ConfettiEffect;