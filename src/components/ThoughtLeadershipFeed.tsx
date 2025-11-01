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

  const getItemBgColor = (type: ContentType) => {
    switch (type) {
      case 'presentation': return 'bg-background';
      case 'podcast': return 'bg-secondary';
      case 'panel': return 'bg-accent';
      case 'article': return 'bg-primary';
      default: return 'bg-background';
    }
  };

  const getItemTextColor = (type: ContentType) => {
    switch (type) {
      case 'presentation': return 'text-foreground';
      case 'podcast': return 'text-secondary-foreground';
      case 'panel': return 'text-accent-foreground';
      case 'article': return 'text-primary-foreground';
      default: return 'text-foreground';
    }
  };

  const renderItem = (item: ThoughtLeadershipItem) => {
    const bgColor = getItemBgColor(item.type);
    const textColor = getItemTextColor(item.type);
    const hasVideo = !!item.videoUrl;
    const hasUrl = !!item.url;
    const isClickable = hasVideo || hasUrl;
    
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
          className={`${bgColor} border-4 border-foreground shadow-neo-md p-6 md:p-8 ${
            isClickable ? 'cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200' : ''
          } group`}
        >
          <div className="mb-3">
            <span className="text-xs font-black text-primary-foreground/60 tracking-wider uppercase">
              {item.publication}
            </span>
          </div>
          <h3 className={`text-lg md:text-xl font-black mb-4 ${textColor} leading-tight ${
            isClickable ? 'group-hover:text-accent transition-colors' : ''
          }`}>
            {item.title}
          </h3>
          {item.quote && (
            <blockquote className={`mb-4 border-l-4 border-primary-foreground/40 pl-4 italic ${textColor}/80 text-sm md:text-base leading-relaxed ${
              isClickable ? 'group-hover:border-accent transition-colors' : ''
            }`}>
              {item.quote}
            </blockquote>
          )}
          {isClickable && (
            <span className={`${textColor} group-hover:text-accent font-bold underline text-sm transition-colors`}>
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
        className={`${bgColor} border-2 border-foreground shadow-neo-sm p-4 min-h-[100px] flex flex-col justify-between ${
          isClickable ? 'cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs transition-all duration-200 relative' : ''
        } group`}
      >
        <div className={isClickable ? 'pr-8' : ''}>
          <h3 className={`text-sm md:text-base font-black mb-2 ${textColor} line-clamp-2 ${
            isClickable ? 'group-hover:text-accent transition-colors' : ''
          }`}>
            {item.title}
          </h3>
          <p className={`text-xs font-bold ${textColor}/60`}>
            {item.venue || item.publication}
            {item.description && ` • ${item.description}`}
          </p>
        </div>
        {hasVideo && (
          <Icon 
            name="play" 
            size={16} 
            className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" 
          />
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
          {items.map(renderItem)}
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
