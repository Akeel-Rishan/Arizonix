'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
const stats = [
  { value: 80, suffix: '%', label: 'Reduction in manual work' },
  { value: 10, suffix: 'x', label: 'Faster processing speed' },
  { value: 99, suffix: '.5%', label: 'Document AI accuracy' },
  { value: 60, suffix: '%', label: 'Average cost reduction' },
  { value: 24, suffix: '/7', label: 'AI operates continuously' },
  { value: 48, suffix: 'hrs', label: 'Average deployment time' },
  { value: 3, suffix: 'x', label: 'Average ROI in year one' },
  { value: 100, suffix: '+', label: 'Automations deployed' },
];
const stories = [
  {
    type: 'AI Sales Automation',
    metric: '40% increase in lead conversion',
    text: 'Real-time scoring and tailored outreach turned more qualified leads into conversations.',
    tags: ['OpenAI', 'Supabase', 'Next.js'],
  },
  {
    type: 'Healthcare AI',
    metric: '60% fewer missed appointments',
    text: 'Behavior-aware reminders improved attendance while reducing repetitive admin work.',
    tags: ['Node.js', 'PostgreSQL', 'Claude'],
  },
  {
    type: 'Logistics AI',
    metric: '10,000+ daily shipments automated',
    text: 'Exception prediction and intelligent routing scaled delivery operations without more coordinators.',
    tags: ['FastAPI', 'Redis', 'React Native'],
  },
];
export function AIResults() {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="PROVEN RESULTS"
          title={
            <>
              AI That Delivers{' '}
              <span className="text-gradient">Measurable Impact</span>
            </>
          }
        />
        <div className="glass-panel mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl2 md:grid-cols-4">
          {stats.map((stat) => (
            <div className="p-5 text-center sm:p-7" key={stat.label}>
              <AnimatedCounter
                className="text-gradient text-3xl sm:text-4xl"
                suffix={stat.suffix}
                value={stat.value}
              />
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {stories.map((story) => (
            <motion.article
              className="glass-panel rounded-xl2 p-6"
              key={story.type}
              variants={fadeInUp}
            >
              <Badge variant="outline">{story.type}</Badge>
              <h3 className="text-gradient mt-5 text-2xl font-bold">
                {story.metric}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {story.text}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-slate-400"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
