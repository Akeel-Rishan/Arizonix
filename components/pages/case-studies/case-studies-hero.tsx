'use client';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
export function CaseStudiesHero() { return <Section className="flex min-h-[50vh] items-center"><Container><motion.div animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }}><Badge variant="gradient">CASE STUDIES</Badge><h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">The Full Story Behind Our <span className="text-gradient">Best Work</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Go deeper than a portfolio preview. These case studies walk through the real challenges, our strategic approach, and the measurable outcomes we delivered for each client.</p></motion.div></Container></Section>; }
