import SEO from "../SEO";
import V2Layout, { Section, SectionLabel } from "./V2Layout";

const CAREER = [
  {
    heading: "Systems",
    copy: "Early work in IT and digital platforms taught me to understand architecture, constraints and the difference between a temporary fix and a scalable system.",
  },
  {
    heading: "Experiences",
    copy: "Work in UX, digital product design and agencies taught me how people experience complexity—and how much organizational thinking is often hidden behind a seemingly simple interaction.",
  },
  {
    heading: "Growth",
    copy: "Enterprise marketing and account-based strategy taught me to connect customer needs, product value, sales priorities, channels and measurable commercial outcomes.",
  },
  {
    heading: "Transformation",
    copy: "Leading AI platforms and GTM innovation brought those disciplines together: technology, workflow design, adoption, governance, commercialization and change.",
  },
];

const PHILOSOPHY = [
  {
    heading: "Make complexity usable.",
    copy: "A strategy is only useful when people can make decisions and act differently because of it.",
  },
  {
    heading: "Build capability, not dependence.",
    copy: "The best systems help more people exercise judgment and create value.",
  },
  {
    heading: "Measure behavior, not theater.",
    copy: "Activity is not adoption. Announcements are not transformation.",
  },
  {
    heading: "Cross boundaries without erasing expertise.",
    copy: "Integration does not mean pretending every discipline is the same.",
  },
  {
    heading: "Protect the human stakes.",
    copy: "Efficiency matters. So do trust, agency, meaning and accountability.",
  },
];

const COMMUNITY = [
  "UC San Diego Designer-in-Residence",
  "Design@Large",
  "World Design Capital and Design Forward Alliance",
  "San Diego Experience Design",
  "Alliance of Badass Marketers",
  "Mentorship and practitioner development",
];

export default function V2AboutPage() {
  return (
    <V2Layout>
      <SEO
        title="About Brent Summers — Crossing Boundaries"
        description="A career across IT, UX, enterprise marketing and AI transformation—and the leadership philosophy that connects them."
        canonicalUrl="/v2/about"
      />

      <Section className="border-b-4 border-foreground">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl">
          I have spent my career crossing boundaries.
        </h1>
        <div className="mt-8 space-y-5 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
          <p>
            I started close to technology and systems. Then I learned to design around human
            behavior, connect experiences to markets and build go-to-market programs across complex
            enterprises.
          </p>
          <p>
            Today, I lead at the intersection of enterprise AI, commercialization and organizational
            change.
          </p>
          <p>
            The path may appear nonlinear from the outside. It has given me a consistent advantage: I
            can move between technical teams, marketers, designers, sellers, executives and customers
            without reducing one group's reality to another group's vocabulary.
          </p>
        </div>
      </Section>

      <Section>
        <SectionLabel>Career narrative</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2">
          {CAREER.map((c) => (
            <article key={c.heading} className="border-4 border-foreground bg-card p-8">
              <h2 className="text-2xl font-black tracking-tight">{c.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{c.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t-4 border-foreground bg-muted/30">
        <SectionLabel>Leadership philosophy</SectionLabel>
        <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2 max-w-5xl">
          {PHILOSOPHY.map((p) => (
            <div key={p.heading} className="border-l-4 border-accent pl-6">
              <dt className="text-lg font-black tracking-tight">{p.heading}</dt>
              <dd className="mt-2 text-base leading-relaxed text-foreground/80">{p.copy}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t-4 border-foreground">
        <SectionLabel>Community</SectionLabel>
        <ul className="flex flex-wrap gap-3 max-w-4xl">
          {COMMUNITY.map((c) => (
            <li
              key={c}
              className="border-2 border-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest"
            >
              {c}
            </li>
          ))}
        </ul>

        <p className="mt-14 text-xl md:text-2xl font-bold leading-relaxed max-w-3xl">
          I am most useful when the mandate is important, the path is not obvious and success depends
          on people who do not normally operate as one team.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1_FtkrMYllWpWcanGL3oQTy6B0xmbcZwI?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          Download executive profile
        </a>
      </Section>
    </V2Layout>
  );
}