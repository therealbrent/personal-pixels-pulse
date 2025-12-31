/**
 * Thought Leadership Archive Data
 *
 * INSTRUCTIONS FOR UPDATING:
 * 1. Fill in all date fields marked with "TODO: ADD DATE"
 * 2. Dates should be in YYYY-MM-DD format (e.g., "2025-01-15")
 * 3. If exact date unknown, use first of month (YYYY-MM-01)
 * 4. To add new content, copy an existing item and modify
 * 5. The feed will auto-sort by date (newest first)
 */

export type ContentType = "presentation" | "podcast" | "panel" | "article" | "writing";

export interface ThoughtLeadershipItem {
  id: string; // Unique identifier (lowercase, hyphenated)
  type: ContentType;
  title: string;
  date: string; // YYYY-MM-DD format for sorting

  // Common fields
  venue?: string | string[]; // For presentations/panels: "ANA Conference" or ["SDXD", "Convey UX"]
  publication?: string; // For articles: "CIO News", "SmartSuite"

  // Optional fields
  description?: string; // Short description if needed
  quote?: string; // For articles - pull quote from the piece
  url?: string; // External link (article, video, audio)
  videoUrl?: string; // For presentations with video
  imageUrl?: string; // Optional image for card

  // Metadata
  topics?: string[]; // ["AI", "Marketing", "UX"] - for future filtering
  featured?: boolean; // Set true for 2-3 most important items
}

