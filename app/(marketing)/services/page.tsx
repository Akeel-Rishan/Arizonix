import type { Metadata } from 'next';

import { ServicesHero } from '@/components/pages/services/services-hero';
import { ServicesList } from '@/components/pages/services/services-list';
import { getServices } from '@/lib/sanity/fetch';
import { mergeServiceCatalog } from '@/lib/services-data';
export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/services' },
  title: 'Software & AI Development Services',
  description:
    "Explore Arizonix's full range of services: AI automation, web & mobile application development, enterprise software, cloud solutions, and more. Built for ambitious businesses worldwide.",
  openGraph: {
    title: 'Services | Arizonix',
    description:
      'AI automation, web apps, mobile apps, enterprise software and more. Premium software engineering for ambitious businesses.',
    type: 'website',
    url: 'https://arizonix.com/services',
  },
};
export const revalidate = 3600;
export default async function ServicesPage() {
  const cms = await getServices().catch(() => []);
  const services = mergeServiceCatalog(cms);
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Arizonix Services',
      description: 'Software engineering and AI services offered by Arizonix',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.name,
        description: service.shortDescription,
        url: `https://arizonix.com/services/${service.slug}`,
      })),
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
          name: 'Services',
          item: 'https://arizonix.com/services',
        },
      ],
    },
  ];
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />
      <ServicesHero count={services.length} />
      <ServicesList services={services} />
    </div>
  );
}
