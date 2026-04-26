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
                Brent Summers makes AI feel less like magic and more like muscle. He is the person you call when a big idea has to survive contact with a complex organization. Brent makes it useful, measurable, and real.
              </p>
              <p>
                As Head of AI Platforms & GTM Innovation at Qualcomm Technologies, Brent builds the operating models that turn generative AI from executive aspiration into everyday enterprise capability. His pioneering work helped establish Qualcomm's first approved enterprise generative AI platform, with adoption reaching 85% weekly active usage, approximately 2,400 hours saved per month, and an 8.6x ROI.
              </p>
              <p>
                He secured alignment across marketing, IT, and legal, turning a single department's experiment into a company-wide operating model that CMO Don McGuire is calling “Human Led. AI Powered.” Beyond AI, his go-to-market work includes an account-based marketing program tied to billions in influenced revenue, recognized with back-to-back 6sense Breakthrough Awards for “One Revenue Team” in 2023 and “Ad Campaign of the Year” in 2024.
              </p>
              <p>
                Known for creating frameworks that make ideas easier to see, shape, and ship, Brent created the Gen AI Use Case Canvas. The framework has been used more than 100 times at Qualcomm to define, pressure-test, and prepare AI use cases for implementation. It has been shared publicly on stages from Los Angeles to Sofia.
              </p>
              <p>
                Brent's advantage comes from a career path that refused to stay in one lane. He left college early and spent nearly seven years in IT at NASCAR, where he learned to translate technical complexity for humans before moving through B2B marketing and UX. He started experimenting with generative AI in 2020, years before it became boardroom shorthand.
              </p>
              <p>
                Brent's human-centered approach extends beyond Qualcomm. He is a Designer-in-Residence at the UC San Diego Design Lab, served as a Design Ambassador for World Design Capital 2024, and holds an executive education certificate from Northwestern University's Kellogg School of Management. A seven-time marathoner, he brings an endurance mindset to leadership and transformation.
              </p>
              <p>
                He speaks from the messy middle because that is where the people are. Not yet convinced. Not yet comfortable. But willing, if someone meets them there. Brent believes the best transformations are designed with people, not handed to them. Because the distance between a bold idea and a changed organization is always human.
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