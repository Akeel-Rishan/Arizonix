'use client';

import { CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { WorkflowColor, WorkflowStep } from '@/lib/workflow-data';

export type WorkflowNodeState = 'active' | 'completed' | 'idle';

export interface WorkflowNodeProps {
  className?: string;
  onClick?: () => void;
  reducedMotion?: boolean;
  selected?: boolean;
  state: WorkflowNodeState;
  step: WorkflowStep;
}

const colorMap: Record<
  WorkflowColor,
  {
    activeBorder: string;
    activeGlow: string;
    icon: string;
    iconActiveBg: string;
    iconIdleBg: string;
    ring: string;
  }
> = {
  blue: {
    activeBorder: 'border-brand-blue/50',
    activeGlow: 'shadow-glow-blue',
    icon: 'text-brand-blue',
    iconActiveBg: 'bg-brand-blue/25',
    iconIdleBg: 'bg-brand-blue/10',
    ring: 'border-brand-blue/40',
  },
  purple: {
    activeBorder: 'border-brand-purple/50',
    activeGlow: 'shadow-glow-purple',
    icon: 'text-brand-purple',
    iconActiveBg: 'bg-brand-purple/25',
    iconIdleBg: 'bg-brand-purple/10',
    ring: 'border-brand-purple/40',
  },
  cyan: {
    activeBorder: 'border-brand-cyan/50',
    activeGlow: 'shadow-glow-cyan',
    icon: 'text-brand-cyan',
    iconActiveBg: 'bg-brand-cyan/25',
    iconIdleBg: 'bg-brand-cyan/10',
    ring: 'border-brand-cyan/40',
  },
};

export function WorkflowNode({
  className,
  onClick,
  reducedMotion = false,
  selected = false,
  state,
  step,
}: WorkflowNodeProps) {
  const Icon = step.icon;
  const colors = colorMap[step.color];
  const isActive = state === 'active';
  const isCompleted = state === 'completed';

  return (
    <button
      aria-pressed={selected}
      className={cn(
        'glass-panel relative h-full min-h-44 w-full overflow-hidden p-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:p-6 lg:min-h-52',
        state === 'idle' && 'opacity-70',
        isCompleted && 'opacity-85',
        isActive && [
          'gradient-border opacity-100',
          colors.activeBorder,
          colors.activeGlow,
        ],
        selected && 'z-10 border-brand-cyan/70 shadow-glow-cyan',
        className,
      )}
      data-state={state}
      disabled={!onClick}
      onClick={onClick}
      type="button"
    >
      {isActive && !reducedMotion ? (
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 animate-pulse rounded-xl2 border',
            colors.ring,
          )}
        />
      ) : null}

      {isActive ? (
        <Badge
          className="absolute right-4 top-4 px-2 py-0.5 text-[0.62rem] tracking-[0.18em]"
          variant="gradient"
        >
          ACTIVE
        </Badge>
      ) : null}

      {isCompleted ? (
        <CheckCircle2
          aria-hidden="true"
          className="absolute right-4 top-4 size-5 text-emerald-400"
        />
      ) : null}

      <span
        className={cn(
          'mb-5 flex size-11 items-center justify-center rounded-xl border border-white/10 transition duration-300',
          isActive ? colors.iconActiveBg : colors.iconIdleBg,
          isActive && 'scale-105 border-white/20',
          state === 'idle' && 'opacity-60',
        )}
      >
        <Icon aria-hidden="true" className={cn('size-5', colors.icon)} />
      </span>

      <h3 className="text-base font-semibold tracking-tight text-white">
        {step.label}
      </h3>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
        {step.description}
      </p>
    </button>
  );
}
