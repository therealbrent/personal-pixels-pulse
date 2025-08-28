import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

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
      {/* Fragmented Grid Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" aria-hidden="true">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i}
              className={`
                border border-foreground/20
                ${i % 7 === 0 ? 'bg-[#FF1392]/30' : ''}
                ${i % 11 === 0 ? 'bg-[#FFBA08]/30' : ''}
                ${i % 13 === 0 ? 'bg-[#BD2928]/30' : ''}
                ${i % 17 === 0 ? 'bg-[#262626]/30' : ''}
                ${Math.random() > 0.8 ? 'transform rotate-45' : ''}
                ${Math.random() > 0.9 ? 'scale-75' : ''}
              `}
            />
          ))}
        </div>
        
        {/* Diagonal Elements */}
        <div className="absolute top-20 left-10 w-32 h-px bg-[#FF1392]/40 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-[#FFBA08]/40 transform -rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-px bg-[#BD2928]/40 transform rotate-12"></div>
        
        {/* Fragmented Corner Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 border-l-2 border-b-2 border-[#262626]/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-[#FF1392]/30"></div>
      </div>

      <div className="relative z-10">
        <Header />
      {/* Hero Section */}
      <header className="py-16 bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-tight">
              Three agencies.<br />
              <span className="text-primary">Three archives.</span><br />
              <span className="text-destructive">Three angles.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* The Storyteller - Digital Telepathy */}
          <section className="mb-32">
            <div className="bg-card border-4 border-foreground p-8 mb-8">
              <div className="flex items-center mb-8">
                <div className="bg-secondary text-secondary-foreground px-6 py-3 border-2 border-foreground font-bold text-xl mr-6">
                  01
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">THE STORYTELLER</h2>
              </div>
              
              <div className="bg-[#262626] text-white p-6 border-2 border-foreground mb-8">
                <p className="font-bold text-xl">
                  Digital Telepathy (Acquired by ServiceNow, 2017)
                </p>
                <p className="text-white/90 text-lg mt-2">
                  Long-form, flagship case studies from projects I led circa 2014
                </p>
              </div>

              <div className="bg-muted p-6 border-2 border-foreground mb-8">
                <p className="text-lg">
                  Digital Telepathy was a San Diego-based UX design agency founded in 2001 that specialized in creating meaningful customer experiences for mission-driven startups and established brands. For nearly 20 years, the company helped clients like New Relic, The Lean Startup, and Patagonia meet real business objectives by crafting meaningful experiences for their customers.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Adventure.com */}
                <article className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] transition-all duration-300">
                  <a 
                    href="https://drive.google.com/file/d/1DCmsAQEdF6aERUsTvE7ewHaqBVJYUdbe/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={adventureImage} 
                        alt="Adventure.com case study cover"
                        className="w-full h-auto object-contain group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
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
                      <img 
                        src={pivotalImage} 
                        alt="Pivotal case study cover"
                        className="w-full h-auto object-contain group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]"
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

          {/* Brutalist Separator */}
          <div className="relative overflow-hidden mb-32" role="presentation" aria-hidden="true">
            <div className="h-20 bg-gradient-to-br from-destructive via-accent to-primary relative">
              <div className="absolute top-2 left-8 w-8 h-8 bg-secondary border-2 border-foreground transform rotate-45"></div>
              <div className="absolute -bottom-2 right-16 w-12 h-4 bg-accent border-2 border-foreground transform skew-x-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary border-2 border-foreground"></div>
            </div>
          </div>

          {/* The Systematizer - Blink UX */}
          <section className="mb-32">
            <div className="bg-card border-4 border-foreground p-8 mb-8">
              <div className="flex items-center mb-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 border-2 border-foreground font-bold text-xl mr-6">
                  02
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">THE SYSTEMATIZER</h2>
              </div>
              
              <div className="bg-[#FFBA08] text-[#262626] p-6 border-2 border-foreground mb-8">
                <p className="font-bold text-xl">Blink UX</p>
                <p className="text-[#262626]/90 text-lg mt-2">
                  Catalog breadth + deep-dive depth strategy
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/50 p-6 border-2 border-foreground text-lg">
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

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="border-4 border-foreground bg-background group hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))] transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={blinkTilesImage} 
                        alt="Blink UX case study tiles layout"
                        className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300 group-hover:scale-[1.01]"
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
                      <img 
                        src={blinkCatalogImage} 
                        alt="Blink UX catalog layout"
                        className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300 group-hover:scale-[1.01]"
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

          {/* Brutalist Separator */}
          <div className="relative overflow-hidden mb-32" role="presentation" aria-hidden="true">
            <div className="h-20 bg-gradient-to-br from-primary via-secondary to-destructive relative">
              <div className="absolute -top-2 right-8 w-10 h-10 bg-accent border-2 border-foreground transform -rotate-45"></div>
              <div className="absolute bottom-1 left-20 w-6 h-12 bg-primary border-2 border-foreground transform skew-y-12"></div>
              <div className="absolute top-2 right-1/3 w-4 h-4 bg-destructive border-2 border-foreground transform rotate-12"></div>
            </div>
          </div>

          {/* The Showman - Metalab */}
          <section className="mb-32">
            <div className="bg-card border-4 border-foreground p-8 mb-8">
              <div className="flex items-center mb-8">
                <div className="bg-destructive text-destructive-foreground px-6 py-3 border-2 border-foreground font-bold text-xl mr-6">
                  03
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">THE SHOWMAN</h2>
              </div>
              
              <div className="bg-[#BD2928] text-white p-6 border-2 border-foreground mb-8">
                <p className="font-bold text-xl">Metalab</p>
                <p className="text-white/90 text-lg mt-2">
                  Visual presentation format matches brand personality
                </p>
              </div>

              <div className="bg-muted/50 p-6 border-2 border-foreground text-lg mb-8">
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
                      <img 
                        src={metalabImage} 
                        alt="Metalab case study presentation intro"
                        className="w-full h-auto transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]"
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
      <Footer />
      </div>
    </div>
  );
}