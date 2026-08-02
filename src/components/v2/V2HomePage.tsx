import { Link } from "react-router-dom";
import SEO from "../SEO";
import V2Layout, { Section, SectionLabel } from "./V2Layout";

const HEADSHOT = "/lovable-uploads/brent-summers-headshot-min.png";

const IMPACT = [
  { figure: "350+", label: "Enterprise AI users" },
  { figure: "85%", label: "Weekly active usage" },
  { figure: "2,400", label: "Hours saved monthly" },
  { figure: "8.6×", label: "Measured AI platform ROI" },
  { figure: "$2B", label: "Pipeline influenced through ABM" },
  { figure: "9", label: "Business units adopting ABM" },
];

const STORIES = [
  {
    category: "Enterprise AI",
    title: "From AI access to enterprise muscle",
    summary:
      "Helping move enterprise AI beyond experimentation by combining an approved platform with workflow redesign, governance, evaluation, enablement and measurable adoption.",
    proof: [
      "350+ users",
      "85% weekly active",
      "2,400 hours saved monthly",
      "70+ workflows",
      "20+ AI agents",
      "8.6× measured ROI",
    ],
    diagram: ["Platform", "Governance", "Workflows", "Capability", "Measurement"],
    cta: "Read the transformation story",
  },
  {
    category: "Go-to-market",
    title: "Building ABM as an enterprise capability",
    summary:
      "Expanding account-based marketing across business units, customer segments and partner ecosystems by creating reusable plays, shared infrastructure and a disciplined operating model.",
    proof: [
      "Approximately $2 billion in influenced pipeline",
      "Nine business units adopting ABM",
      "400+ opportunities supported",
      "50+ channel partners onboarded",
      "Multiple award-winning programs",
    ],
    diagram: ["Account intelligence", "Orchestration", "Content + media", "Sales alignment", "Measurement"],
    cta: "See how the model scaled",
  },
  {
    category: "Adoption + organizational change",
    title: "Turning users into builders",
    summary:
      "Creating the communities, training systems and operating conditions that allow employees to develop new skills, redesign their own workflows and co-create AI agents with a central platform team.",
    proof: [
      "Enterprise-wide AI participation",
      "Cross-functional use cases across 11 departments",
      "An active builder and upskilling community",
      "Governance embedded into the creation process",
      "Adoption measured through behavior, not license counts",
    ],
    diagram: ["Access", "Activity", "Embedding", "Reinvention"],
    cta: "Explore the adoption model",
  },
];

const IDEAS = [
  {
    title: "AI is an operating model, not a tool rollout.",
    copy:
      "Giving people access creates activity. Redesigning workflows, incentives, governance and accountability creates change.",
    cta: "Read the argument",
  },
  {
    title: "Marketing should steal engineering's operating discipline.",
    copy:
      "Not its culture, language or org chart. Its commitment to reusable systems, version control, evaluation and continuous improvement.",
    cta: "Explore the model",
  },
  {
    title: "Human judgment must remain visible.",
    copy:
      "Human oversight is not a ceremonial approval step. It should be designed into the architecture, particularly where AI affects customers, reputation or consequential decisions.",
    cta: "See the Human Agency Scale",
  },
  {
    title: "Agent sprawl is the next enterprise mess.",
    copy:
      "Organizations are creating agents faster than they are defining ownership, interoperability, quality standards and lifecycle management.",
    cta: "Read Agent Sprawl",
  },
];

const DEPTH = [
  { level: "Access", copy: "People can use the technology." },
  { level: "Activity", copy: "People use it with some regularity." },
  { level: "Embedding", copy: "AI becomes part of repeatable workflows and team practices." },
  {
    level: "Reinvention",
    copy:
      "The organization redesigns work, roles and value creation around capabilities that did not previously exist.",
  },
];

const MEDIA = [
  {
    kind: "Keynote",
    title: "Defining use cases that are ready to build",
    event: "Adobe Skill Exchange",
    takeaway: "A use case is only ready when the workflow, owner and evaluation are defined.",
  },
  {
    kind: "Podcast",
    title: "From magic to muscle: driving enterprise AI transformation",
    event: "Humans of AI",
    takeaway: "AI creates more value when it is designed into the workflow, not bolted onto it.",
  },
  {
    kind: "Panel",
    title: "From idea to adoption: where AI gets real",
    event: "Adobe Experience League",
    takeaway: "Adoption is an operating problem long before it is a technology problem.",
  },
];

const COMMUNITY = [
  {
    title: "UC San Diego",
    copy: "Designer-in-Residence, moderator and contributor to Design@Large programming.",
  },
  {
    title: "World Design Capital and Design Forward Alliance",
    copy: "Fundraising, programming and design-community advocacy.",
  },
  {
    title: "San Diego Experience Design",
    copy:
      "Advisory leadership during a period of significant community growth and transition to online programming.",
  },
];

