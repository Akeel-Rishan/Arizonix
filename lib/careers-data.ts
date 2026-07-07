export interface CareerPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'AI & ML' | 'Operations';
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  location: 'Remote';
  level: 'Senior' | 'Lead' | 'Principal';
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  postedDate: string;
  featured: boolean;
}
const commonResponsibilities = [
  'Own solutions from technical discovery through production deployment',
  'Collaborate directly with clients and the wider product team',
  'Write tested, documented code and contribute thoughtful reviews',
];
export const openPositions: CareerPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote',
    level: 'Senior',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    description:
      'Build production-grade web applications and AI-powered platforms for clients across 12+ industries.',
    responsibilities: [
      'Architect full-stack applications using Next.js and Node.js',
      'Design scalable PostgreSQL schemas',
      ...commonResponsibilities,
    ],
    requirements: [
      '5+ years of professional full-stack experience',
      'Deep React, Next.js, and TypeScript expertise',
      'Strong Node.js, PostgreSQL, and cloud deployment skills',
      'Excellent written English communication',
    ],
    niceToHave: [
      'AI/LLM integration experience',
      'Supabase or Cloudflare familiarity',
      'Agency or consultancy experience',
    ],
    postedDate: '2026-06-15',
    featured: true,
  },
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI/ML Engineer',
    department: 'AI & ML',
    type: 'Full-Time',
    location: 'Remote',
    level: 'Senior',
    skills: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'pgvector'],
    description:
      'Design production AI automation systems, from RAG pipelines and agents to custom machine-learning models.',
    responsibilities: [
      'Design LLM, RAG, and agentic workflows',
      'Build FastAPI AI services and evaluation pipelines',
      ...commonResponsibilities,
    ],
    requirements: [
      '4+ years of professional AI engineering',
      'Strong Python and FastAPI experience',
      'Production experience with LLMs and vector databases',
      'Ability to explain AI clearly to clients',
    ],
    niceToHave: [
      'LangChain or LlamaIndex experience',
      'AWS Bedrock or Vertex AI experience',
      'Data engineering background',
    ],
    postedDate: '2026-06-20',
    featured: true,
  },
  {
    id: 'senior-mobile-engineer',
    title: 'Senior Mobile Engineer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote',
    level: 'Senior',
    skills: ['React Native', 'Flutter', 'TypeScript', 'Expo'],
    description:
      'Lead delivery of high-quality cross-platform iOS and Android applications.',
    responsibilities: [
      'Build mobile apps with React Native or Flutter',
      'Implement offline sync, notifications, and device integrations',
      ...commonResponsibilities,
    ],
    requirements: [
      '5+ years of mobile development',
      'At least 3 production App Store or Play Store releases',
      'Strong TypeScript and mobile performance skills',
    ],
    niceToHave: [
      'Native Swift or Kotlin experience',
      'Offline-first architecture experience',
      'Expo experience',
    ],
    postedDate: '2026-07-01',
    featured: false,
  },
  {
    id: 'senior-ui-ux-designer',
    title: 'Senior UI/UX Designer',
    department: 'Design',
    type: 'Full-Time',
    location: 'Remote',
    level: 'Senior',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    description:
      'Own product design from discovery through polished engineering handoff.',
    responsibilities: [
      'Lead discovery, wireframing, prototyping, and visual design',
      'Build scalable design systems',
      'Conduct research and usability testing',
    ],
    requirements: [
      '5+ years of product design experience',
      'Expert Figma skills',
      'Portfolio of complex SaaS and data-rich products',
      'Strong client communication',
    ],
    niceToHave: [
      'Motion design expertise',
      'Storybook experience',
      'WCAG accessibility knowledge',
    ],
    postedDate: '2026-07-03',
    featured: false,
  },
];
