import { useState, useMemo, lazy, Suspense } from 'react';
import { careerTimeline } from '@/data/careerTimeline';
import TimelineSpine from './TimelineSpine';
import TimelineCard from './TimelineCard';

const RoleDetailDrawer = lazy(() => import('./RoleDetailDrawer'));

// Constants
const PIXELS_PER_MONTH = 8; // Increased for better spacing

export default function CareerTimeline() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number | null>(null);

  // Parse date from YYYY-MM format
  const parseDate = (dateStr: string | 'Present'): Date => {
    if (dateStr === 'Present') {
      return new Date();
    }
    const [year, month] = dateStr.split('-');
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  // Calculate timeline scale
  const timeScale = useMemo(() => {
    const roles = careerTimeline.filter(role => role.type === 'role');
    const dates = roles.flatMap(role => [
      parseDate(role.startDate),
      parseDate(role.endDate)
    ]);

    const earliestDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const latestDate = new Date(Math.max(...dates.map(d => d.getTime())));

    const totalMonths = (latestDate.getFullYear() - earliestDate.getFullYear()) * 12 
      + (latestDate.getMonth() - earliestDate.getMonth());
    const totalHeight = totalMonths * PIXELS_PER_MONTH;

    const getPosition = (date: Date) => {
      const monthsFromStart = (date.getFullYear() - earliestDate.getFullYear()) * 12 
        + (date.getMonth() - earliestDate.getMonth());
      return monthsFromStart * PIXELS_PER_MONTH;
    };

    // Generate year markers
    const years: Array<{ year: number; position: number }> = [];
    for (let year = earliestDate.getFullYear(); year <= latestDate.getFullYear(); year++) {
      const yearDate = new Date(year, 0, 1);
      years.push({
        year,
        position: getPosition(yearDate)
      });
    }

    return { earliestDate, latestDate, totalHeight, getPosition, years };
  }, []);

  // Position roles on timeline
  const positionedRoles = useMemo(() => {
    return careerTimeline
      .filter(role => role.type === 'role')
      .map(role => {
        const start = parseDate(role.startDate);
        const end = parseDate(role.endDate);
        const top = timeScale.getPosition(start);
        const bottom = timeScale.getPosition(end);
        const height = Math.max(bottom - top, 80); // Minimum height

        return {
          ...role,
          top,
          height
        };
      })
      .sort((a, b) => a.top - b.top);
  }, [timeScale]);

  const selectedRole = selectedRoleIndex !== null ? positionedRoles[selectedRoleIndex] : null;

  const handleNext = () => {
    if (selectedRoleIndex !== null && selectedRoleIndex < positionedRoles.length - 1) {
      setSelectedRoleIndex(selectedRoleIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedRoleIndex !== null && selectedRoleIndex > 0) {
      setSelectedRoleIndex(selectedRoleIndex - 1);
    }
  };

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[80px_40px_1fr] gap-0 relative">
            {/* Year Labels Column (placeholder) */}
            <div className="relative" style={{ height: `${timeScale.totalHeight}px` }} />

            {/* Timeline Spine Column */}
            <div className="relative">
              <TimelineSpine 
                totalHeight={timeScale.totalHeight}
                years={timeScale.years}
              />
            </div>

            {/* Cards Column */}
            <div className="relative pl-8" style={{ height: `${timeScale.totalHeight}px` }}>
              {positionedRoles.map((role, index) => (
                <div
                  key={role.id}
                  className="absolute w-full"
                  style={{ 
                    top: `${role.top}px`,
                  }}
                >
                  <TimelineCard
                    role={role}
                    height={role.height}
                    onClick={() => setSelectedRoleIndex(index)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Drawer */}
      <Suspense fallback={null}>
        <RoleDetailDrawer
          role={selectedRole}
          isOpen={selectedRoleIndex !== null}
          onClose={() => setSelectedRoleIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedRoleIndex !== null && selectedRoleIndex < positionedRoles.length - 1}
          hasPrevious={selectedRoleIndex !== null && selectedRoleIndex > 0}
        />
      </Suspense>
    </div>
  );
}
