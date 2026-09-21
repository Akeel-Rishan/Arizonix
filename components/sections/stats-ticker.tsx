'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { StatItem } from '@/lib/why-choose-us-data';

export interface StatsTickerProps {
  stats: StatItem[];
}

export function StatsTicker({ stats }: StatsTickerProps) {
  return (
    <section
      aria-label="Arizonix key statistics"
      className="mt-14 border-y border-white/10 bg-white/5 backdrop-blur-xl md:mt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <dl
            className="flex min-h-40 flex-col items-center justify-center border-b border-r border-white/5 px-3 py-8 text-center even:border-r-0 md:min-h-44 md:px-6 md:py-10 md:even:border-r md:[&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b-0"
            key={stat.label}
          >
            <dt className="order-2 mt-3 text-sm leading-5 text-slate-400">
              {stat.label}
            </dt>
            <dd className="order-1">
              <AnimatedCounter
                ariaLabel={`${stat.value}${stat.suffix} ${stat.label}`}
                className="text-gradient text-3xl font-bold sm:text-4xl md:text-5xl"
                suffix={stat.suffix}
                value={stat.value}
              />
            </dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
