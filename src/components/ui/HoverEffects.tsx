/**
 * Unified hover effect utilities for consistent Neo-brutalist interactions
 */

export const hoverEffects = {
  // Shadow variants for different color schemes
  shadowPrimary: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]',
  shadowDestructive: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--destructive))]',
  shadowAccent: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))]',
  shadowForeground: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]',
  
  // Transform effects
  scaleHover: 'transform hover:scale-105 transition-transform duration-300',
  rotateReset: 'transform -rotate-1 hover:rotate-0 transition-transform duration-300',
  translateShadow: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))]',
  
  // Image effects
  imageEnhance: 'group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]',
  
  // Geometric overlays
  geometricPrimary: 'absolute w-8 h-8 bg-accent opacity-0 group-hover:opacity-80 transition-all duration-300 transform rotate-45 group-hover:rotate-12',
  geometricSecondary: 'absolute w-6 h-6 border-2 border-primary opacity-0 group-hover:opacity-90 transition-all duration-500 transform group-hover:rotate-45',
  
  // Common combinations
  brutalistCard: 'border-4 border-foreground bg-background group transition-all duration-300',
  brutalistButton: 'shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150',
  
  // Text animations
  colorTransition: 'group-hover:text-primary/80 transition-colors',
  underlineSlide: 'relative after:content-[\'\'] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
};