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

// ONLY real content from your actual RSS feeds - NO MOCK DATA
export const rssContent: RSSItem[] = [
  // From 200 MAX (Beehiiv) - REAL CONTENT ONLY
  {
    title: "Success is Found Through a Series of Imperfect Steps",
    description: "Musing on the idea of dreaming vs doing",
    link: "https://www.in200max.com/p/finding-success",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8ef7bfa3-1051-4223-998b-312f706000a6/Dreamers_vs_Doers.png",
    source: "200 MAX",
    pubDate: "2025-03-07T14:17:00Z"
  },
  
  // From Content Strategy (Substack) - REAL CONTENT ONLY  
  {
    title: "Content Strategy Puts Your Writing in Focus",
    description: "Content strategy is everything you do before beginning to write. It's your brief, your outline, your style guide, or anything else you use to plan content.",
    link: "https://contentstrategy.substack.com/p/content-strategy-puts-your-writing",
    image: "https://substackcdn.com/image/fetch/w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3a391ff2-d257-4c62-8999-042fc0b6878b_800x419.gif",
    source: "Content Strategy",
    pubDate: "2020-07-12T13:36:59Z"
  }
];

export const getRSSContent = (): RSSItem[] => {
  // Return ONLY the real RSS content - no mock data whatsoever
  return rssContent;
};