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

// ALL real content from your RSS feeds - extracted from actual feeds
export const rssContent: RSSItem[] = [
  // From 200 MAX (Beehiiv) - ALL 13 ARTICLES
  {
    title: "Success is Found Through a Series of Imperfect Steps",
    description: "Musing on the idea of dreaming vs doing",
    link: "https://www.in200max.com/p/finding-success",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8ef7bfa3-1051-4223-998b-312f706000a6/Dreamers_vs_Doers.png",
    source: "200 MAX",
    pubDate: "2025-03-07T14:17:00Z"
  },
  {
    title: "The School of Hard Knocks",
    description: "Formal education is great. So are alternative curriculums. 🙇‍♂️",
    link: "https://www.in200max.com/p/the-school-of-hard-knocks",
    source: "200 MAX",
    pubDate: "2025-02-28T13:38:00Z"
  },
  {
    title: "Learning to HALT",
    description: "Don't make decisions when you're hungry, angry, lonely, or tired.",
    link: "https://www.in200max.com/p/learning-to-halt",
    source: "200 MAX",
    pubDate: "2025-02-21T13:05:00Z"
  },
  {
    title: "Book Review: The Diary of a CEO",
    description: "Advice that sounds good and is easy to swallow. Placebo? Maybe.",
    link: "https://www.in200max.com/p/book-review-the-diary-of-a-ceo",
    source: "200 MAX",
    pubDate: "2025-02-15T14:11:00Z"
  },
  {
    title: "From Pagan to Profitable: A Very Brief History of Valentine's Day",
    description: "How one of capitalism's most successful holidays came to be.",
    link: "https://www.in200max.com/p/from-pagan-to-profitable-a-very-brief-history-of-valentine-s-day",
    source: "200 MAX",
    pubDate: "2025-02-14T13:43:00Z"
  },
  {
    title: "Find the Root Cause by Asking \"Why?\" (Five Times)",
    description: "Learn this simple technique to dig deep and fix problems for good.",
    link: "https://www.in200max.com/p/find-the-root-cause-by-asking-why-five-times",
    source: "200 MAX",
    pubDate: "2025-02-07T13:44:00Z"
  },
  {
    title: "Reflections on Dry January",
    description: "Cheers to the power of the pause.",
    link: "https://www.in200max.com/p/reflections-on-dry-january",
    source: "200 MAX",
    pubDate: "2025-01-31T13:10:00Z"
  },
  {
    title: "Transforming Division into Progress",
    description: "How to reconcile differing opinions and move things forward.",
    link: "https://www.in200max.com/p/transforming-division-into-progress",
    source: "200 MAX",
    pubDate: "2025-01-24T13:11:00Z"
  },
  {
    title: "DUMB Goals: Connecting Aspirations to Behaviors",
    description: "DUMB goals trade perfection for purposeful progress.",
    link: "https://www.in200max.com/p/dumb-goals-connecting-aspirations-to-behaviors",
    source: "200 MAX",
    pubDate: "2025-01-17T13:14:00Z"
  },
  {
    title: "Book Review: The Boron Letters by Gary Halbert",
    description: "Fatherly advice from one of marketing's greatest minds (nevermind the tax evasion).",
    link: "https://www.in200max.com/p/book-review-the-boron-letters-by-gary-halbert",
    source: "200 MAX",
    pubDate: "2025-01-15T13:14:00Z"
  },
  {
    title: "On Imposter Syndrome",
    description: "Doubt isn't proof of fraud; it's proof you're growing.",
    link: "https://www.in200max.com/p/on-imposter-syndrome",
    source: "200 MAX",
    pubDate: "2025-01-10T13:15:00Z"
  },
  {
    title: "Thought Leadership Is an Act of Generosity",
    description: "Why true leaders give their wisdom away.",
    link: "https://www.in200max.com/p/thought-leadership-is-an-act-of-generosity",
    source: "200 MAX",
    pubDate: "2025-01-03T15:58:19Z"
  },
  {
    title: "Introducing: 200 MAX",
    description: "Clarity is power.",
    link: "https://www.in200max.com/p/introducing-200-max",
    source: "200 MAX",
    pubDate: "2025-01-01T16:49:30Z"
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