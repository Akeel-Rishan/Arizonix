'use client';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { useEffect, useRef } from 'react';

import { BlogNewsletterCTA } from './blog-newsletter-cta';

import { ReadingProgress } from '@/components/ui/reading-progress';
import { portableTextComponents } from '@/lib/sanity/portable-text-components';
export function BlogPostContent({ content }: { content: PortableTextBlock[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/bash'),
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/json'),
      import('highlight.js/lib/languages/python'),
      import('highlight.js/lib/languages/sql'),
      import('highlight.js/lib/languages/typescript'),
    ]).then(([core, bash, javascript, json, python, sql, typescript]) => {
      if (cancelled) return;
      const highlighter = core.default;
      highlighter.registerLanguage('bash', bash.default);
      highlighter.registerLanguage('javascript', javascript.default);
      highlighter.registerLanguage('json', json.default);
      highlighter.registerLanguage('python', python.default);
      highlighter.registerLanguage('sql', sql.default);
      highlighter.registerLanguage('typescript', typescript.default);
      ref.current
        ?.querySelectorAll<HTMLElement>('pre code')
        .forEach((element) => highlighter.highlightElement(element));
    });
    return () => {
      cancelled = true;
    };
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
