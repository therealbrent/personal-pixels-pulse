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
}> = {
  article: {
    hoverBg: 'hover:bg-primary',
    hoverText: 'hover:text-primary-foreground',
    hoverBorder: 'group-hover:border-primary',
    glowColor: 'bg-primary'
  },
  presentation: {
    hoverBg: 'hover:bg-cobalt',
    hoverText: 'hover:text-cobalt-foreground',
    hoverBorder: 'group-hover:border-cobalt',
    glowColor: 'bg-cobalt'
  },
  panel: {
    hoverBg: 'hover:bg-accent',
    hoverText: 'hover:text-accent-foreground',
    hoverBorder: 'group-hover:border-accent',
    glowColor: 'bg-accent'
  },
  podcast: {
    hoverBg: 'hover:bg-oxblood',
    hoverText: 'hover:text-oxblood-foreground',
    hoverBorder: 'group-hover:border-oxblood',
    glowColor: 'bg-oxblood'
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
          isClickable ? 'cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm' : ''
        } transition-all duration-300 animate-fade-in group`}
        aria-label={`${item.title} from ${item.publication}`}
      >
        <div className="mb-3">
          <span className="text-xs font-black text-foreground/60 tracking-wider uppercase group-hover:text-primary-foreground/80 transition-colors">
            {item.publication}
          </span>
        </div>
        <h3 className={`text-lg md:text-xl font-black mb-4 text-foreground leading-tight ${styles.hoverText} transition-colors`}>
          {item.title}
        </h3>
        {item.quote && (
          <blockquote className={`mb-4 border-l-4 border-foreground/40 ${styles.hoverBorder} pl-4 italic text-foreground/80 group-hover:text-primary-foreground/90 text-sm md:text-base leading-relaxed transition-colors`}>
            {item.quote}
          </blockquote>
        )}
        {isClickable && (
          <span className={`text-foreground ${styles.hoverText} font-bold underline text-sm transition-colors`}>
            Read Article
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
      className={`bg-background border-2 border-foreground shadow-neo-sm p-4 min-h-[100px] flex flex-col justify-between ${styles.hoverBg} ${
        isClickable ? 'cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative' : ''
      } transition-all duration-300 animate-fade-in group`}
      aria-label={`${item.title} at ${item.venue || item.publication}`}
    >
      <div className={hasVideo ? 'pr-12' : ''}>
        <h3 className={`text-sm md:text-base font-black mb-2 text-foreground line-clamp-2 ${styles.hoverText} transition-colors`}>
          {item.title}
        </h3>
        <p className={`text-xs font-bold text-foreground ${styles.hoverText} transition-colors`}>
          {item.venue || item.publication}
          {item.description && ` • ${item.description}`}
        </p>
      </div>
      {hasVideo && (
        <div className="absolute bottom-4 right-4" aria-label="Video available">
          <div className="relative w-12 h-12">
            {/* Outer pulsing ring */}
            <div className={`absolute inset-0 ${styles.glowColor} rounded-full opacity-30 animate-pulse`} />
            {/* Inner solid background */}
            <div className={`absolute inset-2 ${styles.glowColor} rounded-full group-hover:scale-110 transition-all duration-200 border-2 border-foreground shadow-neo-xs`}>
              <div className="w-full h-full flex items-center justify-center">
                <Icon 
                  name="play" 
                  size={16} 
                  className="text-foreground fill-foreground ml-0.5" 
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
