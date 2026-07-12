import { useState } from 'react';
import { Button } from './ui/button';
import { Icon } from './ui/icon';

const PRESS_KIT_URL =
  'https://drive.google.com/drive/folders/1_FtkrMYllWpWcanGL3oQTy6B0xmbcZwI?usp=sharing';

export default function BiographyHeadshot() {
  // Compressed preview for fast loading
  const previewHeadshot = '/lovable-uploads/brent-summers-headshot-min.png';

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="biography" className="mb-12 sm:mb-16 md:mb-20">
      {/* Single bounding box with deep dropshadow */}
      <div className="max-w-7xl mx-auto bg-background border-4 md:border-8 border-foreground shadow-neo-xl p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 text-center text-foreground transform hover:skew-y-1 transition-transform duration-300">
          BIOGRAPHY & HEADSHOT
        </h2>

        {/* Short / Long toggle */}
        <div
          role="tablist"
          aria-label="Biography length"
          className="flex justify-center mb-6 sm:mb-8 border-4 border-foreground w-fit mx-auto shadow-neo-sm"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isExpanded}
            onClick={() => setIsExpanded(false)}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors min-h-[44px] ${
              !isExpanded
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground hover:bg-primary'
            }`}
          >
            Short Bio
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isExpanded}
            onClick={() => setIsExpanded(true)}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors min-h-[44px] border-l-4 border-foreground ${
              isExpanded
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground hover:bg-primary'
            }`}
          >
            Full Bio
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Text content */}
          <div className="flex-1 text-left lg:pr-8">
            <div className="space-y-4 sm:space-y-6 text-foreground text-base sm:text-lg font-semibold leading-relaxed">
              {!isExpanded ? (
                <>
                  <p>
                    Brent Summers is Head of AI Platforms & GTM Innovation at Qualcomm Technologies, where he makes AI feel less like magic and more like muscle. His work established Qualcomm's first approved enterprise generative AI platform, achieving 85% weekly active usage, 2,400 hours saved monthly, and an 8.6x ROI.
                  </p>
                  <p>
                    Brent is also a Designer-in-Residence at the UC San Diego Design Lab and holds a Product Strategy certificate from Northwestern University's Kellogg School of Management. He speaks from the messy middle of enterprise transformation, because the distance between a bold idea and a changed organization is always human.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Brent Summers makes AI feel less like magic and more like muscle. He speaks from the messy middle of enterprise transformation, where bold ideas meet governance, legacy systems, skeptical teams, and the very human work of change.
                  </p>
                  <p>
                    As Head of AI Platforms & GTM Innovation at Qualcomm Technologies, Brent turns executive aspiration into everyday enterprise capability. His pioneering work helped establish Qualcomm's first approved enterprise generative AI platform, with adoption reaching 85% weekly active usage, 2,400 hours saved per month, and an 8.6x ROI. By securing alignment across marketing, IT, and legal, a single department's experiment has become a transformation effort that Qualcomm CMO Don McGuire has coined “Human Led. AI Powered.”
                  </p>
                  <p>
                    His broader go-to-market work includes an account-based marketing program tied to billions in revenue and recognized with back-to-back 6sense Breakthrough Awards for “One Revenue Team” in 2023 and “Ad Campaign of the Year” in 2024.
                  </p>
                  <p>
                    Known for frameworks that make ideas easier to see, shape, and ship, Brent created the Gen AI Use Case Canvas to define, pressure-test, and prepare AI use cases for implementation. Used more than 100 times at Qualcomm, the framework has also been shared publicly on stages from San Diego to Sofia.
                  </p>
                  <p>
                    Brent's advantage comes from a career path that refused to stay in one lane. He left college early and spent nearly seven years in IT at NASCAR, where he learned to make complex systems work under real-world pressure. He moved to California in 2011, pivoted into marketing and UX, and began experimenting with generative AI in 2020 — years before it became boardroom shorthand.
                  </p>
                  <p>
                    Brent's human-centered approach extends beyond Qualcomm, including his role as Designer-in-Residence at the UC San Diego Design Lab and as a Design Ambassador for World Design Capital 2024. He holds a Product Strategy certificate from Northwestern University's Kellogg School of Management.
                  </p>
                  <p>
                    A seven-time marathoner, Brent brings an endurance mindset to leadership and transformation. He believes the distance between a bold idea and a changed organization is always human.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6">
              <Button
                onClick={() => setIsExpanded((v) => !v)}
                variant="brutalist-accent"
                className="text-xs sm:text-sm"
                aria-expanded={isExpanded}
                aria-controls="biography"
              >
                {isExpanded ? 'Show Short Bio ↑' : 'Read Full Bio ↓'}
              </Button>
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
              <a
                href={PRESS_KIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-1.5 text-center bg-accent text-accent-foreground border-0 hover:bg-accent/90 transition-colors duration-150 text-[10px] sm:text-xs font-black py-2 px-2 sm:px-3 no-underline min-h-[40px]"
                style={{ margin: 0, borderRadius: 0 }}
              >
                VIEW PRESS KIT
                <Icon name="external-link" size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}