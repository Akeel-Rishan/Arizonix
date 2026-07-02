import {
  CheckCircle2,
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  Search,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export type ProcessColor = 'blue' | 'purple' | 'cyan';

export interface ProcessPhase {
  id: number;
  icon: LucideIcon;
  color: ProcessColor;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processPhases: ProcessPhase[] = [
  {
    id: 1,
    icon: Search,
    color: 'cyan',
    duration: 'Week 1',
    title: 'Discovery',
    subtitle: 'Understanding Your Vision',
    description:
      'We dive deep into your business goals, target audience, technical requirements, and competitive landscape to build a solid project foundation.',
    deliverables: [
      'Requirements Document',
      'Technical Audit',
      'Competitor Analysis',
      'Project Scope',
    ],
  },
  {
    id: 2,
    icon: Lightbulb,
    color: 'blue',
    duration: 'Week 1–2',
    title: 'Strategy',
    subtitle: 'Architecting the Solution',
    description:
      'Our architects and strategists map out the full technical solution, technology stack, system architecture, and a detailed project roadmap.',
    deliverables: [
      'Technical Architecture',
      'Technology Stack',
      'Project Roadmap',
      'Risk Assessment',
    ],
  },
  {
    id: 3,
    icon: Palette,
    color: 'purple',
    duration: 'Week 2–3',
    title: 'UI/UX Design',
    subtitle: 'Crafting the Experience',
    description:
      'Our designers create stunning, conversion-optimized interfaces grounded in user research, brand identity, and modern design principles.',
    deliverables: [
      'Wireframes',
      'UI Design System',
      'Interactive Prototypes',
      'User Flow Maps',
    ],
  },
  {
    id: 4,
    icon: Code2,
    color: 'blue',
    duration: 'Week 3–8',
    title: 'Development',
    subtitle: 'Engineering the Product',
    description:
      'Our engineers build your product using modern, scalable technologies — with clean code, comprehensive testing, and agile sprint delivery.',
    deliverables: [
      'Frontend Development',
      'Backend APIs',
      'Database Architecture',
      'Third-Party Integrations',
    ],
  },
  {
    id: 5,
    icon: CheckCircle2,
    color: 'cyan',
    duration: 'Week 7–9',
    title: 'Testing',
    subtitle: 'Ensuring Flawless Quality',
    description:
      'Rigorous QA across functionality, performance, security, and accessibility ensures your product launches without defects or vulnerabilities.',
    deliverables: [
      'QA Test Reports',
      'Performance Benchmarks',
      'Security Audit',
      'Cross-Device Testing',
    ],
  },
  {
    id: 6,
    icon: Rocket,
    color: 'purple',
    duration: 'Week 9–10',
    title: 'Deployment',
    subtitle: 'Launching With Confidence',
    description:
      'We handle the full deployment pipeline — CI/CD configuration, cloud infrastructure setup, DNS, SSL, monitoring, and zero-downtime launch.',
    deliverables: [
      'Production Deployment',
      'CI/CD Pipeline',
      'Monitoring Setup',
      'Launch Checklist',
    ],
  },
  {
    id: 7,
    icon: TrendingUp,
    color: 'blue',
    duration: 'Ongoing',
    title: 'Growth & Support',
    subtitle: 'Scaling Your Success',
    description:
      'Post-launch, we provide ongoing support, performance monitoring, feature development, and strategic consulting to help your product grow.',
    deliverables: [
      '24/7 Monitoring',
      'Performance Reports',
      'Feature Roadmap',
      'Dedicated Support',
    ],
  },
];
