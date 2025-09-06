import { Button } from './ui/button';
import { LazyImage } from './LazyImage';

export default function BiographyHeadshot() {
  const handleDownloadHeadshot = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png';
    link.download = 'brent-summers-headshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="biography" className="mb-20">
      {/* Single bounding box with deep dropshadow */}
      <div className="max-w-7xl mx-auto bg-background border-8 border-foreground shadow-[16px_16px_0px_0px_hsl(var(--foreground))] p-8 md:p-12">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
          BIOGRAPHY & HEADSHOT
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Text content */}
          <div className="flex-1 text-left lg:pr-8">
            <div className="space-y-6 text-foreground text-lg font-semibold leading-relaxed">
              <p>
                Brent Summers is an AI-first marketing leader. At Qualcomm Technologies, Brent leads AI Platforms & GTM Innovation which is a hybrid function combining strategic vision, technical implementation, and behavior change. He has deployed more than 20 AI agents which are embedded, governed, and scaled across the global marketing team. For instance, WRITER has delivered an impressive 8.6x ROI with 85% of users active every week.
              </p>
            </div>
          </div>
          
          {/* Seamless headshot + button unit */}
          <div className="flex-shrink-0 w-full sm:w-56 lg:w-44 mx-auto lg:mx-0">
            {/* Single container with unified border - no gaps possible */}
            <div className="border-4 border-foreground bg-background shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
              {/* Image - no individual border, part of unified container */}
              <div className="block">
                <LazyImage 
                  src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
                  alt="Professional headshot of Brent Summers" 
                  className="w-full h-auto block"
                  width={160}
                  height={200}
                  priority
                />
              </div>
              
              {/* Button seamlessly attached - part of same container */}
              <Button 
                onClick={handleDownloadHeadshot}
                className="w-full bg-accent text-accent-foreground border-0 rounded-none hover:bg-accent/90 transition-colors duration-150 text-xs font-black py-2 px-3"
              >
                DOWNLOAD HEADSHOT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}