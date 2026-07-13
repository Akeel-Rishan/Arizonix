'use client';

import { useState } from 'react';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatePresence, motion, useReducedMotion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';

const comparisons = [
  {
    process: 'Lead Response',
    before: [
      '4–24 hours',
      '2–3 hours of staff time',
      'Inconsistent',
      'Business hours only',
      'Limited by headcount',
    ],
    after: [
      '< 60 seconds',
      '< $0.10 per lead',
      'Consistent & personalized',
      '24/7 / 365',
      'Infinite at same cost',
    ],
  },
  {
    process: 'Invoice Processing',
    before: [
      '15–30 min per invoice',
      '$8–12 per invoice',
      '3–5% error rate',
      'AP team hours',
      'Linear headcount growth',
    ],
    after: [
      '< 30 seconds per invoice',
      '< $0.50 per invoice',
      '99.5%+ accuracy',
      '24/7 processing',
      '10,000 invoices/hour',
    ],
  },
  {
    process: 'Customer Support',
    before: [
      '4–8 hours average resolution',
      '$15–25 per ticket',
      'Varies by agent',
      'Business hours + overtime',
      'Agent hiring required',
    ],
    after: [
      '< 2 minutes for 80% of queries',
      '< $0.30 per interaction',
      'Consistent across all tickets',
      'Omnichannel 24/7',
      'Unlimited concurrent queries',
    ],
  },
] as const;
const labels = ['Time', 'Cost', 'Accuracy', 'Availability', 'Scalability'];

export function AIComparison() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = comparisons[index];
  return (
    <Section id="comparison">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="BEFORE VS AFTER"
          title={
            <>
              Manual Processes vs{' '}
              <span className="text-gradient">AI Automation</span>
            </>
          }
          description="See the real impact of replacing manual workflows with intelligent automation."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {comparisons.map((item, itemIndex) => (
            <button
              aria-pressed={index === itemIndex}
              className={cn(
                'glass-panel min-h-11 rounded-full px-5 text-sm text-slate-300 focus-visible:ring-2 focus-visible:ring-brand-cyan',
                index === itemIndex && 'gradient-border text-white',
              )}
              key={item.process}
              onClick={() => setIndex(itemIndex)}
              type="button"
            >
              {item.process}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-4xl"
            exit={{ opacity: 0, y: reduced ? 0 : 8 }}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            key={active.process}
          >
            <div className="hidden md:block">
              <table
                aria-label={`Before and after AI automation comparison for ${active.process}`}
                className="w-full border-separate border-spacing-3"
              >
                <thead>
                  <tr>
                    <th className="w-1/5" />
                    <th className="glass-panel rounded-xl p-4 text-red-400">
                      ✕ Manual Process
                    </th>
                    <th className="glass-panel rounded-xl p-4 text-emerald-400">
                      ✓ With AI Automation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {labels.map((label, row) => (
                    <tr key={label}>
                      <th className="text-left text-xs uppercase tracking-wide text-slate-500">
                        {label}
                      </th>
                      <td className="glass-panel rounded-lg px-4 py-3 text-red-400/80">
                        {active.before[row]}
                      </td>
                      <td className="glass-panel rounded-lg bg-emerald-400/5 px-4 py-3 font-semibold text-emerald-400">
                        {active.after[row]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:hidden">
              {[
                ['✕ Manual Process', active.before, 'text-red-400'],
                ['✓ With AI Automation', active.after, 'text-emerald-400'],
              ].map(([title, values, color]) => (
                <div className="glass-panel rounded-xl p-5" key={String(title)}>
                  <h3 className={String(color)}>{String(title)}</h3>
                  {labels.map((label, row) => (
                    <div className="mt-4" key={label}>
                      <p className="text-xs uppercase text-slate-500">
                        {label}
                      </p>
                      <p className={cn('mt-1 text-sm', String(color))}>
                        {values[row]}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm italic text-slate-300">
              Average result: {active.process} automation delivers 10–20x ROI
              within the first year of deployment.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
