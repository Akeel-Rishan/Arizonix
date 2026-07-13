'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
export function PortfolioCTA() { return <Section className="py-20" variant="aurora"><Container><motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}><p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">Ready To See What We Can Build For You?</p><h2 className="mt-4 text-4xl font-bold text-white">Your Project <span className="text-gradient">Could Be Next</span></h2><p className="mx-auto mt-4 max-w-xl text-slate-300">Every project in this portfolio started with a conversation. Tell us about your challenge — we&apos;ll tell you exactly how we&apos;d solve it.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact" size="lg">Start a Project</Button><Button href="/contact" size="lg" variant="outline">Schedule a Call</Button></div><p className="mt-4 text-sm text-slate-500">Free consultation · No commitment · Proposal within 48 hours</p></motion.div></Container></Section>; }
