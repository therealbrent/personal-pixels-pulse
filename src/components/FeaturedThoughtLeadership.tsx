import { getFeaturedThoughtLeadership } from '@/data/thoughtLeadership';
import { Icon } from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedThoughtLeadership() {
  const featuredItems = getFeaturedThoughtLeadership();

  if (featuredItems.length === 0) return null;

  return (
    <section className="mb-16" aria-labelledby="featured-heading">
      {/* Header */}
      <div className="max-w-7xl mx-auto bg-accent border-8 border-foreground shadow-neo-xl p-6 md:p-8 mb-0">
        <h2 
          id="featured-heading" 
          className="text-2xl md:text-4xl font-black mb-3 text-white leading-tight"
        >
          FEATURED TALKS
        </h2>
        <p className="text-lg md:text-xl font-bold text-white/90 leading-relaxed">
          Top stages, biggest ideas. The presentations that defined the conversation.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto bg-background border-8 border-foreground shadow-neo-xl border-t-0 p-6 md:p-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredItems.map((item) => {
              const hasVideo = !!item.videoUrl;
              const clickUrl = hasVideo ? item.videoUrl : item.url;
              const venueText = Array.isArray(item.venue) ? item.venue[0] : item.venue;

              return (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href={clickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                    aria-label={`${item.title} at ${venueText}`}
                  >
                    <article className="h-full border-4 border-foreground bg-primary shadow-neo-md hover:shadow-neo-xs hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden relative">
                      {/* External Link Indicator */}
                      <div className="absolute top-5 right-5 z-10 opacity-40 group-hover:opacity-100 transition-opacity">
                        <Icon name="external-link" size={16} className="text-foreground group-hover:text-white transition-colors" />
                      </div>

                      {/* Image */}
                      {item.image && (
                        <div className="relative aspect-video overflow-hidden border-b-4 border-foreground">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 flex flex-col gap-3">
                        {/* Venue */}
                        {venueText && (
                          <div className="text-xs font-black tracking-wider text-primary-foreground/80 group-hover:text-white transition-colors uppercase">
                            {venueText}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-black text-primary-foreground group-hover:text-white transition-colors leading-tight line-clamp-3">
                          {item.title}
                        </h3>

                        {/* Topics */}
                        {item.topics && item.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-1 text-xs font-bold bg-foreground text-background border-2 border-foreground"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-auto pt-4">
                          <span className="text-primary-foreground group-hover:text-white font-black underline text-sm transition-colors inline-flex items-center gap-1">
                            {hasVideo ? 'Watch Video' : 'View Content'}
                            <Icon 
                              name="chevron-right" 
                              size={14} 
                              className="group-hover:text-white group-hover:translate-x-1 transition-all" 
                              aria-hidden="true" 
                            />
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 border-4 border-foreground shadow-neo-sm hover:shadow-neo-xs hover:translate-x-[2px] hover:translate-y-[2px]" />
            <CarouselNext className="static translate-y-0 border-4 border-foreground shadow-neo-sm hover:shadow-neo-xs hover:translate-x-[2px] hover:translate-y-[2px]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
