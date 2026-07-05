'use client';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { PostWithImages } from '@/lib/blog-data';
import { cn, getInitials } from '@/lib/utils';
const categoryColorMap: Record<string, string> = {
  'AI & Automation': 'hover:border-brand-blue/50 hover:shadow-glow-blue',
  'Web Development': 'hover:border-brand-purple/50 hover:shadow-glow-purple',
  'Mobile Development': 'hover:border-brand-cyan/50 hover:shadow-glow-cyan',
  'Cloud & Infrastructure': 'hover:border-brand-blue/50 hover:shadow-glow-blue',
  Design: 'hover:border-brand-purple/50 hover:shadow-glow-purple',
};
const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
export function BlogCard({
  post,
  variant = 'standard',
}: {
  post: PostWithImages;
  variant?: 'large' | 'standard';
}) {
  const glow =
    categoryColorMap[post.categories?.[0]] ??
    categoryColorMap['AI & Automation'];
  return (
    <Link
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      href={`/blog/${post.slug}`}
    >
      <article
        className={cn(
          'glass-panel h-full overflow-hidden rounded-xl2 border transition duration-300',
          glow,
          variant === 'large' && 'relative min-h-[360px]',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-brand-cyan/20',
            variant === 'large' ? 'absolute inset-0' : 'aspect-video',
          )}
        >
          {post.coverImageUrl ? (
            <Image
              alt={post.title}
              className="object-cover transition duration-500 group-hover:scale-105"
              fill
              sizes={
                variant === 'large'
                  ? '(max-width: 1024px) 100vw, 66vw'
                  : '(max-width: 768px) 100vw, 33vw'
              }
              src={post.coverImageUrl}
            />
          ) : null}
        </div>
        <div
          className={cn(
            'p-6',
            variant === 'large' &&
              'absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-8',
          )}
        >
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <span
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                key={category}
              >
                {category}
              </span>
            ))}
          </div>
          <h3
            className={cn(
              'mt-3 line-clamp-2 font-bold text-white',
              variant === 'large' ? 'text-2xl md:text-3xl' : 'text-xl',
            )}
          >
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {post.authorAvatarUrl ? (
                <Image
                  alt=""
                  className="rounded-full"
                  height={28}
                  src={post.authorAvatarUrl}
                  width={28}
                />
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-brand-purple/20 text-[10px] text-white">
                  {getInitials(post.author?.name ?? 'Arizonix')}
                </span>
              )}
              <span className="text-xs text-slate-400">
                {post.author?.name ?? 'Arizonix'}
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="size-3" />
              {post.readingTime ?? 5} min read
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {formatDate(post.publishedAt)}
          </p>
          <span className="absolute bottom-5 right-6 text-xs text-brand-blue opacity-0 transition group-hover:opacity-100">
            Read →
          </span>
        </div>
      </article>
    </Link>
  );
}
