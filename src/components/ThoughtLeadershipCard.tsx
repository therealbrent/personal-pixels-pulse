import { Icon } from './ui/icon';
import type { ThoughtLeadershipItem, ContentType } from '@/data/thoughtLeadership';
import { format, isFuture, parseISO } from 'date-fns';
import { useRef, useState, useEffect } from 'react';

interface ThoughtLeadershipCardProps {
  item: ThoughtLeadershipItem;
  index: number;
  featured?: boolean;
}

// Format date as MMM YY (e.g., "NOV 25")
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return format(date, 'MMM yy').toUpperCase();
  } catch {
    return '';
  }
};

// Normalize venue to array for stacked rendering
const getVenueArray = (venue: string | string[] | undefined): string[] => {
  if (!venue) return [];
  if (Array.isArray(venue)) {
    return venue.map(v => v.trim());
  }
  return [venue.trim()];
};

// Content type style mappings using design system
const contentTypeStyles: Record<ContentType, {
  cardHoverBg: string;
  hoverText: string;
  hoverBorder: string;
  glowColor: string;
  iconColor: string;
  shadowColor: string;
  featuredBg: string;
  featuredText: string;
  featuredHoverShadow: string;
}> = {
  article: {
    cardHoverBg: 'hover:bg-primary',
    hoverText: 'group-hover:!text-foreground', // Onyx on Mustard
    hoverBorder: 'group-hover:!border-primary',
    glowColor: 'bg-primary',
    iconColor: 'text-primary',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]',
    featuredBg: 'bg-primary',
    featuredText: 'text-foreground',
    featuredHoverShadow: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]'
  },
  presentation: {
    cardHoverBg: 'hover:bg-cobalt',
    hoverText: 'group-hover:!text-white', // White on Cobalt
    hoverBorder: 'group-hover:!border-cobalt',
    glowColor: 'bg-cobalt',
    iconColor: 'text-cobalt',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--cobalt))]',
    featuredBg: 'bg-cobalt',
    featuredText: 'text-white',
    featuredHoverShadow: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]'
  },
  panel: {
    cardHoverBg: 'hover:bg-accent',
    hoverText: 'group-hover:!text-white', // White on Hot Pink
    hoverBorder: 'group-hover:!border-accent',
    glowColor: 'bg-accent',
    iconColor: 'text-accent',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]',
    featuredBg: 'bg-accent',
    featuredText: 'text-white',
    featuredHoverShadow: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]'
  },
  podcast: {
    cardHoverBg: 'hover:bg-oxblood',
    hoverText: 'group-hover:!text-white', // White on Oxblood
    hoverBorder: 'group-hover:!border-oxblood',
    glowColor: 'bg-oxblood',
    iconColor: 'text-oxblood',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--destructive))]',
    featuredBg: 'bg-oxblood',
    featuredText: 'text-white',
    featuredHoverShadow: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]'
  },
  writing: {
    cardHoverBg: 'hover:bg-oxblood',
    hoverText: 'group-hover:!text-white', // White on Crimson/Oxblood
    hoverBorder: 'group-hover:!border-oxblood',
    glowColor: 'bg-oxblood',
    iconColor: 'text-oxblood',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--oxblood))]',
    featuredBg: 'bg-oxblood',
    featuredText: 'text-white',
    featuredHoverShadow: 'hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]'
  }
};

// Coming Soon tag component with viewport animation
const ComingSoonTag = () => {
  const tagRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const tag = tagRef.current;
    if (!tag) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when element is near center (40%-60% of viewport)
        const rect = entry.boundingClientRect;
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        const threshold = window.innerHeight * 0.3;
        
        setIsActive(entry.isIntersecting && distanceFromCenter < threshold);
      },
      { threshold: [0, 0.5, 1], rootMargin: '-20% 0px -20% 0px' }
    );

    observer.observe(tag);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={tagRef}
      className={`inline-block bg-accent text-white px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-transform duration-300 ${
        isActive ? 'animate-wiggle scale-110' : ''
      }`}
    >
      Coming Soon
    </span>
  );
};

