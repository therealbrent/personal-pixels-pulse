import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';
import { Icon } from './ui/icon';
import headshotSrc from '@/assets/brent-summers-headshot.png';

// ─── Parallax floating shapes ────────────────────────────────────────────────
interface ShapeProps {
  className: string;
  depth: number; // 0–1, controls parallax intensity
  style?: React.CSSProperties;
}

function ParallaxShape({ className, depth, style }: ShapeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 → 1
      const dy = (e.clientY - cy) / cy;
      const factor = depth * 28;
      ref.current.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      className={`inline-flex items-center gap-1.5 bg-background border-4 border-foreground px-3 py-1.5 font-black text-xs uppercase tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(38,38,38,1)] ${className ?? ''}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}

// ─── Press bar ────────────────────────────────────────────────────────────────
function PressBar() {
  return (
    <section
      aria-label="Featured press mentions"
      className="bg-foreground py-5 border-y-8 border-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <span className="text-xs font-black uppercase tracking-widest text-background/50">
            As Seen In
          </span>
          <div className="flex items-center gap-6 sm:gap-12">
            <span className="text-2xl sm:text-3xl font-black text-background hover:text-primary transition-colors">
              Forbes
            </span>
            <span className="w-2 h-2 bg-primary rotate-45" aria-hidden="true" />
            <span className="text-2xl sm:text-3xl font-black text-background hover:text-primary transition-colors">
              UX Magazine
            </span>
            <span className="w-2 h-2 bg-primary rotate-45" aria-hidden="true" />
            <span className="text-2xl sm:text-3xl font-black text-background hover:text-primary transition-colors">
              CIO News
            </span>
          </div>
        </div>
      </div>
    </section>
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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <header
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center"
        style={{ background: '#FAF9F7' }}
      >
        {/* ── Parallax floating shapes ── */}
        {/* Top-left cluster */}
        <ParallaxShape
          depth={0.6}
          className="absolute top-16 left-8 w-14 h-14 border-4 border-foreground rotate-12 hidden lg:block"
        />
        <ParallaxShape
          depth={0.4}
          className="absolute top-32 left-28 w-8 h-8 bg-primary border-4 border-foreground rotate-45 hidden md:block"
        />
        <ParallaxShape
          depth={0.8}
          className="absolute top-6 left-48 w-20 h-6 border-4 border-secondary -rotate-6 hidden lg:block"
        />

        {/* Right cluster (behind photo) */}
        <ParallaxShape
          depth={0.3}
          className="absolute top-24 right-8 w-16 h-16 bg-secondary/30 border-4 border-foreground rotate-12 hidden lg:block"
        />
        <ParallaxShape
          depth={0.7}
          className="absolute bottom-40 right-12 w-24 h-8 border-4 border-primary -rotate-3 hidden lg:block"
        />
        <ParallaxShape
          depth={0.5}
          className="absolute top-1/2 right-4 w-10 h-10 bg-primary/20 border-4 border-foreground rotate-45 hidden md:block"
        />

        {/* Bottom cluster */}
        <ParallaxShape
          depth={0.65}
          className="absolute bottom-24 left-16 w-12 h-12 bg-secondary border-4 border-foreground -rotate-12 hidden md:block"
        />
        <ParallaxShape
          depth={0.45}
          className="absolute bottom-14 left-44 w-6 h-6 bg-foreground rotate-45 hidden lg:block"
        />
        <ParallaxShape
          depth={0.55}
          className="absolute bottom-32 left-72 w-16 h-10 border-4 border-secondary rotate-6 hidden lg:block"
        />

        {/* ── Two-column layout ── */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center min-h-screen py-24 lg:py-0">

            {/* LEFT: Text */}
            <div className="flex flex-col justify-center">
              {/* Vibe-coded badge */}
              <div
                className="inline-flex mb-6 w-fit"
                style={{ animationDelay: '0s' }}
              >
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
                <span
                  className="relative inline-block"
                  style={{ color: '#FF1392' }}
                >
                  LEADER
                </span>
              </h1>

              {/* Sub-headline */}
              <div
                className="mb-3 animate-fade-in"
                style={{ animationDelay: '0.25s' }}
              >
                <p
                  className="text-lg md:text-2xl font-black uppercase tracking-widest"
                  style={{ color: '#262626' }}
                >
                  Leveraging Generative AI Since June 2020
                </p>
              </div>

              {/* Pill tags */}
              <div
                className="flex gap-2 mb-10 flex-wrap animate-fade-in"
                style={{ animationDelay: '0.35s' }}
              >
                {['AI', 'UX', 'GTM Innovation'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-black uppercase tracking-widest"
                    style={{ color: '#262626' }}
                  >
                    {t !== 'GTM Innovation' ? `${t} •` : t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in"
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
                  onClick={() => scrollToSection('about')}
                  className="shadow-[4px_4px_0px_0px_rgba(38,38,38,1)] hover:shadow-[6px_6px_0px_0px_rgba(38,38,38,1)]"
                >
                  About Me ↓
                </BrutalistButton>
              </div>

              {/* Press logos */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: '0.55s' }}
              >
                <p
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: '#262626', opacity: 0.5 }}
                >
                  As Seen In
                </p>
                <div className="flex items-center gap-6">
                  {['Forbes', 'UX Magazine', 'CIO News'].map((pub, i) => (
                    <span
                      key={pub}
                      className="flex items-center gap-6"
                    >
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

            {/* RIGHT: Headshot */}
            <div className="relative hidden lg:flex items-end justify-center self-stretch">
              {/* Annotation */}
              <div className="absolute top-1/4 -left-16 z-20 flex flex-col items-start gap-1">
                <Annotation text="That's me!" />
                <svg
                  width="40" height="30" viewBox="0 0 40 30"
                  className="ml-8"
                  aria-hidden="true"
                  fill="none"
                >
                  <path d="M2 2 Q20 28 38 20" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M30 14 L38 20 L32 26" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              {/* Photo with mustard background block */}
              <div className="relative">
                {/* Mustard background slab */}
                <div
                  className="absolute inset-x-0 bottom-0 h-5/6 border-4 border-foreground"
                  style={{ background: '#FFBA08' }}
                  aria-hidden="true"
                />
                <img
                  src={headshotSrc}
                  alt="Brent Summers, smiling and wearing glasses"
                  className="relative z-10 w-72 xl:w-80 2xl:w-96 object-contain object-bottom"
                  style={{ maxHeight: '75vh' }}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* "AI·UX·GTM" vertical label */}
              <div
                className="absolute right-0 top-1/3 writing-mode-vertical font-black text-xs uppercase tracking-widest rotate-90 origin-right opacity-40 hidden xl:block"
                style={{ color: '#262626' }}
                aria-hidden="true"
              >
                AI · UX · GTM Innovation
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

      {/* ── WORK SECTION ──────────────────────────────────────────────────── */}
      <main id="main-content">
        <section id="work" className="py-16" style={{ background: '#FAF9F7' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
                style={{ color: '#262626' }}
              >
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
                {
                  icon: 'briefcase' as const,
                  title: 'Experience',
                  body: 'Two decades of experience at the intersection of marketing, technology, and UX.',
                  btn: 'View Background →',
                  target: 'about',
                  variant: 'secondary' as const,
                },
                {
                  icon: 'chart' as const,
                  title: 'Case Studies',
                  body: 'Real projects and technology implementations for recognizable brands.',
                  btn: 'See Case Studies →',
                  target: 'case-studies',
                  variant: 'primary' as const,
                },
                {
                  icon: 'edit' as const,
                  title: 'Writing',
                  body: 'Insights and musings on artificial intelligence, marketing & content strategy, and user experience.',
                  btn: 'Read Articles →',
                  target: 'writing',
                  variant: 'secondary' as const,
                },
              ].map(({ icon, title, body, btn, target, variant }) => (
                <article
                  key={title}
                  className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-background p-6"
                >
                  <div className="text-primary mb-4" aria-hidden="true">
                    <Icon name={icon} size={48} />
                  </div>
                  <h3 className="text-2xl font-black mb-4" style={{ color: '#262626' }}>{title}</h3>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.7 }}>{body}</p>
                  <BrutalistButton
                    variant={variant}
                    className="w-full"
                    onClick={() => scrollToSection(target)}
                    aria-label={`Navigate to ${title} section`}
                  >
                    {btn}
                  </BrutalistButton>
                </article>
              ))}
            </div>

            {/* Highlights */}
            <div className="text-center">
              <h3 className="text-3xl font-black mb-8" style={{ color: '#262626' }}>Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <article className="p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 bg-primary/10">
                  <span className="inline-flex bg-primary text-foreground px-3 py-1 text-sm font-black mb-3 border-2 border-foreground">
                    NEW
                  </span>
                  <h4 className="text-xl font-black mb-2" style={{ color: '#262626' }}>8.6X ROI with WRITER</h4>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.7 }}>
                    Led the platform discovery, roll out, and scale up of WRITER at Qualcomm Technologies.
                  </p>
                  <ExternalLink
                    href="https://writer.com/blog/qualcomm-customer-story/"
                    variant="primary"
                    className="border-4 border-primary bg-transparent hover:bg-primary hover:text-foreground transition-all duration-150 font-black text-sm px-4 py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2 no-underline"
                  >
                    Read Case Study
                  </ExternalLink>
                </article>

                <article className="p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 bg-secondary/10">
                  <span className="inline-flex border-2 border-foreground bg-background px-3 py-1 text-sm font-black mb-3">
                    FEATURED
                  </span>
                  <h4 className="text-xl font-black mb-2" style={{ color: '#262626' }}>The UX Flywheel</h4>
                  <p className="mb-4" style={{ color: '#262626', opacity: 0.7 }}>
                    This is a user-centered alternative to the marketing funnel that I developed for Blink UX.
                  </p>
                  <ExternalLink
                    href="https://www.youtube.com/watch?v=UYApYNEnaMM"
                    variant="secondary"
                    className="border-4 border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground transition-all duration-150 font-black text-sm px-4 py-2 focus:ring-2 focus:ring-secondary focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2 no-underline"
                  >
                    Watch Presentation
                  </ExternalLink>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Mustard separator band */}
        <div className="h-6 bg-primary border-y-4 border-foreground" role="presentation" aria-hidden="true" />

        {/* About Section */}
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
                  {['Strategic Marketing Leadership', 'Human-Centered Design', 'AI & Technology Strategy'].map((skill) => (
                    <span key={skill} className="bg-primary text-foreground px-3 py-1 text-sm font-black border-2 border-foreground">
                      {skill}
                    </span>
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
                    <p>
                      Today I'm the Global Lead for AI Platforms & GTM Innovation at Qualcomm Technologies — and in
                      October 2025 I accepted UC San Diego's invitation to become{' '}
                      <Link to="/designer-in-residence" className="text-primary hover:text-primary/80 underline font-semibold">
                        Designer-in-Residence
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot pink band */}
        <div className="h-6 bg-secondary border-y-4 border-foreground" role="presentation" aria-hidden="true" />

        {/* Thought Leadership */}
        <section id="writing" className="py-16" style={{ background: '#FAF9F7' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter">THOUGHT LEADERSHIP</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I believe that{' '}
                <Link to="/speaking" className="text-primary hover:text-primary/80 underline font-semibold">
                  thought leadership is an act of generosity
                </Link>
                . Here is a collection of frameworks, playbooks, and other pieces of wisdom I've shared publicly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  tag: 'AI Strategy',
                  tagColor: 'bg-primary text-foreground',
                  title: "Why Qualcomm's Playbook For AI Starts With Intention—And Ends With A Human",
                  body: 'From brand voice guardrails to security-first agent design, a blueprint for automating AI tasks with intention.',
                  href: 'https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers',
                },
                {
                  tag: 'Content Strategy',
                  tagColor: 'bg-secondary text-secondary-foreground',
                  title: 'My Favorite Content Strategy Frameworks for Website Projects',
                  body: 'Clarify goals, make editorial decisions, and set priorities with these simple frameworks.',
                  href: 'https://contentstrategy.substack.com/p/my-favorite-content-strategy-frameworks',
                },
                {
                  tag: 'Innovation',
                  tagColor: 'bg-foreground text-background',
                  title: 'How Evidence-driven Design Supports Innovation',
                  body: 'The design philosophy behind product for NASA, Amazon, Microsoft, and other notable clients.',
                  href: 'https://blinkux.com/ideas/evidence-driven-design-supports-innovation',
                },
              ].map(({ tag, tagColor, title, body, href }) => (
                <article
                  key={title}
                  className="border-4 border-foreground bg-background p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.open(href, '_blank')}
                >
                  <span className={`inline-flex px-3 py-1 text-sm font-black mb-4 border-2 border-foreground ${tagColor}`}>
                    {tag}
                  </span>
                  <h3 className="text-xl font-black mb-3 text-foreground">{title}</h3>
                  <p className="text-muted-foreground mb-4">{body}</p>
                  <span className="text-primary font-black">Read more →</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cobalt band */}
        <div className="h-6 border-y-4 border-foreground" style={{ background: '#2962FF' }} role="presentation" aria-hidden="true" />

        {/* Case Studies */}
        <section id="case-studies" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter">CASE STUDIES</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Selected technology projects and client collaborations. Visit the{' '}
                <Link to="/" className="text-primary hover:text-primary/80 underline font-semibold">
                  original homepage
                </Link>{' '}
                for full details.
              </p>
            </div>
            <div className="text-center">
              <BrutalistButton variant="primary" size="lg" asChild>
                <Link to="/#case-studies">View All Case Studies →</Link>
              </BrutalistButton>
            </div>
          </div>
        </section>

        {/* Experiment note */}
        <section className="py-10 border-t-4 border-foreground" style={{ background: '#262626' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-background/60 text-sm font-black uppercase tracking-widest mb-2">
              🧪 Experimental Page
            </p>
            <p className="text-background/40 text-xs">
              This is a design experiment at <code>/home-v2</code>. The live site is at{' '}
              <Link to="/" className="text-primary underline hover:text-primary/80">
                brent-summers.lovable.app
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
