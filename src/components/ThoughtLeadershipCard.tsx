import { Icon } from './ui/icon';
import type { ThoughtLeadershipItem, ContentType } from '@/data/thoughtLeadership';
import { format, parseISO } from 'date-fns';

interface ThoughtLeadershipCardProps {
  item: ThoughtLeadershipItem;
  index: number;
}

// Content type style mappings using design system
const contentTypeStyles: Record<ContentType, {
  cardHoverBg: string;
  hoverText: string;
  hoverBorder: string;
  glowColor: string;
  iconColor: string;
  shadowColor: string;
}> = {
  article: {
    cardHoverBg: 'hover:bg-primary',
    hoverText: 'group-hover:!text-foreground', // Onyx on Mustard
    hoverBorder: 'group-hover:!border-primary',
    glowColor: 'bg-primary',
    iconColor: 'text-primary',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]'
  },
  presentation: {
    cardHoverBg: 'hover:bg-cobalt',
    hoverText: 'group-hover:!text-white', // White on Cobalt
    hoverBorder: 'group-hover:!border-cobalt',
    glowColor: 'bg-cobalt',
    iconColor: 'text-cobalt',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--cobalt))]'
  },
  panel: {
    cardHoverBg: 'hover:bg-accent',
    hoverText: 'group-hover:!text-white', // White on Hot Pink
    hoverBorder: 'group-hover:!border-accent',
    glowColor: 'bg-accent',
    iconColor: 'text-accent',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]'
  },
  podcast: {
    cardHoverBg: 'hover:bg-oxblood',
    hoverText: 'group-hover:!text-white', // White on Oxblood
    hoverBorder: 'group-hover:!border-oxblood',
    glowColor: 'bg-oxblood',
    iconColor: 'text-oxblood',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--destructive))]'
  }
};

