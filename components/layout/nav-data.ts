export type ServiceIconName =
  | 'blocks'
  | 'bot'
  | 'building'
  | 'cloud'
  | 'code'
  | 'messages'
  | 'panels'
  | 'pen-tool'
  | 'receipt'
  | 'smartphone'
  | 'webhook'
  | 'workflow';

export interface ServiceLink {
  description: string;
  href: string;
  icon: ServiceIconName;
  name: string;
}

interface BaseNavItem {
  label: string;
}

export interface NavLinkItem extends BaseNavItem {
  href: string;
  type: 'link';
}

export interface ServicesNavItem extends BaseNavItem {
  services: readonly ServiceLink[];
  type: 'services';
}

export type NavItem = NavLinkItem | ServicesNavItem;

export const services: readonly ServiceLink[] = [
  {
    name: 'Website Development',
    description: 'High-performance websites built to convert and scale.',
    href: '/services/website-development',
    icon: 'panels',
  },
  {
    name: 'Web Application Development',
    description: 'Secure, responsive web products for complex workflows.',
    href: '/services/web-application-development',
    icon: 'code',
  },
  {
    name: 'Mobile Application Development',
    description: 'Polished native and cross-platform mobile experiences.',
    href: '/services/mobile-application-development',
    icon: 'smartphone',
  },
  {
    name: 'Enterprise Software Development',
    description: 'Resilient systems engineered for enterprise operations.',
    href: '/services/enterprise-software-development',
    icon: 'building',
  },
  {
    name: 'POS System Development',
    description: 'Reliable point-of-sale platforms for modern commerce.',
    href: '/services/pos-system-development',
    icon: 'receipt',
  },
  {
    name: 'AI Automation Solutions',
    description: 'Purpose-built AI that removes repetitive manual work.',
    href: '/services/ai-automation-solutions',
    icon: 'bot',
  },
  {
    name: 'AI Agents & Chatbots',
    description: 'Context-aware agents that support customers and teams.',
    href: '/services/ai-agents-chatbots',
    icon: 'messages',
  },
  {
    name: 'Workflow Automation',
    description: 'Connected workflows that keep business moving faster.',
    href: '/services/workflow-automation',
    icon: 'workflow',
  },
  {
    name: 'Custom Software Development',
    description: 'Tailored software shaped around your competitive edge.',
    href: '/services/custom-software-development',
    icon: 'blocks',
  },
  {
    name: 'API Development & Integrations',
    description: 'Robust APIs that connect systems, data, and partners.',
    href: '/services/api-development-integrations',
    icon: 'webhook',
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud architecture with security built in.',
    href: '/services/cloud-solutions',
    icon: 'cloud',
  },
  {
    name: 'UI/UX Design',
    description: 'Intuitive interfaces grounded in research and clarity.',
    href: '/services/ui-ux-design',
    icon: 'pen-tool',
  },
];

export const navigation: readonly NavItem[] = [
  { label: 'Services', type: 'services', services },
  { label: 'Industries', type: 'link', href: '/industries' },
  { label: 'Portfolio', type: 'link', href: '/portfolio' },
  { label: 'Case Studies', type: 'link', href: '/case-studies' },
  { label: 'About', type: 'link', href: '/about' },
  { label: 'Blog', type: 'link', href: '/blog' },
];
