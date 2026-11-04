import dynamic from 'next/dynamic';

import { ErrorBoundary } from '@/components/monitoring/error-boundary';
import { FinalCTA } from '@/components/sections/final-cta';
import { Hero } from '@/components/sections/hero';
import { Industries } from '@/components/sections/industries';
import { Services } from '@/components/sections/services';
import { TechShowcase } from '@/components/sections/tech-showcase';
import { SectionSkeleton } from '@/components/ui/section-skeleton';
import {
  getFeaturedProjects,
  getIndustries,
  getServices,
  getSiteSettings,
  getTestimonials,
} from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
import {
  testimonials as staticTestimonials,
  type Testimonial,
} from '@/lib/testimonials-data';

export const revalidate = 3600;

const AIAutomation = dynamic(
  () =>
    import('@/components/sections/ai-automation').then(
      (module) => module.AIAutomation,
    ),
  { loading: () => <SectionSkeleton /> },
);
const PortfolioPreview = dynamic(
  () =>
    import('@/components/sections/portfolio-preview').then(
      (module) => module.PortfolioPreview,
    ),
  { loading: () => <SectionSkeleton /> },
);
const Testimonials = dynamic(
  () =>
    import('@/components/sections/testimonials').then(
      (module) => module.Testimonials,
    ),
  { loading: () => <SectionSkeleton /> },
);
const Process = dynamic(
  () =>
    import('@/components/sections/process').then((module) => module.Process),
  { loading: () => <SectionSkeleton /> },
);
const WhyChooseUs = dynamic(
  () =>
    import('@/components/sections/why-choose-us').then(
      (module) => module.WhyChooseUs,
    ),
  { loading: () => <SectionSkeleton /> },
);

export default async function HomePage() {
  const [services, projects, cmsTestimonials, industries, siteSettings] =
    await Promise.all([
      getServices().catch(() => []),
      getFeaturedProjects().catch(() => []),
      getTestimonials().catch(() => []),
      getIndustries().catch(() => []),
      getSiteSettings().catch(() => null),
    ]);
  const testimonials: Testimonial[] = cmsTestimonials.length
    ? cmsTestimonials.map((item) => ({
        id: item._id,
        name: item.name,
        role: item.role,
        company: item.company,
        industry: item.industry,
        avatar: item.avatar
          ? sanityImage(item.avatar, { width: 112, quality: 90 })
          : null,
        rating: item.rating,
        quote: item.quote,
        project: item.project,
        result: item.result,
        color: item.color,
      }))
    : staticTestimonials;
  return (
    <div>
      {/* Future CMS migration candidate. */}
      <Hero />
      {/* Future CMS migration candidate. */}
      <TechShowcase />
      <ErrorBoundary
        fallback={<Services services={[]} />}
        sectionName="Services"
      >
        <Services services={services} />
      </ErrorBoundary>
      <ErrorBoundary
        fallback={<Industries industries={[]} />}
        sectionName="Industries"
      >
        <Industries industries={industries} />
      </ErrorBoundary>
      {/* Future CMS migration candidate. */}
      <AIAutomation />
      <ErrorBoundary
        fallback={<PortfolioPreview projects={[]} />}
        sectionName="PortfolioPreview"
      >
        <PortfolioPreview projects={projects} />
      </ErrorBoundary>
      {/* Future CMS migration candidate. */}
      <Process />
      {/* Future CMS migration candidate. */}
      <WhyChooseUs />
      <ErrorBoundary
        fallback={<Testimonials testimonials={staticTestimonials} />}
        sectionName="Testimonials"
      >
        <Testimonials testimonials={testimonials} />
      </ErrorBoundary>
      <ErrorBoundary
        fallback={<FinalCTA siteSettings={null} />}
        sectionName="FinalCTA"
      >
        <FinalCTA siteSettings={siteSettings} />
      </ErrorBoundary>
    </div>
  );
}
