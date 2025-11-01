import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ContentType } from '@/data/thoughtLeadership';

type FilterType = ContentType | 'all';

interface FilterOption {
  value: FilterType;
  label: string;
}

interface ThoughtLeadershipFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  filterOptions: FilterOption[];
}

// Tab color mappings matching content types
const tabColors: Record<FilterType, { bg: string; text: string; border: string }> = {
  all: {
    bg: 'bg-accent',
    text: 'text-accent-foreground',
    border: 'border-foreground'
  },
  article: {
    bg: 'bg-primary',
    text: 'text-primary-foreground',
    border: 'border-foreground'
  },
  presentation: {
    bg: 'bg-cobalt',
    text: 'text-cobalt-foreground',
    border: 'border-foreground'
  },
  panel: {
    bg: 'bg-accent',
    text: 'text-accent-foreground',
    border: 'border-foreground'
  },
  podcast: {
    bg: 'bg-oxblood',
    text: 'text-oxblood-foreground',
    border: 'border-foreground'
  }
};

export default function ThoughtLeadershipFilters({
  activeFilter,
  onFilterChange,
  filterOptions
}: ThoughtLeadershipFiltersProps) {
  return (
    <>
      {/* Desktop Tabs */}
      <nav className="hidden md:flex gap-3 mb-8 flex-wrap" role="tablist" aria-label="Content type filters">
        {filterOptions.map(({ value, label }) => {
          const colors = tabColors[value];
          const isActive = activeFilter === value;
          
          return (
            <button
              key={value}
              onClick={() => onFilterChange(value)}
              role="tab"
              aria-selected={isActive}
              aria-controls="thought-leadership-grid"
              className={`px-6 py-3 font-black text-sm border-4 border-foreground transition-all duration-200 shadow-neo-sm focus:ring-4 focus:ring-focus-ring focus:ring-offset-2 ${
                isActive
                  ? `${colors.bg} ${colors.text} translate-x-[2px] translate-y-[2px] shadow-none`
                  : `bg-background text-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${colors.bg.replace('bg-', 'hover:bg-')} ${colors.text.replace('text-', 'hover:text-')}`
              }`}
            >
              {label}
            </button>
          );
        })}
      </nav>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-8">
        <label htmlFor="content-filter" className="sr-only">Filter content by type</label>
        <Select value={activeFilter} onValueChange={(value) => onFilterChange(value as FilterType)}>
          <SelectTrigger 
            id="content-filter"
            className="w-full border-4 border-foreground bg-background text-foreground font-black shadow-neo-sm focus:ring-4 focus:ring-focus-ring"
            aria-label="Content type filter"
          >
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent className="bg-background border-4 border-foreground z-50 shadow-neo-lg">
            {filterOptions.map(({ value, label }) => (
              <SelectItem 
                key={value} 
                value={value}
                className="font-bold cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-3 border-b-2 border-foreground/10 last:border-0"
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
