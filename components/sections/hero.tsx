import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { HeroBackgroundOrbs } from '@/components/sections/hero-background-orbs';
import { HeroMockup } from '@/components/sections/hero-mockup';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { GradientTextAnimate } from '@/components/ui/gradient-text-animate';
import { Section } from '@/components/ui/section';

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
  return (
    <Section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden !py-0"
      variant="aurora"
    >
      <HeroBackgroundOrbs />

      <Container className="relative z-10 py-16 text-center sm:py-20 lg:py-24">
        <div className="mx-auto">
          <div data-hero-step="eyebrow">
            <Badge className="gap-2 border-brand-cyan/20 bg-navy-900/60 px-4 py-2 text-slate-200">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-cyan opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-cyan" />
              </span>
              {HERO_EYEBROW}
            </Badge>
          </div>

          <div data-hero-step="headline">
            <h1
              className="mx-auto mt-7 max-w-6xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              id="hero-heading"
            >
              We Engineer{' '}
              <GradientTextAnimate>Intelligent Software</GradientTextAnimate>{' '}
              That Scales Your Business
            </h1>
          </div>

          <div data-hero-step="description">
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
              {HERO_DESCRIPTION}
            </p>
          </div>

          <div
            className="mx-auto mt-9 flex max-w-xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
            data-hero-step="ctas"
          >
            <Link
              className="min-h-13 inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-6 py-3 text-base font-semibold text-white shadow-glow-blue transition duration-200 hover:-translate-y-0.5 hover:shadow-glow-purple hover:brightness-110 active:scale-95 sm:w-auto"
              href="/contact"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              className="glass-panel min-h-13 inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/30 hover:bg-white/10 active:scale-95 sm:w-auto"
              href="/portfolio"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10" data-hero-step="trust">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {TRUST_LABEL}
            </p>
            <ul
              aria-label={TRUST_LABEL}
              className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10"
            >
              {TRUST_MARKS.map((mark) => (
                <li
                  className="text-sm font-semibold tracking-wide text-slate-400 opacity-60 sm:text-base"
                  key={mark}
                >
                  {mark}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 sm:mt-16" data-hero-step="mockup">
            <HeroMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
