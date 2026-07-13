'use client';
import { Globe } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { SanityIndustry } from '@/lib/sanity/types';
export function IndustriesListingHero({ industries }: { industries: SanityIndustry[] }) { return <Section className="flex min-h-[50vh] items-center" variant="aurora"><Container><motion.div animate="visible" className="mx-auto max-w-4xl py-12 text-center" initial="hidden" variants={staggerContainer}><motion.div variants={fadeInUp}><Badge className="gap-2" variant="gradient"><Globe className="size-4" />12+ Industries</Badge></motion.div><motion.h1 className="mt-6 text-5xl font-bold text-white md:text-6xl" variants={fadeInUp}>We Speak Your <span className="text-gradient">Industry&apos;s Language</span></motion.h1><motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300" variants={fadeInUp}>Generic software doesn&apos;t solve specific problems. We invest deeply in understanding the domain, compliance requirements, user behaviors, and business models of every industry we serve — before writing a single line of code.</motion.p><motion.div className="mt-6 overflow-x-auto pb-2" variants={fadeInUp}><div className="mx-auto flex w-max gap-2 md:w-auto md:flex-wrap md:justify-center">{industries.map((industry) => <Link className="glass-panel rounded-full px-4 py-1.5 text-sm text-slate-300" href={`/industries/${industry.slug}`} key={industry.slug}>{industry.name}</Link>)}</div></motion.div></motion.div></Container></Section>; }
