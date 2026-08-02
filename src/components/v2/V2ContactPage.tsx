import { useState } from "react";
import SEO from "../SEO";
import V2Layout, { Section } from "./V2Layout";

const TOPICS = [
  "Executive leadership opportunities",
  "Enterprise AI and GTM transformation",
  "Speaking and moderation",
  "Media commentary",
  "Academic and industry research",
  "Selective advisory relationships",
];

const INQUIRY_TYPES = [
  "Executive leadership opportunity",
  "Enterprise AI or GTM transformation",
  "Speaking or moderation",
  "Media commentary",
  "Research collaboration",
  "Advisory",
];

const fieldClass =
  "w-full border-2 border-foreground bg-background px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))]";

export default function V2ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <V2Layout>
      <SEO
        title="Contact Brent Summers — Start With the Problem"
        description="Reach out about enterprise AI and GTM transformation, executive leadership, speaking, media commentary or research collaboration."
        canonicalUrl="/v2/contact"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">Start with the problem.</h1>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl">
              The most useful conversations usually begin with a real mandate rather than a generic
              request to connect.
            </p>
            <p className="mt-6 text-base font-bold uppercase tracking-widest text-foreground/50">
              I am open to discussions involving
            </p>
            <ul className="mt-4 space-y-3 max-w-xl">
              {TOPICS.map((t) => (
                <li key={t} className="flex gap-3 text-base text-foreground/85">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-foreground bg-card p-8 md:p-10">
            {submitted ? (
              <div role="status" aria-live="polite">
                <h2 className="text-2xl font-black tracking-tight">Thanks for reaching out.</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">
                  I review inquiries personally and will respond when there is a clear fit.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="v2-name" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input id="v2-name" name="name" type="text" required className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="v2-org" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    Organization
                  </label>
                  <input id="v2-org" name="organization" type="text" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="v2-email" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input id="v2-email" name="email" type="email" required className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="v2-problem" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    What are you working on?
                  </label>
                  <textarea id="v2-problem" name="problem" rows={5} required className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="v2-type" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    Type of inquiry
                  </label>
                  <select id="v2-type" name="inquiryType" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="v2-timing" className="block text-sm font-bold uppercase tracking-widest mb-2">
                    Relevant timing
                  </label>
                  <input id="v2-timing" name="timing" type="text" className={fieldClass} />
                </div>

                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                >
                  Send inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </V2Layout>
  );
}