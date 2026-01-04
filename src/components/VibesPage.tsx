import SEO from './SEO';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

interface VibeProject {
  id: string;
  title: string;
  description: string;
}

const vibeProjects: VibeProject[] = [
  {
    id: 'armcompatible',
    title: 'ArmCompatible.com',
    description: 'A comprehensive compatibility checker for Arm-based devices. Helps users verify software and hardware compatibility before making the switch.',
  },
  {
    id: 'earthquake-replay',
    title: 'Earthquake Replay',
    description: 'Interactive visualization of historical seismic events. Experience earthquake data through immersive replay and analysis tools.',
  },
  {
    id: 'snapdragon-ecosystem',
    title: 'Snapdragon Ecosystem Map',
    description: 'Visual exploration of the Snapdragon platform ecosystem. Discover partnerships, integrations, and the breadth of Qualcomm technology.',
  },
  {
    id: 'tbd-1',
    title: 'TBD',
    description: 'Coming soon. This project is currently in development and will be revealed shortly.',
  },
  {
    id: 'tbd-2',
    title: 'TBD',
    description: 'Coming soon. This project is currently in development and will be revealed shortly.',
  },
  {
    id: 'tbd-3',
    title: 'TBD',
    description: 'Coming soon. This project is currently in development and will be revealed shortly.',
  },
];

export default function VibesPage() {
  return (
    <>
      <SEO
        title="Vibes | Brent Summers"
        description="Vibe-coded projects and experimental builds by Brent Summers."
        ogImage="/og-images/home.png"
        canonicalUrl="/vibes"
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Vibes
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mt-4 max-w-2xl">
              Experimental projects built with vibe coding. Fast prototypes, bold ideas, and proof-of-concepts.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {vibeProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="brutalist-hover"
                  className="overflow-hidden"
                >
                  <AspectRatio ratio={16 / 9}>
                    <div className="w-full h-full bg-muted flex items-center justify-center border-b-4 border-foreground">
                      <span className="text-muted-foreground text-sm font-mono">
                        16:9 Screenshot
                      </span>
                    </div>
                  </AspectRatio>
                  <CardContent className="p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
