import { Icon } from './ui/icon';
import type { ThoughtLeadershipItem, ContentType } from '@/data/thoughtLeadership';

interface ThoughtLeadershipCardProps {
  item: ThoughtLeadershipItem;
  index: number;
}

// Content type style mappings using design system
const contentTypeStyles: Record<ContentType, {
  hoverBg: string;
  hoverText: string;
  hoverBorder: string;
  glowColor: string;
  shadowColor: string;
}> = {
  article: {
    hoverBg: 'hover:bg-primary',
    hoverText: 'hover:text-primary-foreground',
    hoverBorder: 'group-hover:border-primary',
    glowColor: 'bg-primary',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]'
  },
  presentation: {
    hoverBg: 'hover:bg-cobalt',
    hoverText: 'hover:text-cobalt-foreground',
    hoverBorder: 'group-hover:border-cobalt',
    glowColor: 'bg-cobalt',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--cobalt))]'
  },
  panel: {
    hoverBg: 'hover:bg-accent',
    hoverText: 'hover:text-accent-foreground',
    hoverBorder: 'group-hover:border-accent',
    glowColor: 'bg-accent',
    shadowColor: 'group-hover:shadow-[4px_4px_0px_0px_hsl(var(--accent))]'
  },
  podcast: {
    hoverBg: 'hover:bg-oxblood',
    hoverText: 'hover:text-oxblood-foreground',
    hoverBorder: 'group-hover:border-oxblood',
    glowColor: 'bg-oxblood',
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
        className={`bg-background border-4 border-foreground shadow-neo-md p-6 md:p-8 ${styles.hoverBg} ${
          isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] ${styles.shadowColor}` : 'transition-all duration-300'
        } animate-fade-in group focus-within:ring-4 focus-within:ring-focus-ring focus-within:ring-offset-2`}
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
        <div className="mb-3">
          <span className="text-xs font-black text-foreground tracking-wider uppercase group-hover:text-primary-foreground/90 transition-colors" aria-label={`Published in ${item.publication}`}>
            {item.publication}
          </span>
        </div>
        <h3 className={`text-lg md:text-xl font-black mb-4 text-foreground leading-tight ${styles.hoverText} transition-colors`}>
          {item.title}
        </h3>
        {item.quote && (
          <blockquote className={`mb-4 border-l-4 border-foreground ${styles.hoverBorder} pl-4 italic text-foreground group-hover:text-primary-foreground/95 text-sm md:text-base leading-relaxed transition-all duration-300`}>
            {item.quote}
          </blockquote>
        )}
        {isClickable && (
          <span className={`text-foreground ${styles.hoverText} font-black underline text-sm transition-colors inline-flex items-center gap-1`}>
            Read Article
            <Icon name="chevron-right" size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </span>
        )}
      </article>
    );
  }

  // Compact card for presentations, podcasts, panels
  return (
    <article
      onClick={isClickable ? handleClick : undefined}
      style={{ animationDelay: staggerDelay }}
      className={`bg-background border-2 border-foreground shadow-neo-sm p-4 min-h-[120px] flex flex-col justify-between ${styles.hoverBg} ${
        isClickable ? `cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] ${styles.shadowColor} relative` : 'transition-all duration-300 relative'
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
      <div className={hasVideo ? 'pr-14' : ''}>
        <h3 className={`text-sm md:text-base font-black mb-2 text-foreground leading-snug line-clamp-2 ${styles.hoverText} transition-colors`}>
          {item.title}
        </h3>
        <p className={`text-xs font-bold text-foreground ${styles.hoverText} transition-colors`}>
          {item.venue || item.publication}
          {item.description && ` • ${item.description}`}
        </p>
      </div>
      {hasVideo && (
        <div className="absolute bottom-3 right-3" aria-hidden="true">
          <div className="relative w-14 h-14">
            {/* Brutalist play button with hard shadow */}
            <div className={`absolute inset-0 ${styles.glowColor} border-4 border-foreground shadow-neo-sm group-hover:shadow-neo-xs group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center`}>
              <Icon 
                name="play" 
                size={20} 
                className="text-foreground fill-foreground ml-1" 
              />
            </div>
            {/* Pulsing indicator */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 ${styles.glowColor} border-2 border-foreground rounded-full animate-pulse`} />
          </div>
        </div>
      )}
    </article>
  );
}
