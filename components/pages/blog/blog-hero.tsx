'use client';
import { motion } from 'framer-motion';

import { BlogCard } from './blog-card';

import { NewsletterInlineForm } from '@/components/ui/newsletter-inline-form';
import { Section } from '@/components/ui/section';
import type { PostWithImages } from '@/lib/blog-data';

export function BlogHero({
  categories,
  featuredPost,
  postCount,
}: {
  categories: string[];
  featuredPost: PostWithImages | null;
  postCount: number;
}) {
  const scroll = (category: string) => {
    document
      .querySelector('#blog-grid')
      ?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(
      new CustomEvent('blog-category', { detail: category }),
    );
  };
  return (
    <Section className="flex min-h-[70vh] items-center pt-28">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -24 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Arizonix Blog
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Insights From The
            <br />
            <span className="text-gradient">Engineering Front</span>
          </h1>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Practical guides, technical deep-dives, and industry analysis from
            the engineers and AI specialists at Arizonix.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Publishing {postCount}+ articles on AI, engineering, and technology.
          </p>
          <p className="mb-2 mt-6 text-sm text-slate-400">
            Get new articles in your inbox:
          </p>
          <NewsletterInlineForm className="max-w-md" />
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.slice(0, 5).map((category) => (
              <button
                className="glass-panel rounded-full px-3 py-1.5 text-xs text-slate-400 focus-visible:ring-2 focus-visible:ring-brand-cyan"
                key={category}
                onClick={() => scroll(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 24 }}
        >
          {featuredPost ? (
            <BlogCard post={featuredPost} variant="large" />
          ) : (
            <div className="glass-panel flex min-h-[340px] items-center justify-center rounded-xl2 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-xl font-bold text-white">
              First article coming soon
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
