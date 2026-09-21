'use client';
import { Link2, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

import { BlogPostAuthor } from './blog-post-author';

import type { SanityBlogPost, SanityBlock } from '@/lib/sanity/types';
import { extractText, slugify } from '@/lib/utils';
export function BlogPostSidebar({
  authorAvatarUrl,
  post,
}: {
  authorAvatarUrl: string | null;
  post: SanityBlogPost;
}) {
  const headings = (post.content ?? [])
    .filter(
      (item): item is SanityBlock =>
        item._type === 'block' && ['h2', 'h3'].includes(item.style ?? ''),
    )
    .map((item) => ({
      id: slugify(extractText(item)),
      text: extractText(item),
      level: item.style === 'h2' ? 2 : 3,
    }));
  const [active, setActive] = useState(headings[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: '-20% 0px -65%' },
    );
    headings.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [headings]);
  const url = `https://arizonix.com/blog/${post.slug}`;
  return (
    <aside className="sticky top-24 space-y-6">
      {headings.length ? (
        <nav aria-label="Table of contents">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            In this article
          </p>
          <ul className="space-y-2">
            {headings.map((item) => (
              <li className={item.level === 3 ? 'pl-3' : ''} key={item.id}>
                <a
                  aria-current={active === item.id ? 'true' : undefined}
                  className={
                    active === item.id
                      ? 'text-sm font-medium text-brand-blue'
                      : 'text-sm text-slate-400'
                  }
                  href={`#${item.id}`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <BlogPostAuthor author={post.author} avatarUrl={authorAvatarUrl} />
      <div>
        <p className="mb-3 text-xs uppercase text-slate-400">
          Share this article
        </p>
        <div className="flex gap-2">
          <button
            aria-label="Copy article link"
            className="glass-panel flex size-11 items-center justify-center rounded-full"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            type="button"
          >
            <Link2 className="size-4" />
          </button>
          <a
            aria-label="Share on Twitter"
            className="glass-panel flex size-11 items-center justify-center rounded-full"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
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
      </div>
      {post.tags.length ? (
        <div>
          <p className="mb-3 text-xs uppercase text-slate-400">Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                className="glass-panel rounded-full px-3 py-1 text-xs text-slate-400"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
