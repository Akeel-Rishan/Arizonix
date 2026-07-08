'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { HeroBackgroundOrbs } from '@/components/sections/hero-background-orbs';
import { HeroMockup } from '@/components/sections/hero-mockup';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { GradientTextAnimate } from '@/components/ui/gradient-text-animate';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Section } from '@/components/ui/section';
import {
  blurIn,
  fadeInUp,
  premiumScaleIn,
  staggerContainer,
} from '@/lib/motion';

const HERO_EYEBROW = 'AI-Powered Software Engineering';
const HERO_DESCRIPTION =
  'We build enterprise-grade web, mobile, and AI automation solutions that turn ambitious ideas into measurable growth.';
const TRUST_LABEL = 'Illustrative partner logo placeholders';
const TRUST_MARKS = [
  'Nexora',
  'Brightline',
  'Veridian',
  'Atlas Health',
  'Solstice',
] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <Section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden !py-0"
      variant="aurora"
    >
      <HeroBackgroundOrbs reducedMotion={shouldReduceMotion} />

      <Container className="relative z-10 py-16 text-center sm:py-20 lg:py-24">
        <motion.div
          animate="visible"
          className="mx-auto"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div data-hero-step="eyebrow" variants={premiumScaleIn}>
            <Badge className="gap-2 border-brand-cyan/20 bg-navy-900/60 px-4 py-2 text-slate-200">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-cyan opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-cyan" />
              </span>
              {HERO_EYEBROW}
            </Badge>
          </motion.div>

          <motion.div data-hero-step="headline" variants={blurIn}>
            <h1
              className="mx-auto mt-7 max-w-6xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              id="hero-heading"
            >
              We Engineer{' '}
              <GradientTextAnimate>Intelligent Software</GradientTextAnimate>{' '}
              That Scales Your Business
            </h1>
          </motion.div>

          <motion.div data-hero-step="description" variants={fadeInUp}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
              {HERO_DESCRIPTION}
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-9 flex max-w-xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
            data-hero-step="ctas"
            variants={fadeInUp}
          >
            <MagneticButton>
              <Button
                className="w-full sm:w-auto"
                href="/contact"
                icon={ArrowRight}
                iconPosition="right"
                size="lg"
              >
                Schedule a Free Consultation
              </Button>
            </MagneticButton>
            <Button
              className="w-full sm:w-auto"
              href="/portfolio"
              size="lg"
              variant="secondary"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            className="mt-10"
            data-hero-step="trust"
            variants={fadeInUp}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              {TRUST_LABEL}
            </p>
            <div
              aria-label={TRUST_LABEL}
              className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10"
            >
              {TRUST_MARKS.map((mark) => (
                <span
                  className="text-sm font-semibold tracking-wide text-slate-400 opacity-60 sm:text-base"
                  key={mark}
                >
                  {mark}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-14 sm:mt-16"
            data-hero-step="mockup"
            variants={fadeInUp}
          >
            <HeroMockup reducedMotion={shouldReduceMotion} />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
