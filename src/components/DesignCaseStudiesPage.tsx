import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Import images directly from lovable-uploads
const adventureImage = '/lovable-uploads/aedf8717-6d9f-440a-8bce-7ded3c64cbca.png';
const pivotalImage = '/lovable-uploads/5d37c594-4688-4963-aae3-611d78a940a5.png';
const metalabImage = '/lovable-uploads/e7ff4077-2802-4065-b22d-fe167b6941c6.png';

const blinkImages = [
  '/lovable-uploads/04afccd0-9d65-4b09-b981-549e70d2a9bf.png',
  '/lovable-uploads/2d64c2e7-8887-4846-9110-28041e96cc7f.png',
  '/lovable-uploads/bb04fe38-c2ec-4c6d-bbd9-6906708283e9.png',
  '/lovable-uploads/67c141a7-043c-48a7-bd50-4a7ba6ff4ad5.png',
  '/lovable-uploads/10dd7ade-35c9-4c1d-a783-3201f324b901.png',
  '/lovable-uploads/aa499bf3-7423-4f0f-bda7-26c9ae7a3539.png',
  '/lovable-uploads/60927b2e-7ff0-43b1-8eda-0f1fcd5fc50c.png'
];

const BlinkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blinkImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blinkImages.length) % blinkImages.length);
  };

  return (
    <div className="relative bg-muted/30 border-4 border-foreground overflow-hidden">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={blinkImages[currentIndex]} 
          alt={`Blink UX Portfolio ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-background/90 border-2 border-foreground p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="bg-background/90 border-2 border-foreground p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {blinkImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 border-2 border-foreground transition-colors ${
              index === currentIndex ? 'bg-accent' : 'bg-background/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function DesignCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="py-16 bg-gradient-to-br from-accent/20 via-primary/15 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-tight">
              THREE AGENCIES,<br />
              <span className="text-primary">THREE DESIGN</span><br />
              <span className="text-destructive">PHILOSOPHIES</span>
            </h1>
            
            <div className="bg-accent p-8 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
              <p className="text-xl md:text-2xl font-bold text-accent-foreground mb-2">
                A decade of proving that case studies are strategic assets
              </p>
              <p className="text-lg md:text-xl text-accent-foreground/80">
                Different approaches for different contexts
              </p>
            </div>
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
                <div className="bg-accent text-accent-foreground px-6 py-3 border-2 border-foreground font-bold text-xl mr-6">
                  01
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">THE STORYTELLER</h2>
              </div>
              
              <div className="bg-primary p-6 border-2 border-foreground mb-8">
                <p className="text-primary-foreground font-bold text-xl">
                  Digital Telepathy (Acquired by ServiceNow, 2017)
                </p>
                <p className="text-primary-foreground/90 text-lg mt-2">
                  Long-form, flagship case studies from projects I led circa 2014
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Adventure.com */}
                <article className="border-4 border-foreground bg-background transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={adventureImage} 
                      alt="Adventure.com case study cover"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Adventure.com</h3>
                    <p className="text-lg mb-6">A travel startup that captured the spirit of exploration.</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-destructive text-2xl mt-1">🏆</span>
                        <div>
                          <span className="font-semibold">Winner</span>{' '}
                          <a 
                            href="https://www.commarts.com/webpicks/adventure-com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
                          >
                            Comm Arts Webpick of the Week
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-destructive text-2xl mt-1">🏆</span>
                        <div>
                          <span className="font-semibold">Winner</span>{' '}
                          <a 
                            href="https://www.awwwards.com/sites/adventure-com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
                          >
                            Awwwards Site of the Day
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Pivotal */}
                <article className="border-4 border-foreground bg-background transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pivotalImage} 
                      alt="Pivotal case study cover"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Pivotal</h3>
                    <p className="text-lg mb-4">
                      The company that emerged when EMV, VMware, GE, and Pivotal Labs all joined forces.
                    </p>
                    <p className="text-base italic text-muted-foreground">
                      Ten years later, I'm still pretty happy with how we approached this project.
                    </p>
                  </div>
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
              
              <div className="bg-destructive p-6 border-2 border-foreground mb-8">
                <p className="text-destructive-foreground font-bold text-xl">Blink UX</p>
                <p className="text-destructive-foreground/90 text-lg mt-2">
                  Catalog breadth + deep-dive depth strategy
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                        className="text-primary hover:text-primary/80 underline font-semibold inline-flex items-center gap-1"
                      >
                        Work section
                        <ExternalLink className="w-4 h-4" />
                      </a>{' '}
                      remains mostly unchanged.
                    </p>
                  </div>
                </div>

                <BlinkCarousel />
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
              
              <div className="bg-accent p-6 border-2 border-foreground mb-8">
                <p className="text-accent-foreground font-bold text-xl">Metalab</p>
                <p className="text-accent-foreground/90 text-lg mt-2">
                  Visual presentation format matches brand personality
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg">
                  <p>
                    <strong>Idea:</strong> Visual presentation format matches brand personality
                  </p>
                  <p>
                    <strong>Distribution:</strong> On Pitch, a platform that Metalab designed. (Yes, it's meta).
                  </p>
                  
                  <div className="bg-muted/50 p-6 border-2 border-foreground">
                    <p className="mb-6">
                      Metalab (nee MetaLab) is a product design studio headquartered in Victoria, Canada with a global footprint. You might not have known it at the time, but there's a good chance you've used a product they designed.
                    </p>
                    
                    <a 
                      href="https://pitch.com/presentations/MetaLab---Product-design-case-studies--33PDEE3nSfwS5CQkiW2xdrQy?slide=7f0a08d9-0324-48b0-bd2a-cb6071f183ed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-4 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-150 font-bold text-lg px-8 py-4 focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 min-h-[44px] inline-flex items-center gap-2"
                    >
                      Check out Metalab on Pitch
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="border-4 border-foreground bg-background transform hover:scale-[1.02] transition-transform duration-300">
                  <a 
                    href="https://pitch.com/presentations/MetaLab---Product-design-case-studies--33PDEE3nSfwS5CQkiW2xdrQy?slide=7f0a08d9-0324-48b0-bd2a-cb6071f183ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <img 
                      src={metalabImage} 
                      alt="Metalab case study presentation intro"
                      className="w-full h-auto transition-opacity group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
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