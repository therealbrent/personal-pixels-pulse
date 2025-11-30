import { CareerRole, formatDateRange, formatDuration } from '@/data/careerTimeline';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Briefcase, GraduationCap } from 'lucide-react';
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-4 border-foreground bg-background p-0">
        {/* Header Section */}
        <DialogHeader className="p-6 pb-4 border-b-4 border-foreground bg-primary">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 border-4 border-foreground bg-background flex items-center justify-center flex-shrink-0">
              {isEducation ? (
                <GraduationCap className="w-8 h-8 text-foreground" aria-hidden="true" />
              ) : (
                <Briefcase className="w-8 h-8 text-foreground" aria-hidden="true" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl font-black text-foreground mb-1">
                {role.title}
              </DialogTitle>
              <DialogDescription className="text-lg font-bold text-foreground/80">
                {isEducation ? role.institution : role.company}
              </DialogDescription>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {role.employmentType && (
                  <span className="text-xs px-2 py-1 bg-foreground text-primary font-bold uppercase tracking-wider">
                    {role.employmentType}
                  </span>
                )}
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {formatDateRange(role.startDate, role.endDate)}
                </span>
                <span className="text-sm text-foreground/70">
                  {formatDuration(role.startDate, role.endDate)}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-foreground leading-relaxed">{role.description}</p>
          </div>

          {/* Contributions */}
          {role.contributions && role.contributions.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground mb-3 border-b-2 border-foreground pb-1">
                What I Worked On
              </h3>
              <ul className="space-y-2">
                {role.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">▸</span>
                    <span className="text-foreground">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {role.projects && role.projects.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-foreground mb-3 border-b-2 border-foreground pb-1">
                Projects
              </h3>
              <div className="grid gap-4">
                {role.projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-2 border-foreground p-3 bg-muted"
                  >
                    <h4 className="font-bold text-foreground mb-1">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between p-4 border-t-4 border-foreground bg-muted">
          <Button
            variant="stroke-onyx-crimson"
            size="sm"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className={cn(!hasPrevious && 'opacity-50 cursor-not-allowed')}
            aria-label="Previous role"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="stroke-onyx-crimson"
            size="sm"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="w-4 h-4 mr-1" />
            Close
          </Button>
          <Button
            variant="stroke-onyx-crimson"
            size="sm"
            onClick={onNext}
            disabled={!hasNext}
            className={cn(!hasNext && 'opacity-50 cursor-not-allowed')}
            aria-label="Next role"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
