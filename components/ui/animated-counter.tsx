'use client';

import { useEffect, useRef, useState } from 'react';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from '@/lib/framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedCounterProps {
  ariaLabel?: string;
  className?: string;
  duration?: number;
  suffix?: string;
  value: number;
}

export function AnimatedCounter({
  ariaLabel,
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
  const [hasAnnounced, setHasAnnounced] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value);
      setHasAnnounced(true);
      return;
    }

    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    });
    void controls.then(() => setHasAnnounced(true));

    return () => controls.stop();
  }, [count, duration, isInView, shouldReduceMotion, value]);

  return (
    <span
      aria-live={hasAnnounced ? 'polite' : 'off'}
      className={cn(
        'inline-flex items-baseline text-4xl font-bold tracking-tight text-white',
        className,
      )}
      ref={ref}
    >
      <span className="sr-only">{ariaLabel ?? `${value}${suffix}`}</span>
      <motion.span aria-hidden="true">{rounded}</motion.span>
      {suffix ? <span aria-hidden="true">{suffix}</span> : null}
    </span>
  );
}
