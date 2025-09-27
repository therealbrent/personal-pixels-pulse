import { useEffect } from 'react';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';
import { MediaCard } from './ui/MediaCard';
import { Icon } from './ui/icon';
import BiographyHeadshot from './BiographyHeadshot';

export default function SpeakingMediaPage() {

  useEffect(() => {
    document.title = 'Speaking - Brent Summers';
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional speaking press kit. Brent Summers delivers keynotes on AI transformation, marketing innovation, and UX strategy for global conferences and events.');
    }
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground">

      <main id="main-content" className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section - Neo-Brutalist */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground transform hover:skew-x-1 transition-transform duration-300">
            SPEAKING
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            I share stories, strategic frameworks and lessons learned from two decades of leading change.
          </p>
        </header>

        {/* Biography and Headshot */}
        <BiographyHeadshot />

        {/* Executive Impact Section - Unified Macro Element */}
        <section className="mb-16">
          {/* Header/Letterhead */}
          <div className="max-w-7xl mx-auto bg-primary border-8 border-foreground shadow-neo-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-black mb-3 text-primary-foreground leading-tight">
              EXECUTIVE INSIGHTS & INDUSTRY IMPACT
            </h2>
            <p className="text-lg md:text-xl font-bold text-primary-foreground/90 leading-relaxed">
              Global stages to local meetups. Wherever marketing, technology, and design collide.
            </p>
          </div>

          {/* Unified Content Container */}
          <div className="max-w-7xl mx-auto bg-background border-8 border-foreground shadow-neo-xl border-t-0 p-6 md:p-8">
            
            {/* Conferences */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black mb-4 text-foreground">
                PRESENTATIONS
              </h3>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
                {/* New Presentation - ANA 2025 */}
                <div className="bg-background border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-foreground line-clamp-2">
                    Next-Generation Marketing: How AI is Used at Qualcomm Technologies
                  </h4>
                  <p className="text-xs font-bold text-foreground/60">ANA • 2025</p>
                </div>

                {/* Conference Talk 1 */}
                <div 
                  onClick={() => window.open('https://www.youtube.com/watch?v=eEbuoK5DS30', '_blank')}
                  className="group bg-background border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      Beyond buzzwords: Real AI, real marketing, real results
                    </h4>
                    <p className="text-xs font-bold text-foreground/60">Webit • 2025</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>

                {/* Conference Talk 2 - Updated with multiple conferences */}
                <div 
                  onClick={() => window.open('https://youtu.be/ApLKfzjaN3Y', '_blank')}
                  className="group bg-background border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      Happier Humans, Better Business
                    </h4>
                    <p className="text-xs font-bold text-foreground/60">AI Leaders Forum • 2025<br />San Diego Design Week • 2025</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>

                {/* Conference Talk 3 */}
                <div 
                  onClick={() => window.open('https://youtu.be/d3A-gHkwiBE?si=ecXBZYUpq_StpVs2&t=1', '_blank')}
                  className="group bg-background border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      Five Tips to Avoid Generative AI Buyer's Remorse
                    </h4>
                    <p className="text-xs font-bold text-foreground/60">AI x Marketing Summit • 2025</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>

                {/* Conference Talk 4 */}
                <div 
                  onClick={() => window.open('https://www.youtube.com/watch?v=GRdx9R2B7iQ&t=1s', '_blank')}
                  className="group bg-background border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      Use Science to Write Better Copy
                    </h4>
                    <p className="text-xs font-bold text-foreground/60">Product-Led Growth Conference • 2020</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>

                {/* Consolidated UX Flywheel Talk */}
                <div 
                  onClick={() => window.open('https://youtu.be/UYApYNEnaMM?si=v3IsSc6R50rZeVlp', '_blank')}
                  className="group bg-background border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      The UX Flywheel
                    </h4>
                    <p className="text-xs font-bold text-foreground/60">Convey UX • 2020<br />San Diego Digital Designers • 2020<br />MarcomCentral User Conference • 2020</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>
              </div>
            </div>

            {/* Podcasts */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black mb-4 text-foreground">
                PODCASTS
              </h3>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <div 
                  onClick={() => window.open('https://youtu.be/s827NVsQXS4?si=8JP9q_-fhSDMs_8_', '_blank')}
                  className="group bg-secondary border-2 border-foreground shadow-neo-sm p-4 cursor-pointer transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-xs relative"
                >
                  <div className="pr-8">
                    <h4 className="text-sm md:text-base font-black mb-1 text-primary group-hover:text-accent line-clamp-2 transition-colors">
                      Balancing Quantitative and Qualitative Perspectives in UX Strategy
                    </h4>
                    <p className="text-xs font-bold text-secondary-foreground/60">Convey UX • 2020</p>
                  </div>
                  <Icon name="play" size={16} className="absolute bottom-4 right-4 text-primary group-hover:text-accent transition-all duration-200" />
                </div>
              </div>
            </div>

            {/* Panels */}
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-4 text-foreground">
                PANELS
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-destructive border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-destructive-foreground line-clamp-2">
                    UC Irvine presents Exploring Design & Ethics
                  </h4>
                  <p className="text-xs font-bold text-destructive-foreground/60">Moderator • Good Cause • 2022</p>
                </div>

                <div className="bg-primary border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-primary-foreground line-clamp-2">
                    General Motors presents Exploring Diversity + Design
                  </h4>
                  <p className="text-xs font-bold text-primary-foreground/60">Moderator • Good Cause • 2021</p>
                </div>

                <div className="bg-accent border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-accent-foreground line-clamp-2">
                    Exploring Data Privacy & Artificial Intelligence in UX
                  </h4>
                  <p className="text-xs font-bold text-accent-foreground/60">Moderator • SDXD • 2020</p>
                </div>

                <div className="bg-secondary border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-secondary-foreground line-clamp-2">
                    Interview Olympics
                  </h4>
                  <p className="text-xs font-bold text-secondary-foreground/60">SDXD • 2019</p>
                </div>

                <div className="bg-destructive border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-destructive-foreground line-clamp-2">
                    Strategic Interviews: The Hiring Manager's Perspective
                  </h4>
                  <p className="text-xs font-bold text-destructive-foreground/60">SDXD • 2019</p>
                </div>

                <div className="bg-primary border-2 border-foreground shadow-neo-sm p-4">
                  <h4 className="text-sm md:text-base font-black mb-1 text-primary-foreground line-clamp-2">
                    How to Get Hired for a UX Design Role
                  </h4>
                  <p className="text-xs font-bold text-primary-foreground/60">Moderator • UCSD • 2015</p>
                </div>
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
              className="group block border-6 border-foreground bg-background p-8 shadow-neo-md hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">CIO NEWS</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-accent text-xl leading-tight transition-colors">
                Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-accent pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                We expect a human to verify the facts, citations, decisions—and the underlying strategy. Is it ethical? Does it adhere to our Responsible AI Principles and policies? That's the bar.
              </blockquote>
              <span className="text-primary group-hover:text-accent font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* SmartSuite */}
            <a 
              href="https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-neo-md hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">SMARTSUITE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-accent text-xl leading-tight transition-colors">
                Why the next wave of AI opportunities isn't in the cloud, it's on the edge
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-accent pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                As someone committed to sustainability, I believe in the transformative potential of AI—but must also acknowledge the challenges it poses to a sustainable future.
              </blockquote>
              <span className="text-primary group-hover:text-accent font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* CMSWire */}
            <a 
              href="https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-neo-md hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">CMS WIRE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-accent text-xl leading-tight transition-colors">
                Customer-Centric Companies Sweat the Details
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-accent pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                Customer's perceptions will change along the way as they become more familiar with your company's products and services. Every single touchpoint is a chance to delight or disappoint.
              </blockquote>
              <span className="text-primary group-hover:text-accent font-bold underline transition-colors">
                Read Article
              </span>
            </a>

            {/* UX Magazine */}
            <a 
              href="https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-6 border-foreground bg-background p-8 shadow-neo-md hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200"
            >
              <div className="mb-4">
                <span className="text-sm font-black text-foreground/60 tracking-wider">UX MAGAZINE</span>
              </div>
              <h4 className="font-black mb-6 text-primary group-hover:text-accent text-xl leading-tight transition-colors">
                Revisiting Proto-Personas for Executive Alignment
              </h4>
              <blockquote className="mb-6 border-l-4 border-primary group-hover:border-accent pl-6 italic text-foreground/80 text-lg leading-relaxed transition-colors">
                We use proto-personas as a way of gaining alignment among our project sponsors and striking the right balance of focus between organizational and user needs.
              </blockquote>
              <span className="text-primary group-hover:text-accent font-bold underline transition-colors">
                Read Article
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}