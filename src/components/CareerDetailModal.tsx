import { CareerRole, formatDateRange } from '@/data/careerTimeline';
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

interface CareerDetailModalProps {
  role: CareerRole | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function CareerDetailModal({
  role,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: CareerDetailModalProps) {
  if (!role) return null;

  const isEducation = role.type === 'education';

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[85vh]">
        {/* Header Section */}
        <DrawerHeader className="px-6 pt-4 pb-6 space-y-3">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded border border-border bg-muted flex items-center justify-center flex-shrink-0">
              {isEducation ? (
                <GraduationCap className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
              ) : (
                <Briefcase className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <DrawerTitle className="text-2xl font-bold text-foreground mb-1">
                {role.title} — {isEducation ? role.institution : role.company}
              </DrawerTitle>
              <DrawerDescription className="text-sm uppercase tracking-wider text-muted-foreground">
                {role.employmentType && `${role.employmentType} • `}
                {formatDateRange(role.startDate, role.endDate)}
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        {/* Content Section */}
        <div className="px-6 pb-6 space-y-6 overflow-y-auto">
          {/* Description */}
          <div>
            <p className="text-foreground leading-relaxed">{role.description}</p>
          </div>

          {/* Contributions */}
          {role.contributions && role.contributions.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                What I Worked On
              </h3>
              <ul className="space-y-2">
                {role.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground flex-1">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {role.projects && role.projects.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                Projects
              </h3>
              <div className="grid gap-3">
                {role.projects.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-4 bg-muted/50"
                  >
                    <h4 className="font-bold text-foreground mb-1">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer - Connected Button Group */}
        <div className="flex items-center border-t border-border bg-muted/30 p-4">
          <div className="flex items-center rounded-lg border border-border overflow-hidden bg-background mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className={cn(
                'rounded-none border-r border-border px-4',
                !hasPrevious && 'opacity-50 cursor-not-allowed'
              )}
              aria-label="Previous role"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={!hasNext}
              className={cn(
                'rounded-none px-4',
                !hasNext && 'opacity-50 cursor-not-allowed'
              )}
              aria-label="Next role"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
