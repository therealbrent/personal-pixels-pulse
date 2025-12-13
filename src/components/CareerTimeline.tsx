import { useState, useMemo, lazy, Suspense, useRef, useEffect } from 'react';
import { careerTimeline, CareerRole } from '@/data/careerTimeline';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RoleDetailDrawer = lazy(() => import('./RoleDetailDrawer'));

// Constants
const PIXELS_PER_MONTH = 12;
const CARD_MIN_WIDTH = 180;
const ROW_HEIGHT = 140;
const TIMELINE_TRACK_HEIGHT = 60;

export default function CareerTimeline() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Parse date from YYYY-MM format
  const parseDate = (dateStr: string | 'Present'): Date => {
    if (dateStr === 'Present') {
      return new Date();
    }
    // Handle year-only format (e.g., "2020")
    if (!dateStr.includes('-')) {
      return new Date(parseInt(dateStr), 0);
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
      + (latestDate.getMonth() - earliestDate.getMonth()) + 1;
    const totalWidth = totalMonths * PIXELS_PER_MONTH;

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

    return { earliestDate, latestDate, totalWidth, getPosition, years };
  }, []);

  const isConsulting = (role: CareerRole) => {
    return role.employmentType === 'Freelance' || role.employmentType === 'Contract' || role.isFreelance;
  };

  // Position roles and assign rows based on overlaps (separate rows for consulting vs full-time)
  const positionedRoles = useMemo(() => {
    const roles = careerTimeline
      .filter(role => role.type === 'role')
      .map(role => {
        const start = parseDate(role.startDate);
        const end = parseDate(role.endDate);
        // Flip: position from the right (latest date) instead of left
        const leftFromStart = timeScale.getPosition(start);
        const rightFromStart = timeScale.getPosition(end);
        // Invert positions so recent is on left
        const left = timeScale.totalWidth - rightFromStart;
        const width = Math.max(rightFromStart - leftFromStart, CARD_MIN_WIDTH);

        return {
          ...role,
          left,
          width,
          startTime: start.getTime(),
          endTime: end.getTime(),
          row: 0, // Will be assigned
          isConsulting: isConsulting(role)
        };
      })
      .sort((a, b) => b.startTime - a.startTime); // Sort by most recent first

    // Assign rows to handle overlaps (within same category: consulting or full-time)
    const assignedRoles: typeof roles = [];
    
    for (const role of roles) {
      let assignedRow = 0;
      let foundRow = false;
      
      while (!foundRow) {
        // Only check overlaps with roles in the same category (above or below line)
        const overlapsInRow = assignedRoles.filter(r => 
          r.row === assignedRow && 
          r.isConsulting === role.isConsulting &&
          !(role.startTime >= r.endTime || role.endTime <= r.startTime)
        );
        
        if (overlapsInRow.length === 0) {
          foundRow = true;
          role.row = assignedRow;
        } else {
          assignedRow++;
        }
      }
      
      assignedRoles.push(role);
    }

    return assignedRoles;
  }, [timeScale]);

  const maxRowAbove = useMemo(() => Math.max(0, ...positionedRoles.filter(r => !r.isConsulting).map(r => r.row)), [positionedRoles]);
  const maxRowBelow = useMemo(() => Math.max(0, ...positionedRoles.filter(r => r.isConsulting).map(r => r.row)), [positionedRoles]);
  const heightAbove = (maxRowAbove + 1) * ROW_HEIGHT;
  const heightBelow = (maxRowBelow + 1) * ROW_HEIGHT;
  const contentHeight = heightAbove + TIMELINE_TRACK_HEIGHT + heightBelow + 40;

  const selectedRole = selectedRoleIndex !== null ? positionedRoles[selectedRoleIndex] : null;

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

  const formatDateRange = (start: string, end: string | 'Present') => {
    const startDate = parseDate(start);
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const endStr = end === 'Present' ? 'Present' : parseDate(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${startStr} — ${endStr}`;
  };

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Legend */}
        <div className="flex gap-6 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent border-2 border-foreground" />
            <span className="text-sm font-bold uppercase tracking-wide text-foreground">Full-time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-destructive border-2 border-foreground" />
            <span className="text-sm font-bold uppercase tracking-wide text-foreground">Consulting</span>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 flex items-center justify-center',
              'bg-secondary text-secondary-foreground border-4 border-foreground',
              'transition-all duration-200',
              canScrollLeft 
                ? 'hover:bg-primary hover:text-primary-foreground cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 flex items-center justify-center',
              'bg-secondary text-secondary-foreground border-4 border-foreground',
              'transition-all duration-200',
              canScrollRight 
                ? 'hover:bg-primary hover:text-primary-foreground cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden mx-14 scrollbar-thin"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div 
              className="relative"
              style={{ 
                width: `${timeScale.totalWidth + 100}px`,
                height: `${contentHeight}px`
              }}
            >
              {/* Timeline Track - Mustard background with Onyx line */}
              <div 
                className="absolute left-0 right-0 bg-primary border-y-4 border-foreground"
                style={{ 
                  top: `${heightAbove}px`,
                  height: `${TIMELINE_TRACK_HEIGHT}px`
                }}
              >
                {/* Year Markers - flipped */}
                {timeScale.years.map(({ year, position }) => (
                  <div
                    key={year}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${timeScale.totalWidth - position}px` }}
                  >
                    {/* Tick mark */}
                    <div className="w-1 h-4 bg-foreground absolute -top-4" />
                    {/* Year label */}
                    <span className="text-sm font-black text-foreground uppercase tracking-wide mt-3">
                      {year}
                    </span>
                  </div>
                ))}
              </div>

              {/* Role Cards */}
              {positionedRoles.map((role, index) => {
                const consulting = role.isConsulting;
                // Position: above line for full-time, below line for consulting
                const verticalPosition = consulting
                  ? heightAbove + TIMELINE_TRACK_HEIGHT + 16 + role.row * ROW_HEIGHT
                  : heightAbove - ROW_HEIGHT - role.row * ROW_HEIGHT + 20;
                
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRoleIndex(index)}
                    className={cn(
                      'absolute p-3 text-left group',
                      'border-4 border-foreground',
                      'transition-all duration-200',
                      'focus:outline-none focus:ring-4 focus:ring-cobalt focus:ring-offset-2',
                      'animate-fade-in',
                      consulting 
                        ? 'bg-destructive text-destructive-foreground hover:translate-y-1 hover:shadow-[0_-4px_0_0_hsl(var(--foreground))]'
                        : 'bg-accent text-accent-foreground hover:-translate-y-1 hover:shadow-[0_4px_0_0_hsl(var(--foreground))]'
                    )}
                    style={{
                      left: `${role.left}px`,
                      top: `${verticalPosition}px`,
                      width: `${role.width}px`,
                      minWidth: `${CARD_MIN_WIDTH}px`,
                      animationDelay: `${index * 30}ms`
                    }}
                    aria-label={`${role.title} at ${role.company}. ${formatDateRange(role.startDate, role.endDate)}. Click for details.`}
                  >
                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-black uppercase tracking-tight leading-tight line-clamp-2">
                        {role.title}
                      </h3>
                      <p className="text-xs font-bold opacity-90 line-clamp-1">
                        {role.company}
                      </p>
                      <p className="text-xs uppercase tracking-wider font-bold opacity-75">
                        {formatDateRange(role.startDate, role.endDate)}
                      </p>
                    </div>

                    {/* Connector to timeline */}
                    {consulting ? (
                      <>
                        <div 
                          className="absolute left-6 w-0.5 bg-foreground"
                          style={{
                            top: `-${16 + role.row * ROW_HEIGHT}px`,
                            height: `${12 + role.row * ROW_HEIGHT}px`
                          }}
                        />
                        <div 
                          className="absolute left-4 w-4 h-4 rounded-full border-2 border-foreground bg-destructive"
                          style={{
                            top: `-${20 + role.row * ROW_HEIGHT}px`
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <div 
                          className="absolute left-6 w-0.5 bg-foreground"
                          style={{
                            bottom: `-${16 + role.row * ROW_HEIGHT}px`,
                            height: `${12 + role.row * ROW_HEIGHT}px`
                          }}
                        />
                        <div 
                          className="absolute left-4 w-4 h-4 rounded-full border-2 border-foreground bg-accent"
                          style={{
                            bottom: `-${20 + role.row * ROW_HEIGHT}px`
                          }}
                        />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
          ← Swipe to explore timeline →
        </p>
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
