/**
 * Shadow utility classes for consistent Neo-brutalist design
 * These utilities provide a unified shadow system across the application
 */

export const shadowClasses = {
  // Base shadow sizes
  xs: 'shadow-neo-xs',        // 2px shadow for pressed states
  sm: 'shadow-neo-sm',        // 4px shadow for small cards
  md: 'shadow-neo-md',        // 8px shadow for medium elements
  lg: 'shadow-neo-lg',        // 12px shadow for large cards
  xl: 'shadow-neo-xl',        // 16px shadow for hero sections
  
  // Colored variants
  primary: 'shadow-neo-primary',
  accent: 'shadow-neo-accent', 
  destructive: 'shadow-neo-destructive',
  secondary: 'shadow-neo-secondary',
  
  // Interactive states
  hoverXs: 'shadow-neo-hover-xs',
  hoverSm: 'shadow-neo-hover-sm', 
  hoverMd: 'shadow-neo-hover-md',
  pressed: 'shadow-neo-pressed',
  
  // Drop shadows for overlays
  dropShadow: 'drop-shadow-neo',
  dropShadowLg: 'drop-shadow-neo-lg'
};

/**
 * Helper function to get shadow class by size and variant
 */
export const getShadowClass = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', variant?: 'primary' | 'accent' | 'destructive' | 'secondary') => {
  if (variant && size === 'md') {
    return shadowClasses[variant];
  }
  return shadowClasses[size];
};

/**
 * Common shadow combinations for specific components
 */
export const shadowPresets = {
  card: 'shadow-neo-sm hover:shadow-neo-md transition-shadow duration-200',
  button: 'shadow-neo-sm hover:shadow-neo-xs hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150',
  hero: 'shadow-neo-xl',
  overlay: 'drop-shadow-neo-lg'
};