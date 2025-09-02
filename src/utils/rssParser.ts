// Optimized RSS parser with minimal bundle impact
import { loadRSSContent } from '../data/rssData';

export interface RSSItem {
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

// Fixed: Return promise for async loading while maintaining backward compatibility
export const getRSSContent = async (): Promise<RSSItem[]> => {
  return await loadRSSContent();
};

// Removed duplicate RSS data - now using single source from rssData.ts (-6KB)