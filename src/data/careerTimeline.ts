export interface CareerRole {
  id: string;
  type: 'role' | 'education';
  company?: string;
  title?: string;
  institution?: string;
  employmentType?: 'Full-time' | 'Contract' | 'Freelance' | 'Part-time';
  startDate: string; // YYYY-MM format
  endDate: string | 'Present'; // YYYY-MM format or 'Present'
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
    id: 'role-1',
    type: 'role',
    company: 'Your Company',
    title: 'Your Current Role',
    employmentType: 'Full-time',
    startDate: '2023-01',
    endDate: 'Present',
    description: 'Add your role description here. Describe your key responsibilities and impact.',
    contributions: [
      'Key achievement or responsibility #1',
      'Key achievement or responsibility #2',
      'Key achievement or responsibility #3',
    ],
    projects: [
      {
        name: 'Project Name',
        description: 'Brief project description',
      }
    ],
  },
  {
    id: 'role-2',
    type: 'role',
    company: 'Previous Company',
    title: 'Previous Role',
    employmentType: 'Full-time',
    startDate: '2020-06',
    endDate: '2022-12',
    description: 'Add your previous role description here.',
    contributions: [
      'Key achievement or responsibility #1',
      'Key achievement or responsibility #2',
    ],
  },
  {
    id: 'education-1',
    type: 'education',
    institution: 'University Name',
    title: 'Degree Name',
    startDate: '2016-09',
    endDate: '2020-05',
    description: 'Your degree and relevant coursework or achievements.',
    contributions: [],
  },
];

// Helper to calculate duration in months
export const calculateDuration = (start: string, end: string): number => {
  const startDate = new Date(start);
  const endDate = end === 'Present' ? new Date() : new Date(end);
  
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 
    + (endDate.getMonth() - startDate.getMonth());
  
  return Math.max(months, 1); // Minimum 1 month
};

// Format date range for display
export const formatDateRange = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === 'Present' ? null : new Date(end);
  
  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  
  const startFormatted = formatMonth(startDate);
  const endFormatted = endDate ? formatMonth(endDate) : 'PRESENT';
  
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
