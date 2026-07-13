'use client';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import { fadeInUp } from '@/lib/motion';
export function BlogCTA() {
  return (
    <Section className="py-20" variant="aurora">
      <motion.div
        className="container mx-auto max-w-2xl px-4 text-center"
        initial="hidden"
        variants={fadeInUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <Badge variant="gradient">WORK WITH US</Badge>
        <h2 className="mt-5 text-4xl font-bold text-white">
          Ready To <span className="text-gradient">Build Something?</span>
        </h2>
        <p className="mt-5 text-lg text-slate-300">
          Reading about great technology is the first step. The second is
          partnering with engineers who can build it for you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact">Start Your Project</Button>
          <Button href="/services" variant="outline">
            Explore Our Services
          </Button>
        </div>
        <Link
          className="mt-4 inline-block text-sm text-slate-500 hover:text-brand-cyan"
          href="/portfolio"
        >
          Or explore our portfolio for inspiration →
        </Link>
      </motion.div>
    </Section>
  );
}
