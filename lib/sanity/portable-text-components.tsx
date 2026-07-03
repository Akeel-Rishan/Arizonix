import type { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

import { sanityImage } from '@/lib/sanity/image';

export const portableTextComponents: PortableTextComponents = {
  block: { h2: ({ children }) => <h2>{children}</h2>, h3: ({ children }) => <h3>{children}</h3>, h4: ({ children }) => <h4>{children}</h4>, blockquote: ({ children }) => <blockquote>{children}</blockquote>, normal: ({ children }) => <p>{children}</p> },
  marks: { strong: ({ children }) => <strong>{children}</strong>, em: ({ children }) => <em>{children}</em>, link: ({ children, value }) => <a href={typeof value?.href === 'string' ? value.href : '#'} rel="noopener noreferrer">{children}</a> },
  types: { image: ({ value }) => <Image alt={typeof value.alt === 'string' ? value.alt : 'Service content illustration'} className="h-auto w-full" height={700} sizes="(max-width: 1024px) 100vw, 800px" src={sanityImage(value, { width: 1200, quality: 85 })} width={1200} />, code: ({ value }) => <pre><code>{typeof value.code === 'string' ? value.code : ''}</code></pre> },
};
