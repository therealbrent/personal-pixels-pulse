import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LLMSTextPage from './components/LLMSTextPage';
import SpeakingMediaPage from './components/SpeakingMediaPage';
import AccessibleSlotMachine from './components/AccessibleSlotMachine';
import AccessibleCaseStudyCard from './components/AccessibleCaseStudyCard';

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

// Component moved to separate file for better maintainability

function HomePage() {
  const [showFullStory, setShowFullStory] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <header id="home" className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-muted-foreground mb-4 font-bold tracking-wide uppercase">
            This site was vibe coded
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative inline-block">
              AI-FIRST
              <div className="absolute bottom-0 left-0 w-full h-8 bg-accent/70 -z-10 transform -skew-x-6" aria-hidden="true"></div>
            </span>
            {" "}MARKETING
            <span className="block text-primary">LEADER</span>
          </h1>
          
          <div className="bg-secondary p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
            <p className="text-xl md:text-2xl font-semibold text-secondary-foreground">
              Leveraging Generative AI Since June 2020
            </p>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mt-2">
              AI • User Experience • GTM Innovation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('work')} 
              className="bg-primary text-primary-foreground text-lg font-bold px-8 py-4 transform hover:scale-105 transition-transform focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px]"
              aria-label="Navigate to my work section"
            >
              Explore My Work
            </button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('work')} 
          className="absolute bottom-8 animate-bounce focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] min-w-[44px]"
          aria-label="Scroll down to view my work"
        >
          <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
          </svg>
        </button>
      </header>

      {/* Work Section */}
      <main id="main-content">
      <section id="work" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">ABOUT THIS SITE</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm learning to vibe code and this is one of my <em>vibes</em>. It's a personal portfolio where I'm aiming for a Neo-Brutalist aesthetic, excellent performance, and usability. It's built entirely on Lovable as of August 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <article className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-accent mb-4" aria-hidden="true">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-muted-foreground mb-4">
                Two decades of experience at the intersection of marketing, technology, and UX.
              </p>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px]"
                aria-label="Navigate to background section"
              >
                View Background →
              </button>
            </article>

            <article className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-accent mb-4" aria-hidden="true">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
              <p className="text-muted-foreground mb-4">
                Real projects and technology implementations for recognizable brands.
              </p>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="w-full border-2 border-foreground bg-transparent text-foreground font-semibold py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px]"
                aria-label="Navigate to case studies section"
              >
                See Case Studies →
              </button>
            </article>

            <article className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300 bg-card p-6">
              <div className="text-accent mb-4" aria-hidden="true">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Writing</h3>
              <p className="text-muted-foreground mb-4">
                Insights and musings on artificial intelligence, marketing & content strategy, and user experience.
              </p>
              <button 
                onClick={() => scrollToSection('writing')} 
                className="w-full bg-secondary text-secondary-foreground font-semibold py-2 px-4 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px]"
                aria-label="Navigate to writing section"
              >
                Read Articles →
              </button>
            </article>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <article className="bg-primary/10 p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <span 
                  className="inline-flex bg-destructive text-destructive-foreground px-3 py-1 text-sm font-semibold mb-3"
                  aria-label="New highlight"
                >
                  NEW
                </span>
                <h4 className="text-xl font-bold mb-2 text-foreground">9.6X ROI with WRITER</h4>
                <p className="text-muted-foreground mb-4">
                  Led the platform discovery, roll out, and scale up of WRITER at Qualcomm Technologies.
                </p>
                <a 
                  href="https://writer.com/blog/qualcomm-customer-story/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] inline-flex items-center"
                  aria-label="Read WRITER case study - Opens in new tab"
                >
                  Read Case Study →
                </a>
              </article>
              
              <article className="bg-accent/10 p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <span 
                  className="inline-flex border-2 border-foreground bg-card text-foreground px-3 py-1 text-sm font-semibold mb-3"
                  aria-label="Featured highlight"
                >
                  FEATURED
                </span>
                <h4 className="text-xl font-bold mb-2 text-foreground">The UX Flywheel</h4>
                <p className="text-muted-foreground mb-4">
                  This is a user-centered alternative to the marketing funnel that I developed for Blink UX.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=UYApYNEnaMM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] inline-flex items-center"
                  aria-label="Watch UX Flywheel presentation on YouTube - Opens in new tab"
                >
                  Watch Presentation →
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Brutalist Separator - Zigzag Pattern */}
      <div className="relative overflow-hidden" role="presentation" aria-hidden="true">
        <div className="h-20 bg-gradient-to-br from-accent via-destructive to-primary relative">
          <div className="absolute inset-0 bg-background/30">
            <div className="h-full w-full bg-gradient-to-t from-foreground/10 to-transparent"></div>
          </div>
          {/* Decorative shapes that spill outside bounds */}
          <div className="absolute -top-3 left-8 w-12 h-16 bg-accent border-2 border-foreground transform -skew-y-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute top-2 left-24 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "3px", ["--p-y" as any]: "2px", ["--p-rot" as any]: "4deg" }}></div>
          <div className="absolute -bottom-2 left-40 w-16 h-6 bg-destructive border-2 border-foreground transform skew-x-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "-2px", ["--p-y" as any]: "2px", ["--p-rot" as any]: "-3deg" }}></div>
          <div className="absolute top-1 right-32 w-6 h-24 bg-secondary border-2 border-foreground transform rotate-30 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "-3px", ["--p-y" as any]: "-1px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute -bottom-4 right-16 w-10 h-10 bg-accent border-2 border-foreground transform -rotate-30 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "3px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "-4deg" }}></div>
          <div className="absolute -top-2 right-4 w-14 h-14 bg-primary border-4 border-foreground transform rotate-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "4px", ["--p-y" as any]: "-3px", ["--p-rot" as any]: "5deg" }}></div>
          <div className="absolute top-6 left-64 w-4 h-12 bg-secondary border-2 border-foreground transform -skew-x-30 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "1px", ["--p-y" as any]: "-1px", ["--p-rot" as any]: "2deg" }}></div>
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
                {["Strategic Marketing Leadership", "Human-Centered Design", "AI & Technology Strategy"].map((skill, index) => (
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
                        <li><strong>At Digitaria,</strong> I was the Executive Producer on the Qualcomm account where I had 5 direct reports plus a dynamic project team that sometimes scaled to 40 contributing resources. My team delivered several high-stakes projects that made Qualcomm an early adopter of cloud-computing and responsive design.</li>
                        <li><strong>At Digital Telepathy,</strong> I pivoted away from providing client services to marketing leadership. Our GTM strategy included the incubation — and eventual sale — of digital products (Slide Deck, Hello Bar, and Filament), and inbound marketing driven primarily by our blog which was recognized by <a href="https://designers.hubspot.com/blog/11-of-the-most-influential-ux-blogs-you-need-to-follow" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent underline inline">HubSpot</a> for its influence on the industry.</li>
                        <li><strong>At Blink,</strong> I opened and scaled a studio in San Diego — winning our first few clients and growing the team from 3 employees to 12. After stabilizing the new office, I overhauled our Engineering practice to reach profitability and led a rebrand project following the acquisition of Tectonic. Our account-based GTM strategy leveraged our beautiful studio to build relationships with local leaders from HP, Qualcomm, ServiceNow, and more by hosting meetups, workshops, and the occasional party.</li>
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
                      <h4 className="text-xl font-bold mb-3 text-primary">My unique blend of leadership</h4>
                      <p className="mb-4">My leadership approach bridges the gap between visionary strategy and tactical execution.</p>
                      <ul className="space-y-2 list-disc list-inside text-base mb-4">
                        <li><strong>I start with empathy.</strong> Understanding users, customers, and teammates is fuel for innovation.</li>
                        <li><strong>I make transformation tangible.</strong> Big bets only matter when they land in the real world.</li>
                        <li><strong>I let data guide me.</strong> Gut instincts spark ideas, but evidence earns decisions (and investment).</li>
                        <li><strong>I break silos.</strong> Collaboration isn't optional; it's a force-multiplier.</li>
                        <li><strong>I play the long game, balancing today's wins with tomorrow's advantage.</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-primary">Beyond the day job</h4>
                      <p>I am an ambassador for the San Diego / Tijuana design community, contributing to initiatives that shaped our region's recognition as World Design Capital 2024. I'm also an active member of San Diego Experience Design Professionals, where I participate in meetups and mentorship.</p>
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
          <div className="absolute -top-4 left-16 w-20 h-8 bg-secondary border-3 border-foreground transform -skew-x-12 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "-1px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute top-3 right-24 w-12 h-12 bg-primary border-4 border-foreground transform rotate-12 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "3px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "4deg" }}></div>
          <div className="absolute -bottom-3 right-8 w-16 h-16 bg-destructive border-3 border-foreground transform -rotate-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "4px", ["--p-y" as any]: "3px", ["--p-rot" as any]: "-5deg" }}></div>
          <div className="absolute top-1 left-48 w-6 h-18 bg-accent border-2 border-foreground transform skew-y-12 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "1px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "2deg" }}></div>
          <div className="absolute -top-1 left-72 w-18 h-4 bg-secondary border-2 border-foreground transform rotate-60 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "-1px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute bottom-2 left-96 w-8 h-10 bg-primary border-2 border-foreground transform -skew-y-30 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "1px", ["--p-rot" as any]: "-3deg" }}></div>
          <div className="absolute -bottom-2 right-40 w-5 h-14 bg-accent border-2 border-foreground transform rotate-75 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "1px", ["--p-y" as any]: "2px", ["--p-rot" as any]: "2deg" }}></div>
        </div>
      </div>

      {/* Writing Section */}
      <section id="writing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">THOUGHT LEADERSHIP</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">I believe that thought leadership is an act of generosity. Here is a collection of frameworks, playbooks, and other pieces of wisdom that I've shared thanks to the awesome power of the Internet.</p>
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
              <p className="text-muted-foreground mb-4">I led marketing at Blink UX for three years. This is a story that explains the design philosophy used to create product for NASA, Amazon, Microsoft , and other notable clients.</p>
              <span className="text-primary font-semibold">Read more →</span>
            </article>
          </div>
          
          {/* Slot Machine Carousel */}
          <div className="mt-16 max-w-4xl mx-auto">
            <AccessibleSlotMachine />
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
          <div className="absolute -top-6 left-12 w-16 h-16 bg-destructive border-4 border-foreground transform rotate-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "4px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "5deg" }}></div>
          <div className="absolute top-4 right-20 w-10 h-12 bg-accent border-3 border-foreground transform -skew-x-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "1px", ["--p-rot" as any]: "-3deg" }}></div>
          <div className="absolute -bottom-4 right-40 w-8 h-8 bg-primary border-2 border-foreground transform rotate-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "-2px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute top-1 left-32 w-22 h-6 bg-secondary border-2 border-foreground transform -skew-x-12 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "1px", ["--p-y" as any]: "1px", ["--p-rot" as any]: "-2deg" }}></div>
          <div className="absolute -top-2 left-64 w-6 h-18 bg-destructive border-2 border-foreground transform rotate-30 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "-1px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute bottom-1 right-8 w-12 h-4 bg-accent border-2 border-foreground transform skew-y-45 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "2px", ["--p-y" as any]: "1px", ["--p-rot" as any]: "3deg" }}></div>
          <div className="absolute -bottom-3 left-80 w-14 h-10 bg-primary border-3 border-foreground transform -rotate-60 transform-gpu will-change-[transform] transition-transform duration-300 ease-out hover:animate-parallax-hover motion-reduce:hover:animate-none motion-reduce:transition-none" style={{ ["--p-x" as any]: "-3px", ["--p-y" as any]: "2px", ["--p-rot" as any]: "-4deg" }}></div>
        </div>
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">CASE STUDIES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Software delivery (especially web-based applications) is one of my core competencies. These are a few successful projects and my client collaborators. Click in for more details about my contributions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AccessibleCaseStudyCard
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
              cardIndex={0}
            />
            
            <AccessibleCaseStudyCard
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
              cardIndex={1}
            />
            
            <AccessibleCaseStudyCard
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
              cardIndex={2}
            />
            
            <AccessibleCaseStudyCard
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
              cardIndex={3}
            />
            
            <AccessibleCaseStudyCard
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
              cardIndex={4}
            />
            
            <AccessibleCaseStudyCard
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
              cardIndex={5}
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
              
              <div className="border-4 border-foreground bg-card p-6">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "Brent is hands down the best manager I've had. He takes the time to understand you as a person so he can advocate for your growth in a way that aligns with company goals. He shares his expertise while being open to new ways of doing things. He's detail and process-orientated but leaves room for creativity. He's an excellent mentor, collaborator, and leader. My confidence as a marketer has grown 10x since he stepped in to lead the team."
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-foreground">Taylor Odgers</p>
                  <p className="text-sm text-muted-foreground">Marketing Lead, Metalab</p>
                </div>
              </div>
              
              <div className="border-4 border-foreground bg-card p-6">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "I had the immense good fortune to report to Brent on the marketing team at Blink UX. Though we have both moved on to other organizations, I am lucky to continue to call on him for counsel and mentorship. Brent is strategic, ambitious, and smart. He brings a degree of rigor and grit to his work that I am constantly trying to emulate. In addition to the high quality of the work he produces directly, he is a champion of true collaboration and professional growth. When I reported to Brent, I felt empowered to do my most bold and creative work, confident that he had my back in ways big and small. Any team would be lucky to have him."
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-foreground">Sara Keats</p>
                  <p className="text-sm text-muted-foreground">Marketing Manager, Blink</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/llms.txt" element={<LLMSTextPage />} />
          <Route path="/speaking-media" element={<SpeakingMediaPage />} />
        </Routes>
    </Router>
  );
}