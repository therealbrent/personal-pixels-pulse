import { useState, useEffect, useRef } from 'react';
import { getRSSContent } from '../utils/rssParser';
import { useIsMobile } from '../hooks/use-mobile';
import placeholder1 from '../assets/placeholder-1.jpg';
import placeholder2 from '../assets/placeholder-2.jpg';
import placeholder3 from '../assets/placeholder-3.jpg';

interface RSSItem {
  title: string;
  description: string;
  link: string;
  image?: string;
  pubDate?: string;
  source: 'Content Strategy' | '200 MAX';
}

const AccessibleSlotMachine = () => {
  const [reels, setReels] = useState<[RSSItem | null, RSSItem | null, RSSItem | null]>([null, null, null]);
  const [allItems, setAllItems] = useState<RSSItem[]>([]);
  const [isSpinning, setIsSpinning] = useState([false, false, false]);
  const [loading, setLoading] = useState(true);
  const [spinAnnouncement, setSpinAnnouncement] = useState('');
  const isMobile = useIsMobile();
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktop = window.innerWidth >= 1024;
  const placeholders = [placeholder1, placeholder2, placeholder3];
  const announceRef = useRef<HTMLDivElement>(null);

  // Determine how many reels to show based on screen size
  const visibleReelCount = isDesktop ? 3 : 1;

  useEffect(() => {
    // Load RSS content from your actual feeds
    setTimeout(() => {
      const rssItems = getRSSContent();
      // Add placeholder images to items that don't have them
      const itemsWithPlaceholders = rssItems.map((item, index) => ({
        ...item,
        image: item.image || placeholders[index % placeholders.length]
      }));
      
      setAllItems(itemsWithPlaceholders);
      // Initialize all reels with random items
      const initialReels: [RSSItem, RSSItem, RSSItem] = [
        itemsWithPlaceholders[Math.floor(Math.random() * itemsWithPlaceholders.length)],
        itemsWithPlaceholders[Math.floor(Math.random() * itemsWithPlaceholders.length)],
        itemsWithPlaceholders[Math.floor(Math.random() * itemsWithPlaceholders.length)]
      ];
      setReels(initialReels);
      setLoading(false);
    }, 1000);
  }, []);

  const getRandomItem = () => {
    if (allItems.length === 0) return null;
    return allItems[Math.floor(Math.random() * allItems.length)];
  };

  const handleSpin = () => {
    if (isSpinning.some(spinning => spinning) || allItems.length === 0) return;
    
    // Announce to screen readers
    setSpinAnnouncement('Spinning the slot machine to find random articles...');
    
    // Start all reels spinning
    setIsSpinning([true, true, true]);
    
    // Spin each reel rapidly
    const spinIntervals = [0, 1, 2].map((reelIndex) => {
      return setInterval(() => {
        const randomItem = getRandomItem();
        if (randomItem) {
          setReels(prev => {
            const newReels: [RSSItem | null, RSSItem | null, RSSItem | null] = [...prev];
            newReels[reelIndex] = randomItem;
            return newReels;
          });
        }
      }, 100); // Fast spinning
    });

    // Stop reels one by one from left to right
    setTimeout(() => {
      // Stop first reel
      clearInterval(spinIntervals[0]);
      setIsSpinning(prev => [false, prev[1], prev[2]]);
      // Set final item for first reel
      const finalItem1 = getRandomItem();
      if (finalItem1) {
        setReels(prev => [finalItem1, prev[1], prev[2]]);
      }
    }, 1500); // Stop after 1.5 seconds

    setTimeout(() => {
      // Stop second reel
      clearInterval(spinIntervals[1]);
      setIsSpinning(prev => [prev[0], false, prev[2]]);
      // Set final item for second reel
      const finalItem2 = getRandomItem();
      if (finalItem2) {
        setReels(prev => [prev[0], finalItem2, prev[2]]);
      }
    }, 2500); // Stop after 2.5 seconds

    setTimeout(() => {
      // Stop third reel
      clearInterval(spinIntervals[2]);
      setIsSpinning(prev => [prev[0], prev[1], false]);
      // Set final item for third reel
      const finalItem3 = getRandomItem();
      if (finalItem3) {
        setReels(prev => [prev[0], prev[1], finalItem3]);
      }
      
      // Announce completion to screen readers
      setSpinAnnouncement('Slot machine has finished spinning. New articles are now displayed.');
    }, 3500); // Stop after 3.5 seconds
  };

  const ReelContent = ({ item, isSpinning: spinning, reelIndex }: { 
    item: RSSItem | null, 
    isSpinning: boolean,
    reelIndex: number 
  }) => {
    if (!item) return null;

    return (
      <article 
        className={`h-full transition-all duration-200 ${spinning ? 'blur-sm scale-95' : 'blur-0 scale-100'}`}
        aria-label={`Article ${reelIndex + 1}: ${item.title}`}
      >
        {/* Source Badge */}
        <div className="mb-3">
          <span 
            className={`inline-flex px-2 py-1 text-xs font-bold border-2 border-foreground ${
              item.source === '200 MAX' 
                ? 'bg-destructive text-destructive-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}
            aria-label={`Source: ${item.source}`}
          >
            {item.source}
          </span>
        </div>

        {/* Featured Image - 16:9 aspect ratio */}
        <div className="mb-3 border-2 border-foreground overflow-hidden aspect-video">
          <img 
            src={item.image || placeholder1} 
            alt={`Featured image for article: ${item.title}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = placeholder1;
            }}
          />
        </div>

        {/* Title */}
        <h4 className="text-sm font-bold mb-2 text-foreground leading-tight line-clamp-2">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Read More Link */}
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-primary-foreground font-semibold py-2 px-3 text-xs border-2 border-foreground hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
          aria-label={`Read full article: ${item.title} - Opens in new tab`}
        >
          Read Article →
        </a>
      </article>
    );
  };

  if (loading) {
    return (
      <section 
        className="bg-muted/20 border-4 border-foreground p-8"
        aria-label="Loading slot machine content"
      >
        <div className="text-center">
          <div className="animate-pulse" role="status" aria-label="Loading articles">
            <div className="h-8 bg-muted rounded mb-4"></div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="h-32 bg-muted rounded" aria-hidden="true"></div>
              <div className="h-32 bg-muted rounded" aria-hidden="true"></div>
              <div className="h-32 bg-muted rounded" aria-hidden="true"></div>
            </div>
            <div className="h-4 bg-muted rounded" aria-hidden="true"></div>
            <span className="visually-hidden">Loading slot machine articles...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="bg-gradient-to-br from-primary/10 via-accent/5 to-destructive/10 border-4 border-foreground p-8 relative"
      aria-labelledby="slot-machine-title"
    >
      {/* Screen reader announcements */}
      <div 
        ref={announceRef}
        className="visually-hidden" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {spinAnnouncement}
      </div>

      {/* Slot Machine Header */}
      <header className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-6 h-6 bg-destructive border-2 border-foreground transform rotate-45" aria-hidden="true"></div>
          <h2 id="slot-machine-title" className="text-2xl font-bold text-foreground tracking-wide">
            REALLY SIMPLE SLOT MACHINE
          </h2>
          <div className="w-6 h-6 bg-accent border-2 border-foreground transform -rotate-45" aria-hidden="true"></div>
        </div>
        <p className="text-muted-foreground font-medium">
          Fresh insights from my RSS feeds. {visibleReelCount === 1 ? 'Showing 1 article' : `Showing ${visibleReelCount} articles`}.
        </p>
      </header>

      {/* Slot Machine Window */}
      <div className="relative">
        {/* Slot machine frame */}
        <div className="bg-card border-4 border-foreground relative overflow-hidden">
          
          {/* Responsive Reels Grid */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4"
            role="region"
            aria-label={`Slot machine reels showing ${visibleReelCount} article${visibleReelCount === 1 ? '' : 's'}`}
          >
            {reels.slice(0, visibleReelCount).map((item, index) => (
              <div 
                key={index} 
                className="bg-background border-2 border-foreground p-4 min-h-[350px] flex flex-col"
                role="group"
                aria-label={`Reel ${index + 1}`}
              >
                <ReelContent item={item} isSpinning={isSpinning[index]} reelIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spin Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleSpin}
          disabled={isSpinning.some(spinning => spinning)}
          className={`font-bold py-4 px-8 border-4 border-foreground transform transition-all duration-200 min-h-[44px] ${
            isSpinning.some(spinning => spinning)
              ? 'bg-muted text-muted-foreground cursor-not-allowed scale-95' 
              : 'bg-accent text-accent-foreground hover:scale-105 hover:bg-accent/90 focus:ring-2 focus:ring-focus-ring focus:ring-offset-2'
          }`}
          aria-describedby="spin-button-description"
          type="button"
        >
          {isSpinning.some(spinning => spinning) ? '🎰 SPINNING...' : '🎰 SPIN FOR RANDOM ARTICLES'}
        </button>
        <div id="spin-button-description" className="visually-hidden">
          Activates the slot machine to randomly select and display articles from RSS feeds
        </div>
      </div>

      {/* Neo-brutalist decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45" aria-hidden="true"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-destructive border-2 border-foreground transform -rotate-45" aria-hidden="true"></div>
    </section>
  );
};

export default AccessibleSlotMachine;