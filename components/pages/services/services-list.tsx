import { ArrowRight } from 'lucide-react';

import {
  MotionItem,
  MotionStagger,
} from '@/components/pages/about/about-motion';
import { ServicesListItem } from '@/components/pages/services/services-list-item';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getIcon } from '@/lib/icon-map';
import type { SanityService } from '@/lib/sanity/types';
import { serviceCategories } from '@/lib/services-categories';

export function ServicesList({ services }: { services: SanityService[] }) {
  const matched = new Set(
    serviceCategories.flatMap((category) => category.slugs),
  );
  const groups = [
    ...serviceCategories.map((category) => ({
      ...category,
      services: services.filter((service) =>
        category.slugs.includes(service.slug),
      ),
    })),
    {
      id: 'other',
      label: 'Other',
      description: 'Specialized capabilities for unique business requirements.',
      color: 'cyan' as const,
      icon: 'Sparkles',
      slugs: [],
      services: services.filter((service) => !matched.has(service.slug)),
    },
  ].filter((group) => group.services.length);
  return (
    <Section id="services-list">
      <Container>
        {groups.map((group, index) => {
          const Icon = getIcon(group.icon);
          return (
            <div
              className={index ? 'mt-14 border-t border-white/10 pt-10' : ''}
              key={group.id}
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                    <Icon className="size-4" />
                    {group.label}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {group.label}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-slate-400 md:text-right">
                  {group.description}
                </p>
              </div>
              <MotionStagger className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <MotionItem className="h-full" key={service.slug}>
                    <ServicesListItem color={group.color} service={service} />
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          );
        })}
        <div className="glass-panel mx-auto mt-16 max-w-2xl rounded-xl2 p-8 text-center">
          <h2 className="text-xl font-bold text-white">
            Don&apos;t see exactly what you need?
          </h2>
          <p className="mt-3 leading-7 text-slate-400">
            We build bespoke solutions tailored to unique business requirements.
            If your project doesn&apos;t fit a standard service category, tell
            us about it. Chances are we&apos;ve built something similar before.
          </p>
          <Button className="mt-6" href="/contact">
            <span className="inline-flex items-center gap-2">
              Discuss Your Project <ArrowRight className="size-4" />
            </span>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
