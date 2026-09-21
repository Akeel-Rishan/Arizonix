'use client';

import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function AboutCTA() {
  return <Section className="py-24" variant="aurora"><Container><motion.div className="mx-auto max-w-3xl text-center" initial="hidden" variants={staggerContainer} viewport={{ once: true, amount: 0.3 }} whileInView="visible"><motion.div variants={fadeInUp}><Badge variant="gradient">Ready To Work Together?</Badge></motion.div><motion.h2 className="mt-6 text-4xl font-bold text-white md:text-5xl" variants={fadeInUp}>Let&apos;s Build Something <span className="text-gradient">Remarkable</span> Together</motion.h2><motion.p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300" variants={fadeInUp}>Whether you&apos;re a startup building your first product or an enterprise modernizing your technology — we&apos;d love to hear about your project.</motion.p><motion.div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row" variants={fadeInUp}><Button className="w-full sm:w-auto" href="/contact" icon={ArrowRight} iconPosition="right" size="lg">Start Your Project</Button><Button className="w-full sm:w-auto" href="/portfolio" size="lg" variant="outline">View Our Work</Button></motion.div><motion.p className="mt-4 text-sm text-slate-400" variants={fadeInUp}>Join 40+ companies who chose Arizonix as their technology partner.</motion.p></motion.div></Container></Section>;
}
