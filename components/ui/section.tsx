import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type SectionVariant = 'aurora' | 'default' | 'glass';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-transparent',
  aurora: 'aurora-bg',
  glass: 'border-y border-white/10 bg-white/5 backdrop-blur-xl',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <section
      className={cn('py-20 md:py-section', variantStyles[variant], className)}
      ref={ref}
      {...props}
    />
  ),
);

Section.displayName = 'Section';
