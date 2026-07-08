'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Users } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { fadeInUp, staggerContainer } from '@/lib/motion';
export function CareersHero() {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <Section className="flex min-h-[60vh] items-center pt-28" variant="aurora">
      <motion.div
        animate="visible"
        className="container mx-auto px-4 text-center"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Badge className="gap-2" variant="gradient">
            <Users className="size-4" />
            Join Our Team
          </Badge>
        </motion.div>
        <motion.h1
          className="mt-6 text-5xl font-bold text-white md:text-6xl"
          variants={fadeInUp}
        >
          Build The Future Of
          <br />
          <span className="text-gradient">Business Technology</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          variants={fadeInUp}
        >
          We&apos;re a remote-first team of senior engineers, AI specialists,
          and designers who care deeply about craft, impact, and the businesses
          we help build.
        </motion.p>
        <motion.div
          className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-4"
          variants={fadeInUp}
        >
          {[
            ['100%', 'Remote Team'],
            ['10+', 'Engineers & Designers'],
            ['5★', 'Team Rating'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          variants={fadeInUp}
        >
          <Button icon={ArrowDown} onClick={() => scroll('#positions')}>
            View Open Positions
          </Button>
          <Button onClick={() => scroll('#culture')} variant="outline">
            Learn About Our Culture
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
