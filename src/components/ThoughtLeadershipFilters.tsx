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

export default function ThoughtLeadershipFilters({
  activeFilter,
  onFilterChange,
  filterOptions
}: ThoughtLeadershipFiltersProps) {
  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden md:flex gap-2 mb-8 flex-wrap">
        {filterOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-6 py-3 font-black text-sm border-2 border-foreground transition-all duration-200 ${
              activeFilter === value
                ? 'bg-accent text-accent-foreground shadow-neo-sm translate-x-[2px] translate-y-[2px]'
                : 'bg-background text-foreground shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm'
            }`}
            aria-pressed={activeFilter === value}
            aria-label={`Filter by ${label}`}
          >
            {label}
          </button>
        ))}
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
