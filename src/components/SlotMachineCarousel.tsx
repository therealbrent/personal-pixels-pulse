import { useState, useEffect } from 'react';
import { getRSSContent } from '../utils/rssParser';
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

const SlotMachineCarousel = () => {
  const [currentItem, setCurrentItem] = useState<RSSItem | null>(null);
  const [allItems, setAllItems] = useState<RSSItem[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [loading, setLoading] = useState(true);
  const placeholders = [placeholder1, placeholder2, placeholder3];

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
      setCurrentItem(itemsWithPlaceholders[0]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSpin = () => {
    if (isSpinning || allItems.length === 0) return;
    
    setIsSpinning(true);
    
    // Create spinning effect with multiple rapid changes
    let spinCount = 0;
    const maxSpins = 8 + Math.floor(Math.random() * 5); // 8-12 spins
    
    const spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allItems.length);
      setCurrentItem(allItems[randomIndex]);
      spinCount++;
      
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        // Final selection - ensure it's different from the starting item if possible
        let finalIndex = Math.floor(Math.random() * allItems.length);
        if (allItems.length > 1) {
          const startingIndex = allItems.findIndex(item => item === currentItem);
          while (finalIndex === startingIndex) {
            finalIndex = Math.floor(Math.random() * allItems.length);
          }
        }
        setCurrentItem(allItems[finalIndex]);
        setIsSpinning(false);
      }
    }, 150); // Fast spinning
  };

  if (loading) {
    return (
      <div className="bg-muted/20 border-4 border-foreground p-8 transform rotate-1">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-4"></div>
            <div className="h-32 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-destructive/10 border-4 border-foreground p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
      {/* Slot Machine Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-6 h-6 bg-destructive border-2 border-foreground transform rotate-45"></div>
          <h3 className="text-2xl font-bold text-foreground tracking-wide">WRITING ROULETTE</h3>
          <div className="w-6 h-6 bg-accent border-2 border-foreground transform -rotate-45"></div>
        </div>
        <p className="text-muted-foreground font-medium">Fresh insights from my content universe</p>
      </div>

      {/* Slot Machine Window */}
      <div className="relative">
        {/* Slot machine frame */}
        <div className="bg-card border-4 border-foreground relative overflow-hidden min-h-[300px]">
          {/* Spinning indicator overlay */}
          {isSpinning && (
            <div className="absolute inset-0 bg-accent/20 flex items-center justify-center z-10">
              <div className="text-4xl font-bold text-foreground animate-pulse">🎰</div>
            </div>
          )}
          
          {/* Content Card */}
          <div className={`p-6 transition-all duration-200 ${isSpinning ? 'blur-sm scale-95' : 'blur-0 scale-100'}`}>
            {currentItem && (
              <>
                {/* Source Badge */}
                <div className="mb-4">
                  <span className={`inline-flex px-3 py-1 text-sm font-bold border-2 border-foreground ${
                    currentItem.source === '200 MAX' 
                      ? 'bg-destructive text-destructive-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {currentItem.source}
                  </span>
                </div>

                {/* Featured Image - Always show with consistent height */}
                <div className="mb-4 border-2 border-foreground overflow-hidden h-32">
                  <img 
                    src={currentItem.image || placeholder1} 
                    alt="" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = placeholder1;
                    }}
                  />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold mb-3 text-foreground leading-tight">
                  {currentItem.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Read More Link */}
                <button 
                  onClick={() => window.open(currentItem.link, '_blank')}
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 border-2 border-foreground hover:bg-primary/90 transition-colors"
                >
                  Read Full Article →
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Spin Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`font-bold py-4 px-8 border-4 border-foreground transform transition-all duration-200 ${
            isSpinning 
              ? 'bg-muted text-muted-foreground cursor-not-allowed scale-95' 
              : 'bg-accent text-accent-foreground hover:scale-105 hover:bg-accent/90'
          }`}
        >
          {isSpinning ? '🎰 SPINNING...' : '🎰 SPIN FOR RANDOM ARTICLE'}
        </button>
      </div>

      {/* Neo-brutalist decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-destructive border-2 border-foreground transform -rotate-45"></div>
    </div>
  );
};

export default SlotMachineCarousel;