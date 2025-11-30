import { CareerRole } from '@/data/careerTimeline';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoleDetailDrawerProps {
  role: CareerRole | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function RoleDetailDrawer({
  role,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: RoleDetailDrawerProps) {
  if (!role) return null;

  const isEducation = role.type === 'education';

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
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[85vh] border-t-4 border-foreground">
        {/* Header */}
        <DrawerHeader className="px-6 pt-6 pb-4 border-b-4 border-foreground bg-primary">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 border-4 border-foreground bg-background flex items-center justify-center flex-shrink-0">
              {isEducation ? (
                <GraduationCap className="w-8 h-8 text-foreground" aria-hidden="true" />
              ) : (
                <Briefcase className="w-8 h-8 text-foreground" aria-hidden="true" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <DrawerTitle className="text-3xl font-black text-foreground uppercase tracking-tight mb-2">
                {role.title}
              </DrawerTitle>
              <DrawerDescription className="text-xl font-bold text-foreground/90">
                {isEducation ? role.institution : role.company}
              </DrawerDescription>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                {role.employmentType && (
                  <span className="text-xs px-2 py-1 bg-foreground text-primary font-bold uppercase tracking-wider">
                    {role.employmentType}
                  </span>
                )}
                <span className="text-sm uppercase tracking-wider font-bold text-foreground">
                  {formatDateRange(role.startDate, role.endDate)}
                </span>
              </div>
            </div>
          </div>
        </DrawerHeader>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 overflow-y-auto">
          {/* Description */}
          <div>
            <p className="text-foreground text-lg leading-relaxed">{role.description}</p>
          </div>

          {/* Contributions */}
          {role.contributions && role.contributions.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground mb-4 pb-2 border-b-2 border-foreground">
                What I Worked On
              </h3>
              <ul className="space-y-3">
                {role.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground flex-1">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {role.projects && role.projects.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground mb-4 pb-2 border-b-2 border-foreground">
                Projects
              </h3>
              <div className="grid gap-4">
                {role.projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-4 border-foreground p-4 bg-muted"
                  >
                    <h4 className="font-bold text-foreground text-lg mb-2">{project.name}</h4>
                    <p className="text-foreground/80">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between p-4 border-t-4 border-foreground bg-muted">
          <Button
            variant="outline"
            size="lg"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className={cn(
              'border-4 border-foreground font-bold uppercase',
              !hasPrevious && 'opacity-50 cursor-not-allowed'
            )}
            aria-label="Previous role"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onNext}
            disabled={!hasNext}
            className={cn(
              'border-4 border-foreground font-bold uppercase',
              !hasNext && 'opacity-50 cursor-not-allowed'
            )}
            aria-label="Next role"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
