import { Home, Briefcase, Mic, FileText, Palette, Users, Lightbulb, Play, Award, MessageSquare, Linkedin, Twitter, Github, Mail, Calendar } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

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
    keywords: ['home', 'start', 'main', 'index', 'landing'],
    bodyContent: 'AI-powered marketing leader leveraging generative AI since June 2020. Transformational leader combining strategic vision technical implementation and behavior change. Two decades of experience at intersection of marketing technology and UX. Experience case studies writing insights. Enterprise marketing teams plan campaigns organize teams create content grow skills.',
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
  },

  // ===== LEVEL 3: SPECIFIC TALKS & PRESENTATIONS =====
  {
    id: 'talk-webit-2025',
    title: 'Beyond Buzzwords: Real AI, Real Marketing, Real Results',
    url: 'https://www.youtube.com/watch?v=eEbuoK5DS30',
    icon: Play,
    type: 'external',
    keywords: ['webit', 'ai', 'marketing', 'results', '2025'],
    description: 'Webit Conference 2025',
    badge: 'Video',
  },
  {
    id: 'talk-happier-humans',
    title: 'Happier Humans, Better Business',
    url: 'https://youtu.be/ApLKfzjaN3Y',
    icon: Play,
    type: 'external',
    keywords: ['humans', 'business', 'ai', 'leaders', 'forum', '2025'],
    description: 'AI Leaders Forum 2025',
    badge: 'Video',
  },
  {
    id: 'talk-buyer-remorse',
    title: "Five Tips to Avoid Generative AI Buyer's Remorse",
    url: 'https://youtu.be/d3A-gHkwiBE',
    icon: Play,
    type: 'external',
    keywords: ['ai', 'buyer', 'remorse', 'tips', 'generative'],
    description: 'Conference presentation',
    badge: 'Video',
  },
  {
    id: 'talk-ux-flywheel',
    title: 'The UX Flywheel',
    url: 'https://www.youtube.com/watch?v=UYApYNEnaMM',
    icon: Play,
    type: 'external',
    keywords: ['ux', 'flywheel', 'framework', 'marketing', 'design'],
    description: 'Iconic presentation on user-centered marketing',
    badge: 'Video',
  },

  // ===== LEVEL 3: CASE STUDIES =====
  {
    id: 'case-study-qualcomm',
    title: '8.6X ROI with WRITER at Qualcomm',
    url: 'https://writer.com/blog/qualcomm-customer-story/',
    icon: Award,
    type: 'external',
    keywords: ['qualcomm', 'writer', 'roi', 'case', 'study', 'ai'],
    description: 'AI platform implementation success',
    badge: 'External',
  },

  // ===== LEVEL 3: SOCIAL & CONTACT =====
  {
    id: 'linkedin',
    title: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/brentjsummers/',
    icon: Linkedin,
    type: 'external',
    keywords: ['linkedin', 'profile', 'social', 'connect'],
    description: 'Connect on LinkedIn',
    badge: 'Social',
  },
  {
    id: 'twitter',
    title: 'Twitter / X Profile',
    url: 'https://x.com/brentsummers',
    icon: Twitter,
    type: 'external',
    keywords: ['twitter', 'x', 'social', 'tweets'],
    description: 'Follow on Twitter/X',
    badge: 'Social',
  },
  {
    id: 'github',
    title: 'GitHub Profile',
    url: 'https://github.com/therealbrent',
    icon: Github,
    type: 'external',
    keywords: ['github', 'code', 'projects', 'developer'],
    description: 'View GitHub projects',
    badge: 'Social',
  },
  {
    id: 'schedule-call',
    title: 'Schedule a Call',
    url: 'https://outlook.office.com/bookwithme/user/f752142364414ef39fe29066ebb21219%40qti.qualcomm.com?anonymous&ismsaljsauthenabled=true',
    icon: Calendar,
    type: 'external',
    keywords: ['schedule', 'call', 'meeting', 'book', 'calendar', 'appointment'],
    description: 'Book time to connect',
    badge: 'External',
  },

  // ===== LEVEL 3: NEWSLETTERS & PROJECTS =====
  {
    id: 'full-stack-content',
    title: 'Full Stack Content Newsletter',
    url: 'https://contentstrategy.substack.com/',
    icon: Mail,
    type: 'external',
    keywords: ['newsletter', 'content', 'strategy', 'substack', 'full', 'stack'],
    description: 'Newsletter about content strategy',
    badge: 'Newsletter',
  },
  {
    id: '200-max',
    title: '200 MAX',
    url: 'https://in200max.com/',
    icon: Award,
    type: 'external',
    keywords: ['200', 'max', 'insights', 'writing'],
    description: 'Maximum clarity in 200 words',
    badge: 'Project',
  },
];
