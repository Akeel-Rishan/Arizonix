'use client';

import type { ReactNode } from 'react';

import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  align?: 'center' | 'left';
  className?: string;
  description?: string;
  eyebrow?: string;
  title: ReactNode;
}

export function SectionHeading({
  align = 'center',
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
