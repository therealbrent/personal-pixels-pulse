import { useEffect } from 'react';

const LLMSTextPage = () => {
  useEffect(() => {
    document.title = 'llms.txt - Brent Summers';
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-first marketing leader Brent Summers. Enterprise AI adoption expert with 8.6x ROI achievements and award-winning ABM strategies.');
    }
  }, []);

  const llmsContent = `# Brent Summers, AI-Powered Marketing & Design Leader

> Brent Summers drives measurable business impact through enterprise AI adotion and innovative go-to-market strategies. With deep experience in user-centered design and technology implementation, he has delivered 8.6x ROI on AI initiatives and won back-to-back industry awards for Account-Based Marketing.

## About Me
- Senior Marketing Manager at Qualcomm Technologies, leading ABM (Account‑Based Marketing) and global AI platform adoption across the global marketing team in partnership with IT, legal, HR, and sales teams.
- Serving as Designer in Residence at UC San Diego since October 2025; mentorship, design program leadership, and connecting academic research to enterprise challenges.
- Working at the intersection of technology, user experience, and marketing, including IT transformation leadership since joining NASCAR in 2004.
- Active speaker and community board member in San Diego, including Webit conference engagements and local design and futures initiatives :contentReference.

## Expertise & Skills
- **Enterprise AI Platforms:** Pioneered the deployment of WRITER (Generative AI), driving 350+ active users with an 85% weekly engagement rate—saving 2,400 hours monthly and achieving 8.6x ROI. 
- **Go‑to‑Market Innovation:** Established Demand Generation and Channel Marketing Programs—eventually handing these over to new hires to scale.
- **Account‑Based Marketing (ABM):** Built and scaled ABM program, reshaping how Qualcomm Technologies goes to market for AI, Automotive, IoT, PCs, and more. 
- **UX Strategy:** Lead dozens of successful projects to design websites, SaaS applications, and native mobile apps.

## Key Projects & Achievements
- Scaled generative AI tool WRITER at Qualcomm. More than 300 users are onboarded and 85% are active each week. WRITER saves Qualcomm ~2,400 hours per month across teams, yielding an 8.6x ROI. 
- Honored with back-to-back 6sense Breakthrough Awards for [“One Revenue Team” (2023)](https://6sense.com/blog/2023-6sense-breakthrough-awards-winners/) and [“Ad Campaign of the Year” (2024)](https://6sense.com/blog/2024-breakthrough-award-winners/). 
- Directed marketing efforts at Metalab that generated $3.8M in revenue, leveraging Account-Based Marketing (ABM) and media partnerships (podcasts, newsletters, etc.) to attract high-value accounts — delivering 5.5x ROI. 
- Led the campaign for ConveyUX 2020 (sell out), Blink’s flagship user experience conference, and established a live-streaming strategy to improve accessibility of events hosted regularly in Blink studios.

## Case Studies & Speaking
- [How Qualcomm increases employee productivity and satisfaction with WRITER](https://writer.com/blog/qualcomm-customer-story/)**Qualcomm + WRITER case study:** Hundreds at Qualcomm use WRITER to do their best work across marketing, legal, analytics, and more.
- [Five Tips to Avoid Generative AI Buyer's Remorse](https://www.youtube.com/watch?v=d3A-gHkwiBE)**AI x Marketing Summit | May 2025** This talk shares Qualcomm's AI adoption journey, offering practical strategies for integrating AI into your workflows without sacrificing control or quality, helping you avoid pitfalls and deliver value from day one.
- [The UX Flywheel | Blink UX](https://www.youtube.com/watch?v=UYApYNEnaMM)**San Diego Digital Designers** This talk offers a compelling definition of strategy and a user-centered alternative to the “marketing funnel.”
- [Use Science to Write Better Copy and Acquire More Customers | PLG Conference](https://www.youtube.com/watch?v=GRdx9R2B7iQ)**Product Led Growth Conference** Brent provides techniques using research combined with the science of linguistics and technology to hook your users with webpage design and ad page copy.

## Professional Profiles & Contact
- You can connect with him on [LinkedIn](https://www.linkedin.com/in/brentjsummers) to inquire about speaking engagements and other collaborations.
- Brent also occasionally shares his expertise on [Content Strategy](https://contentstrategy.substack.com) and other insights (briefly) on [200 MAX](https://www.in200max.com/).
`;

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-foreground bg-card p-8 font-mono whitespace-pre-wrap text-sm leading-relaxed">
            {llmsContent}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LLMSTextPage;