'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Calendar, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { fadeInUp, staggerContainer } from '@/lib/motion';
export function AICTA() {
  return (
    <Section className="py-24" id="contact" variant="aurora">
      <motion.div
        className="container mx-auto max-w-3xl px-4 text-center"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <motion.div variants={fadeInUp}>
          <Badge className="gap-2" variant="gradient">
            <Sparkles className="size-4" />
            Let&apos;s Build Your AI System
          </Badge>
        </motion.div>
        <motion.h2
          className="mt-6 text-4xl font-bold text-white md:text-5xl"
          variants={fadeInUp}
        >
          Ready To Automate Your
          <br />
          <span className="text-gradient">Most Costly Manual Processes?</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300"
          variants={fadeInUp}
        >
          Tell us what you want to automate. We&apos;ll assess the opportunity
          and deliver a free automation audit within 48 hours — including
          what&apos;s possible and what it would cost.
        </motion.p>
        <motion.div
          className="gradient-border glass-panel mx-auto mt-7 max-w-sm rounded-xl p-5"
          variants={fadeInUp}
        >
          <Bot className="mx-auto size-8 text-brand-cyan" />
          <h3 className="mt-2 font-bold text-white">
            Free AI Automation Audit
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            3 automation opportunities identified in 48 hours
          </p>
          <p className="mt-1 text-xs text-slate-500">No commitment required</p>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          variants={fadeInUp}
        >
          <Button
            href="/contact"
            icon={ArrowRight}
            iconPosition="right"
            size="lg"
          >
            Get Your Free AI Audit
          </Button>
          <Button href="/contact" icon={Calendar} size="lg" variant="outline">
            Schedule AI Demo
          </Button>
        </motion.div>
        <motion.p className="mt-5 text-sm text-slate-500" variants={fadeInUp}>
          Or email us directly at{' '}
          <a
            className="text-brand-cyan hover:underline"
            href="mailto:ai@arizonix.com"
          >
            ai@arizonix.com
          </a>
        </motion.p>
        <motion.p className="mt-2 text-xs text-slate-500" variants={fadeInUp}>
          <span className="text-emerald-400">●</span> Currently accepting AI
          projects — 3 spots available this quarter.
        </motion.p>
      </motion.div>
    </Section>
  );
}
