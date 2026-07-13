'use client';

import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from '@/lib/framer-motion';
import { getIcon } from '@/lib/icon-map';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';
const phases = [
  [
    'Search',
    'cyan',
    'AI Discovery & Use Case Mapping',
    'We audit processes, identify high-ROI opportunities, and map required data flows.',
    'Week 1',
  ],
  [
    'Database',
    'blue',
    'Data Assessment & Model Selection',
    'We assess data quality and select models and frameworks for the actual use case.',
    'Week 1–2',
  ],
  [
    'Zap',
    'purple',
    'Prototype & Validation',
    'We validate a working prototype against real data before major investment.',
    'Week 2–4',
  ],
  [
    'Code2',
    'blue',
    'Production Development',
    'We add monitoring, fallbacks, error handling, and human-in-the-loop controls.',
    'Week 4–8',
  ],
  [
    'TrendingUp',
    'cyan',
    'Deployment & Optimization',
    'We deploy, monitor, retrain, and continuously improve accuracy and value.',
    'Ongoing',
  ],
] as const;
const colors = {
  cyan: 'text-brand-cyan bg-brand-cyan/10',
  blue: 'text-brand-blue bg-brand-blue/10',
  purple: 'text-brand-purple bg-brand-purple/10',
};
export function AIProcess() {
  return (
    <Section id="process">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="HOW WE BUILD AI"
          title={
            <>
              Our <span className="text-gradient">AI Development</span>{' '}
              Methodology
            </>
          }
          description="Production AI requires a different approach to standard software development. Here's how we do it."
        />
        <motion.div
          className="relative mt-12 grid gap-5 lg:grid-cols-5"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <span className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-white/10 lg:block" />
          {phases.map((phase, index) => {
            const Icon = getIcon(phase[0]);
            return (
              <motion.article
                className="relative pl-14 lg:pl-0 lg:pt-14"
                key={phase[2]}
                variants={fadeInUp}
              >
                <span className="absolute left-0 top-0 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 bg-navy-950 text-xs font-bold text-brand-cyan lg:left-1/2 lg:-translate-x-1/2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="glass-panel h-full rounded-xl p-6">
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg',
                      colors[phase[1]],
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{phase[2]}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {phase[3]}
                  </p>
                  <Badge className="mt-5" variant="outline">
                    {phase[4]}
                  </Badge>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
