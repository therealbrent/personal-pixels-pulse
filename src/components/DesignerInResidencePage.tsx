import SEO from './SEO';

export default function DesignerInResidencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Designer in Residence - Brent Summers"
        description="UCSD industry affiliate program where Brent mentors students, co-leads design programs, and connects academic research to enterprise challenges."
        ogTitle="Designer in Residence - Brent Summers"
        ogDescription="UCSD industry affiliate program connecting academic research to enterprise AI challenges."
        canonicalUrl="/designer-in-residence"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 font-bold mb-6 border-2 border-foreground">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
            </span>
            COMING SOON
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            Designer in Residence
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
            In October 2025, I accepted UCSD's invitation to this industry affiliate program where I'll mentor students, co-lead design programs, and connect academic research back to enterprise challenges. For Qualcomm, this means earlier access to top talent, co-branded visibility in the San Diego innovation community, and new perspectives on how to operationalize AI adoption. I'll be feeding insights from this residency into our AI-powered marketing transformation.
          </p>
        </div>
      </section>
    </div>
  );
}
