import type { PortableTextBlock } from '@portabletext/types';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogCTA } from '@/components/pages/blog/blog-cta';
import { BlogPostContent } from '@/components/pages/blog/blog-post-content';
import { BlogPostHero } from '@/components/pages/blog/blog-post-hero';
import { BlogPostRelated } from '@/components/pages/blog/blog-post-related';
import { BlogPostSidebar } from '@/components/pages/blog/blog-post-sidebar';
import { fallbackBlogPosts, withBlogImages } from '@/lib/blog-data';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
export const revalidate = 3600;
export async function generateStaticParams() {
  const cms = await getBlogPosts().catch(() => []);
  return (cms.length ? cms : fallbackBlogPosts).map((post) => ({
    slug: post.slug,
  }));
}
async function findPost(slug: string) {
  return (
    (await getBlogPostBySlug(slug).catch(() => null)) ??
    fallbackBlogPosts.find((post) => post.slug === slug) ??
    null
  );
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await findPost(params.slug);
  if (!post) return { title: 'Post Not Found — Arizonix Blog' };
  const image = post.coverImage
    ? sanityImage(post.coverImage, { width: 1200, height: 630 })
    : null;
  const title = post.seo?.title ?? post.title;
  const description = post.seo?.description ?? post.excerpt;
  return {
    title: `${title} | Arizonix Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://arizonix.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author?.name ?? 'Arizonix'],
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    robots: post.seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: `https://arizonix.com/blog/${post.slug}` },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, allCms] = await Promise.all([
    findPost(params.slug),
    getBlogPosts().catch(() => []),
  ]);
  if (!post) notFound();
  const all = allCms.length ? allCms : fallbackBlogPosts;
  const cover = post.coverImage
    ? sanityImage(post.coverImage, { width: 1400, quality: 90 })
    : null;
  const avatar = post.author?.avatar
    ? sanityImage(post.author.avatar, { width: 120, quality: 90 })
    : null;
  const display = withBlogImages(post, cover, avatar);
  const related = all
    .filter(
      (item) =>
        item._id !== post._id &&
        item.categories.some((category) => post.categories.includes(category)),
    )
    .slice(0, 3)
    .map((item) =>
      withBlogImages(
        item,
        item.coverImage
          ? sanityImage(item.coverImage, { width: 600, quality: 80 })
          : null,
        item.author?.avatar
          ? sanityImage(item.author.avatar, { width: 60, quality: 85 })
          : null,
      ),
    );
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: cover ?? '',
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        '@type': post.author ? 'Person' : 'Organization',
        name: post.author?.name ?? 'Arizonix',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Arizonix',
        url: 'https://arizonix.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://arizonix.com/blog/${post.slug}`,
      },
      keywords: post.tags.join(', '),
      articleSection: post.categories[0] ?? 'Technology',
      wordCount: post.readingTime ? post.readingTime * 200 : undefined,
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
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://arizonix.com/blog/${post.slug}`,
        },
      ],
    },
  ];
  return (
    <main>
      {schemas.map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <article>
        <BlogPostHero post={display} />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-12 lg:grid-cols-[1fr_280px]">
          <BlogPostContent
            content={(post.content ?? []) as unknown as PortableTextBlock[]}
          />
          <div className="hidden lg:block">
            <BlogPostSidebar authorAvatarUrl={avatar} post={post} />
          </div>
        </div>
        <BlogPostRelated posts={related} />
        <BlogCTA />
      </article>
    </main>
  );
}
