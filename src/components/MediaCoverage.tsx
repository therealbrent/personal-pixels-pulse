import { Link } from 'react-router-dom';
import { thoughtLeadershipData, type ThoughtLeadershipItem } from '@/data/thoughtLeadership';
import { MEDIA_SELECTION } from '@/data/mediaSelection';
import { BrutalistButton } from './ui/BrutalistButton';
import { ExternalLink } from './ui/ExternalLink';

const formats: Record<string, string> = {
  'the-drum-judge-of-the-day-2026': 'Editorial interview',
  'forbes-writer-ai-leaders-forum': 'Business coverage',
  'humans-of-ai-brent-summers-2026': 'Podcast conversation',
  'ipsos-cannes-2026': 'Panel discussion',
  'linkedin-sales-revenue-org-2026': 'Social feature',
  'adobe-skill-exchange-2026': 'On-demand presentation',
  'userled-ai-abm-2026': 'Video interview',
};

function resolveItems(ids: string[]) {
  return ids.flatMap((id) => {
    const item = thoughtLeadershipData.find((entry) => entry.id === id);
    return item ? [item] : [];
  });
}

function MediaAction({ item }: { item: ThoughtLeadershipItem }) {
  const href = item.videoUrl || item.url;
  if (!href) return null;
  const isVideo = ['presentation', 'panel', 'podcast', 'interview'].includes(item.type) && item.publication !== 'The Drum';
  return (
    <BrutalistButton asChild variant="secondary" className="self-start mt-auto">
      <ExternalLink href={href} className="no-underline" aria-label={`${isVideo ? 'Watch' : 'Read'}: ${item.title}`}>
        {isVideo ? 'Watch' : 'Read'}
      </ExternalLink>
    </BrutalistButton>
  );
}

export default function MediaCoverage() {
  const [lead] = resolveItems([MEDIA_SELECTION.lead]);
  if (!lead) return null;
  return (
    <section aria-labelledby="media-heading" className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
      <div className="border-b-4 border-foreground pb-5 mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 id="media-heading" className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">In the Media</h2>
        <BrutalistButton asChild variant="secondary"><Link to="/archive">Browse Archive</Link></BrutalistButton>
      </div>

      <article className="grid md:grid-cols-2 border-2 sm:border-4 border-foreground mb-5 bg-primary text-primary-foreground">
        {lead.imageUrl && (
          <div className="aspect-[16/10] md:aspect-auto md:min-h-[320px] border-b-2 sm:border-b-4 md:border-b-0 md:border-r-4 border-foreground overflow-hidden bg-card">
            <img src={lead.imageUrl} alt="Brent Summers, The Drum Judge of the Day" loading="lazy" width="800" height="500" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-5 sm:p-8 flex flex-col items-start">
          <p className="text-xs font-bold uppercase mb-3">{formats[lead.id]}</p>
          <p className="text-2xl sm:text-3xl font-black mb-5">{lead.publication}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-6">{lead.title}</h3>
          <MediaAction item={lead} />
        </div>
      </article>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {resolveItems(MEDIA_SELECTION.supporting).map((item) => (
          <article key={item.id} className="border-2 sm:border-4 border-foreground bg-card text-card-foreground flex flex-col min-w-0">
            <div className="px-5 sm:px-6 py-4 border-b-2 sm:border-b-4 border-foreground bg-foreground text-background">
              <p className="text-xs font-bold uppercase mb-1">{formats[item.id]}</p>
              <p className="text-2xl sm:text-3xl font-black">{item.publication}</p>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1 items-start">
              <h3 className="text-xl sm:text-2xl font-black leading-tight mb-5">{item.title}</h3>
              {item.id === 'forbes-writer-ai-leaders-forum' && item.quote && (
                <blockquote className="border-l-4 border-primary pl-4 mb-6 text-sm sm:text-base font-semibold leading-relaxed">{item.quote}</blockquote>
              )}
              <MediaAction item={item} />
            </div>
          </article>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {resolveItems(MEDIA_SELECTION.additional).map((item) => (
          <article key={item.id} className="border-2 sm:border-4 border-foreground bg-card text-card-foreground flex flex-col min-w-0">
            {item.imageUrl && <img src={item.imageUrl} alt="" loading="lazy" width="480" height="270" className="w-full aspect-video object-cover border-b-2 sm:border-b-4 border-foreground" />}
            <div className="p-4 sm:p-5 flex flex-col flex-1 items-start">
              <p className="text-xs font-bold uppercase text-muted-foreground mb-2">{formats[item.id]}</p>
              <p className="text-lg font-black mb-3">{item.publication || item.venue}</p>
              <h3 className="text-base font-bold leading-snug mb-5">{item.title}</h3>
              <MediaAction item={item} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}