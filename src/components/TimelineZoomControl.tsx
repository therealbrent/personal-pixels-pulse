import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineZoomControlProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
  className?: string;
}

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5];

export default function TimelineZoomControl({ zoom, onZoomChange, className }: TimelineZoomControlProps) {
  const currentIndex = ZOOM_LEVELS.indexOf(zoom);
  
  const handleZoomIn = () => {
    const nextIndex = Math.min(currentIndex + 1, ZOOM_LEVELS.length - 1);
    onZoomChange(ZOOM_LEVELS[nextIndex]);
  };

  const handleZoomOut = () => {
    const nextIndex = Math.max(currentIndex - 1, 0);
    onZoomChange(ZOOM_LEVELS[nextIndex]);
  };

  const handleReset = () => {
    onZoomChange(1);
  };

  return (
    <div 
      className={cn(
        'flex items-center gap-2 p-2 bg-background border-4 border-foreground shadow-neo',
        className
      )}
      role="toolbar"
      aria-label="Timeline zoom controls"
    >
      <button
        onClick={handleZoomOut}
        disabled={currentIndex === 0}
        className={cn(
          'p-2 border-2 border-foreground transition-all',
          currentIndex === 0 
            ? 'opacity-30 cursor-not-allowed bg-muted' 
            : 'bg-background hover:bg-primary hover:scale-110'
        )}
        aria-label="Zoom out timeline"
        title="Zoom Out (Shift + -)"
      >
        <ZoomOut className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1 px-2">
        {ZOOM_LEVELS.map((level, index) => (
          <button
            key={level}
            onClick={() => onZoomChange(level)}
            className={cn(
              'w-2 h-2 rounded-full border border-foreground transition-all',
              zoom === level ? 'bg-accent scale-150' : 'bg-muted hover:bg-primary'
            )}
            aria-label={`Set zoom to ${level * 100}%`}
            aria-current={zoom === level}
          />
        ))}
      </div>

      <button
        onClick={handleZoomIn}
        disabled={currentIndex === ZOOM_LEVELS.length - 1}
        className={cn(
          'p-2 border-2 border-foreground transition-all',
          currentIndex === ZOOM_LEVELS.length - 1
            ? 'opacity-30 cursor-not-allowed bg-muted'
            : 'bg-background hover:bg-primary hover:scale-110'
        )}
        aria-label="Zoom in timeline"
        title="Zoom In (Shift + +)"
      >
        <ZoomIn className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-foreground mx-1" aria-hidden="true" />

      <button
        onClick={handleReset}
        className={cn(
          'p-2 border-2 border-foreground transition-all bg-background',
          'hover:bg-accent hover:scale-110'
        )}
        aria-label="Reset zoom to 100%"
        title="Reset Zoom (Shift + 0)"
      >
        <Maximize2 className="w-4 h-4" />
      </button>

      <span className="ml-2 text-xs font-bold text-foreground uppercase tracking-wider">
        {Math.round(zoom * 100)}%
      </span>
    </div>
  );
}
