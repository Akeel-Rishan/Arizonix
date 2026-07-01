import { services, type Service } from '@/lib/services-data';

interface BaseNavItem {
  label: string;
}

export interface NavLinkItem extends BaseNavItem {
  href: string;
  type: 'link';
}

export interface ServicesNavItem extends BaseNavItem {
  services: readonly Service[];
  type: 'services';
}

export type NavItem = NavLinkItem | ServicesNavItem;

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  links: readonly FooterLink[];
  title: string;
}

export const navigation: readonly NavItem[] = [
  { label: 'Services', type: 'services', services },
  { label: 'Industries', type: 'link', href: '/industries' },
  { label: 'Portfolio', type: 'link', href: '/portfolio' },
  { label: 'Case Studies', type: 'link', href: '/case-studies' },
  { label: 'About', type: 'link', href: '/about' },
  { label: 'Blog', type: 'link', href: '/blog' },
];

export const footerColumns: readonly FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '/services/website-development' },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-application-development',
      },
      {
        label: 'AI Automation Solutions',
        href: '/services/ai-automation-solutions',
      },
      { label: 'AI Agents & Chatbots', href: '/services/ai-agents-chatbots' },
      {
        label: 'Custom Software Development',
        href: '/services/custom-software-development',
      },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries' },
      { label: 'Finance', href: '/industries' },
      { label: 'Retail', href: '/industries' },
      { label: 'Real Estate', href: '/industries' },
      { label: 'Manufacturing', href: '/industries' },
      { label: 'Education', href: '/industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];
