'use client';
import type { ReactNode } from 'react';

import { useMagnetic } from '@/hooks/use-magnetic';
import { motion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';
export function MagneticButton({
  children,
  className,
  strength,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(strength);
  return (
    <motion.div
      className={cn('inline-flex', className)}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={ref}
      style={{ x, y, willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
