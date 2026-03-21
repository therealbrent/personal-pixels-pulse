import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';
import { Icon } from './ui/icon';
import {
  SlotMachine,
  CaseStudyCard,
  ConfettiEffect,
} from './DynamicComponents';
import ThoughtLeadershipFeed from './ThoughtLeadershipFeed';
import headshotSrc from '@/assets/brent-summers-headshot.png';

// ─── Parallax floating shape ──────────────────────────────────────────────────
interface ShapeProps {
  className: string;
  depth: number;
  style?: React.CSSProperties;
}
function ParallaxShape({ className, depth, style }: ShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const f = depth * 28;
      ref.current.style.transform = `translate(${dx * f}px,${dy * f}px)`;
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [depth]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: 'transform 0.12s ease-out', willChange: 'transform', ...style }}
      aria-hidden="true"
    />
  );
}

// ─── Annotation bubble ────────────────────────────────────────────────────────
function Annotation({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center bg-background border-4 border-foreground px-3 py-1.5 font-black text-xs uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(38,38,38,1)] ${className ?? ''}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}

// ─── Brutalist separator band ─────────────────────────────────────────────────
function ColorBand({ color }: { color: string }) {
  return (
    <div
      className="h-5 border-y-4 border-foreground"
      style={{ background: color }}
      role="presentation"
      aria-hidden="true"
    />
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HomeV2Page() {
  const [showFullStory, setShowFullStory] = useState(false);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen text-foreground page-transition" style={{ background: '#FAF9F7' }}>
      <SEO
        title="Brent Summers v2 — AI-Powered Marketing Leader"
        description="Experimental homepage design. Transformational leader combining strategic vision, technical implementation, and behavior change."
        ogImage="/og-images/home.png"
        canonicalUrl="/home-v2"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <header
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center"
        style={{ background: '#FAF9F7' }}
      >
        {/* Parallax shapes – top-left cluster */}
        <ParallaxShape depth={0.6} className="absolute top-16 left-8 w-14 h-14 border-4 border-foreground rotate-12 hidden lg:block" />
        <ParallaxShape depth={0.4} className="absolute top-32 left-28 w-8 h-8 bg-primary border-4 border-foreground rotate-45 hidden md:block" />
        <ParallaxShape depth={0.8} className="absolute top-8 left-52 w-20 h-5 border-4 border-secondary -rotate-6 hidden lg:block" />
        <ParallaxShape depth={0.5} className="absolute top-1/2 left-4 w-6 h-6 bg-secondary border-4 border-foreground rotate-12 hidden lg:block" />

        {/* Parallax shapes – right cluster */}
        <ParallaxShape depth={0.3} className="absolute top-20 right-8 w-16 h-16 bg-secondary/25 border-4 border-foreground rotate-12 hidden lg:block" />
        <ParallaxShape depth={0.7} className="absolute bottom-36 right-14 w-24 h-7 border-4 border-primary -rotate-3 hidden lg:block" />
        <ParallaxShape depth={0.55} className="absolute top-1/3 right-4 w-10 h-10 bg-primary/20 border-4 border-foreground rotate-45 hidden md:block" />

        {/* Parallax shapes – bottom cluster */}
        <ParallaxShape depth={0.65} className="absolute bottom-28 left-20 w-12 h-12 bg-secondary border-4 border-foreground -rotate-12 hidden md:block" />
        <ParallaxShape depth={0.45} className="absolute bottom-16 left-44 w-6 h-6 bg-foreground rotate-45 hidden lg:block" />
        <ParallaxShape depth={0.5} className="absolute bottom-40 left-72 w-16 h-10 border-4 border-secondary rotate-6 hidden lg:block" />

        {/* Two-column layout */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end min-h-screen py-24 lg:py-16">

            {/* LEFT: Text */}
            <div className="flex flex-col justify-center">
              {/* Vibe-coded badge */}
              <div className="inline-flex mb-6 w-fit animate-fade-in">
                <span className="px-4 py-1.5 border-4 border-foreground bg-background font-black text-xs uppercase tracking-widest text-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-[3px_3px_0px_0px_rgba(38,38,38,1)]">
                  This site was 100% vibe coded
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 animate-fade-in"
                style={{ animationDelay: '0.1s', color: '#262626' }}
              >
                AI-POWERED
                <br />
                <span style={{ color: '#FF1392' }}>LEADER</span>
              </h1>

              {/* Sub-headline */}
              <p
                className="text-lg md:text-2xl font-black uppercase tracking-widest mb-3 animate-fade-in"
                style={{ animationDelay: '0.25s', color: '#262626' }}
              >
                Leveraging Generative AI Since June 2020
              </p>

              {/* Pill tags */}
              <div
                className="flex gap-3 items-center mb-10 flex-wrap animate-fade-in"
                style={{ animationDelay: '0.35s' }}
              >
                {['AI', 'UX', 'GTM Innovation'].map((t, i) => (
                  <span
                    key={t}
                    className="text-sm font-black uppercase tracking-widest flex items-center gap-3"
                    style={{ color: '#262626' }}
                  >
                    {t}
                    {i < 2 && <span className="w-1.5 h-1.5 rotate-45 inline-block bg-foreground" aria-hidden="true" />}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
                style={{ animationDelay: '0.45s' }}
              >
                <BrutalistButton
                  variant="primary"
                  size="lg"
                  asChild
                  className="shadow-[6px_6px_0px_0px_rgba(38,38,38,1)] hover:shadow-[8px_8px_0px_0px_rgba(38,38,38,1)]"
                >
                  <Link to="/vibes">See My Vibes</Link>
                </BrutalistButton>
                <BrutalistButton
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('work')}
                  className="shadow-[4px_4px_0px_0px_rgba(38,38,38,1)] hover:shadow-[6px_6px_0px_0px_rgba(38,38,38,1)]"
                >
                  Explore ↓
                </BrutalistButton>
              </div>

              {/* Press logos */}
              <div className="animate-fade-in" style={{ animationDelay: '0.55s' }}>
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: '#262626', opacity: 0.45 }}>
                  As Seen In
                </p>
                <div className="flex items-center gap-5 flex-wrap">
                  {['Forbes', 'UX Magazine', 'CIO News'].map((pub, i) => (
                    <span key={pub} className="flex items-center gap-5">
                      <span
                        className="text-lg md:text-xl font-black hover:opacity-100 transition-opacity"
                        style={{ color: '#FF1392', opacity: 0.85 }}
                      >
                        {pub}
                      </span>
                      {i < 2 && (
                        <span
                          className="w-1.5 h-1.5 rotate-45 inline-block"
                          style={{ background: '#FF1392' }}
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Headshot – anchored to bottom so face stays visible */}
            <div className="relative hidden lg:block self-end">
              {/* "That's me!" annotation — positioned relative to the photo wrapper,
                  near the face (roughly top 22% of the portrait image) */}
              <div className="absolute -left-28 top-[14%] z-20 flex flex-col items-start gap-0.5">
                <Annotation text="That's me!" />
                <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true" className="ml-6">
                  <path d="M4 4 Q28 30 44 20" stroke="#262626" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M36 13 L44 20 L37 26" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Mustard slab + photo */}
              <div className="relative w-72 xl:w-80 2xl:w-96">
                {/* Mustard background slab – fills lower 80% */}
                <div
                  className="absolute inset-x-0 bottom-0 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(38,38,38,1)]"
                  style={{ background: '#FFBA08', height: '82%' }}
                  aria-hidden="true"
                />
                <img
                  src={headshotSrc}
                  alt="Brent Summers, smiling, wearing glasses and a floral shirt"
                  className="relative z-10 w-full object-contain object-bottom"
                  style={{ maxHeight: '72vh' }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection('work')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce focus:ring-4 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] hover:scale-110 transition-transform"
          aria-label="Scroll down to view my work"
        >
          <Icon name="arrow-down" size={28} className="text-foreground" />
        </button>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <main id="main-content">

        {/* ── ABOUT THIS SITE ─────────────────────────────────────────────── */}
        <section id="work" className="py-16" style={{ background: '#FAF9F7' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ color: '#262626' }}>
                ABOUT THIS SITE
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#262626', opacity: 0.7 }}>
                I'm learning to vibe code and this is one of my <em>vibes</em>. It's a personal portfolio where I'm
                aiming for a Neo-Brutalist aesthetic, excellent performance, and usability. It's built entirely on
                Lovable as of August 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: 'briefcase' as const, title: 'Experience', body: 'Two decades of experience at the intersection of marketing, technology, and UX.', btn: 'View Background →', target: 'about', variant: 'secondary' as const },
                { icon: 'chart' as const, title: 'Case Studies', body: 'Real projects and technology implementations for recognizable brands.', btn: 'See Case Studies →', target: 'case-studies', variant: 'primary' as const },
                { icon: 'edit' as const, title: 'Writing', body: 'Insights and musings on artificial intelligence, marketing & content strategy, and user experience.', btn: 'Read Articles →', target: 'writing', variant: 'secondary' as const },
              ].map(({ icon, title, body, btn, target, variant }) => (
                <article key={title} className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-background p-6">
                  <div className="text-primary mb-4" aria-hidden="true">
                    <Icon name={icon} size={48} />
                  </div>
                  <h3 className="text-2xl font-black mb-4" style={{ color: '#262626' }}>{title}</h3>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.65 }}>{body}</p>
                  <BrutalistButton variant={variant} className="w-full" onClick={() => scrollToSection(target)} aria-label={`Navigate to ${title} section`}>
                    {btn}
                  </BrutalistButton>
                </article>
              ))}
            </div>

            {/* Highlights */}
            <div className="text-center">
              <h3 className="text-3xl font-black mb-8" style={{ color: '#262626' }}>Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <article className="bg-primary/10 p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <span className="inline-flex bg-primary text-foreground px-3 py-1 text-sm font-black mb-3 border-2 border-foreground">NEW</span>
                  <h4 className="text-xl font-black mb-2" style={{ color: '#262626' }}>8.6X ROI with WRITER</h4>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.65 }}>Led the platform discovery, roll out, and scale up of WRITER at Qualcomm Technologies.</p>
                  <ExternalLink href="https://writer.com/blog/qualcomm-customer-story/" variant="primary" className="border-4 border-primary bg-transparent hover:bg-primary hover:text-foreground transition-all duration-150 font-black text-sm px-4 py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2 no-underline">
                    Read Case Study
                  </ExternalLink>
                </article>
                <article className="bg-secondary/10 p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <span className="inline-flex border-2 border-foreground bg-background px-3 py-1 text-sm font-black mb-3">FEATURED</span>
                  <h4 className="text-xl font-black mb-2" style={{ color: '#262626' }}>The UX Flywheel</h4>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.65 }}>This is a user-centered alternative to the marketing funnel that I developed for Blink UX.</p>
                  <ExternalLink href="https://www.youtube.com/watch?v=UYApYNEnaMM" variant="secondary" className="border-4 border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground transition-all duration-150 font-black text-sm px-4 py-2 focus:ring-2 focus:ring-secondary focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2 no-underline">
                    Watch Presentation
                  </ExternalLink>
                </article>
              </div>
            </div>
          </div>
        </section>

        <ColorBand color="#FFBA08" />

        {/* ── ABOUT ME ────────────────────────────────────────────────────── */}
        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter">ABOUT ME</h2>
              <div className="bg-primary p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(38,38,38,1)]">
                <p className="text-xl md:text-2xl font-black text-primary-foreground">
                  Where Marketing Strategy Meets AI Innovation
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="border-4 border-foreground bg-card p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Icon name="lightning" size={32} className="text-primary mr-3" />
                  <h3 className="text-2xl font-black">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Strategic Marketing Leadership', 'Human-Centered Design', 'AI & Technology Strategy'].map((s) => (
                    <span key={s} className="bg-primary text-foreground px-3 py-1 text-sm font-black border-2 border-foreground">{s}</span>
                  ))}
                </div>
              </div>

              <div className="border-4 border-foreground bg-card p-8">
                <div className="flex items-center mb-6">
                  <Icon name="check" size={32} className="text-primary mr-3" />
                  <h3 className="text-2xl font-black">My Story</h3>
                </div>
                <div className="space-y-6 text-lg">
                  <p>
                    I drive measurable business impact through AI adoption and innovative go-to-market strategies.
                    Currently leading AI Platforms & GTM Innovation at Qualcomm Technologies, I've pioneered
                    enterprise-wide generative AI adoption achieving 8.6x ROI and built ABM programs influencing
                    billions in pipeline.
                  </p>
                  <div>
                    <h4 className="text-xl font-black mb-3 text-primary">How a fan-first mindset shaped my career</h4>
                    <p>
                      My career shifted into high gear when I joined NASCAR in 2004. I started as a call center agent
                      and was quickly promoted to trainer. Within two years, I moved into the IT organization as a
                      Business Analyst where I defined the requirements for projects that improved the fan experience.
                      Two of my significant projects include the implementation of print-at-home ticketing (2007) and
                      new websites for 13 race tracks (2010). These early experiences sparked my passion for user
                      experience, technology, and marketing — shaping my career ever since.
                    </p>
                  </div>

                  {!showFullStory && (
                    <div className="text-center">
                      <button
                        onClick={() => setShowFullStory(true)}
                        className="bg-primary text-foreground font-black px-6 py-3 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(38,38,38,1)] hover:shadow-[2px_2px_0px_0px_rgba(38,38,38,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                      >
                        Keep reading...
                      </button>
                    </div>
                  )}

                  {showFullStory && (
                    <>
                      <div>
                        <h4 className="text-xl font-black mb-3 text-primary">The proving ground that sharpened my leadership</h4>
                        <p className="mb-4">Next, I moved agency-side where I learned to pitch big ideas, lead large quality-obsessed teams, and expand into new markets.</p>
                        <ul className="space-y-3 list-disc list-inside text-base">
                          <li><strong>At Digitaria,</strong> I was the Executive Producer on the Qualcomm account where I had 5 direct reports plus a dynamic project team that sometimes scaled to 40 contributing resources. My team delivered several high-stakes projects that made Qualcomm an early adopter of cloud-computing and responsive design.</li>
                          <li><strong>At Digital Telepathy,</strong> I pivoted away from providing client services to marketing leadership. Our GTM strategy included the incubation — and eventual sale — of digital products (Slide Deck, Hello Bar, and Filament), and inbound marketing driven primarily by our blog which was recognized by <ExternalLink href="https://designers.hubspot.com/blog/11-of-the-most-influential-ux-blogs-you-need-to-follow" variant="primary" className="inline">HubSpot</ExternalLink> for its influence on the industry.</li>
                          <li><strong>At Blink,</strong> I opened and scaled a studio in San Diego — winning our first few clients and growing the team from 3 employees to 12. After stabilizing the new office, I overhauled our Engineering practice to reach profitability and led a rebrand project following the acquisition of Tectonic. Our account-based GTM strategy leveraged our beautiful studio to build relationships with local leaders from HP, Qualcomm, ServiceNow, and more by <ExternalLink href="https://www.youtube.com/watch?v=UEKVb_ZNGk8&list=PL9g8_WUUTpAnAAybzhb8Tx0gD5ZfoiFaI" variant="primary" className="inline">hosting meetups</ExternalLink>, workshops, and the occasional party.</li>
                          <li><strong>At Metalab,</strong> I led the in-house team of three responsible for marketing strategy and sales enablement. In collaboration with freelancers and another agency, we designed and executed a content strategy that delivered 3 marquee case studies and 20+ sales enablement decks — ultimately leading to $3.8M in influenced revenue, a 5.5x ROI.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-black mb-3 text-primary">The opportunity to drive outsized impact in an enterprise</h4>
                        <p className="mb-4">I joined Qualcomm Technologies to build an ABM program. In pursuit of that goal, I became an early champion for Generative AI. Now, I am the Global Lead for AI Platforms & GTM Innovation. Some of my key achievements include:</p>
                        <ul className="space-y-2 list-disc list-inside text-base">
                          <li>Established and scaled an award-winning ABM program that influences billions in annual pipeline across several business units.</li>
                          <li>Built and successfully transitioned commercial channel marketing to dedicated teams, onboarding more than a dozen partners worldwide.</li>
                          <li>Pioneered enterprise-wide Generative AI adoption across marketing functions, achieving 8.6x ROI based purely on time savings.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-black mb-3 text-primary">My unique blend of leadership</h4>
                        <p className="mb-4">My leadership approach bridges the gap between visionary strategy and tactical execution.</p>
                        <ul className="space-y-2 list-disc list-inside text-base mb-4">
                          <li><strong>I start with empathy.</strong> Understanding users, customers, and teammates is fuel for innovation.</li>
                          <li><strong>I make transformation tangible.</strong> Big bets only matter when they land in the real world.</li>
                          <li><strong>I let data guide me.</strong> Gut instincts spark ideas, but evidence earns decisions (and investment).</li>
                          <li><strong>I break silos.</strong> Collaboration isn't optional; it's a force-multiplier.</li>
                          <li><strong>I play the long game.</strong> Balancing today's wins with tomorrow's advantage.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-black mb-3 text-primary">Beyond the day job</h4>
                        <p>
                          In October 2025, I accepted UC San Diego's invitation to become{' '}
                          <Link to="/designer-in-residence" className="text-primary hover:text-primary/80 underline font-semibold">
                            Designer-in-Residence
                          </Link>
                          . As a member of this industry affiliate program, I will mentor students, co-lead design
                          programs, and connect academic research back to enterprise challenges.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ColorBand color="#FF1392" />

        {/* ── THOUGHT LEADERSHIP ──────────────────────────────────────────── */}
        <section id="writing" className="py-16" style={{ background: '#FAF9F7' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter">THOUGHT LEADERSHIP</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I believe that{' '}
                <Link to="/speaking" className="text-primary hover:text-primary/80 underline font-semibold">
                  thought leadership is an act of generosity
                </Link>
                . Here is a collection of frameworks, playbooks, and other pieces of wisdom that I've shared thanks to
                the awesome power of the Internet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { tag: 'AI Strategy', tagCls: 'bg-primary text-foreground', title: "Why Qualcomm's Playbook For AI Starts With Intention—And Ends With A Human", body: 'From brand voice guardrails to security-first agent design, my approach offers a blueprint for automating AI tasks with intention in marketing organizations.', href: 'https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers' },
                { tag: 'Content Strategy', tagCls: 'bg-secondary text-secondary-foreground', title: 'My Favorite Content Strategy Frameworks for Website Projects', body: 'Clarify goals, make editorial decisions, and set priorities with these simple frameworks.', href: 'https://contentstrategy.substack.com/p/my-favorite-content-strategy-frameworks' },
                { tag: 'Innovation', tagCls: 'bg-foreground text-background', title: 'How Evidence-driven Design Supports Innovation', body: "I led marketing at Blink UX for three years. This is a story that explains the design philosophy used to create product for NASA, Amazon, Microsoft, and other notable clients.", href: 'https://blinkux.com/ideas/evidence-driven-design-supports-innovation' },
              ].map(({ tag, tagCls, title, body, href }) => (
                <article
                  key={title}
                  className="border-4 border-foreground bg-background p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.open(href, '_blank')}
                >
                  <span className={`inline-flex px-3 py-1 text-sm font-black mb-4 border-2 border-foreground ${tagCls}`}>{tag}</span>
                  <h3 className="text-xl font-black mb-3 text-foreground">{title}</h3>
                  <p className="text-muted-foreground mb-4">{body}</p>
                  <span className="text-primary font-black">Read more →</span>
                </article>
              ))}
            </div>

            {/* Slot Machine Carousel */}
            <div className="mt-4 max-w-4xl mx-auto">
              <SlotMachine />
            </div>
          </div>
        </section>

        {/* ── RSS / THOUGHT LEADERSHIP FEED ───────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <ThoughtLeadershipFeed />
          </div>
        </section>

        <ColorBand color="#2962FF" />

        {/* ── CASE STUDIES ────────────────────────────────────────────────── */}
        <section id="case-studies" className="py-16" style={{ background: '#FAF9F7' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter">CASE STUDIES</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These are a few successful technology projects and my client collaborators. Click in for more details
                about my contributions. If you're more interested in some eye candy then check out these{' '}
                <a href="/design-case-studies" className="text-primary hover:text-primary/80 underline">
                  design case studies
                </a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <CaseStudyCard
                title="SUMO LOGIC"
                tag="Craft CMS"
                client="Suku Krishnaraj, Chief Marketing Officer"
                description="During a stint as Engineering Director at Blink, I led the pitch that won this website redesign project. The brand work was done by Tolleson."
                details="This project included foundational user research and a few rounds of evaluative testing as we determined the best messaging and information architecture for three very technical types of users: Security Officers, DevOps Managers, and Cloud Architects. While my primary role was technical lead, I also advised the project team (mostly product designers) on web design best practices. Near the end of the project, Sumo Logic requested a change — localization into Japanese."
                contributions={['Project estimation','Product requirements','Platform recommendations','Implementation management','QA testing','Web strategy']}
                logoSrc="/lovable-uploads/d1bb2915-782f-4b5a-b60b-08b9094dcdc1.png"
                logoAlt="Sumo Logic logo"
                cardIndex={0}
              />
              <CaseStudyCard
                title="ELASTIC"
                tag="WordPress"
                client="Elyse Phillips, VP Marketing"
                description="I led project that established the Elasticsearch brand and launched the commercial product."
                details="In collaboration with the founding team, Digital Telepathy designed two websites. elasticsearch.com was launched to support the new commercial product and elasticsearch.org was updated to reflect the growing capabilities of the open-source project. Another agency (UpTrending) handled the heavy-lifting of the build, but I managed content entry and quality assurance testing. As an early-stage startup, Elasticsearch moved quickly to add new features. The company made strategic acquisitions including Logstash, Kibana, and Beats. They integrated these products and introduced the ELK stack. Then added Marvel, an observability platform."
                contributions={['Brand establishment for Elasticsearch','Commercial product launch strategy','Website design collaboration (elasticsearch.com)','Website update management (elasticsearch.org)','Content entry management','Quality assurance testing','Product integration strategy for acquisitions']}
                logoSrc="/lovable-uploads/26b28675-053b-424c-ad22-a082f58d3937.png"
                logoAlt="Elastic logo"
                cardIndex={1}
              />
              <CaseStudyCard
                title="AMAZON"
                tag="LEGO (Proprietary)"
                client="Andrew Meyers, Sr. Product Manager"
                description="I was part of a small team that overhauled sell.amazon.com to streamline several ingress points to becoming a seller on Amazon."
                details="This project was informed by foundational user research and iterative evaluative testing during the design. The site is built on a proprietary drag-and-drop CMS called 'LEGO.' While I cannot disclose the specific metrics, I am happy to report that the conversion rate we achieved was triple the benchmark."
                contributions={['Competitive analysis','Content strategy & copywriting','Product requirements','Backlog management','Scrum master','Content entry via CMS','Quality assurance testing']}
                logoSrc="/lovable-uploads/fcdc8d21-8816-48fb-ac54-3140bf151296.png"
                logoAlt="Amazon logo"
                cardIndex={2}
              />
              <CaseStudyCard
                title="PIVOTAL"
                tag="Proprietary"
                client="Michelle Kerr, VP of Marketing"
                description="I led this project which expanded on the core brand assets (logos, color, and type) to create a comprehensive visual design system."
                details="Pivotal was born from a grab bag of EMC and VMware acquisitions including Cetas, Cloud Foundry, GemFire, GreenPlum, SpringSource, and Pivotal Labs. The company was spun out of EMC/VMware with a $105 million investment from GE. The project included a corporate website, a huge collection of icons and illustrations, plus guidelines for creating custom marketecture diagrams that are essential to technical sales."
                contributions={['Visual design system expansion','Corporate website design','Icon and illustration collection','Marketecture diagram guidelines','Brand asset coordination','Technical sales enablement materials']}
                logoSrc="/lovable-uploads/f09455ec-ba6d-44e8-bf98-5b6023cd43fd.png"
                logoAlt="Pivotal logo"
                cardIndex={3}
              />
              <CaseStudyCard
                title="HP"
                tag="iOS & Android"
                client="Shawn Piper, Senior Experience Design Manager"
                description="This project overhauled the mobile app that controls modern HP printers and conceived how HP's new subscription business model would be communicated."
                details="A six-person team at Blink worked with more than 20 stakeholders at HP to research and design an app experience to serve three primary personas: Individual at home/work, Small business owners, and IT administrators. As a follow-up to the app redesign, Blink conceived how HP's new subscription business model would be communicated on its storefront website."
                contributions={['Value proposition clarity','Setup instructions design','Product commands interface','Content strategy for subscription model','Copywriting for concept website','eCommerce store consolidation strategy']}
                logoSrc="/lovable-uploads/5c60a0c9-273d-43a9-a4e6-226e8538a08c.png"
                logoAlt="HP logo"
                cardIndex={4}
              />
              <CaseStudyCard
                title="NEW RELIC"
                tag="Prismic"
                client="Raf Alenda, Vice President - Online & Brand Marketing"
                description="New Relic was a long-standing client of Digital Telepathy. I got involved with several key initiatives during their growth phase, focusing on product launches, content strategy pivots, and campaign optimization."
                details="I helped with several key initiatives during their growth phase, focusing on product launches, content strategy pivots, and campaign optimization."
                contributions={['Product launch: Synthetics','Pivot to enterprise content strategy - Solutions by Industry','Pivot to enterprise content strategy - Solutions by Use Case','Landing page optimization for "Data Nerd" campaign','Nurture program built on in-product events (using Intercom)','FutureStack 2014, 2015']}
                logoSrc="/lovable-uploads/6cbd7f55-af1e-4682-aaf1-58ae638c0c99.png"
                logoAlt="New Relic logo"
                cardIndex={5}
              />
            </div>
          </div>
        </section>

        <ColorBand color="#7A1E1C" />

        {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tighter">KIND WORDS FROM GREAT HUMANS</h3>
              <p className="text-xl text-muted-foreground">
                <em>"Let strangers tell your story. It sounds better that way."</em> — ChatGPT
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { quote: '"Brent brings a great mix of strategy and execution to our company\'s account. Like most fast-moving start-ups, we juggle needing great content along with \'big picture\' thinking. Brent consistently manages the day-to-day while continuing to bring new, fresh ideas to our marketing strategy."', name: 'Elyse Phillips', role: 'VP of Marketing, Elastic' },
                { quote: '"Brent Summers is one of the smartest people I have ever had the pleasure to collaborate with. His attention to detail and care for the end user comes through in everything he does. Brent and his team helped us create a beautiful Web experience that eclipsed the previous site in every facet. From design to conversion, it was a revelation."', name: 'Michael Weir', role: 'Sr. Director of Marketing, Pivotal' },
                { quote: '"Brent is hands down the best manager I\'ve had. He takes the time to understand you as a person so he can advocate for your growth in a way that aligns with company goals. He shares his expertise while being open to new ways of doing things. He\'s detail and process-orientated but leaves room for creativity. He\'s an excellent mentor, collaborator, and leader. My confidence as a marketer has grown 10x since he stepped in to lead the team."', name: 'Taylor Odgers', role: 'Marketing Lead, Metalab' },
                { quote: '"I had the immense good fortune to report to Brent on the marketing team at Blink UX. Though we have both moved on to other organizations, I am lucky to continue to call on him for counsel and mentorship. Brent is strategic, ambitious, and smart. He brings a degree of rigor and grit to his work that I am constantly trying to emulate. Any team would be lucky to have him."', name: 'Sara Keats', role: 'Marketing Manager, Blink' },
              ].map(({ quote, name, role }) => (
                <div key={name} className="border-4 border-foreground bg-card p-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-6">{quote}</blockquote>
                  <div className="text-right">
                    <p className="font-black text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIMENT FOOTER NOTE ──────────────────────────────────────── */}
        <section className="py-8 border-t-4 border-foreground" style={{ background: '#262626' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-background/50 text-xs font-black uppercase tracking-widest mb-1">🧪 Experimental Page · /home-v2</p>
            <p className="text-background/30 text-xs">
              Live site →{' '}
              <Link to="/" className="text-primary underline hover:text-primary/80">brent-summers.lovable.app</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
