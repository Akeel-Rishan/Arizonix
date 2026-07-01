import {
  Blocks,
  Bot,
  Building2,
  Cloud,
  Code2,
  MessagesSquare,
  PanelsTopLeft,
  PenTool,
  ReceiptText,
  Smartphone,
  Webhook,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type ServiceSlug =
  | 'ai-agents-chatbots'
  | 'ai-automation-solutions'
  | 'api-development-integrations'
  | 'cloud-solutions'
  | 'custom-software-development'
  | 'enterprise-software-development'
  | 'mobile-application-development'
  | 'pos-system-development'
  | 'ui-ux-design'
  | 'web-application-development'
  | 'website-development'
  | 'workflow-automation';

export interface Service {
  description: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  slug: ServiceSlug;
}

export const services: readonly Service[] = [
  {
    name: 'Website Development',
    slug: 'website-development',
    shortDescription: 'High-performance websites built to convert and scale.',
    description:
      'Conversion-focused corporate and product websites engineered for speed, clarity, and sustainable growth.',
    icon: PanelsTopLeft,
  },
  {
    name: 'Web Application Development',
    slug: 'web-application-development',
    shortDescription: 'Secure, responsive web products for complex workflows.',
    description:
      'Scalable web applications that simplify complex operations and deliver polished experiences across every device.',
    icon: Code2,
  },
  {
    name: 'Mobile Application Development',
    slug: 'mobile-application-development',
    shortDescription: 'Polished native and cross-platform mobile experiences.',
    description:
      'Reliable mobile products designed around real user needs, from rapid validation through production-scale delivery.',
    icon: Smartphone,
  },
  {
    name: 'Enterprise Software Development',
    slug: 'enterprise-software-development',
    shortDescription: 'Resilient systems engineered for enterprise operations.',
    description:
      'Secure, maintainable platforms that connect teams, standardize critical processes, and support long-term change.',
    icon: Building2,
  },
  {
    name: 'POS System Development',
    slug: 'pos-system-development',
    shortDescription: 'Reliable point-of-sale platforms for modern commerce.',
    description:
      'Connected point-of-sale systems that streamline transactions, inventory, reporting, and customer experiences.',
    icon: ReceiptText,
  },
  {
    name: 'AI Automation Solutions',
    slug: 'ai-automation-solutions',
    shortDescription: 'Purpose-built AI that removes repetitive manual work.',
    description:
      'Practical AI automation that reduces operational friction, improves decision-making, and creates measurable capacity.',
    icon: Bot,
  },
  {
    name: 'AI Agents & Chatbots',
    slug: 'ai-agents-chatbots',
    shortDescription: 'Context-aware agents that support customers and teams.',
    description:
      'Intelligent conversational systems that understand context, complete tasks, and provide dependable round-the-clock support.',
    icon: MessagesSquare,
  },
  {
    name: 'Workflow Automation',
    slug: 'workflow-automation',
    shortDescription: 'Connected workflows that keep business moving faster.',
    description:
      'Integrated workflows that eliminate handoffs, reduce errors, and give teams more time for high-value work.',
    icon: Workflow,
  },
  {
    name: 'Custom Software Development',
    slug: 'custom-software-development',
    shortDescription: 'Tailored software shaped around your competitive edge.',
    description:
      'Purpose-built software aligned to your operating model, customer expectations, and most valuable opportunities.',
    icon: Blocks,
  },
  {
    name: 'API Development & Integrations',
    slug: 'api-development-integrations',
    shortDescription: 'Robust APIs that connect systems, data, and partners.',
    description:
      'Secure integrations that unify business systems, remove data silos, and create dependable digital ecosystems.',
    icon: Webhook,
  },
  {
    name: 'Cloud Solutions',
    slug: 'cloud-solutions',
    shortDescription: 'Scalable cloud architecture with security built in.',
    description:
      'Cloud foundations designed for resilience, cost control, and confident growth as demand and complexity increase.',
    icon: Cloud,
  },
  {
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'Intuitive interfaces grounded in research and clarity.',
    description:
      'Research-led product experiences that make complex tasks feel simple, coherent, and distinctly on-brand.',
    icon: PenTool,
  },
];

export function getServiceHref(service: Service) {
  return `/services/${service.slug}`;
}
