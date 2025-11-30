export default function TimelineLoadingSkeleton() {
  return (
    <div className="grid grid-cols-[80px_12px_1fr] gap-4 lg:gap-6 max-w-5xl mx-auto animate-pulse">
      {/* Year Axis Skeleton */}
      <div className="space-y-16">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="h-8 w-16 bg-muted border-2 border-muted-foreground/20"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Accent Bar Skeleton */}
      <div className="bg-primary/30 h-[800px]" aria-hidden="true" />

      {/* Cards Skeleton */}
      <div className="space-y-4">
        {[180, 220, 160, 200, 150, 190].map((height, i) => (
          <div
            key={i}
            style={{ height: `${height}px` }}
            className="border-4 border-muted-foreground/20 bg-muted p-4"
            aria-hidden="true"
          >
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-muted-foreground/20" />
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-muted-foreground/20 w-3/4" />
                <div className="h-4 bg-muted-foreground/20 w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
