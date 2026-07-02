'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { ProcessStepCard } from '@/components/sections/process-step-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { useProcessPlayer } from '@/hooks/use-process-player';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import {
  processPhases,
  type ProcessColor,
  type ProcessPhase,
} from '@/lib/process-data';
import { cn } from '@/lib/utils';

type ProcessLayout = 'desktop' | 'mobile' | 'tablet';

const colorMap: Record<
  ProcessColor,
  { dot: string; glow: string; stem: string }
> = {
  blue: {
    dot: 'bg-brand-blue',
    glow: 'shadow-glow-blue',
    stem: 'bg-brand-blue/60',
  },
  purple: {
    dot: 'bg-brand-purple',
    glow: 'shadow-glow-purple',
    stem: 'bg-brand-purple/60',
  },
  cyan: {
    dot: 'bg-brand-cyan',
    glow: 'shadow-glow-cyan',
    stem: 'bg-brand-cyan/60',
  },
};

const desktopColumnMap: Record<number, string> = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
};

const stats = [
  { label: 'On-Time Delivery', value: '100%' },
  { label: 'Projects Shipped', value: '50+' },
  { label: 'Average Client Rating', value: '4.9★' },
];

const desktopTimelineStagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.1,
    },
  },
};

function useProcessLayout(): ProcessLayout {
  const [layout, setLayout] = useState<ProcessLayout>('mobile');

  useEffect(() => {
    const updateLayout = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setLayout('desktop');
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setLayout('tablet');
      } else {
        setLayout('mobile');
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return layout;
}

function TimelineNode({
  isActive,
  phase,
  stemDirection,
}: {
  isActive: boolean;
  phase: ProcessPhase;
  stemDirection: 'down' | 'right' | 'up';
}) {
  const colors = colorMap[phase.color];
  const reducedMotion = useReducedMotion();
  const stemStyles = {
    down: 'left-1/2 top-1/2 h-8 w-px -translate-x-1/2',
    right: 'left-1/2 top-1/2 h-px w-8 -translate-y-1/2',
    up: 'bottom-1/2 left-1/2 h-8 w-px -translate-x-1/2',
  } as const;

  return (
    <span
      aria-hidden="true"
      className="relative flex size-8 items-center justify-center"
    >
      <span
        className={cn('absolute', stemStyles[stemDirection], colors.stem)}
      />
      <motion.span
        animate={
          isActive && !reducedMotion ? { scale: [1, 1.35, 1] } : { scale: 1 }
        }
        className={cn(
          'relative z-10 size-3 rounded-full ring-4 ring-navy-950',
          colors.dot,
          isActive && colors.glow,
        )}
        transition={
          isActive && !reducedMotion
            ? { duration: 1.4, ease: 'easeInOut', repeat: Infinity }
            : { duration: 0.2 }
        }
      />
    </span>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });
  const reducedMotion = useReducedMotion();
  const layout = useProcessLayout();
  const isDesktop = layout === 'desktop';
  const { activeStep, pause, setActiveStep } = useProcessPlayer({
    isInView: isInView && isDesktop && !Boolean(reducedMotion),
    stepDuration: 3000,
    totalSteps: processPhases.length,
  });

  const selectPhase = (phaseId: number) => {
    setActiveStep(activeStep === phaseId ? null : phaseId);
  };

  return (
    <Section id="process" ref={sectionRef} variant="default">
      <Container onFocusCapture={pause}>
        <SectionHeading
          description="From initial discovery to ongoing growth, every phase of our process is designed to deliver on time, within budget, and beyond expectations."
          eyebrow="HOW WE WORK"
          title={
            <>
              A Process Built For{' '}
              <span className="text-gradient">Exceptional Outcomes</span>
            </>
          }
        />

        {/* Desktop: alternating horizontal timeline */}
        {layout === 'desktop' ? (
          <motion.div
            className="relative mt-16 grid min-h-[44rem] grid-cols-7 grid-rows-[1fr_4rem_1fr] gap-x-2"
            initial="hidden"
            variants={desktopTimelineStagger}
            viewport={{ once: true, amount: 0.15 }}
            whileInView="visible"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-white/10"
            >
              <motion.div
                className="absolute inset-0 origin-left bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
                initial={{ scaleX: reducedMotion ? 1 : 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 1,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1 }}
              />
              {!reducedMotion ? (
                <motion.div
                  className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
                  animate={{ x: ['-100%', '500%'] }}
                  transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
                />
              ) : null}
            </div>

            {processPhases.map((phase) => {
              const isAbove = phase.id % 2 === 1;
              const isActive = activeStep === phase.id;

              return (
                <motion.div
                  className={cn(
                    'relative self-stretch',
                    desktopColumnMap[phase.id],
                    isAbove
                      ? 'row-start-1 flex items-end pb-8'
                      : 'row-start-3 flex items-start pt-8',
                  )}
                  key={phase.id}
                  variants={fadeInUp}
                >
                  <ProcessStepCard
                    isActive={isActive}
                    onClick={() => selectPhase(phase.id)}
                    phase={phase}
                  />
                  <span
                    className={cn(
                      'absolute left-1/2 -translate-x-1/2',
                      isAbove ? '-bottom-8' : '-top-8',
                    )}
                  >
                    <TimelineNode
                      isActive={isActive}
                      phase={phase}
                      stemDirection={isAbove ? 'up' : 'down'}
                    />
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        ) : null}

        {/* Tablet: left-aligned vertical timeline */}
        {layout === 'tablet' ? (
          <motion.div
            className="relative mt-14 space-y-6 pl-14"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.08 }}
            whileInView="visible"
          >
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-4 top-0 w-0.5 origin-top bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-blue"
              initial={{ scaleY: reducedMotion ? 1 : 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.9 }}
            />
            {processPhases.map((phase) => (
              <motion.div
                className="relative"
                key={phase.id}
                variants={fadeInUp}
              >
                <span className="absolute -left-[3.75rem] top-7">
                  <TimelineNode
                    isActive={activeStep === phase.id}
                    phase={phase}
                    stemDirection="right"
                  />
                </span>
                <ProcessStepCard
                  isActive={activeStep === phase.id}
                  onClick={() => selectPhase(phase.id)}
                  phase={phase}
                  showFullContent
                />
              </motion.div>
            ))}
          </motion.div>
        ) : null}

        {/* Mobile: simplified stacked cards */}
        {layout === 'mobile' ? (
          <motion.div
            className="mt-12 grid gap-6"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.05 }}
            whileInView="visible"
          >
            {processPhases.map((phase) => (
              <motion.div key={phase.id} variants={fadeInUp}>
                <ProcessStepCard
                  isActive={activeStep === phase.id}
                  onClick={() => selectPhase(phase.id)}
                  phase={phase}
                  showFullContent
                />
              </motion.div>
            ))}
          </motion.div>
        ) : null}

        <motion.dl
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-0"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.4 }}
          whileInView="visible"
        >
          {stats.map((stat) => (
            <div
              className="flex w-full flex-col text-center sm:w-1/3 sm:border-l sm:border-white/10 sm:px-8 sm:first:border-l-0"
              key={stat.label}
            >
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
              <dd className="text-gradient order-first text-3xl font-bold">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </Section>
  );
}
