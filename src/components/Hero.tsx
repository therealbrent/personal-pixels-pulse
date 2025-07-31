import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Twitter, Github, Mail } from "lucide-react";
export const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-primary/10 to-accent/10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-foreground tracking-tight">
          B2B MARKETING
          <span className="block text-primary">LEADER</span>
        </h1>
        
        {/* Subheading */}
        <div className="bg-secondary p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 mb-8">
          <p className="text-xl md:text-2xl font-semibold text-secondary-foreground">5+ Years Experimenting with AI</p>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">AI • User Experience • GTM Innovation</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg font-bold px-8 py-4 transform hover:scale-105 transition-transform" onClick={() => document.getElementById('content')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Explore My Work
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg font-bold px-8 py-4 border-2 transform hover:scale-105 transition-transform" onClick={() => window.open('mailto:brent.j.summers@gmail.com')}>
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[{
          icon: Linkedin,
          href: "https://www.linkedin.com/in/brentjsummers/",
          label: "LinkedIn"
        }, {
          icon: Twitter,
          href: "https://x.com/brentsummers",
          label: "Twitter"
        }, {
          icon: Github,
          href: "https://github.com/therealbrent",
          label: "GitHub"
        }, {
          icon: Mail,
          href: "mailto:brent.j.summers@gmail.com",
          label: "Email"
        }].map(({
          icon: Icon,
          href,
          label
        }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border-2 border-foreground hover:bg-accent hover:text-accent-foreground transform hover:scale-110 transition-all duration-200" aria-label={label}>
              <Icon className="w-6 h-6" />
            </a>)}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToContent} className="absolute bottom-8 animate-bounce" aria-label="Scroll to content">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>;
};