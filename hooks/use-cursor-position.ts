'use client';
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
export interface UseCursorPositionReturn {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isVisible: boolean;
}
export function useCursorPosition(): UseCursorPositionReturn {
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 });
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const move = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [rawX, rawY]);
  return { x, y, isVisible };
}
