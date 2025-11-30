import { useState } from 'react';
import { careerTimeline, calculateDuration, CareerRole } from '@/data/careerTimeline';
import CareerTimelineCard from './CareerTimelineCard';
import CareerDetailModal from './CareerDetailModal';

export default function CareerTimeline() {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Sort timeline by start date (most recent first)
  const sortedTimeline = [...careerTimeline].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  // Extract unique years for the axis
  const years = Array.from(
    new Set(
      sortedTimeline.flatMap((role) => {
        const startYear = new Date(role.startDate).getFullYear();
        const endYear =
          role.endDate === 'Present'
            ? new Date().getFullYear()
            : new Date(role.endDate).getFullYear();
        const yearRange = [];
        for (let year = startYear; year <= endYear; year++) {
          yearRange.push(year);
        }
        return yearRange;
      })
    )
  ).sort((a, b) => b - a);

  // Calculate card heights based on duration (minimum height for visibility)
  const MIN_HEIGHT = 120;
  const MONTH_HEIGHT = 8;

  const getCardHeight = (role: CareerRole) => {
    if (role.type === 'education') return 0; // Education markers don't need height
    const months = calculateDuration(role.startDate, role.endDate);
    return Math.max(MIN_HEIGHT, months * MONTH_HEIGHT);
  };

  const handleRoleClick = (role: CareerRole, index: number) => {
    setSelectedRole(role);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex < sortedTimeline.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedRole(sortedTimeline[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedRole(sortedTimeline[prevIndex]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[80px_12px_1fr] gap-4 lg:gap-6 max-w-5xl mx-auto">
        {/* Year Axis */}
        <div className="flex flex-col items-end gap-16 pt-2">
          {years.map((year) => (
            <div key={year} className="font-black text-2xl text-foreground">
              {year}
            </div>
          ))}
        </div>

        {/* Accent Bar with Stripes */}
        <div className="relative">
          <div
            className="w-full h-full bg-primary relative overflow-hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                hsl(var(--primary)),
                hsl(var(--primary)) 10px,
                hsl(var(--primary) / 0.8) 10px,
                hsl(var(--primary) / 0.8) 20px
              )`,
            }}
          >
            {/* Rotated Label */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap origin-center"
              style={{ transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)' }}
            >
              <span className="text-xs font-black uppercase tracking-widest text-foreground">
                Career Timeline
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-4">
          {sortedTimeline.map((role, index) => (
            <CareerTimelineCard
              key={role.id}
              role={role}
              height={getCardHeight(role)}
              onClick={() => handleRoleClick(role, index)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <CareerDetailModal
        role={selectedRole}
        isOpen={selectedRole !== null}
        onClose={() => {
          setSelectedRole(null);
          setSelectedIndex(-1);
        }}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={selectedIndex < sortedTimeline.length - 1}
        hasPrevious={selectedIndex > 0}
      />
    </>
  );
}
