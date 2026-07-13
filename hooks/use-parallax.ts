'use client';
import { useEffect, useState } from 'react';

import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from '@/lib/framer-motion';
export function useParallax(speed = 0.3): { y: MotionValue<number> } {
  const { scrollY } = useScroll();
  const transformed = useTransform(scrollY, [0, 1000], [0, -speed * 200]);
  const zero = useMotionValue(0);
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)');
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return { y: reduced || mobile ? zero : transformed };
}
