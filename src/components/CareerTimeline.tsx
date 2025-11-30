import { useState, useMemo } from 'react';
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

  // Calculate time scale and positioning
  const timeScale = useMemo(() => {
    // Find earliest and latest dates
    const dates = sortedTimeline.flatMap(role => [
      new Date(role.startDate),
      role.endDate === 'Present' ? new Date() : new Date(role.endDate)
    ]);
    
    const earliestDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const latestDate = new Date(Math.max(...dates.map(d => d.getTime())));
    
    // Calculate total months in timeline
    const totalMonths = (latestDate.getFullYear() - earliestDate.getFullYear()) * 12 
      + (latestDate.getMonth() - earliestDate.getMonth());
    
    // Pixels per month
    const PIXELS_PER_MONTH = 8;
    const totalHeight = totalMonths * PIXELS_PER_MONTH;
    
    // Calculate position for a given date
    const getPosition = (date: Date) => {
      const monthsFromStart = (date.getFullYear() - earliestDate.getFullYear()) * 12 
        + (date.getMonth() - earliestDate.getMonth());
      return monthsFromStart * PIXELS_PER_MONTH;
    };
    
    // Generate year markers
    const years: Array<{ year: number; position: number }> = [];
    for (let year = latestDate.getFullYear(); year >= earliestDate.getFullYear(); year--) {
      const yearDate = new Date(year, 0, 1); // January 1st of each year
      years.push({
        year,
        position: getPosition(yearDate)
      });
    }
    
    return {
      earliestDate,
      latestDate,
      totalHeight,
      getPosition,
      years
    };
  }, [sortedTimeline]);

  // Calculate positions and handle overlaps
  const positionedRoles = useMemo(() => {
    return sortedTimeline.map(role => {
      const startDate = new Date(role.startDate);
      const endDate = role.endDate === 'Present' ? new Date() : new Date(role.endDate);
      const top = timeScale.getPosition(startDate);
      const bottom = timeScale.getPosition(endDate);
      const height = Math.max(bottom - top, role.type === 'education' ? 0 : 120);
      
      return {
        role,
        top,
        height,
        startDate,
        endDate
      };
    });
  }, [sortedTimeline, timeScale]);

  // Detect overlapping roles and assign columns
  const rolesWithColumns = useMemo(() => {
    return positionedRoles.map((current, index) => {
      if (current.role.type === 'education') {
        return { ...current, column: 0 };
      }
      
      // Check for overlaps with previous roles
      let column = 0;
      const currentEnd = current.top + current.height;
      
      for (let i = 0; i < index; i++) {
        const other = positionedRoles[i];
        if (other.role.type === 'education') continue;
        
        const otherEnd = other.top + other.height;
        
        // Check if they overlap
        const overlaps = (current.top < otherEnd) && (currentEnd > other.top);
        
        if (overlaps) {
          column = 1; // Move to second column if overlap detected
          break;
        }
      }
      
      return { ...current, column };
    });
  }, [positionedRoles]);

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
        <div className="relative" style={{ height: `${timeScale.totalHeight}px` }}>
          {timeScale.years.map(({ year, position }) => (
            <div
              key={year}
              className="absolute right-0 font-black text-2xl text-foreground"
              style={{ top: `${position}px` }}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Accent Bar with Stripes */}
        <div className="relative" style={{ height: `${timeScale.totalHeight}px` }}>
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

        {/* Timeline Cards with Absolute Positioning */}
        <div className="relative" style={{ height: `${timeScale.totalHeight}px` }}>
          {rolesWithColumns.map(({ role, top, height, column }, index) => (
            <div
              key={role.id}
              className="absolute transition-all duration-300"
              style={{
                top: `${top}px`,
                left: column === 1 ? '52%' : '0',
                width: column === 1 ? '46%' : '100%',
              }}
            >
              <CareerTimelineCard
                role={role}
                height={height}
                onClick={() => handleRoleClick(role, index)}
              />
            </div>
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
