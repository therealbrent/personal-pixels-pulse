import { useSearchParams } from 'react-router-dom';
import BiographyHeadshot from './BiographyHeadshot';
import SEO from './SEO';
import ThoughtLeadershipFeed from './ThoughtLeadershipFeed';
import FeaturedThoughtLeadership from './FeaturedThoughtLeadership';

export default function SpeakingMediaPage() {
  const [searchParams] = useSearchParams();
  const topicFilter = searchParams.get('topic') || undefined;
  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <SEO 
        title="Brent Summers, Keynote Speaker | Bio + Headshot + Media Archive"
        description="Explore presentations, podcasts, panels, and interviews with Brent Summers"
        ogTitle="Book Brent for Your Next Event"
        ogDescription="I share stories, strategic frameworks, and lessons from two decades of leading change."
        ogImage="/og-images/speaking.png"
        canonicalUrl="/speaking"
      />

      <main id="main-content" className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section - Neo-Brutalist */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground transform hover:skew-x-1 transition-transform duration-300">
            SPEAKING
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            I share stories, strategic frameworks and lessons learned from two decades of leading change.
          </p>
        </header>

        {/* Biography and Headshot */}
        <BiographyHeadshot />

        {/* Featured Thought Leadership */}
        <FeaturedThoughtLeadership />

        {/* Thought Leadership Feed */}
        <ThoughtLeadershipFeed topicFilter={topicFilter} />
      </main>
    </div>
  );
}
