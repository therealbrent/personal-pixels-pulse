# Neo-Brutalist Shadow System

## Overview
This unified shadow system provides consistent, performant shadows across the application following Neo-brutalist design principles.

## CSS Classes Available

### Base Shadows (using foreground color)
- `.shadow-neo-xs` - 2px shadow for pressed states
- `.shadow-neo-sm` - 4px shadow for small cards/buttons  
- `.shadow-neo-md` - 8px shadow for medium elements
- `.shadow-neo-lg` - 12px shadow for large cards
- `.shadow-neo-xl` - 16px shadow for hero sections

### Colored Shadow Variants (8px size)
- `.shadow-neo-primary` - Mustard colored shadow
- `.shadow-neo-accent` - Hot Pink colored shadow
- `.shadow-neo-destructive` - Oxblood colored shadow  
- `.shadow-neo-secondary` - Onyx colored shadow

### Interactive States
- `.shadow-neo-hover-xs:hover` - Small hover shadow
- `.shadow-neo-hover-sm:hover` - Medium hover shadow
- `.shadow-neo-hover-md:hover` - Large hover shadow
- `.shadow-neo-pressed` - Pressed state with transform

### Drop Shadows for Overlays
- `.drop-shadow-neo` - Standard drop shadow for icons
- `.drop-shadow-neo-lg` - Large drop shadow for overlays

## Usage Examples

### Basic Card
```tsx
<div className="border-4 border-foreground shadow-neo-sm">
  Card content
</div>
```

### Interactive Card with Colored Hover
```tsx
<div className="border-4 border-foreground hover:shadow-neo-primary transition-shadow">
  Hoverable card
</div>
```

### Button with Press Effect  
```tsx
<button className="shadow-neo-sm hover:shadow-neo-xs hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
  Button
</button>
```

### Hero Section
```tsx
<section className="shadow-neo-xl">
  Hero content
</section>
```

### Icon Overlay
```tsx
<Icon className="drop-shadow-neo-lg" />
```

## Migration Notes

**Before (inline shadows):**
```tsx
className="shadow-[8px_8px_0px_0px_hsl(var(--primary))]"
```

**After (unified system):**
```tsx
className="shadow-neo-primary"
```

## Performance Benefits
- Consistent shadow rendering across browsers
- Optimized CSS with reusable classes
- Better maintainability and theme support
- Reduced bundle size from eliminated inline styles