import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  ServiceDetailPage,
  type ServicePageDisplay,
} from '@/components/pages/services/service-detail-page';
import { getServiceBySlug } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
import { getServiceDetail, serviceDetails } from '@/lib/service-detail-data';
import { services } from '@/lib/services-data';

export const revalidate = 3600;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);

  if (!detail) {
    notFound();
  }

  const cmsService = await getServiceBySlug(slug).catch(() => null);
  const title = cmsService?.seo?.title ?? detail.seo.title;
  const description = cmsService?.seo?.description ?? detail.seo.description;

  return {
    alternates: { canonical: `https://arizonix.com/services/${detail.slug}` },
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://arizonix.com/services/${detail.slug}`,
      images: cmsService?.seo?.ogImage
        ? [
            {
              url: sanityImage(cmsService.seo.ogImage, {
                width: 1200,
                height: 630,
              }),
            },
          ]
        : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  const staticService = services.find((service) => service.slug === slug);

  if (!detail || !staticService) {
    notFound();
  }

  const cmsService = await getServiceBySlug(slug).catch(() => null);
  const service: ServicePageDisplay = {
    name: cmsService?.name ?? staticService.name,
    slug: detail.slug,
    shortDescription:
      cmsService?.shortDescription ?? staticService.shortDescription,
    description: detail.heroDescription,
    icon:
      cmsService?.icon ??
      staticService.icon.displayName ??
      staticService.icon.name,
  };

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: detail.seo.description,
      provider: {
        '@type': 'Organization',
        name: 'Arizonix',
        url: 'https://arizonix.com',
      },
      url: `https://arizonix.com/services/${detail.slug}`,
      serviceType: service.name,
      areaServed: 'Worldwide',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: service.name,
          item: `https://arizonix.com/services/${detail.slug}`,
        },
      ],
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
      <ServiceDetailPage detail={detail} service={service} />
    </div>
  );
}
