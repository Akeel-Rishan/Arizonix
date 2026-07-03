import { ServicesListItem } from '@/components/pages/services/services-list-item';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { SanityService } from '@/lib/sanity/types';
import { getServiceCategory, getServiceCategoryColor } from '@/lib/services-categories';
export function ServiceRelated({ allServices, currentSlug }: { allServices: SanityService[]; currentSlug: string }) { const category = getServiceCategory(currentSlug); const candidates = allServices.filter((service) => service.slug !== currentSlug); const related = [...candidates.filter((service) => category?.slugs.includes(service.slug)), ...candidates.filter((service) => !category?.slugs.includes(service.slug))].slice(0, 3); return <Section id="related-services"><Container><SectionHeading eyebrow="EXPLORE MORE" title="Related Services" /><div className="mt-10 grid gap-6 md:grid-cols-3">{related.map((service) => <ServicesListItem color={getServiceCategoryColor(service.slug)} key={service.slug} service={service} />)}</div><div className="mt-8 text-center"><Button href="/services" variant="ghost">View All Services</Button></div></Container></Section>; }
