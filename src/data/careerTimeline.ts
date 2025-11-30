export interface CareerRole {
  id: string;
  type: "role" | "education";
  company?: string;
  title?: string;
  institution?: string;
  employmentType?: "Full-time" | "Contract" | "Freelance" | "Part-time";
  startDate: string; // YYYY-MM format
  endDate: string | "Present"; // YYYY-MM format or 'Present'
  logo?: string;
  description: string;
  contributions: string[];
  projects?: Array<{
    name: string;
    description: string;
    image?: string;
  }>;
  isFreelance?: boolean;
}

export const careerTimeline: CareerRole[] = [
  {
    id: "staff-qualcomm",
    type: "role",
    company: "Qualcomm",
    title: "Staff Manager, Marketing",
    employmentType: "Full-time",
    startDate: "2025-11",
    endDate: "Present",
    description:
      "I lead AI Platforms & GTM Innovation, shaping how our marketing organization adopts, scales, and governs AI. This is where strategy meets execution and execution becomes leverage.My team owns the enterprise roadmap for AI enablement: platform selection, integration, workflow design, playbooks, and Responsible AI guardrails. Our remit is to operationalize AI across marketing and adjacent teams — not just as a toolset, but as entirely new ways of working.",
    contributions: ["Millions of dollars in productivity gains from adoption of AI platforms."],
    projects: [
      {
        name: "AI at the Center",
        description: "AI-powered marketing transformation",
      },
    ],
  },
  {
    id: "senior-qualcomm",
    type: "role",
    company: "Qualcomm",
    title: "Senior Manager, Marketing",
    employmentType: "Full-time",
    startDate: "2022-05",
    endDate: "2025-11",
    description:
      "I was hired to build a Lead Generation function from the ground up and used Account-Based Marketing (ABM) as the strategic beachhead. That foundation expanded into an integrated GTM engine including Demand Generation and Channel Marketing programs. Along the way, I became one of the earliest advocates for Generative AI inside the company. I pushed hard to pilot WRITER in 2023, proved the value in weeks, and helped secure its approval as Qualcomm’s first enterprise GenAI platform. That win changed my career trajectory and set the stage for the AI-first transformation work I lead today.",
    contributions: [
      "Launched and scaled global ABM program, that influences billions in annual revenue across AI, Automotive, Compute, IoT, and more.",
      "Founded the “Alliance of Badass Marketers” (ABM), an affinity group to foster adoption of account-based and other modern GTM strategies.",
      "Honored with back-to-back 6sense Breakthrough Awards for “One Revenue Team” (2023) and “Ad Campaign of the Year” (2024).",
      "Established in-house Demand Gen and Channel Marketing capabilities — defining processes, on-boarding dozens of partners, training teams, and handing off ownership as the org scaled.",
      "Collaborated with compliance to define a gifting policy and onboarded a drop-shipping partner (PFL) to support our ABM program.",
      "Pioneered GenAI adoption with WRITER, scaling to 350+ active users and achieving 85% weekly engagement — saving 2,400 hours/month and delivering 8.6x ROI.",
    ],
    projects: [
      {
        name: "6sense Deployment",
        description: "Launch ABM.",
      },
    ],
  },
  {
    id: "metalab",
    type: "role",
    company: "Metalab",
    title: "Marketing Director",
    employmentType: "Full-time",
    startDate: "2020-08",
    endDate: "2021-11",
    description:
      "I led the in-house team responsible for marketing strategy and sales enablement. Our primary charter was to elevate the agency’s brand, especially among VCs and startup founders. Through innovative programming, content marketing, and operational rigor, we built upon Metalab’s incredible legacy while driving attributable revenue and positioning the agency as an inclusive place to work.",
    contributions: [
      "Generated $3.8M in attributable revenue by launching a targeted ABM program and activating media partnerships (podcasts, newsletters) — delivering a 5.5x ROI on marketing spend.",
      "Created and operationalized the Sirius Decision campaign framework (Reputation, Demand, Enablement, Acquisition) that became the foundation for all GTM programs — aligning sales and marketing.",
      "Produced 3 flagship case studies and 20+ sales decks that elevated Metalab’s positioning, while growing our social audience 17% YoY across LinkedIn, Twitter, and Instagram.",
      "Led a complete website redesign and rebuild in Webflow — implementing a WCAG AA-compliant design system, improving accessibility, and increasing organic search performance.",
      "Increased job listing traffic 75% YoY by combining SEO optimizations with paid social — accelerating recruiting for high-skill, high-demand design and engineering roles.",
    ],
    projects: [
      {
        name: "All Hands",
        description:
          "Led the design, development, and promotion of a Figma plugin (in partnership with Nappy) that promotes inclusive design.",
      },
    ],
  },
  {
    id: "marketing-blink",
    type: "role",
    company: "Blink",
    title: "Director of Marketing",
    employmentType: "Full-time",
    startDate: "2017-09",
    endDate: "2020-08",
    description: "Add your role description here. Describe your key responsibilities and impact.",
    contributions: [
      "Key achievement or responsibility #1",
      "Key achievement or responsibility #2",
      "Key achievement or responsibility #3",
    ],
    projects: [
      {
        name: "Project Mango",
        description: "Corporate rebrand",
      },
      {
        name: "This Year in Books",
        description: "Amazon Publishing",
      },
      {
        name: "Sumo Logic",
        description: "Rebrand + CMS Build",
      },
    ],
  },

  {
    id: "consultant",
    type: "role",
    company: "Brent Summers Marketing & UX Consulting",
    title: "Consultant",
    employmentType: "Freelance",
    startDate: "2014-01",
    endDate: "Present",
    description: "Add your previous role description here.",
    contributions: ["Key achievement or responsibility #1", "Key achievement or responsibility #2"],
  },
  {
    id: "kellogg",
    type: "education",
    institution: "Kellogg Executive Education",
    title: "Product Strategy Certificate",
    startDate: "2020",
    endDate: "2020",
    description:
      "This program equips learners to think like the CEO of a product or service - focusing on a cradle-to-grave approach for managing and optimizing the life of a product or service.",
    contributions: [],
  },
  {
    id: "daytona-state",
    type: "education",
    institution: "Daytona State College",
    title: "General Studies",
    startDate: "2006",
    endDate: "2008",
    description: "Dropped out due to big promotion at work",
    contributions: [],
  },
  {
    id: "uncc",
    type: "education",
    institution: "UNC Charlotte",
    title: "General Studies",
    startDate: "1999-09",
    endDate: "2000-02",
    description: "Dropped out due to cancer diagnosis",
    contributions: [],
  },
];

// Helper to calculate duration in months
export const calculateDuration = (start: string, end: string): number => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  return Math.max(months, 1); // Minimum 1 month
};

// Format date range for display
export const formatDateRange = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? null : new Date(end);

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const startFormatted = formatMonth(startDate);
  const endFormatted = endDate ? formatMonth(endDate) : "PRESENT";

  return `${startFormatted.toUpperCase()} – ${endFormatted}`;
};

// Calculate duration display
export const formatDuration = (start: string, end: string): string => {
  const months = calculateDuration(start, end);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
};
