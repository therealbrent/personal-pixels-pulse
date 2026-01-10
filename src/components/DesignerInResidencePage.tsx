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
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-10 text-foreground leading-tight">
              UC San Diego<br />Designer-in-Residence
            </h1>
            
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-foreground mb-6 md:mb-8" aria-hidden="true" />
            
            <div className="max-w-3xl">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                In <span className="font-bold text-primary">October 2025</span>, I accepted UCSD's invitation to this industry affiliate program where I'll mentor students, co-lead design programs, and connect academic research back to enterprise challenges.
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
                The Design Lab at UC San Diego is an anchor design institution within the San Diego-Tijuana region that pairs design education and research with community needs to create positive, impactful real-world solutions and design-driven innovations.
              </p>
              <a 
                href="https://designlab.ucsd.edu/about/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-bold border-4 border-foreground hover:bg-primary hover:text-foreground transition-colors"
              >
                Learn more about the lab
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Why Card 1 - The Mission */}
            <Card variant="brutalist" className="relative overflow-visible">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent border-4 border-foreground flex items-center justify-center">
                <Target className="w-6 h-6 text-background" aria-hidden="true" />
              </div>
              <CardContent className="p-6 md:p-8 pt-10 md:pt-12">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                  Why I Do This
                </h2>
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                  <span className="font-bold text-primary">Because my job is to ship innovation.</span> Volunteering is how I make sure it's the <em>right</em> kind.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  I give my time to help teams turn good intentions into useful, human-centered outcomes.
                </p>
              </CardContent>
            </Card>

            {/* Why Card 2 - The Selfish Reason */}
            <Card variant="brutalist" className="relative overflow-visible bg-primary/10">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-foreground border-4 border-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">
                  Selfishly...
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  It keeps my edge sharp. New rooms, new problems, new perspectives. That's where better leaders (and better products) get made.
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
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Contribution 1 */}
            <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 relative">
              <div className="w-14 h-14 bg-primary border-4 border-foreground flex items-center justify-center mb-6 -mt-12 md:-mt-14 shadow-neo-sm">
                <Users className="w-7 h-7 text-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3">
                Student Mentorship
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Office hours, portfolio reviews, and career guidance for the next generation of designers.
              </p>
            </div>

            {/* Contribution 2 */}
            <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 relative">
              <div className="w-14 h-14 bg-accent border-4 border-foreground flex items-center justify-center mb-6 -mt-12 md:-mt-14 shadow-neo-sm">
                <Mic2 className="w-7 h-7 text-background" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3">
                Guest Lectures
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Supporting the programming for Design@Large for Spring 2026.
              </p>
            </div>

            {/* Contribution 3 */}
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
