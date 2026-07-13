'use client';
import { Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { BlogCard } from './blog-card';
import { BlogCategoryFilter } from './blog-category-filter';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import type { PostWithImages } from '@/lib/blog-data';
import { AnimatePresence, motion } from '@/lib/framer-motion';
export function BlogGrid({
  posts,
}: {
  featuredPostId: string | null;
  posts: PostWithImages[];
}) {
  const [category, setCategory] = useState('All');
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(9);
  useEffect(() => {
    const timeout = window.setTimeout(
      () => setQuery(input.trim().toLowerCase()),
      300,
    );
    return () => window.clearTimeout(timeout);
  }, [input]);
  useEffect(() => {
    const selectCategory = (event: Event) => {
      const categoryEvent = event as CustomEvent<string>;
      setCategory(categoryEvent.detail);
      setVisible(9);
    };
    window.addEventListener('blog-category', selectCategory);
    return () => window.removeEventListener('blog-category', selectCategory);
  }, []);
  const categories = useMemo(
    () => [
      'All',
      ...Array.from(new Set(posts.flatMap((post) => post.categories ?? []))),
    ],
    [posts],
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((cat) => [
          cat,
          cat === 'All'
            ? posts.length
            : posts.filter((post) => post.categories.includes(cat)).length,
        ]),
      ),
    [categories, posts],
  );
  const filtered = posts.filter(
    (post) =>
      (category === 'All' || post.categories.includes(category)) &&
      (!query || `${post.title} ${post.excerpt}`.toLowerCase().includes(query)),
  );
  const clear = () => {
    setCategory('All');
    setInput('');
    setQuery('');
  };
  return (
    <Section id="blog-grid">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <BlogCategoryFilter
            activeCategory={category}
            categories={categories}
            counts={counts}
            onCategoryChange={(value) => {
              setCategory(value);
              setVisible(9);
            }}
          />
          <div className="relative shrink-0">
            <label className="sr-only" htmlFor="blog-search">
              Search articles
            </label>
            <input
              className="glass-panel h-11 w-full rounded-full pl-4 pr-11 text-sm text-white outline-none focus:ring-2 focus:ring-brand-cyan md:w-72"
              id="blog-search"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Search articles"
              value={input}
            />
            {input ? (
              <button
                aria-label="Clear search"
                className="absolute right-3 top-3 text-slate-400"
                onClick={() => setInput('')}
                type="button"
              >
                <X className="size-4" />
              </button>
            ) : (
              <Search className="absolute right-3 top-3 size-4 text-slate-500" />
            )}
          </div>
        </div>
        <p className="mb-6 mt-7 text-sm text-slate-500">
          Showing {filtered.length} articles
        </p>
        {filtered.length ? (
          <>
            <AnimatePresence mode="popLayout">
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                layout
              >
                {filtered.slice(0, visible).map((post, index) => (
                  <motion.div
                    className={index === 0 ? 'lg:col-span-2' : ''}
                    key={post._id}
                    layout
                  >
                    <BlogCard
                      post={post}
                      variant={index === 0 ? 'large' : 'standard'}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {visible < filtered.length ? (
              <div className="mt-10 text-center">
                <Button
                  onClick={() => setVisible((value) => value + 9)}
                  variant="outline"
                >
                  Load More Articles
                </Button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="py-20 text-center">
            <Search className="mx-auto size-12 text-slate-600" />
            <h3 className="mt-4 text-xl font-bold text-white">
              No articles found
            </h3>
            <p className="mt-2 text-slate-400">
              Try a different category or search term.
            </p>
            <Button className="mt-5" onClick={clear} variant="outline">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
