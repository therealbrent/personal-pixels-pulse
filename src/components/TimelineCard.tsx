import { CareerRole } from '@/data/careerTimeline';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

interface TimelineCardProps {
  role: CareerRole;
  height: number;
  onClick: () => void;
  index: number;
}

export default function TimelineCard({ role, height, onClick, index }: TimelineCardProps) {
  const formatDateRange = (start: string, end: string | 'Present') => {
    const parseDate = (dateStr: string) => {
      const [year, month] = dateStr.split('-');
      return new Date(parseInt(year), parseInt(month) - 1);
    };
    
    const startDate = parseDate(start);
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const endStr = end === 'Present' ? 'Present' : parseDate(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${startStr} — ${endStr}`;
  };

  return (
    <button
      onClick={onClick}
      style={{ 
        minHeight: `${height}px`,
        animationDelay: `${index * 50}ms`
      }}
      className={cn(
        'w-full p-6 text-left group relative',
        'border-4 border-foreground bg-background',
        'transition-all duration-200',
        'hover:border-accent hover:shadow-[0_4px_0_0_hsl(var(--accent))]',
        'hover:-translate-y-1',
        'focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2',
        'animate-fade-in'
      )}
      aria-label={`${role.title} at ${role.company}. ${formatDateRange(role.startDate, role.endDate)}. Click for details.`}
    >
      {/* Company Icon */}
      <div 
        className="w-12 h-12 border-2 border-foreground bg-muted flex items-center justify-center mb-4"
        aria-hidden="true"
      >
        <Briefcase className="w-6 h-6 text-foreground" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-black text-foreground uppercase tracking-tight leading-tight">
          {role.title}
        </h3>
        <p className="text-lg font-bold text-foreground">
          {role.company}
        </p>
        <p className="text-sm uppercase tracking-wider font-bold text-muted-foreground">
          {formatDateRange(role.startDate, role.endDate)}
        </p>
      </div>

      {/* Employment Type Badge */}
      {role.employmentType && (
        <div className="absolute top-4 right-4">
          <span className="text-xs px-2 py-1 bg-primary text-foreground font-bold uppercase tracking-wider border-2 border-foreground">
            {role.employmentType}
          </span>
        </div>
      )}
    </button>
  );
}
