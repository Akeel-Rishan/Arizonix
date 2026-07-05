'use client';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import { useEffect, useRef } from 'react';

import { BlogNewsletterCTA } from './blog-newsletter-cta';

import { ReadingProgress } from '@/components/ui/reading-progress';
import { portableTextComponents } from '@/lib/sanity/portable-text-components';
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('python', python);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('typescript', typescript);
export function BlogPostContent({ content }: { content: PortableTextBlock[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current
      ?.querySelectorAll<HTMLElement>('pre code')
      .forEach((element) => hljs.highlightElement(element));
  }, [content]);
  return (
    <>
      <ReadingProgress />
      <div className="blog-prose cms-prose" ref={ref}>
        {content.length ? (
          <PortableText components={portableTextComponents} value={content} />
        ) : (
          <p>More details are coming soon.</p>
        )}
      </div>
      {/* Fixed placement keeps the CTA predictable while preserving Portable Text rendering. */}
      <BlogNewsletterCTA />
    </>
  );
}
