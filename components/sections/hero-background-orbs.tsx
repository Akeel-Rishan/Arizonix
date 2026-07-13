'use client';

import { motion } from '@/lib/framer-motion';

interface HeroBackgroundOrbsProps {
  reducedMotion: boolean;
}

interface HeroOrb {
  className: string;
  delay: number;
  duration: number;
  x: number[];
  y: number[];
}

const orbs: readonly HeroOrb[] = [
  {
    className:
      '-left-24 top-16 size-72 bg-brand-blue/20 sm:size-96 lg:-left-32',
    duration: 18,
    delay: 0,
    x: [0, 28, -12, 0],
    y: [0, -18, 14, 0],
  },
  {
    className:
      '-right-28 top-1/3 size-80 bg-brand-purple/20 sm:size-[28rem] lg:-right-36',
    duration: 22,
    delay: 1.5,
    x: [0, -24, 12, 0],
    y: [0, 20, -16, 0],
  },
  {
    className:
      'bottom-8 left-1/3 size-64 bg-brand-cyan/15 sm:size-80 lg:bottom-16',
    duration: 20,
    delay: 0.75,
    x: [0, 18, -20, 0],
    y: [0, -20, 10, 0],
  },
];

export function HeroBackgroundOrbs({ reducedMotion }: HeroBackgroundOrbsProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {orbs.map((orb, index) => (
        <motion.div
          animate={
            reducedMotion
              ? { x: 0, y: 0 }
              : {
                  x: orb.x,
                  y: orb.y,
                }
          }
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          data-hero-orb={index + 1}
          key={orb.className}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  delay: orb.delay,
                  duration: orb.duration,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }
          }
        />
      ))}
    </div>
  );
}