export default function V2HomePage() {
  return (
    <V2Layout>
      <SEO
        title="Brent Summers — Enterprise AI + GTM Transformation"
        description="I build the platforms, adoption systems and go-to-market motions that help complex organizations turn emerging technology into measurable growth."
        ogTitle="AI doesn't transform companies. Operating models do."
        ogDescription="Enterprise AI platforms, adoption systems and go-to-market transformation."
        canonicalUrl="/v2"
      />

      {/* 1. Hero */}
      <section className="border-b-4 border-foreground">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/60">
              Brent Summers
              <span className="block mt-1 text-accent">Enterprise AI + GTM Transformation</span>
            </p>

            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              AI doesn't transform companies.
              <span className="block">Operating models do.</span>
            </h1>

            <div className="mt-8 space-y-5 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/80">
              <p>
                I build the platforms, adoption systems and go-to-market motions that help complex
                organizations turn emerging technology into measurable growth.
              </p>
              <p>
                My work sits between technology, customer value and organizational change—where most
                enterprise transformation either becomes real or quietly stalls.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/v2/work"
                className="bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                See the work
              </Link>
              <Link
                to="/v2/speaking"
                className="border-2 border-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                Speaking and media
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-foreground/50">
              San Diego · Working globally
            </p>
          </div>

          <div className="relative">
            <img
              src={HEADSHOT}
              alt="Portrait of Brent Summers"
              width={1300}
              height={1334}
              loading="eager"
              className="w-full max-w-md mx-auto border-4 border-foreground object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Proof of scale */}
      <Section className="bg-foreground text-background">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-10">
          Selected impact
        </p>
        <dl className="grid gap-px bg-background/20 border border-background/20 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT.map((item) => (
            <div key={item.label} className="bg-foreground p-8">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-4xl md:text-5xl font-black tracking-tight">
                  {item.figure}
                </span>
                <span className="mt-3 block text-sm uppercase tracking-widest opacity-70">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm opacity-60 max-w-2xl">
          Selected results from enterprise AI adoption and global go-to-market programs.
        </p>
      </Section>

      {/* 3. Positioning statement */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            I work where the org chart stops being useful.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              The hardest enterprise problems do not remain inside marketing, IT, product, sales or
              design.
            </p>
            <p className="font-bold text-foreground">They move between them.</p>
            <p>
              That has been the pattern throughout my career—from technology and digital product
              design to customer experience, global go-to-market and enterprise AI.
            </p>
            <p>
              I help organizations make sense of that complexity, turn ambition into an operating
              system and give people a practical way to change how work gets done.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Featured transformation stories */}
      <Section className="border-t-4 border-foreground">
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
          Building the systems behind the outcomes.
        </h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl leading-relaxed">
          Campaigns, platforms and programs are visible. The operating model underneath them
          determines whether they scale.
        </p>

        <div className="mt-14 space-y-10">
          {STORIES.map((story) => (
            <article key={story.title} className="border-4 border-foreground bg-card">
              <div className="grid lg:grid-cols-[1.3fr_1fr]">
                <div className="p-8 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    {story.category}
                  </p>
                  <h3 className="mt-4 text-2xl md:text-3xl font-black tracking-tight">
                    {story.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-foreground/80">{story.summary}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {story.proof.map((p) => (
                      <li key={p} className="text-sm font-medium text-foreground/80 flex gap-3">
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/v2/work"
                    className="mt-9 inline-flex text-sm font-bold uppercase tracking-widest text-foreground border-b-2 border-accent pb-1 hover:text-accent transition-colors"
                  >
                    {story.cta}
                  </Link>
                </div>
                <div className="border-t-4 lg:border-t-0 lg:border-l-4 border-foreground bg-muted/40 p-8 md:p-10 flex items-center">
                  <ol className="w-full space-y-3" aria-label="System layers">
                    {story.diagram.map((step, i) => (
                      <li
                        key={step}
                        className="border-2 border-foreground bg-background px-4 py-3 text-sm font-bold uppercase tracking-widest"
                        style={{ marginLeft: `${i * 8}px` }}
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 5. Signature perspective */}
      <Section className="border-t-4 border-foreground bg-muted/30">
        <SectionLabel>Point of view</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
          Transformation needs more than enthusiasm.
        </h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl leading-relaxed">
          These are the ideas shaping my work and the questions I believe enterprise leaders should
          be asking now.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {IDEAS.map((idea, i) => (
            <article key={idea.title} className="bg-background border-4 border-foreground p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl md:text-2xl font-black tracking-tight">{idea.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{idea.copy}</p>
              <Link
                to="/v2/ideas"
                className="mt-7 inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
              >
                {idea.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 6. Framework feature */}
      <Section className="border-t-4 border-foreground">
        <SectionLabel>Adoption depth</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Access is not adoption.</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 max-w-2xl">
              Most organizations measure AI adoption by licenses, logins or prompt volume. Those
              measures tell leaders whether a tool is being touched—not whether the organization is
              becoming more capable.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80 max-w-2xl">
              I use four levels to evaluate adoption depth:
            </p>
            <dl className="mt-8 space-y-5 max-w-2xl">
              {DEPTH.map((d) => (
                <div key={d.level} className="border-l-4 border-accent pl-5">
                  <dt className="text-lg font-black tracking-tight">{d.level}</dt>
                  <dd className="mt-1 text-base text-foreground/80 leading-relaxed">{d.copy}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/v2/ideas"
              className="mt-10 inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
            >
              Explore the framework
            </Link>
          </div>

          <div
            className="relative aspect-square max-w-md w-full mx-auto"
            role="img"
            aria-label="Concentric rings: Access, Activity, Embedding, Reinvention, from outermost to innermost"
          >
            {["Access", "Activity", "Embedding", "Reinvention"].map((ring, i) => (
              <div
                key={ring}
                aria-hidden="true"
                className="absolute rounded-full border-4 border-foreground flex items-start justify-center"
                style={{
                  inset: `${i * 12}%`,
                  background: i === 3 ? "hsl(var(--accent))" : "hsl(var(--background))",
                }}
              >
                <span
                  className={`mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest ${
                    i === 3 ? "text-accent-foreground mt-0 self-center" : "text-foreground"
                  }`}
                >
                  {ring}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Speaking */}
      <Section className="border-t-4 border-foreground bg-muted/30">
        <SectionLabel>On stage + in conversation</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-4xl">
          Ideas are more useful when they survive contact with an audience.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80 max-w-3xl">
          I speak with executives, practitioners and students about the operating discipline behind
          enterprise AI, the changing architecture of marketing and the human work of organizational
          transformation.
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {["Cannes Lions", "Webit", "AI Leaders Forum", "Adobe Experience League", "Humans of AI", "6sense Breakthrough"].map(
            (logo) => (
              <li key={logo} className="text-lg md:text-xl font-black tracking-tight text-foreground/70">
                {logo}
              </li>
            ),
          )}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MEDIA.map((m) => (
            <article key={m.title} className="bg-background border-4 border-foreground">
              <div
                className="h-32 bg-foreground flex items-end p-4"
                aria-hidden="true"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {m.kind}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight leading-snug">{m.title}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-foreground/50">
                  {m.event}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{m.takeaway}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/v2/speaking"
            className="bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Explore speaking and media
          </Link>
          <Link
            to="/v2/contact"
            className="border-2 border-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Discuss an event
          </Link>
        </div>
      </Section>

      {/* 8. Community */}
      <Section className="border-t-4 border-foreground">
        <SectionLabel>Community + education</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
          Leadership without formal authority is still leadership.
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80 max-w-3xl">
          <p>Some of my most meaningful work happens outside my job description.</p>
          <p>
            As a UC San Diego Designer-in-Residence, design-community leader and contributor to World
            Design Capital programming, I help create the conditions for other people to learn,
            connect and produce better work.
          </p>
          <p>
            I have also helped secure more than $160,000 across multiple fundraising efforts
            supporting World Design Capital, San Diego Design Week and Design Forward Alliance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COMMUNITY.map((c) => (
            <article key={c.title} className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-black tracking-tight">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{c.copy}</p>
            </article>
          ))}
        </div>

        <Link
          to="/v2/about"
          className="mt-12 inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          More about my community work
        </Link>
      </Section>

      {/* 9. Manifesto */}
      <Section className="bg-foreground text-background">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            I do my best work where technology is moving faster than the organization around it.
          </h2>
          <div className="mt-8 space-y-5 text-lg md:text-xl leading-relaxed opacity-85">
            <p>
              I bring enough technical fluency to understand what is becoming possible, enough
              commercial discipline to connect it to growth and enough empathy to help people change
              how they work.
            </p>
            <p>I am not interested in AI theater.</p>
            <p>
              I am interested in building the conditions under which people, systems and strategy
              produce better outcomes together.
            </p>
          </div>
        </div>
      </Section>

      {/* 10. Final CTA */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Working on a problem that crosses boundaries?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            I am interested in consequential leadership roles, industry conversations, speaking
            opportunities and research collaborations involving enterprise AI, go-to-market
            transformation and organizational change.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/v2/contact"
              className="bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Start a conversation
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1_FtkrMYllWpWcanGL3oQTy6B0xmbcZwI?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Download executive profile
            </a>
          </div>
        </div>
      </Section>
    </V2Layout>
  );
}