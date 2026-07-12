import { Link } from 'react-router-dom';
import SEO from './SEO';
import BiographyHeadshot from './BiographyHeadshot';
import { thoughtLeadershipData } from '@/data/thoughtLeadership';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';
import { Icon } from './ui/icon';

// Speaking topics for press/booking inquiries.
const SPEAKING_TOPICS = [
  {
    title: "The AI Champion's Playbook",
    body: 'How a middle-manager became an AI champion by focusing on adoption, enablement, and evangelism. And why enterprise AI transformation succeeds or fails on the human side.',
  },
  {
    title: 'The UX Flywheel',
    body: 'This is user-centered replacement for the classic funnel. User research is an insights engine that surfaces new opportunities, ships new products, and compounds customer lifetime value.',
  },
  {
    title: 'ABM: The Perfect Proving Ground for AI',
    body: 'ABM combines complex data, repeatable workflows, cross-functional teams, and measurable business outcomes. AI can improve nearly every aspect of this GTM strategy — and be a model for the rest of the enterprise.',
  },
  {
    title: "The Boundary-Crosser's Advantage",
    body: "Practical tips for collaborating across functions, translating competing priorities, and making cross-functional impact visible. Learn to become the connective tissue that turns specialized expertise into coordinated action.",
  },
];

const BOOKING_URL =
  'https://calendar.app.google/FMaEpgaVGdfxpQQN9';

const PRESS_KIT_URL =
  'https://drive.google.com/drive/folders/1_FtkrMYllWpWcanGL3oQTy6B0xmbcZwI?usp=sharing';

