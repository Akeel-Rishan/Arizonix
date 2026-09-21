import { client } from '@/lib/sanity/client';
import {
  blogPostBySlugQuery,
  blogPostsQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
  faqItemsQuery,
  featuredBlogPostsQuery,
  featuredProjectsQuery,
  featuredServicesQuery,
  industriesQuery,
  industryBySlugQuery,
  portfolioProjectsQuery,
  projectBySlugQuery,
  serviceBySlugQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery,
  teamMembersQuery,
} from '@/lib/sanity/queries';
import type {
  SanityBlogPost,
  SanityCaseStudy,
  SanityCaseStudyFull,
  SanityFAQItem,
  SanityIndustry,
  SanityPortfolioProject,
  SanityService,
  SanitySiteSettings,
  SanityTestimonial,
  SanityTeamMember,
} from '@/lib/sanity/types';

const REVALIDATE_SECONDS = process.env.NODE_ENV === 'development' ? 60 : 3600;

export async function getServices(): Promise<SanityService[]> {
  return client.fetch<SanityService[]>(
    servicesQuery,
    {},
    { next: { tags: ['services'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getFeaturedServices(): Promise<SanityService[]> {
  return client.fetch<SanityService[]>(
    featuredServicesQuery,
    {},
    { next: { tags: ['services'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getPortfolioProjects(): Promise<
  SanityPortfolioProject[]
> {
  return client.fetch<SanityPortfolioProject[]>(
    portfolioProjectsQuery,
    {},
    { next: { tags: ['portfolio'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getCaseStudies(): Promise<SanityCaseStudy[]> {
  return client.fetch<SanityCaseStudy[]>(
    caseStudiesQuery,
    {},
    { next: { tags: ['case-studies'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<SanityCaseStudyFull | null> {
  return client.fetch<SanityCaseStudyFull | null>(
    caseStudyBySlugQuery,
    { slug },
    {
      next: { tags: ['case-studies'], revalidate: REVALIDATE_SECONDS },
    },
  );
}

export async function getFeaturedProjects(): Promise<SanityPortfolioProject[]> {
  return client.fetch<SanityPortfolioProject[]>(
    featuredProjectsQuery,
    {},
    { next: { tags: ['portfolio'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch<SanityTestimonial[]>(
    testimonialsQuery,
    {},
    { next: { tags: ['testimonials'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch<SanityTeamMember[]>(
    teamMembersQuery,
    {},
    { next: { tags: ['team'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getFAQItems(): Promise<SanityFAQItem[]> {
  return client.fetch<SanityFAQItem[]>(
    faqItemsQuery,
    {},
    { next: { tags: ['faq'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getIndustries(): Promise<SanityIndustry[]> {
  return client.fetch<SanityIndustry[]>(
    industriesQuery,
    {},
    { next: { tags: ['industries'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getIndustryBySlug(
  slug: string,
): Promise<SanityIndustry | null> {
  return client.fetch<SanityIndustry | null>(
    industryBySlugQuery,
    { slug },
    { next: { tags: ['industries'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getFeaturedBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch<SanityBlogPost[]>(
    featuredBlogPostsQuery,
    {},
    { next: { tags: ['blog'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch<SanityBlogPost[]>(
    blogPostsQuery,
    {},
    { next: { tags: ['blog'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return client.fetch<SanitySiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { tags: ['settings'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getServiceBySlug(
  slug: string,
): Promise<SanityService | null> {
  return client.fetch<SanityService | null>(
    serviceBySlugQuery,
    { slug },
    { next: { tags: ['services'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getProjectBySlug(
  slug: string,
): Promise<SanityPortfolioProject | null> {
  return client.fetch<SanityPortfolioProject | null>(
    projectBySlugQuery,
    {
      slug,
    },
    { next: { tags: ['portfolio'], revalidate: REVALIDATE_SECONDS } },
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  return client.fetch<SanityBlogPost | null>(
    blogPostBySlugQuery,
    { slug },
    { next: { tags: ['blog'], revalidate: REVALIDATE_SECONDS } },
  );
}
