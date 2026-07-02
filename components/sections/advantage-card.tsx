import { cn } from '@/lib/utils';
import type { Advantage, AdvantageColor } from '@/lib/why-choose-us-data';

export interface AdvantageCardProps {
  advantage: Advantage;
}

const colorMap: Record<
  AdvantageColor,
  {
    glow: string;
    highlight: string;
    icon: string;
    iconPanel: string;
  }
> = {
  blue: {
    glow: 'hover:shadow-glow-blue',
    highlight: 'text-brand-blue/80 group-hover:text-brand-blue',
    icon: 'text-brand-blue group-hover:text-white',
    iconPanel:
      'border-brand-blue/25 bg-brand-blue/10 group-hover:border-brand-blue group-hover:bg-brand-blue',
  },
  purple: {
    glow: 'hover:shadow-glow-purple',
    highlight: 'text-brand-purple/80 group-hover:text-brand-purple',
    icon: 'text-brand-purple group-hover:text-white',
    iconPanel:
      'border-brand-purple/25 bg-brand-purple/10 group-hover:border-brand-purple group-hover:bg-brand-purple',
  },
  cyan: {
    glow: 'hover:shadow-glow-cyan',
    highlight: 'text-brand-cyan/80 group-hover:text-brand-cyan',
    icon: 'text-brand-cyan group-hover:text-white',
    iconPanel:
      'border-brand-cyan/25 bg-brand-cyan/10 group-hover:border-brand-cyan group-hover:bg-brand-cyan',
  },
};

export function AdvantageCard({ advantage }: AdvantageCardProps) {
  const Icon = advantage.icon;
  const colors = colorMap[advantage.color];

  return (
    <article
      className={cn(
        'glass-panel group relative h-full overflow-hidden rounded-xl2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white/10',
        colors.glow,
      )}
    >
      <span
        aria-hidden="true"
        className="gradient-border pointer-events-none absolute inset-0 rounded-xl2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <span
          aria-hidden="true"
          className={cn(
            'flex size-12 items-center justify-center rounded-xl border transition-all duration-300',
            colors.iconPanel,
          )}
        >
          <Icon
            className={cn('size-6 transition-colors duration-300', colors.icon)}
          />
        </span>

        <p
          className={cn(
            'mt-4 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300',
            colors.highlight,
          )}
        >
          {advantage.highlight}
        </p>

        <h3 className="mt-4 text-lg font-bold text-white">{advantage.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {advantage.description}
        </p>
      </div>
    </article>
  );
}
