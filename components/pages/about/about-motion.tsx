'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function MotionReveal({ children, className, direction = 'up' }: { children: ReactNode; className?: string; direction?: 'left' | 'right' | 'up' }) {
  const initial = direction === 'left' ? { opacity: 0, x: -20 } : direction === 'right' ? { opacity: 0, x: 20 } : { opacity: 0, y: 20 };
  return <motion.div className={className} initial={initial} transition={{ duration: 0.55, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} whileInView={{ opacity: 1, x: 0, y: 0 }}>{children}</motion.div>;
}

export function MotionStagger({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={cn(className)} initial="hidden" variants={staggerContainer} viewport={{ once: true, amount: 0.12 }} whileInView="visible">{children}</motion.div>;
}

export function MotionItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeInUp}>{children}</motion.div>;
}
