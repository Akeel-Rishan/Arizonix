import { ImageResponse } from 'next/og';

import { fallbackBlogPosts } from '@/lib/blog-data';
import { getBlogPostBySlug } from '@/lib/sanity/fetch';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post =
    (await getBlogPostBySlug(slug).catch(() => null)) ??
    fallbackBlogPosts.find((item) => item.slug === slug);
  const title = post?.title ?? 'Arizonix Blog';
  const category = post?.categories[0] ?? 'Technology';
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#020617',
        color: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: 80,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ color: '#22d3ee', fontSize: 24, letterSpacing: 6 }}>
          {category.toUpperCase()}
        </div>
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.12 }}>
          {title}
        </div>
        <div style={{ color: '#94a3b8', fontSize: 26 }}>Arizonix Blog</div>
      </div>
    </div>,
    size,
  );
}
