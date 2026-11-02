import { CheckCircle2, CircleCheckBig, Target } from 'lucide-react';

import {
  MotionItem,
  MotionReveal,
  MotionStagger,
} from '@/components/pages/about/about-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  serviceProcess,
  type ServiceDetailData,
  whyArizonix,
} from '@/lib/service-detail-data';

export function ServiceDetailContent({
  detail,
}: {
  detail: ServiceDetailData;
}) {
  return (
    <>
      <Section className="py-14 md:py-20" id="overview">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <MotionReveal>
              <h2 className="max-w-3xl text-3xl font-bold text-white md:text-4xl">
                {detail.overview.heading}
              </h2>
              <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-300">
                {detail.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal direction="right">
              <aside className="glass-panel rounded-xl2 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white">
                  Problems we solve
                </h3>
                <ul className="mt-5 space-y-4">
                  {detail.problemsWeSolve.map((problem) => (
                    <li
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                      key={problem}
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-brand-cyan"
                      />
                      {problem}
                    </li>
                  ))}
                </ul>
              </aside>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      <Section id="capabilities" variant="glass">
        <Container>
          <SectionHeading
            description={`Practical ${detail.category.toLowerCase()} capabilities selected around the product and workflow you need.`}
            eyebrow="WHAT WE CAN BUILD"
            title="Capabilities shaped around your requirements"
          />
          <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {detail.capabilities.map((capability, index) => (
              <MotionItem className="h-full" key={capability}>
                <article className="glass-panel h-full rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/30">
                  <span className="font-mono text-xs font-semibold text-brand-cyan">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {capability}
                  </h3>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <SectionHeading
            description="A clear delivery path keeps decisions visible and reduces avoidable risk from discovery through production."
            title="Our development process"
          />
          <MotionStagger className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map((step, index) => (
              <MotionItem className="h-full" key={step.name}>
                <article className="h-full border-l border-white/15 pl-5">
                  <span className="font-mono text-sm font-semibold text-brand-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <Section id="technology" variant="glass">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionReveal>
              <div className="glass-panel rounded-xl2 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Technology selected for the service
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  We choose tools after clarifying product requirements,
                  existing systems, team capability, and operational risk.
                </p>
                <div className="mt-8 space-y-7">
                  {detail.technologies.map((group) => (
                    <div key={group.label}>
                      <h3 className="text-sm font-semibold text-slate-200">
                        {group.label}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((technology) => (
                          <span
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>

            <div className="grid gap-6">
              <MotionReveal direction="right">
                <article className="glass-panel rounded-xl2 p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white">Ideal for</h2>
                  <ul className="mt-5 space-y-3">
                    {detail.idealFor.map((item) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                        key={item}
                      >
                        <Target
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-brand-purple"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionReveal>
              <MotionReveal direction="right">
                <article className="glass-panel rounded-xl2 p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white">
                    What this helps you achieve
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {detail.benefits.map((benefit) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                        key={benefit}
                      >
                        <CircleCheckBig
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-brand-cyan"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="why-arizonix">
        <Container>
          <SectionHeading
            description="A practical engineering partnership focused on clear decisions, dependable delivery, and software your team can maintain."
            title="Why Arizonix"
          />
          <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2">
            {whyArizonix.map((reason) => (
              <MotionItem className="h-full" key={reason.title}>
                <article className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {reason.description}
                  </p>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>
    </>
  );
}
