import { Link } from "react-router-dom";
import SEO from "../SEO";
import V2Layout, { Section, SectionLabel } from "./V2Layout";

const FEATURED = [
  {
    category: "Enterprise AI",
    title: "From AI Access to Enterprise Muscle",
    summary:
      "An approved enterprise platform combined with workflow redesign, governance, evaluation, enablement and measurable adoption.",
    proof: ["350+ users", "85% weekly active", "2,400 hours saved monthly", "8.6× measured ROI"],
  },
  {
    category: "Go-to-market",
    title: "Building ABM as an Enterprise Capability",
    summary:
      "Reusable plays, shared infrastructure and a disciplined operating model across business units, segments and partner ecosystems.",
    proof: ["~$2B influenced pipeline", "9 business units", "400+ opportunities", "50+ channel partners"],
  },
  {
    category: "Adoption + organizational change",
    title: "Turning Users Into Builders",
    summary:
      "Communities, training systems and operating conditions that let employees redesign their own workflows and co-create AI agents.",
    proof: ["11 departments", "Builder community", "Embedded governance", "Behavioral measurement"],
  },
];

const ADDITIONAL = [
  {
    title: "Building a global channel-marketing platform",
    copy: "Shared infrastructure, partner enablement and co-marketing motions built for reuse at scale.",
  },
  {
    title: "Translating technical innovation into customer and commercial narratives",
    copy: "Turning engineering capability into positioning that buyers, sellers and press can actually use.",
  },
  {
    title: "Designing vertical and strategic-account GTM motions",
    copy: "Segment-specific plays connecting account intelligence, content, media and sales alignment.",
  },
  {
    title: "Establishing PromptOps and governed AI workflow management",
    copy: "Versioning, review and lifecycle management for prompts and workflows treated as production assets.",
  },
  {
    title: "Building cross-functional practitioner communities",
    copy: "Durable forums where practitioners share patterns, raise standards and accelerate one another.",
  },
];

const TEMPLATE = [
  { heading: "The mandate", copy: "What was the organization trying to accomplish?" },
  {
    heading: "What made it difficult",
    copy: "The organizational friction, competing incentives, maturity gaps and cross-functional complexity.",
  },
  {
    heading: "My role",
    copy:
      "I led the program strategy and operating model in partnership with colleagues across marketing, IT, legal, sales, communications and business leadership.",
  },
  {
    heading: "The system",
    copy: "The architecture, process, governance model, community or capability that was built.",
  },
  { heading: "What changed", copy: "Quantitative results and observable organizational changes." },
  {
    heading: "What I learned",
    copy: "Honest lessons, including what required iteration or did not initially work.",
  },
  {
    heading: "Related evidence",
    copy: "Public talks, media coverage, frameworks, approved artifacts and relevant essays.",
  },
];

export default function V2WorkPage() {
  return (
    <V2Layout>
      <SEO
        title="Transformation Stories | Brent Summers"
        description="Selected enterprise transformations: the mandate, complexity, operating model, leadership choices and measurable outcomes behind the work."
        canonicalUrl="/v2/work"
      />

      <Section className="border-b-4 border-foreground">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Transformation Stories</h1>
        <div className="mt-8 space-y-5 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
          <p>
            My work is less about isolated campaigns, tools or deliverables than the systems that
            allow an organization to perform differently.
          </p>
          <p>
            These stories examine the mandate, complexity, operating model, leadership choices and
            measurable outcomes behind selected enterprise transformations.
          </p>
        </div>
      </Section>

      <Section>
        <SectionLabel>Featured stories</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURED.map((s) => (
            <article key={s.title} className="border-4 border-foreground bg-card p-8 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{s.category}</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight leading-snug">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{s.summary}</p>
              <ul className="mt-6 space-y-2">
                {s.proof.map((p) => (
                  <li key={p} className="text-sm font-medium text-foreground/80 flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t-4 border-foreground bg-muted/30">
        <SectionLabel>Additional selected work</SectionLabel>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {ADDITIONAL.map((a) => (
            <article key={a.title} className="border-t-2 border-foreground/20 pt-6">
              <h2 className="text-lg font-black tracking-tight">{a.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{a.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t-4 border-foreground">
        <SectionLabel>How each story is told</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight max-w-3xl">
          A consistent structure for every case study.
        </h2>
        <dl className="mt-12 grid gap-8 md:grid-cols-2">
          {TEMPLATE.map((t) => (
            <div key={t.heading} className="border-l-4 border-accent pl-6">
              <dt className="text-lg font-black tracking-tight">{t.heading}</dt>
              <dd className="mt-2 text-base leading-relaxed text-foreground/80">{t.copy}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/v2/contact"
          className="mt-12 inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          Explore another transformation story
        </Link>
      </Section>
    </V2Layout>
  );
}