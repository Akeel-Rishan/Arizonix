'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

import { PortfolioCard } from '@/components/sections/portfolio-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { fadeInUp } from '@/lib/motion';
import { portfolioProjects } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const filters = [
  'All',
  'AI Automation',
  'Healthcare',
  'E-commerce',
  'Construction',
] as const;
type PortfolioFilter = (typeof filters)[number];

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All');
  const reducedMotion = useReducedMotion();
  const visibleProjects = portfolioProjects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter,
  );

  return (
    <Section id="portfolio" variant="default">
      <Container>
        <SectionHeading
          description="We don't just build software — we engineer outcomes. Every project is measured by the business impact it delivers."
          eyebrow="OUR WORK"
          title={
            <>
              Projects That Drive{' '}
              <span className="text-gradient">Real Results</span>
            </>
          }
        />

        <motion.div
          className="mt-10 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <div className="mx-auto flex w-max min-w-full flex-nowrap justify-start gap-2 sm:justify-center">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  aria-pressed={isActive}
                  className={cn(
                    'glass-panel shrink-0 rounded-full px-4 py-2 text-sm font-semibold outline-none transition duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
                    isActive
                      ? 'gradient-border text-white shadow-glow-blue'
                      : 'text-slate-400',
                  )}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8"
          layout
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="h-full"
                exit={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 12,
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                key={project.id}
                layout
                transition={{
                  duration: reducedMotion ? 0 : 0.3,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center lg:mt-12"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <Button
            href="/portfolio"
            icon={ArrowRight}
            iconPosition="right"
            size="lg"
            variant="outline"
          >
            View Full Portfolio
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
