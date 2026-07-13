'use client';
import type { ReactNode } from 'react';

import { motion, useReducedMotion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';
export function FloatingElement({
  amplitude = 12,
  children,
  className,
  delay = 0,
  duration = 4,
}: {
  amplitude?: number;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      animate={reduced ? undefined : { y: [0, -amplitude, 0] }}
      aria-hidden="true"
      className={cn(className)}
      style={{ willChange: 'transform' }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}
