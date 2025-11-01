import { useState } from 'react';
import { Icon } from './ui/icon';
import { 
  getThoughtLeadershipByType, 
  type ContentType,
  type ThoughtLeadershipItem 
} from '@/data/thoughtLeadership';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterType = ContentType | 'all';

export default function ThoughtLeadershipFeed() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const items = getThoughtLeadershipByType(activeFilter);

  const filterOptions: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'presentation', label: 'Presentations' },
    { value: 'podcast', label: 'Podcasts' },
    { value: 'panel', label: 'Panels' },
    { value: 'article', label: 'Media Features' },
  ];

  const getItemHoverBg = (type: ContentType) => {
    switch (type) {
      case 'presentation': return 'hover:bg-background';
      case 'podcast': return 'hover:bg-secondary';
      case 'panel': return 'hover:bg-accent';
      case 'article': return 'hover:bg-primary';
      default: return 'hover:bg-background';
    }
  };

  const getItemHoverText = (type: ContentType) => {
    switch (type) {
      case 'presentation': return 'hover:text-foreground';
      case 'podcast': return 'hover:text-secondary-foreground';
      case 'panel': return 'hover:text-accent-foreground';
      case 'article': return 'hover:text-primary-foreground';
      default: return 'hover:text-foreground';
    }
  };

  const renderItem = (item: ThoughtLeadershipItem, index: number) => {
    const hoverBg = getItemHoverBg(item.type);
    const hoverText = getItemHoverText(item.type);
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

    // For articles, use larger cards with quotes
    if (item.type === 'article') {
      return (
        <div
          key={item.id}
          onClick={isClickable ? handleClick : undefined}
          style={{ animationDelay: staggerDelay }}
          className={`bg-background border-4 border-foreground shadow-neo-md p-6 md:p-8 ${hoverBg} ${
            isClickable ? 'cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm' : ''
          } transition-all duration-300 animate-fade-in group`}
        >
          <div className="mb-3">
            <span className="text-xs font-black text-foreground/60 tracking-wider uppercase group-hover:text-primary-foreground/60 transition-colors">
              {item.publication}
            </span>
          </div>
          <h3 className={`text-lg md:text-xl font-black mb-4 text-foreground leading-tight ${hoverText} transition-colors`}>
            {item.title}
          </h3>
          {item.quote && (
            <blockquote className="mb-4 border-l-4 border-foreground/40 group-hover:border-accent pl-4 italic text-foreground/80 text-sm md:text-base leading-relaxed transition-colors">
              {item.quote}
            </blockquote>
          )}
          {isClickable && (
            <span className="text-foreground group-hover:text-accent font-bold underline text-sm transition-colors">
              Read Article
            </span>
          )}
        </div>
      );
    }

    // For other types, use compact cards
    return (
      <div
        key={item.id}
        onClick={isClickable ? handleClick : undefined}
        style={{ animationDelay: staggerDelay }}
        className={`bg-background border-2 border-foreground shadow-neo-sm p-4 min-h-[100px] flex flex-col justify-between ${hoverBg} ${
          isClickable ? 'cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative' : ''
        } transition-all duration-300 animate-fade-in group`}
      >
        <div className={isClickable ? 'pr-12' : ''}>
          <h3 className={`text-sm md:text-base font-black mb-2 text-foreground line-clamp-2 ${hoverText} transition-colors`}>
            {item.title}
          </h3>
          <p className="text-xs font-bold text-foreground/60 group-hover:text-foreground/80 transition-colors">
            {item.venue || item.publication}
            {item.description && ` • ${item.description}`}
          </p>
        </div>
        {hasVideo && (
          <div className="absolute bottom-4 right-4">
            <div className="relative">
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-60 animate-pulse" />
              {/* Play button */}
              <div className="relative bg-accent rounded-full p-2 group-hover:scale-110 transition-transform duration-200">
                <Icon 
                  name="play" 
                  size={20} 
                  className="text-accent-foreground fill-accent-foreground" 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="mb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto bg-primary border-8 border-foreground shadow-neo-xl p-6 md:p-8 mb-0">
        <h2 className="text-2xl md:text-4xl font-black mb-3 text-primary-foreground leading-tight">
          THOUGHT LEADERSHIP ARCHIVE
        </h2>
        <p className="text-lg md:text-xl font-bold text-primary-foreground/90 leading-relaxed">
          Global stages to local meetups. Wherever marketing, technology, and design collide.
        </p>
      </div>

      {/* Filters & Content Container */}
      <div className="max-w-7xl mx-auto bg-background border-8 border-foreground shadow-neo-xl border-t-0 p-6 md:p-8">
        
        {/* Desktop Tabs */}
        <div className="hidden md:flex gap-2 mb-8 flex-wrap">
          {filterOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-6 py-3 font-black text-sm border-2 border-foreground transition-all duration-200 ${
                activeFilter === value
                  ? 'bg-accent text-accent-foreground shadow-neo-sm translate-x-[2px] translate-y-[2px]'
                  : 'bg-background text-foreground shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <Select value={activeFilter} onValueChange={(value) => setActiveFilter(value as FilterType)}>
            <SelectTrigger className="w-full border-2 border-foreground bg-background text-foreground font-black shadow-neo-sm">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="bg-background border-2 border-foreground z-50">
              {filterOptions.map(({ value, label }) => (
                <SelectItem 
                  key={value} 
                  value={value}
                  className="font-bold cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-bold text-foreground/60">
              No items found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
