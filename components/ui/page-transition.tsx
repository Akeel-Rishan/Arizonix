'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { ANIMATION, IS_DEV } from '@/lib/animation-config';
import { motion, useReducedMotion } from '@/lib/framer-motion';
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (IS_DEV || reduced) return <div key={pathname}>{children}</div>;
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      initial={{ opacity: 0, y: 4 }}
      transition={{
        duration: ANIMATION.duration.pageTransition,
        ease: ANIMATION.easing.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
