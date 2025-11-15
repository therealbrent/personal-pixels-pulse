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
        className={`md:col-span-2 bg-background border-4 border-foreground shadow-neo-md ${styles.cardHoverBg} ${
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
          <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
            <Icon name="external-link" size={20} className={`text-foreground ${styles.hoverText} transition-colors`} />
          </div>
        )}
        
        {/* Content stacked in order with consistent left alignment */}
        <div className="flex flex-col gap-4 p-6 pr-12">
          {/* DATE */}
          <div className="text-[10px] font-black text-foreground tracking-widest uppercase opacity-60" aria-label={`Date: ${item.date}`}>
            {formatDate(item.date)}
          </div>

          {/* PUBLICATION */}
          {item.publication && (
            <div className={`text-xs font-black text-foreground tracking-wider uppercase opacity-80 ${styles.hoverText} transition-colors`} aria-label={`Published in ${item.publication}`}>
              {item.publication}
            </div>
          )}
          
          {/* TITLE */}
          <h3 className={`text-xl md:text-3xl font-black text-foreground leading-tight ${styles.hoverText} transition-colors`}>
            {item.title}
          </h3>
          
          {/* QUOTE */}
          {item.quote && (
            <blockquote className={`border-l-4 border-foreground pl-4 italic text-foreground ${styles.hoverText} text-base md:text-lg leading-relaxed transition-colors duration-300 opacity-90`}>
              {item.quote}
            </blockquote>
          )}
          
          {/* CTA */}
          {isClickable && (
            <div className="mt-2">
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
      className={`bg-background border-4 border-foreground shadow-neo-sm ${styles.cardHoverBg} ${
        isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] ${styles.shadowColor}` : 'transition-all duration-300'
      } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative overflow-hidden min-h-[160px]`}
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
      {/* Clickable indicators - top right */}
      {isClickable && !hasVideo && (
        <div className="absolute top-5 right-5 opacity-30 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <Icon name="external-link" size={16} className="text-foreground group-hover:text-white transition-colors" />
        </div>
      )}
      
      {hasVideo && (
        <div className="absolute top-5 right-5" aria-hidden="true">
          <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
            <div className={`absolute inset-0 ${styles.glowColor} group-hover:bg-background border-4 border-foreground shadow-neo-sm group-hover:shadow-neo-xs group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center`}>
              <div className="relative ml-1">
                <Icon 
                  name="play" 
                  size={20} 
                  className="text-white fill-white group-hover:opacity-0 transition-all duration-300 group-hover:rotate-90"
                />
                <Icon 
                  name="play" 
                  size={20} 
                  className={`absolute inset-0 ${styles.iconColor} fill-current opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content stacked in order with consistent left alignment */}
      <div className="flex flex-col gap-3 p-5 pr-16">
        {/* DATE */}
        <div className="text-[10px] font-black text-foreground group-hover:text-white tracking-widest uppercase opacity-60 transition-colors" aria-label={`Date: ${item.date}`}>
          {formatDate(item.date)}
        </div>

        {/* VENUE */}
        {item.venue && (
          <div className="text-xs font-bold text-foreground group-hover:text-white transition-colors opacity-80">
            {Array.isArray(item.venue) ? (
              item.venue.map((v, i) => (
                <div key={i}>{v}</div>
              ))
            ) : (
              <div>{item.venue}</div>
            )}
          </div>
        )}

        {/* PUBLICATION (for items without venue) */}
        {!item.venue && item.publication && (
          <div className="text-xs font-bold text-foreground group-hover:text-white transition-colors opacity-80">
            {item.publication}
          </div>
        )}
        
        {/* TITLE */}
        <h3 className="text-base md:text-lg font-black text-foreground group-hover:text-white leading-tight transition-colors">
          {item.title}
        </h3>

        {/* Moderator badge */}
        {item.description === "Moderator" && (
          <div className="text-accent group-hover:text-white transition-colors font-black text-xs tracking-wider">
            MODERATOR
          </div>
        )}
      </div>
    </article>
  );
}
