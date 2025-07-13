import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, TrendingUp, Users, Bot, Target } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Lead Scoring Implementation",
    description: "Implemented machine learning algorithms to improve lead qualification by 65%, resulting in 40% increase in sales conversion rates.",
    tags: ["AI/ML", "Lead Generation", "Sales Operations"],
    metrics: "65% improvement in lead qualification",
    icon: Bot,
    color: "text-primary",
    links: [
      { label: "Case Study PDF", url: "#", type: "download" },
      { label: "Live Demo", url: "#", type: "external" }
    ]
  },
  {
    id: 2,
    title: "Account-Based Marketing Automation",
    description: "Designed and executed ABM strategy using AI-driven personalization, targeting 50 high-value accounts with 300% ROI.",
    tags: ["ABM", "Marketing Automation", "Personalization"],
    metrics: "300% ROI increase",
    icon: Target,
    color: "text-accent",
    links: [
      { label: "Strategy Overview", url: "#", type: "download" },
      { label: "Results Dashboard", url: "#", type: "external" }
    ]
  },
  {
    id: 3,
    title: "Content Optimization with NLP",
    description: "Utilized natural language processing to optimize content performance, achieving 85% improvement in engagement rates.",
    tags: ["NLP", "Content Marketing", "Optimization"],
    metrics: "85% engagement improvement",
    icon: TrendingUp,
    color: "text-destructive",
    links: [
      { label: "Technical Report", url: "#", type: "download" },
      { label: "Content Samples", url: "#", type: "external" }
    ]
  },
  {
    id: 4,
    title: "Customer Journey Mapping with AI",
    description: "Mapped complex B2B customer journeys using AI analytics, reducing customer acquisition cost by 45%.",
    tags: ["Customer Journey", "Analytics", "UX Research"],
    metrics: "45% CAC reduction",
    icon: Users,
    color: "text-secondary-foreground",
    links: [
      { label: "Journey Maps", url: "#", type: "download" },
      { label: "Analytics Dashboard", url: "#", type: "external" }
    ]
  }
];

export default function CaseStudies() {
  const handleDownload = (url: string, title: string) => {
    // Simulate download
    console.log(`Downloading: ${title}`);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            CASE STUDIES
          </h1>
          <div className="bg-accent p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-accent-foreground">
              Real Results from AI-Driven Marketing Strategies
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className={`border-4 border-foreground transform ${
                index % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'
              } hover:rotate-0 transition-transform duration-300`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <study.icon className={`w-8 h-8 ${study.color}`} />
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="font-semibold border-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                  {study.title}
                </CardTitle>
                <div className={`bg-secondary p-3 border-2 border-foreground ${study.color} font-bold text-lg`}>
                  {study.metrics}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  {study.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {study.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant={link.type === 'download' ? 'default' : 'outline'}
                      onClick={() => {
                        if (link.type === 'download') {
                          handleDownload(link.url, link.label);
                        } else {
                          handleExternalLink(link.url);
                        }
                      }}
                      className="font-semibold border-2"
                    >
                      {link.type === 'download' ? (
                        <Download className="w-4 h-4 mr-2" />
                      ) : (
                        <ExternalLink className="w-4 h-4 mr-2" />
                      )}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-4 border-foreground bg-primary/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Interested in Working Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss how AI-driven marketing strategies can transform your business.
              </p>
              <Button 
                size="lg" 
                className="font-bold text-lg px-8 py-4"
                onClick={() => window.open('mailto:hello@example.com')}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}