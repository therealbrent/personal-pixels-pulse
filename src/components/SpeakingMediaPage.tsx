import { useEffect } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Download, Play } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function SpeakingMediaPage() {

  useEffect(() => {
    document.title = 'Speaking - Brent Summers';
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional speaking press kit. Brent Summers delivers keynotes on AI transformation, marketing innovation, and UX strategy for global conferences and events.');
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
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground transform hover:skew-x-1 transition-transform duration-300">
            SPEAKING
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            I don't give speeches because transformation isn't theory — it's experienced. I share stories, frameworks, and scars from two decades of leading change.
          </p>
        </header>

        {/* Executive Impact Section */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto bg-primary border-8 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary-foreground leading-tight">
              EXECUTIVE INSIGHTS & INDUSTRY IMPACT
            </h2>
            <p className="text-lg md:text-xl font-bold text-primary-foreground/90 leading-relaxed">
              Global stages to local meetups. Wherever marketing, technology, and design collide.
            </p>
          </div>

          {/* Conferences */}
          <div className="mt-12">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground px-4">
              CONFERENCES
            </h3>
            <div className="space-y-4 max-w-7xl mx-auto">
              {/* Conference Talk 1 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary">
                  Beyond buzzwords: Real AI, real marketing, real results
                </h4>
                <p className="text-sm font-bold text-foreground/60 mb-4">Webit • 2025</p>
                <Button 
                  onClick={() => window.open('https://www.youtube.com/watch?v=eEbuoK5DS30', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  WATCH
                </Button>
              </div>

              {/* Conference Talk 2 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary">
                  Happier Humans, Better Business
                </h4>
                <p className="text-sm font-bold text-foreground/60 mb-4">AI Leaders Forum • 2025</p>
                <Button 
                  onClick={() => window.open('https://youtu.be/ApLKfzjaN3Y', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  WATCH
                </Button>
              </div>

              {/* Conference Talk 3 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary">
                  Five Tips to Avoid Generative AI Buyer's Remorse
                </h4>
                <p className="text-sm font-bold text-foreground/60 mb-4">AI x Marketing Summit • 2025</p>
                <Button 
                  onClick={() => window.open('https://youtu.be/d3A-gHkwiBE?si=ecXBZYUpq_StpVs2&t=1', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  WATCH
                </Button>
              </div>

              {/* Conference Talk 4 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary">
                  Use Science to Write Better Copy
                </h4>
                <p className="text-sm font-bold text-foreground/60 mb-4">Product-Led Growth Conference • 2020</p>
                <Button 
                  onClick={() => window.open('https://www.youtube.com/watch?v=GRdx9R2B7iQ&t=1s', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  WATCH
                </Button>
              </div>

              {/* Conference Talk 5 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-foreground">
                  The UX Flywheel
                </h4>
                <p className="text-sm font-bold text-foreground/60">ConveyUX • 2020</p>
              </div>

              {/* Conference Talk 6 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary">
                  The UX Flywheel
                </h4>
                <p className="text-sm font-bold text-foreground/60 mb-4">San Diego Digital Designers • 2020</p>
                <Button 
                  onClick={() => window.open('https://youtu.be/UYApYNEnaMM?si=v3IsSc6R50rZeVlp', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  WATCH
                </Button>
              </div>

              {/* Conference Talk 7 */}
              <div className="bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-foreground">
                  The UX Flywheel
                </h4>
                <p className="text-sm font-bold text-foreground/60">MarcomCentral User Conference • 2019</p>
              </div>
            </div>
          </div>

          {/* Podcasts */}
          <div className="mt-12">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground px-4">
              PODCASTS
            </h3>
            <div className="space-y-4 max-w-7xl mx-auto">
              <div className="bg-secondary border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-secondary-foreground">
                  Balancing Quantitative and Qualitative Perspectives in UX Strategy
                </h4>
                <p className="text-sm font-bold text-secondary-foreground/60 mb-4">Convey UX • 2020</p>
                <Button 
                  onClick={() => window.open('https://youtu.be/s827NVsQXS4?si=8JP9q_-fhSDMs_8_', '_blank')}
                  size="sm"
                  className="bg-accent text-accent-foreground border-3 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                >
                  <Play className="h-4 w-4 mr-2" />
                  LISTEN
                </Button>
              </div>
            </div>
          </div>

          {/* Panels */}
          <div className="mt-12">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground px-4">
              PANELS
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
              <div className="bg-destructive border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-destructive-foreground">
                  UC Irvine presents Exploring Design & Ethics
                </h4>
                <p className="text-sm font-bold text-destructive-foreground/60">Moderator • Good Cause • 2022</p>
              </div>

              <div className="bg-primary border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary-foreground">
                  General Motors presents Exploring Diversity + Design
                </h4>
                <p className="text-sm font-bold text-primary-foreground/60">Moderator • Good Cause • 2021</p>
              </div>

              <div className="bg-accent border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-accent-foreground">
                  Exploring Data Privacy & Artificial Intelligence in UX
                </h4>
                <p className="text-sm font-bold text-accent-foreground/60">Moderator • SDXD • 2020</p>
              </div>

              <div className="bg-secondary border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-secondary-foreground">
                  Interview Olympics
                </h4>
                <p className="text-sm font-bold text-secondary-foreground/60">SDXD • 2019</p>
              </div>

              <div className="bg-destructive border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-destructive-foreground">
                  Strategic Interviews: The Hiring Manager's Perspective
                </h4>
                <p className="text-sm font-bold text-destructive-foreground/60">SDXD • 2019</p>
              </div>

              <div className="bg-primary border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] p-6">
                <h4 className="text-lg md:text-xl font-black mb-2 text-primary-foreground">
                  How to Get Hired for a UX Design Role
                </h4>
                <p className="text-sm font-bold text-primary-foreground/60">Moderator • UCSD • 2015</p>
              </div>
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