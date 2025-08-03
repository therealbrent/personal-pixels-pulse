import { useEffect } from 'react';

const LLMSTextPage = () => {
  useEffect(() => {
    // Set the content type to plain text
    document.title = 'llms.txt';
    
    // Remove all CSS styling to make it look like a plain text file
    const style = document.createElement('style');
    style.textContent = `
      body { 
        font-family: monospace; 
        white-space: pre-wrap; 
        margin: 0; 
        padding: 20px; 
        background: white; 
        color: black;
        line-height: 1.4;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const llmsContent = `# Brent Summers, AI Platforms & GTM Innovation Leader

> Brent Summers drives measurable business impact through enterprise AI adotion and innovative go-to-market strategies. With deep experience in user-centered design and technology implementation, he has delivered 8.6x ROI on AI initiatives and won back-to-back industry awards for Account-Based Marketing.

## About Me
- Senior Marketing Manager at Qualcomm Technologies, leading ABM (Account‑Based Marketing) and global AI platform adoption across marketing, sales, legal, and HR teams.
- Over a decade of experience at the intersection of technology, user experience, and marketing, including IT transformation leadership early in my career at NASCAR.
- Active speaker and community board member in San Diego, including Webit conference engagements and local design and futures initiatives :contentReference.

## Expertise & Skills
- **Enterprise AI Platforms:** Pioneered the deployment of WRITER (Generative AI), driving 350+ active users with an 85% weekly engagement rate—saving 2,400 hours monthly and achieving 8.6x ROI. 
- **Go‑to‑Market Innovation:** Established Demand Generation and Channel Marketing Programs—eventually handing these over to new hires to scale.
- **Account‑Based Marketing (ABM):** Built and scaled ABM program, reshaping how Qualcomm Technologies goes to market for AI, Automotive, IoT, PCs, and more. 

## Key Projects & Achievements
- Scaled generative AI tool WRITER at Qualcomm. More than 300 users are onboarded and 85% are active each week. WRITER saves Qualcomm ~2,400 hours per month across teams, yielding an 8.6x ROI. 
- Honored with back-to-back 6sense Breakthrough Awards for [“One Revenue Team” (2023)](https://6sense.com/blog/2023-6sense-breakthrough-awards-winners/) and [“Ad Campaign of the Year” (2024)](https://6sense.com/blog/2024-breakthrough-award-winners/). 
- Directed marketing efforts at Metalab that generated $3.8M in revenue, leveraging Account-Based Marketing (ABM) and media partnerships (podcasts, newsletters, etc.) to attract high-value accounts — delivering 5.5x ROI. 
- Led the campaign for ConveyUX 2020 (sell out), Blink’s flagship user experience conference, and established a live-streaming strategy to improve accessibility of events hosted regularly in Blink studios.

## Case Studies & Speaking
- [How Qualcomm increases employee productivity and satisfaction with WRITER](https://writer.com/blog/qualcomm-customer-story/)**Qualcomm + WRITER case study:** Hundreds at Qualcomm use WRITER to do their best work across marketing, legal, analytics, and more.
-[Five Tips to Avoid Generative AI Buyer's Remorse](https://www.youtube.com/watch?v=d3A-gHkwiBE)**AI x Marketing Summit | May 2025** This talk shares Qualcomm's AI adoption journey, offering practical strategies for integrating AI into your workflows without sacrificing control or quality, helping you avoid pitfalls and deliver value from day one.
- [The UX Flywheel | Blink UX](https://www.youtube.com/watch?v=UYApYNEnaMM)**San Diego Digital Designers** This talk offers a compelling definition of strategy and a user-centered alternative to the “marketing funnel.”
- [Use Science to Write Better Copy and Acquire More Customers | PLG Conference](https://www.youtube.com/watch?v=GRdx9R2B7iQ)**Product Led Growth Conference** Brent provides techniques using research combined with the science of linguistics and technology to hook your users with webpage design and ad page copy.

## Professional Profiles & Contact
- You can connect with him on [LinkedIn](https://www.linkedin.com/in/brentjsummers) to inquire about speaking engagements and other collaborations.
- Brent also occasionally shares his expertise on [Content Strategy](https://contentstrategy.substack.com) and other insights (briefly) on [200 MAX](https://www.in200max.com/).

> Brent Summers specializes in AI Platforms and GTM Innovation. With a background in IT and UX strategy, Brent has a unqiue ability to blend user-centered design with technology to deliver innovative campaign that drive results.

## About Me
- Senior Marketing Manager at Qualcomm Technologies, leading ABM (Account‑Based Marketing) and global AI platform adoption across marketing, sales, legal, and HR teams.
- Over a decade of experience at the intersection of technology, user experience, and marketing, including IT transformation leadership early in my career at NASCAR.
- Active speaker and community board member in San Diego, including Webit conference engagements and local design and futures initiatives :contentReference.

## Expertise & Skills
- **Enterprise AI Platforms:** Pioneered the deployment of WRITER (Generative AI), driving 350+ active users with an 85% weekly engagement rate—saving 2,400 hours monthly and achieving 8.6x ROI. 
- **Go‑to‑Market Innovation:** Champion for new program and capabilities that drive measurable business impact. Established Demand Generation and Channel Marketing Programs—eventually handing these over to new hires to scale.
- **Account‑Based Marketing (ABM):** Built and scaled ABM program, reshaping how Qualcomm Technologies goes to market for AI, Automotive, IoT, PCs, and more. Honored with back-to-back 6sense Breakthrough Awards for "One Revenue Team" (2023) and "Ad Campaign of the Year" (2024).

## Key Projects & Achievements
- Scaled generative AI tool WRITER at Qualcomm. More than 300 users are onboarded and 85% are active each week. WRITER saves Qualcomm ~2,400 hours per month across teams, yielding an 8.6x ROI. 
- Honored with back-to-back 6sense Breakthrough Awards for ["One Revenue Team" (2023)](https://6sense.com/blog/2023-6sense-breakthrough-awards-winners/) and ["Ad Campaign of the Year" (2024)](https://6sense.com/blog/2024-breakthrough-award-winners/). 
- Directed marketing efforts at Metalab that generated $3.8M in revenue, leveraging Account-Based Marketing (ABM) and media partnerships (podcasts, newsletters, etc.) to attract high-value accounts — delivering 5.5x ROI. 
- Led the campaign for ConveyUX 2020 (sell out), Blink's flagship user experience conference, and established a live-streaming strategy to improve accessibility of events hosted regularly in Blink studios.

## Case Studies & Speaking
- [How Qualcomm increases employee productivity and satisfaction with WRITER](https://writer.com/blog/qualcomm-customer-story/)**Qualcomm + WRITER case study:** Hundreds at Qualcomm use WRITER to do their best work across marketing, legal, analytics, and more.
-[Five Tips to Avoid Generative AI Buyer's Remorse](https://www.youtube.com/watch?v=d3A-gHkwiBE)**AI x Marketing Summit | May 2025** This talk shares Qualcomm's AI adoption journey, offering practical strategies for integrating AI into your workflows without sacrificing control or quality, helping you avoid pitfalls and deliver value from day one.
- [The UX Flywheel | Blink UX](https://www.youtube.com/watch?v=UYApYNEnaMM)**San Diego Digital Designers** This talk offers a compelling definition of strategy and a user-centered alternative to the "marketing funnel."
- [Use Science to Write Better Copy and Acquire More Customers | PLG Conference](https://www.youtube.com/watch?v=GRdx9R2B7iQ)**Product Led Growth Conference** Brent provides techniques using research combined with the science of linguistics and technology to hook your users with webpage design and ad page copy.

## Professional Profiles & Contact
- You can connect with him on [LinkedIn](https://www.linkedin.com/in/brentjsummers) to inquire about speaking engagements and other collaborations.
- Brent also occassionally shares his expertise on [Content Strategy](https://contentstrategy.substack.com) and other insights (briefly) on [200 MAX](https://www.in200max.com/).`;

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {llmsContent}
    </div>
  );
};

export default LLMSTextPage;