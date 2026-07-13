'use client';
import type { ReactNode } from 'react';

import { useParallax } from '@/hooks/use-parallax';
import { motion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';
export function ParallaxElement({
  children,
  className,
  speed,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const { y } = useParallax(speed);
  return (
    <motion.div
      className={cn(className)}
      style={{ y, willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
