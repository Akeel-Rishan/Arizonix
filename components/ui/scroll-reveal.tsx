'use client';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { ANIMATION } from '@/lib/animation-config';
import {
  blurIn,
  fadeIn,
  fadeInUp,
  premiumScaleIn,
  slideInFromLeft,
  slideInFromRight,
} from '@/lib/motion';
import { cn } from '@/lib/utils';
const variants: Record<string, Variants> = {
  fadeUp: fadeInUp,
  fadeIn,
  slideLeft: slideInFromLeft,
  slideRight: slideInFromRight,
  scale: premiumScaleIn,
  blur: blurIn,
};
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration,
  once = true,
  variant = 'fadeUp',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'blur';
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : 'hidden'}
      transition={{ delay, duration: duration ?? ANIMATION.duration.slow }}
      variants={variants[variant]}
      viewport={{ once, margin: ANIMATION.viewport.margin }}
      whileInView={reduced ? undefined : 'visible'}
    >
      {children}
    </motion.div>
  );
}
