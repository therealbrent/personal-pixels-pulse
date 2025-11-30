import { CareerRole, formatDateRange } from '@/data/careerTimeline';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

interface CareerTimelineCardProps {
  role: CareerRole;
  height: number;
  onClick: () => void;
  index: number;
}

export default function CareerTimelineCard({ role, height, onClick, index }: CareerTimelineCardProps) {
  if (role.type === 'education') {
    return (
      <button
        onClick={onClick}
        className={cn(
          'w-full text-left group relative py-2',
          'focus:outline-none focus:ring-2 focus:ring-accent',
          'animate-fade-in'
        )}
        style={{ animationDelay: `${index * 50}ms` }}
        aria-label={`Education: ${role.title} at ${role.institution}. Click for details.`}
        aria-describedby={`education-${role.id}`}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
            aria-hidden="true"
          />
          <span 
            id={`education-${role.id}`}
            className="text-xs font-bold uppercase tracking-wider text-foreground"
          >
            GRADUATED — {role.institution}
          </span>
        </div>
      </button>
    );
  }

  const formatDateForCard = (start: string, end: string | 'Present') => {
    const parseDate = (dateStr: string) => {
      const [year, month] = dateStr.split('-');
      return new Date(parseInt(year), parseInt(month) - 1);
    };
    
    const startDate = parseDate(start);
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }).toUpperCase();
    const endStr = end === 'Present' ? 'PRESENT' : parseDate(end).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }).toUpperCase();
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
        'w-full p-4 text-left group relative flex flex-col',
        'rounded-lg border border-border bg-card',
        'transition-all duration-200',
        'hover:border-accent hover:shadow-[0_0_0_2px_hsl(var(--accent))]',
        'focus:outline-none focus:ring-2 focus:ring-accent',
        'min-h-[120px]',
        'animate-fade-in'
      )}
      aria-label={`${role.title} at ${role.company}. ${formatDateRange(role.startDate, role.endDate)}. Click for details.`}
      aria-describedby={`role-${role.id}-details`}
    >
      {/* Company Logo at Top */}
      <div 
        className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center flex-shrink-0 mb-auto"
        aria-hidden="true"
      >
        <Briefcase className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Content at Bottom */}
      <div className="mt-auto space-y-1">
        <h3 
          id={`role-${role.id}-details`}
          className="font-bold text-foreground leading-tight"
        >
          {role.title} • {role.company}
        </h3>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {formatDateForCard(role.startDate, role.endDate)}
        </p>
      </div>
    </button>
  );
}
