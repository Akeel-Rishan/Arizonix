import { ServicesListItem } from '@/components/pages/services/services-list-item';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { getServiceCategoryColor } from '@/lib/services-categories';
import { services, type ServiceSlug } from '@/lib/services-data';

export function ServiceRelated({
  relatedSlugs,
}: {
  relatedSlugs: readonly [ServiceSlug, ServiceSlug, ServiceSlug];
}) {
  const related = relatedSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service) => service !== undefined)
    .map((service) => ({
      name: service.name,
      slug: service.slug,
      shortDescription: service.shortDescription,
      icon: service.icon.displayName ?? service.icon.name,
    }));

  const [featured, ...secondary] = related;

  return (
    <Section id="related-services" variant="glass">
      <Container>
        <SectionHeading
          description="Continue with the capabilities that most often support this type of project."
          title="Related services"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {featured ? (
            <ServicesListItem
              color={getServiceCategoryColor(featured.slug)}
              service={featured}
            />
          ) : null}
          <div className="grid gap-5">
            {secondary.map((service) => (
              <ServicesListItem
                color={getServiceCategoryColor(service.slug)}
                key={service.slug}
                service={service}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Button href="/services" variant="ghost">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
