import SEO from './SEO';
import CareerTimeline from './CareerTimeline';
import ErrorBoundary from './ErrorBoundary';

export default function CareerTimelinePage() {
  return (
    <>
      <SEO
        title="Career Timeline | Brent Summers"
        description="Explore Brent Summers' career journey through an interactive timeline showcasing roles, contributions, and professional growth in design leadership and product management."
        ogTitle="Brent Summers - Career Timeline"
        ogDescription="Interactive timeline of career milestones, roles, and achievements"
        ogImage="/og-images/career.png"
        canonicalUrl="/career"
      />

      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
          {/* Page Header */}
          <header className="mb-16 border-b-4 border-foreground pb-12 lg:mb-24 lg:pb-16">
            <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
              Career
              <span className="mt-3 block w-fit border-4 border-foreground bg-primary px-3 py-2 text-primary-foreground shadow-neo-lg sm:px-5">
                Timeline
              </span>
            </h1>
            <p className="mt-10 max-w-3xl border-l-8 border-foreground pl-5 text-xl font-bold leading-relaxed text-foreground sm:text-2xl sm:pl-7">
              My professional journey through design leadership, product management, and building impactful user experiences.
            </p>
          </header>

          {/* Timeline Section */}
          <ErrorBoundary>
            <section aria-label="Career timeline">
              <CareerTimeline />
            </section>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
}
