import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Download, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import Header from './Header';
import Footer from './Footer';

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
                HAPPIER HUMAN, BETTER BUSINESS: THE QUALCOMM TECHNOLOGIES AI BLUEPRINT
              </h3>
              <p className="text-foreground mb-8 leading-relaxed text-lg font-semibold">
                What began as a pandemic project has become Brent Summers' new career trajectory. His interest in Generative AI sparked a revolution that now saves Qualcomm Technologies 2,400 hours every month across multiple departments. In this unfiltered session, Brent reveals the guiding principles that led to selecting WRITER. You'll also learn how he defines the high-value use cases and maps them to WRITER's features while keeping humans at the center.
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
                    <DialogTitle className="text-2xl font-black">HAPPIER HUMAN, BETTER BUSINESS: THE QUALCOMM TECHNOLOGIES AI BLUEPRINT</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full aspect-video bg-background">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ApLKfzjaN3Y"
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* CIO News */}
            <a 
              href="https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">CIO NEWS</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-[#FF1392] text-xl leading-tight transition-colors">
                Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-[#FF1392] pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                We expect a human to verify the facts, citations, decisions—and the underlying strategy. Is it ethical? Does it adhere to our Responsible AI Principles and policies? That's the bar.
              </blockquote>
              <span className="text-primary group-hover:text-[#FF1392] font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* SmartSuite */}
            <a 
              href="https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">SMARTSUITE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-[#FF1392] text-xl leading-tight transition-colors">
                Why the next wave of AI opportunities isn't in the cloud, it's on the edge
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-[#FF1392] pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                As someone committed to sustainability, I believe in the transformative potential of AI—but must also acknowledge the challenges it poses to a sustainable future.
              </blockquote>
              <span className="text-primary group-hover:text-[#FF1392] font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* CMSWire */}
            <a 
              href="https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">CMS WIRE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-[#FF1392] text-xl leading-tight transition-colors">
                Customer-Centric Companies Sweat the Details
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-[#FF1392] pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                Customer's perceptions will change along the way as they become more familiar with your company's products and services. Every single touchpoint is a chance to delight or disappoint.
              </blockquote>
              <span className="text-primary group-hover:text-[#FF1392] font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* UX Magazine */}
            <a 
              href="https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">UX MAGAZINE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-[#FF1392] text-xl leading-tight transition-colors">
                Revisiting Proto-Personas for Executive Alignment
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-[#FF1392] pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                We use proto-personas as a way of gaining alignment among our project sponsors and striking the right balance of focus between organizational and user needs.
              </blockquote>
              <span className="text-primary group-hover:text-[#FF1392] font-bold underline transition-colors">
                Read Article
              </span>
            </a>
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

      <Footer />
    </div>
  );
}