import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { IndustrySolution } from '@/lib/industry-detail-data';
export function IndustrySolutions({ industryName, solutions }: { industryName: string; solutions?: IndustrySolution[] }) { if (!solutions?.length) return null; return <Section><Container><SectionHeading description={`Engineering capabilities selected for the realities of ${industryName.toLowerCase()} organizations.`} eyebrow="HOW WE HELP" title={<>Solutions For <span className="text-gradient">{industryName}</span></>} /><div className="mt-12 grid gap-6 md:grid-cols-2">{solutions.map((solution) => <Link className="glass-panel group rounded-xl2 p-7 transition hover:-translate-y-1 hover:shadow-glow-blue" href={`/services/${solution.serviceSlug}`} key={solution.serviceSlug}><h3 className="text-lg font-bold text-white">{solution.serviceName}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{solution.relevance}</p><span className="mt-5 flex items-center gap-1 text-sm text-brand-blue">Learn More <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}</div></Container></Section>; }
