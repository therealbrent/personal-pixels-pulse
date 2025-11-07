import { Icon } from './ui/icon';
import type { ThoughtLeadershipItem, ContentType } from '@/data/thoughtLeadership';

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
  
  // Format date
  const formatDate = (dateStr: string) => {
    if (!dateStr || dateStr.includes('TODO')) return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  const formattedDate = formatDate(item.date);
  
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
        } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2 relative`}
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
          <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
            <Icon name="external-link" size={20} className={`text-foreground ${styles.hoverText} transition-colors`} />
          </div>
        )}
        
        {/* Content area */}
        <div className="flex flex-col gap-4 p-6 md:p-8 pb-4">
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
        
        {/* Gray horizontal rule */}
        <div className="border-t-2 border-foreground/20" />
        
        {/* Bottom section with date and CTA */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          {formattedDate && (
            <span className={`text-xs font-bold text-foreground/70 ${styles.hoverText} transition-colors`} aria-label={`Published ${formattedDate}`}>
              {formattedDate}
            </span>
          )}
          {isClickable && (
            <span className={`text-foreground ${styles.hoverText} font-black underline text-sm transition-colors inline-flex items-center gap-1 focus:underline`}>
              Read Article
              <Icon name="chevron-right" size={14} className={`${styles.hoverText} group-hover:translate-x-1 transition-all`} aria-hidden="true" />
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
      className={`bg-background border-2 border-foreground shadow-neo-sm flex flex-col ${styles.cardHoverBg} ${
        isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] ${styles.shadowColor}` : 'transition-all duration-300'
      } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2`}
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
      {/* Clickable indicator */}
      {isClickable && (
        <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <Icon name="external-link" size={16} className="text-foreground group-hover:text-white transition-colors" />
        </div>
      )}
      
      {/* Content area */}
      <div className="p-4 pr-8">
        <h3 className="text-sm md:text-base font-black mb-2 text-foreground group-hover:text-white leading-snug line-clamp-3 transition-colors">
          {item.title}
        </h3>
        <div className="text-xs font-bold text-foreground group-hover:text-white transition-colors space-y-1">
          <div className="flex-1">
            {Array.isArray(item.venue) ? (
              item.venue.map((v, i) => (
                <div key={i}>{v}</div>
              ))
            ) : (
              <div>{item.venue || item.publication}</div>
            )}
          </div>
          {item.description === "Moderator" && (
            <div className="text-accent group-hover:text-white transition-colors font-black">
              MODERATOR
            </div>
          )}
        </div>
      </div>
      
      {/* Gray horizontal rule */}
      <div className="border-t-2 border-foreground/20" />
      
      {/* Bottom section with date and CTA */}
      <div className="flex items-center justify-between px-4 py-3">
        {formattedDate && (
          <span className="text-xs font-bold text-foreground/70 group-hover:text-white/80 transition-colors">
            {formattedDate}
          </span>
        )}
        {isClickable && (
          <span className={`text-foreground ${styles.hoverText} font-black underline text-xs transition-colors inline-flex items-center gap-1`}>
            {hasVideo ? 'Watch Video' : 'Read Article'}
            <Icon name="chevron-right" size={12} className={`${styles.hoverText} group-hover:translate-x-1 transition-all`} aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
