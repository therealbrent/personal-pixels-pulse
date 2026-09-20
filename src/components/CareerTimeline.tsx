import { lazy, Suspense, useMemo, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { careerTimeline, CareerRole, formatDateRange, formatDuration } from '@/data/careerTimeline';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const RoleDetailDrawer = lazy(() => import('./RoleDetailDrawer'));

const isConsultingRole = (role: CareerRole) =>
  role.employmentType === 'Freelance' || role.employmentType === 'Contract' || role.isFreelance;

const markerStyles = [
  'bg-accent',
  'bg-cobalt',
  'bg-primary',
  'bg-destructive',
];

interface TimelineEntryProps {
  role: CareerRole;
  index: number;
  onSelect: (role: CareerRole) => void;
  education?: boolean;
}

function TimelineEntry({ role, index, onSelect, education = false }: TimelineEntryProps) {
  const organization = education ? role.institution : role.company;
  const visibleContributions = role.contributions.slice(0, 2);

  return (
    <article className="group relative pb-14 pl-9 last:pb-0 sm:pl-14 lg:pb-20 lg:pl-20">
      <span
        className={cn(
          'absolute left-[-0.875rem] top-1 h-7 w-7 border-4 border-foreground sm:left-[-1.125rem] sm:h-9 sm:w-9',
          education ? 'bg-background' : markerStyles[index % markerStyles.length]
        )}
        aria-hidden="true"
      />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="border-2 border-foreground bg-secondary px-3 py-1 text-xs font-black uppercase text-secondary-foreground sm:text-sm">
          {formatDateRange(role.startDate, role.endDate)}
        </span>
        <span className="text-xs font-black uppercase text-muted-foreground sm:text-sm">
          {formatDuration(role.startDate, role.endDate)}
        </span>
      </div>

      <h3 className="max-w-4xl text-3xl font-black uppercase leading-[1.05] tracking-normal text-foreground transition-colors group-hover:text-primary-text sm:text-4xl lg:text-5xl">
        {role.title}
      </h3>
      <p className="mt-2 text-lg font-black text-primary-text sm:text-xl">
        {organization}
      </p>

      <div className="mt-6 border-4 border-foreground bg-card p-5 shadow-neo-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:p-7">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 bg-primary px-3 py-2 text-xs font-black uppercase text-primary-foreground">
            {education ? (
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            ) : (
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
            )}
            {education ? 'Education' : role.employmentType}
          </span>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
          {role.description}
        </p>

        {visibleContributions.length > 0 && (
          <ul className="mt-6 space-y-3 border-l-4 border-accent pl-5">
            {visibleContributions.map((contribution) => (
              <li key={contribution} className="font-bold leading-relaxed text-foreground">
                {contribution}
              </li>
            ))}
          </ul>
        )}

        {(role.contributions.length > 2 || (role.projects?.length ?? 0) > 0) && (
          <Button
            type="button"
            variant="outline"
            onClick={() => onSelect(role)}
            className="mt-7 h-auto rounded-none border-4 border-foreground bg-background px-5 py-3 font-black uppercase text-foreground shadow-neo-sm transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-none"
            aria-label={`View full details for ${role.title} at ${organization}`}
          >
            View details
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </article>
  );
}

export default function CareerTimeline() {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const { primaryRoles, consultingRoles, education, orderedEntries } = useMemo(() => {
    const roles = careerTimeline.filter((role) => role.type === 'role');
    const primary = roles.filter((role) => !isConsultingRole(role));
    const consulting = roles.filter(isConsultingRole);
    const schools = careerTimeline.filter((role) => role.type === 'education');

    return {
      primaryRoles: primary,
      consultingRoles: consulting,
      education: schools,
      orderedEntries: [...primary, ...consulting, ...schools],
    };
  }, []);

  const selectedRoleIndex = selectedRoleId
    ? orderedEntries.findIndex((role) => role.id === selectedRoleId)
    : -1;
  const selectedRole = selectedRoleIndex >= 0 ? orderedEntries[selectedRoleIndex] : null;

  const selectRole = (role: CareerRole) => setSelectedRoleId(role.id);
  const selectByIndex = (index: number) => {
    const role = orderedEntries[index];
    if (role) setSelectedRoleId(role.id);
  };

  return (
    <div className="w-full">
      <section aria-labelledby="career-chapters-heading">
        <div className="mb-10 flex items-end justify-between gap-6 border-b-4 border-foreground pb-5">
          <h2 id="career-chapters-heading" className="text-2xl font-black uppercase tracking-normal text-foreground sm:text-3xl">
            Career chapters
          </h2>
          <p className="hidden text-sm font-black uppercase text-muted-foreground sm:block">
            Present → 1999
          </p>
        </div>

        <div className="relative ml-3 border-l-4 border-foreground sm:ml-5 lg:ml-8">
          {primaryRoles.map((role, index) => (
            <TimelineEntry key={role.id} role={role} index={index} onSelect={selectRole} />
          ))}
        </div>
      </section>

      {consultingRoles.length > 0 && (
        <section className="mt-20 border-y-4 border-foreground bg-destructive py-12 text-destructive-foreground sm:py-16" aria-labelledby="consulting-heading">
          <div className="px-5 sm:px-8 lg:px-12">
            <p className="text-sm font-black uppercase">Running in parallel</p>
            <h2 id="consulting-heading" className="mt-2 text-4xl font-black uppercase leading-none tracking-normal sm:text-5xl">
              Consulting practice
            </h2>

            <div className="mt-8 grid gap-6">
              {consultingRoles.map((role) => (
                <article key={role.id} className="border-4 border-foreground bg-background p-6 text-foreground shadow-neo-lg sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-sm font-black uppercase text-primary-text">
                        {formatDateRange(role.startDate, role.endDate)} · {formatDuration(role.startDate, role.endDate)}
                      </p>
                      <h3 className="mt-3 text-3xl font-black uppercase leading-tight tracking-normal sm:text-4xl">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-lg font-bold">{role.company}</p>
                      <p className="mt-5 text-base leading-relaxed sm:text-lg">{role.description}</p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => selectRole(role)}
                      className="h-auto shrink-0 self-start rounded-none border-4 border-foreground bg-primary px-5 py-3 font-black uppercase text-primary-foreground shadow-neo-sm transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-none"
                    >
                      View details
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mt-20" aria-labelledby="education-heading">
        <div className="mb-10 border-b-4 border-foreground pb-5">
          <p className="text-sm font-black uppercase text-primary-text">Formal learning</p>
          <h2 id="education-heading" className="mt-2 text-4xl font-black uppercase leading-none tracking-normal text-foreground sm:text-5xl">
            Education
          </h2>
        </div>

        <div className="relative ml-3 border-l-4 border-foreground sm:ml-5 lg:ml-8">
          {education.map((role, index) => (
            <TimelineEntry key={role.id} role={role} index={index} onSelect={selectRole} education />
          ))}
        </div>
      </section>

      <div className="mt-20 border-t-4 border-foreground pt-8">
        <p className="text-3xl font-black uppercase italic tracking-normal text-foreground sm:text-4xl">
          The story continues.
        </p>
      </div>

      <Suspense fallback={null}>
        <RoleDetailDrawer
          role={selectedRole}
          isOpen={selectedRole !== null}
          onClose={() => setSelectedRoleId(null)}
          onNext={() => selectByIndex(selectedRoleIndex + 1)}
          onPrevious={() => selectByIndex(selectedRoleIndex - 1)}
          hasNext={selectedRoleIndex >= 0 && selectedRoleIndex < orderedEntries.length - 1}
          hasPrevious={selectedRoleIndex > 0}
        />
      </Suspense>
    </div>
  );
}