'use client';
import Link from 'next/link';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { SanityCaseStudyFull } from '@/lib/sanity/types';
import { parseMetric } from '@/lib/utils';
export function CaseStudyResultsPanel({ project }: { project: NonNullable<SanityCaseStudyFull['relatedProject']> }) { return <div className="gradient-border glass-panel mx-auto my-16 max-w-2xl rounded-xl2 p-8"><h2 className="text-xl font-bold text-white">Project Outcomes</h2><dl className="mt-6 flex flex-wrap gap-6">{project.results.map((result) => { const parsed = parseMetric(result.metric); return <div className="flex-1 text-center" key={result.label}><dd className="text-gradient text-3xl font-bold">{'static' in parsed ? parsed.static : <AnimatedCounter suffix={parsed.suffix} value={parsed.value} />}</dd><dt className="mt-2 text-xs text-slate-400">{result.label}</dt></div>; })}</dl><Link className="mt-6 block text-center text-sm text-brand-blue" href={`/portfolio/${project.slug}`}>→ View full project: {project.title}</Link></div>; }
