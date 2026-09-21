'use client';
import { Clock, Link2, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import type { PostWithImages } from '@/lib/blog-data';
import { motion } from '@/lib/framer-motion';
import { getInitials } from '@/lib/utils';
export function BlogPostHero({ post }: { post: PostWithImages }) {
  const coverBlur =
    'coverImageBlurUrl' in post && typeof post.coverImageBlurUrl === 'string'
      ? post.coverImageBlurUrl
      : undefined;
  const [copied, setCopied] = useState(false);
  const url = `https://arizonix.com/blog/${post.slug}`;
  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl px-4 pb-12 pt-32"
      initial={{ opacity: 0, y: 20 }}
    >
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm text-slate-400">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>/</li>
          <li>{post.categories[0] ?? 'Technology'}</li>
          <li>/</li>
          <li aria-current="page">
            {post.title.slice(0, 30)}
            {post.title.length > 30 ? '…' : ''}
          </li>
        </ol>
      </nav>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.categories.map((category) => (
          <Badge key={category} variant="outline">
            {category}
          </Badge>
        ))}
      </div>
      <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">
        {post.excerpt}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span className="flex items-center gap-2">
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
          <strong className="text-white">
            {post.author?.name ?? 'Arizonix'}
          </strong>
        </span>
        <span>·</span>
        <time dateTime={post.publishedAt}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date(post.publishedAt))}
        </time>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="size-4" />
          {post.readingTime ?? 5} min read
        </span>
        {post.tags.slice(0, 2).map((tag) => (
          <span className="text-xs text-slate-400" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div className="relative mt-8 aspect-video overflow-hidden rounded-xl2 bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-brand-cyan/20">
        {post.coverImageUrl ? (
          <Image
            alt={post.title}
            className="object-cover"
            fill
            blurDataURL={coverBlur}
            placeholder={coverBlur ? 'blur' : 'empty'}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            src={post.coverImageUrl}
          />
        ) : null}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          aria-label="Copy article link"
          className="glass-panel relative flex size-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-brand-cyan"
          onClick={copy}
          type="button"
        >
          <Link2 className="size-4" />
          {copied ? (
            <span
              className="absolute right-0 top-11 whitespace-nowrap text-xs text-brand-cyan"
              role="status"
            >
              Copied!
            </span>
          ) : null}
        </button>
        <a
          aria-label="Share on Twitter"
          className="glass-panel flex size-11 items-center justify-center rounded-full"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter className="size-4" />
        </a>
        <a
          aria-label="Share on LinkedIn"
          className="glass-panel flex size-11 items-center justify-center rounded-full"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className="size-4" />
        </a>
      </div>
    </motion.header>
  );
}
