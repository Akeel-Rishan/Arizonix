import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Brain,
  Database,
  Mail,
  MessageSquare,
  Zap,
} from 'lucide-react';

export type WorkflowColor = 'blue' | 'purple' | 'cyan';

export interface WorkflowStep {
  color: WorkflowColor;
  description: string;
  icon: LucideIcon;
  id: number;
  label: string;
}

export const workflowSteps: readonly WorkflowStep[] = [
  {
    color: 'cyan',
    description: 'A customer submits a request via web, mobile, or chat',
    icon: MessageSquare,
    id: 1,
    label: 'Customer Inquiry',
  },
  {
    color: 'blue',
    description:
      'AI instantly understands intent, qualifies the lead, and prepares a response',
    icon: Brain,
    id: 2,
    label: 'AI Assistant',
  },
  {
    color: 'purple',
    description:
      'Lead data is automatically captured and enriched in your CRM system',
    icon: Database,
    id: 3,
    label: 'CRM Integration',
  },
  {
    color: 'blue',
    description:
      'Follow-up tasks, assignments, and workflows trigger automatically',
    icon: Zap,
    id: 4,
    label: 'Task Automation',
  },
  {
    color: 'cyan',
    description:
      'Personalized emails are dispatched to the client and internal team instantly',
    icon: Mail,
    id: 5,
    label: 'Email Notifications',
  },
  {
    color: 'purple',
    description:
      'Every interaction is tracked and turned into actionable business insights',
    icon: BarChart3,
    id: 6,
    label: 'Business Analytics',
  },
];
