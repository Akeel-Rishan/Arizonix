import type { Metadata } from 'next';

import { AICapabilities } from '@/components/pages/ai-automation/ai-capabilities';
import { AIComparison } from '@/components/pages/ai-automation/ai-comparison';
import { AICTA } from '@/components/pages/ai-automation/ai-cta';
import { AIFAQ } from '@/components/pages/ai-automation/ai-faq';
import { AIHero } from '@/components/pages/ai-automation/ai-hero';
import { AIProcess } from '@/components/pages/ai-automation/ai-process';
import { AIResults } from '@/components/pages/ai-automation/ai-results';
import { AITechStack } from '@/components/pages/ai-automation/ai-tech-stack';
import { AIUseCasesTabs } from '@/components/pages/ai-automation/ai-use-cases-tabs';
import { AIWorkflowBuilder } from '@/components/pages/ai-automation/ai-workflow-builder';
import { aiFaqItems } from '@/lib/ai-faq-data';
export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/ai-automation' },
  title: 'AI Automation Solutions — Intelligent Business Automation | Arizonix',
  description:
    'Arizonix builds custom AI automation systems — from intelligent chatbots and AI agents to full business process automation. Reduce manual work by 80%, accelerate decision-making, and scale operations without headcount growth.',
  keywords: [
    'AI automation',
    'business process automation',
    'AI agents',
    'workflow automation',
    'intelligent chatbots',
    'AI software development',
    'Arizonix AI',
  ],
  openGraph: {
    title: 'AI Automation Solutions — Arizonix',
    description:
      'Custom AI automation built for your business. AI agents, workflow automation, intelligent chatbots, and process optimization that delivers measurable ROI.',
    type: 'website',
    url: 'https://arizonix.com/ai-automation',
  },
};
export const revalidate = 3600;
const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Automation Solutions — Arizonix',
    description: 'Custom AI automation systems for business operations.',
    url: 'https://arizonix.com/ai-automation',
    provider: {
      '@type': 'Organization',
      name: 'Arizonix',
      url: 'https://arizonix.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arizonix.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Automation',
        item: 'https://arizonix.com/ai-automation',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation Solutions',
    description: 'Custom AI-powered business automation systems',
    provider: { '@type': 'Organization', name: 'Arizonix' },
    serviceType: 'AI Automation',
    url: 'https://arizonix.com/ai-automation',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      description: 'Free AI automation consultation',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aiFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];
export default function AIAutomationPage() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <AIHero />
      <AICapabilities />
      <AIWorkflowBuilder />
      <AIComparison />
      <AIUseCasesTabs />
      <AITechStack />
      <AIResults />
      <AIProcess />
      <AIFAQ />
      <AICTA />
    </>
  );
}
