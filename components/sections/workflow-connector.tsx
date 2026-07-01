'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export type WorkflowConnectorOrientation = 'horizontal' | 'vertical';
export type WorkflowConnectorState = 'active' | 'completed' | 'idle';

export interface WorkflowConnectorProps {
  orientation: WorkflowConnectorOrientation;
  reducedMotion?: boolean;
  state: WorkflowConnectorState;
}

const stateStyles: Record<WorkflowConnectorState, string> = {
  active: 'bg-white/15',
  completed: 'bg-emerald-400/70 shadow-[0_0_24px_rgba(52,211,153,0.35)]',
  idle: 'bg-white/10',
};

export function WorkflowConnector({
  orientation,
  reducedMotion = false,
  state,
}: WorkflowConnectorProps) {
  const isHorizontal = orientation === 'horizontal';
  const shouldAnimate = state === 'active' && !reducedMotion;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden rounded-full',
        isHorizontal ? 'h-0.5 w-full min-w-8' : 'mx-auto h-12 w-0.5',
        stateStyles[state],
      )}
      data-orientation={orientation}
      data-state={state}
    >
      {state === 'active' ? (
        shouldAnimate ? (
          <motion.span
            animate={
              isHorizontal ? { x: ['-100%', '180%'] } : { y: ['-100%', '180%'] }
            }
            className={cn(
              'absolute rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan shadow-glow-cyan',
              isHorizontal ? 'inset-y-0 left-0 w-1/2' : 'inset-x-0 top-0 h-1/2',
            )}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        ) : (
          <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan" />
        )
      ) : null}
    </div>
  );
}
