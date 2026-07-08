'use client';
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';

import { ANIMATION } from '@/lib/animation-config';
export interface UseMagneticReturn {
  ref: React.RefObject<HTMLDivElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}
export function useMagnetic(
  strength: number = ANIMATION.magnetic.strength,
): UseMagneticReturn {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20 });
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || window.matchMedia('(hover: none)').matches || !ref.current)
      return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };
  return { ref, x, y, onMouseMove, onMouseLeave };
}
