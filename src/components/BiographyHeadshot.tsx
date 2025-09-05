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
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text content - left aligned */}
          <div className="flex-1 text-left">
            <div className="space-y-6 text-foreground text-lg font-semibold leading-relaxed">
              <p>
                Brent Summers is an AI-first marketing leader. At Qualcomm Technologies, Brent leads AI Platforms & GTM Innovation which is a hybrid function combining strategic vision, technical implementation, and behavior change. He has deployed more than 20 AI agents which are embedded, governed, and scaled across the global marketing team. For instance, WRITER has delivered an impressive 8.6x ROI with 85% of users active every week.
              </p>
            </div>
          </div>
          
          {/* Image - right inset, with hover download button */}
          <div className="flex-shrink-0 w-full md:w-80 relative group">
            <LazyImage 
              src="/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png" 
              alt="Professional headshot of Brent Summers" 
              className="w-full h-auto border-4 border-foreground"
              width={320}
              height={400}
              priority
            />
            {/* Download button appears on hover - more vibrant */}
            <Button 
              onClick={handleDownloadHeadshot}
              className="absolute inset-x-4 bottom-4 bg-accent text-accent-foreground border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-sm font-black py-2 opacity-0 group-hover:opacity-100"
            >
              DOWNLOAD HEADSHOT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}