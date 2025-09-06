import React from 'react';
import { Icon } from './icon';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  variant?: 'default' | 'primary' | 'destructive' | 'accent';
  size?: 'default' | 'compact';
  showPlayIcon?: boolean;
  showExternalIcon?: boolean;
  isExternal?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]',
  primary: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]',
  destructive: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--destructive))]',
  accent: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))]'
};

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  subtitle,
  description,
  href,
  image,
  imageAlt = '',
  category,
  variant = 'default',
  size = 'default',
  showPlayIcon = false,
  showExternalIcon = false,
  isExternal = false,
  className,
  onClick
}) => {
  const cardStyles = cn(
    'border-4 border-foreground bg-background group transition-all duration-300',
    variantStyles[variant],
    size === 'compact' ? 'p-3' : 'p-4 md:p-6',
    className
  );

  const content = (
    <>
      {image && (
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-auto object-cover group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
          />
          
          {/* Geometric Overlay Elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-accent opacity-0 group-hover:opacity-80 transition-all duration-300 transform rotate-45 group-hover:rotate-12" aria-hidden="true"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-2 border-primary opacity-0 group-hover:opacity-90 transition-all duration-500 transform group-hover:rotate-45" aria-hidden="true"></div>
          
          {/* Category Overlay */}
          {category && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-accent px-3 py-1 text-sm font-bold inline-block transform -skew-x-12 mb-2">
                  {category}
                </div>
                {description && (
                  <p className="text-sm leading-tight">{description}</p>
                )}
              </div>
            </div>
          )}
          
          {/* Icon Overlays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {showPlayIcon && <Icon name="play" size={32} className="text-white drop-shadow-lg" />}
            {showExternalIcon && <Icon name="external-link" size={32} className="text-white drop-shadow-lg" />}
          </div>

          {/* Corner Play Icon for Media */}
          {showPlayIcon && (
            <Icon 
              name="play" 
              size={16} 
              className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" 
            />
          )}
        </div>
      )}

      <div className={cn('space-y-3', image && (size === 'compact' ? 'pt-3' : 'pt-4'))}>
        {subtitle && (
          <p className="text-xs font-bold text-foreground/60 tracking-wider uppercase">
            {subtitle}
          </p>
        )}
        
        <h3 className={cn(
          'font-bold text-primary group-hover:text-primary/80 transition-colors',
          size === 'compact' ? 'text-lg' : 'text-xl leading-tight'
        )}>
          {title}
        </h3>
        
        {description && !category && (
          <p className={cn(
            'text-muted-foreground',
            size === 'compact' ? 'text-sm' : 'text-base'
          )}>
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (href || onClick) {
    const linkProps = href 
      ? {
          href,
          ...(isExternal && {
            target: "_blank",
            rel: "noopener noreferrer"
          })
        }
      : {};

    const Component = href ? 'a' : 'button';

    return (
      <Component
        {...linkProps}
        onClick={onClick}
        className={cn(cardStyles, 'block relative')}
        aria-label={`${title}${isExternal ? ' - Opens in new tab' : ''}`}
      >
        {content}
      </Component>
    );
  }

  return (
    <div className={cardStyles}>
      {content}
    </div>
  );
};