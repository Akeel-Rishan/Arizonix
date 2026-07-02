export interface ProjectResult {
  metric: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export type PortfolioColor = 'blue' | 'purple' | 'cyan';
export type PortfolioDevice = 'desktop' | 'tablet' | 'mobile';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryColor: PortfolioColor;
  tags: string[];
  challenge: string;
  solution: string;
  results: ProjectResult[];
  device: PortfolioDevice;
  mockupBgColor: PortfolioColor;
  testimonial: ProjectTestimonial;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'leadflow-ai',
    title: 'LeadFlow AI — Sales Automation Platform',
    category: 'AI Automation',
    categoryColor: 'blue',
    tags: ['Next.js', 'OpenAI', 'Supabase', 'Twilio'],
    challenge:
      'A mid-sized sales team was losing leads due to slow response times and manual follow-up processes.',
    solution:
      'Built a fully automated AI-powered lead qualification and follow-up platform with real-time CRM sync.',
    results: [
      { metric: '3x', label: 'Lead Conversion Rate' },
      { metric: '80%', label: 'Reduction in Manual Work' },
      { metric: '24/7', label: 'Automated Outreach' },
    ],
    device: 'desktop',
    mockupBgColor: 'blue',
    testimonial: {
      quote:
        'Arizonix transformed our entire sales pipeline. The ROI was visible within the first month.',
      author: 'James Carter',
      role: 'VP of Sales, NovaTech',
    },
  },
  {
    id: 'meditrack',
    title: 'MediTrack — Patient Management System',
    category: 'Healthcare',
    categoryColor: 'cyan',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    challenge:
      'A private clinic network struggled with fragmented patient records and inefficient appointment scheduling.',
    solution:
      'Delivered a cross-platform patient management system with real-time scheduling, HIPAA-compliant records, and automated reminders.',
    results: [
      { metric: '40%', label: 'Faster Patient Onboarding' },
      { metric: '60%', label: 'Fewer Missed Appointments' },
      { metric: '99.9%', label: 'System Uptime' },
    ],
    device: 'tablet',
    mockupBgColor: 'cyan',
    testimonial: {
      quote:
        'Our staff went from drowning in paperwork to focusing entirely on patient care. Game-changing.',
      author: 'Dr. Sarah Patel',
      role: 'Clinical Director, MediCore Group',
    },
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere — E-commerce Platform',
    category: 'E-commerce',
    categoryColor: 'purple',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Cloudflare'],
    challenge:
      'An established retail brand needed to migrate from a legacy platform causing lost sales due to poor performance.',
    solution:
      'Rebuilt the entire e-commerce experience with a high-performance storefront, smart recommendations, and streamlined checkout.',
    results: [
      { metric: '2.5x', label: 'Revenue Growth' },
      { metric: '55%', label: 'Improved Conversion' },
      { metric: '0.8s', label: 'Page Load Time' },
    ],
    device: 'mobile',
    mockupBgColor: 'purple',
    testimonial: {
      quote:
        'We went from 3 second load times to under a second. Our customers noticed immediately.',
      author: 'Emma Rodriguez',
      role: 'CEO, BrightCart Retail',
    },
  },
  {
    id: 'constructiq',
    title: 'ConstructIQ — Field Operations Platform',
    category: 'Construction',
    categoryColor: 'blue',
    tags: ['React Native', 'Node.js', 'AWS', 'Socket.io'],
    challenge:
      'A large construction firm was managing 200+ sites using spreadsheets, causing costly delays and miscommunication.',
    solution:
      'Built a real-time field operations platform with live crew tracking, project timelines, resource allocation, and mobile reporting.',
    results: [
      { metric: '35%', label: 'Cost Reduction' },
      { metric: '200+', label: 'Sites Managed' },
      { metric: 'Real-time', label: 'Field Updates' },
    ],
    device: 'desktop',
    mockupBgColor: 'blue',
    testimonial: {
      quote:
        'Having real-time visibility across all our sites changed everything. We saved millions in the first year.',
      author: 'Michael Torres',
      role: 'Operations Director, BuildPro Group',
    },
  },
];
