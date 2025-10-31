import SEO from './SEO';

export default function DesignerInResidencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Designer in Residence - Brent Summers"
        description="UCSD industry affiliate program where Brent mentors students, co-leads design programs, and connects academic research to enterprise challenges."
        ogTitle="Designer in Residence - Brent Summers"
        ogDescription="UCSD industry affiliate program connecting academic research to enterprise AI challenges."
        canonicalUrl="/designer-in-residence"
      />

      {/* Geometric Ornamentation - Top (hidden on mobile, scaled on tablet) */}
      <div className="hidden md:block absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary border-2 md:border-4 border-foreground transform rotate-12 -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-50" aria-hidden="true" />
      <div className="hidden lg:block absolute top-20 left-0 w-24 h-24 border-4 border-foreground transform -rotate-6 -translate-x-12 opacity-30" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Coming Soon Badge */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 md:gap-3 bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-3 font-black text-xs md:text-sm tracking-wider border-2 md:border-4 border-foreground shadow-neo-md md:shadow-neo-lg">
            <span className="flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-accent-foreground"></span>
            </span>
            COMING SOON
          </div>

          {/* Main Content Block */}
          <div className="bg-primary/10 border-2 md:border-4 border-foreground p-6 md:p-10 lg:p-12 shadow-neo-md md:shadow-neo-lg relative">
            {/* Decorative Corner Element (smaller on mobile) */}
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-16 md:h-16 bg-accent border-2 md:border-4 border-foreground" aria-hidden="true" />
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-10 text-foreground leading-tight">
              Designer in<br />Residence
            </h1>
            
            {/* Divider Line (responsive width) */}
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-foreground mb-6 md:mb-8" aria-hidden="true" />
            
            <div className="max-w-3xl space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                In <span className="font-bold text-primary">October 2025</span>, I accepted UCSD's invitation to this industry affiliate program where I'll mentor students, co-lead design programs, and connect academic research back to enterprise challenges.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                For Qualcomm Technologies, this means earlier access to top talent, co-branded visibility in the San Diego innovation community, and new perspectives on how to operationalize AI adoption. I'll be feeding insights from this residency into our AI-powered marketing transformation.
              </p>
            </div>
          </div>

          {/* Bottom Accent Block (responsive) */}
          <div className="mt-6 md:mt-8 inline-block bg-foreground text-background px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold border-2 md:border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform">
            UCSD × Industry Partner Program
          </div>
        </div>
      </section>

      {/* Geometric Ornamentation - Bottom (hidden on mobile, scaled on tablet) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-primary/20 border-2 md:border-4 border-foreground transform -rotate-12 translate-y-16 md:translate-y-20 -translate-x-16 md:-translate-x-20 opacity-40" aria-hidden="true" />
      <div className="hidden lg:block absolute bottom-10 right-10 w-20 h-20 border-4 border-foreground transform rotate-45 opacity-30" aria-hidden="true" />
    </div>
  );
}
