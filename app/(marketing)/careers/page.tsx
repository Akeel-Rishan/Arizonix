import type { Metadata } from 'next';

import { CareersBenefits } from '@/components/pages/careers/careers-benefits';
import { CareersCTA } from '@/components/pages/careers/careers-cta';
import { CareersCulture } from '@/components/pages/careers/careers-culture';
import { CareersHero } from '@/components/pages/careers/careers-hero';
import { CareersPositions } from '@/components/pages/careers/careers-positions';
import { openPositions } from '@/lib/careers-data';
export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/careers' },
  title: 'Careers: Join Our Engineering Team',
  description:
    'Join Arizonix — a remote-first AI and software engineering company building world-class products for ambitious businesses.',
  openGraph: {
    title: 'Careers — Arizonix',
    description:
      'Join a senior engineering team building AI and software solutions that change how businesses operate.',
    type: 'website',
    url: 'https://arizonix.com/careers',
  },
};
export const revalidate = 86400;
// Future: fetch open positions from Sanity CMS or a job board API.
export default function CareersPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Careers at Arizonix',
      description: "Join Arizonix's remote engineering team",
      url: 'https://arizonix.com/careers',
    },
    ...openPositions.map((position) => ({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: position.title,
      description: position.description,
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Arizonix',
        sameAs: 'https://arizonix.com',
      },
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' },
      employmentType: 'FULL_TIME',
      datePosted: position.postedDate,
    })),
  ];
  return (
    <div>
      {schema.map((item, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <CareersHero />
      <CareersCulture />
      <CareersBenefits />
      <CareersPositions />
      <CareersCTA />
    </div>
  );
}
