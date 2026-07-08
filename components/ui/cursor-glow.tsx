'use client';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useCursorPosition } from '@/hooks/use-cursor-position';
import { ANIMATION } from '@/lib/animation-config';
export default function CursorGlow({
  color = 'mixed',
  size = ANIMATION.cursor.size,
}: {
  color?: 'blue' | 'purple' | 'cyan' | 'mixed';
  size?: number;
}) {
  const { x, y, isVisible } = useCursorPosition();
  const reduced = useReducedMotion();
  const [touch, setTouch] = useState(true);
  useEffect(() => {
    setTouch(window.matchMedia('(hover: none)').matches);
  }, []);
  const blueOpacity = useTransform(x, [0, 1600], [0.15, 0.04]);
  const purpleOpacity = useTransform(x, [0, 1600], [0.04, 0.15]);
  if (touch || reduced) return null;
  const style = {
    x,
    y,
    width: size,
    height: size,
    marginLeft: -size / 2,
    marginTop: -size / 2,
    filter: `blur(${ANIMATION.cursor.blurAmount}px)`,
    willChange: 'transform' as const,
  };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="absolute rounded-full"
        style={style}
      >
        {color === 'mixed' ? (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-brand-blue"
              style={{ opacity: blueOpacity }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-brand-purple"
              style={{ opacity: purpleOpacity }}
            />
          </>
        ) : (
          <span
            className={`absolute inset-0 rounded-full ${color === 'blue' ? 'bg-brand-blue' : color === 'purple' ? 'bg-brand-purple' : 'bg-brand-cyan'}`}
            style={{ opacity: ANIMATION.cursor.opacity }}
          />
        )}
      </motion.div>
    </div>
  );
}
