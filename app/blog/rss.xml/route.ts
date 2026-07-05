import { fallbackBlogPosts } from '@/lib/blog-data';
import { getBlogPosts } from '@/lib/sanity/fetch';
export const dynamic = 'force-dynamic';
export const revalidate = 3600;
const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export async function GET() {
  const cms = await getBlogPosts().catch(() => []);
  const posts = cms.length ? cms : fallbackBlogPosts;
  const items = posts
    .map(
      (post) =>
        `<item><title><![CDATA[${post.title.replace(/]]>/g, ']]]]><![CDATA[>')}]]></title><link>https://arizonix.com/blog/${escape(post.slug)}</link><guid>https://arizonix.com/blog/${escape(post.slug)}</guid><description><![CDATA[${post.excerpt.replace(/]]>/g, ']]]]><![CDATA[>')}]]></description><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>${post.categories.map((category) => `<category>${escape(category)}</category>`).join('')}</item>`,
    )
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Arizonix Blog</title><link>https://arizonix.com/blog</link><description>AI, software engineering, and technology insights from Arizonix</description><language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate><atom:link href="https://arizonix.com/blog/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
