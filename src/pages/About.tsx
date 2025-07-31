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
              Hi there 👋
            </p>
            <p>
              My career began at NASCAR, where I led transformative IT projects to improve the fan experience. 
              Highlights include print-at-home ticketing (2007) and new websites for 13 race tracks (2010). 
              These early experiences sparked my passion for the intersection of user experience, technology, 
              and marketing—shaping my career ever since.
            </p>
            <p>
              Next, I moved agency-side where I learned to pitch big ideas, expand into new markets, and build 
              quality-obsessed teams. All while shipping bold, impactful work.
            </p>
            <p>
              Now, I am a champion for go-to-market innovation at Qualcomm Technologies. My team empowers 
              marketing and sales with modern strategies, trustworthy data, and scalable platforms.
            </p>
            <ul className="space-y-2 ml-4">
              <li>🔹 Account-Based Marketing (ABM) has become the backbone of our global GTM efforts</li>
              <li>🔹 Established commercial channel marketing</li>
              <li>🔹 Generative AI rapidly adopted across every marketing function</li>
            </ul>
            <p>
              Outside of work, you'll find me volunteering in the San Diego design community, advocating for 
              the arts, or catching performances at La Jolla Playhouse, The Old Globe, and The Rady Shell at 
              Jacobs Park with my family.
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
                  <h3 className="text-xl font-bold text-foreground">Head of AI Platforms & GTM Innovation</h3>
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