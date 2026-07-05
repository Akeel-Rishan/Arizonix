import { clsx, type ClassValue } from 'clsx';
import Link from 'next/link';
import { createElement, Fragment, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { FAQItem } from '@/lib/faq-data';
import type { SanityBlock } from '@/lib/sanity/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

export function extractText(block: SanityBlock): string {
  return block.children?.map((child) => child.text ?? '').join('') ?? '';
}

export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return '';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

export function parseMetric(
  metric: string,
): { value: number; suffix: string } | { static: string } {
  const match = metric.match(/^(\d+\.?\d*)(.*?)$/);
  return match
    ? { value: Number(match[1]), suffix: match[2] }
    : { static: metric };
}

export function renderAnswerWithLinks(
  answer: string,
  links: FAQItem['links'] = [],
): ReactNode {
  if (links.length === 0) return answer;

  const parts: ReactNode[] = [];
  let cursor = 0;

  links.forEach((link, index) => {
    const phraseStart = answer.indexOf(link.phrase, cursor);

    if (phraseStart === -1) return;
    if (phraseStart > cursor) parts.push(answer.slice(cursor, phraseStart));

    parts.push(
      createElement(
        Link,
        {
          className:
            'font-medium text-brand-blue underline decoration-brand-blue/40 underline-offset-4 transition hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
          href: link.href,
          key: `${link.phrase}-${index}`,
        },
        link.phrase,
      ),
    );
    cursor = phraseStart + link.phrase.length;
  });

  if (cursor < answer.length) parts.push(answer.slice(cursor));
  return createElement(Fragment, null, ...parts);
}
