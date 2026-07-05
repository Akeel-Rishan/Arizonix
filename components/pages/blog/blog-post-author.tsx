'use client';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

import type { SanityBlogPost } from '@/lib/sanity/types';
import { getInitials } from '@/lib/utils';
export function BlogPostAuthor({
  author,
  avatarUrl,
}: {
  author: SanityBlogPost['author'];
  avatarUrl: string | null;
}) {
  const name = author?.name ?? 'Arizonix';
  return (
    <div className="glass-panel rounded-xl2 p-5">
      {avatarUrl ? (
        <Image
          alt={name}
          className="rounded-full"
          height={60}
          src={avatarUrl}
          width={60}
        />
      ) : (
        <span className="size-15 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-bold text-white">
          {getInitials(name)}
        </span>
      )}
      <h3 className="mt-3 font-semibold text-white">{name}</h3>
      <p className="mt-1 line-clamp-3 text-xs leading-5 text-slate-400">
        {author?.bio ??
          'Written by the engineering and product team at Arizonix.'}
      </p>
      <div className="mt-3 flex gap-2">
        {author?.social?.linkedin ? (
          <a
            aria-label={`${name} on LinkedIn`}
            href={author.social.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="size-4" />
          </a>
        ) : null}
        {author?.social?.github ? (
          <a
            aria-label={`${name} on GitHub`}
            href={author.social.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="size-4" />
          </a>
        ) : null}
        {author?.social?.twitter ? (
          <a
            aria-label={`${name} on Twitter`}
            href={author.social.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className="size-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
