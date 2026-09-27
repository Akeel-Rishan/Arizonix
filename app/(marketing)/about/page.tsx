import type { Metadata } from 'next';

import { AboutCTA } from '@/components/pages/about/about-cta';
import { AboutHero } from '@/components/pages/about/about-hero';
import { CompanyStats } from '@/components/pages/about/company-stats';
import { CompanyStory } from '@/components/pages/about/company-story';
import { CultureSection } from '@/components/pages/about/culture-section';
import { MissionValues } from '@/components/pages/about/mission-values';
import { TeamGrid } from '@/components/pages/about/team-grid';
import { getSiteSettings, getTeamMembers } from '@/lib/sanity/fetch';

export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/about' },
  title: 'About Our Story, Team & Mission',
  description:
    'Learn about Arizonix — a premium AI and software engineering company built by senior engineers who believe technology should drive real business outcomes. Meet our team.',
  openGraph: {
    title: 'About Arizonix — Our Story, Team & Mission',
    description:
      'Meet the team behind Arizonix. Senior engineers, AI specialists, and designers united by a mission to build intelligent software for ambitious businesses.',
    type: 'website',
    url: 'https://arizonix.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Arizonix',
    description:
      'Meet the team behind Arizonix — premium AI and software engineering.',
  },
};

export const revalidate = 3600;

export default async function AboutPage() {
  const [teamMembers, siteSettings] = await Promise.all([
    getTeamMembers().catch(() => []),
    getSiteSettings().catch(() => null),
  ]);
  const socialLinks = siteSettings?.socialLinks;
  const structuredData = [
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
          name: 'About',
          item: 'https://arizonix.com/about',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteSettings?.siteName ?? 'Arizonix',
      url: 'https://arizonix.com',
      logo: 'https://arizonix.com/opengraph-image',
      description:
        siteSettings?.siteTagline ??
        'Premium AI and software engineering company building intelligent software for ambitious businesses.',
      foundingDate: '2019',
      numberOfEmployees: '10-50',
      serviceType: [
        'Software Development',
        'AI Automation',
        'Mobile Development',
      ],
      areaServed: 'Worldwide',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: siteSettings?.contactInfo?.email ?? 'support@arizonix.tech',
      },
      sameAs: [
        socialLinks?.linkedin,
        socialLinks?.twitter,
        socialLinks?.github,
      ].filter(Boolean),
    },
  ];
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <CompanyStats />
      <TeamGrid teamMembers={teamMembers} />
      <CultureSection />
      <AboutCTA />
    </div>
  );
}
