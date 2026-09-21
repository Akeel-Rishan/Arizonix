import type { PortableTextBlock } from '@portabletext/types';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetailContent } from '@/components/pages/services/service-detail-content';
import { ServiceDetailCTA } from '@/components/pages/services/service-detail-cta';
import { ServiceDetailHero } from '@/components/pages/services/service-detail-hero';
import { ServiceFeatures } from '@/components/pages/services/service-features';
import { ServiceRelated } from '@/components/pages/services/service-related';
import { getServiceBySlug, getServices } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityService } from '@/lib/sanity/types';
import { services as staticServices } from '@/lib/services-data';

export const revalidate = 3600;
export const dynamicParams = false;

function staticService(slug: string): SanityService | null {
  const service = staticServices.find((item) => item.slug === slug);
  return service
    ? {
        _id: service.slug,
        name: service.name,
        slug: service.slug,
        shortDescription: service.shortDescription,
        description: service.description,
        icon: service.icon.displayName ?? service.icon.name,
        featured: false,
        order: 0,
      }
    : null;
}

export async function generateStaticParams() {
  const cms = await getServices().catch(() => []);
  const services = cms.length ? cms : staticServices;
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service =
    (await getServiceBySlug(slug).catch(() => null)) ?? staticService(slug);
  if (!service) return { title: 'Service Not Found' };
  const rawTitle = (service.seo?.title ?? service.name).replace(
    /\s*[|—-]\s*Arizonix$/i,
    '',
  );
  const metadataTitle =
    rawTitle.length > 47 ? `${rawTitle.slice(0, 44).trimEnd()}...` : rawTitle;
  return {
    alternates: { canonical: `https://arizonix.com/services/${service.slug}` },
    title: metadataTitle,
    description: service.seo?.description ?? service.shortDescription,
    openGraph: {
      title: service.seo?.title ?? service.name,
      description: service.seo?.description ?? service.shortDescription,
      type: 'website',
      url: `https://arizonix.com/services/${service.slug}`,
      images: service.seo?.ogImage
        ? [
            {
              url: sanityImage(service.seo.ogImage, {
                width: 1200,
                height: 630,
              }),
            },
          ]
        : [],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [cmsService, cmsServices] = await Promise.all([
    getServiceBySlug(slug).catch(() => null),
    getServices().catch(() => []),
  ]);
  const service = cmsService ?? staticService(slug);
  if (!service) notFound();
  const allServices: SanityService[] = cmsServices.length
    ? cmsServices
    : staticServices.map((item, order) => ({
        _id: item.slug,
        name: item.name,
        slug: item.slug,
        shortDescription: item.shortDescription,
        description: item.description,
        icon: item.icon.displayName ?? item.icon.name,
        featured: false,
        order,
      }));
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Arizonix',
        url: 'https://arizonix.com',
      },
      url: `https://arizonix.com/services/${service.slug}`,
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
          item: `https://arizonix.com/services/${service.slug}`,
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
      <ServiceDetailHero service={service} />
      <ServiceDetailContent
        content={
          service.fullPageContent as unknown as PortableTextBlock[] | undefined
        }
        serviceName={service.name}
      />
      <ServiceFeatures serviceName={service.name} slug={service.slug} />
      <ServiceRelated allServices={allServices} currentSlug={service.slug} />
      <ServiceDetailCTA serviceName={service.name} />
    </div>
  );
}
