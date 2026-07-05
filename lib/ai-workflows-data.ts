export type AIWorkflowColor = 'blue' | 'cyan' | 'purple';

export interface AIWorkflowNode {
  color: AIWorkflowColor;
  description: string;
  details: string;
  icon: string;
  id: string;
  label: string;
  outputLabel: string;
}

export interface AIWorkflow {
  category: string;
  description: string;
  id: string;
  name: string;
  nodes: AIWorkflowNode[];
}

const node = (
  id: string,
  icon: string,
  label: string,
  description: string,
  details: string,
  color: AIWorkflowColor,
  outputLabel: string,
): AIWorkflowNode => ({
  color,
  description,
  details,
  icon,
  id,
  label,
  outputLabel,
});

export const aiWorkflows: AIWorkflow[] = [
  {
    id: 'lead-qualification',
    name: 'Lead Qualification',
    category: 'Sales',
    description:
      'Automatically qualify and route inbound leads using AI scoring and CRM integration.',
    nodes: [
      node(
        'inquiry',
        'MessageSquare',
        'Lead Arrives',
        'New lead submitted via form, chat, or email',
        'AI monitors every inbound channel in real time and triggers qualification instantly, 24/7.',
        'cyan',
        'Raw lead data',
      ),
      node(
        'enrich',
        'Search',
        'Data Enrichment',
        'AI appends company data and intent signals',
        'Company size, revenue, technology, and contact context are appended through trusted data APIs.',
        'blue',
        'Enriched lead profile',
      ),
      node(
        'score',
        'Brain',
        'AI Scoring',
        'Machine learning scores lead quality from 0–100',
        'A model trained on historical wins scores fit, intent, and behavior, then updates the score in real time.',
        'purple',
        'Lead score + tier',
      ),
      node(
        'route',
        'GitBranch',
        'Smart Routing',
        'Each lead enters the right sales or nurture path',
        'High-scoring leads reach top reps immediately while other leads enter tailored nurture sequences.',
        'blue',
        'Routed to correct path',
      ),
      node(
        'engage',
        'Mail',
        'Automated Outreach',
        'Personalized outreach is sent within 60 seconds',
        'AI writes a contextual email from the lead profile and inquiry before competitors can respond manually.',
        'cyan',
        'Personalized email sent',
      ),
      node(
        'crm',
        'Database',
        'CRM Update',
        'Every action syncs to Salesforce or HubSpot',
        'Scores, enrichment, messages, and history are logged automatically for a fully briefed sales team.',
        'purple',
        'CRM record complete',
      ),
    ],
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing',
    category: 'Finance',
    description:
      'Extract, validate, and process supplier invoices automatically using document AI.',
    nodes: [
      node(
        'receive',
        'Mail',
        'Invoice Received',
        'Invoice arrives by email, upload, or portal',
        'AI monitors every accounts-payable channel and queues new invoices immediately.',
        'cyan',
        'Invoice captured',
      ),
      node(
        'extract',
        'FileText',
        'Data Extraction',
        'AI extracts all fields with 99.5%+ accuracy',
        'Vendor, line items, tax, dates, totals, and PO references become structured data from any format.',
        'blue',
        'Structured invoice data',
      ),
      node(
        'validate',
        'CheckCircle2',
        '3-Way Matching',
        'Invoice, PO, and receipt are matched',
        'Matches are auto-approved while discrepancies are clearly flagged for review.',
        'purple',
        'Match result',
      ),
      node(
        'approve',
        'GitBranch',
        'Approval Routing',
        'Exceptions reach the right approver',
        'Amount, vendor, and cost-center rules route exceptions without inbox chasing.',
        'blue',
        'Approval decision',
      ),
      node(
        'pay',
        'CreditCard',
        'Payment Scheduling',
        'Payments optimize discounts and cash flow',
        'The system balances due dates, early-payment discounts, and liquidity automatically.',
        'cyan',
        'Payment scheduled',
      ),
      node(
        'record',
        'BarChart3',
        'ERP Sync',
        'ERP posting and reconciliation complete',
        'Invoices, decisions, and payments are posted to SAP, Oracle, or NetSuite automatically.',
        'purple',
        'Books updated',
      ),
    ],
  },
  {
    id: 'customer-support',
    name: 'Customer Support AI',
    category: 'Operations',
    description:
      'Resolve 80% of customer inquiries with an AI agent grounded in your products and policies.',
    nodes: [
      node(
        'contact',
        'MessageSquare',
        'Customer Contact',
        'Customer reaches chat, email, or voice',
        'One AI agent operates across live chat, email, WhatsApp, and voice channels.',
        'cyan',
        'Customer query',
      ),
      node(
        'understand',
        'Brain',
        'Intent Detection',
        'Intent and sentiment are classified instantly',
        'The model detects the issue, urgency, language, and customer sentiment in milliseconds.',
        'blue',
        'Intent + sentiment',
      ),
      node(
        'knowledge',
        'Database',
        'Knowledge Retrieval',
        'AI finds grounded business context',
        'RAG searches product documentation, policies, FAQs, and historical tickets for trusted context.',
        'purple',
        'Relevant context',
      ),
      node(
        'resolve',
        'Zap',
        'Automated Resolution',
        'AI resolves routine requests end-to-end',
        'The agent can answer, process returns, update accounts, and create tickets rather than merely chat.',
        'blue',
        'Resolution or escalation',
      ),
      node(
        'escalate',
        'Users',
        'Smart Escalation',
        'Complex cases reach a fully briefed human',
        'Agents receive the conversation, sentiment, history, and a suggested next action.',
        'cyan',
        'Briefed human agent',
      ),
      node(
        'learn',
        'TrendingUp',
        'Continuous Learning',
        'Every resolution improves future service',
        'New policies and successful resolution patterns continuously update the knowledge layer.',
        'purple',
        'Improved model',
      ),
    ],
  },
  {
    id: 'recruitment-ai',
    name: 'Recruitment Automation',
    category: 'HR',
    description:
      'Screen, score, and schedule candidates automatically, reducing time-to-hire by 70%.',
    nodes: [
      node(
        'apply',
        'FileText',
        'Application Received',
        'Applications enter one unified pipeline',
        'Candidates from job boards, careers pages, and email are captured in one system.',
        'cyan',
        'Application data',
      ),
      node(
        'screen',
        'Brain',
        'AI Screening',
        'CVs are evaluated against role requirements',
        'Skills, experience, trajectory, and role fit are scored consistently with auditable criteria.',
        'blue',
        'Candidate score',
      ),
      node(
        'assess',
        'CheckCircle2',
        'Skills Assessment',
        'Role-specific assessments are evaluated',
        'Qualified candidates receive assessments automatically and results are scored objectively.',
        'purple',
        'Assessment score',
      ),
      node(
        'schedule',
        'Calendar',
        'Interview Scheduling',
        'Interviews book without back-and-forth',
        'Calendar-aware links manage booking, reminders, and rescheduling automatically.',
        'blue',
        'Interview booked',
      ),
      node(
        'brief',
        'Users',
        'Interviewer Briefing',
        'AI prepares a focused candidate brief',
        'Interviewers receive score rationale, gaps, suggested questions, and relevant talking points.',
        'cyan',
        'Briefed interviewer',
      ),
      node(
        'decide',
        'GitBranch',
        'Decision & Offer',
        'Offer and onboarding workflows begin',
        'Decisions trigger contracts, background checks, notifications, and onboarding steps.',
        'purple',
        'New hire onboarded',
      ),
    ],
  },
];
