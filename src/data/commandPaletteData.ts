import { Home, Briefcase, Mic, FileText, Palette, Users, Lightbulb, Play, Award, MessageSquare, Linkedin, Twitter, Github, Mail, Calendar, Tag } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { thoughtLeadershipData } from './thoughtLeadership';

export interface CommandItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  keywords?: string[];
  type: 'page' | 'section' | 'action' | 'external';
  description?: string;
  badge?: string;
  bodyContent?: string; // Indexed for search but not displayed
}

export const commandPaletteData: CommandItem[] = [
  // ===== LEVEL 1: PRIMARY PAGES =====
  {
    id: 'home',
    title: 'Home',
    url: '/',
    icon: Home,
    type: 'page',
    keywords: ['home', 'start', 'main', 'index', 'landing', 'story', 'about', 'biography'],
    bodyContent: 'AI-powered marketing leader leveraging generative AI since June 2020. My story background experience. Transformational leader combining strategic vision technical implementation and behavior change. Two decades of experience at intersection of marketing technology and UX. Fan-first mindset NASCAR career proving ground agency Digitaria Digital Telepathy Blink Metalab Qualcomm. Enterprise marketing teams ABM account-based marketing AI platforms GTM innovation. Strategic marketing leadership human-centered design AI technology strategy.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    url: '/leadership',
    icon: Briefcase,
    type: 'page',
    keywords: ['leadership', 'principles', 'management', 'lead', 'vision'],
    description: 'Leadership principles and philosophy',
    bodyContent: 'Leadership that spans vision and execution. Spotting trends and building bridges that unlock capability. Empathy fuels innovation understanding users customers teammates progress. Transformation must land ideas shift reality make big bets tangible. Data earns decisions gut sparks ideas evidence unlocks investment trust. Collaboration multiplies force silos kill momentum break them down. Play the long game today wins compound tomorrow advantage.',
  },
  {
    id: 'speaking',
    title: 'Speaking',
    url: '/speaking',
    icon: Mic,
    type: 'page',
    keywords: ['speaking', 'talks', 'presentations', 'media', 'speeches', 'keynote'],
    description: 'Speaking engagements and media appearances',
    bodyContent: 'Share stories strategic frameworks lessons learned from two decades leading change. Conference presentations podcasts panels interviews. Global stages to local meetups wherever marketing technology and design collide. Biography headshot media archive book for your next event.',
  },
  {
    id: 'design-case-studies',
    title: 'Design Case Studies',
    url: '/design-case-studies',
    icon: Palette,
    type: 'page',
    keywords: ['design', 'case', 'studies', 'portfolio', 'work', 'projects', 'ux'],
    description: 'Design and UX case studies',
    bodyContent: 'Real projects technology implementations recognizable brands. User experience design strategy enterprise solutions digital transformation customer journey mapping responsive design cloud computing.',
  },
  {
    id: 'designer-in-residence',
    title: 'Designer in Residence',
    url: '/designer-in-residence',
    icon: Users,
    type: 'page',
    keywords: ['designer', 'residence', 'mentorship', 'program'],
    description: 'Design mentorship program',
    badge: 'Coming Soon',
    bodyContent: 'UC San Diego industry affiliate program mentor students co-lead design programs connect academic research enterprise challenges. October 2025 invitation design education teaching collaboration university.',
  },
  {
    id: 'llms',
    title: 'LLMs.txt',
    url: '/llms.txt',
    icon: FileText,
    type: 'page',
    keywords: ['llms', 'llm', 'txt', 'ai', 'models', 'machine readable'],
    description: 'Machine-readable site information',
    bodyContent: 'Machine-readable site information for AI models LLMs large language models structured data. About expertise skills key projects achievements professional profiles contact. Enterprise AI platforms GTM innovation ABM account-based marketing WRITER Qualcomm.',
  },

  // ===== LEVEL 3: SPECIFIC TALKS & PRESENTATIONS =====
  {
    id: 'talk-webit-2025',
    title: 'Beyond Buzzwords: Real AI, Real Marketing, Real Results',
    url: 'https://www.youtube.com/watch?v=eEbuoK5DS30',
    icon: Play,
    type: 'external',
    keywords: ['webit', 'ai', 'marketing', 'results', '2025', 'conference', 'presentation'],
    description: 'Webit Conference 2025',
    badge: 'Video',
    bodyContent: 'Webit conference 2025 presentation keynote AI marketing results real world implementation practical strategies buzzwords cutting through hype actionable insights enterprise adoption.',
  },
  {
    id: 'talk-happier-humans',
    title: 'Happier Humans, Better Business',
    url: 'https://youtu.be/ApLKfzjaN3Y',
    icon: Play,
    type: 'external',
    keywords: ['humans', 'business', 'ai', 'leaders', 'forum', '2025', 'happiness', 'wellbeing'],
    description: 'AI Leaders Forum 2025',
    badge: 'Video',
    bodyContent: 'AI leaders forum 2025 happier humans better business employee wellbeing productivity satisfaction workplace culture human-centered AI implementation people first technology adoption.',
  },
  {
    id: 'talk-buyer-remorse',
    title: "Five Tips to Avoid Generative AI Buyer's Remorse",
    url: 'https://youtu.be/d3A-gHkwiBE',
    icon: Play,
    type: 'external',
    keywords: ['ai', 'buyer', 'remorse', 'tips', 'generative', 'purchasing', 'vendor', 'selection'],
    description: 'Conference presentation',
    badge: 'Video',
    bodyContent: 'AI marketing summit May 2025 five tips avoid generative AI buyers remorse Qualcomm AI adoption journey practical strategies integrating AI workflows control quality pitfalls deliver value day one vendor selection purchasing decisions.',
  },
  {
    id: 'talk-ux-flywheel',
    title: 'The UX Flywheel',
    url: 'https://www.youtube.com/watch?v=UYApYNEnaMM',
    icon: Play,
    type: 'external',
    keywords: ['ux', 'flywheel', 'framework', 'marketing', 'design', 'funnel', 'alternative', 'user-centered'],
    description: 'Iconic presentation on user-centered marketing',
    badge: 'Video',
    bodyContent: 'UX flywheel Blink UX San Diego digital designers user-centered alternative marketing funnel compelling definition strategy framework customer journey user experience design thinking momentum growth.',
  },

  // ===== LEVEL 3: CASE STUDIES =====
  {
    id: 'case-study-qualcomm',
    title: '8.6X ROI with WRITER at Qualcomm',
    url: 'https://writer.com/blog/qualcomm-customer-story/',
    icon: Award,
    type: 'external',
    keywords: ['qualcomm', 'writer', 'roi', 'case', 'study', 'ai', 'success', 'implementation'],
    description: 'AI platform implementation success',
    badge: 'External',
    bodyContent: 'Qualcomm WRITER case study 8.6x ROI platform discovery roll out scale up generative AI 350 active users 85% weekly engagement 2400 hours saved monthly productivity employee satisfaction marketing legal analytics success story.',
  },

  // ===== LEVEL 3: SOCIAL & CONTACT =====
  {
    id: 'linkedin',
    title: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/brentjsummers/',
    icon: Linkedin,
    type: 'external',
    keywords: ['linkedin', 'profile', 'social', 'connect', 'network', 'professional'],
    description: 'Connect on LinkedIn',
    badge: 'Social',
    bodyContent: 'Connect LinkedIn professional network Brent Summers profile career experience endorsements recommendations connections collaborate speaking engagements partnerships.',
  },
  {
    id: 'twitter',
    title: 'Twitter / X Profile',
    url: 'https://x.com/brentsummers',
    icon: Twitter,
    type: 'external',
    keywords: ['twitter', 'x', 'social', 'tweets', 'updates', 'thoughts'],
    description: 'Follow on Twitter/X',
    badge: 'Social',
    bodyContent: 'Follow Twitter X social media updates thoughts insights Brent Summers tweets commentary AI marketing technology design real-time engagement conversations.',
  },
  {
    id: 'github',
    title: 'GitHub Profile',
    url: 'https://github.com/therealbrent',
    icon: Github,
    type: 'external',
    keywords: ['github', 'code', 'projects', 'developer', 'repositories', 'open source'],
    description: 'View GitHub projects',
    badge: 'Social',
    bodyContent: 'GitHub profile code projects repositories developer Brent Summers open source contributions technical work vibe coding experiments portfolio website development.',
  },
  {
    id: 'schedule-call',
    title: 'Schedule a Call',
    url: 'https://outlook.office.com/bookwithme/user/f752142364414ef39fe29066ebb21219%40qti.qualcomm.com?anonymous&ismsaljsauthenabled=true',
    icon: Calendar,
    type: 'external',
    keywords: ['schedule', 'call', 'meeting', 'book', 'calendar', 'appointment', 'consult', 'speak'],
    description: 'Book time to connect',
    badge: 'External',
    bodyContent: 'Schedule call meeting appointment book time connect consultation speaking engagement collaboration partnership advisory discussion strategy session calendar availability.',
  },

  // ===== LEVEL 3: NEWSLETTERS & PROJECTS =====
  {
    id: 'full-stack-content',
    title: 'Full Stack Content Newsletter',
    url: 'https://contentstrategy.substack.com/',
    icon: Mail,
    type: 'external',
    keywords: ['newsletter', 'content', 'strategy', 'substack', 'full', 'stack', 'writing', 'insights'],
    description: 'Newsletter about content strategy',
    badge: 'Newsletter',
    bodyContent: 'Full stack content newsletter substack content strategy writing insights Brent Summers expertise marketing content creation editorial planning strategic communications storytelling.',
  },
  {
    id: '200-max',
    title: '200 MAX',
    url: 'https://in200max.com/',
    icon: Award,
    type: 'external',
    keywords: ['200', 'max', 'insights', 'writing', 'brief', 'concise', 'clarity'],
    description: 'Maximum clarity in 200 words',
    badge: 'Project',
    bodyContent: '200 MAX maximum clarity 200 words insights writing project brief concise clear communication distilled wisdom focused thoughts essential ideas brevity precision.',
  },
];

// ===== DYNAMIC: THOUGHT LEADERSHIP TOPICS =====
// Extract unique topics from thought leadership data
const uniqueTopics = Array.from(
  new Set(
    thoughtLeadershipData
      .flatMap(item => item.topics || [])
  )
).sort();

// Generate command items for each topic
const topicCommands: CommandItem[] = uniqueTopics.map(topic => ({
  id: `topic-${topic.toLowerCase().replace(/\s+/g, '-')}`,
  title: `Topic: ${topic}`,
  url: `/speaking?topic=${encodeURIComponent(topic)}`,
  icon: Tag,
  type: 'section' as const,
  keywords: ['topic', 'filter', topic.toLowerCase()],
  description: `Filter thought leadership by ${topic}`,
  badge: 'Topic',
  bodyContent: `${topic} topic filter thought leadership presentations podcasts panels articles speaking engagements`,
}));

// Combine static and dynamic commands
export const allCommandPaletteData = [...commandPaletteData, ...topicCommands];
