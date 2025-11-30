import { useState, useMemo, Suspense, lazy, useEffect, useRef } from 'react';
import { careerTimeline, calculateDuration, CareerRole } from '@/data/careerTimeline';
import CareerTimelineCard from './CareerTimelineCard';
import TimelineLoadingSkeleton from './TimelineLoadingSkeleton';
import TimelineMiniMap from './TimelineMiniMap';
import TimelineZoomControl from './TimelineZoomControl';
import { useTimelineKeyboardNav } from '@/hooks/useTimelineKeyboardNav';

const CareerDetailModal = lazy(() => import('./CareerDetailModal'));

// Constants for layout
const BASE_PIXELS_PER_MONTH = 8;
const MIN_CARD_HEIGHT = 120;
const CARD_GAP = 16;
const COLUMN_GAP = 24;

export default function CareerTimeline() {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [zoom, setZoom] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const PIXELS_PER_MONTH = BASE_PIXELS_PER_MONTH * zoom;

  useEffect(() => {
    const handleScroll = () => {
      // Calculate which year is in viewport based on scroll position
      // This is a simplified version - you might want to make it more accurate
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const yearRange = timeScale.years.length - 1;
      const yearIndex = Math.floor(scrollPercentage * yearRange);
      setCurrentYear(timeScale.years[yearIndex]?.year || new Date().getFullYear());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sort timeline by start date (most recent first)
  const sortedTimeline = useMemo(() => {
    return [...careerTimeline].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

  // Calculate time scale and positioning
  const timeScale = useMemo(() => {
    try {
      // Find earliest and latest dates
      const dates = sortedTimeline.flatMap(role => [
        new Date(role.startDate),
        role.endDate === 'Present' ? new Date() : new Date(role.endDate)
      ]);
      
      if (dates.length === 0) {
        throw new Error('No valid dates found in timeline');
      }

      const earliestDate = new Date(Math.min(...dates.map(d => d.getTime())));
      const latestDate = new Date(Math.max(...dates.map(d => d.getTime())));
      
      // Calculate total months in timeline (minimum 12 months)
      const totalMonths = Math.max(
        12,
        (latestDate.getFullYear() - earliestDate.getFullYear()) * 12 
        + (latestDate.getMonth() - earliestDate.getMonth())
      );
      
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
        const yearDate = new Date(year, 0, 1);
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
    } catch (error) {
      console.error('Error calculating time scale:', error);
      throw error;
    }
  }, [sortedTimeline, PIXELS_PER_MONTH]);

  // Calculate positions with improved overlap handling
  const positionedRoles = useMemo(() => {
    try {
      return sortedTimeline.map(role => {
        const startDate = new Date(role.startDate);
        const endDate = role.endDate === 'Present' ? new Date() : new Date(role.endDate);
        const top = timeScale.getPosition(startDate);
        const bottom = timeScale.getPosition(endDate);
        const height = Math.max(bottom - top, role.type === 'education' ? 0 : MIN_CARD_HEIGHT);
        
        return {
          role,
          top,
          height,
          startDate,
          endDate,
          bottom: top + height
        };
      });
    } catch (error) {
      console.error('Error positioning roles:', error);
      throw error;
    }
  }, [sortedTimeline, timeScale]);

  // Advanced column allocation with track-based layout
  const rolesWithLayout = useMemo(() => {
    const tracks: Array<Array<{ start: number; end: number; roleIndex: number }>> = [[], []];
    
    return positionedRoles.map((current, index) => {
      if (current.role.type === 'education') {
        return { ...current, column: 0, width: '100%', left: '0%' };
      }
      
      const currentEnd = current.top + current.height + CARD_GAP;
      
      // Try to fit in existing tracks
      let assignedTrack = 0;
      for (let trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
        const track = tracks[trackIndex];
        const hasOverlap = track.some(item => {
          return current.top < item.end && currentEnd > item.start;
        });
        
        if (!hasOverlap) {
          assignedTrack = trackIndex;
          break;
        }
      }
      
      // Add to track
      tracks[assignedTrack].push({
        start: current.top,
        end: currentEnd,
        roleIndex: index
      });
      
      // Calculate layout based on track
      const width = assignedTrack === 0 ? '100%' : '48%';
      const left = assignedTrack === 0 ? '0%' : '52%';
      
      return {
        ...current,
        column: assignedTrack,
        width,
        left
      };
    });
  }, [positionedRoles]);

  // Generate SVG connectors for overlapping roles
  const connectors = useMemo(() => {
    const lines: Array<{ from: number; to: number; startY: number; endY: number }> = [];
    
    rolesWithLayout.forEach((current, index) => {
      if (current.column === 1 && current.role.type !== 'education') {
        // Find overlapping role in column 0
        const overlapping = rolesWithLayout.find((other, otherIndex) => 
          otherIndex !== index &&
          other.column === 0 &&
          other.role.type !== 'education' &&
          current.top < (other.top + other.height) &&
          (current.top + current.height) > other.top
        );
        
        if (overlapping) {
          lines.push({
            from: 0,
            to: 1,
            startY: overlapping.top + overlapping.height / 2,
            endY: current.top + current.height / 2
          });
        }
      }
    });
    
    return lines;
  }, [rolesWithLayout]);

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

  const handleJumpToYear = (year: number) => {
    const yearData = timeScale.years.find(y => y.year === year);
    if (yearData && timelineRef.current) {
      const offset = timelineRef.current.offsetTop + yearData.position - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 1.5));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  // Keyboard navigation
  useTimelineKeyboardNav({
    onZoomIn: handleZoomIn,
    onZoomOut: handleZoomOut,
    onZoomReset: handleZoomReset,
    onJumpToYear: handleJumpToYear,
    years: timeScale.years.map(y => y.year),
    enabled: !selectedRole, // Disable when modal is open
  });

  if (isCalculating) {
    return <TimelineLoadingSkeleton />;
  }

  return (
    <>
      {/* Zoom Control */}
      <div className="mb-8 flex justify-center">
        <TimelineZoomControl 
          zoom={zoom}
          onZoomChange={setZoom}
        />
      </div>

      {/* Minimap */}
      <TimelineMiniMap 
        roles={rolesWithLayout}
        totalHeight={timeScale.totalHeight}
        currentYear={currentYear}
      />

      <div 
        ref={timelineRef}
        className="grid grid-cols-[80px_12px_1fr] gap-4 lg:gap-6 max-w-5xl mx-auto"
        role="list"
        aria-label="Career timeline entries"
      >
        {/* Year Axis */}
        <div 
          className="relative" 
          style={{ height: `${timeScale.totalHeight}px` }}
          aria-label="Timeline years"
        >
          {timeScale.years.map(({ year, position }) => (
            <div
              key={year}
              className="absolute right-0 font-black text-2xl text-foreground"
              style={{ top: `${position}px` }}
              aria-label={`Year ${year}`}
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
            aria-hidden="true"
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
        <div 
          className="relative" 
          style={{ height: `${timeScale.totalHeight}px` }}
        >
          {/* SVG Connectors for Overlapping Roles */}
          {connectors.length > 0 && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            >
              {connectors.map((connector, i) => {
                const x1 = connector.from === 0 ? '48%' : '0%';
                const x2 = connector.to === 1 ? '52%' : '100%';
                const controlPointX = '50%';
                
                return (
                  <path
                    key={i}
                    d={`M ${x1} ${connector.startY} Q ${controlPointX} ${(connector.startY + connector.endY) / 2}, ${x2} ${connector.endY}`}
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8 4"
                    opacity="0.6"
                  />
                );
              })}
            </svg>
          )}

          {rolesWithLayout.map(({ role, top, height, width, left }, index) => (
            <div
              key={role.id}
              role="listitem"
              className="absolute transition-all duration-300"
              style={{
                top: `${top}px`,
                left: left,
                width: width,
                zIndex: 1,
              }}
            >
              <CareerTimelineCard
                role={role}
                height={height}
                onClick={() => handleRoleClick(role, index)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal with Suspense */}
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}
