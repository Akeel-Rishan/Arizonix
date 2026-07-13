import type { PortableTextBlock } from '@portabletext/types';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CaseStudyCard } from '@/components/pages/case-studies/case-study-card';
import { CaseStudyContent } from '@/components/pages/case-studies/case-study-content';
import { CaseStudyCTA } from '@/components/pages/case-studies/case-study-cta';
import { CaseStudyDetailHero } from '@/components/pages/case-studies/case-study-detail-hero';
import { CaseStudyResultsPanel } from '@/components/pages/case-studies/case-study-results-panel';
import { Container } from '@/components/ui/container';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/sanity/fetch';
import { sanityBlurImage, sanityImage } from '@/lib/sanity/image';
export const revalidate = 3600;
export async function generateStaticParams() {
  return (await getCaseStudies().catch(() => [])).map((study) => ({
    slug: study.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug).catch(() => null);
  if (!study) return { title: 'Case Study Not Found — Arizonix' };
  return {
    alternates: {
      canonical: `https://arizonix.com/case-studies/${study.slug}`,
    },
    title: `${study.seo?.title ?? study.title} | Arizonix`,
    description: study.seo?.description ?? study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: 'article',
      url: `https://arizonix.com/case-studies/${study.slug}`,
      images: study.coverImage
        ? [{ url: sanityImage(study.coverImage, { width: 1200, height: 630 }) }]
        : [],
    },
  };
}
export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const [study, all] = await Promise.all([
    getCaseStudyBySlug(params.slug).catch(() => null),
    getCaseStudies().catch(() => []),
  ]);
  if (!study) notFound();
  const cover = study.coverImage
    ? sanityImage(study.coverImage, { width: 1400, quality: 90 })
    : undefined;
  const coverBlur = study.coverImage
    ? sanityBlurImage(study.coverImage)
    : undefined;
  const related = all.filter((item) => item.slug !== study.slug).slice(0, 3);
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.summary,
      author: { '@type': 'Organization', name: 'Arizonix' },
      datePublished: study.publishedAt,
      url: `https://arizonix.com/case-studies/${study.slug}`,
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
          name: 'Case Studies',
          item: 'https://arizonix.com/case-studies',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: study.title,
          item: `https://arizonix.com/case-studies/${study.slug}`,
        },
      ],
    },
  ];
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />
      <CaseStudyDetailHero
        coverImageBlurUrl={coverBlur}
        coverImageUrl={cover}
        study={study}
      />
      <CaseStudyContent
        content={study.content as unknown as PortableTextBlock[] | undefined}
      />
      {study.relatedProject ? (
        <CaseStudyResultsPanel project={study.relatedProject} />
      ) : null}
      {related.length ? (
        <section className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-white">
              Related Case Studies
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <CaseStudyCard
                  coverImageUrl={
                    item.coverImage
                      ? sanityImage(item.coverImage, {
                          width: 800,
                          quality: 85,
                        })
                      : undefined
                  }
                  key={item.slug}
                  study={item}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CaseStudyCTA clientName={study.client} />
    </main>
  );
}
