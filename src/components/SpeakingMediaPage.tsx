import { useSearchParams } from 'react-router-dom';
import SEO from './SEO';
import ThoughtLeadershipFeed from './ThoughtLeadershipFeed';

export default function SpeakingMediaPage() {
  const [searchParams] = useSearchParams();
  const topicFilter = searchParams.get('topic') || undefined;
  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <SEO 
        title="Archive | Brent Summers — Talks, Interviews & Writing"
        description="The full archive of Brent Summers' presentations, panels, podcasts, interviews, and writing from two decades of leading change."
        ogTitle="Brent Summers — Archive of Talks, Interviews & Writing"
        ogDescription="Two decades of presentations, panels, podcasts, and press. For current press kit, visit /media."
        ogImage="/og-images/speaking.png"
        canonicalUrl="/insights"
      />

      <main id="main-content" className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-20">
        {/* Hero Section - Neo-Brutalist */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight mb-4 sm:mb-6 md:mb-8 text-foreground transform hover:skew-x-1 transition-transform duration-300">
            IDEAS IN PUBLIC
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Sharing hard-learned lessons, strategic frameworks, and field-tested ideas.
          </p>
        </header>

        {/* Thought Leadership Feed */}
        <ThoughtLeadershipFeed topicFilter={topicFilter} />
      </main>
    </div>
  );
}
