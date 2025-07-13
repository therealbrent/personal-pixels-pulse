import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Zap, Users, Target, Brain } from "lucide-react";

const skills = [
  "B2B Marketing Strategy", "AI Implementation", "User Experience (UX)", 
  "Technology Marketing", "Content Strategy", "Marketing Operations",
  "Lead Generation", "Account-Based Marketing", "Marketing Automation",
  "Data Analytics", "Product Marketing", "Digital Marketing"
];

const experience = [
  {
    title: "Senior Marketing Director",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Leading AI-driven marketing initiatives, implementing ML-powered customer segmentation, and driving 40% increase in qualified leads."
  },
  {
    title: "Marketing Manager",
    company: "StartupX",
    period: "2019 - 2021", 
    description: "Built marketing operations from ground up, integrated first AI tools for content optimization and lead scoring."
  },
  {
    title: "Digital Marketing Specialist",
    company: "GrowthAgency",
    period: "2017 - 2019",
    description: "Specialized in B2B tech marketing, began experimenting with early AI marketing tools and automation platforms."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            ABOUT ME
          </h1>
          <div className="bg-primary p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-primary-foreground">
              Where Marketing Strategy Meets AI Innovation
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <Card className="mb-12 border-4 border-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Brain className="mr-3 text-primary" />
              My Story
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              I'm a B2B marketing leader who has been at the forefront of AI experimentation for the past 5 years. 
              My journey began with traditional marketing strategies, but I quickly recognized the transformative 
              potential of artificial intelligence in marketing operations.
            </p>
            <p>
              With a strong foundation in technology and user experience, I bridge the gap between cutting-edge 
              AI capabilities and practical marketing applications. My approach combines data-driven insights 
              with human-centered design principles to create marketing strategies that truly resonate.
            </p>
            <p>
              I specialize in implementing AI tools for customer segmentation, content optimization, lead scoring, 
              and predictive analytics, helping organizations unlock new levels of marketing effectiveness.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-12 border-4 border-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Zap className="mr-3 text-accent" />
              Core Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm font-semibold px-3 py-2 border-2 border-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="border-4 border-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Briefcase className="mr-3 text-destructive" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <span className="text-muted-foreground font-semibold">{exp.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}