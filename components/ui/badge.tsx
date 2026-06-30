import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'gradient' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'glass-panel text-slate-200',
  gradient:
    'border border-brand-purple/30 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white shadow-glow-blue',
  outline: 'border border-white/20 bg-transparent text-slate-300',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variantStyles[variant],
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Badge.displayName = 'Badge';
