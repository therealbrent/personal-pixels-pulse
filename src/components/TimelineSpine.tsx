interface TimelineSpineProps {
  totalHeight: number;
  years: Array<{ year: number; position: number }>;
}

export default function TimelineSpine({ totalHeight, years }: TimelineSpineProps) {
  return (
    <div className="relative" style={{ height: `${totalHeight}px` }}>
      {/* Mustard Spine */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary"
        style={{ height: `${totalHeight}px` }}
        aria-hidden="true"
      />
      
      {/* Year Markers */}
      <div className="absolute left-0 top-0 w-full h-full">
        {years.map(({ year, position }) => (
          <div
            key={year}
            className="absolute -left-16 transform -translate-y-1/2"
            style={{ top: `${position}px` }}
          >
            <span className="text-2xl font-black text-foreground uppercase">
              {year}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full">
        {years.map(({ year, position }) => (
          <div
            key={`dot-${year}`}
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-foreground"
            style={{ top: `${position}px` }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
