import { useEffect, useState, useRef } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  delay: number;
  shape: 'square' | 'triangle' | 'rectangle' | 'line';
  zIndex: number;
  borderWidth: number;
}

interface ConfettiEffectProps {
  isActive: boolean;
  origin?: { x: number; y: number };
  onComplete?: () => void;
}

function ConfettiEffect({ isActive, origin, onComplete }: ConfettiEffectProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Brutalist color palette
  const brutalColors = [
    '#FF1392', // Hot Pink - high impact
    '#FFBA08', // Mustard - stage presence
    '#7A1E1C', // Oxblood - weight
    '#2962FF', // Cobalt - cold tension
  ];

  // Brutalist shapes with weighted distribution
  const getRandomShape = (): 'square' | 'triangle' | 'rectangle' | 'line' => {
    const rand = Math.random();
    if (rand < 0.3) return 'square';
    if (rand < 0.5) return 'triangle';
    if (rand < 0.75) return 'rectangle';
    return 'line';
  };

  useEffect(() => {
    if (isActive) {
      // Play celebration sound
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSx+zPDTgjMGHm7A7+OZSA0PVqzn77BdGAU+ltryy3klBih4yO/VhzcGHW/A6uOcSg4MW6vm8bViFgpDm9/wuWUeBCh6yu7UiDcHImjA5+GXTgsQWa7l77dlGQc6ktXwzn4pBSF0xO7YijkHH27A6uGZTQwPWKzm8bNhFwo/mdvvuWgdBSl9y+3SizcGIm3A6N+dUA0OWKrl77RfFgo+mdrwvGodBiiByu3UiDUGH2u/6+GWUwwQV63l8bNeFwtBmNvvvWscBCl+yuzSizcGImzA6d+YUAoOV6zl8LJfFws/mtvvvGobBih9yuvUiTYGIWu86eKXSw0QVqrm8bBdGAk+ltrzwGgcBSh/zOzTiDQGH2m96+KYSgwQVazl8bNfFwtAmdvvvGobBil9yuzSizcGImzA6d+YUAsPV6zm8LJfGAs/mtvvvGkcBih9yuvUiTYGIWq+6eKXSw0QVqvl8bBeFgtAmdvvvGgcBih/y+zTiDUFIGi96+KXTQ0PVqzl8LNeGAs+l9vvvWkcBil9yuzTiTQGH2i/7OKYTA0PVqvl8bJfFwtBmNvvvGgcBSh+y+zSiTUGIWm96+KYTA0PVqzl8LJeGAo+l9vvvGkcBid+zOzTiTUGH2i/7OOXTAwQVazl8bNfFgtAmdvvvGgdBSh+y+zSiTUGIWm+6+KYTA0PVqvl8bJeGAo+l9vvvGkcBih+zOzTiTQGH2e/7eSZSw0QVqzl8LNeGAs/mNvvvGgdBSh+yuzTiTUFIGi/7OKYTA0PVqzl8LJeGAo+l9vvvWkdBSh+yuzTiTUGH2i/7OKYTA0PVqzl8LJeGAo+l9vvvWkdBSh+yuzTiTUGH2i/7OKYTA0PVqzl8LJeGAo+l9vvvGkdBSd+yuzTiTYGH2i+7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSd+yuzTiTYGH2i+7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSd+yuzTiTYGH2i+7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGAo+l9vvvGkdBSh+yuzTiTUGH2i/7OKYTA0PVqvl8LJeGA==');
          audioRef.current.volume = 0.3;
        }
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Silently fail if audio is blocked
        });
      } catch (error) {
        // Audio not supported or blocked
      }

      // Responsive particle count for performance
      const getParticleCount = () => {
        const width = window.innerWidth;
        if (width < 640) return 20; // Mobile
        if (width < 1024) return 30; // Tablet
        return 40; // Desktop
      };

      // Generate confetti pieces
      const pieces: ConfettiPiece[] = Array.from({ length: getParticleCount() }, (_, i) => {
        const shape = getRandomShape();
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 10 + 45,
          rotation: Math.random() * 360,
          size: shape === 'line' 
            ? Math.random() * 32 + 16 // Lines: 16-48px
            : shape === 'rectangle'
            ? Math.random() * 40 + 20 // Rectangles: 20-60px
            : Math.random() * 48 + 12, // Squares/triangles: 12-60px
          color: brutalColors[Math.floor(Math.random() * brutalColors.length)],
          delay: Math.random() * 0.2,
          shape,
          zIndex: Math.floor(Math.random() * 5) + 1, // Random layering 1-5
          borderWidth: Math.random() > 0.5 ? 4 : 6, // Brutalist thick borders
        };
      });

      setConfetti(pieces);
      setIsVisible(true);

      // Clean up after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
        setConfetti([]);
        onComplete?.();
      }, 4700);

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
      
      {confetti.map((piece) => {
        const getShapeStyles = () => {
          switch (piece.shape) {
            case 'triangle':
              return {
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderLeft: `${(piece.size / 2).toFixed(0)}px solid transparent`,
                borderRight: `${(piece.size / 2).toFixed(0)}px solid transparent`,
                borderBottom: `${(piece.size * 0.9).toFixed(0)}px solid ${piece.color}`,
              };
            case 'rectangle':
              return {
                width: `${piece.size * 1.5}px`,
                height: `${piece.size * 0.6}px`,
                backgroundColor: piece.color,
                border: `${piece.borderWidth}px solid #262626`,
              };
            case 'line':
              return {
                width: `${piece.size}px`,
                height: `${piece.borderWidth}px`,
                backgroundColor: piece.color,
                border: 'none',
              };
            default: // square
              return {
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                border: `${piece.borderWidth}px solid #262626`,
              };
          }
        };

        return (
          <div
            key={piece.id}
            className="absolute animate-confetti-physics"
            style={{
              ...getShapeStyles(),
              left: origin ? `${origin.x - piece.size / 2}px` : `${piece.x}%`,
              top: origin ? `${origin.y - piece.size / 2}px` : `${piece.y}%`,
              zIndex: piece.zIndex,
              animationDelay: `${piece.delay}s`,
              '--drift-x': (Math.random() - 0.5) * 3, // More dramatic drift (-1.5 to 1.5)
              '--spread-multiplier': Math.random() * 0.8 + 0.5, // Enhanced spread (0.5-1.3)
              '--rotation-speed': `${Math.round(Math.random() * 540 + 360)}deg`, // More dramatic rotation (360-900deg)
              '--wobble': Math.random() > 0.5 ? 1 : -1, // Wobble direction
              willChange: 'transform, opacity'
            } as React.CSSProperties & { 
              '--drift-x': number; 
              '--spread-multiplier': number; 
              '--rotation-speed': string;
              '--wobble': number;
            }}
          />
        );
      })}
      
    </div>
  );
}

export default ConfettiEffect;