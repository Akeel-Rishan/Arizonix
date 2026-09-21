'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

export interface AICapability {
  badge: string | null;
  color: 'blue' | 'cyan' | 'purple';
  description: string;
  features: string[];
  href: string;
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}
const colorMap = {
  blue: {
    border: 'hover:border-brand-blue/50 hover:shadow-glow-blue',
    bg: 'bg-brand-blue/10 group-hover:bg-brand-blue/20',
    text: 'text-brand-blue',
  },
  purple: {
    border: 'hover:border-brand-purple/50 hover:shadow-glow-purple',
    bg: 'bg-brand-purple/10 group-hover:bg-brand-purple/20',
    text: 'text-brand-purple',
  },
  cyan: {
    border: 'hover:border-brand-cyan/50 hover:shadow-glow-cyan',
    bg: 'bg-brand-cyan/10 group-hover:bg-brand-cyan/20',
    text: 'text-brand-cyan',
  },
};

export function AICapabilityCard({ capability }: { capability: AICapability }) {
  const Icon = getIcon(capability.icon);
  const colors = colorMap[capability.color];
  return (
    <article
      className={cn(
        'glass-panel group relative h-full rounded-xl2 p-8 transition duration-300 hover:-translate-y-2',
        colors.border,
      )}
    >
      {capability.badge ? (
        <Badge className="absolute right-3 top-3" variant="gradient">
          {capability.badge}
        </Badge>
      ) : null}
      <span
        className={cn(
          'size-13 flex items-center justify-center rounded-xl border border-white/10 transition',
          colors.bg,
        )}
      >
        <Icon className={cn('size-6', colors.text)} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-white">{capability.title}</h3>
      <p
        className={cn(
          'mt-1 text-xs font-semibold uppercase tracking-wide',
          colors.text,
        )}
      >
        {capability.subtitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {capability.description}
      </p>
      <ul className="mt-5 space-y-2">
        {capability.features.map((feature) => (
          <li
            className="flex items-center gap-2 text-xs text-slate-300"
            key={feature}
          >
            <CheckCircle2 className="size-4 shrink-0 text-brand-cyan" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        href={capability.href}
      >
        Learn More<span className="sr-only"> about {capability.title}</span>{' '}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  );
}
