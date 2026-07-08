'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Brain, PlayCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GradientTextAnimate } from '@/components/ui/gradient-text-animate';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { ParallaxElement } from '@/components/ui/parallax-element';
import { Section } from '@/components/ui/section';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const nodes = [
  [5, 18],
  [15, 45],
  [9, 79],
  [24, 27],
  [29, 65],
  [38, 12],
  [43, 43],
  [48, 82],
  [57, 25],
  [62, 62],
  [70, 9],
  [73, 43],
  [79, 78],
  [88, 24],
  [92, 58],
  [97, 88],
  [20, 91],
  [52, 52],
  [83, 52],
  [34, 88],
] as const;
const lines = nodes
  .slice(0, -1)
  .map((point, index) => [point, nodes[index + 1]] as const);

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
        <motion.div
          animate={{ opacity: 1 }}
          aria-hidden="true"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1 }}
        >
          <svg
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 100 100"
          >
            {lines.map(([[x1, y1], [x2, y2]], index) => (
              <g key={`${x1}-${y1}`}>
                <line
                  className="stroke-white/10"
                  strokeWidth="0.12"
                  x1={x1}
                  x2={x2}
                  y1={y1}
                  y2={y2}
                />
                {!reducedMotion ? (
                  <motion.circle
                    animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] }}
                    className="fill-brand-cyan"
                    initial={{ cx: x1, cy: y1 }}
                    r="0.35"
                    transition={{
                      delay: index * 0.35,
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                ) : null}
              </g>
            ))}
            {nodes.map(([cx, cy], index) => (
              <motion.circle
                animate={
                  reducedMotion
                    ? undefined
                    : { r: [0.45, 0.7, 0.45], opacity: [0.45, 0.9, 0.45] }
                }
                className="fill-brand-purple"
                cx={cx}
                cy={cy}
                key={`${cx}-${cy}`}
                r="0.5"
                transition={{
                  delay: index * 0.11,
                  duration: 2.4 + (index % 3),
                  repeat: Infinity,
                }}
              />
            ))}
          </svg>
        </motion.div>
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
        <motion.p className="mt-4 text-sm text-slate-500" variants={fadeInUp}>
          AI solutions deployed across Healthcare, Finance, Retail, Logistics
          &amp; more
        </motion.p>
      </motion.div>
    </Section>
  );
}
