'use client';
import { useScroll, type MotionValue } from '@/lib/framer-motion';
export function useScrollProgress(): MotionValue<number> {
  return useScroll().scrollYProgress;
}
