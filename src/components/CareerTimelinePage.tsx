import SEO from './SEO';
import CareerTimeline from './CareerTimeline';
import ErrorBoundary from './ErrorBoundary';
import KeyboardShortcutsHelp from './KeyboardShortcutsHelp';
import { useState } from 'react';

export default function CareerTimelinePage() {
  const [showShortcuts, setShowShortcuts] = useState(false);

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

      <KeyboardShortcutsHelp />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          {/* Page Header */}
          <header className="mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4 uppercase tracking-tight">
              Career Timeline
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              My professional journey through design leadership, product management, and building impactful user experiences.
            </p>
          </header>

          {/* Timeline Section with Error Boundary */}
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
