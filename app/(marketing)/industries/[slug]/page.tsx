import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { IndustryCaseStudyHighlight } from '@/components/pages/industries/industry-case-study-highlight';
import { IndustryChallenges } from '@/components/pages/industries/industry-challenges';
import { IndustryDetailCTA } from '@/components/pages/industries/industry-detail-cta';
import { IndustryDetailHero } from '@/components/pages/industries/industry-detail-hero';
import { IndustryFAQ } from '@/components/pages/industries/industry-faq';
import { IndustryOverviewCard } from '@/components/pages/industries/industry-overview-card';
import { IndustrySolutions } from '@/components/pages/industries/industry-solutions';
import { IndustryStats } from '@/components/pages/industries/industry-stats';
import { IndustryUseCases } from '@/components/pages/industries/industry-use-cases';
import { Container } from '@/components/ui/container';
import { industries as fallbackIndustries } from '@/lib/industries-data';
import { industryDetailData } from '@/lib/industry-detail-data';
import { portfolioProjects as fallbackProjects } from '@/lib/portfolio-data';
import type { PortfolioDisplayProject } from '@/lib/portfolio-display';
import { portfolioColor } from '@/lib/portfolio-display';
import {
  getIndustries,
  getIndustryBySlug,
  getPortfolioProjects,
} from '@/lib/sanity/fetch';
import type { SanityIndustry } from '@/lib/sanity/types';

export const revalidate = 3600;
function fallbackIndustry(slug: string): SanityIndustry | null {
  const item = fallbackIndustries.find((industry) => industry.slug === slug);
  return item
    ? {
        _id: item.slug,
        name: item.name,
        slug: item.slug,
        description: item.description,
        icon: item.icon.displayName ?? item.icon.name,
        stat: item.stat,
        color: item.color,
        order: 0,
      }
    : null;
}
export async function generateStaticParams() {
  const cms = await getIndustries().catch(() => []);
  return (cms.length ? cms : fallbackIndustries).map((industry) => ({
    slug: industry.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry =
    (await getIndustryBySlug(params.slug).catch(() => null)) ??
    fallbackIndustry(params.slug);
  if (!industry) return { title: 'Industry Not Found — Arizonix' };
  const detail = industryDetailData[industry.slug];
  return {
    alternates: {
      canonical: `https://arizonix.com/industries/${industry.slug}`,
    },
    title:
      industry.seo?.title ??
      `${industry.name} Software & AI Solutions | Arizonix`,
    description:
      industry.seo?.description ??
      detail?.heroDescription ??
      industry.description,
    keywords: [
      `${industry.name} software development`,
      `${industry.name} AI solutions`,
      `${industry.name} technology company`,
    ],
    openGraph: {
      title: `${industry.name} Technology Solutions — Arizonix`,
      description: detail?.heroDescription ?? industry.description,
      type: 'website',
      url: `https://arizonix.com/industries/${industry.slug}`,
    },
  };
}
export default async function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const [cmsIndustry, cmsIndustries, cmsProjects] = await Promise.all([
    getIndustryBySlug(params.slug).catch(() => null),
    getIndustries().catch(() => []),
    getPortfolioProjects().catch(() => []),
  ]);
  const industry = cmsIndustry ?? fallbackIndustry(params.slug);
  if (!industry) notFound();
  const allIndustries: SanityIndustry[] = cmsIndustries.length
    ? cmsIndustries
    : fallbackIndustries.map((item, order) => ({
        _id: item.slug,
        name: item.name,
        slug: item.slug,
        description: item.description,
        icon: item.icon.displayName ?? item.icon.name,
        stat: item.stat,
        color: item.color,
        order,
      }));
  const detail = industryDetailData[industry.slug];
  const rawProject =
    cmsProjects.find(
      (project) => project.slug === detail?.featuredPortfolioSlug,
    ) ??
    fallbackProjects.find(
      (project) => project.id === detail?.featuredPortfolioSlug,
    );
  let project: PortfolioDisplayProject | undefined;
  if (rawProject) {
    const slug = '_id' in rawProject ? rawProject.slug : rawProject.id;
    const color = portfolioColor(rawProject.category);
    project = {
      id: slug,
      slug,
      title: rawProject.title,
      category: rawProject.category,
      categoryColor: color,
      tags: rawProject.tags,
      challenge: rawProject.challenge,
      solution: rawProject.solution,
      results: rawProject.results,
      device: rawProject.device,
      mockupBgColor: color,
      testimonial: rawProject.testimonial,
    };
  }
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${industry.name} Software Solutions — Arizonix`,
      description: detail?.heroDescription ?? industry.description,
      url: `https://arizonix.com/industries/${industry.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://arizonix.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Industries',
          item: 'https://arizonix.com/industries',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: industry.name,
          item: `https://arizonix.com/industries/${industry.slug}`,
        },
      ],
    },
    ...(detail?.faqItems
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: detail.faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
        ]
      : []),
  ];
  const related = allIndustries
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 3);
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />
      <IndustryDetailHero detail={detail} industry={industry} />
      <IndustryChallenges challenges={detail?.challenges} />
      <IndustryUseCases
        industryName={industry.name}
        useCases={detail?.useCases}
      />
      <IndustryStats
        complianceNote={detail?.complianceNote}
        industryName={industry.name}
        stats={detail?.industryStats}
      />
      <IndustrySolutions
        industryName={industry.name}
        solutions={detail?.industrySolutions}
      />
      <IndustryCaseStudyHighlight
        industryName={industry.name}
        project={project}
      />
      {detail?.faqItems ? (
        <IndustryFAQ industryName={industry.name} items={detail.faqItems} />
      ) : null}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-white">Related Industries</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <IndustryOverviewCard
                detail={industryDetailData[item.slug]}
                industry={item}
                key={item.slug}
              />
            ))}
          </div>
        </Container>
      </section>
      <IndustryDetailCTA industryName={industry.name} />
    </main>
  );
}
