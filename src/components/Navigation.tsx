import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/writing", label: "Writing" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleDownloadResume = () => {
    // Create a dummy PDF download for now
    const link = document.createElement('a');
    link.href = '/llms.txt';
    link.download = 'resume.pdf';
    link.click();
  };

  const handleLLMsTxt = () => {
    window.open('/llms.txt', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary hover:text-accent transition-colors">
            BRENT SUMMERS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Button 
              onClick={handleDownloadResume}
              variant="destructive"
              size="sm"
              className="font-bold"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            
            <Button 
              onClick={handleLLMsTxt}
              variant="secondary"
              size="sm"
              className="font-bold"
            >
              <FileText className="w-4 h-4 mr-2" />
              LLMs.txt
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-foreground bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-semibold transition-colors hover:text-accent ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button 
                  onClick={handleDownloadResume}
                  variant="destructive"
                  size="sm"
                  className="w-full font-bold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                
                <Button 
                  onClick={handleLLMsTxt}
                  variant="secondary"
                  size="sm"
                  className="w-full font-bold"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  LLMs.txt
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};