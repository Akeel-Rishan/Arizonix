'use client';

import { ArrowUpRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import type { Industry, IndustryColor } from '@/lib/industries-data';
import { cn } from '@/lib/utils';

export interface IndustryCardProps {
  industry: Industry;
}

const colorMap: Record<
  IndustryColor,
  {
    arrow: string;
    bg: string;
    glow: string;
    icon: string;
    metric: string;
    text: string;
  }
> = {
  blue: {
    arrow: 'text-brand-blue',
    bg: 'border-brand-blue/20 bg-brand-blue/10 group-hover:bg-brand-blue/20',
    glow: 'hover:shadow-glow-blue',
    icon: 'text-brand-blue',
    metric: 'text-brand-blue',
    text: 'group-hover:text-brand-blue group-focus-visible:text-brand-blue',
  },
  purple: {
    arrow: 'text-brand-purple',
    bg: 'border-brand-purple/20 bg-brand-purple/10 group-hover:bg-brand-purple/20',
    glow: 'hover:shadow-glow-purple',
    icon: 'text-brand-purple',
    metric: 'text-brand-purple',
    text: 'group-hover:text-brand-purple group-focus-visible:text-brand-purple',
  },
  cyan: {
    arrow: 'text-brand-cyan',
    bg: 'border-brand-cyan/20 bg-brand-cyan/10 group-hover:bg-brand-cyan/20',
    glow: 'hover:shadow-glow-cyan',
    icon: 'text-brand-cyan',
    metric: 'text-brand-cyan',
    text: 'group-hover:text-brand-cyan group-focus-visible:text-brand-cyan',
  },
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;
  const colors = colorMap[industry.color];

  return (
    <Link
      className={cn(
        'group relative flex h-full min-h-52 flex-col overflow-hidden rounded-xl2 border border-white/10 p-4 outline-none transition duration-300 ease-in-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-navy-950 sm:min-h-56 sm:p-6',
        'glass-panel',
        colors.glow,
      )}
      href={`/industries/${industry.slug}`}
    >
      <ArrowUpRight
        aria-hidden="true"
        className={cn(
          'absolute right-4 top-4 size-4 translate-y-1 opacity-0 transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:right-5 sm:top-5',
          colors.arrow,
        )}
      />

      <span
        className={cn(
          'mb-5 flex size-10 shrink-0 items-center justify-center rounded-lg border transition duration-300 ease-in-out group-hover:scale-105 sm:size-11',
          colors.bg,
        )}
      >
        <Icon aria-hidden="true" className={cn('size-5', colors.icon)} />
      </span>

      <h3
        className={cn(
          'text-base font-semibold tracking-tight text-white transition duration-300 ease-in-out sm:text-lg',
          colors.text,
        )}
      >
        {industry.name}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
        {industry.description}
      </p>

      <span className="mt-auto hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold leading-none text-slate-300 sm:inline-flex">
        <TrendingUp
          aria-hidden="true"
          className={cn('size-3.5', colors.metric)}
        />
        {industry.stat}
      </span>
    </Link>
  );
}
