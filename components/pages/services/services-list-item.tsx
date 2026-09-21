'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { getIcon } from '@/lib/icon-map';
import type { ServiceCategoryColor } from '@/lib/services-categories';
import { cn } from '@/lib/utils';
const colorMap = { blue: { box: 'border-brand-blue/20 bg-brand-blue/10 text-brand-blue', hover: 'hover:border-brand-blue/40 hover:shadow-glow-blue', arrow: 'group-hover:text-brand-blue' }, purple: { box: 'border-brand-purple/20 bg-brand-purple/10 text-brand-purple', hover: 'hover:border-brand-purple/40 hover:shadow-glow-purple', arrow: 'group-hover:text-brand-purple' }, cyan: { box: 'border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan', hover: 'hover:border-brand-cyan/40 hover:shadow-glow-cyan', arrow: 'group-hover:text-brand-cyan' } };
export interface ServiceListDisplay { name: string; slug: string; shortDescription: string; icon?: string }
export function ServicesListItem({ color, service }: { color: ServiceCategoryColor; service: ServiceListDisplay }) { const Icon = getIcon(service.icon); const styles = colorMap[color]; return <Link className={cn('glass-panel group flex h-full items-center gap-4 rounded-xl p-5 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan', styles.hover)} href={`/services/${service.slug}`}><span className={cn('flex size-12 shrink-0 items-center justify-center rounded-lg border', styles.box)}><Icon className="size-6" /></span><span className="min-w-0 flex-1"><span className="block font-semibold text-white">{service.name}</span><span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-400">{service.shortDescription}</span></span><ArrowUpRight className={cn('size-5 shrink-0 text-slate-400 transition', styles.arrow)} /></Link>; }
