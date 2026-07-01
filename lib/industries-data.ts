import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  HardHat,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';

export type IndustryColor = 'blue' | 'purple' | 'cyan';

export interface Industry {
  color: IndustryColor;
  description: string;
  icon: LucideIcon;
  name: string;
  slug: string;
  stat: string;
}

export const industries: readonly Industry[] = [
  {
    color: 'blue',
    description:
      'Custom patient platforms, telemedicine apps, and secure healthcare data systems.',
    icon: Stethoscope,
    name: 'Healthcare',
    slug: 'healthcare',
    stat: '40% faster patient onboarding',
  },
  {
    color: 'purple',
    description:
      'Modern fintech portals, reporting dashboards, and automation for financial teams.',
    icon: BarChart3,
    name: 'Finance',
    slug: 'finance',
    stat: '2.5x faster reporting cycles',
  },
  {
    color: 'cyan',
    description:
      'Claims automation, policy platforms, and smarter risk workflows for insurers.',
    icon: ShieldCheck,
    name: 'Insurance',
    slug: 'insurance',
    stat: '35% shorter claim reviews',
  },
  {
    color: 'blue',
    description:
      'Omnichannel commerce, inventory systems, and analytics built for retail growth.',
    icon: ShoppingBag,
    name: 'Retail',
    slug: 'retail',
    stat: '3x revenue growth potential',
  },
  {
    color: 'purple',
    description:
      'Digital ordering, POS integrations, and operations tools for restaurant brands.',
    icon: UtensilsCrossed,
    name: 'Restaurants',
    slug: 'restaurants',
    stat: '28% faster order handling',
  },
  {
    color: 'cyan',
    description:
      'Property portals, CRM workflows, and automation for real estate operations.',
    icon: Building2,
    name: 'Real Estate',
    slug: 'real-estate',
    stat: '45% faster lead follow-up',
  },
  {
    color: 'blue',
    description:
      'Project tracking, field operations, and cost-control platforms for builders.',
    icon: HardHat,
    name: 'Construction',
    slug: 'construction',
    stat: '22% fewer project delays',
  },
  {
    color: 'purple',
    description:
      'Production dashboards, QA systems, and workflow automation for manufacturers.',
    icon: Factory,
    name: 'Manufacturing',
    slug: 'manufacturing',
    stat: '30% stronger throughput visibility',
  },
  {
    color: 'cyan',
    description:
      'Fleet tracking, dispatch tools, and logistics intelligence for moving faster.',
    icon: Truck,
    name: 'Logistics',
    slug: 'logistics',
    stat: '18% lower dispatch friction',
  },
  {
    color: 'blue',
    description:
      'Learning platforms, student portals, and automation for education providers.',
    icon: GraduationCap,
    name: 'Education',
    slug: 'education',
    stat: '32% higher course engagement',
  },
  {
    color: 'purple',
    description:
      'Client portals, internal tooling, and automation for expert service teams.',
    icon: BriefcaseBusiness,
    name: 'Professional Services',
    slug: 'professional-services',
    stat: '25% faster client delivery',
  },
  {
    color: 'cyan',
    description:
      'Scalable storefronts, checkout flows, and data-driven growth systems.',
    icon: Store,
    name: 'E-commerce',
    slug: 'e-commerce',
    stat: '2x smoother checkout funnels',
  },
];
