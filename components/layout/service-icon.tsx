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

import type { ServiceIconName } from '@/components/layout/nav-data';

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  blocks: Blocks,
  bot: Bot,
  building: Building2,
  cloud: Cloud,
  code: Code2,
  messages: MessagesSquare,
  panels: PanelsTopLeft,
  'pen-tool': PenTool,
  receipt: ReceiptText,
  smartphone: Smartphone,
  webhook: Webhook,
  workflow: Workflow,
};

interface ServiceIconProps {
  className?: string;
  name: ServiceIconName;
}

export function ServiceIcon({ className, name }: ServiceIconProps) {
  const Icon = serviceIcons[name];

  return <Icon aria-hidden="true" className={className} />;
}
