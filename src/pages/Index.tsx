import { Hero } from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Briefcase, PenTool, TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Content Section */}
      <section id="content" className="py-16">
        <div className="container mx-auto px-4">
          {/* Quick Intro */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              WHAT I DO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I help B2B companies leverage AI to transform their marketing operations, 
              drive better customer experiences, and achieve measurable growth.
            </p>
          </div>

          {/* Main Sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* About/Resume */}
            <Card className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  5+ years of hands-on AI experimentation in B2B marketing environments.
                </p>
                <Link to="/about">
                  <Button className="w-full font-semibold">
                    View Background
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold">Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real results from AI implementations that drove significant business impact.
                </p>
                <Link to="/case-studies">
                  <Button variant="outline" className="w-full font-semibold border-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Writing */}
            <Card className="border-4 border-foreground transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <PenTool className="w-12 h-12 text-destructive mb-4" />
                <CardTitle className="text-2xl font-bold">Writing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Insights and analysis on AI, marketing strategy, and emerging technologies.
                </p>
                <Link to="/writing">
                  <Button variant="secondary" className="w-full font-semibold">
                    Read Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recent Highlights */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Recent Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary/10 p-6 border-4 border-foreground transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Badge variant="destructive" className="mb-3 font-semibold">NEW</Badge>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  65% Lead Qualification Improvement
                </h4>
                <p className="text-muted-foreground">
                  Latest AI implementation case study showing dramatic improvements in lead scoring accuracy.
                </p>
              </div>
              
              <div className="bg-accent/10 p-6 border-4 border-foreground transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Badge variant="outline" className="mb-3 font-semibold border-2">FEATURED</Badge>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  AI Marketing Predictions 2024
                </h4>
                <p className="text-muted-foreground">
                  Published insights on upcoming AI trends that will reshape B2B marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
