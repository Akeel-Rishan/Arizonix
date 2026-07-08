import { forwardRef, type HTMLAttributes } from 'react';

import { NoiseTexture } from '@/components/ui/noise-texture';
import { cn } from '@/lib/utils';

export type SectionVariant = 'aurora' | 'default' | 'glass';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bottomFade?: boolean;
  variant?: SectionVariant;
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-transparent',
  aurora: 'aurora-bg',
  glass: 'border-y border-white/10 bg-white/5 backdrop-blur-xl',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { bottomFade = false, children, className, variant = 'default', ...props },
    ref,
  ) => (
    <section
      className={cn(
        'relative py-20 md:py-section',
        variantStyles[variant],
        className,
      )}
      ref={ref}
      {...props}
    >
      {variant === 'aurora' ? <NoiseTexture /> : null}
      <div className="relative z-[1] w-full">{children}</div>
      {bottomFade ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-950/40"
        />
      ) : null}
    </section>
  ),
);

Section.displayName = 'Section';
