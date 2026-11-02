import { ServiceDetailContent } from '@/components/pages/services/service-detail-content';
import { ServiceDetailCTA } from '@/components/pages/services/service-detail-cta';
import { ServiceDetailHero } from '@/components/pages/services/service-detail-hero';
import { ServiceRelated } from '@/components/pages/services/service-related';
import type { ServiceDetailData } from '@/lib/service-detail-data';

export interface ServicePageDisplay {
  description: string;
  icon?: string;
  name: string;
  shortDescription: string;
  slug: string;
}

export function ServiceDetailPage({
  detail,
  service,
}: {
  detail: ServiceDetailData;
  service: ServicePageDisplay;
}) {
  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent detail={detail} />
      <ServiceRelated relatedSlugs={detail.relatedServices} />
      <ServiceDetailCTA cta={detail.cta} />
    </>
  );
}
