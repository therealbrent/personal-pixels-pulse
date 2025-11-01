import { useState } from 'react';
import { getThoughtLeadershipByType, type ContentType } from '@/data/thoughtLeadership';
import ThoughtLeadershipCard from './ThoughtLeadershipCard';
import ThoughtLeadershipFilters from './ThoughtLeadershipFilters';

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
        <ThoughtLeadershipFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filterOptions={filterOptions}
        />

        {/* Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <ThoughtLeadershipCard key={item.id} item={item} index={index} />
          ))}
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
