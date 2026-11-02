'use client';

import { ArrowRight, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import type { ServiceDetailData } from '@/lib/service-detail-data';

export function ServiceDetailCTA({ cta }: { cta: ServiceDetailData['cta'] }) {
  return (
    <Section className="py-20" variant="aurora">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            {cta.description}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
            >
              Get a Free Quote
            </Button>
            <Button
              href="/contact#schedule"
              icon={Calendar}
              size="lg"
              variant="secondary"
            >
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
