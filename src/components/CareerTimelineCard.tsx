import { CareerRole, formatDateRange, formatDuration } from '@/data/careerTimeline';
import { cn } from '@/lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

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
          'w-full text-left group relative',
          'focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2',
          'animate-fade-in'
        )}
        style={{ animationDelay: `${index * 50}ms` }}
        aria-label={`Education: ${role.title} at ${role.institution}. Click for details.`}
        aria-describedby={`education-${role.id}`}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-6 h-6 rounded-full bg-primary border-4 border-foreground shadow-neo-xs flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-2 h-2 bg-foreground rounded-full" />
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
            <div>
              <span 
                id={`education-${role.id}`}
                className="text-sm font-bold uppercase tracking-wider text-foreground block"
              >
                {role.institution}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                {role.title}
              </span>
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{ 
        minHeight: `${height}px`,
        animationDelay: `${index * 50}ms`
      }}
      className={cn(
        'w-full p-4 text-left group relative',
        'border-4 border-foreground bg-background',
        'transition-all duration-200',
        'hover:bg-accent hover:border-accent hover:shadow-neo-accent',
        'hover:translate-x-[2px] hover:translate-y-[2px]',
        'focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2',
        'min-h-[120px]',
        'animate-fade-in'
      )}
      aria-label={`${role.title} at ${role.company}. ${formatDateRange(role.startDate, role.endDate)}. Click for details.`}
      aria-describedby={`role-${role.id}-details`}
    >
      {/* Company Logo Placeholder */}
      <div className="flex items-start gap-3 mb-2">
        <div 
          className="w-10 h-10 border-2 border-foreground bg-muted flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <Briefcase className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 
            id={`role-${role.id}-details`}
            className="font-bold text-foreground group-hover:text-background transition-colors leading-tight"
          >
            {role.title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-background/80 transition-colors">
            {role.company}
          </p>
        </div>
      </div>

      {/* Date Range */}
      <div className="mt-auto pt-2">
        <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground group-hover:text-background/70 transition-colors">
          {formatDateRange(role.startDate, role.endDate)}
        </p>
        <p className="text-xs text-muted-foreground group-hover:text-background/60 transition-colors">
          {formatDuration(role.startDate, role.endDate)}
        </p>
      </div>

      {/* Employment Type Badge */}
      {role.employmentType && (
        <div className="absolute top-2 right-2">
          <span className="text-xs px-2 py-0.5 bg-primary text-foreground font-bold uppercase tracking-wider">
            {role.employmentType}
          </span>
        </div>
      )}
    </button>
  );
}
