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
      <div className="hidden md:flex gap-2 mb-8 flex-wrap">
        {filterOptions.map(({ value, label }) => {
          const colors = tabColors[value];
          const isActive = activeFilter === value;
          
          return (
            <button
              key={value}
              onClick={() => onFilterChange(value)}
              style={isActive ? undefined : {
                ['--hover-bg' as string]: `hsl(var(--${value === 'article' ? 'primary' : value === 'presentation' ? 'cobalt' : value === 'podcast' ? 'destructive' : 'accent'}))`
              }}
              className={`px-6 py-3 font-black text-sm border-2 border-foreground transition-all duration-200 ${
                isActive
                  ? `${colors.bg} ${colors.text} shadow-neo-sm translate-x-[2px] translate-y-[2px]`
                  : `bg-background text-foreground shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm ${colors.bg.replace('bg-', 'hover:bg-')} ${colors.text.replace('text-', 'hover:text-')}`
              }`}
              aria-pressed={isActive}
              aria-label={`Filter by ${label}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-8">
        <Select value={activeFilter} onValueChange={(value) => onFilterChange(value as FilterType)}>
          <SelectTrigger 
            className="w-full border-2 border-foreground bg-background text-foreground font-black shadow-neo-sm"
            aria-label="Filter content by type"
          >
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
    </>
  );
}
