import { useState, useEffect } from 'react';
import { getThoughtLeadershipByType, getThoughtLeadershipByTopic, getSortedThoughtLeadership, type ContentType } from '@/data/thoughtLeadership';
import ThoughtLeadershipCard from './ThoughtLeadershipCard';
import ThoughtLeadershipFilters from './ThoughtLeadershipFilters';

type FilterType = ContentType | 'all';

interface ThoughtLeadershipFeedProps {
  topicFilter?: string;
}

export default function ThoughtLeadershipFeed({ topicFilter }: ThoughtLeadershipFeedProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Get items based on topic or type filter
  let items = topicFilter 
    ? getThoughtLeadershipByTopic(topicFilter)
    : getThoughtLeadershipByType(activeFilter);
  
  // Reset type filter when topic filter is applied
  useEffect(() => {
    if (topicFilter) {
      setActiveFilter('all');
    }
  }, [topicFilter]);

  const filterOptions: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'presentation', label: 'Presentations' },
    { value: 'podcast', label: 'Podcasts' },
    { value: 'panel', label: 'Panels' },
    { value: 'article', label: 'Media Features' },
  ];

  return (
    <section className="mb-12 sm:mb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto bg-primary border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8 mb-0">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black mb-2 sm:mb-3 text-primary-foreground leading-tight">
          {topicFilter ? `TOPIC: ${topicFilter.toUpperCase()}` : 'THOUGHT LEADERSHIP ARCHIVE'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-bold text-primary-foreground/90 leading-relaxed">
          {topicFilter 
            ? `Filtering content tagged with "${topicFilter}"` 
            : 'Global stages to local meetups. Wherever marketing, technology, and design collide.'
          }
        </p>
      </div>

      {/* Filters & Content Container */}
      <div className="max-w-7xl mx-auto bg-background border-4 md:border-8 border-foreground shadow-neo-xl border-t-0 p-4 sm:p-6 md:p-8">
        {!topicFilter && (
          <ThoughtLeadershipFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            filterOptions={filterOptions}
          />
        )}

        {/* Feed Grid with debug alignment guides */}
        <div className="relative">
          {/* Debug vertical alignment guides - border(4px) + padding(16px) = 20px offset */}
          <div className="absolute inset-0 pointer-events-none z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" aria-hidden="true">
            <div className="border-l-4 border-accent" style={{ marginLeft: '20px' }}></div>
            <div className="border-l-4 border-cobalt" style={{ marginLeft: '20px' }}></div>
            <div className="border-l-4 border-primary hidden lg:block" style={{ marginLeft: '20px' }}></div>
          </div>
          
          <div 
            id="thought-leadership-grid" 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-max"
            style={{ gridAutoFlow: 'dense' }}
            role="region"
            aria-live="polite"
            aria-label={`Showing ${items.length} ${activeFilter === 'all' ? '' : activeFilter} items`}
          >
            {items.map((item, index) => (
              <ThoughtLeadershipCard key={item.id} item={item} index={index} />
            ))}
          </div>
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
