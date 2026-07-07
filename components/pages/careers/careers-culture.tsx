import { Clock, Globe, Shield, TrendingUp } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
const values = [
  [
    Shield,
    'Senior-Only Engineering',
    'Work is reviewed and respected by experienced engineers who have shipped at scale.',
  ],
  [
    Clock,
    'Async & Deep Work First',
    'We communicate intentionally, document thoroughly, and protect focused work.',
  ],
  [
    TrendingUp,
    'Continuous Learning Budget',
    'Every team member receives an annual budget for courses, conferences, and books.',
  ],
  [
    Globe,
    'Work From Anywhere',
    'Our processes and culture were built from day one for a distributed team.',
  ],
] as const;
export function CareersCulture() {
  return (
    <Section id="culture">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="LIFE AT ARIZONIX"
          title={
            <>
              Where Great Engineers Do Their{' '}
              <span className="text-gradient">Best Work</span>
            </>
          }
          description="A culture that respects deep work, rewards excellence, and gives engineers autonomy to do things right."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {values.map(([Icon, title, description]) => (
              <article className="flex gap-4" key={title}>
                <span className="glass-panel flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-5 text-brand-cyan" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <aside className="glass-panel rounded-xl2 p-8">
            <h3 className="font-semibold text-white">Our Team At A Glance</h3>
            {[
              ['Team Size', '10–15 Engineers'],
              ['Time Zones', 'Americas, Europe, Asia'],
              ['Languages Supported', 'English (primary)'],
              ['Average Tenure', '3+ years'],
            ].map(([label, value]) => (
              <div
                className="flex justify-between border-b border-white/10 py-4 text-sm"
                key={label}
              >
                <span className="text-slate-400">{label}</span>
                <strong className="text-white">{value}</strong>
              </div>
            ))}
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-3">
                {['AK', 'MS', 'JD', 'RL', 'SK', 'TM'].map((item) => (
                  <span
                    className="flex size-10 items-center justify-center rounded-full border-2 border-navy-950 bg-brand-purple/20 text-xs text-white"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="ml-4 text-sm text-slate-400">+ Growing</span>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
