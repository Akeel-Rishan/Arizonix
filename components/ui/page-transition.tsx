'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { ANIMATION } from '@/lib/animation-config';
import { motion, useReducedMotion } from '@/lib/framer-motion';
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (reduced) return <div>{children}</div>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.96 }}
      transition={{
        duration: ANIMATION.duration.fast,
        ease: ANIMATION.easing.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