export default function ThoughtLeadershipCard({ item, index }: ThoughtLeadershipCardProps) {
  const styles = contentTypeStyles[item.type];
  const hasVideo = !!item.videoUrl;
  const hasUrl = !!item.url;
  const isClickable = hasVideo || hasUrl;
  const staggerDelay = `${index * 50}ms`;
  
  // Format date for display (e.g., "Sep 2025")
  const formattedDate = item.date.includes('TODO') 
    ? 'Date TBD' 
    : format(parseISO(item.date), 'MMM yyyy');
  
  const handleClick = () => {
    if (hasVideo) {
      window.open(item.videoUrl, '_blank');
    } else if (hasUrl) {
      window.open(item.url, '_blank');
    }
  };

  // Article card - larger format with quotes
  if (item.type === 'article') {
    return (
      <article
        onClick={isClickable ? handleClick : undefined}
        style={{ animationDelay: staggerDelay }}
        className={`md:col-span-2 bg-background border-4 border-foreground shadow-neo-md flex flex-col ${styles.cardHoverBg} ${
          isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}` : 'transition-all duration-300'
        } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative`}
        aria-label={`Article: ${item.title} featured in ${item.publication}. ${formattedDate}`}
        tabIndex={isClickable ? 0 : undefined}
        role={isClickable ? 'button' : 'article'}
        onKeyDown={isClickable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        } : undefined}
      >
        {/* Clickable indicator */}
        {isClickable && (
          <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-40 group-hover:opacity-100 transition-opacity z-10" aria-hidden="true">
            <Icon name="external-link" size={20} className={`text-foreground ${styles.hoverText} transition-colors`} />
          </div>
        )}
        
        {/* Main content */}
        <div className="flex flex-col gap-4 p-6 md:p-8 flex-grow">
          {/* Publication tag */}
          <div className="flex-shrink-0">
            <span className={`text-xs font-black text-foreground tracking-wider uppercase ${styles.hoverText} transition-colors`} aria-label={`Published in ${item.publication}`}>
              {item.publication}
            </span>
          </div>
          
          {/* Title */}
          <h3 className={`text-lg md:text-2xl font-black text-foreground leading-tight ${styles.hoverText} transition-colors`}>
            {item.title}
          </h3>
          
          {/* Quote */}
          {item.quote && (
            <blockquote className={`border-l-4 border-foreground pl-4 italic text-foreground ${styles.hoverText} text-sm md:text-base leading-relaxed transition-colors duration-300`}>
              {item.quote}
            </blockquote>
          )}
        </div>
        
        {/* Bottom section with date and CTA - consistent with compact cards */}
        <div className="border-t-2 border-foreground/20 px-6 md:px-8 py-4 flex items-center justify-between gap-4">
          {/* Date */}
          <time 
            dateTime={item.date} 
            className="text-sm font-bold text-foreground/60 group-hover:text-foreground transition-colors flex-shrink-0"
            aria-label={`Published ${formattedDate}`}
          >
            {formattedDate}
          </time>
          
          {/* CTA */}
          {isClickable && (
            <span className={`text-foreground ${styles.hoverText} font-black underline text-sm transition-colors inline-flex items-center gap-1`}>
              Read Article
              <Icon name="chevron-right" size={14} className="group-hover:translate-x-1 transition-all" aria-hidden="true" />
            </span>
          )}
        </div>
      </article>
    );
  }

  // Compact card for presentations, podcasts, panels
  return (
    <article
      onClick={isClickable ? handleClick : undefined}
      style={{ animationDelay: staggerDelay }}
      className={`bg-background border-4 border-foreground shadow-neo-sm flex flex-col ${styles.cardHoverBg} ${
        isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] ${styles.shadowColor}` : 'transition-all duration-300'
      } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative`}
      aria-label={`${item.type}: ${item.title} at ${item.venue || item.publication}${hasVideo ? ' - Video available' : ''}. ${formattedDate}`}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : 'article'}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      {/* Video indicator in top right */}
      {hasVideo && (
        <div className="absolute top-4 right-4 z-10" aria-hidden="true">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
            <div className={`absolute inset-0 ${styles.glowColor} group-hover:bg-background border-4 border-foreground shadow-neo-xs transition-all duration-200 flex items-center justify-center`}>
              <Icon 
                name="play" 
                size={16} 
                className="text-white fill-white group-hover:opacity-0 transition-all duration-200"
              />
              <Icon 
                name="play" 
                size={16} 
                className={`absolute inset-0 m-auto ${styles.iconColor} fill-current opacity-0 group-hover:opacity-100 transition-all duration-200`}
              />
            </div>
          </div>
        </div>
      )}
      
      {/* External link indicator for non-video cards */}
      {isClickable && !hasVideo && (
        <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity z-10" aria-hidden="true">
          <Icon name="external-link" size={16} className="text-foreground group-hover:text-white transition-colors" />
        </div>
      )}
      
      {/* Main content */}
      <div className="p-4 flex-grow">
        <div className={isClickable ? 'pr-12' : ''}>
          <h3 className="text-sm md:text-base font-black mb-2 text-foreground group-hover:text-white leading-snug line-clamp-3 transition-colors">
            {item.title}
          </h3>
          <div className="text-xs font-bold text-foreground group-hover:text-white transition-colors">
            {Array.isArray(item.venue) ? (
              item.venue.map((v, i) => (
                <div key={i}>{v}</div>
              ))
            ) : (
              <div>{item.venue || item.publication}</div>
            )}
            {item.description === "Moderator" && (
              <div className="text-accent group-hover:text-white transition-colors font-black mt-1">
                MODERATOR
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom section with date and CTA - consistent with article cards */}
      <div className="border-t-2 border-foreground/20 px-4 py-4 flex items-center justify-between gap-2">
        {/* Date */}
        <time 
          dateTime={item.date} 
          className="text-xs font-bold text-foreground/60 group-hover:text-white transition-colors flex-shrink-0"
          aria-label={`Published ${formattedDate}`}
        >
          {formattedDate}
        </time>
        
        {/* CTA */}
        {isClickable && (
          <span className="text-foreground group-hover:text-white font-black underline text-xs transition-colors inline-flex items-center gap-1 whitespace-nowrap">
            {hasVideo ? 'Watch' : 'View'}
            <Icon name="chevron-right" size={12} className="group-hover:translate-x-1 transition-all" aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
