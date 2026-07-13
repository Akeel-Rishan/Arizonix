'use client';

import { Building2, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

const initials = ['AC', 'SP', 'MR', 'DK', 'JL'];

export function AboutHero() {
  return <Section className="flex min-h-[60vh] items-center overflow-hidden" variant="aurora"><Container><motion.div animate="visible" className="mx-auto max-w-4xl py-12 text-center" initial="hidden" variants={staggerContainer}>
    <motion.div variants={fadeInUp}><Badge className="gap-2" variant="gradient"><Building2 className="size-4" />About Arizonix</Badge></motion.div>
    <motion.h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl" variants={fadeInUp}>We Build The Software That <span className="text-gradient">Builds Businesses</span></motion.h1>
    <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300" variants={fadeInUp}>Arizonix is a premium AI and software engineering company founded on a simple belief — that great technology, built with care, changes the trajectory of businesses. We are engineers, designers, and AI specialists who take our clients&apos; success personally.</motion.p>
    <motion.div className="mt-7 flex flex-col items-center justify-center gap-5 text-sm text-slate-300 sm:flex-row sm:gap-8" variants={fadeInUp}><div className="flex items-center"><div className="flex">{initials.map((value, index) => <span aria-hidden="true" className={cn('flex size-10 items-center justify-center rounded-full border-2 border-navy-950 bg-gradient-to-br from-brand-blue to-brand-purple text-xs font-bold text-white', index > 0 && '-ml-3')} key={value}>{value}</span>)}</div><span className="ml-3">10+ Engineers &amp; Designers</span></div><span aria-hidden="true" className="hidden h-8 border-r border-white/20 sm:block" /><div className="flex items-center gap-2"><MapPin className="size-4 text-brand-cyan" />Remote-First · Serving Clients Worldwide</div></motion.div>
  </motion.div></Container></Section>;
}
