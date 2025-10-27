import { Users, Calendar, BookOpen, Lightbulb } from 'lucide-react';
import SEO from './SEO';

export default function DesignerInResidencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 lg:pb-0">
      <SEO 
        title="Designer in Residence - Brent Summers"
        description="Join Brent Summers' exclusive design mentorship program. Coming soon."
        ogTitle="Designer in Residence Program - Coming Soon"
        ogDescription="An exclusive design mentorship program for emerging creative leaders."
        canonicalUrl="/designer-in-residence"
      />

      {/* Hero Section */}
      <header className="py-20 px-4 bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 font-bold mb-6 border-2 border-foreground">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
            </span>
            COMING SOON
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Designer in Residence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            An exclusive mentorship program for emerging creative leaders navigating AI, strategy, and enterprise innovation.
          </p>

          <div className="bg-secondary p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 inline-block">
            <p className="text-lg font-semibold text-secondary-foreground">
              Applications open Q2 2025
            </p>
          </div>
        </div>
      </header>

      {/* What to Expect Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What to Expect</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <article className="border-4 border-foreground bg-card p-8 hover:shadow-neo-md transition-shadow">
              <Users className="text-accent mb-4" size={48} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold mb-4 text-primary-text">1:1 Mentorship</h3>
              <p className="text-muted-foreground text-lg">
                Bi-weekly sessions focused on your specific challenges—from leading design teams to navigating AI adoption in enterprise environments.
              </p>
            </article>

            <article className="border-4 border-foreground bg-card p-8 hover:shadow-neo-md transition-shadow">
              <Lightbulb className="text-accent mb-4" size={48} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold mb-4 text-primary-text">Real-World Projects</h3>
              <p className="text-muted-foreground text-lg">
                Collaborate on actual client work, gaining hands-on experience with enterprise-scale design systems and AI-powered workflows.
              </p>
            </article>

            <article className="border-4 border-foreground bg-card p-8 hover:shadow-neo-md transition-shadow">
              <BookOpen className="text-accent mb-4" size={48} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold mb-4 text-primary-text">Exclusive Resources</h3>
              <p className="text-muted-foreground text-lg">
                Access to frameworks, templates, and playbooks I've developed over 20 years—from ABM strategy to AI content operations.
              </p>
            </article>

            <article className="border-4 border-foreground bg-card p-8 hover:shadow-neo-md transition-shadow">
              <Calendar className="text-accent mb-4" size={48} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold mb-4 text-primary-text">3-Month Commitment</h3>
              <p className="text-muted-foreground text-lg">
                A focused, intensive program designed to accelerate your growth as a creative leader in the age of AI.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-destructive/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the waitlist to be notified when applications open. Limited to 3 designers per cohort.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                disabled
                className="flex-1 px-4 py-3 border-4 border-foreground bg-background text-foreground font-medium focus:ring-4 focus:ring-focus-ring disabled:opacity-50"
              />
              <button
                type="submit"
                disabled
                className="bg-accent text-accent-foreground px-6 py-3 font-bold border-4 border-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Applications open Q2 2025
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
