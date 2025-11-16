import { Icon } from './ui/icon';
import type { ThoughtLeadershipItem, ContentType } from '@/data/thoughtLeadership';
import { format } from 'date-fns';

interface ThoughtLeadershipCardProps {
  item: ThoughtLeadershipItem;
  index: number;
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
        className={`md:col-span-2 bg-background border-2 sm:border-4 border-foreground shadow-neo-md ${styles.cardHoverBg} ${
          isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}` : 'transition-all duration-300'
        } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative overflow-hidden`}
        aria-label={`Article: ${item.title} featured in ${item.publication}`}
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
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
            <Icon name="external-link" size={16} className={`text-foreground ${styles.hoverText} transition-colors sm:w-5 sm:h-5`} />
          </div>
        )}
        
        {/* Content stacked in order with consistent left alignment */}
        <div className="flex flex-col p-4 pr-10 sm:p-6 sm:pr-12">
          {/* DATE */}
          <div className="text-[10px] font-black text-foreground tracking-widest uppercase opacity-60 mb-5" aria-label={`Date: ${item.date}`}>
            {formatDate(item.date)}
          </div>

          {/* PUBLICATION */}
          {item.publication && (
            <div className={`text-xs font-black text-foreground tracking-wider uppercase opacity-80 ${styles.hoverText} transition-colors mb-3`} aria-label={`Published in ${item.publication}`}>
              {item.publication}
            </div>
          )}
          
          {/* TITLE */}
          <h3 className={`text-xl md:text-3xl font-black text-foreground leading-tight ${styles.hoverText} transition-colors mb-4`}>
            {item.title}
          </h3>
          
          {/* QUOTE */}
          {item.quote && (
            <blockquote className={`border-l-4 border-foreground pl-4 italic text-foreground ${styles.hoverText} text-base md:text-lg leading-relaxed transition-colors duration-300 opacity-90 mb-6`}>
              {item.quote}
            </blockquote>
          )}
          
          {/* CTA */}
          {isClickable && (
            <div>
              <span className={`text-foreground ${styles.hoverText} font-black underline text-sm transition-colors inline-flex items-center gap-1 focus:underline`}>
                Read Article
                <Icon name="chevron-right" size={14} className={`${styles.hoverText} group-hover:translate-x-1 transition-all`} aria-hidden="true" />
              </span>
            </div>
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
      className={`bg-background border-2 sm:border-4 border-foreground shadow-neo-sm ${styles.cardHoverBg} ${
        isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}` : 'transition-all duration-300'
      } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative overflow-hidden min-h-[140px] sm:min-h-[160px]`}
      aria-label={`${item.type}: ${item.title} at ${item.venue || item.publication}${hasVideo ? ' - Video available' : ''}`}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : 'article'}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      {/* Clickable indicator - top right */}
      {isClickable && (
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <Icon name="external-link" size={14} className="text-foreground group-hover:text-white transition-colors sm:w-4 sm:h-4" />
        </div>
      )}

      {/* Content stacked in order with consistent left alignment */}
      <div className="flex flex-col p-4 pr-10 sm:p-5 sm:pr-16">
        {/* DATE */}
        <div className="text-[9px] sm:text-[10px] font-black text-foreground group-hover:text-white tracking-widest uppercase opacity-60 transition-colors mb-3 sm:mb-4" aria-label={`Date: ${item.date}`}>
          {formatDate(item.date)}
        </div>

        {/* VENUE */}
        {item.venue && (
          <>
            {Array.isArray(item.venue) ? (
              item.venue.map((v, i) => (
                <div key={i} className="text-[10px] sm:text-xs font-bold text-foreground group-hover:text-white transition-colors opacity-80 mb-1">
                  {v}
                </div>
              ))
            ) : (
              <div className="text-[10px] sm:text-xs font-bold text-foreground group-hover:text-white transition-colors opacity-80 mb-2">
                {item.venue}
              </div>
            )}
          </>
        )}

        {/* PUBLICATION (for items without venue) */}
        {!item.venue && item.publication && (
          <div className="text-[10px] sm:text-xs font-bold text-foreground group-hover:text-white transition-colors opacity-80 mb-2">
            {item.publication}
          </div>
        )}
        
        {/* TITLE */}
        <h3 className="text-sm sm:text-base md:text-lg font-black text-foreground group-hover:text-white leading-tight transition-colors mb-2 sm:mb-3">
          {item.title}
        </h3>

        {/* Moderator badge */}
        {item.description === "Moderator" && (
          <div className="inline-flex items-center bg-foreground text-background px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-2 sm:mb-3 group-hover:bg-white group-hover:text-foreground transition-colors">
            <span>Moderator</span>
          </div>
        )}

        {/* CTA */}
        {isClickable && (
          <div>
            <span className={`text-foreground group-hover:text-white font-black underline text-xs sm:text-sm transition-colors inline-flex items-center gap-1 focus:underline`}>
              {hasVideo ? 'Watch Video' : 'View Content'}
              <Icon name="chevron-right" size={12} className="group-hover:text-white group-hover:translate-x-1 transition-all sm:w-3.5 sm:h-3.5" aria-hidden="true" />
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
