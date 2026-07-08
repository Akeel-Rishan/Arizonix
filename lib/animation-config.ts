export const ANIMATION = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    verySlow: 0.8,
    pageTransition: 0.4,
  },
  easing: {
    smooth: [0.25, 0.1, 0.25, 1] as const,
    spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
    springBouncy: { type: 'spring' as const, stiffness: 400, damping: 20 },
    springGentle: { type: 'spring' as const, stiffness: 150, damping: 25 },
    easeOut: [0, 0, 0.2, 1] as const,
    easeInOut: [0.4, 0, 0.2, 1] as const,
  },
  stagger: { tight: 0.05, normal: 0.1, loose: 0.15, verySlow: 0.25 },
  viewport: { once: true, margin: '-10% 0px -10% 0px' as const },
  magnetic: {
    strength: 0.3,
    strengthStrong: 0.5,
    returnEasing: [0.25, 0.46, 0.45, 0.94] as const,
  },
  parallax: { slow: 0.3, medium: 0.5, fast: 0.8 },
  cursor: { size: 400, dotSize: 12, blurAmount: 80, opacity: 0.12 },
} as const;
