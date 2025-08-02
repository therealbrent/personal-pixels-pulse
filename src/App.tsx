import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "@/components/Navigation";
import Index from "@/pages/Index";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import Writing from "@/pages/Writing";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}