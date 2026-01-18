import { Building2, Users, Mic2, Handshake, ExternalLink, Sparkles, Target } from 'lucide-react';
import SEO from './SEO';
import { Card, CardContent } from './ui/card';

export default function DesignerInResidencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="UCSD Designer-in-Residence | Brent Summers, Marketing Leader at Qualcomm"
        description="In this volunteer role, I mentor students, participate in design programs and connect academic research to enterprise challenges."
        ogTitle="Brent Summers, UCSD Designer-in-Residence"
        ogDescription="Engaging with the community as part of my professional development at Qualcomm Technologies."
        ogImage="/og-images/designer-in-residence.png"
        canonicalUrl="/designer-in-residence"
      />

      {/* Geometric Ornamentation - Top */}
      <div className="hidden md:block absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary border-2 md:border-4 border-foreground transform rotate-12 -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-50" aria-hidden="true" />
      <div className="hidden lg:block absolute top-20 left-0 w-24 h-24 border-4 border-foreground transform -rotate-6 -translate-x-12 opacity-30" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary/10 border-2 md:border-4 border-foreground p-6 md:p-10 lg:p-12 shadow-neo-md md:shadow-neo-lg relative">
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-16 md:h-16 bg-accent border-2 md:border-4 border-foreground" aria-hidden="true" />
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 text-foreground leading-tight">
              UC San Diego<br />Designer-in-Residence
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground/80 mb-6 md:mb-8 max-w-2xl">
              Developing leadership skills while sharing expertise with the next generation of design talent.
            </p>
            
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-foreground mb-6 md:mb-8" aria-hidden="true" />
            
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                In <span className="font-bold text-primary">October 2025</span>, I accepted an invitation to serve as{' '}
                <a
                  href="https://designlab.ucsd.edu/people/designers-in-residence.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 underline-offset-2 hover:text-accent transition-colors inline leading-none"
                >
                  Designer-in-Residence
                  <ExternalLink
                    className="h-3 w-3 inline align-[-0.125em]"
                    aria-hidden="true"
                  />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
                . I said yes because I believe design is a force that shapes how organizations imagine, decide, and act.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                My day job is Head of AI Platforms & GTM Innovation at Qualcomm Technologies. This residency is how I stress-test that work against fresh perspectives, and give back to the community that shaped me. I am mentoring students, co-leading design programs, and connecting academic research to enterprise challenges.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 inline-block bg-foreground text-background px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold border-2 md:border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform">
            Industry Affiliate Program
          </div>
        </div>
      </section>

      {/* About The Lab Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            {/* Icon Block */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-primary border-4 border-foreground flex items-center justify-center shadow-neo-sm">
              <Building2 className="w-8 h-8 md:w-12 md:h-12 text-foreground" aria-hidden="true" />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4 md:mb-6">
                About The Design Lab
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                The{' '}
                <span className="font-bold text-primary">UC San Diego Design Lab</span>{' '}
                is a leading design institution in the San Diego–Tijuana region. Its mission—
                <span className="font-bold text-accent">fostering design-driven transformation</span>
                —maps closely to how I approach enterprise AI:{' '}
                <span className="font-bold text-oxblood">educate leaders, imagine better futures, and equip people</span>{' '}
                with the{' '}
                <span className="font-bold text-cobalt">tools and support to solve real, high-stakes problems</span>.
              </p>
              <a 
                href="https://designlab.ucsd.edu/about/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-bold border-4 border-foreground hover:bg-primary hover:text-foreground transition-colors"
              >
                Learn about the lab
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6 md:mb-10">
            Why I Do This
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Why Card 1 - Paying It Forward */}
            <Card variant="brutalist" className="relative overflow-visible">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent border-4 border-foreground flex items-center justify-center">
                <Target className="w-6 h-6 text-background" aria-hidden="true" />
              </div>
              <CardContent className="p-6 md:p-8 pt-10 md:pt-12">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  I volunteer because it's part of the{' '}
                  <span className="font-bold text-primary">talent flywheel</span>: you share what you know, you learn what you don't, and everyone moves faster. I've benefited from people who did that for me. This is me{' '}
                  <span className="font-bold text-accent">paying it forward</span>.
                </p>
              </CardContent>
            </Card>

            {/* Why Card 2 - Shipping Innovation */}
            <Card variant="brutalist" className="relative overflow-visible bg-primary/10">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-foreground border-4 border-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  And honestly: my job is to ship innovation. This residency gives me fresh reps in unfamiliar contexts—
                  <span className="font-bold text-oxblood">new problems, new constraints, new perspectives</span>. Students don't let you hide behind slideware. That's how I{' '}
                  <span className="font-bold text-cobalt">sharpen my leadership</span>{' '}
                  while giving back.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How I'm Contributing Section */}
      <section className="py-12 md:py-20 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-12">
            How I'm Contributing
          </h2>
          
          {/* Student Mentorship - Full Width with Calendar */}
          <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 relative mb-6 md:mb-8">
            <div className="w-14 h-14 bg-primary border-4 border-foreground flex items-center justify-center mb-6 -mt-12 md:-mt-14 shadow-neo-sm">
              <Users className="w-7 h-7 text-foreground" aria-hidden="true" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-3">
                  Student Mentorship
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-4">
                  Office hours, portfolio reviews, and career guidance for the next generation of designers.
                </p>
                <div className="border-t-2 border-foreground/20 pt-4">
                  <p className="text-sm font-bold text-foreground">Wednesdays 3:00pm – 5:00pm</p>
                  <p className="text-sm text-foreground/70">Design & Innovation Building</p>
                  <p className="text-sm text-foreground/70">Room 361</p>
                </div>
              </div>
              <div className="border-4 border-foreground">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1D0m6GFgJC4W2HOD2ZTc64oIJNE0OaZdAZt2wSp8cBrKOv5mOsCNiYjBofUeEejo0L591IZ5dj?gv=true"
                  title="Book a mentorship appointment"
                  className="w-full h-[400px] md:h-[500px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">

            {/* Contribution 2 - Guest Lectures */}
            <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 relative">
              <div className="w-14 h-14 bg-accent border-4 border-foreground flex items-center justify-center mb-6 -mt-12 md:-mt-14 shadow-neo-sm">
                <Mic2 className="w-7 h-7 text-background" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3">
                Guest Lectures
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed mb-2">
                Supporting the programming for Design@Large for Spring 2026.
              </p>
              <p className="text-sm text-foreground/60 mb-4">Topic TBA</p>
              <a 
                href="https://designlab.ucsd.edu/education/design-at-large/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary transition-colors"
              >
                Learn more
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>

            {/* Contribution 3 - Bridging Industry & Academia */}
            <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 relative">
              <div className="w-14 h-14 bg-cobalt border-4 border-foreground flex items-center justify-center mb-6 -mt-12 md:-mt-14 shadow-neo-sm">
                <Handshake className="w-7 h-7 text-background" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3">
                Bridging Industry & Academia
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Sharing perspective from 20 years in the workforce with faculty, staff, and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Large quotation mark */}
            <div className="absolute -top-6 -left-2 md:-top-8 md:-left-6 text-8xl md:text-[12rem] font-black text-primary/20 leading-none select-none" aria-hidden="true">
              "
            </div>
            
            <blockquote className="relative z-10 border-l-8 border-primary pl-6 md:pl-10 py-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed mb-6">
                Enterprises optimize for what's measurable. Academia studies what's meaningful. This residency is one way to bridge the two.
              </p>
              <footer className="text-base md:text-lg text-foreground/80">
                <cite className="not-italic">
                  <span className="font-bold text-foreground">Brent Summers</span>
                  <br />
                  <span className="text-sm md:text-base">Head of AI Platforms & GTM Innovation, Qualcomm Technologies</span>
                  <br />
                  <span className="text-sm md:text-base text-primary font-semibold">Designer-in-Residence, UC San Diego</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Geometric Ornamentation - Bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-primary/20 border-2 md:border-4 border-foreground transform -rotate-12 translate-y-16 md:translate-y-20 -translate-x-16 md:-translate-x-20 opacity-40" aria-hidden="true" />
      <div className="hidden lg:block absolute bottom-10 right-10 w-20 h-20 border-4 border-foreground transform rotate-45 opacity-30" aria-hidden="true" />
    </div>
  );
}
