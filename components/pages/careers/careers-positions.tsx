'use client';
import { CheckCircle2, ChevronDown, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { openPositions } from '@/lib/careers-data';
import { AnimatePresence, motion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';
const departments = [
  'All Departments',
  'Engineering',
  'AI & ML',
  'Design',
  'Operations',
];
export function CareersPositions() {
  const [department, setDepartment] = useState('All Departments');
  const [open, setOpen] = useState<string | null>(null);
  const positions = openPositions.filter(
    (item) =>
      department === 'All Departments' || item.department === department,
  );
  return (
    <Section id="positions">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="OPEN POSITIONS"
          title={
            <>
              Current <span className="text-gradient">Opportunities</span>
            </>
          }
          description="Every role we post is one we're actively excited to fill."
        />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-3">
          {departments.map((item) => (
            <button
              aria-pressed={department === item}
              className={cn(
                'glass-panel min-h-11 shrink-0 rounded-full px-4 text-sm text-slate-300',
                department === item && 'gradient-border text-white',
              )}
              key={item}
              onClick={() => setDepartment(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {positions.map((position) => {
            const expanded = open === position.id;
            return (
              <article
                className={cn(
                  'glass-panel relative rounded-xl2 p-6 transition',
                  expanded && 'border-brand-cyan/40',
                )}
                key={position.id}
              >
                {position.featured ? (
                  <Badge className="absolute right-3 top-3" variant="gradient">
                    HOT ROLE
                  </Badge>
                ) : null}
                <button
                  aria-controls={`${position.id}-details`}
                  aria-expanded={expanded}
                  className="w-full pr-20 text-left focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  onClick={() => setOpen(expanded ? null : position.id)}
                  type="button"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <span className="block text-lg font-bold text-white">
                        {position.title}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          position.department,
                          position.level,
                          position.type,
                        ].map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {position.skills.slice(0, 4).map((skill) => (
                          <span
                            className="rounded bg-white/5 px-2 py-1 font-mono text-xs text-slate-400"
                            key={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="block text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        Remote
                      </span>
                      <time className="mt-1 block text-xs text-slate-500">
                        Posted{' '}
                        {new Intl.DateTimeFormat('en-US', {
                          month: 'short',
                          day: 'numeric',
                        }).format(new Date(position.postedDate))}
                      </time>
                      <ChevronDown
                        className={cn(
                          'ml-auto mt-2 size-5 transition',
                          expanded && 'rotate-180',
                        )}
                      />
                    </span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      animate={{ height: 'auto', opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      id={`${position.id}-details`}
                      initial={{ height: 0, opacity: 0 }}
                      role="region"
                    >
                      <div className="grid gap-8 border-t border-white/10 pt-6 md:grid-cols-3">
                        <div>
                          <h4 className="font-semibold text-white">The Role</h4>
                          <p className="mt-3 text-sm leading-6 text-slate-400">
                            {position.description}
                          </p>
                          <h5 className="mt-5 text-sm font-semibold text-white">
                            What You&apos;ll Do
                          </h5>
                          <List items={position.responsibilities} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            Requirements
                          </h4>
                          <List items={position.requirements} />
                          <h5 className="mt-5 text-sm font-semibold text-white">
                            Nice To Have
                          </h5>
                          <ul className="mt-3 space-y-2">
                            {position.niceToHave.map((item) => (
                              <li
                                className="flex gap-2 text-xs text-slate-400"
                                key={item}
                              >
                                <Star className="mt-0.5 size-3 shrink-0 text-brand-purple" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <aside className="glass-panel rounded-xl p-6">
                          <h4 className="font-bold text-white">Interested?</h4>
                          <p className="mt-2 text-sm text-slate-400">
                            Send your CV and portfolio to{' '}
                            <a
                              className="text-brand-blue"
                              href="mailto:careers@arizonix.com"
                            >
                              careers@arizonix.com
                            </a>
                            .
                          </p>
                          <Button
                            className="mt-5"
                            href={`mailto:careers@arizonix.com?subject=${encodeURIComponent(`Application: ${position.title}`)}`}
                            size="sm"
                          >
                            Apply Now
                          </Button>
                          <p className="mt-3 text-xs text-slate-500">
                            Applications are reviewed within 5 business days.
                          </p>
                        </aside>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li className="flex gap-2 text-sm text-slate-300" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
          {item}
        </li>
      ))}
    </ul>
  );
}
