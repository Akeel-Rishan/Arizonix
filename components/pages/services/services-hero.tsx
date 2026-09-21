'use client';
import { Layers } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
export function ServicesHero({ count }: { count: number }) { return <Section className="flex min-h-[50vh] items-center" variant="aurora"><Container><motion.div animate="visible" className="mx-auto max-w-4xl py-12 text-center" initial="hidden" variants={staggerContainer}><motion.div variants={fadeInUp}><Badge className="gap-2" variant="gradient"><Layers className="size-4" />What We Build</Badge></motion.div><motion.h1 className="mt-6 text-5xl font-bold text-white md:text-6xl" variants={fadeInUp}>End-To-End Software &amp; <span className="text-gradient">AI Services</span></motion.h1><motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300" variants={fadeInUp}>From AI-powered automation to enterprise-grade mobile applications — we deliver the full stack of capabilities your business needs to build, scale, and lead in your industry.</motion.p><motion.p className="mt-4 text-sm text-slate-400" variants={fadeInUp}><span className="mr-2 font-bold text-brand-blue">{count}</span>services across software, AI, mobile, and cloud engineering</motion.p></motion.div></Container></Section>; }
