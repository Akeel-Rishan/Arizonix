import { BlogCard } from './blog-card';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { PostWithImages } from '@/lib/blog-data';
export function BlogPostRelated({ posts }: { posts: PostWithImages[] }) {
  if (!posts.length) return null;
  return (
    <Section
      className="[content-visibility:auto] [contain-intrinsic-size:0_500px]"
      id="related-posts"
    >
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="KEEP READING" title="Related Articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/blog" variant="ghost">
            ← View All Articles
          </Button>
        </div>
      </div>
    </Section>
  );
}
