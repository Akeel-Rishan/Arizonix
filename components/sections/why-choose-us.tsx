'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { AdvantageCard } from '@/components/sections/advantage-card';
import { StatsTicker } from '@/components/sections/stats-ticker';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { advantages, whyChooseUsStats } from '@/lib/why-choose-us-data';

export function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden" id="why-us" variant="default">
      <Container>
        <SectionHeading
          description="We don't just deliver software — we deliver outcomes. Here's why ambitious companies choose Arizonix as their long-term technology partner."
          eyebrow="WHY ARIZONIX"
          title={
            <>
              The{' '}
              <span className="text-gradient">
                Standard Others Measure Against
              </span>
            </>
          }
        />
      </Container>

      <StatsTicker stats={whyChooseUsStats} />

      <div className="relative mt-16 overflow-hidden md:mt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
        >
          <span className="whitespace-nowrap text-[6rem] font-black tracking-[0.12em] text-white opacity-[0.05] sm:text-[9rem] lg:text-[12.5rem]">
            ARIZONIX
          </span>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-brand-blue/20 via-brand-purple/10 to-transparent opacity-40 blur-3xl"
        />

        <Container className="relative z-10">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="visible"
          >
            {advantages.map((advantage) => (
              <motion.div
                className="h-full"
                key={advantage.id}
                variants={fadeInUp}
              >
                <AdvantageCard advantage={advantage} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:mt-12"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
          >
            <Button
              className="w-full sm:w-auto"
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
              variant="primary"
            >
              Start Your Project
            </Button>
            <Button
              className="w-full sm:w-auto"
              href="/portfolio"
              size="lg"
              variant="outline"
            >
              View Our Portfolio
            </Button>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}
