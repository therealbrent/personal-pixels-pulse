import { useState, useEffect } from 'react';
import { getThoughtLeadershipByType, getThoughtLeadershipByTopic, getThoughtLeadershipByIds, type ContentType } from '@/data/thoughtLeadership';
import ThoughtLeadershipCard from './ThoughtLeadershipCard';
import ThoughtLeadershipFilters from './ThoughtLeadershipFilters';

type FilterType = ContentType | 'all';

// Featured item IDs
const FEATURED_IDS = [
  'convey-ux-podcast-2020',
  'ai-champions-playbook-2025',
  'ux-flywheel-2020',
];

interface ThoughtLeadershipFeedProps {
  topicFilter?: string;
}

export default function ThoughtLeadershipFeed({ topicFilter }: ThoughtLeadershipFeedProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Get featured items
  const featuredItems = getThoughtLeadershipByIds(FEATURED_IDS);
  
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
        
        {/* Featured Row */}
        {!topicFilter && (
          <div className="mb-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-foreground/60 mb-3">Featured</h3>
            <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
              {featuredItems.map((item, index) => (
                <ThoughtLeadershipCard key={item.id} item={item} index={index} featured />
              ))}
            </div>
          </div>
        )}

        {!topicFilter && (
          <div className="mb-8">
            {/* Divider with label */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 bg-foreground flex-1"></div>
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground px-2">Filter by Type</h3>
              <div className="h-1 bg-foreground flex-1"></div>
            </div>
            <ThoughtLeadershipFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              filterOptions={filterOptions}
            />
          </div>
        )}

        {/* Feed Grid */}
        <div className="relative">
          <div 
            id="thought-leadership-grid" 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-start"
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
