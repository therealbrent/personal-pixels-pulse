import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Download, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import Header from './Header';
import LastUpdated from './LastUpdated';

export default function SpeakingMediaPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    document.title = 'Speaking & Media - Brent Summers';
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-first enterprise keynotes, panels, and insights. Brent Summers delivers high-impact talks on AI transformation, ABM strategy, and UX for Fortune 500 audiences.');
    }
  }, []);

  const handleDownloadHeadshot = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png';
    link.download = 'brent-summers-headshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="main-content" className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section - Neo-Brutalist */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground transform hover:skew-x-1 transition-transform duration-300">
            FROM STAGE<br />
            TO STORY
          </h1>
          <div className="max-w-4xl mx-auto bg-accent border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
            <p className="text-2xl md:text-4xl font-bold text-accent-foreground leading-tight mb-4">
              BRINGING AI-FIRST STRATEGY TO THE ENTERPRISE CONVERSATION
            </p>
            <p className="text-lg md:text-xl text-accent-foreground/80 font-semibold">
              I deliver high-impact keynotes, engaging panels, and unique insights for global audiences.
            </p>
          </div>
        </header>

        {/* Unique Perspective Section - Neo-Brutalist */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
            UNIQUE PERSPECTIVE
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary border-6 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
              <h3 className="text-2xl font-black mb-4 text-primary-foreground">AI-FIRST ENTERPRISE TRANSFORMATION</h3>
              <p className="text-primary-foreground font-bold text-lg">Advice for Fortune 500s scaling AI capabilities.</p>
            </div>
            <div className="bg-accent border-6 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
              <h3 className="text-2xl font-black mb-4 text-accent-foreground">AN AGENTIC WORKPLACE</h3>
              <p className="text-accent-foreground font-bold text-lg">What changes when AI becomes the default interface for work.</p>
            </div>
            <div className="bg-secondary border-6 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
              <h3 className="text-2xl font-black mb-4 text-secondary-foreground">B2B IS ABM</h3>
              <p className="text-secondary-foreground font-bold text-lg">Why all B2B marketers should apply ABM strategy.</p>
            </div>
            <div className="bg-destructive border-6 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
              <h3 className="text-2xl font-black mb-4 text-destructive-foreground">THE UX FLYWHEEL</h3>
              <p className="text-destructive-foreground font-bold text-lg">How UX research, strategy, and design applies to marketing.</p>
            </div>
          </div>
        </section>

        {/* Featured Talks Section - Neo-Brutalist with Modal */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
            FEATURED TALKS
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-background border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-10 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-primary">
                FIVE TIPS TO AVOID GENERATIVE AI BUYER'S REMORSE
              </h3>
              <p className="text-foreground mb-8 leading-relaxed text-lg font-semibold">
                This talk shares Qualcomm Technologies' AI adoption journey, offering practical strategies for integrating AI into your workflows without sacrificing control or quality, helping you avoid pitfalls and deliver value from day one.
              </p>
              <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-accent text-accent-foreground border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-xl font-black px-8 py-4"
                  >
                    <Play className="h-6 w-6 mr-3" />
                    WATCH NOW
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
                  <DialogHeader className="p-6 bg-primary text-primary-foreground border-b-4 border-foreground">
                    <DialogTitle className="text-2xl font-black">FIVE TIPS TO AVOID GENERATIVE AI BUYER'S REMORSE</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full aspect-video bg-background">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/d3A-gHkwiBE?si=q-K2uDwd9cHUJvBB"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* As Seen In Section - Neo-Brutalist */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
            AS SEEN IN
          </h2>
          
          <div>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* CIO News */}
              <div className="border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <div className="mb-6">
                  <span className="text-2xl font-black text-foreground">CIO NEWS</span>
                </div>
                <h4 className="font-black mb-4 text-primary text-xl leading-tight">
                  Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human
                </h4>
                <a 
                  href="https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-black px-4 py-2 border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  READ ARTICLE <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* SmartSuite */}
              <div className="border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <div className="mb-6 border-4 border-foreground p-2 bg-background w-fit">
                  <img src="/lovable-uploads/9badee60-0160-48b3-9d26-cd621229a5e0.png" alt="SmartSuite" className="h-8 object-contain" />
                </div>
                <h4 className="font-black mb-4 text-primary text-xl leading-tight">
                  Why the next wave of AI opportunities isn't in the cloud, it's on the edge
                </h4>
                <a 
                  href="https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-black px-4 py-2 border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  READ ARTICLE <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* CMSWire */}
              <div className="border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <div className="mb-6 border-4 border-foreground p-2 bg-background w-fit">
                  <img src="/lovable-uploads/56f07c85-b80f-4b73-9223-223ad08c2f32.png" alt="CMSWire" className="h-8 object-contain" />
                </div>
                <h4 className="font-black mb-4 text-primary text-xl leading-tight">
                  Customer-Centric Companies Sweat the Details
                </h4>
                <a 
                  href="https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-black px-4 py-2 border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  READ ARTICLE <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* UX Magazine */}
              <div className="border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <div className="mb-6 border-4 border-foreground p-2 bg-background w-fit">
                  <img src="/lovable-uploads/6ccd615a-c5e1-4dc0-8106-b334a50c14ae.png" alt="UX Magazine" className="h-8 object-contain" />
                </div>
                <h4 className="font-black mb-4 text-primary text-xl leading-tight">
                  Revisiting Proto-Personas for Executive Alignment
                </h4>
                <a 
                  href="https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-black px-4 py-2 border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                >
                  READ ARTICLE <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Biography & Headshot Section - Neo-Brutalist */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
            BIOGRAPHY & HEADSHOT
          </h2>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="bg-background border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-10 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <div className="space-y-6 text-foreground text-lg font-semibold leading-relaxed">
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
            </div>
            <div className="lg:col-span-1">
              <div className="bg-background border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-8 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <img 
                  src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
                  alt="Professional headshot of Brent Summers" 
                  className="w-full border-4 border-foreground mb-6"
                />
                <Button 
                  onClick={handleDownloadHeadshot}
                  className="w-full bg-primary text-primary-foreground border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-lg font-black py-3"
                >
                  <Download className="h-5 w-5 mr-2" />
                  DOWNLOAD HEADSHOT
                </Button>
                <p className="text-sm text-foreground/70 text-center mt-4 font-bold">
                  High-resolution headshot available
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t-8 border-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-black mb-6">LET'S CONNECT</h3>
          <p className="text-xl mb-12 opacity-80 font-bold">Did something spark your curiosity? I'd love to hear from you.</p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/brentjsummers/" target="_blank" rel="noopener noreferrer" className="p-4 bg-background text-foreground border-4 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_hsl(var(--background))]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/brentsummers" target="_blank" rel="noopener noreferrer" className="p-4 bg-background text-foreground border-4 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_hsl(var(--background))]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/therealbrent" target="_blank" rel="noopener noreferrer" className="p-4 bg-background text-foreground border-4 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200 shadow-[4px_4px_0px_0px_hsl(var(--background))]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="mt-12 pt-8 border-t-4 border-background/20">
            <LastUpdated />
            <p className="opacity-60 font-bold text-lg">© {new Date().getFullYear()} Brent Summers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}