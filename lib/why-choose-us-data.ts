import {
  Gauge,
  GitBranch,
  Headphones,
  Layers,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type AdvantageColor = 'blue' | 'purple' | 'cyan';

export interface Advantage {
  id: number;
  icon: LucideIcon;
  color: AdvantageColor;
  title: string;
  description: string;
  highlight: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const advantages: Advantage[] = [
  {
    id: 1,
    icon: Layers,
    color: 'blue',
    title: 'Modern Technology Stack',
    description:
      'We build exclusively with cutting-edge, battle-tested technologies — Next.js, React, Node.js, PostgreSQL, and AI frameworks that scale from startup to enterprise.',
    highlight: 'Always current, never legacy',
  },
  {
    id: 2,
    icon: ShieldCheck,
    color: 'cyan',
    title: 'Enterprise-Grade Security',
    description:
      'Every product we build follows OWASP security standards, with end-to-end encryption, secure authentication, rate limiting, and regular penetration testing.',
    highlight: 'Security by design, not afterthought',
  },
  {
    id: 3,
    icon: Gauge,
    color: 'purple',
    title: 'Performance Optimized',
    description:
      'We engineer for speed — achieving 95+ Lighthouse scores, sub-second load times, and optimized Core Web Vitals that boost both UX and search rankings.',
    highlight: '95+ Lighthouse performance',
  },
  {
    id: 4,
    icon: Headphones,
    color: 'blue',
    title: 'Dedicated Support',
    description:
      'You get a dedicated team, not a ticketing system. Direct access to your engineers, weekly progress updates, and ongoing support long after launch.',
    highlight: 'Real people, real accountability',
  },
  {
    id: 5,
    icon: GitBranch,
    color: 'cyan',
    title: 'Scalable Architecture',
    description:
      'We architect systems that grow with your business — microservices, cloud-native infrastructure, horizontal scaling, and clean codebases that new engineers can join effortlessly.',
    highlight: 'Built to scale from day one',
  },
  {
    id: 6,
    icon: Users,
    color: 'purple',
    title: 'Experienced Engineers',
    description:
      'Our team consists of senior engineers with deep expertise across frontend, backend, mobile, AI/ML, and cloud — delivering enterprise-grade results at every level of the stack.',
    highlight: 'Senior-level talent across the stack',
  },
];

export const whyChooseUsStats: StatItem[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 40, suffix: '+', label: 'Enterprise Clients' },
  { value: 12, suffix: '+', label: 'Industries Served' },
  { value: 95, suffix: '+', label: 'Average Lighthouse Score' },
  { value: 3, suffix: 'x', label: 'Average ROI for Clients' },
  { value: 24, suffix: '/7', label: 'Support Coverage' },
  { value: 5, suffix: '+', label: 'Years of Excellence' },
];
