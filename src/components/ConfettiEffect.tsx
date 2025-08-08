import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
}

interface ConfettiEffectProps {
  isActive: boolean;
  onComplete?: () => void;
}

const ConfettiEffect = ({ isActive, onComplete }: ConfettiEffectProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!isActive) {
      setPieces([]);
      return;
    }

    const colors = ['#ff6b35', '#f72585', '#ffffff']; // bright orange, pink, white
    const newPieces: ConfettiPiece[] = [];

    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 20, // horizontal velocity
        vy: -(Math.random() * 15 + 10), // upward velocity (negative)
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4
      });
    }

    setPieces(newPieces);

    const animationDuration = 4000; // 4 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / animationDuration;

      if (progress >= 1) {
        setPieces([]);
        onComplete?.();
        return;
      }

      setPieces(currentPieces => 
        currentPieces.map(piece => ({
          ...piece,
          x: piece.x + piece.vx * 0.5,
          y: piece.y + piece.vy * 0.5,
          vy: piece.vy + 0.3, // gravity effect
          vx: piece.vx * 0.99, // air resistance
          rotation: piece.rotation + piece.rotationSpeed
        }))
      );

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isActive, onComplete]);

  if (!isActive || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;