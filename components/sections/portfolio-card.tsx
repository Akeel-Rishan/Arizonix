'use client';

import { ArrowRight } from 'lucide-react';

import { DeviceMockup } from '@/components/sections/device-mockup';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PortfolioColor, PortfolioProject } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export interface PortfolioCardProps {
  project: PortfolioProject;
}

const colorMap: Record<
  PortfolioColor,
  { backdrop: string; badge: string; quote: string }
> = {
  blue: {
    backdrop: 'from-brand-blue/45 via-brand-blue/20 to-brand-purple/35',
    badge:
      'border-brand-blue/30 from-brand-blue/50 via-brand-blue/30 to-brand-purple/40',
    quote: 'border-brand-blue/70',
  },
  purple: {
    backdrop: 'from-brand-purple/45 via-brand-purple/20 to-navy-950',
    badge:
      'border-brand-purple/30 from-brand-purple/50 via-brand-purple/30 to-brand-blue/30',
    quote: 'border-brand-purple/70',
  },
  cyan: {
    backdrop: 'from-brand-cyan/40 via-brand-cyan/15 to-brand-blue/35',
    badge:
      'border-brand-cyan/30 from-brand-cyan/45 via-brand-cyan/25 to-brand-blue/35',
    quote: 'border-brand-cyan/70',
  },
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  const colors = colorMap[project.categoryColor];

  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-xl2 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div
        className={cn(
          'aspect-[4/3] overflow-hidden bg-gradient-to-br sm:aspect-video',
          colors.backdrop,
        )}
      >
        <div className="size-full transition duration-500 ease-out group-hover:scale-[1.03]">
          <DeviceMockup
            bgColor={project.mockupBgColor}
            device={project.device}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <Badge
          className={cn('w-fit bg-gradient-to-r', colors.badge)}
          variant="gradient"
        >
          {project.category}
        </Badge>
        <h3 className="mt-4 text-xl font-bold leading-snug text-white">
          {project.title}
        </h3>

        <div
          className="mt-4 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.tags.map((tag) => (
            <span
              className="glass-panel rounded-full px-2.5 py-1 font-mono text-xs text-slate-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-4">
          {project.results.map((result) => (
            <div
              className="flex min-w-0 flex-col px-2 first:pl-0 last:pr-0 sm:px-4"
              key={result.label}
            >
              <dt className="order-2 mt-1 text-[0.65rem] leading-4 text-slate-400 sm:text-xs">
                {result.label}
              </dt>
              <dd className="text-gradient order-1 text-lg font-bold sm:text-2xl">
                {result.metric}
              </dd>
            </div>
          ))}
        </dl>

        <figure className={cn('mt-6 border-l-2 pl-4', colors.quote)}>
          <blockquote className="line-clamp-2 text-sm italic leading-6 text-slate-300">
            “{project.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">
              {project.testimonial.author}
            </span>
            <span className="block">{project.testimonial.role}</span>
          </figcaption>
        </figure>

        <div className="mt-auto pt-6">
          <Button
            href={`/portfolio/${project.id}`}
            icon={ArrowRight}
            iconPosition="right"
            size="sm"
            variant="ghost"
          >
            View Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}
