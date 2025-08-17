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
        {/* BROKEN GRID MANIFESTO - Neo-Brutalist */}
        <header className="relative mb-20 overflow-hidden">
          {/* Diagonal MANIFESTO stripe */}
          <div className="absolute top-0 right-0 w-full h-32 bg-[#FF1392] transform rotate-12 origin-top-right translate-x-1/4 -translate-y-8 z-10">
            <div className="flex items-center justify-center h-full">
              <span className="text-white font-black text-2xl md:text-4xl tracking-widest transform -rotate-12">
                MANIFESTO
              </span>
            </div>
          </div>

          {/* Broken Grid Layout */}
          <div className="relative z-20 grid grid-cols-12 gap-4 max-w-7xl mx-auto">
            {/* Main Title Block - Offset */}
            <div className="col-span-12 md:col-span-8 md:col-start-2 mb-8">
              <div className="bg-foreground border-8 border-foreground shadow-[16px_16px_0px_0px_#FF1392] p-8 transform hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-[8px_8px_0px_0px_#FF1392] transition-all duration-300">
                <h1 className="text-4xl md:text-7xl font-black text-background tracking-tight leading-none">
                  FROM STAGE<br />
                  TO STORY
                </h1>
              </div>
            </div>

            {/* Floating Geometric Shape 1 - Top Right */}
            <div className="hidden md:block absolute top-20 right-8 w-24 h-24 bg-[#FFBA08] border-4 border-foreground transform rotate-45 hover:rotate-90 transition-transform duration-500 z-30">
              <div className="flex items-center justify-center h-full transform -rotate-45 hover:rotate-0 transition-transform duration-500">
                <span className="font-black text-xs">AI</span>
              </div>
            </div>

            {/* Description Block - Asymmetrical */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="bg-[#FF1392] border-6 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-6 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <p className="text-white font-bold text-lg md:text-xl leading-tight">
                  BRINGING AI-FIRST STRATEGY TO THE ENTERPRISE CONVERSATION
                </p>
              </div>
            </div>

            {/* Floating Geometric Shape 2 - Left Side */}
            <div className="hidden md:block absolute top-64 left-4 w-16 h-32 bg-background border-4 border-foreground transform -skew-x-12 hover:skew-x-0 transition-transform duration-300 z-30">
              <div className="flex items-center justify-center h-full">
                <span className="font-black text-xs transform skew-x-12">UX</span>
              </div>
            </div>

            {/* Secondary Description - Offset */}
            <div className="col-span-12 md:col-span-7 md:col-start-1 mt-8">
              <div className="bg-[#FFBA08] border-6 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-6 transform hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all duration-200">
                <p className="text-foreground font-bold text-lg">
                  I deliver high-impact keynotes, engaging panels, and unique insights for global audiences.
                </p>
              </div>
            </div>

            {/* Topic Floating Shapes */}
            <div className="hidden lg:block absolute bottom-0 right-1/4 w-20 h-20 bg-accent border-4 border-foreground transform rotate-12 hover:-rotate-12 transition-transform duration-400 z-30">
              <div className="flex items-center justify-center h-full transform -rotate-12">
                <span className="font-black text-xs text-accent-foreground">ABM</span>
              </div>
            </div>

            <div className="hidden lg:block absolute top-32 left-1/3 w-16 h-16 bg-secondary border-4 border-foreground rounded-full hover:scale-110 transition-transform duration-300 z-30">
              <div className="flex items-center justify-center h-full">
                <span className="font-black text-xs text-secondary-foreground">B2B</span>
              </div>
            </div>
          </div>

          {/* Decorative broken elements */}
          <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#FF1392] border-2 border-foreground transform rotate-45"></div>
          <div className="absolute top-1/2 right-16 w-6 h-16 bg-[#FFBA08] border-2 border-foreground transform skew-y-12"></div>
        </header>

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