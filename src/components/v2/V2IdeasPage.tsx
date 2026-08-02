import SEO from "../SEO";
import V2Layout, { Section, SectionLabel } from "./V2Layout";

const SIGNATURE = [
  {
    title: "AI Is an Operating Model, Not a Tool Rollout",
    thesis: "Access creates activity. Redesigned workflows, incentives and governance create change.",
  },
  {
    title: "Marketing Should Steal Engineering's Operating Discipline",
    thesis: "Reusable systems, version control, evaluation and continuous improvement—without becoming engineering.",
  },
  {
    title: "Human Agency by Design",
    thesis: "Oversight belongs in the architecture, not in a ceremonial approval step.",
  },
  {
    title: "Agent Sprawl",
    thesis: "Agents are being created faster than ownership, interoperability and lifecycle management are defined.",
  },
  {
    title: "From Access to Reinvention",
    thesis: "Adoption depth, not license counts, tells you whether an organization is becoming more capable.",
  },
  {
    title: "Prompt Libraries Are Becoming Production Infrastructure",
    thesis: "What began as personal shortcuts is turning into shared, versioned enterprise assets.",
  },
];

const FIELD_NOTES = [
  "Pilots do not fail for technical reasons. They fail because nobody owns the workflow they were supposed to change.",
  "If your AI metric can be satisfied by a login, it is not an adoption metric.",
  "Every agent you ship is a system you now have to maintain, evaluate and eventually retire.",
];

const FRAMEWORKS = [
  { name: "Adoption Depth", copy: "Access → Activity → Embedding → Reinvention." },
  { name: "Human Agency Scale", copy: "Where human judgment sits relative to automated decisions." },
  { name: "Three-Lens Test", copy: "Value, feasibility and consequence, evaluated together." },
  { name: "Use Case Anatomy", copy: "The parts a use case needs before it is ready to build." },
  { name: "PromptOps", copy: "Versioning, review and lifecycle management for prompts and workflows." },
  { name: "Agent Governance", copy: "Ownership, standards, interoperability and retirement." },
];

export default function V2IdeasPage() {
  return (
    <V2Layout>
      <SEO
        title="Ideas for Organizations in Motion | Brent Summers"
        description="Writing on enterprise AI, go-to-market architecture, adoption and the operating discipline required to make change stick."
        canonicalUrl="/v2/ideas"
      />

      <Section className="border-b-4 border-foreground">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl">
          Ideas for organizations in motion
        </h1>
        <div className="mt-8 space-y-5 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
          <p>
            I write about what happens after the announcement—when emerging technology meets legacy
            systems, incentives, workflows, judgment and real people.
          </p>
          <p>
            The work centers on enterprise AI, go-to-market architecture, adoption and the operating
            discipline required to make change stick.
          </p>
        </div>
      </Section>

      <Section>
        <SectionLabel>Signature ideas</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2">
          {SIGNATURE.map((s, i) => (
            <article key={s.title} className="border-4 border-foreground bg-card p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight leading-snug">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{s.thesis}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t-4 border-foreground bg-muted/30">
        <SectionLabel>Field notes</SectionLabel>
        <ul className="space-y-6 max-w-3xl">
          {FIELD_NOTES.map((note) => (
            <li key={note} className="border-l-4 border-accent pl-6 text-lg leading-relaxed text-foreground/85">
              {note}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t-4 border-foreground">
        <SectionLabel>Frameworks</SectionLabel>
        <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {FRAMEWORKS.map((f) => (
            <div key={f.name} className="border-t-2 border-foreground/20 pt-6">
              <dt className="text-lg font-black tracking-tight">{f.name}</dt>
              <dd className="mt-2 text-base leading-relaxed text-foreground/80">{f.copy}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </V2Layout>
  );
}