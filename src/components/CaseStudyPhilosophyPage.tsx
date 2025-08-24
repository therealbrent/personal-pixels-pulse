import { Link } from 'react-router-dom';

export default function CaseStudyPhilosophyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="py-16 bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
              THREE AGENCIES,
              <span className="block text-primary">THREE CASE STUDY</span>
              <span className="block text-destructive">PHILOSOPHIES</span>
            </h1>
            
            <div className="bg-secondary p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-secondary-foreground">
                A decade of proving that case studies are strategic assets
              </p>
              <p className="text-lg md:text-xl text-secondary-foreground/80 mt-2">
                Different approaches for different contexts
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* The Storyteller */}
          <section className="mb-20">
            <div className="border-4 border-foreground bg-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-accent text-accent-foreground px-4 py-2 border-2 border-foreground font-bold text-lg mr-4">
                  01
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">THE STORYTELLER</h2>
              </div>
              
              <div className="bg-primary p-4 border-2 border-foreground mb-6">
                <p className="text-primary-foreground font-semibold text-lg">
                  Digital Telepathy (Acquired by ServiceNow, 2017)
                </p>
              </div>

              <p className="text-xl mb-6 text-foreground">
                <strong>Idea:</strong> Long-form, flagship case studies that we produced at Digital Telepathy. These editions are about projects that I led circa 2014.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <article className="border-4 border-foreground bg-muted/50 p-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Adventure.com</h3>
                  <p className="text-lg mb-4">A travel startup that captured the spirit of exploration.</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-destructive text-2xl">🏆</span>
                      <span className="font-semibold">Winner</span>
                      <a 
                        href="https://www.commarts.com/webpicks/adventure-com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        Comm Arts Webpick of the Week Pick of the Day
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-destructive text-2xl">🏆</span>
                      <span className="font-semibold">Winner</span>
                      <a 
                        href="https://www.awwwards.com/sites/adventure-com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        Awwwards Site of the Day
                      </a>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 border-2 border-foreground">
                    <p className="text-sm text-muted-foreground italic">
                      [SCREENSHOT - Will link to PDF]
                    </p>
                  </div>
                </article>

                <article className="border-4 border-foreground bg-muted/50 p-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Pivotal</h3>
                  <p className="text-lg mb-4">
                    The company that emerged when EMV, VMware, GE, and Pivotal Labs all joined forces.
                  </p>
                  <p className="text-base mb-6 italic">
                    Ten years later, I'm still pretty happy with how we approached this project.
                  </p>

                  <div className="bg-accent/10 p-4 border-2 border-foreground">
                    <p className="text-sm text-muted-foreground italic">
                      [SCREENSHOT - Will link to PDF]
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Brutalist Separator */}
          <div className="relative overflow-hidden mb-20" role="presentation" aria-hidden="true">
            <div className="h-16 bg-gradient-to-br from-destructive via-accent to-primary relative">
              <div className="absolute top-2 left-8 w-8 h-8 bg-secondary border-2 border-foreground transform rotate-45"></div>
              <div className="absolute -bottom-2 right-16 w-12 h-4 bg-accent border-2 border-foreground transform skew-x-45"></div>
            </div>
          </div>

          {/* The Systematizer */}
          <section className="mb-20">
            <div className="border-4 border-foreground bg-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 border-2 border-foreground font-bold text-lg mr-4">
                  02
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">THE SYSTEMATIZER</h2>
              </div>
              
              <div className="bg-destructive p-4 border-2 border-foreground mb-6">
                <p className="text-destructive-foreground font-semibold text-lg">
                  Blink UX
                </p>
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  <strong>Idea:</strong> Catalogue as many clients as possible to show breadth, plus deep-dives for depth within key accounts.
                </p>
                <p>
                  <strong>Distribution:</strong> Matching slide deck catalog used by Sellers when speaking with clients
                </p>
                
                <div className="bg-muted/50 p-6 border-2 border-foreground">
                  <p className="mb-4">
                    Blink UX is a research and product design firm established in 2000. Their client roster is seriously impressive and equally expansive. Project Mango was a rebrand and website design project launched in 2019, following a series of strategic acquisitions that included Tectonic and Redshift.
                  </p>
                  <p>
                    The site has evolved, and they've added new projects, but the content strategy and layout of its{' '}
                    <a 
                      href="https://blinkux.com/work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline font-semibold"
                    >
                      [Work]
                    </a>{' '}
                    remains mostly unchanged.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-4 border-foreground bg-accent/10 p-6">
                    <h3 className="text-xl font-bold mb-4 text-destructive">Scaling tiles</h3>
                    <p className="mb-4">
                      This masonry layout shows off many clients with just enough details to spark curiosity, priming users to scroll deep on the full-fledged case studies.
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-muted border border-foreground h-8 flex items-center justify-center text-xs">
                          PNG
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-4 border-foreground bg-primary/10 p-6">
                    <h3 className="text-xl font-bold mb-4 text-destructive">Industry catalog</h3>
                    <p className="mb-4">
                      Clients want assurances that you know their industry. We pored over MSAs to uncover all of the clients we had permission to disclose. It was worth the effort.
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-muted border border-foreground h-8 flex items-center justify-center text-xs">
                          PNG
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brutalist Separator */}
          <div className="relative overflow-hidden mb-20" role="presentation" aria-hidden="true">
            <div className="h-16 bg-gradient-to-br from-primary via-secondary to-destructive relative">
              <div className="absolute -top-2 right-8 w-10 h-10 bg-accent border-2 border-foreground transform -rotate-45"></div>
              <div className="absolute bottom-1 left-20 w-6 h-12 bg-primary border-2 border-foreground transform skew-y-12"></div>
            </div>
          </div>

          {/* The Showman */}
          <section className="mb-20">
            <div className="border-4 border-foreground bg-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-destructive text-destructive-foreground px-4 py-2 border-2 border-foreground font-bold text-lg mr-4">
                  03
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">THE SHOWMAN</h2>
              </div>
              
              <div className="bg-accent p-4 border-2 border-foreground mb-6">
                <p className="text-accent-foreground font-semibold text-lg">
                  Metalab
                </p>
              </div>

              <div className="space-y-6 text-lg">
                <p>
                  <strong>Idea:</strong> Visual presentation format matches brand personality
                </p>
                <p>
                  <strong>Distribution:</strong> On Pitch, a platform that Metalab designed. (Yes, it's meta).
                </p>
                
                <div className="bg-muted/50 p-6 border-2 border-foreground">
                  <p className="mb-4">
                    Metalab (nee MetaLab) is a product design studio headquartered in Victoria, Canada and a global footprint. You might not have known it at the time, but there's a good chance you've used a product they designed.
                  </p>
                  
                  <div className="text-center">
                    <a 
                      href="https://pitch.com/presentations/MetaLab---Product-design-case-studies--33PDEE3nSfwS5CQkiW2xdrQy?slide=7f0a08d9-0324-48b0-bd2a-cb6071f183ed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-4 border-primary bg-transparent text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-150 font-bold text-lg px-8 py-4 focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2"
                    >
                      Check out Metalab on Pitch
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center">
            <Link 
              to="/"
              className="border-4 border-secondary bg-transparent text-secondary hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-150 font-bold text-lg px-8 py-4 focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}