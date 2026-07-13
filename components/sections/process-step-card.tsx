'use client';

import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion, useReducedMotion } from '@/lib/framer-motion';
import type { ProcessColor, ProcessPhase } from '@/lib/process-data';
import { cn } from '@/lib/utils';

export interface ProcessStepCardProps {
  isActive: boolean;
  onClick: () => void;
  phase: ProcessPhase;
  showFullContent?: boolean;
}

const colorMap: Record<
  ProcessColor,
  { glow: string; icon: string; iconPanel: string }
> = {
  blue: {
    glow: 'shadow-glow-blue',
    icon: 'text-brand-blue',
    iconPanel: 'border-brand-blue/25 bg-brand-blue/10',
  },
  purple: {
    glow: 'shadow-glow-purple',
    icon: 'text-brand-purple',
    iconPanel: 'border-brand-purple/25 bg-brand-purple/10',
  },
  cyan: {
    glow: 'shadow-glow-cyan',
    icon: 'text-brand-cyan',
    iconPanel: 'border-brand-cyan/25 bg-brand-cyan/10',
  },
};

export function ProcessStepCard({
  isActive,
  onClick,
  phase,
  showFullContent = false,
}: ProcessStepCardProps) {
  const colors = colorMap[phase.color];
  const Icon = phase.icon;
  const reducedMotion = useReducedMotion();
  const contentId = `process-phase-${phase.id}-details`;
  const showDeliverables = showFullContent || isActive;

  return (
    <motion.article
      className={cn(
        'relative h-fit min-w-0 max-w-full overflow-hidden rounded-xl2 transition-shadow duration-300',
        'glass-panel',
        isActive && 'gradient-border z-10',
        isActive && colors.glow,
      )}
      layout={!reducedMotion}
      transition={{ layout: { duration: reducedMotion ? 0 : 0.3 } }}
    >
      {isActive ? (
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -right-12 -top-12 size-28 rounded-full opacity-20 blur-3xl',
            colors.iconPanel,
          )}
        />
      ) : null}

      <button
        aria-controls={contentId}
        aria-expanded={isActive}
        className="relative block w-full min-w-0 rounded-xl2 p-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan sm:p-5 lg:p-4"
        onClick={onClick}
        type="button"
      >
        <span className="flex items-center justify-between gap-2">
          <Badge className="px-2.5 py-0.5 font-mono" variant="outline">
            {String(phase.id).padStart(2, '0')}
          </Badge>
          <span className="text-right text-[0.65rem] text-slate-500 sm:text-xs lg:text-[0.65rem]">
            {phase.duration}
          </span>
        </span>

        <span
          className={cn(
            'mt-4 flex size-10 items-center justify-center rounded-xl border',
            colors.iconPanel,
          )}
        >
          <Icon aria-hidden="true" className={cn('size-5', colors.icon)} />
        </span>

        <h3 className="mt-4 text-base font-bold leading-tight text-white">
          {phase.title}
        </h3>
        <span className="mt-1 block text-xs italic leading-5 text-slate-400">
          {phase.subtitle}
        </span>
        <p
          className={cn(
            'mt-3 break-words text-sm leading-6 text-slate-300',
            !showFullContent && !isActive && 'line-clamp-3',
          )}
        >
          {phase.description}
        </p>
      </button>

      <div id={contentId} role="region">
        <AnimatePresence initial={false}>
          {showDeliverables ? (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              className="overflow-hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
            >
              <div className="flex min-w-0 flex-wrap gap-2 px-4 pb-4 sm:px-5 sm:pb-5 lg:px-4 lg:pb-4">
                {phase.deliverables.map((deliverable) => (
                  <span
                    className="glass-panel max-w-full break-words rounded-full px-2.5 py-1 text-[0.65rem] leading-4 text-slate-300"
                    key={deliverable}
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
