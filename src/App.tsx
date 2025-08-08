import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import LLMSTextPage from './components/LLMSTextPage';
import SlotMachineCarousel from './components/SlotMachineCarousel';
import CaseStudyModal from './components/CaseStudyModal';
import ConfettiEffect from './components/ConfettiEffect';

interface CaseStudyCardProps {
  title: string;
  tag: string;
  client: string;
  description: string;
  details: string;
  contributions: string[];
  logoSrc: string;
  logoAlt: string;
}

function CaseStudyCard({ title, tag, client, description, details, contributions, logoSrc, logoAlt }: CaseStudyCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border-4 border-foreground bg-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex flex-col items-center space-y-4">
            <img src={logoSrc} alt={logoAlt} className="h-16 object-contain" />
            <span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold border-2 border-foreground">
              {tag}
            </span>
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-medium">{client}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-4 border-foreground bg-white">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center space-y-3">
            <img src={logoSrc} alt={logoAlt} className="h-12 md:h-24 object-contain" />
            <span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold border-2 border-foreground">
              {tag}
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div>
            <h4 className="font-semibold text-primary mb-2">Client</h4>
            <p className="text-muted-foreground">{client}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Description</h4>
            <p className="text-muted-foreground mb-3">{description}</p>
            <p className="text-muted-foreground">{details}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">My contributions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function HomePage() {
  const [showFullStory, setShowFullStory] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b-4 border-foreground" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">BRENT SUMMERS</div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="font-semibold hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('work')} className="font-semibold hover:text-accent transition-colors">What I Do</button>
              <button onClick={() => scrollToSection('about')} className="font-semibold hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('writing')} className="font-semibold hover:text-accent transition-colors">Writing</button>
              <button onClick={() => scrollToSection('case-studies')} className="font-semibold hover:text-accent transition-colors">Case Studies</button>
              <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="bg-background text-foreground border-4 border-foreground px-4 py-2 font-bold hover:opacity-90 transition-opacity inline-block">LLMS.txt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-muted-foreground mb-4 font-bold tracking-wide uppercase">This site was vibe coded</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative inline-block">
              AI-FIRST
              <div className="absolute bottom-0 left-0 w-full h-8 bg-pink-500/70 -z-10 transform -skew-x-6"></div>
            </span>
            {" "}MARKETING
            <span className="block text-primary">LEADER</span>
          </h1>
          
          <div className="bg-secondary p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
            <p className="text-xl md:text-2xl font-semibold text-secondary-foreground">Leveraging Generative AI Since June 2020</p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">AI • User Experience • GTM Innovation</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => scrollToSection('work')} className="bg-primary text-primary-foreground text-lg font-bold px-8 py-4 transform hover:scale-105 transition-transform">
              Explore My Work
            </button>
          </div>

        </div>

        <button onClick={() => scrollToSection('work')} className="absolute bottom-8 animate-bounce">
          <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
          </svg>
        </button>
      </header>

      {/* Work Section */}
      <main>
      <section id="work" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">WHAT I DO</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">I am responsible for AI Platforms & GTM Innovation at Qualcomm Technologies. Outside of work, I am a devoted member of the design community and advocate for the Arts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-pink-500 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-muted-foreground mb-4">Two decades of experience at the intersection of marketing, technology, and UX.</p>
              <button onClick={() => scrollToSection('about')} className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 hover:opacity-90 transition-opacity">
                View Background →
              </button>
            </div>

            <div className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-pink-500 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
              <p className="text-muted-foreground mb-4">Real projects and technology implementations for recognizable brands.</p>
              <button onClick={() => scrollToSection('case-studies')} className="w-full border-2 border-foreground bg-transparent text-foreground font-semibold py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                See Case Studies →
              </button>
            </div>

            <div className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-pink-500 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Writing</h3>
              <p className="text-muted-foreground mb-4">Insights and musings on artificial intelligence, marketing & content strategy, and user experience.</p>
              <button onClick={() => scrollToSection('writing')} className="w-full bg-secondary text-secondary-foreground font-semibold py-2 px-4 hover:opacity-90 transition-opacity">
                Read Articles →
              </button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary/10 p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="inline-flex bg-destructive text-destructive-foreground px-3 py-1 text-sm font-semibold mb-3">NEW</span>
                <h4 className="text-xl font-bold mb-2 text-foreground">9.6X ROI with WRITER</h4>
                <p className="text-muted-foreground mb-4">Led the platform discovery, roll out, and scale up of WRITER at Qualcomm Technologies.</p>
                <button onClick={() => {
                  console.log('Writer button clicked');
                  setActiveModal('writer');
                }} className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity">
                  Read Case Study →
                </button>
              </div>
              
              <div className="bg-accent/10 p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="inline-flex border-2 border-foreground bg-transparent text-foreground px-3 py-1 text-sm font-semibold mb-3">FEATURED</span>
                <h4 className="text-xl font-bold mb-2 text-foreground">The UX Flywheel</h4>
                <p className="text-muted-foreground mb-4">This is a user-centered alternative to the marketing funnel that I developed for Blink UX.</p>
                <button onClick={() => setActiveModal('ux-flywheel')} className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity">
                  Watch Presentation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brutalist Separator - Zigzag Pattern */}
      <div className="relative overflow-hidden">
        <div className="h-20 bg-gradient-to-br from-accent via-destructive to-primary relative">
          <div className="absolute inset-0 bg-background/30">
            <div className="h-full w-full bg-gradient-to-t from-foreground/10 to-transparent"></div>
          </div>
          {/* Shapes that spill outside bounds */}
          <div className="absolute -top-3 left-8 w-12 h-16 bg-accent border-3 border-foreground transform -skew-y-45"></div>
          <div className="absolute top-2 left-24 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45"></div>
          <div className="absolute -bottom-2 left-40 w-16 h-6 bg-destructive border-2 border-foreground transform skew-x-45"></div>
          <div className="absolute top-1 right-32 w-6 h-24 bg-secondary border-2 border-foreground transform rotate-30"></div>
          <div className="absolute -bottom-4 right-16 w-10 h-10 bg-accent border-3 border-foreground transform -rotate-30"></div>
          <div className="absolute -top-2 right-4 w-14 h-14 bg-primary border-4 border-foreground transform rotate-45"></div>
          <div className="absolute top-6 left-64 w-4 h-12 bg-secondary border-2 border-foreground transform -skew-x-30"></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">ABOUT ME</h2>
            <div className="bg-primary p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold text-primary-foreground">
                Where Marketing Strategy Meets AI Innovation
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-4 border-foreground bg-card p-8 mb-12">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bold">Core Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Strategic Marketing Leadership", "Operational Excellence & Scaling", "Human-Centered Technology Strategy"].map((skill, index) => (
                  <span key={index} className="bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold border-2 border-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-4 border-foreground bg-card p-8">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold">My Story</h3>
              </div>
              <div className="space-y-6 text-lg">
                <div>
                  <p>I drive measurable business impact through AI adoption and innovative go-to-market strategies. Currently leading AI Platforms & GTM Innovation at Qualcomm Technologies, I've pioneered enterprise-wide generative AI adoption achieving 8.6x ROI and built ABM programs influencing billions in pipeline.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-primary">How a fan-first mindset shaped my career</h4>
                  <p>My career shifted into high gear when I joined NASCAR in 2004. I started as a call center agent and was quickly promoted to trainer. Within two years, I moved into the IT organization as a Business Analyst where I defined the requirements for projects that improved the fan experience. Two of my significant projects include the implementation of print-at-home ticketing (2007) and new websites for 13 race tracks (2010). These early experiences sparked my passion for user experience, technology, and marketing — shaping my career ever since.</p>
                </div>

                {!showFullStory && (
                  <div className="text-center">
                    <button 
                      onClick={() => setShowFullStory(true)}
                      className="bg-primary text-primary-foreground font-semibold px-6 py-3 transform hover:scale-105 transition-transform"
                    >
                      Keep reading...
                    </button>
                  </div>
                )}

                {showFullStory && (
                  <>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-primary">The proving ground that sharpened my leadership</h4>
                      <p className="mb-4">Next, I moved agency-side where I learned to pitch big ideas, lead large quality-obsessed teams, and expand into new markets.</p>
                      <ul className="space-y-3 list-disc list-inside text-base">
                        <li><strong>At Digitaria,</strong> I was the Executive Producer on the Qualcomm account where I had 5 direct reports plus a dynamic project team that sometimes scaled to 40 contributing resources. Under my leadership, Qualcomm became an early adopter of cloud-computing and responsive design.</li>
                        <li><strong>At Digital Telepathy,</strong> I pivoted away from providing client services to marketing leadership. Our GTM strategy included the incubation — and eventual sale — of digital products (Slide Deck, Hello Bar, and Filament), and inbound marketing driven primarily by our blog.</li>
                        <li><strong>At Blink,</strong> I opened and scaled a studio in San Diego — winning our first few clients and growing the team from 3 employees to 12. After stabilizing the new office, I overhauled our Engineering practice to reach profitability and led a rebrand project following the acquisition of Tectonic.</li>
                        <li><strong>At Metalab,</strong> I led the in-house team of three responsible for marketing strategy and sales enablement. In collaboration with freelancers another agency, we designed and executed a content strategy that delivered 3 marquee case studies and 20+ sales enablement decks — ultimately leading to $3.8M in influenced revenue, a 5.5x ROI.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-primary">The opportunity to drive outsized impact in an enterprise</h4>
                      <p className="mb-4">I joined Qualcomm Technologies to build an ABM program. In pursuit of that goal, I became an early champion for Generative AI. Now, I am the Global Lead for AI Platforms & GTM Innovation. Some of my key achievements include:</p>
                      <ul className="space-y-2 list-disc list-inside text-base">
                        <li>Established and scaled an award-winning ABM program that influences billions in annual pipeline across several business units.</li>
                        <li>Built and successfully transitioned commercial channel marketing to dedicated teams, onboarding more than a dozen partners worldwide.</li>
                        <li>Pioneered enterprise-wide Generative AI adoption across marketing functions, achieving 8.6x ROI based purely on time savings.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-primary">The principles that guide my work</h4>
                      <p className="mb-4">My leadership approach bridges the gap between visionary strategy and tactical execution. I believe transformative initiatives achieve the most success when they apply user empathy, data-driven decision making, and cross-functional collaboration.</p>
                      <p className="mb-4">I'm recognized as a thought leader at the intersection of AI, marketing, and user experience, with recent speaking engagements at Webit, AI x Marketing Summit, and AI Leaders Forum. My expertise has been featured in CIO News, CMS Wire, and SmartSuite.</p>
                      <p>Beyond my professional work, I am an ambassador for the San Diego / Tijuana design community, contributing to initiatives that shaped our region's recognition as World Design Capital 2024. I'm also an active member of San Diego Experience Design Professionals, where I participate in meetups and mentorship.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brutalist Separator - Diagonal Pattern */}
      <div className="relative overflow-hidden">
        <div className="h-20 bg-gradient-to-l from-destructive via-primary to-accent relative">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-foreground/20 transform skew-x-12"></div>
          </div>
          {/* Dynamic shapes with spillover */}
          <div className="absolute -top-4 left-16 w-20 h-8 bg-secondary border-3 border-foreground transform -skew-x-12"></div>
          <div className="absolute top-3 right-24 w-12 h-12 bg-primary border-4 border-foreground transform rotate-12"></div>
          <div className="absolute -bottom-3 right-8 w-16 h-16 bg-destructive border-3 border-foreground transform -rotate-45"></div>
          <div className="absolute top-1 left-48 w-6 h-18 bg-accent border-2 border-foreground transform skew-y-12"></div>
          <div className="absolute -top-1 left-72 w-18 h-4 bg-secondary border-2 border-foreground transform rotate-60"></div>
          <div className="absolute bottom-2 left-96 w-8 h-10 bg-primary border-2 border-foreground transform -skew-y-30"></div>
          <div className="absolute -bottom-2 right-40 w-5 h-14 bg-accent border-2 border-foreground transform rotate-75"></div>
        </div>
      </div>

      {/* Writing Section */}
      <section id="writing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">THOUGHT LEADERSHIP</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Sharing what I've learned with anyone who'll listen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="border-4 border-foreground bg-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.open('https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers', '_blank')}>
              <span className="inline-flex bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold mb-4">AI Strategy</span>
              <h3 className="text-xl font-bold mb-3">Why Qualcomm's Playbook For AI Starts With Intention—And Ends With A Human</h3>
              <p className="text-muted-foreground mb-4">From brand voice guardrails to security-first agent design, my approach offers a blueprint for automating AI tasks with intention in marketing organizations.</p>
              <span className="text-primary font-semibold">Read more →</span>
            </article>

            <article className="border-4 border-foreground bg-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.open('https://contentstrategy.substack.com/p/my-favorite-content-strategy-frameworks', '_blank')}>
              <span className="inline-flex bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold mb-4">Content Strategy</span>
              <h3 className="text-xl font-bold mb-3">My Favorite Content Strategy Frameworks for Website Projects</h3>
              <p className="text-muted-foreground mb-4">Clarify goals, make editorial decisions, and set priorities with these simple frameworks.</p>
              <span className="text-primary font-semibold">Read more →</span>
            </article>

            <article className="border-4 border-foreground bg-card p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.open('https://blinkux.com/ideas/evidence-driven-design-supports-innovation', '_blank')}>
              <span className="inline-flex bg-secondary text-secondary-foreground px-3 py-1 text-sm font-semibold mb-4">Innovation</span>
              <h3 className="text-xl font-bold mb-3">How Evidence-driven Design Supports Innovation</h3>
              <p className="text-muted-foreground mb-4">I led marketing at Blink UX for three years. This is a story they explains the design philosophy used to create products for NASA, Amazon, Microsoft, and other notable clients.</p>
              <span className="text-primary font-semibold">Read more →</span>
            </article>
          </div>
          
          {/* Slot Machine Carousel */}
          <div className="mt-16 max-w-4xl mx-auto">
            <SlotMachineCarousel />
          </div>
        </div>
      </section>

      {/* Brutalist Separator */}
      <div className="relative overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-primary via-accent to-secondary relative">
          <div className="absolute inset-0 bg-foreground/10">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-background/20 to-transparent transform -skew-y-1"></div>
          </div>
          {/* Explosive shape arrangement */}
          <div className="absolute -top-6 left-12 w-16 h-16 bg-destructive border-4 border-foreground transform rotate-45"></div>
          <div className="absolute top-4 right-20 w-10 h-12 bg-accent border-3 border-foreground transform -skew-x-45"></div>
          <div className="absolute -bottom-4 right-40 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45"></div>
          <div className="absolute top-1 left-32 w-22 h-6 bg-secondary border-2 border-foreground transform -skew-x-12"></div>
          <div className="absolute -top-2 left-64 w-6 h-18 bg-destructive border-2 border-foreground transform rotate-30"></div>
          <div className="absolute bottom-1 right-8 w-12 h-4 bg-accent border-2 border-foreground transform skew-y-45"></div>
          <div className="absolute -bottom-3 left-80 w-14 h-10 bg-primary border-3 border-foreground transform -rotate-60"></div>
        </div>
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">CASE STUDIES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">These are some of the successful projects that I've helped deliver. This list is not exhaustive.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CaseStudyCard
              title="SUMO LOGIC"
              tag="Craft CMS"
              client="Suku Krishnaraj, Chief Marketing Officer"
              description="During a stint as Engineering Director at Blink, I led the pitch that won this website redesign project. The brand work was done by Tolleson."
              details="This project included foundational user research and a few rounds of evaluative testing as we determined the best messaging and information architecture for three very technical types of users: Security Officers, DevOps Managers, and Cloud Architects. While my primary role was technical lead, I also advised the project team (mostly product designers) on web design best practices. Near the end of the project, Sumo Logic requested a change — localization into Japanese."
              contributions={[
                "Project estimation",
                "Product requirements", 
                "Platform recommendations",
                "Implementation management",
                "QA testing",
                "Web strategy"
              ]}
              logoSrc="/lovable-uploads/d1bb2915-782f-4b5a-b60b-08b9094dcdc1.png"
              logoAlt="Sumo Logic logo"
            />
            
            <CaseStudyCard
              title="ELASTIC"
              tag="WordPress"
              client="Elyse Phillips, VP Marketing"
              description="I led project that established the Elasticsearch brand and launched the commercial product."
              details="In collaboration with the founding team, Digital Telepathy designed two websites. elasticsearch.com was launched to support the new commercial product and elasticsearch.org was updated to reflect the growing capabilities of the open-source project. Another agency (UpTrending) handled the heavy-lifting of the build, but I managed content entry and quality assurance testing. As an early-stage startup, Elasticsearch moved quickly to add new features. The company made strategic acquisitions including Logstash, Kibana, and Beats. They integrated these products and introduced the ELK stack. Then added Marvel, an observability platform."
              contributions={[
                "Brand establishment for Elasticsearch",
                "Commercial product launch strategy",
                "Website design collaboration (elasticsearch.com)",
                "Website update management (elasticsearch.org)",
                "Content entry management",
                "Quality assurance testing",
                "Product integration strategy for acquisitions"
              ]}
              logoSrc="/lovable-uploads/26b28675-053b-424c-ad22-a082f58d3937.png"
              logoAlt="Elastic logo"
            />
            
            <CaseStudyCard
              title="AMAZON"
              tag="LEGO (Proprietary)"
              client="Andrew Meyers, Sr. Product Manager"
              description="I was part of a small team that overhauled sell.amazon.com to streamline several ingress points to becoming a seller on Amazon."
              details="This project was informed by foundational user research and iterative evaluative testing during the design. The site is built on a proprietary drag-and-drop CMS called 'LEGO.' While I cannot disclose the specific metrics, I am happy to report that the conversion rate we achieved was triple the benchmark."
              contributions={[
                "Competitive analysis",
                "Content strategy & copywriting",
                "Product requirements",
                "Backlog management",
                "Scrum master",
                "Content entry via CMS",
                "Quality assurance testing"
              ]}
              logoSrc="/lovable-uploads/fcdc8d21-8816-48fb-ac54-3140bf151296.png"
              logoAlt="Amazon logo"
            />
            
            <CaseStudyCard
              title="PIVOTAL"
              tag="Proprietary"
              client="Michelle Kerr, VP of Marketing"
              description="I led this project which expanded on the core brand assets (logos, color, and type) to create a comprehensive visual design system."
              details="Pivotal was born from a grab bag of EMC and VMware acquisitions including Cetas, Cloud Foundry, GemFire, GreenPlum, SpringSource, and Pivotal Labs. The company was spun out of EMC/VMware with a $105 million investment from GE. The project included a corporate website, a huge collection of icons and illustrations, plus guidelines for creating custom marketecture diagrams that are essential to technical sales."
              contributions={[
                "Visual design system expansion",
                "Corporate website design",
                "Icon and illustration collection",
                "Marketecture diagram guidelines",
                "Brand asset coordination",
                "Technical sales enablement materials"
              ]}
              logoSrc="/lovable-uploads/f09455ec-ba6d-44e8-bf98-5b6023cd43fd.png"
              logoAlt="Pivotal logo"
            />
            
            <CaseStudyCard
              title="HP"
              tag="iOS & Android"
              client="Shawn Piper, Senior Experience Design Manager"
              description="This project overhauled the mobile app that controls modern HP printers and conceived how HP's new subscription business model would be communicated."
              details="A six-person team at Blink worked with more than 20 stakeholders at HP to research and design an app experience to serve three primary personas: Individual at home/work, Small business owners, and IT administrators. As a follow-up to the app redesign, Blink conceived how HP's new subscription business model would be communicated on its storefront website."
              contributions={[
                "Value proposition clarity",
                "Setup instructions design",
                "Product commands interface",
                "Content strategy for subscription model",
                "Copywriting for concept website",
                "eCommerce store consolidation strategy"
              ]}
              logoSrc="/lovable-uploads/5c60a0c9-273d-43a9-a4e6-226e8538a08c.png"
              logoAlt="HP logo"
            />
            
            <CaseStudyCard
              title="NEW RELIC"
              tag="Prismic"
              client="Raf Alenda, Vice President - Online & Brand Marketing"
              description="New Relic was a long-standing client of Digital Telepathy. I got involved with the account around the time when New Relic announced their Series B funding."
              details="I helped with several key initiatives during their growth phase, focusing on product launches, content strategy pivots, and campaign optimization."
              contributions={[
                "Product launch: Synthetics",
                "Pivot to enterprise content strategy - Solutions by Industry",
                "Pivot to enterprise content strategy - Solutions by Use Case",
                "Landing page optimization for 'Data Nerd' campaign",
                "Nurture program built on in-product events (using Intercom)",
                "FutureStack 2014, 2015"
              ]}
              logoSrc="/lovable-uploads/6cbd7f55-af1e-4682-aaf1-58ae638c0c99.png"
              logoAlt="New Relic logo"
            />
          </div>
          
          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">TESTIMONIALS</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border-4 border-foreground bg-card p-6">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "Brent brings a great mix of strategy and execution to our company's account. Like most fast-moving start-ups, we juggle needing great content along with 'big picture' thinking. Brent consistently manages the day-to-day while continuing to bring new, fresh ideas to our marketing strategy."
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-foreground">Elyse Phillips</p>
                  <p className="text-sm text-muted-foreground">VP of Marketing, Elastic</p>
                </div>
              </div>
              
              <div className="border-4 border-foreground bg-card p-6">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "Brent Summers is one of the smartest people I have ever had the pleasure to collaborate with. His attention to detail and care for the end user comes through in everything he does. Brent and his team helped us create a beautiful Web experience that eclipsed the previous site in every facet. From design to conversion, it was a revelation."
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-foreground">Michael Weir</p>
                  <p className="text-sm text-muted-foreground">Sr. Director of Marketing, Pivotal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-lg mb-8 opacity-80">Did something spark your curiousity? I'd love to hear from you.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/brentjsummers/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/brentsummers" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/therealbrent" target="_blank" rel="noopener noreferrer" className="p-3 bg-background text-foreground border-2 border-background hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="opacity-60">© {new Date().getFullYear()} Brent Summers. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Case Study Modals */}
      <CaseStudyModal
        isOpen={activeModal === 'writer'}
        onClose={() => setActiveModal(null)}
        title="9.6X ROI with WRITER"
        description="Led the platform discovery, roll out, and scale up of WRITER at Qualcomm Technologies. This case study demonstrates how strategic AI adoption can drive measurable business value through improved productivity and content quality across marketing, legal, and analytics teams."
        link="https://writer.com/blog/qualcomm-customer-story/"
        buttonText="Read Full Case Study →"
      />
      
      <CaseStudyModal
        isOpen={activeModal === 'ux-flywheel'}
        onClose={() => setActiveModal(null)}
        title="The UX Flywheel"
        description="This presentation introduces a user-centered alternative to the traditional marketing funnel that I developed during my time at Blink UX. The UX Flywheel focuses on creating continuous value for users while driving sustainable business growth through better user experiences."
        link="https://www.youtube.com/watch?v=UYApYNEnaMM"
        buttonText="Watch Presentation →"
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/llms.txt" element={<LLMSTextPage />} />
      </Routes>
    </Router>
  );
}