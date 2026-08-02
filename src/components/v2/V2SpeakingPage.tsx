import { Link } from "react-router-dom";
import SEO from "../SEO";
import V2Layout, { Section, SectionLabel } from "./V2Layout";

const TALKS = [
  {
    title: "AI Is an Operating Model, Not a Tool Rollout",
    copy: "Why enterprise AI adoption stalls after access—and what leaders must redesign to produce lasting capability.",
  },
  {
    title: "Making AI Feel Less Like Magic and More Like Muscle",
    copy: "A practical examination of how organizations build confidence, judgment and repeatable performance with AI.",
  },
  {
    title: "Marketing Should Steal Engineering's Operating Discipline",
    copy: "What marketing can learn from reusable systems, version control, evaluation and continuous improvement—without becoming engineering.",
  },
  {
    title: "Human Agency by Design",
    copy: "How organizations can preserve accountability, judgment and meaningful human control as AI becomes more autonomous.",
  },
  {
    title: "Agent Sprawl",
    copy: "Why the rapid creation of enterprise agents is producing a new governance and orchestration challenge.",
  },
];

const FORMATS = [
  "Keynotes",
  "Executive roundtables",
  "Moderated conversations",
  "Panels",
  "Podcasts and interviews",
  "University and classroom sessions",
  "Leadership workshops",
];

const APPEARANCES = [
  "Cannes Lions",
  "Webit",
  "AI Leaders Forum",
  "Adobe Experience League",
  "Humans of AI",
  "6sense Breakthrough",
  "UC San Diego",
  "San Diego Design Week",
];

const MATERIALS = [
  "50-word biography",
  "100-word biography",
  "Full biography",
  "High-resolution headshots",
  "Speaker introduction",
  "Selected talk clips",
  "Topic sheet",
];

const PRESS_KIT =
  "https://drive.google.com/drive/folders/1_FtkrMYllWpWcanGL3oQTy6B0xmbcZwI?usp=sharing";

export default function V2SpeakingPage() {
  return (
    <V2Layout>
      <SEO
        title="Speaking and Media | Brent Summers"
        description="Talks on enterprise AI transformation: platforms, operating models, governance, human judgment and the behavioral change behind lasting capability."
        canonicalUrl="/v2/speaking"
      />

      <Section className="border-b-4 border-foreground">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Speaking and Media</h1>
        <div className="mt-8 space-y-5 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
          <p>
            I speak about the work behind enterprise AI transformation: the platforms, operating
            models, governance, human judgment and behavioral change required to move from
            experimentation to capability.
          </p>
          <p>
            My talks are grounded in current enterprise practice rather than distant predictions or
            generic AI enthusiasm.
          </p>
        </div>
      </Section>

      <Section>
        <SectionLabel>Signature talks</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2">
          {TALKS.map((t) => (
            <article key={t.title} className="border-4 border-foreground bg-card p-8">
              <h2 className="text-xl md:text-2xl font-black tracking-tight leading-snug">{t.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{t.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t-4 border-foreground bg-muted/30">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionLabel>Formats</SectionLabel>
            <ul className="space-y-3">
              {FORMATS.map((f) => (
                <li key={f} className="text-lg font-medium text-foreground/85 border-t-2 border-foreground/20 pt-3">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Selected appearances</SectionLabel>
            <ul className="flex flex-wrap gap-3">
              {APPEARANCES.map((a) => (
                <li
                  key={a}
                  className="border-2 border-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t-4 border-foreground">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Bring a practitioner's perspective to the conversation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              For speaking, moderation, executive discussions or media commentary, share the
              audience, format, date and subject you are considering.
            </p>
            <Link
              to="/v2/contact"
              className="mt-10 inline-flex bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Discuss an appearance
            </Link>
          </div>

          <div>
            <SectionLabel>Downloadable materials</SectionLabel>
            <ul className="space-y-3">
              {MATERIALS.map((m) => (
                <li key={m} className="text-base font-medium text-foreground/85 border-t-2 border-foreground/20 pt-3">
                  {m}
                </li>
              ))}
            </ul>
            <a
              href={PRESS_KIT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border-2 border-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              View press kit
            </a>
          </div>
        </div>
      </Section>
    </V2Layout>
  );
}