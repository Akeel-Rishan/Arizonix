'use client';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { getIcon } from '@/lib/icon-map';
import type { IndustryDetailData } from '@/lib/industry-detail-data';
import type { SanityIndustry } from '@/lib/sanity/types';
import { cn } from '@/lib/utils';
const colorMap = { blue: 'from-brand-blue to-brand-purple shadow-glow-blue', purple: 'from-brand-purple to-brand-blue shadow-glow-purple', cyan: 'from-brand-cyan to-brand-blue shadow-glow-cyan' };
export function IndustryDetailHero({ detail, industry }: { detail?: IndustryDetailData; industry: SanityIndustry }) { const Icon = getIcon(industry.icon); return <Section className="flex min-h-[60vh] items-center"><Container><div className="grid items-center gap-12 py-12 lg:grid-cols-[3fr_2fr]"><motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}><nav aria-label="Breadcrumb"><ol className="flex gap-2 text-sm"><li><Link className="text-slate-500" href="/industries">Industries</Link></li><li aria-hidden>/</li><li aria-current="page" className="text-white">{industry.name}</li></ol></nav><Badge className="mt-6" variant="gradient">{industry.name} Technology</Badge><h1 className="mt-5 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{detail?.heroTagline ?? <>Premium Software &amp; <span className="text-gradient">AI Solutions</span> for {industry.name}</>}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{detail?.heroDescription ?? industry.description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/contact" icon={ArrowRight} iconPosition="right" size="lg">Discuss Your Project</Button><Button href="#solutions" size="lg" variant="outline">Explore Solutions</Button></div><div className="mt-6 flex flex-wrap gap-5">{['Domain-specific expertise', 'Enterprise-grade security', 'Measurable outcomes'].map((item) => <span className="flex items-center gap-2 text-sm text-slate-400" key={item}><CheckCircle2 className="size-4 text-brand-cyan" />{item}</span>)}</div></motion.div><motion.div animate={{ opacity: 1, scale: 1 }} aria-hidden className="relative hidden min-h-96 items-center justify-center lg:flex" initial={{ opacity: 0, scale: 0.9 }}><div className="absolute size-72 rounded-full bg-brand-purple/20 blur-3xl" /><div className={cn('relative flex size-36 items-center justify-center rounded-3xl bg-gradient-to-br text-white', colorMap[industry.color])}><Icon className="size-20" /></div><span className="absolute bottom-4 text-[72px] font-bold text-white opacity-5">{industry.name}</span></motion.div></div></Container></Section>; }
