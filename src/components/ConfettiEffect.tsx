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
  const audioContextRef = useRef<AudioContext | null>(null);

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
      // Play celebration sound using Web Audio API
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        
        const ctx = audioContextRef.current;
        const now = ctx.currentTime;
        
        // Create a fun ascending celebration tone (C5, E5, G5 major chord)
        const frequencies = [523.25, 659.25, 783.99];
        
        frequencies.forEach((freq, index) => {
          const oscillator = ctx.createOscillator();
          const gainNode = ctx.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(ctx.destination);
          
          oscillator.frequency.value = freq;
          oscillator.type = 'sine';
          
          const startTime = now + (index * 0.08);
          const duration = 0.15;
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
          
          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        });
      } catch (error) {
        // Web Audio API not supported
        console.log('Audio playback not available');
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
          zIndex: Math.floor(Math.random() * 40) + 40, // Random layering 40-79 (mix behind z-50 modal and in front)
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
      className="fixed inset-0 pointer-events-none z-[60] overflow-hidden"
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