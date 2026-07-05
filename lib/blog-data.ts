import type { SanityBlogPost, SanityBlock } from '@/lib/sanity/types';

export interface PostWithImages extends SanityBlogPost {
  authorAvatarUrl: string | null;
  coverImageUrl: string | null;
}

const block = (
  key: string,
  style: 'h2' | 'h3' | 'normal',
  text: string,
): SanityBlock => ({
  _key: key,
  _type: 'block',
  style,
  markDefs: [],
  children: [{ _key: `${key}-span`, _type: 'span', marks: [], text }],
});

const author = {
  name: 'Arizonix Engineering Team',
  bio: 'Engineers, product builders, and AI specialists sharing lessons from production systems.',
};

export const fallbackBlogPosts: SanityBlogPost[] = [
  {
    _id: 'lead-response-ai',
    slug: 'ai-lead-response-60-seconds',
    featured: true,
    title:
      "How We Reduced a Client's Lead Response Time from 4 Hours to 60 Seconds with AI",
    excerpt:
      "Manual lead follow-up costs businesses millions in lost opportunities. Here's exactly how we built an AI system that responds in under 60 seconds — and improved conversion by 40%.",
    publishedAt: '2026-06-15T08:00:00.000Z',
    updatedAt: '2026-06-20T08:00:00.000Z',
    author,
    categories: ['AI & Automation'],
    tags: ['AI agents', 'lead automation', 'OpenAI'],
    readingTime: 8,
    content: [
      block(
        'l1',
        'normal',
        'Slow lead response was silently eroding conversion. The sales team relied on manual inbox checks, research, qualification, and follow-up.',
      ),
      block('l2', 'h2', 'The Cost of Waiting Four Hours'),
      block(
        'l3',
        'normal',
        'Intent decays quickly. By the time a representative replied, high-value prospects had often spoken with competitors.',
      ),
      block('l4', 'h2', 'Designing the AI Qualification Pipeline'),
      block(
        'l5',
        'normal',
        'We connected every inbound channel to an event-driven workflow that enriches, scores, routes, and drafts a personalized response.',
      ),
      block('l6', 'h3', 'Grounded Decisions, Not Guesswork'),
      block(
        'l7',
        'normal',
        'The agent uses approved CRM history, service information, and strict confidence thresholds. Ambiguous requests go to a human.',
      ),
      block('l8', 'h2', 'Results After Production Launch'),
      block(
        'l9',
        'normal',
        'Median response time dropped below one minute and qualified-lead conversion increased by 40 percent without increasing headcount.',
      ),
    ],
  },
  {
    _id: 'next-remix',
    slug: 'nextjs-14-vs-remix',
    featured: false,
    title: 'Next.js 14 vs Remix: Which Should You Choose for Your Project?',
    excerpt:
      "Both are excellent React frameworks. Here's our opinionated breakdown of when to choose each — based on shipping production applications with both.",
    publishedAt: '2026-05-28T08:00:00.000Z',
    author,
    categories: ['Web Development'],
    tags: ['Next.js', 'React', 'web development'],
    readingTime: 6,
    content: [
      block(
        'n1',
        'normal',
        'Framework decisions should follow product constraints, team strengths, and deployment needs.',
      ),
      block('n2', 'h2', 'Where Next.js Excels'),
      block(
        'n3',
        'normal',
        'Next.js offers a broad ecosystem, React Server Components, mature hosting, and flexible rendering choices.',
      ),
      block('n4', 'h2', 'Where Remix Excels'),
      block(
        'n5',
        'normal',
        'Remix embraces web platform primitives and makes nested data mutations exceptionally clear.',
      ),
      block('n6', 'h2', 'Our Decision Framework'),
      block(
        'n7',
        'normal',
        'Choose the framework your team can operate confidently while meeting the application’s performance and data requirements.',
      ),
    ],
  },
  {
    _id: 'invoice-ai',
    slug: 'real-cost-manual-invoice-processing',
    featured: false,
    title: 'The Real Cost of Manual Invoice Processing (And How AI Fixes It)',
    excerpt:
      'Most finance teams process invoices manually at a cost of $8–12 per invoice. We break down the total cost and show how AI document processing brings this below $0.50.',
    publishedAt: '2026-05-10T08:00:00.000Z',
    author,
    categories: ['Business & Strategy', 'AI & Automation'],
    tags: ['AI automation', 'finance', 'invoice processing'],
    readingTime: 5,
    content: [
      block(
        'i1',
        'normal',
        'Invoice cost extends far beyond data entry. Exceptions, approvals, reconciliation, and avoidable errors compound the true expense.',
      ),
      block('i2', 'h2', 'What Manual Processing Really Costs'),
      block(
        'i3',
        'normal',
        'Teams lose time keying data, matching purchase orders, chasing approvers, and correcting duplicate payments.',
      ),
      block('i4', 'h2', 'How Document AI Changes the Workflow'),
      block(
        'i5',
        'normal',
        'Document AI extracts fields, validates them, performs three-way matching, and escalates only genuine exceptions.',
      ),
      block('i6', 'h2', 'The Business Case'),
      block(
        'i7',
        'normal',
        'Automation reduces processing cost below fifty cents per invoice while creating a complete, auditable trail.',
      ),
    ],
  },
];

export function withBlogImages(
  post: SanityBlogPost,
  coverImageUrl: string | null = null,
  authorAvatarUrl: string | null = null,
): PostWithImages {
  return { ...post, coverImageUrl, authorAvatarUrl };
}
