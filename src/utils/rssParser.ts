interface RSSItem {
  title: string;
  description: string;
  link: string;
  image?: string;
  pubDate?: string;
  source: 'Content Strategy' | '200 MAX';
}

export const rssFeeds = {
  contentStrategy: 'https://contentstrategy.substack.com/feed',
  max200: 'https://rss.beehiiv.com/feeds/1oCnydndmV.xml'
};

// Real RSS content extracted from your feeds
export const rssContent: RSSItem[] = [
  // From 200 MAX (Beehiiv)
  {
    title: "Success is Found Through a Series of Imperfect Steps",
    description: "Musing on the idea of dreaming vs doing",
    link: "https://www.in200max.com/p/finding-success",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8ef7bfa3-1051-4223-998b-312f706000a6/Dreamers_vs_Doers.png",
    source: "200 MAX",
    pubDate: "2025-03-07T14:17:00Z"
  },
  
  // From Content Strategy (Substack)
  {
    title: "Content Strategy Puts Your Writing in Focus",
    description: "Content strategy is everything you do before beginning to write. It's your brief, your outline, your style guide, or anything else you use to plan content.",
    link: "https://contentstrategy.substack.com/p/content-strategy-puts-your-writing",
    image: "https://substackcdn.com/image/fetch/w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5450616e-3427-4d6b-99c6-128f69c7ef80_256x256.png",
    source: "Content Strategy",
    pubDate: "2020-07-12T13:36:59Z"
  },

  // Additional placeholder entries for when feeds have more content
  {
    title: "The Art of Strategic Content Planning",
    description: "How to align your content goals with business objectives and user needs.",
    link: "https://contentstrategy.substack.com/",
    source: "Content Strategy"
  },
  
  {
    title: "Clarity Over Cleverness",
    description: "Why simple, direct communication wins every time in professional settings.",
    link: "https://www.in200max.com/",
    source: "200 MAX"
  },
  
  {
    title: "Content Frameworks for Website Projects",
    description: "Clarify goals, make editorial decisions, and set priorities with proven frameworks.",
    link: "https://contentstrategy.substack.com/",
    source: "Content Strategy"
  },
  
  {
    title: "The Power of Constraints in Creative Work",
    description: "How limitations spark innovation and drive better decision-making.",
    link: "https://www.in200max.com/",
    source: "200 MAX"
  },
  
  {
    title: "User-Centered Content Strategy",
    description: "Putting audience needs at the center of your content planning process.",
    link: "https://contentstrategy.substack.com/",
    source: "Content Strategy"
  },
  
  {
    title: "Building Content Systems That Scale",
    description: "Creating repeatable processes for consistent, high-quality content production.",
    link: "https://www.in200max.com/",
    source: "200 MAX"
  }
];

export const getRSSContent = (): RSSItem[] => {
  return rssContent;
};