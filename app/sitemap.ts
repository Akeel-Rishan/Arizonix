import type { MetadataRoute } from 'next';

import { fallbackBlogPosts } from '@/lib/blog-data';
import { getBlogPosts } from '@/lib/sanity/fetch';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await getBlogPosts().catch(() => []);
  const posts = cms.length ? cms : fallbackBlogPosts;
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    ['', 'weekly', 1],
    ['about', 'monthly', 0.8],
    ['services', 'monthly', 0.9],
    ['portfolio', 'weekly', 0.8],
    ['case-studies', 'weekly', 0.7],
    ['industries', 'monthly', 0.8],
    ['ai-automation', 'monthly', 0.9],
    ['blog', 'daily', 0.8],
    ['contact', 'monthly', 0.9],
  ].map(([path, frequency, priority]) => ({
    url: `https://arizonix.com/${path}`,
    lastModified: now,
    changeFrequency:
      frequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: Number(priority),
  }));
  return [
    ...staticPages,
    ...posts.map((post) => ({
      url: `https://arizonix.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
