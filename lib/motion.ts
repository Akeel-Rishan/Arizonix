import { ANIMATION } from '@/lib/animation-config';
import type { Variants } from '@/lib/framer-motion';


const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -8,
    transition: { duration: 0.15, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    x: 32,
    transition: { duration: 0.2, ease: easeOut },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing.easeOut,
    },
  },
};
export const slideInFromRight: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing.easeOut,
    },
  },
};
export const premiumScaleIn: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: ANIMATION.easing.spring },
};
export const blurIn: Variants = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 10 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing.easeOut,
    },
  },
};
