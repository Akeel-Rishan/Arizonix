import type { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

import { sanityImage } from '@/lib/sanity/image';
import type { SanityBlock } from '@/lib/sanity/types';
import { extractText, slugify } from '@/lib/utils';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2 id={slugify(extractText(value as unknown as SanityBlock))}>{children}</h2>
    ),
    h3: ({ children, value }) => (
      <h3 id={slugify(extractText(value as unknown as SanityBlock))}>{children}</h3>
    ),
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={typeof value?.href === 'string' ? value.href : '#'}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure>
        <Image
          alt={typeof value.alt === 'string' ? value.alt : 'Blog article image'}
          className="h-auto w-full"
          height={700}
          sizes="(max-width: 1024px) 100vw, 800px"
          src={sanityImage(value, { width: 1200, quality: 85 })}
          width={1200}
        />
        {typeof value.alt === 'string' ? (
          <figcaption className="text-center text-sm italic text-slate-500">
            {value.alt}
          </figcaption>
        ) : null}
      </figure>
    ),
    codeBlock: ({ value }) => (
      <pre
        aria-label="Code example"
        data-language={
          typeof value.language === 'string' ? value.language : 'text'
        }
      >
        {typeof value.filename === 'string' ? (
          <span className="mb-4 block text-xs text-slate-500">
            {value.filename}
          </span>
        ) : null}
        <code
          className={`language-${typeof value.language === 'string' ? value.language : 'text'}`}
        >
          {typeof value.code === 'string' ? value.code : ''}
        </code>
      </pre>
    ),
    code: ({ value }) => (
      <pre aria-label="Code example">
        <code>{typeof value.code === 'string' ? value.code : ''}</code>
      </pre>
    ),
  },
};
