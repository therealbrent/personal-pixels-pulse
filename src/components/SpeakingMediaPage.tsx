import { useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function SpeakingMediaPage() {
  useEffect(() => {
    document.title = 'Speaking & Media - Brent Summers';
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-first enterprise keynotes, panels, and insights. Brent Summers delivers high-impact talks on AI transformation, ABM strategy, and UX for Fortune 500 audiences.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-16">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            From Stage to Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bringing AI-First Strategy to the Enterprise Conversation
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            I deliver high-impact keynotes, engaging panels, and unique insights for global audiences.
          </p>
        </header>

        {/* Unique Perspective Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Unique Perspective</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">AI-First Enterprise Transformation</h3>
              <p className="text-muted-foreground">Advice for Fortune 500s scaling AI capabilities.</p>
            </div>
            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">An Agentic Workplace</h3>
              <p className="text-muted-foreground">What changes when AI becomes the default interface for work.</p>
            </div>
            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">B2B is ABM</h3>
              <p className="text-muted-foreground">Why all B2B marketers should apply ABM strategy.</p>
            </div>
            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">The UX Flywheel</h3>
              <p className="text-muted-foreground">How UX research, strategy, and design applies to marketing.</p>
            </div>
          </div>
        </section>

        {/* Featured Talks Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Talks</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border border-border bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Five Tips to Avoid Generative AI Buyer's Remorse
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This talk shares Qualcomm Technologies' AI adoption journey, offering practical strategies for integrating AI into your workflows without sacrificing control or quality, helping you avoid pitfalls and deliver value from day one.
              </p>
              <a 
                href="https://youtu.be/d3A-gHkwiBE?si=8FY_zZRTdUp78T42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Watch on YouTube <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* As Seen In Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">As Seen In</h2>
          
          {/* Events */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Speaking Engagements</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <img src="/lovable-uploads/28bc7865-3df1-4fae-ad2c-6ae83fdda755.png" alt="ConveyUX" className="h-12 object-contain" />
              <img src="/lovable-uploads/7d46eb0b-bead-4d9d-a4a0-f8dc09a272ee.png" alt="Webit" className="h-12 object-contain" />
              <span className="text-lg font-medium text-muted-foreground">AI Leaders Forum</span>
              <span className="text-lg font-medium text-muted-foreground">AI x Marketing Summit</span>
            </div>
          </div>

          {/* Media Coverage */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Media Coverage</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* CIO News */}
              <div className="border border-border bg-card p-6 rounded-lg">
                <div className="mb-4">
                  <span className="text-lg font-semibold">CIO News</span>
                </div>
                <h4 className="font-semibold mb-3 text-primary">
                  Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human
                </h4>
                <a 
                  href="https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Read Article <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* SmartSuite */}
              <div className="border border-border bg-card p-6 rounded-lg">
                <div className="mb-4">
                  <img src="/lovable-uploads/9badee60-0160-48b3-9d26-cd621229a5e0.png" alt="SmartSuite" className="h-8 object-contain" />
                </div>
                <h4 className="font-semibold mb-3 text-primary">
                  Why the next wave of AI opportunities isn't in the cloud, it's on the edge
                </h4>
                <a 
                  href="https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Read Article <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* CMSWire */}
              <div className="border border-border bg-card p-6 rounded-lg">
                <div className="mb-4">
                  <img src="/lovable-uploads/56f07c85-b80f-4b73-9223-223ad08c2f32.png" alt="CMSWire" className="h-8 object-contain" />
                </div>
                <h4 className="font-semibold mb-3 text-primary">
                  Customer-Centric Companies Sweat the Details
                </h4>
                <a 
                  href="https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Read Article <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* UX Magazine */}
              <div className="border border-border bg-card p-6 rounded-lg">
                <div className="mb-4">
                  <img src="/lovable-uploads/6ccd615a-c5e1-4dc0-8106-b334a50c14ae.png" alt="UX Magazine" className="h-8 object-contain" />
                </div>
                <h4 className="font-semibold mb-3 text-primary">
                  Revisiting Proto-Personas for Executive Alignment
                </h4>
                <a 
                  href="https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Read Article <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Biography & Headshot Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Biography & Headshot</h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Brent Summers is an AI-first marketing leader who turns emerging tech into scaled business advantage. As the Global Lead for AI Platforms & GTM Innovation at Qualcomm Technologies, he leads AI adoption across worldwide marketing teams, scaling platforms like WRITER to deliver measurable impact—8.6x ROI, 85% weekly active use, and thousands of hours saved every month.
                </p>
                <p>
                  With 20+ years of experience spanning marketing, technology, and user experience, Brent blends strategic clarity with cultural change leadership to ensure innovation sticks. He's spoken at Webit, AI Leaders Forum, and ConveyUX, and his perspectives appear in outlets like CIO News, CMS Wire, and SmartSuite.
                </p>
                <p>
                  On stage, in the boardroom, and in the press, Brent helps leaders cut through the hype to focus on building the capabilities, governance, and culture required for a durable competitive advantage.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6">
                <img 
                  src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
                  alt="Professional headshot of Brent Summers" 
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground text-center">
                  High-resolution headshot available for download
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}