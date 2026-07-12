import type { Metadata } from 'next';

import { CaseStudiesGrid } from '@/components/pages/case-studies/case-studies-grid';
import { CaseStudiesHero } from '@/components/pages/case-studies/case-studies-hero';
import { getCaseStudies } from '@/lib/sanity/fetch';
export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/case-studies' },
  title: 'Case Studies — Deep Dive Into Our Work | Arizonix',
  description:
    'Detailed case studies showing how Arizonix solves complex business problems with software and AI. Read the full story behind each project.',
};
export const revalidate = 3600;
export default async function CaseStudiesPage() {
  const studies = await getCaseStudies().catch(() => []);
  const data = {
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
    ],
  };
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        type="application/ld+json"
      />
      <CaseStudiesHero />
      <CaseStudiesGrid caseStudies={studies} />
    </main>
  );
}
