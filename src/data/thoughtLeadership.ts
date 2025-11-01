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

export type ContentType = 'presentation' | 'podcast' | 'panel' | 'article';

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
  
  // Metadata
  topics?: string[]; // ["AI", "Marketing", "UX"] - for future filtering
  featured?: boolean; // Set true for 2-3 most important items
}

export const thoughtLeadershipData: ThoughtLeadershipItem[] = [
  // ==========================================
  // PRESENTATIONS
  // ==========================================
  {
    id: 'ana-2025',
    type: 'presentation',
    title: 'Next-Generation Marketing: How AI is Used at Qualcomm Technologies',
    date: '2025-09-11',
    venue: 'ANA (Los Angeles)',
    topics: ['AI', 'Marketing']
  },
  {
    id: 'ai-champions-playbook-2025',
    type: 'presentation',
    title: "The AI Champion's Playbook",
    date: '2025-05-04', 
    venue: 'AI Leaders Forum (NYC)',
    topics: ['AI', 'Leadership']
  },
  {
    id: 'sdxd-enterprise-ai-2025',
    type: 'presentation',
    title: 'On Enterprise Generative AI Adoption',
    date: '2025-05-21',
    venue: 'SDXD (San Diego)',
    topics: ['AI', 'Enterprise']
  },
  {
    id: 'webit-2025',
    type: 'presentation',
    title: 'Beyond buzzwords: Real AI, real marketing, real results',
    date: '2025-06-26',
    venue: 'Webit (Sofia)',
    videoUrl: 'https://www.youtube.com/watch?v=eEbuoK5DS30',
    topics: ['AI', 'Marketing']
  },
  {
    id: 'happier-humans-2025',
    type: 'presentation',
    title: 'Happier Humans, Better Business',
    date: 'TODO: ADD DATE', // TODO: Provide date in YYYY-MM-DD format
    venue: ['AI Leaders Forum (SF)', 'San Diego Design Week'],
    videoUrl: 'https://youtu.be/ApLKfzjaN3Y',
    topics: ['AI', 'UX', 'Business']
  },
  {
    id: 'five-tips-ai-marketing-2025',
    type: 'presentation',
    title: "Five Tips to Avoid Generative AI Buyer's Remorse",
    date: '2025-05-23',
    venue: 'AI x Marketing Summit',
    videoUrl: 'https://youtu.be/d3A-gHkwiBE?si=ecXBZYUpq_StpVs2&t=1',
    topics: ['AI', 'Marketing']
  },
  {
    id: 'use-science-copy-2020',
    type: 'presentation',
    title: 'Use Science to Write Better Copy',
    date: '2020-01-01', // TODO: Provide more specific date if available
    venue: 'Product-Led Growth Conference',
    videoUrl: 'https://www.youtube.com/watch?v=GRdx9R2B7iQ&t=1s',
    topics: ['UX', 'Content']
  },
  {
    id: 'ux-flywheel-2020',
    type: 'presentation',
    title: 'The UX Flywheel',
    date: '2020-01-01', // TODO: Provide more specific date if available
    venue: ['Convey UX', 'San Diego Digital Designers', 'MarcomCentral User Conference'],
    videoUrl: 'https://youtu.be/UYApYNEnaMM?si=v3IsSc6R50rZeVlp',
    topics: ['UX', 'Strategy']
  },
  {
    id: 'frameworks-free-tools-2020',
    type: 'presentation',
    title: 'Frameworks and Free Tools to Improve Your UX Writing',
    date: '2020-01-01', // TODO: Provide more specific date if available
    venue: 'Bolder Design',
    topics: ['UX', 'Content']
  },

  // ==========================================
  // PODCASTS
  // ==========================================
  {
    id: 'convey-ux-podcast-2020',
    type: 'podcast',
    title: 'Balancing Quantitative and Qualitative Perspectives in UX Strategy',
    date: '2020-01-01', // TODO: Provide more specific date if available
    venue: 'Convey UX',
    videoUrl: 'https://youtu.be/s827NVsQXS4?si=8JP9q_-fhSDMs_8_',
    topics: ['UX', 'Strategy']
  },

  // ==========================================
  // PANELS
  // ==========================================
  {
    id: 'ai-create-2025',
    type: 'panel',
    title: 'How AI is Shaping Creative Futures',
    date: '2025-09-07',
    venue: 'AI Create (San Diego)',
    topics: ['AI', 'Design']
  },
  {
    id: '6sense-breakthrough-2025',
    type: 'panel',
    title: 'Tangy Twists and Pipeline Wins: Expert Insights with a Sour Kick',
    date: '2025-11-12',
    venue: 'Breakthrough (Las Vegas)',
    topics: ['Marketing']
  },
  {
    id: 'power-of-brand-2025',
    type: 'panel',
    title: 'The Power of Brand',
    date: '2025-09-19',
    venue: 'Qualcomm (San Diego)',
    description: 'Moderator',
    topics: ['Design', 'Branding']
  },
  {
    id: 'uci-design-ethics-2022',
    type: 'panel',
    title: 'UC Irvine presents Exploring Design & Ethics',
    date: '2022-01-01', // TODO: Provide more specific date if available
    venue: 'Good Cause (Virtual)',
    description: 'Moderator',
    topics: ['Design', 'Ethics']
  },
  {
    id: 'gm-diversity-design-2021',
    type: 'panel',
    title: 'General Motors presents Exploring Diversity + Design',
    date: '2021-01-01', // TODO: Provide more specific date if available
    venue: 'Good Cause (Virtual)',
    description: 'Moderator',
    topics: ['Design', 'Diversity']
  },
  {
    id: 'data-privacy-ai-2020',
    type: 'panel',
    title: 'Exploring Data Privacy & Artificial Intelligence in UX',
    date: '2020-01-01', // TODO: Provide more specific date if available
    venue: 'SDXD (San Diego)',
    description: 'Moderator',
    topics: ['UX', 'AI', 'Privacy']
  },
  {
    id: 'interview-olympics-2019',
    type: 'panel',
    title: 'Interview Olympics',
    date: '2019-01-01', // TODO: Provide more specific date if available
    venue: 'SDXD (San Diego)',
    topics: ['UX', 'Hiring']
  },
  {
    id: 'strategic-interviews-2019',
    type: 'panel',
    title: "Strategic Interviews: The Hiring Manager's Perspective",
    date: '2019-01-01', // TODO: Provide more specific date if available
    venue: 'SDXD (San Diego)',
    topics: ['UX', 'Hiring']
  },
  {
    id: 'how-to-get-hired-2015',
    type: 'panel',
    title: 'How to Get Hired for a UX Design Role',
    date: '2015-01-01', // TODO: Provide more specific date if available
    venue: 'UC San Diego',
    description: 'Moderator',
    topics: ['UX', 'Career']
  },

  // ==========================================
  // ARTICLES / MEDIA FEATURES
  // ==========================================
  {
    id: 'cionews-qualcomm-ai-playbook',
    type: 'article',
    title: "Why Qualcomm's Playbook For Scaling AI Starts With Intention -- And Ends With A Human",
    date: '2025-10-23',
    publication: 'CIO News',
    quote: "We expect a human to verify the facts, citations, decisions—and the underlying strategy. Is it ethical? Does it adhere to our Responsible AI Principles and policies? That's the bar.",
    url: 'https://www.cionews.com/post/qualcomm-enterprise-ai-strategy-oversight-brent-summers',
    topics: ['AI', 'Leadership'],
    featured: true // Mark as featured if you want it prominently displayed
  },
  {
    id: 'smartsuite-edge-ai-sustainability',
    type: 'article',
    title: "Why the next wave of AI opportunities isn't in the cloud, it's on the edge",
    date: '2025-05-20',
    publication: 'SmartSuite',
    quote: "As someone committed to sustainability, I believe in the transformative potential of AI—but must also acknowledge the challenges it poses to a sustainable future.",
    url: 'https://www.smartsuite.com/news/qualcomm-technologies-leads-edge-ai-sustainability-brent-summers',
    topics: ['AI', 'Sustainability']
  },
  {
    id: 'cmswire-customer-centric',
    type: 'article',
    title: 'Customer-Centric Companies Sweat the Details',
    date: '2016-03-17',
    publication: 'CMS Wire',
    quote: "Customer's perceptions will change along the way as they become more familiar with your company's products and services. Every single touchpoint is a chance to delight or disappoint.",
    url: 'https://www.cmswire.com/customer-experience/customer-centric-companies-sweat-the-details/',
    topics: ['UX', 'Customer Experience']
  },
  {
    id: 'aidatapress-cloud-to-device',
    type: 'article',
    title: 'From Cloud to Device, Qualcomm Exec Explains Why AI Business Models Are Coming Down to Earth',
    date: '2025-10-23',
    publication: 'AI Data Press',
    quote: "Whenever latency matters, the edge is usually the better choice. If the data is sensitive or you don't want it traveling through the cloud, the edge is the right place for it. That is where you can ensure not just security but true privacy.",
    url: 'https://www.aidatapress.com/news/cloud-on-device-ai-edge-brent-summers-qualcomm-technologies',
    topics: ['AI', 'Privacy', 'Technology']
  },
  {
    id: 'uxmag-proto-personas',
    type: 'article',
    title: 'Revisiting Proto-Personas for Executive Alignment',
    date: '2014-07-10',
    publication: 'UX Magazine',
    quote: "We use proto-personas as a way of gaining alignment among our project sponsors and striking the right balance of focus between organizational and user needs.",
    url: 'https://uxmag.com/articles/revisiting-proto-personas-for-executive-alignment',
    topics: ['UX', 'Strategy']
  },
];

// Helper function to sort by date (newest first)
export const getSortedThoughtLeadership = () => {
  return [...thoughtLeadershipData].sort((a, b) => {
    // Items with TODO dates go to the end
    if (a.date.includes('TODO')) return 1;
    if (b.date.includes('TODO')) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Helper function to filter by type
export const getThoughtLeadershipByType = (type: ContentType | 'all') => {
  const sorted = getSortedThoughtLeadership();
  if (type === 'all') return sorted;
  return sorted.filter(item => item.type === type);
};

// Helper function to get featured items
export const getFeaturedThoughtLeadership = () => {
  return getSortedThoughtLeadership().filter(item => item.featured);
};

// Helper function to group by year
export const getThoughtLeadershipByYear = () => {
  const sorted = getSortedThoughtLeadership();
  const grouped: Record<string, ThoughtLeadershipItem[]> = {};
  
  sorted.forEach(item => {
    if (item.date.includes('TODO')) {
      if (!grouped['Pending']) grouped['Pending'] = [];
      grouped['Pending'].push(item);
    } else {
      const year = item.date.substring(0, 4);
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    }
  });
  
  return grouped;
};
