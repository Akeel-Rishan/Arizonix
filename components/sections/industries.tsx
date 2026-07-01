'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { IndustryCard } from '@/components/sections/industry-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { industries } from '@/lib/industries-data';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function Industries() {
  return (
    <Section id="industries" variant="default">
      <Container>
        <SectionHeading
          description="Arizonix designs practical AI and software systems around the realities of each market, combining domain understanding with engineering discipline across 12+ high-impact verticals."
          eyebrow="INDUSTRIES WE SERVE"
          title={
            <>
              Built For <span className="text-gradient">Every Industry</span>{' '}
              That Matters
            </>
          }
        />

        <motion.ul
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-6"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.12 }}
          whileInView="visible"
        >
          {industries.map((industry) => (
            <motion.li
              className="h-full"
              key={industry.slug}
              variants={fadeInUp}
            >
              <IndustryCard industry={industry} />
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button
            href="/industries"
            icon={ArrowRight}
            iconPosition="right"
            variant="outline"
          >
            Explore All Industries
          </Button>
        </div>
      </Container>
    </Section>
  );
}
