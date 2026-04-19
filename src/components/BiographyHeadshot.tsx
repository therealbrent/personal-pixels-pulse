import { Button } from './ui/button';
import { LazyImage } from './LazyImage';

export default function BiographyHeadshot() {
  // High-res version for download
  const highResHeadshot = '/lovable-uploads/9959ce8e-73ea-47e3-bc81-9d168352a30a.png';
  // Compressed preview for fast loading
  const previewHeadshot = '/lovable-uploads/brent-summers-headshot-min.png';
  
  const handleDownloadHeadshot = () => {
    const link = document.createElement('a');
    link.href = highResHeadshot;
    link.download = 'brent-summers-headshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="biography" className="mb-12 sm:mb-16 md:mb-20">
      {/* Single bounding box with deep dropshadow */}
      <div className="max-w-7xl mx-auto bg-background border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
          BIOGRAPHY & HEADSHOT
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Text content */}
          <div className="flex-1 text-left lg:pr-8">
            <div className="space-y-4 sm:space-y-6 text-foreground text-base sm:text-lg font-semibold leading-relaxed">
              <p>
                Brent Summers is an AI-powered marketing leader who sits at the intersection of strategy, systems, and behavior change. At Qualcomm Technologies, he leads AI Platforms & GTM Innovation, helping turn generative AI from executive curiosity into enterprise capability. His work has helped drive 85% weekly active usage and an 8.6x ROI for WRITER, while also building account-based marketing programs that have influenced billions in pipeline. Brent's edge is practical transformation: connecting platforms, workflows, governance, and human adoption so that AI actually gets used.
              </p>
              <p>
                Before Qualcomm, Brent built his career in UX and digital strategy including work that led to the creation of the UX Flywheel — a user-centered alternative to the marketing funnel. That background still shapes his point of view today: the best technology stories are also design stories, operating-model stories, and human stories.
              </p>
              <p>
                A sought-after speaker and moderator, Brent speaks on AI adoption, modern B2B marketing, design, and transformation. He is known for making complex concepts feel tangible and credible by providing useful frameworks for tackling the messy middle between experimentation and scale.
              </p>
            </div>
          </div>
          
          {/* Zero-gap headshot + button unit */}
          <div className="flex-shrink-0 w-48 sm:w-56 lg:w-44 mx-auto lg:mx-0">
            {/* Bulletproof container - zero gaps possible */}
            <div className="border-2 sm:border-4 border-foreground bg-background shadow-neo-sm overflow-hidden">
              {/* Image with forced exact fit - no gaps - using compressed preview */}
              <img 
                src={previewHeadshot}
                alt="Professional headshot of Brent Summers" 
                className="w-full h-auto block m-0 p-0 border-0"
                style={{ display: 'block', margin: 0, padding: 0, border: 'none', verticalAlign: 'top' }}
                width={160}
                height={200}
                loading="eager"
              />
              
              {/* Button directly attached - zero gap */}
              <Button 
                onClick={handleDownloadHeadshot}
                className="w-full bg-accent text-accent-foreground border-0 rounded-none hover:bg-accent/90 transition-colors duration-150 text-[10px] sm:text-xs font-black py-2 px-2 sm:px-3 m-0"
                style={{ margin: 0, borderRadius: 0 }}
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