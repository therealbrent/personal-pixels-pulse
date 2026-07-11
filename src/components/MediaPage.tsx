import { Link } from 'react-router-dom';
import SEO from './SEO';
import BiographyHeadshot from './BiographyHeadshot';
import ThoughtLeadershipCard from './ThoughtLeadershipCard';
import { getThoughtLeadershipByIds } from '@/data/thoughtLeadership';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';
import { Icon } from './ui/icon';

// Curated press hits — hand-picked from the Insights archive.
// These represent the strongest "executive brand" media moments.
const FEATURED_PRESS_IDS = [
  'humans-of-ai-brent-summers-2026',
  'convey-ux-podcast-2020',
  'ux-flywheel-2020',
  'usertesting-ux-investment-2015',
  '6sense-breakthrough-2025',
  'ai-champions-playbook-2025',
];

// Wordmark press wall — publications & platforms where Brent's work has appeared.
const PRESS_OUTLETS = [
  'Forbes',
  'Adobe',
  'CIO News',
  'UX Magazine',
  'WRITER',
  '6sense',
  'Humans of AI',
  'User-Led',
];

// Speaking topics for press/booking inquiries.
const SPEAKING_TOPICS = [
  {
    title: 'Human Led. AI Powered.',
    body: 'Why enterprise AI transformation succeeds or fails on the human side. How a middle-manager became an AI champion by focusing on adoption, enablement, and evangelism.',
  },
  {
    title: 'The UX Flywheel: Design as a Growth Engine',
    body: "A user-centered replacement for the marketing funnel. UX isn't a service desk — it's the engine that surfaces new opportunities, ships new products, and compounds customer lifetime value.",
  },
  {
    title: 'ABM: The Perfect Proving Ground for AI',
    body: 'ABM combines complex data, repeatable workflows, cross-functional teams, and measurable business outcomes. AI can improve nearly every aspect of this GTM strategy — and be a model for the rest of the enterprise.',
  },
  {
    title: "The Boundary-Crosser's Advantage",
    body: "The next generation of leaders will come from IT, design, and the shop floor — not the MBA track. Individual contributors with enough ambition and cultural influence can out-deliver managers who aren't comfortable getting their hands dirty.",
  },
];

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/f752142364414ef39fe29066ebb21219%40qti.qualcomm.com?anonymous&ismsaljsauthenabled=true';

