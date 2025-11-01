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
const getTabClasses = (value: FilterType, isActive: boolean) => {
  const baseClasses = "px-6 py-3 font-black text-sm border-4 border-foreground transition-all duration-200 shadow-neo-sm focus:ring-4 focus:ring-focus-ring focus:ring-offset-2";
  
  if (isActive) {
    switch (value) {
      case 'all':
        return `${baseClasses} bg-accent text-accent-foreground translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'article':
        return `${baseClasses} bg-primary text-primary-foreground translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'presentation':
        return `${baseClasses} bg-cobalt text-white translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'panel':
        return `${baseClasses} bg-accent text-accent-foreground translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'podcast':
        return `${baseClasses} bg-oxblood text-white translate-x-[2px] translate-y-[2px] shadow-none`;
    }
  } else {
    switch (value) {
      case 'all':
        return `${baseClasses} bg-background text-foreground hover:bg-accent hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'article':
        return `${baseClasses} bg-background text-foreground hover:bg-primary hover:text-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'presentation':
        return `${baseClasses} bg-background text-foreground hover:bg-cobalt hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'panel':
        return `${baseClasses} bg-background text-foreground hover:bg-accent hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'podcast':
        return `${baseClasses} bg-background text-foreground hover:bg-oxblood hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
    }
  }
};

// Dropdown item color mappings
const getDropdownItemClasses = (value: FilterType) => {
  const baseClasses = "font-bold cursor-pointer py-3 border-b-2 border-foreground/10 last:border-0";
  
  switch (value) {
    case 'all':
      return `${baseClasses} bg-[#262626] text-white hover:bg-[#262626] hover:text-white focus:bg-[#262626] focus:text-white`;
    case 'panel':
      return `${baseClasses} bg-[#FF1392] text-white hover:bg-[#FF1392] hover:text-white focus:bg-[#FF1392] focus:text-white`;
    case 'article':
      return `${baseClasses} bg-[#FFBA08] text-[#262626] hover:bg-[#FFBA08] hover:text-[#262626] focus:bg-[#FFBA08] focus:text-[#262626]`;
    case 'podcast':
      return `${baseClasses} bg-[#7A1E1C] text-white hover:bg-[#7A1E1C] hover:text-white focus:bg-[#7A1E1C] focus:text-white`;
    case 'presentation':
      return `${baseClasses} bg-[#2962FF] text-white hover:bg-[#2962FF] hover:text-white focus:bg-[#2962FF] focus:text-white`;
    default:
      return baseClasses;
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
          const isActive = activeFilter === value;
          
          return (
            <button
              key={value}
              onClick={() => onFilterChange(value)}
              role="tab"
              aria-selected={isActive}
              aria-controls="thought-leadership-grid"
              className={getTabClasses(value, isActive)}
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
                className={getDropdownItemClasses(value)}
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
