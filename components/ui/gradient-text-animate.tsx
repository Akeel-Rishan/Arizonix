'use client';
import type { ReactNode } from 'react';

import { useReducedMotion } from '@/lib/framer-motion';
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
  const reduced = useReducedMotion();
  return (
    <span
      className={cn(
        reduced || !shimmer ? 'text-gradient' : 'shimmer-gradient',
        className,
      )}
    >
      {children}
    </span>
  );
}