export default function MediaPage() {
  const pressItems = getThoughtLeadershipByIds(FEATURED_PRESS_IDS);

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <SEO
        title="Brent Summers | Press & Media Kit"
        description="Press kit for journalists and producers: bio, headshot, speaking topics, and recent features with Brent Summers — AI-powered marketing leader at Qualcomm."
        ogTitle="Brent Summers — Press & Media Kit"
        ogDescription="Bio, headshot, boilerplate, and booking for reporters, podcast hosts, and event producers."
        ogImage="/og-images/speaking.png"
        canonicalUrl="/media"
      />

      <main id="main-content" className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-20">
        {/* ============================================================ */}
        {/* HERO — Executive positioning / POV manifesto                  */}
        {/* ============================================================ */}
        <header className="mb-10 sm:mb-14 md:mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4 sm:mb-6 px-4 py-1.5 border-4 border-foreground bg-background transform -rotate-1">
              <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-foreground">
                Press & Media
              </p>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-6 sm:mb-8 uppercase">
              <span className="block">Not the</span>
              <span className="inline-block px-4 sm:px-6 py-1 sm:py-2 bg-accent text-white border-4 sm:border-8 border-foreground transform -rotate-2 my-2 sm:my-3 shadow-neo-md">
                usual
              </span>
              <span className="block">executive</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              A boundary-crosser at the intersection of{' '}
              <span className="bg-primary px-1.5">marketing</span>,{' '}
              <span className="bg-cobalt text-white px-1.5">technology</span>, and{' '}
              <span className="bg-accent text-white px-1.5">creative</span>. Enterprise
              scale, entrepreneurial instincts, and a career that never asked permission to
              switch lanes.
            </p>
          </div>
        </header>

        {/* ============================================================ */}
        {/* POV — Why Brent, in his own words                             */}
        {/* ============================================================ */}
        <section aria-labelledby="pov-heading" className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-0 border-4 md:border-8 border-foreground shadow-neo-xl">
            <div className="bg-primary p-6 sm:p-8 border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-foreground">
              <h2 id="pov-heading" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight text-foreground">
                My Takes
              </h2>
              <p className="mt-3 text-sm sm:text-base font-bold text-foreground/80 leading-relaxed">
                Three things I believe, on the record.
              </p>
            </div>
            <div className="md:col-span-2 bg-background p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-accent mb-1">
                  01 — On AI
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;We onboarded 350+ people to generative AI at Qualcomm Technologies and
                  clawed back 2,400 hours a month. That didn't happen because the tech was
                  magic — it happened because we designed it into the workflow. Magic doesn't
                  scale. Muscle does.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-cobalt mb-1">
                  02 — On Leadership
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;The distance between a bold idea and a changed organization is always
                  human. Transformation isn't a technology problem. It's a human one. Change
                  is facilitated by empathy, clarity, repetition, and governance.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-oxblood mb-1">
                  03 — On Career
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;I didn't finish college and I spent several years in IT at NASCAR before I
                  moved into marketing. I've built my career by crossing lines other people
                  were told to respect. Collaboration is a competitive advantage.&rdquo;
                </p>
              </div>
            </div>
          </div>
          {/* For Press callout — spans full POV width */}
          <div className="max-w-6xl mx-auto border-4 md:border-8 border-t-0 border-foreground bg-foreground p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-neo-xl">
            <div className="flex-shrink-0">
              <span className="inline-block bg-accent text-white border-4 border-background px-3 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase transform -rotate-2">
                For Press
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-background leading-relaxed flex-1">
              You can quote me on these topics. For fresh angles or exclusive commentary,{' '}
              <ExternalLink
                href={BOOKING_URL}
                variant="primary"
                className="text-primary underline decoration-4 decoration-primary underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
              >
                book a call
              </ExternalLink>
              .
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AS SEEN IN — wordmark wall                                    */}
        {/* ============================================================ */}
        <section aria-label="Featured in" className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 bg-foreground flex-1" aria-hidden="true" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-foreground px-2">
                Featured In
              </h2>
              <div className="h-1 bg-foreground flex-1" aria-hidden="true" />
            </div>
            <div className="bg-foreground border-4 border-foreground py-6 sm:py-8 px-4 shadow-neo-md">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 md:gap-x-14">
                {PRESS_OUTLETS.map((name, i) => (
                  <div key={name} className="flex items-center gap-6 sm:gap-10 md:gap-14">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-background tracking-tight hover:text-primary transition-colors">
                      {name}
                    </span>
                    {i < PRESS_OUTLETS.length - 1 && (
                      <span className="w-2 h-2 bg-accent rotate-45 hidden sm:inline-block" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* RECENT PRESS — curated cards                                  */}
        {/* ============================================================ */}
        <section aria-labelledby="press-heading" className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-cobalt border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8">
              <h2 id="press-heading" className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight">
                FEATURED PRESS
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white/90 leading-relaxed">
                Interviews and features to get to know me.
              </p>
            </div>
            <div className="bg-background border-4 md:border-8 border-foreground border-t-0 shadow-neo-xl p-4 sm:p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-start">
                {pressItems.map((item, idx) => (
                  <ThoughtLeadershipCard key={item.id} item={item} index={idx} hideDate />
                ))}
              </div>
              <div className="mt-6 sm:mt-8 text-center">
                <BrutalistButton variant="secondary" asChild aria-label="View full archive of talks, interviews and writing">
                  <Link to="/insights">Browse the Full Archive →</Link>
                </BrutalistButton>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PRESS KIT — Bio + Headshot                                    */}
        {/* ============================================================ */}
        <BiographyHeadshot />

        {/* ============================================================ */}
        {/* SPEAKING TOPICS + BOOKING CTA                                 */}
        {/* ============================================================ */}
        <section aria-labelledby="booking-heading" className="mb-12 sm:mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-accent border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8">
              <h2 id="booking-heading" className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight">
                SPEAKING TOPICS
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white/95 leading-relaxed">
                Four talks I can deliver as a keynote, panel, or podcast conversation.
              </p>
            </div>

            <div className="bg-background border-4 md:border-8 border-foreground border-t-0 shadow-neo-xl p-4 sm:p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {SPEAKING_TOPICS.map((topic, idx) => (
                  <article
                    key={topic.title}
                    className="border-4 border-foreground bg-background p-5 sm:p-6 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
                  >
                    <div className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-accent mb-2">
                      Topic 0{idx + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-2 leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-foreground/80 leading-relaxed">
                      {topic.body}
                    </p>
                  </article>
                ))}
              </div>

              {/* Booking CTA block */}
              <div className="bg-foreground border-4 border-foreground p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
                <div className="text-background">
                  <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-primary mb-1">
                    For Journalists & Producers
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight">
                    Book Brent for an interview, podcast, or keynote.
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <ExternalLink
                    href={BOOKING_URL}
                    variant="primary"
                    className="inline-flex items-center gap-2 bg-primary text-foreground border-4 border-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-150 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 no-underline min-h-[44px]"
                  >
                    Schedule a Call →
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
