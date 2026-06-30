'use client';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

export interface AnimatedCounterProps {
  className?: string;
  duration?: number;
  suffix?: string;
  value: number;
}

export function AnimatedCounter({
  className,
  duration = 1.5,
  suffix = '',
  value,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: shouldReduceMotion ? 0 : duration,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return () => controls.stop();
  }, [count, duration, isInView, shouldReduceMotion, value]);

  return (
    <span
      aria-label={`${value}${suffix}`}
      className={cn(
        'inline-flex items-baseline text-4xl font-bold tracking-tight text-white',
        className,
      )}
      ref={ref}
    >
      <motion.span aria-hidden="true">{rounded}</motion.span>
      {suffix ? <span aria-hidden="true">{suffix}</span> : null}
    </span>
  );
}