export default function MediaPage() {
  const speakingEngagementCount = thoughtLeadershipData.filter((i) =>
    ['presentation', 'panel', 'podcast', 'interview'].includes(i.type)
  ).length;

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <SEO
        title="Brent Summers | Press & Media Kit"
        description="Press kit for journalists and producers: bio, headshot, speaking topics, and recent features with Brent Summers — AI-powered marketing leader at Qualcomm Technologies."
        ogTitle="Brent Summers — Press & Media Kit"
        ogDescription="Bio, headshot, boilerplate, and booking for reporters, podcast hosts, and event producers."
        ogImage="/og-images/speaking.png"
        canonicalUrl="/media"
      />

      <main id="main-content" className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-20">
        {/* ============================================================ */}
        {/* HERO — Executive positioning / POV manifesto                  */}
        {/* ============================================================ */}
        <header className="mb-8 sm:mb-10 md:mb-14">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-3 sm:mb-4 px-3 py-1 border-4 border-foreground bg-background transform -rotate-1">
              <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-foreground">
                Press & Media
              </p>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4 sm:mb-6 uppercase">
              <span className="block">Human Led.</span>
              <span className="inline-block px-3 sm:px-5 py-1 bg-accent text-white border-4 sm:border-8 border-foreground transform -rotate-2 mt-2 sm:mt-3 shadow-neo-md">
                AI Powered.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold text-foreground/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
              A boundary-crosser at the intersection of{' '}
              <span className="bg-primary px-1.5">marketing</span>,{' '}
              <span className="bg-cobalt text-white px-1.5">technology</span>, and{' '}
              <span className="bg-accent text-white px-1.5">creative</span>. Enterprise
              scale, entrepreneurial instincts, and a career that never asked permission to
              switch lanes.
            </p>

            {/* Press Kit CTA */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <ExternalLink
                href={PRESS_KIT_URL}
                variant="primary"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white border-4 border-foreground hover:bg-foreground hover:text-primary transition-all duration-150 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 no-underline min-h-[44px] shadow-neo-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                View Press Kit
              </ExternalLink>
            </div>

            {/* Stat Block */}
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-0 border-4 md:border-8 border-foreground shadow-neo-xl bg-background text-left overflow-hidden">
              <div className="bg-primary p-4 sm:p-5 border-r-4 border-b-4 md:border-b-0 border-foreground">
                <dt className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-foreground/70 mb-1">
                  Years Leading Change
                </dt>
                <dd className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-none">
                  20
                </dd>
              </div>
              <div className="bg-background p-4 sm:p-5 md:border-r-4 border-b-4 md:border-b-0 border-foreground">
                <dt className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-foreground/70 mb-1">
                  Career Chapters
                </dt>
                <dd className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-none">
                  5
                </dd>
              </div>
              <div className="bg-cobalt p-4 sm:p-5 border-r-4 md:border-r-4 border-foreground">
                <dt className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/80 mb-1">
                  Speaking Engagements
                </dt>
                <dd className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                  {speakingEngagementCount}
                </dd>
              </div>
              <div className="bg-accent p-4 sm:p-5 border-foreground">
                <dt className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/90 mb-1">
                  College Degrees
                </dt>
                <dd className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                  0
                </dd>
              </div>
            </dl>
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
              <p className="mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60 leading-relaxed">
                Personal views. Not official Qualcomm statements.
              </p>
            </div>
            <div className="md:col-span-2 bg-background p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-accent mb-1">
                  01 — Enterprise AI Adoption
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;The generative AI rollout I helped lead at Qualcomm Technologies
                  reached 350+ users and is credited with roughly 2,400 hours saved every month.
                  What the case study doesn't say is why it worked: we didn't sell people on AI. We
                  designed it into the work they were already doing.&rdquo;
                </p>
                <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60">
                  Source:{' '}
                  <ExternalLink
                    href="https://writer.com/blog/qualcomm-customer-story/"
                    variant="primary"
                    className="underline decoration-2 underline-offset-4 hover:text-accent transition-colors normal-case"
                  >
                    Qualcomm + WRITER case study
                  </ExternalLink>
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-cobalt mb-1">
                  02 — Change Management
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;The distance between a bold idea and a changed organization is
                  always human. Transformation requires empathy, clarity, and relentless
                  repetition.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-oxblood mb-1">
                  03 — Unconventional Paths
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  &ldquo;I have zero college degrees and spent six years in IT before I
                  ever touched marketing. I believe the next generation of leaders will
                  come from the shop floor or the help desk. Not an MBA program.&rdquo;
                </p>
              </div>
            </div>
          </div>
          {/* Press callout — spans full POV width */}
          <div className="max-w-6xl mx-auto border-4 md:border-8 border-t-0 border-foreground bg-foreground p-5 sm:p-6 md:p-7 shadow-neo-xl">
            <p className="text-sm sm:text-base md:text-lg font-bold text-background leading-relaxed">
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
        {/* FEATURED PRESS — TIERED                                       */}
        {/* ============================================================ */}
        <section aria-labelledby="press-tiered-heading" className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="bg-foreground border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8">
              <h2 id="press-tiered-heading" className="text-xl sm:text-2xl md:text-4xl font-black text-background mb-2 sm:mb-3 leading-tight uppercase">
                Featured Press
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-bold text-background/90 leading-relaxed">
                Recent features across national business press, trade media, and long-form podcasts.
              </p>
            </div>

            <div className="bg-background border-4 md:border-8 border-foreground border-t-0 shadow-neo-xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              {/* Tier 1 — Tentpole (hero card) */}
              <div>
                <span className="inline-block mb-3 sm:mb-4 px-2 py-1 bg-accent text-white text-[10px] sm:text-xs font-black tracking-widest uppercase border-2 border-foreground">
                  Tier 1 — Tentpole
                </span>
                <article className="grid md:grid-cols-5 border-4 border-foreground bg-background shadow-neo-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <div className="md:col-span-2 bg-primary p-5 sm:p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-foreground flex flex-col justify-center min-h-[180px] sm:min-h-[220px]">
                    <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-foreground/70 mb-2">
                      National Business Press
                    </p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-foreground leading-none tracking-tight">
                      Forbes
                    </p>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground/80">
                      Nov 2025
                    </p>
                  </div>
                  <div className="md:col-span-3 p-5 sm:p-6 md:p-8">
                    <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-accent mb-2">
                      Why this matters
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground/70 mb-3 leading-snug">
                      National business press names me directly on enterprise AI adoption at Qualcomm.
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground leading-tight mb-3">
                      What Writer's AI Leaders Forum Revealed About Enterprise AI
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-foreground/80 leading-relaxed italic mb-4">
                      &ldquo;After Summers conducted his initial Writer pilot, 100% of the users wanted to adopt the platform full-time.&rdquo;
                    </p>
                    <ExternalLink
                      href="https://www.forbes.com/sites/stevenwolfepereira/2025/11/08/what-writers-ai-leaders-forum-revealed-about-enterprise-ai/"
                      variant="primary"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-foreground hover:text-accent transition-colors no-underline"
                    >
                      Read on Forbes
                    </ExternalLink>
                  </div>
                </article>
              </div>

              {/* Tier 2 — Majors (2 medium cards) */}
              <div>
                <span className="inline-block mb-3 sm:mb-4 px-2 py-1 bg-cobalt text-white text-[10px] sm:text-xs font-black tracking-widest uppercase border-2 border-foreground">
                  Tier 2 — Majors
                </span>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  {/* CIO News */}
                  <article className="border-4 border-foreground bg-background shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex flex-col">
                    <div className="bg-cobalt p-4 sm:p-5 border-b-4 border-foreground">
                      <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/80 mb-1">
                        Enterprise Trade Press
                      </p>
                      <p className="text-2xl sm:text-3xl font-black uppercase text-white leading-none tracking-tight">
                        CIO News
                      </p>
                      <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70">
                        Oct 2025
                      </p>
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-cobalt mb-2">
                        Reaches the exact buyer
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-foreground leading-tight mb-3">
                        Why Qualcomm's Playbook For Scaling AI Starts With Intention — And Ends With A Human
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-foreground/80 leading-relaxed italic mb-4 flex-1">
                        &ldquo;We expect a human to verify the facts, citations, decisions — and the underlying strategy.&rdquo;
                      </p>
                      <ExternalLink
                        href="https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers"
                        variant="primary"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-foreground hover:text-cobalt transition-colors no-underline self-start"
                      >
                        Read on CIO News
                      </ExternalLink>
                    </div>
                  </article>

                  {/* Humans of AI */}
                  <article className="border-4 border-foreground bg-background shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex flex-col">
                    <div className="bg-accent p-4 sm:p-5 border-b-4 border-foreground">
                      <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-white/80 mb-1">
                        Long-Form Podcast
                      </p>
                      <p className="text-2xl sm:text-3xl font-black uppercase text-white leading-none tracking-tight">
                        Humans of AI
                      </p>
                      <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
                        Jun 2026
                      </p>
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-accent mb-2">
                        On the record, long-form
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-foreground leading-tight mb-3">
                        From Magic to Muscle: Driving Enterprise AI Transformation
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-foreground/80 leading-relaxed italic mb-4 flex-1">
                        A working conversation on how enterprise AI actually gets adopted — templates, office hours, change management.
                      </p>
                      <ExternalLink
                        href="https://www.youtube.com/watch?v=Dvan146syOM"
                        variant="primary"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-foreground hover:text-accent transition-colors no-underline self-start"
                      >
                        Watch Episode
                      </ExternalLink>
                    </div>
                  </article>
                </div>
              </div>

              {/* Tier 3 — Supporting (compact strip) */}
              <div>
                <span className="inline-block mb-3 sm:mb-4 px-2 py-1 bg-foreground text-primary text-[10px] sm:text-xs font-black tracking-widest uppercase border-2 border-foreground">
                  Tier 3 — Supporting
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    {
                      outlet: 'Sport Beach',
                      context: 'On-camera interview at Cannes 2026',
                      title: 'Interviewed by Sam Chotiner',
                      url: 'https://www.youtube.com/watch?v=fIlAhPaO9EI',
                      cta: 'Watch',
                      bg: 'bg-primary',
                      tx: 'text-foreground',
                      sub: 'text-foreground/70',
                    },
                    {
                      outlet: 'UserLed',
                      context: 'Interview — AI + ABM at enterprise scale',
                      title: 'Data, Judgment and Direction',
                      url: 'https://www.youtube.com/watch?v=1rbEfzecgAg',
                      cta: 'Watch',
                      bg: 'bg-cobalt',
                      tx: 'text-white',
                      sub: 'text-white/70',
                    },
                    {
                      outlet: 'CIO (Sponsored)',
                      context: 'Feature — AI literacy in the workplace',
                      title: 'Building AI Literacy in the Workplace',
                      url: 'https://modernworkplace.cio.com/empowered-workforce/building-ai-literacy-in-the-workplace/',
                      cta: 'Read',
                      bg: 'bg-oxblood',
                      tx: 'text-white',
                      sub: 'text-white/70',
                    },
                    {
                      outlet: 'Adobe',
                      context: 'Bylined — practical AI marketing strategies',
                      title: 'AI-Powered Marketing: Practical Strategies',
                      url: 'https://experienceleague.adobe.com/en/perspectives/ai-powered-marketing-practical-strategies-you-can-use-today',
                      cta: 'Read',
                      bg: 'bg-accent',
                      tx: 'text-white',
                      sub: 'text-white/80',
                    },
                  ].map((item) => (
                    <article
                      key={item.outlet}
                      className="border-4 border-foreground bg-background shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex flex-col"
                    >
                      <div className={`${item.bg} p-3 sm:p-4 border-b-4 border-foreground`}>
                        <p className={`text-lg sm:text-xl font-black uppercase ${item.tx} leading-none tracking-tight`}>
                          {item.outlet}
                        </p>
                        <p className={`mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${item.sub}`}>
                          {item.context}
                        </p>
                      </div>
                      <div className="p-3 sm:p-4 flex-1 flex flex-col">
                        <h3 className="text-sm sm:text-base font-black text-foreground leading-tight mb-3 flex-1">
                          {item.title}
                        </h3>
                        <ExternalLink
                          href={item.url}
                          variant="primary"
                          className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-foreground hover:text-accent transition-colors no-underline self-start"
                        >
                          {item.cta}
                        </ExternalLink>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Full archive link */}
              <div className="text-center pt-2">
                <BrutalistButton variant="secondary" asChild aria-label="View full archive of talks, interviews and writing">
                  <Link to="/insights">Browse the Full Archive →</Link>
                </BrutalistButton>
              </div>

              {/* Rights & permissions line */}
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60">
                Headshot and bio cleared for editorial use. For broadcast or sponsored contexts, contact{' '}
                <ExternalLink
                  href={BOOKING_URL}
                  variant="primary"
                  className="underline decoration-2 underline-offset-4 hover:text-accent transition-colors normal-case tracking-normal"
                >
                  book a call
                </ExternalLink>
                .
              </p>
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
                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
                  <ExternalLink
                    href={BOOKING_URL}
                    variant="primary"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-foreground border-4 border-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-150 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 no-underline min-h-[44px]"
                  >
                    Schedule a Call
                  </ExternalLink>
                  <ExternalLink
                    href={PRESS_KIT_URL}
                    variant="primary"
                    className="inline-flex items-center justify-center gap-2 bg-background text-foreground border-4 border-primary hover:bg-primary hover:text-foreground transition-all duration-150 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 no-underline min-h-[44px]"
                  >
                    View Press Kit
                  </ExternalLink>
                </div>
              </div>

              {/* Qualcomm-related inquiries routing */}
              <p className="mt-4 sm:mt-5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60 leading-relaxed">
                For inquiries that materially involve Qualcomm's name, programs, or metrics, please route through{' '}
                <ExternalLink
                  href="https://www.qualcomm.com/company/contact/media"
                  variant="primary"
                  className="underline decoration-2 underline-offset-4 hover:text-accent transition-colors normal-case tracking-normal"
                >
                  Qualcomm Corporate Communications
                </ExternalLink>
                {' '}first.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