export const thoughtLeadershipData: ThoughtLeadershipItem[] = [
  // ==========================================
  // PRESENTATIONS
  // ==========================================
  {
    id: "out-equal",
    type: "presentation",
    title: "Interrupting Microaggressions with Workplace Intervention",
    date: "2022-11-01", // TODO: Provide more specific date if available
    venue: "Out & Equal (Las Vegas)",
    imageUrl: "/lovable-uploads/outequal.jpeg",
    topics: ["LGBT"],
  },
  {
    id: "convey-ux-podcast-2020",
    type: "panel",
    title: "Balancing Quantitative and Qualitative Perspectives in UX Strategy",
    date: "2020-03-03",
    venue: "Convey UX (Seattle)",
    videoUrl: "https://slideslive.com/38925088/balancing-quantitative-and-qualitative-perspectives-in-ux-strategy",
    imageUrl: "/lovable-uploads/ux-insights-podcast.webp",
    topics: ["UX", "Strategy"],
  },
  {
    id: "ana-abm-2025",
    type: "presentation",
    title: "Future-Proofing Your ABM Strategy",
    date: "2025-12-10",
    venue: "ANA (Virtual)",
    topics: ["ABM", "AI"],
  },
  {
    id: "ana-2025",
    type: "presentation",
    title: "Next-Generation Marketing: How AI is Used at Qualcomm Technologies",
    date: "2025-09-11",
    venue: "ANA (Los Angeles)",
    imageUrl: "/lovable-uploads/ana-la.jpeg",
    topics: ["AI", "Marketing"],
  },
  {
    id: "ai-champions-playbook-2025",
    type: "presentation",
    title: "The AI Champion's Playbook",
    date: "2025-11-04",
    venue: "AI Leaders Forum (SF)",
    videoUrl: "https://www.youtube.com/watch?v=Y8RHToB_Rtc",
    imageUrl: "/lovable-uploads/ailf-sf.png",
    topics: ["AI", "Leadership"],
  },
  {
    id: "sdxd-enterprise-ai-2025",
    type: "presentation",
    title: "On Enterprise Generative AI Adoption",
    date: "2025-05-21",
    venue: "SDXD (San Diego)",
    imageUrl: "/lovable-uploads/sdxd-lightning.avif",
    topics: ["AI", "Enterprise"],
  },
  {
    id: "webit-2025",
    type: "presentation",
    title: "Beyond buzzwords: Real AI, real marketing, real results",
    date: "2025-06-26",
    venue: "Webit (Sofia)",
    videoUrl: "https://www.youtube.com/watch?v=eEbuoK5DS30",
    imageUrl: "/lovable-uploads/webit-2025.jpg",
    topics: ["AI", "Marketing"],
  },
  {
    id: "happier-humans-2025",
    type: "presentation",
    title: "Happier Humans, Better Business",
    date: "2025-06-01",
    venue: ["AI Leaders Forum (NYC)", "San Diego Design Week"],
    videoUrl: "https://youtu.be/ApLKfzjaN3Y",
    imageUrl: "/lovable-uploads/happier-humans.png",
    topics: ["AI", "UX", "Business"],
    featured: true, // Mark as featured if you want it prominently displayed
  },
  {
    id: "five-tips-ai-marketing-2025",
    type: "presentation",
    title: "Five Tips to Avoid Generative AI Buyer's Remorse",
    date: "2025-04-23",
    venue: "AI x Marketing Summit (SF)",
    videoUrl: "https://youtu.be/d3A-gHkwiBE?si=ecXBZYUpq_StpVs2&t=1",
    imageUrl: "/lovable-uploads/buyers-remorse.png",
    topics: ["AI", "Marketing"],
  },
  {
    id: "use-science-copy-2020",
    type: "presentation",
    title: "Use Science to Write Better Copy",
    date: "2020-01-01", // TODO: Provide more specific date if available
    venue: "Product-Led Growth Conference (Virtual)",
    videoUrl: "https://www.youtube.com/watch?v=GRdx9R2B7iQ&t=1s",
    imageUrl: "/lovable-uploads/use-science.png",
    topics: ["UX", "Content"],
  },
  {
    id: "ux-flywheel-2020",
    type: "presentation",
    title: "The UX Flywheel",
    date: "2020-01-01", // TODO: Provide more specific date if available
    venue: [
      "Convey UX (Seattle)",
      "MarcomCentral User Conference (San Diego)",
      "Masters of Marketing (Virtual)",
      "San Diego Digital Designers",
    ],
    videoUrl: "https://youtu.be/UYApYNEnaMM?si=v3IsSc6R50rZeVlp",
    imageUrl: "/lovable-uploads/ux-flywheel-content.png",
    topics: ["UX", "Strategy"],
  },
  {
    id: "frameworks-free-tools-2020",
    type: "presentation",
    title: "Frameworks and Free Tools to Improve Your UX Writing",
    date: "2020-01-01", // TODO: Provide more specific date if available
    venue: "Bolder Design (Virtual)",
    imageUrl: "/lovable-uploads/frameworks.webp",
    topics: ["UX", "Content"],
  },

  // ==========================================
  // PODCASTS
  // ==========================================
  // ==========================================
  // PANELS
  // ==========================================
  {
    id: "ai-create-2025",
    type: "panel",
    title: "How AI is Shaping Creative Futures",
    date: "2025-09-07",
    venue: "AI Create (San Diego)",
    imageUrl: "/lovable-uploads/ai-create.jpeg",
    topics: ["AI", "Design"],
    featured: true,
  },
  {
    id: "6sense-breakthrough-2025",
    type: "panel",
    title: "Tangy Twists and Pipeline Wins: Expert Insights with a Sour Kick",
    date: "2025-11-12",
    venue: "Breakthrough (Las Vegas)",
    topics: ["Marketing"],
    videoUrl: "https://fast.wistia.net/embed/iframe/t8xiz5vncz?autoPlay=1",
    imageUrl: "/lovable-uploads/breakthrough-tangy-twists.png",
  },
  {
    id: "power-of-brand-2025",
    type: "panel",
    title: "The Power of Brand",
    date: "2025-09-19",
    venue: "Qualcomm (San Diego)",
    description: "Moderator",
    imageUrl: "/lovable-uploads/power-brand.jpeg",
    topics: ["Design", "Branding"],
  },
  {
    id: "uci-design-ethics-2022",
    type: "panel",
    title: "UC Irvine presents Exploring Design & Ethics",
    date: "2022-01-01", // TODO: Provide more specific date if available
    venue: "Good Cause (Virtual)",
    description: "Moderator",
    topics: ["Design", "Ethics"],
  },
  {
    id: "dfa-design-ambassadors",
    type: "panel",
    title: "Design Ambassadors Summit",
    date: "2023-11-11",
    venue: "Urban Discovery Academy (San Diego)",
    imageUrl: "/lovable-uploads/design-summit.jpeg",
    topics: ["Design", "Enterprise"],
    featured: true,
  },
  {
    id: "data-privacy-ai-2020",
    type: "panel",
    title: "Exploring Data Privacy & Artificial Intelligence in UX",
    date: "2020-01-01", // TODO: Provide more specific date if available
    venue: "SDXD (San Diego)",
    description: "Moderator",
    imageUrl: "/lovable-uploads/data-privacy.avif",
    topics: ["UX", "AI", "Privacy"],
  },
  {
    id: "strategic-interviews-2019",
    type: "panel",
    title: "Strategic Interviews: The Hiring Manager's Perspective",
    date: "2019-01-01", // TODO: Provide more specific date if available
    venue: "SDXD (San Diego)",
    imageUrl: "/lovable-uploads/strategic-interviews.avif",
    topics: ["UX", "Hiring"],
  },
  {
    id: "how-to-get-hired-2015",
    type: "panel",
    title: "How to Get Hired for a UX Design Role",
    date: "2015-01-01", // TODO: Provide more specific date if available
    venue: "UC San Diego",
    description: "Moderator",
    imageUrl: "/lovable-uploads/uxsd.png",
    topics: ["UX", "Career"],
  },

  // ==========================================
  // ARTICLES / MEDIA FEATURES
  // ==========================================
  {
    id: "forbes-writer-ai-leaders-forum",
    type: "article",
    title: "What Writer’s AI Leaders Forum Revealed About Enterprise AI",
    date: "2025-11-08",
    publication: "Forbes",
    quote:
      "After Summers conducted his initial Writer pilot, 100% of the users wanted to adopt the platform full-time. Today, 85% engage with Writer weekly, with 60% using it multiple times per week.",
    url: "https://www.forbes.com/sites/stevenwolfepereira/2025/11/08/what-writers-ai-leaders-forum-revealed-about-enterprise-ai/",
    topics: ["AI", "Leadership"],
    featured: true, // Mark as featured if you want it prominently displayed
  },
  {
    id: "cionews-qualcomm-ai-playbook",
    type: "article",
    title: "Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human",
    date: "2025-10-23",
    publication: "CIO News",
    quote:
      "We expect a human to verify the facts, citations, decisions—and the underlying strategy. Is it ethical? Does it adhere to our Responsible AI Principles and policies? That's the bar.",
    url: "https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers",
    topics: ["AI", "Leadership"],
    featured: true, // Mark as featured if you want it prominently displayed
  },
  {
    id: "smartsuite-edge-ai-sustainability",
    type: "article",
    title: "Why the next wave of AI opportunities isn't in the cloud, it's on the edge",
    date: "2025-05-20",
    publication: "SmartSuite",
    quote:
      "As someone committed to sustainability, I believe in the transformative potential of AI—but must also acknowledge the challenges it poses to a sustainable future.",
    url: "https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers",
    topics: ["AI", "Sustainability"],
    featured: false, // Mark as featured if you want it prominently displayed
  },
  {
    id: "cmswire-customer-centric",
    type: "article",
    title: "Customer-Centric Companies Sweat the Details",
    date: "2016-03-17",
    publication: "CMS Wire",
    quote:
      "Customer's perceptions will change along the way as they become more familiar with your company's products and services. Every single touchpoint is a chance to delight or disappoint.",
    url: "https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/",
    topics: ["UX", "Customer Experience"],
    featured: false, // Mark as featured if you want it prominently displayed
  },
  {
    id: "aidatapress-cloud-to-device",
    type: "article",
    title: "From Cloud to Device, Why AI Business Models Are Coming Down to Earth",
    date: "2025-10-23",
    publication: "AI Data Press",
    quote:
      "Whenever latency matters, the edge is usually the better choice. If the data is sensitive or you don't want it traveling through the cloud, the edge is the right place for it. That is where you can ensure not just security but true privacy.",
    url: "https://www.aidatapress.com/news/cloud-on-device-ai-edge-brent-summers-qualcomm-technologies",
    topics: ["AI", "Privacy", "Technology"],
    featured: false, // Mark as featured if you want it prominently displayed
  },
  {
    id: "uxmag-proto-personas",
    type: "article",
    title: "Revisiting Proto-Personas for Executive Alignment",
    date: "2014-07-10",
    publication: "UX Magazine",
    quote:
      "We use proto-personas as a way of gaining alignment among our project sponsors and striking the right balance of focus between organizational and user needs.",
    url: "https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment",
    topics: ["UX", "Strategy"],
    featured: false, // Mark as featured if you want it prominently displayed
  },
  {
    id: "olark-predictions",
    type: "article",
    title: "3 Predictions for 2016: Technology Meets Customer Experience",
    date: "2016-01-05",
    publication: "Speak: A blog by Olark",
    quote:
      "By creating content  people actually want to engage with, brands increase their likelihood of reaching  more potential consumers on mainstream sites.",
    url: "https://blog.olark.com/3-predictions-for-2016-technology-meets-customer-experience",
    topics: ["Technology", "Marketing"],
    featured: false,
  },

  // ==========================================
  // WRITING (Bylined articles)
  // ==========================================
  {
    id: "onq-reduce-it-costs-2025",
    type: "writing",
    title: "Reduce IT costs and extend device lifespan with Snapdragon and Windows 11",
    date: "2025-04-10",
    publication: "ONQ Blog",
    url: "https://www.qualcomm.com/news/onq/2025/04/reduce-it-costs-and-extend-device-lifespan-with-snapdragon-and-windows-11",
    topics: ["Technology", "Enterprise"],
    featured: false,
  },
  {
    id: "onq-unleash-team-potential-2025",
    type: "writing",
    title: "Unleash your team's potential with enterprise AI software powered by Snapdragon processors",
    date: "2025-01-21",
    publication: "ONQ Blog",
    url: "https://www.qualcomm.com/news/onq/2025/01/unleash-your-teams-potential-with-enterprise-ai-software-powered-by-snapdragon-processors",
    topics: ["AI", "Enterprise"],
    featured: false,
  },
  {
    id: "onq-snapdragon-x-series-2025",
    type: "writing",
    title: "Snapdragon X Series: A new era for enterprise efficiency",
    date: "2025-01-02",
    publication: "ONQ Blog",
    url: "https://www.qualcomm.com/news/onq/2025/01/snapdragon-x-series-a-new-era-for-enterprise-efficiency",
    topics: ["Technology", "Enterprise"],
    featured: false,
  },
];

