import type { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  className?: string;
  icon: LucideIcon;
}

export function ServiceIcon({ className, icon: Icon }: ServiceIconProps) {
  return <Icon aria-hidden="true" className={className} />;
}
