import type { Metadata } from 'next';

import { BlogCTA } from '@/components/pages/blog/blog-cta';
import { BlogGrid } from '@/components/pages/blog/blog-grid';
import { BlogHero } from '@/components/pages/blog/blog-hero';
import { fallbackBlogPosts, withBlogImages } from '@/lib/blog-data';
import { getBlogPosts, getFeaturedBlogPosts } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
export const metadata: Metadata = {
  title: 'Blog — AI, Software Engineering & Technology Insights | Arizonix',
  description:
    'Expert insights on AI automation, software engineering, mobile development, and building technology that drives business growth. Written by the engineers at Arizonix.',
  openGraph: {
    title: 'Arizonix Blog — Technology Insights',
    description:
      'AI, software engineering, and technology insights from the team at Arizonix.',
    type: 'website',
    url: 'https://arizonix.com/blog',
  },
  alternates: {
    canonical: 'https://arizonix.com/blog',
    types: { 'application/rss+xml': 'https://arizonix.com/blog/rss.xml' },
  },
};
export const revalidate = 3600;
export default async function BlogPage() {
  const [cmsPosts, cmsFeatured] = await Promise.all([
    getBlogPosts().catch(() => []),
    getFeaturedBlogPosts().catch(() => []),
  ]);
  const posts = cmsPosts.length ? cmsPosts : fallbackBlogPosts;
  const featuredRaw =
    cmsFeatured[0] ?? posts.find((post) => post.featured) ?? posts[0] ?? null;
  const resolve = (post: (typeof posts)[number]) =>
    withBlogImages(
      post,
      post.coverImage
        ? sanityImage(post.coverImage, { width: 1000, quality: 85 })
        : null,
      post.author?.avatar
        ? sanityImage(post.author.avatar, { width: 80, quality: 90 })
        : null,
    );
  const featured = featuredRaw ? resolve(featuredRaw) : null;
  const displayPosts = posts.map(resolve);
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories)),
  );
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Arizonix Blog',
      description: 'AI, software engineering, and technology insights',
      url: 'https://arizonix.com/blog',
      publisher: {
        '@type': 'Organization',
        name: 'Arizonix',
        url: 'https://arizonix.com',
      },
      blogPost: posts.slice(0, 10).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `https://arizonix.com/blog/${post.slug}`,
        datePublished: post.publishedAt,
        author: post.author
          ? { '@type': 'Person', name: post.author.name }
          : { '@type': 'Organization', name: 'Arizonix' },
      })),
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
          name: 'Blog',
          item: 'https://arizonix.com/blog',
        },
      ],
    },
  ];
  return (
    <main>
      {schema.map((item, index) => (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, '\\u003c'),
          }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <BlogHero
        categories={categories}
        featuredPost={featured}
        postCount={posts.length}
      />
      <BlogGrid featuredPostId={featured?._id ?? null} posts={displayPosts} />
      <BlogCTA />
    </main>
  );
}
