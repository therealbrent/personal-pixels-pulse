import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CareerRole } from '@/data/careerTimeline';

interface TimelineMiniMapProps {
  roles: Array<{
    role: CareerRole;
    top: number;
    height: number;
    column: number;
  }>;
  totalHeight: number;
  currentYear?: number;
}

export default function TimelineMiniMap({ roles, totalHeight, currentYear }: TimelineMiniMapProps) {
  const [viewportPosition, setViewportPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const miniMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate viewport position as percentage
      const scrollPercentage = scrollY / (docHeight - windowHeight);
      setViewportPosition(scrollPercentage);
      setViewportHeight((windowHeight / docHeight) * 100);
      
      // Show minimap after scrolling past hero
      setIsVisible(scrollY > 300);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMiniMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!miniMapRef.current) return;
    
    const rect = miniMapRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = clickY / rect.height;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const targetScroll = percentage * (docHeight - windowHeight);
    
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const scale = 200 / totalHeight; // Scale down to 200px height

  return (
    <div
      className={cn(
        'fixed right-8 top-1/2 -translate-y-1/2 z-50',
        'transition-all duration-300',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none',
        'hidden lg:block'
      )}
      role="navigation"
      aria-label="Timeline minimap"
    >
      <div className="bg-background border-4 border-foreground p-2 shadow-neo">
        {/* Minimap Canvas */}
        <div
          ref={miniMapRef}
          className="relative w-16 h-[200px] bg-muted cursor-pointer overflow-hidden"
          onClick={handleMiniMapClick}
          role="button"
          tabIndex={0}
          aria-label="Click to navigate timeline"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMiniMapClick(e as any);
            }
          }}
        >
          {/* Timeline accent bar */}
          <div 
            className="absolute left-1 w-1 bg-primary"
            style={{ 
              height: '100%',
              opacity: 0.3
            }}
            aria-hidden="true"
          />

          {/* Role blocks */}
          {roles.map(({ role, top, height, column }) => {
            if (role.type === 'education') return null;
            
            return (
              <div
                key={role.id}
                className={cn(
                  'absolute border border-foreground',
                  column === 0 ? 'bg-primary' : 'bg-accent',
                  'transition-colors'
                )}
                style={{
                  top: `${top * scale}px`,
                  height: `${Math.max(height * scale, 2)}px`,
                  left: column === 0 ? '6px' : '10px',
                  width: column === 0 ? '48%' : '44%',
                }}
                aria-hidden="true"
              />
            );
          })}

          {/* Viewport indicator */}
          <div
            className="absolute left-0 right-0 bg-accent/40 border-2 border-accent"
            style={{
              top: `${viewportPosition * 100}%`,
              height: `${viewportHeight}%`,
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </div>
        </div>

        {/* Current year indicator */}
        {currentYear && (
          <div className="mt-2 text-center">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">
              {currentYear}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
