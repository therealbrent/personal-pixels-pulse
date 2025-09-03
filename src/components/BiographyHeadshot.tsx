import { useState } from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export default function BiographyHeadshot() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownloadHeadshot = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png';
    link.download = 'brent-summers-headshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="biography" className="mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Single bounding box with deep drop shadow */}
        <div className="bg-background border-8 border-foreground shadow-[16px_16px_0px_0px_hsl(var(--foreground))] p-8 md:p-12">
          
          {/* Flex container for desktop layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            
            {/* Biography Text - Left aligned, takes up more space */}
            <div className="md:flex-1 md:pr-8">
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-foreground">
                BIOGRAPHY & HEADSHOT
              </h2>
              <div className="space-y-6 text-foreground text-base md:text-lg font-semibold leading-relaxed">
                <p>
                  Brent Summers is an AI-first marketing leader. At Qualcomm Technologies, Brent leads AI Platforms & GTM Innovation which is a hybrid function combining strategic vision, technical implementation, and behavior change. He has deployed more than 20 AI agents which are embedded, governed, and scaled across the global marketing team. For instance, WRITER has delivered an impressive 8.6x ROI with 85% of users active every week.
                </p>
              </div>
            </div>

            {/* Headshot - Right inset, scales down on mobile */}
            <div className="md:w-80 md:flex-shrink-0">
              <div 
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img 
                  src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
                  alt="Professional headshot of Brent Summers" 
                  className="w-full max-w-sm md:max-w-none border-4 border-foreground transition-all duration-200"
                />
                
                {/* Download button - appears on hover */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button 
                    onClick={handleDownloadHeadshot}
                    className="bg-primary text-primary-foreground border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-black"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD HEADSHOT
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-foreground/70 text-center mt-4 font-bold">
                High-resolution headshot available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}