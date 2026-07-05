import type { FAQItem } from '@/lib/faq-data';

export const aiFaqItems: FAQItem[] = [
  {
    id: 'ai-timeline',
    category: 'AI',
    question:
      'How long does it take to build and deploy an AI automation system?',
    answer:
      'A focused single-process automation typically takes 4–8 weeks. Complex systems with multiple integrations, custom training, or enterprise infrastructure take 10–20 weeks. A 1–2 week discovery phase establishes an accurate plan first.',
  },
  {
    id: 'ai-data',
    category: 'AI',
    question: 'Do we need a large amount of data to start using AI automation?',
    answer:
      'Not always. Foundation models such as GPT-4o and Claude can launch with prompt engineering and your knowledge base. Custom forecasting or fraud models typically need 6–12 months of clean historical data.',
  },
  {
    id: 'ai-accuracy',
    category: 'AI',
    question: 'How do you ensure the AI makes accurate decisions?',
    answer:
      'We select fit-for-purpose models, ground responses with RAG, add validation layers and confidence thresholds, route edge cases to people, and continuously monitor accuracy using real production data.',
  },
  {
    id: 'ai-integrations',
    category: 'AI',
    question: 'Can AI automation integrate with our existing software?',
    answer:
      'Yes. We integrate with Salesforce, HubSpot, SAP, Oracle, NetSuite, Slack, Teams, Gmail, databases, and proprietary systems. AI enhances your existing tools instead of forcing replacement.',
  },
  {
    id: 'ai-mistakes',
    category: 'AI',
    question: 'What happens when the AI makes a mistake?',
    answer:
      'Production systems include confidence thresholds, human review, audit logs, rollback capabilities, and real-time monitoring. When uncertain, the AI escalates instead of making an unsafe decision.',
  },
  {
    id: 'ai-privacy',
    category: 'AI',
    question: 'How do you handle data privacy and security in AI systems?',
    answer:
      'We minimize data access, use enterprise API tiers that do not train on client data, and support VPC or on-premise models for sensitive workloads. Encryption, access controls, and audit logging are standard.',
  },
  {
    id: 'ai-domain',
    category: 'AI',
    question:
      'Can you build AI that understands our industry-specific terminology?',
    answer:
      'Yes. RAG and specialized knowledge bases ground AI in your documentation, terminology, catalogs, policies, and historical data, creating an assistant that understands your exact business context.',
  },
  {
    id: 'ai-rpa',
    category: 'AI',
    question:
      "What's the difference between AI automation and traditional RPA?",
    answer:
      'RPA follows rigid rules and often breaks when inputs change. AI automation understands context, handles variation, and makes bounded judgments. We recommend each approach only where it is genuinely the best fit.',
  },
];