export default function ThoughtLeadershipCard({ item, index, featured = false }: ThoughtLeadershipCardProps) {
  const styles = contentTypeStyles[item.type];
  const hasVideo = !!item.videoUrl;
  const hasUrl = !!item.url;
  const isClickable = hasVideo || hasUrl;
  const staggerDelay = `${index * 50}ms`;
  
  // Normalize data at the top for consistent rendering
  const formattedDate = formatDate(item.date);
  const venueArray = getVenueArray(item.venue);
  const hasMultipleVenues = venueArray.length > 1;
  const isFutureEvent = isFuture(parseISO(item.date));
  
  const handleClick = () => {
    if (hasVideo) {
      window.open(item.videoUrl, '_blank');
    } else if (hasUrl) {
      window.open(item.url, '_blank');
    }
  };

  // Article and Writing cards - larger format with optional quotes
  if (item.type === 'article' || item.type === 'writing') {
    const articleClasses = featured
      ? `${styles.featuredBg} ${styles.featuredHoverShadow} hover:-translate-y-1`
      : `bg-background ${styles.cardHoverBg} hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}`;
    
    const textColorClass = featured ? styles.featuredText : 'text-foreground';
    const hoverTextClass = featured ? '' : styles.hoverText;
    
    return (
      <article
        onClick={isClickable ? handleClick : undefined}
        style={{ animationDelay: staggerDelay }}
        className={`block border-2 sm:border-4 border-foreground shadow-neo-md ${articleClasses} ${
          isClickable ? 'cursor-pointer transition-all duration-300' : 'transition-all duration-300'
        } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative overflow-hidden`}
        aria-label={`Article: ${item.title} featured in ${item.publication}`}
        tabIndex={isClickable ? 0 : undefined}
        role={isClickable ? 'button' : undefined}
        onKeyDown={isClickable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        } : undefined}
      >
        {/* Clickable indicator */}
        {isClickable && (
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
            <Icon name="external-link" size={16} className={`${textColorClass} ${hoverTextClass} transition-colors sm:w-5 sm:h-5`} />
          </div>
        )}
        
        {/* Content stacked in order with consistent left alignment */}
        <div className="flex flex-col p-4 pr-10 sm:pr-12">
          {/* DATE - hidden for featured */}
          {!featured && (
            <div className="text-[10px] font-black text-foreground tracking-widest uppercase opacity-60 mb-5" aria-label={`Date: ${item.date}`}>
              {formatDate(item.date)}
            </div>
          )}

          {/* PUBLICATION */}
          {item.publication && (
            <div className={`text-xs font-black tracking-wider uppercase mb-3 ${textColorClass} opacity-80 ${hoverTextClass} transition-colors`} aria-label={`Published in ${item.publication}`}>
              {item.publication}
            </div>
          )}
          
          {/* TITLE */}
          <h3 className={`text-base sm:text-lg md:text-xl font-black leading-tight transition-colors mb-3 ${textColorClass} ${hoverTextClass}`}>
            {item.title}
          </h3>
          
          {/* QUOTE */}
          {item.quote && (
            <blockquote className={`border-l-4 ${featured ? 'border-current' : 'border-foreground'} pl-3 italic text-sm md:text-base leading-relaxed transition-colors duration-300 opacity-90 mb-4 ${textColorClass} ${hoverTextClass}`}>
              {item.quote}
            </blockquote>
          )}
          
          {/* CTA */}
          {isClickable && (
            <div>
              <span className={`font-black underline text-sm transition-colors inline-flex items-center gap-1 focus:underline ${textColorClass} ${hoverTextClass}`}>
                Read Article
                <Icon name="chevron-right" size={14} className={`${hoverTextClass} group-hover:translate-x-1 transition-all`} aria-hidden="true" />
              </span>
            </div>
          )}
        </div>
      </article>
    );
  }

  // Compact card for presentations, podcasts, panels
  const hasImage = !!item.imageUrl;
  
  const compactClasses = featured
    ? `${styles.featuredBg} ${styles.featuredHoverShadow} hover:-translate-y-1`
    : `bg-background ${styles.cardHoverBg} hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}`;
  
  const textColorClass = featured ? styles.featuredText : 'text-foreground';
  const hoverTextClass = featured ? '' : 'group-hover:text-white';
  
  return (
    <article
      onClick={isClickable ? handleClick : undefined}
      style={{ animationDelay: staggerDelay }}
      className={`block border-2 sm:border-4 border-foreground shadow-neo-sm ${compactClasses} ${
        isClickable ? 'cursor-pointer transition-all duration-300' : 'transition-all duration-300'
      } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative overflow-hidden ${hasImage ? '' : 'min-h-[140px] sm:min-h-[160px]'}`}
      aria-label={`${item.type}: ${item.title} at ${item.venue || item.publication}${hasVideo ? ' - Video available' : ''}`}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
      data-item-id={item.id}
    >
      {/* Image section */}
      {hasImage && (
        <div className="w-full aspect-video overflow-hidden border-b-2 sm:border-b-4 border-foreground">
          <img 
            src={item.imageUrl} 
            alt={`${item.title} at ${venueArray.join(', ') || item.publication}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Clickable indicator - top right */}
      {isClickable && !hasImage && (
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <Icon name="external-link" size={14} className={`${textColorClass} ${hoverTextClass} transition-colors sm:w-4 sm:h-4`} />
        </div>
      )}

      <div className={`p-4 ${hasImage ? '' : 'pr-10 sm:pr-16'}`}>
        {/* DATE - hidden for featured */}
        {!featured && (
          <div className="min-h-4 sm:min-h-5 mb-2">
            {formattedDate && (
              <p className={`text-[9px] sm:text-[10px] font-black tracking-widest uppercase opacity-60 transition-colors ${textColorClass} ${hoverTextClass}`} aria-label={`Date: ${item.date}`}>
                {formattedDate}
              </p>
            )}
          </div>
        )}

        {/* VENUE OR PUBLICATION - hidden for featured */}
        {!featured && (
          <div className="mb-2">
            {venueArray.length > 0 ? (
              <div className="flex flex-col">
                {venueArray.map((venue, idx) => (
                  <p key={idx} className={`text-[10px] sm:text-xs font-black tracking-wider opacity-80 transition-colors ${textColorClass} ${hoverTextClass}`}>
                    {venue}
                  </p>
                ))}
              </div>
            ) : item.publication ? (
              <p className={`text-[10px] sm:text-xs font-black tracking-wider opacity-80 transition-colors line-clamp-1 ${textColorClass} ${hoverTextClass}`}>
                {item.publication}
              </p>
            ) : null}
          </div>
        )}
        
        {/* TITLE */}
        <h3 className={`text-sm sm:text-base md:text-lg font-black leading-tight transition-colors mb-2 sm:mb-3 ${textColorClass} ${hoverTextClass}`}>
          {item.title}
        </h3>

        {/* Coming Soon tag for future events */}
        {isFutureEvent && (
          <div className="mb-2 sm:mb-3">
            <ComingSoonTag />
          </div>
        )}

        {/* Moderator badge */}
        {item.description === "Moderator" && (
          <div className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-2 sm:mb-3 transition-colors ${
            featured 
              ? 'bg-foreground text-background' 
              : 'bg-foreground text-background group-hover:bg-white group-hover:text-foreground'
          }`}>
            <span>Moderator</span>
          </div>
        )}

        {/* CTA */}
        {isClickable && (
          <div className="pt-2">
            <span className={`font-black underline text-xs sm:text-sm transition-colors inline-flex items-center gap-1 focus:underline ${textColorClass} ${hoverTextClass}`}>
              {hasVideo ? 'Watch Video' : 'View Content'}
              <Icon name="chevron-right" size={12} className={`${hoverTextClass} group-hover:translate-x-1 transition-all sm:w-3.5 sm:h-3.5`} aria-hidden="true" />
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
