import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { GlobalProjectReach } from '@/components/sections/global-project-reach';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  portfolioProjects,
  type PortfolioColor,
  type PortfolioProject,
} from '@/lib/portfolio-data';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityPortfolioProject } from '@/lib/sanity/types';

const categoryColor = (category: string): PortfolioColor =>
  category === 'Healthcare'
    ? 'cyan'
    : category === 'E-commerce'
      ? 'purple'
      : 'blue';

export function PortfolioPreview({
  projects,
}: {
  projects: SanityPortfolioProject[];
}) {
  const items: PortfolioProject[] = projects.length
    ? projects.map((project) => ({
        category: project.category,
        categoryColor: categoryColor(project.category),
        challenge: project.challenge,
        device: project.device,
        id: project.slug,
        mainImageUrl: project.mainImage
          ? sanityImage(project.mainImage, { quality: 85, width: 800 })
          : null,
        mockupBgColor: categoryColor(project.category),
        results: project.results,
        solution: project.solution,
        tags: project.tags,
        testimonial: project.testimonial ?? {
          author: '',
          quote: '',
          role: '',
        },
        testimonialAvatarUrl: project.testimonial?.avatar
          ? sanityImage(project.testimonial.avatar, {
              quality: 90,
              width: 100,
            })
          : null,
        title: project.title,
      }))
    : portfolioProjects;

  return (
    <Section id="portfolio">
      <Container>
        <SectionHeading
          description="We build software around measurable outcomes. Every project is judged by the business impact it delivers."
          eyebrow="OUR WORK"
          title={
            <>
              Projects That Drive{' '}
              <span className="text-gradient">Real Results</span>
            </>
          }
        />

        <GlobalProjectReach />
        <PortfolioGrid projects={items} />

        <div className="mt-10 flex justify-center">
          <Link
            className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
            href="/portfolio"
          >
            View Full Portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