// Helper function to sort by date (newest first)
export const getSortedThoughtLeadership = () => {
  return [...thoughtLeadershipData].sort((a, b) => {
    // Items with TODO dates go to the end
    if (a.date.includes("TODO")) return 1;
    if (b.date.includes("TODO")) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Helper function to filter by type
export const getThoughtLeadershipByType = (type: ContentType | "all") => {
  const sorted = getSortedThoughtLeadership();
  if (type === "all") return sorted;
  return sorted.filter((item) => item.type === type);
};

// Helper function to get featured items
export const getFeaturedThoughtLeadership = () => {
  return getSortedThoughtLeadership().filter((item) => item.featured);
};

// Helper function to get items by IDs
export const getThoughtLeadershipByIds = (ids: string[]) => {
  return ids.map((id) => thoughtLeadershipData.find((item) => item.id === id)).filter(Boolean) as ThoughtLeadershipItem[];
};

// Helper function to filter by topic
export const getThoughtLeadershipByTopic = (topic: string) => {
  const sorted = getSortedThoughtLeadership();
  return sorted.filter((item) => item.topics?.some((t) => t.toLowerCase() === topic.toLowerCase()));
};

// Helper function to group by year
export const getThoughtLeadershipByYear = () => {
  const sorted = getSortedThoughtLeadership();
  const grouped: Record<string, ThoughtLeadershipItem[]> = {};

  sorted.forEach((item) => {
    if (item.date.includes("TODO")) {
      if (!grouped["Pending"]) grouped["Pending"] = [];
      grouped["Pending"].push(item);
    } else {
      const year = item.date.substring(0, 4);
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    }
  });

  return grouped;
};
