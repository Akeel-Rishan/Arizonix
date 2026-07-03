import { AIAutomation } from '@/components/sections/ai-automation';
import { FAQ } from '@/components/sections/faq';
import { FinalCTA } from '@/components/sections/final-cta';
import { Hero } from '@/components/sections/hero';
import { Industries } from '@/components/sections/industries';
import { PortfolioPreview } from '@/components/sections/portfolio-preview';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { TechShowcase } from '@/components/sections/tech-showcase';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CMSErrorBoundary } from '@/components/ui/cms-error-boundary';
import { faqData as staticFAQ } from '@/lib/faq-data';
import { getFAQItems, getFeaturedProjects, getIndustries, getServices, getSiteSettings, getTestimonials } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
import { testimonials as staticTestimonials, type Testimonial } from '@/lib/testimonials-data';

export const revalidate = 3600;

export default async function HomePage() {
  const [services, projects, cmsTestimonials, faqItems, industries, siteSettings] = await Promise.all([
    getServices().catch(() => []), getFeaturedProjects().catch(() => []),
    getTestimonials().catch(() => []), getFAQItems().catch(() => []),
    getIndustries().catch(() => []), getSiteSettings().catch(() => null),
  ]);
  const testimonials: Testimonial[] = cmsTestimonials.length ? cmsTestimonials.map((item) => ({ id: item._id, name: item.name, role: item.role, company: item.company, industry: item.industry, avatar: item.avatar ? sanityImage(item.avatar, { width: 112, quality: 90 }) : null, rating: item.rating, quote: item.quote, project: item.project, result: item.result, color: item.color })) : staticTestimonials;
  const faqData = faqItems.length ? Array.from(new Set(faqItems.map((item) => item.category))).map((category) => ({ id: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'), label: category, items: faqItems.filter((item) => item.category === category).map((item) => ({ id: item._id, question: item.question, answer: item.answer, category: item.category, links: staticFAQ.flatMap((group) => group.items).find((fallback) => fallback.question === item.question)?.links })) })) : staticFAQ;

  return <main>
    {/* Future CMS migration candidate. */}<Hero />
    {/* Future CMS migration candidate. */}<TechShowcase />
    <CMSErrorBoundary fallback={<Services services={[]} />}><Services services={services} /></CMSErrorBoundary>
    <CMSErrorBoundary fallback={<Industries industries={[]} />}><Industries industries={industries} /></CMSErrorBoundary>
    {/* Future CMS migration candidate. */}<AIAutomation />
    <CMSErrorBoundary fallback={<PortfolioPreview projects={[]} />}><PortfolioPreview projects={projects} /></CMSErrorBoundary>
    {/* Future CMS migration candidate. */}<Process />
    {/* Future CMS migration candidate. */}<WhyChooseUs />
    <CMSErrorBoundary fallback={<Testimonials testimonials={staticTestimonials} />}><Testimonials testimonials={testimonials} /></CMSErrorBoundary>
    <CMSErrorBoundary fallback={<FAQ faqData={staticFAQ} />}><FAQ faqData={faqData} /></CMSErrorBoundary>
    <CMSErrorBoundary fallback={<FinalCTA siteSettings={null} />}><FinalCTA siteSettings={siteSettings} /></CMSErrorBoundary>
  </main>;
}
