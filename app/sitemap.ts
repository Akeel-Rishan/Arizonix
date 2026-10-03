import type { MetadataRoute } from 'next';

import { fallbackBlogPosts } from '@/lib/blog-data';
import { industryDetailData } from '@/lib/industry-detail-data';
import { portfolioProjects } from '@/lib/portfolio-data';
import { getBlogPosts, getCaseStudies } from '@/lib/sanity/fetch';
import { SEO_CONFIG } from '@/lib/seo/seo-config';
import { services } from '@/lib/services-data';
const entry = (
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: number,
  lastModified: Date = new Date(),
): MetadataRoute.Sitemap[number] => ({
  url: `${SEO_CONFIG.siteUrl}${path}`,
  lastModified,
  changeFrequency,
  priority,
});
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cmsPosts, studies] = await Promise.all([
    getBlogPosts().catch(() => []),
    getCaseStudies().catch(() => []),
  ]);
  const posts = cmsPosts.length ? cmsPosts : fallbackBlogPosts;
  const staticPages = Object.values(SEO_CONFIG.pages).map((page) =>
    entry(page.url, page.changeFreq, page.priority),
  );
  return [
    ...staticPages,
    ...services.map((service) =>
      entry(`/services/${service.slug}`, 'monthly', 0.8),
    ),
    ...Object.keys(industryDetailData).map((slug) =>
      entry(`/industries/${slug}`, 'monthly', 0.7),
    ),
    ...portfolioProjects.map((project) =>
      entry(`/portfolio/${project.id}`, 'monthly', 0.7),
    ),
    ...studies.map((study) =>
      entry(
        `/case-studies/${study.slug}`,
        'monthly',
        0.6,
        new Date(study.publishedAt ?? Date.now()),
      ),
    ),
    ...posts.map((post) =>
      entry(
        `/blog/${post.slug}`,
        'monthly',
        0.6,
        new Date(post.updatedAt ?? post.publishedAt),
      ),
    ),
  ];
}
