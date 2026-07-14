'use client';

import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import type { FocusEvent, MouseEvent } from 'react';

import { StarRating } from '@/components/sections/testimonial-card';
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { useCarousel } from '@/hooks/use-carousel';
import { AnimatePresence, motion, useReducedMotion } from '@/lib/framer-motion';
import type { Testimonial, TestimonialColor } from '@/lib/testimonials-data';
import { cn, getInitials } from '@/lib/utils';

const colorMap: Record<TestimonialColor, { avatar: string; quote: string }> = {
  blue: {
    avatar: 'from-brand-blue to-brand-purple',
    quote: 'text-brand-blue',
  },
  purple: {
    avatar: 'from-brand-purple to-brand-cyan',
    quote: 'text-brand-purple',
  },
  cyan: {
    avatar: 'from-brand-cyan to-brand-blue',
    quote: 'text-brand-cyan',
  },
};

const AUTO_PLAY_DURATION = 5000;

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const reducedMotion = Boolean(useReducedMotion());
  const { activeIndex, goNext, goPrev, goTo, isPaused, setIsPaused } =
    useCarousel({
    autoPlayDuration: AUTO_PLAY_DURATION,
    isPaused: reducedMotion,
    totalItems: testimonials.length,
  });
  const activeTestimonial = testimonials[activeIndex];
  const colors = colorMap[activeTestimonial.color];

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      !event.currentTarget.contains(event.relatedTarget) &&
      !event.currentTarget.matches(':hover')
    ) {
      setIsPaused(false);
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(document.activeElement)) {
      setIsPaused(false);
    }
  };

  return (
    <Section
      className="overflow-hidden border-y border-white/10"
      id="testimonials"
      variant="aurora"
    >
      <Container>
        <SectionHeading
          description="Don't take our word for it — here's what the decision-makers who chose Arizonix have to say about the impact on their business."
          eyebrow="CLIENT SUCCESS STORIES"
          title={
            <>
              Trusted By Teams{' '}
              <span className="text-gradient">Building The Future</span>
            </>
          }
        />

        <div
          className="mt-14 lg:mt-16"
          onBlurCapture={handleBlur}
          onFocusCapture={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            aria-label="Client testimonial"
            aria-live="polite"
            className="glass-panel relative min-h-[31rem] overflow-hidden rounded-xl2 p-6 sm:p-8 md:min-h-[27rem] md:p-12"
            role="region"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center"
                exit={{
                  opacity: reducedMotion ? 1 : 0,
                  y: reducedMotion ? 0 : -12,
                }}
                initial={{
                  opacity: reducedMotion ? 1 : 0,
                  y: reducedMotion ? 0 : 12,
                }}
                key={activeTestimonial.id}
                transition={{ duration: reducedMotion ? 0 : 0.4 }}
              >
                <div>
                  <StarRating rating={activeTestimonial.rating} />
                  <Badge className="mt-5" variant="default">
                    Project: {activeTestimonial.project}
                  </Badge>

                  <blockquote className="mt-6 text-xl font-medium italic leading-relaxed text-slate-200 md:text-2xl">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mr-2 inline-block align-[-0.2em] text-5xl font-bold not-italic leading-none',
                        colors.quote,
                      )}
                    >
                      “
                    </span>
                    {activeTestimonial.quote}
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className={cn(
                        'flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white shadow-lg',
                        colors.avatar,
                      )}
                    >
                      {activeTestimonial.avatar ? <Image alt={activeTestimonial.name} className="size-full rounded-full object-cover" height={56} sizes="56px" src={activeTestimonial.avatar} width={56} /> : getInitials(activeTestimonial.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">
                        {activeTestimonial.name}
                      </p>
                      <p className="text-sm text-slate-400">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </p>
                      <Badge className="mt-2" variant="outline">
                        {activeTestimonial.industry}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="relative hidden min-h-72 items-center justify-center lg:flex">
                  <span
                    aria-hidden="true"
                    className="text-gradient pointer-events-none absolute -top-16 right-0 select-none text-[12.5rem] font-bold leading-none opacity-10"
                  >
                    “
                  </span>
                  <div className="glass-panel relative z-10 w-full rounded-xl2 p-8 text-center">
                    <TrendingUp
                      aria-hidden="true"
                      className="mx-auto size-8 text-brand-cyan"
                    />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Business impact
                    </p>
                    <p className="text-gradient mt-3 text-2xl font-bold leading-tight">
                      {activeTestimonial.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-400">
              Explore all client stories
            </p>
            <div className="flex gap-2">
              <button
                aria-label={
                  isPaused ? 'Resume testimonials' : 'Pause testimonials'
                }
                aria-pressed={isPaused}
                className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                onClick={() => setIsPaused(!isPaused)}
                type="button"
              >
                {isPaused ? (
                  <Play aria-hidden="true" className="size-5" />
                ) : (
                  <Pause aria-hidden="true" className="size-5" />
                )}
              </button>
              <button
                aria-label="Previous testimonial"
                className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                onClick={goPrev}
                type="button"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                aria-label="Next testimonial"
                className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                onClick={goNext}
                type="button"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <TestimonialsCarousel
            activeIndex={activeIndex}
            goTo={goTo}
            reducedMotion={reducedMotion}
            testimonials={testimonials}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <Star
              aria-hidden="true"
              className="size-4 fill-amber-400 text-amber-400"
            />
            4.9/5 Average Rating
          </span>
          <span
            aria-hidden="true"
            className="hidden size-1 rounded-full bg-white/25 sm:block"
          />
          <span className="inline-flex items-center gap-2">
            <CheckCircle2
              aria-hidden="true"
              className="size-4 text-brand-cyan"
            />
            100% Project Success Rate
          </span>
          <span
            aria-hidden="true"
            className="hidden size-1 rounded-full bg-white/25 sm:block"
          />
          <span className="inline-flex items-center gap-2">
            <Users aria-hidden="true" className="size-4 text-brand-purple" />
            40+ Happy Clients
          </span>
        </div>
      </Container>
    </Section>
  );
}
