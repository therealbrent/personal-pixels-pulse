import type { ThoughtLeadershipItem } from './thoughtLeadership';

export const MEDIA_SELECTION = {
  lead: 'the-drum-judge-of-the-day-2026',
  supporting: ['forbes-writer-ai-leaders-forum', 'humans-of-ai-brent-summers-2026'],
  additional: ['ipsos-cannes-2026', 'linkedin-sales-revenue-org-2026', 'adobe-skill-exchange-2026', 'userled-ai-abm-2026'],
};

/** Count completed, documented talks/panels; bundled venues count individually. */
export function countSpeakingEngagements(items: ThoughtLeadershipItem[], today: string): number {
  return items.reduce((total, item) => {
    if (!['presentation', 'panel'].includes(item.type) || item.date > today) return total;
    return total + (Array.isArray(item.venue) ? item.venue.length : 1);
  }, 0);
}