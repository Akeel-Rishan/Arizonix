import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

const tags: Record<string, string> = {
  service: 'services', portfolioProject: 'portfolio', testimonial: 'testimonials',
  faqItem: 'faq', industry: 'industries', blogPost: 'blog', siteSettings: 'settings',
  teamMember: 'team',
};

export async function POST(request: NextRequest) {
  if (request.nextUrl.searchParams.get('secret') !== process.env.SANITY_REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }
  const body = (await request.json()) as { _type?: string };
  const tag = body._type ? tags[body._type] : undefined;
  if (!tag) return Response.json({ revalidated: false, message: 'Unknown document type' });
  revalidateTag(tag);
  return Response.json({ revalidated: true, tag, message: `Revalidated tag: ${tag}` });
}

// Connect at sanity.io/manage > API > Webhooks using this route and its secret.
export const dynamic = 'force-dynamic';
