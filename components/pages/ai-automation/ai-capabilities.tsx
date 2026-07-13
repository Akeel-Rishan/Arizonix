'use client';


import { AICapabilityCard, type AICapability } from './ai-capability-card';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const capabilities: AICapability[] = [
  {
    id: 'ai-agents',
    icon: 'Bot',
    color: 'blue',
    title: 'AI Agents',
    subtitle: 'Autonomous Decision-Making Systems',
    description:
      'AI agents that independently execute multi-step tasks, make context-aware decisions, and interact with your existing tools and databases.',
    features: [
      'Multi-step task execution',
      'Tool & API integration',
      'Context-aware reasoning',
      'Human-in-the-loop escalation',
    ],
    badge: 'Most Popular',
    href: '/services/ai-agents-chatbots',
  },
  {
    id: 'workflow-automation',
    icon: 'Zap',
    color: 'purple',
    title: 'Workflow Automation',
    subtitle: 'End-To-End Process Automation',
    description:
      'Intelligent workflows trigger on events, process data, and coordinate actions across your entire technology stack.',
    features: [
      'Event-driven triggers',
      'Multi-system orchestration',
      'Conditional logic & branching',
      'Error handling & retry logic',
    ],
    badge: null,
    href: '/services/workflow-automation',
  },
  {
    id: 'intelligent-chatbots',
    icon: 'MessageSquare',
    color: 'cyan',
    title: 'AI Chatbots',
    subtitle: 'Conversational Intelligence',
    description:
      'Context-aware chatbots understand your business, resolve complex queries, and escalate to people when appropriate.',
    features: [
      'LLM-powered understanding',
      'Knowledge base integration',
      'CRM & tool connectivity',
      'Seamless human handoff',
    ],
    badge: null,
    href: '/services/ai-agents-chatbots',
  },
  {
    id: 'document-ai',
    icon: 'ReceiptText',
    color: 'blue',
    title: 'Document AI',
    subtitle: 'Intelligent Document Processing',
    description:
      'Extract, classify, validate, and process information from invoices, contracts, forms, and reports at scale.',
    features: [
      'OCR & data extraction',
      'Document classification',
      'Validation workflows',
      'ERP/CRM integration',
    ],
    badge: null,
    href: '/services/ai-automation-solutions',
  },
  {
    id: 'predictive-analytics',
    icon: 'TrendingUp',
    color: 'purple',
    title: 'Predictive Analytics',
    subtitle: 'Data-Driven Forecasting',
    description:
      'Custom models forecast demand, predict churn, identify risk, and surface opportunities before they become obvious.',
    features: [
      'Custom ML model training',
      'Real-time scoring',
      'Explainable AI outputs',
      'Continuous model retraining',
    ],
    badge: null,
    href: '/services/ai-automation-solutions',
  },
  {
    id: 'ai-integration',
    icon: 'Plug',
    color: 'cyan',
    title: 'AI Integration Layer',
    subtitle: 'AI-Powered System Integration',
    description:
      'Add intelligent automation to the software you already use without replacing your current technology stack.',
    features: [
      'API-first architecture',
      'Existing system preservation',
      'Gradual AI adoption',
      'Legacy system compatibility',
    ],
    badge: null,
    href: '/services/api-development-integrations',
  },
];
export function AICapabilities() {
  return (
    <Section id="capabilities">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title={
            <>
              Our <span className="text-gradient">AI Automation</span>{' '}
              Capabilities
            </>
          }
          description="Six core AI capabilities we deploy for clients — each production-tested and designed for measurable business impact."
        />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {capabilities.map((capability) => (
            <motion.div key={capability.id} variants={fadeInUp}>
              <AICapabilityCard capability={capability} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
