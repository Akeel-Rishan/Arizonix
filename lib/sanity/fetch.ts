import { client } from '@/lib/sanity/client';
import {
  blogPostBySlugQuery,
  faqItemsQuery,
  featuredBlogPostsQuery,
  featuredProjectsQuery,
  featuredServicesQuery,
  industriesQuery,
  portfolioProjectsQuery,
  projectBySlugQuery,
  serviceBySlugQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from '@/lib/sanity/queries';
import type {
  SanityBlogPost,
  SanityFAQItem,
  SanityIndustry,
  SanityPortfolioProject,
  SanityService,
  SanitySiteSettings,
  SanityTestimonial,
} from '@/lib/sanity/types';

export async function getServices(): Promise<SanityService[]> {
  return client.fetch<SanityService[]>(servicesQuery);
}

export async function getFeaturedServices(): Promise<SanityService[]> {
  return client.fetch<SanityService[]>(featuredServicesQuery);
}

export async function getPortfolioProjects(): Promise<
  SanityPortfolioProject[]
> {
  return client.fetch<SanityPortfolioProject[]>(portfolioProjectsQuery);
}

export async function getFeaturedProjects(): Promise<SanityPortfolioProject[]> {
  return client.fetch<SanityPortfolioProject[]>(featuredProjectsQuery);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch<SanityTestimonial[]>(testimonialsQuery);
}

export async function getFAQItems(): Promise<SanityFAQItem[]> {
  return client.fetch<SanityFAQItem[]>(faqItemsQuery);
}

export async function getIndustries(): Promise<SanityIndustry[]> {
  return client.fetch<SanityIndustry[]>(industriesQuery);
}

export async function getFeaturedBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch<SanityBlogPost[]>(featuredBlogPostsQuery);
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return client.fetch<SanitySiteSettings | null>(siteSettingsQuery);
}

export async function getServiceBySlug(
  slug: string,
): Promise<SanityService | null> {
  return client.fetch<SanityService | null>(serviceBySlugQuery, { slug });
}

export async function getProjectBySlug(
  slug: string,
): Promise<SanityPortfolioProject | null> {
  return client.fetch<SanityPortfolioProject | null>(projectBySlugQuery, {
    slug,
  });
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  return client.fetch<SanityBlogPost | null>(blogPostBySlugQuery, { slug });
}
