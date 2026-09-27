import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
export function GradientTextAnimate({
  children,
  className,
  shimmer = true,
}: {
  children: ReactNode;
  className?: string;
  shimmer?: boolean;
}) {
  return (
    <span
      className={cn(shimmer ? 'shimmer-gradient' : 'text-gradient', className)}
    >
      {children}
    </span>
  );
}
