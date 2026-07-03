'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { fadeInUp, staggerContainer } from '@/lib/motion';
const stats = [['50+', 'Projects Delivered'], ['12+', 'Industries Served'], ['98%', 'Client Satisfaction']];
export function PortfolioHero() { return <Section className="flex min-h-[50vh] items-center" variant="aurora"><Container><motion.div animate="visible" className="mx-auto max-w-4xl py-12 text-center" initial="hidden" variants={staggerContainer}><motion.div variants={fadeInUp}><Badge className="gap-2" variant="gradient"><Briefcase className="size-4" />Our Work</Badge></motion.div><motion.h1 className="mt-6 text-5xl font-bold text-white md:text-6xl" variants={fadeInUp}>Projects That <span className="text-gradient">Changed The Trajectory</span> Of Businesses</motion.h1><motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300" variants={fadeInUp}>Every project in our portfolio represents a real business problem solved with thoughtful engineering. We measure success not in lines of code but in the outcomes our clients achieve.</motion.p><motion.dl className="mt-8 flex justify-center" variants={fadeInUp}>{stats.map(([value, label], index) => <div className="px-5 text-center sm:px-10" key={label}><dd className="text-2xl font-bold text-white">{value}</dd><dt className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</dt>{index < 2 ? <span aria-hidden="true" className="absolute border-r border-white/20" /> : null}</div>)}</motion.dl></motion.div></Container></Section>; }
