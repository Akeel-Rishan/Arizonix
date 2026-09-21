'use client';

import { ArrowRight, Brain, PlayCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GradientTextAnimate } from '@/components/ui/gradient-text-animate';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { ParallaxElement } from '@/components/ui/parallax-element';
import { Section } from '@/components/ui/section';
import { motion, useReducedMotion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const AINeuralNetwork = dynamic(
  () => import('@/components/pages/ai-automation/ai-neural-network'),
  { loading: () => null, ssr: false },
);

export function AIHero() {
  const reducedMotion = useReducedMotion();
  const scrollToWorkflow = () =>
    document
      .querySelector('#ai-workflow')
      ?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });

  return (
    <Section
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      variant="aurora"
    >
      <ParallaxElement
        className="pointer-events-none absolute inset-0"
        speed={0.05}
      >
        <AINeuralNetwork />
      </ParallaxElement>
      <motion.div
        animate="visible"
        className="container relative z-10 mx-auto px-4 text-center"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Badge className="gap-2" variant="gradient">
            <Brain className="size-4" />
            AI Automation
          </Badge>
        </motion.div>
        <motion.h1
          className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          variants={fadeInUp}
        >
          Put Your Business On
          <br />
          <GradientTextAnimate>Autopilot With AI</GradientTextAnimate>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          variants={fadeInUp}
        >
          We design, build, and deploy custom AI automation systems that
          eliminate repetitive work, accelerate decision-making, and scale your
          operations — without proportional headcount growth.
        </motion.p>
        <motion.div
          className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-4 md:gap-16"
          variants={fadeInUp}
        >
          {[
            ['80%', 'Reduction in manual work'],
            ['10x', 'Faster response times'],
            ['24/7', 'AI works while you sleep'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-gradient text-3xl font-bold sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          variants={fadeInUp}
        >
          <MagneticButton>
            <Button
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
            >
              Book an AI Consultation
            </Button>
          </MagneticButton>
          <Button
            icon={PlayCircle}
            onClick={scrollToWorkflow}
            size="lg"
            variant="secondary"
          >
            See AI In Action
          </Button>
        </motion.div>
        <motion.p className="mt-4 text-sm text-slate-400" variants={fadeInUp}>
          AI solutions deployed across Healthcare, Finance, Retail, Logistics
          &amp; more
        </motion.p>
      </motion.div>
    </Section>
  );
}
