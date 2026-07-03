'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Section } from '@/components/ui/section';

const stats = [{ value: 50, suffix: '+', label: 'Projects Delivered' }, { value: 98, suffix: '%', label: 'Client Satisfaction' }, { value: 40, suffix: '+', label: 'Enterprise Clients' }, { value: 12, suffix: '+', label: 'Industries Served' }, { value: 5, suffix: '+', label: 'Years in Business' }, { value: 3, suffix: 'x', label: 'Average Client ROI' }, { value: 100, suffix: '%', label: 'On-Time Delivery' }, { value: 24, suffix: '/7', label: 'Support Available' }];

export function CompanyStats() {
  return <Section aria-label="Arizonix company statistics" className="py-16 md:py-20" role="region"><dl className="grid grid-cols-2 border-y border-white/10 bg-white/5 md:grid-cols-4">{stats.map((stat) => <div className="flex min-h-36 flex-col items-center justify-center border-b border-r border-white/10 p-5 text-center" key={stat.label}><dd><AnimatedCounter ariaLabel={`${stat.value}${stat.suffix} ${stat.label}`} className="text-gradient" suffix={stat.suffix} value={stat.value} /></dd><dt className="mt-2 text-sm text-slate-400">{stat.label}</dt></div>)}</dl></Section>;
}
