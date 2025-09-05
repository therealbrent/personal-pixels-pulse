import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { LazyImage } from './LazyImage';

// Import images directly from lovable-uploads
const adventureImage = '/lovable-uploads/aedf8717-6d9f-440a-8bce-7ded3c64cbca.png';
const pivotalImage = '/lovable-uploads/5d37c594-4688-4963-aae3-611d78a940a5.png';
const metalabImage = '/lovable-uploads/e7ff4077-2802-4065-b22d-fe167b6941c6.png';

// Blink images - keeping only Catalog 1 and Tiles 1
const blinkCatalogImage = '/lovable-uploads/04afccd0-9d65-4b09-b981-549e70d2a9bf.png';
const blinkTilesImage = '/lovable-uploads/67c141a7-043c-48a7-bd50-4a7ba6ff4ad5.png';

export default function DesignCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Enhanced Fragmented Grid Background - Simplified for mobile */}
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none z-0 hidden md:block" aria-hidden="true">
        {/* Main Layered Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-16 grid-rows-12 gap-px">
          {Array.from({ length: 192 }).map((_, i) => {
            const isHotPink = i % 7 === 0;
            const isMustard = i % 11 === 0;
            const isCrimson = i % 13 === 0;
            const isOnyx = i % 17 === 0;
            const isCluster = i % 23 === 0;
            const isAccent = i % 19 === 0;
            
            return (
              <div 
                key={i}
                className={`
                  border border-foreground/30 transition-all duration-1000
                  ${isHotPink ? 'bg-[#FF1392]/60 border-[#FF1392]/80' : ''}
                  ${isMustard ? 'bg-[#FFBA08]/70 border-[#FFBA08]/90' : ''}
                  ${isCrimson ? 'bg-[#BD2928]/65 border-[#BD2928]/85' : ''}
                  ${isOnyx ? 'bg-[#262626]/80 border-[#262626]/90' : ''}
                  ${isCluster ? 'bg-gradient-to-br from-[#FF1392]/40 to-[#BD2928]/40' : ''}
                  ${isAccent ? 'bg-gradient-to-tl from-[#FFBA08]/50 to-[#262626]/30' : ''}
                  ${i % 5 === 0 ? 'transform rotate-12 scale-110' : ''}
                  ${i % 8 === 0 ? 'transform -rotate-45 scale-90' : ''}
                  ${i % 12 === 0 ? 'transform skew-x-12' : ''}
                  ${i % 15 === 0 ? 'transform rotate-90 scale-75' : ''}
                  ${Math.random() > 0.85 ? 'animate-pulse' : ''}
                `}
                style={{
                  animationDelay: `${i * 0.05}s`,
                  transformOrigin: 'center center'
                }}
              />
            );
          })}
        </div>
        
        {/* Secondary Overlay Grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 opacity-40">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={`overlay-${i}`}
              className={`
                ${i % 3 === 0 ? 'border-l-4 border-[#FF1392]/70' : ''}
                ${i % 5 === 0 ? 'border-r-4 border-[#FFBA08]/80' : ''}
                ${i % 7 === 0 ? 'border-t-4 border-[#BD2928]/75' : ''}
                ${i % 9 === 0 ? 'border-b-4 border-[#262626]/60' : ''}
                ${i % 11 === 0 ? 'bg-gradient-to-br from-[#FF1392]/20 via-transparent to-[#BD2928]/20' : ''}
              `}
            />
          ))}
        </div>
        
        {/* Complex Diagonal Patterns */}
        <div className="absolute inset-0">
          {/* Primary Diagonal Lines */}
          <div className="absolute top-16 left-8 w-48 h-0.5 bg-gradient-to-r from-[#FF1392]/80 to-[#BD2928]/60 transform rotate-45 shadow-lg"></div>
          <div className="absolute top-32 right-16 w-64 h-0.5 bg-gradient-to-l from-[#FFBA08]/90 to-[#262626]/70 transform -rotate-30 shadow-lg"></div>
          <div className="absolute bottom-40 left-1/4 w-56 h-0.5 bg-gradient-to-r from-[#BD2928]/85 to-[#FF1392]/65 transform rotate-15 shadow-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-0.5 bg-gradient-to-l from-[#262626]/80 to-[#FFBA08]/60 transform -rotate-60 shadow-lg"></div>
          
          {/* Secondary Diagonal Network */}
          <div className="absolute top-24 left-1/3 w-32 h-px bg-[#FF1392]/60 transform rotate-75"></div>
          <div className="absolute bottom-28 right-1/4 w-28 h-px bg-[#FFBA08]/70 transform -rotate-15"></div>
          <div className="absolute top-3/4 left-16 w-36 h-px bg-[#BD2928]/65 transform rotate-105"></div>
          <div className="absolute bottom-16 right-12 w-44 h-px bg-[#262626]/75 transform -rotate-75"></div>
        </div>
        
        {/* Geometric Anchor Points */}
        <div className="absolute inset-0">
          {/* Top corners */}
          <div className="absolute top-0 right-0 w-24 h-24 border-l-4 border-b-4 border-[#262626]/60 bg-gradient-to-bl from-[#FF1392]/20 to-transparent"></div>
          <div className="absolute top-8 left-8 w-16 h-16 border-r-4 border-b-4 border-[#FFBA08]/70 bg-[#FFBA08]/10 transform rotate-45"></div>
          
          {/* Bottom corners */}
          <div className="absolute bottom-0 left-0 w-20 h-20 border-r-4 border-t-4 border-[#FF1392]/80 bg-gradient-to-tr from-[#BD2928]/25 to-transparent"></div>
          <div className="absolute bottom-12 right-12 w-28 h-28 border-l-4 border-t-4 border-[#BD2928]/70 bg-[#262626]/15 transform -rotate-12"></div>
          
          {/* Center focal points */}
          <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-[#FF1392]/40 border-2 border-[#262626]/80 transform rotate-45 shadow-lg"></div>
          <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-[#FFBA08]/60 border-2 border-[#BD2928]/70 transform -rotate-30"></div>
          
          {/* Scattered accent shapes */}
          <div className="absolute top-1/4 right-1/4 w-6 h-20 bg-gradient-to-b from-[#BD2928]/50 to-transparent transform rotate-25"></div>
          <div className="absolute bottom-1/4 left-1/5 w-20 h-6 bg-gradient-to-r from-[#262626]/60 to-transparent transform -rotate-35"></div>
        </div>
        
        {/* High-contrast overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF1392]/30 via-[#FFBA08]/40 to-[#BD2928]/35"></div>
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-[#262626]/50 via-[#BD2928]/40 to-[#FF1392]/30"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FFBA08]/40 via-[#262626]/30 to-[#BD2928]/35"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#BD2928]/45 via-[#FF1392]/35 to-[#FFBA08]/40"></div>
        </div>
      </div>

      {/* Mobile-friendly simplified background */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 block md:hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF1392]/20 via-[#FFBA08]/15 to-[#BD2928]/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF1392]/60 to-[#BD2928]/60"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#262626]/60 to-[#FFBA08]/60"></div>
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <header className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto perspective-1000">
            <div className="transform-style-3d mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight space-y-2 md:space-y-4">
                <div className="block transform md:rotate-x-12 md:translate-z-20 animate-fade-in text-foreground hover:md:translate-z-40 transition-all duration-700">
                  Three agencies.
                </div>
                <div className="block transform md:rotate-x-6 md:rotate-y-3 md:translate-z-10 animate-fade-in text-primary hover:md:translate-z-30 transition-all duration-700" style={{animationDelay: '0.2s'}}>
                  <span className="text-primary">Three archives.</span>
                </div>
                <div className="block transform md:rotate-x-3 md:rotate-y-minus-2 md:translate-z-0 animate-fade-in text-destructive hover:md:translate-z-20 transition-all duration-700" style={{animationDelay: '0.4s'}}>
                  <span className="text-destructive">Three angles.</span>
                </div>
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium animate-fade-in" style={{animationDelay: '0.6s'}}>
              Communicating the value of design is a unique challenge.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* The Storyteller - Digital Telepathy */}
          <section className="mb-12 md:mb-16">
            <div className="bg-card border-4 border-foreground p-4 md:p-8 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8 gap-3 md:gap-0">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 md:px-6 md:py-3 border-2 border-foreground font-bold text-lg md:text-xl sm:mr-6 self-start">
                  01
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">THE STORYTELLER</h2>
              </div>
              
              <div className="bg-[#262626] text-white p-4 md:p-6 border-2 border-foreground mb-6 md:mb-8">
                <p className="font-bold text-lg md:text-xl">
                  Digital Telepathy (Acquired by ServiceNow, 2017)
                </p>
                <p className="text-white/90 text-base md:text-lg mt-2">
                  Long-form, flagship case studies from projects I led circa 2014
                </p>
              </div>

              <div className="bg-muted p-4 md:p-6 border-2 border-foreground mb-6 md:mb-8">
                <p className="text-base md:text-lg">
                  Digital Telepathy was a San Diego-based UX design agency founded in 2001 that specialized in creating meaningful customer experiences for mission-driven startups and established brands. For nearly 20 years, the company helped clients like New Relic, The Lean Startup, and Patagonia meet real business objectives by crafting meaningful experiences for their customers.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
                {/* Adventure.com */}
                <article className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] transition-all duration-300">
                  <a 
                    href="https://drive.google.com/file/d/1DCmsAQEdF6aERUsTvE7ewHaqBVJYUdbe/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={adventureImage} 
                        alt="Adventure.com case study cover"
                        className="w-full h-auto object-contain group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
                        width={600}
                        height={400}
                        priority
                      />
                      
                      {/* Geometric Overlay Elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF1392] opacity-0 group-hover:opacity-80 transition-all duration-300 transform rotate-45 group-hover:rotate-12" aria-hidden="true"></div>
                      <div className="absolute bottom-6 left-6 w-6 h-6 border-2 border-[#FFBA08] opacity-0 group-hover:opacity-90 transition-all duration-500 transform group-hover:rotate-45" aria-hidden="true"></div>
                      
                      {/* Context Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="bg-[#FF1392] px-3 py-1 text-sm font-bold inline-block transform -skew-x-12 mb-2">
                            TRAVEL • STARTUP
                          </div>
                          <p className="text-sm leading-tight">Interactive prototype capturing the spirit of exploration</p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">Adventure.com</h3>
                      <p className="text-lg mb-6">A travel startup that captured the spirit of exploration.</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-[#FF1392] text-white px-2 py-1 text-xs font-bold transform -skew-x-12 border-2 border-foreground">
                            WIN
                          </div>
                          <div>
                            <span className="font-semibold">Winner</span>{' '}
                            <span className="text-primary underline inline-flex items-center gap-1">
                              Comm Arts Webpick of the Week
                              <ExternalLink className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-[#FFBA08] text-[#262626] px-2 py-1 text-xs font-bold transform -skew-x-12 border-2 border-foreground">
                            WIN
                          </div>
                          <div>
                            <span className="font-semibold">Winner</span>{' '}
                            <span className="text-primary underline inline-flex items-center gap-1">
                              Awwwards Site of the Day
                              <ExternalLink className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>

                {/* Pivotal */}
                <article className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--destructive))] transition-all duration-300">
                  <a 
                    href="https://drive.google.com/file/d/1Vmkol5Fw5PyBCS_uX3ABdB2DkgHCWx63/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={pivotalImage} 
                        alt="Pivotal case study cover"
                        className="w-full h-auto object-contain group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
                        width={600}
                        height={400}
                        priority
                      />
                      
                      {/* Geometric Overlay Elements */}
                      <div className="absolute top-6 left-4 w-6 h-6 bg-[#BD2928] opacity-0 group-hover:opacity-80 transition-all duration-400 transform rotate-12 group-hover:rotate-90" aria-hidden="true"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-[#262626] opacity-0 group-hover:opacity-90 transition-all duration-300 transform group-hover:rotate-45" aria-hidden="true"></div>
                      
                      {/* Context Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="bg-[#BD2928] px-3 py-1 text-sm font-bold inline-block transform -skew-x-12 mb-2">
                            ENTERPRISE • PLATFORM
                          </div>
                          <p className="text-sm leading-tight">Strategic brand evolution for enterprise transformation</p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">Pivotal</h3>
                      <p className="text-lg mb-4">
                        The company that emerged when EMV, VMware, GE, and Pivotal Labs all joined forces.
                      </p>
                      <p className="text-base italic text-muted-foreground">
                        Ten years later, I'm still pretty happy with how we approached this project.
                      </p>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </section>


          {/* The Systematizer - Blink UX */}
          <section className="mb-12 md:mb-16">
            <div className="bg-card border-4 border-foreground p-4 md:p-8 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8 gap-3 md:gap-0">
                <div className="bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3 border-2 border-foreground font-bold text-lg md:text-xl sm:mr-6 self-start">
                  02
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">THE SYSTEMATIZER</h2>
              </div>
              
              <div className="bg-[#FFBA08] text-[#262626] p-4 md:p-6 border-2 border-foreground mb-6 md:mb-8">
                <p className="font-bold text-lg md:text-xl">Blink UX</p>
                <p className="text-[#262626]/90 text-base md:text-lg mt-2">
                  Catalog breadth + deep-dive depth strategy
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="bg-muted/50 p-4 md:p-6 border-2 border-foreground text-base md:text-lg">
                  <p className="mb-4">
                    Blink UX is a research and product design firm established in 2000. Their client roster is seriously impressive and equally expansive. Following a series of strategic acquisitions, we rebranded the company and launched a new website. Although the site has evolved, the information architecture, user experience, and content strategy for its{' '}
                    <a 
                      href="https://blinkux.com/work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline font-semibold inline-flex items-center gap-1"
                    >
                      Work
                      <ExternalLink className="w-4 h-4" />
                    </a>{' '}
                    section remains mostly unchanged.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))] transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={blinkTilesImage} 
                        alt="Blink UX case study tiles layout"
                        className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300 group-hover:scale-[1.01]"
                        width={600}
                        height={400}
                      />
                      
                      {/* Geometric Elements */}
                      <div className="absolute top-4 right-4 w-6 h-6 border-2 border-[#FFBA08] opacity-0 group-hover:opacity-70 transition-all duration-300 transform group-hover:rotate-12" aria-hidden="true"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#262626] opacity-0 group-hover:opacity-60 transition-all duration-400 transform rotate-45" aria-hidden="true"></div>
                      
                      {/* Context Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="bg-[#FFBA08] text-[#262626] px-2 py-1 text-xs font-bold inline-block transform -skew-x-12">
                            TILES LAYOUT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))] transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={blinkCatalogImage} 
                        alt="Blink UX catalog layout"
                        className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300 group-hover:scale-[1.01]"
                        width={600}
                        height={400}
                      />
                      
                      {/* Geometric Elements */}
                      <div className="absolute top-6 left-4 w-4 h-4 bg-[#FFBA08] opacity-0 group-hover:opacity-70 transition-all duration-300 transform group-hover:rotate-90" aria-hidden="true"></div>
                      <div className="absolute bottom-6 right-4 w-6 h-6 border-2 border-[#262626] opacity-0 group-hover:opacity-60 transition-all duration-400 transform group-hover:-rotate-45" aria-hidden="true"></div>
                      
                      {/* Context Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="bg-[#FFBA08] text-[#262626] px-2 py-1 text-xs font-bold inline-block transform -skew-x-12">
                            CATALOG VIEW
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* The Showman - Metalab */}
          <section className="mb-12 md:mb-16">
            <div className="bg-card border-4 border-foreground p-4 md:p-8 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8 gap-3 md:gap-0">
                <div className="bg-destructive text-destructive-foreground px-4 py-2 md:px-6 md:py-3 border-2 border-foreground font-bold text-lg md:text-xl sm:mr-6 self-start">
                  03
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">THE SHOWMAN</h2>
              </div>
              
              <div className="bg-[#BD2928] text-white p-4 md:p-6 border-2 border-foreground mb-6 md:mb-8">
                <p className="font-bold text-lg md:text-xl">Metalab</p>
                <p className="text-white/90 text-base md:text-lg mt-2">
                  Visual presentation format matches brand personality
                </p>
              </div>

              <div className="bg-muted/50 p-4 md:p-6 border-2 border-foreground text-base md:text-lg mb-6 md:mb-8">
                <p>
                  Metalab (née MetaLab) is a product design studio headquartered in Victoria, Canada with a global footprint. You might not have known it at the time, but there's a good chance you've used a product they designed — like Slack, Loom. Instacart, Uber, and countless more.{' '}
                  <a 
                    href="https://pitch.com/presentations/MetaLab---Product-design-case-studies--33PDEE3nSfwS5CQkiW2xdrQy?slide=2ffcc700-4489-4cf5-9930-45d117a3dd8d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline font-semibold inline-flex items-center gap-1"
                  >
                    Check out Metalab on Pitch
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  .
                </p>
              </div>

              <div className="flex justify-center">
                <div className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--destructive))] transition-all duration-300">
                  <a 
                    href="https://pitch.com/presentations/MetaLab---Product-design-case-studies--33PDEE3nSfwS5CQkiW2xdrQy?slide=7f0a08d9-0324-48b0-bd2a-cb6071f183ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={metalabImage} 
                        alt="Metalab case study presentation intro"
                        className="w-full h-auto transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]"
                        width={600}
                        height={400}
                      />
                      
                      {/* Geometric Overlay Elements */}
                      <div className="absolute top-6 right-6 w-8 h-8 border-2 border-[#BD2928] opacity-0 group-hover:opacity-80 transition-all duration-300 transform rotate-45 group-hover:-rotate-12" aria-hidden="true"></div>
                      <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#FF1392] opacity-0 group-hover:opacity-70 transition-all duration-400 transform group-hover:rotate-90" aria-hidden="true"></div>
                      
                      {/* Context Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <div className="bg-[#BD2928] px-3 py-1 text-sm font-bold inline-block transform -skew-x-12 mb-2">
                            PRODUCT • DESIGN
                          </div>
                          <p className="text-sm leading-tight">Interactive presentation showcasing product design mastery</p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home */}
        </div>
      </main>
      </div>
    </div>
  );
}