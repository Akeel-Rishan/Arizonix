import type { Variants } from 'framer-motion';

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
