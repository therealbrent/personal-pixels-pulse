import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const writings = [
  {
    id: 1,
    title: "The Future of AI in B2B Marketing: 5 Predictions for 2024",
    description: "Exploring emerging AI trends that will reshape how B2B marketers approach customer acquisition and retention.",
    publication: "Marketing AI Weekly",
    date: "Dec 2023",
    readTime: "8 min read",
    tags: ["AI", "B2B Marketing", "Predictions"],
    url: "https://example.com/ai-marketing-predictions-2024",
    featured: true
  },
  {
    id: 2,
    title: "Implementing Ethical AI in Marketing Operations",
    description: "A practical guide to building responsible AI systems that respect customer privacy while delivering personalized experiences.",
    publication: "TechCrunch",
    date: "Nov 2023",
    readTime: "12 min read",
    tags: ["AI Ethics", "Privacy", "Marketing Operations"],
    url: "https://example.com/ethical-ai-marketing",
    featured: true
  },
  {
    id: 3,
    title: "From Gut Feeling to Data-Driven: My Journey with AI-Powered Marketing",
    description: "Personal reflections on transitioning from traditional marketing intuition to AI-assisted decision making.",
    publication: "LinkedIn",
    date: "Oct 2023",
    readTime: "6 min read",
    tags: ["Personal Journey", "Data-Driven Marketing", "AI Adoption"],
    url: "https://linkedin.com/pulse/ai-marketing-journey",
    featured: false
  },
  {
    id: 4,
    title: "Building High-Converting Landing Pages with AI-Generated Content",
    description: "Case study showing how GPT-4 and Claude helped increase conversion rates by 40% across multiple campaigns.",
    publication: "ConversionXL",
    date: "Sep 2023",
    readTime: "10 min read",
    tags: ["Conversion Optimization", "AI Content", "Landing Pages"],
    url: "https://example.com/ai-landing-pages",
    featured: false
  },
  {
    id: 5,
    title: "The ROI of AI Marketing Tools: A 12-Month Analysis",
    description: "Detailed breakdown of costs, time savings, and revenue impact from implementing various AI marketing tools.",
    publication: "Marketing Land",
    date: "Aug 2023",
    readTime: "15 min read",
    tags: ["ROI Analysis", "Marketing Tools", "Case Study"],
    url: "https://example.com/ai-marketing-roi",
    featured: false
  },
  {
    id: 6,
    title: "User Experience Principles for AI-Powered Marketing Interfaces",
    description: "How UX design principles apply to AI-driven marketing dashboards and customer-facing AI experiences.",
    publication: "UX Magazine",
    date: "Jul 2023",
    readTime: "9 min read",
    tags: ["UX Design", "AI Interfaces", "User Experience"],
    url: "https://example.com/ai-ux-design",
    featured: false
  }
];

export default function Writing() {
  const featuredWritings = writings.filter(w => w.featured);
  const regularWritings = writings.filter(w => !w.featured);

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            WRITING
          </h1>
          <div className="bg-destructive p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-destructive-foreground">
              Insights on AI, Marketing, and Technology
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredWritings.map((writing) => (
              <Card 
                key={writing.id}
                className="border-4 border-foreground hover:transform hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="destructive" className="font-semibold">
                      FEATURED
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {writing.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold mb-2">
                    {writing.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span className="font-semibold">{writing.publication}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {writing.readTime}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {writing.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {writing.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs font-semibold border-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => handleExternalLink(writing.url)}
                    className="w-full font-semibold border-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground">All Articles</h2>
          <div className="space-y-6">
            {regularWritings.map((writing, index) => (
              <Card 
                key={writing.id}
                className={`border-4 border-foreground transform ${
                  index % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'
                } hover:rotate-0 transition-transform duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">{writing.publication}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        {writing.date}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        {writing.readTime}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {writing.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {writing.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {writing.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs font-semibold border-2 border-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => handleExternalLink(writing.url)}
                      className="font-semibold border-2 self-start"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-4 border-foreground bg-accent/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Want to Discuss These Ideas?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm always open to conversations about AI, marketing, and the future of technology.
              </p>
              <Button 
                size="lg" 
                variant="destructive"
                className="font-bold text-lg px-8 py-4"
                onClick={() => window.open('mailto:hello@example.com')}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}