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
        return `${baseClasses} bg-foreground text-background translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'article':
        return `${baseClasses} bg-primary text-primary-foreground translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'presentation':
        return `${baseClasses} bg-cobalt text-white translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'panel':
        return `${baseClasses} bg-accent text-white translate-x-[2px] translate-y-[2px] shadow-none`;
      case 'podcast':
        return `${baseClasses} bg-oxblood text-white translate-x-[2px] translate-y-[2px] shadow-none`;
    }
  } else {
    switch (value) {
      case 'all':
        return `${baseClasses} bg-background text-foreground hover:bg-foreground hover:text-background hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'article':
        return `${baseClasses} bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'presentation':
        return `${baseClasses} bg-background text-foreground hover:bg-cobalt hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'panel':
        return `${baseClasses} bg-background text-foreground hover:bg-accent hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
      case 'podcast':
        return `${baseClasses} bg-background text-foreground hover:bg-oxblood hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`;
    }
  }
};

// Dropdown item color mappings for mobile
const getDropdownItemClasses = (value: FilterType, isActive: boolean) => {
  const baseClasses = "font-bold cursor-pointer py-3 border-b-2 border-foreground/10 last:border-0";
  
  if (isActive) {
    switch (value) {
      case 'all':
        return `${baseClasses} bg-foreground text-background`;
      case 'article':
        return `${baseClasses} bg-primary text-primary-foreground`;
      case 'presentation':
        return `${baseClasses} bg-cobalt text-white`;
      case 'panel':
        return `${baseClasses} bg-accent text-white`;
      case 'podcast':
        return `${baseClasses} bg-oxblood text-white`;
    }
  } else {
    switch (value) {
      case 'all':
        return `${baseClasses} hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background`;
      case 'article':
        return `${baseClasses} hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground`;
      case 'presentation':
        return `${baseClasses} hover:bg-cobalt hover:text-white focus:bg-cobalt focus:text-white`;
      case 'panel':
        return `${baseClasses} hover:bg-accent hover:text-white focus:bg-accent focus:text-white`;
      case 'podcast':
        return `${baseClasses} hover:bg-oxblood hover:text-white focus:bg-oxblood focus:text-white`;
    }
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
            {filterOptions.map(({ value, label }) => {
              const isActive = activeFilter === value;
              return (
                <SelectItem 
                  key={value} 
                  value={value}
                  className={getDropdownItemClasses(value, isActive)}
                >
                  {label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
