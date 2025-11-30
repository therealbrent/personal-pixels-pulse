import { useEffect } from 'react';

interface UseTimelineKeyboardNavProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onJumpToYear: (year: number) => void;
  onToggleHelp?: () => void;
  years: number[];
  enabled?: boolean;
}

export function useTimelineKeyboardNav({
  onZoomIn,
  onZoomOut,
  onZoomReset,
  onJumpToYear,
  onToggleHelp,
  years,
  enabled = true,
}: UseTimelineKeyboardNavProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Help dialog toggle
      if (e.key === '?' && onToggleHelp) {
        e.preventDefault();
        onToggleHelp();
        return;
      }

      // Zoom controls (Shift + +/-)
      if (e.shiftKey) {
        if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          onZoomIn();
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          onZoomOut();
        } else if (e.key === '0') {
          e.preventDefault();
          onZoomReset();
        }
      }

      // Decade jump (Shift + number keys)
      if (e.shiftKey && /^[1-9]$/.test(e.key)) {
        e.preventDefault();
        const decadeIndex = parseInt(e.key) - 1;
        
        // Group years by decade
        const decades = new Set(years.map(y => Math.floor(y / 10) * 10));
        const sortedDecades = Array.from(decades).sort((a, b) => b - a);
        
        if (decadeIndex < sortedDecades.length) {
          const targetDecade = sortedDecades[decadeIndex];
          const targetYear = years.find(y => Math.floor(y / 10) * 10 === targetDecade);
          
          if (targetYear) {
            onJumpToYear(targetYear);
          }
        }
      }

      // Navigation (j/k for next/prev year)
      if (e.key === 'j' || e.key === 'k') {
        e.preventDefault();
        const currentScrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = currentScrollY / docHeight;
        const yearIndex = Math.floor(scrollPercentage * (years.length - 1));
        
        if (e.key === 'j' && yearIndex < years.length - 1) {
          // Next year (scroll down)
          onJumpToYear(years[yearIndex + 1]);
        } else if (e.key === 'k' && yearIndex > 0) {
          // Previous year (scroll up)
          onJumpToYear(years[yearIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, onZoomIn, onZoomOut, onZoomReset, onJumpToYear, onToggleHelp, years]);
}
