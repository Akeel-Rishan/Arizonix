import type { Metadata } from 'next';

import { SEO_CONFIG } from '@/lib/seo/seo-config';
export interface BuildMetadataOptions {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
}
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const type = options.type ?? 'website';
  const absoluteUrl = `${SEO_CONFIG.siteUrl}${options.url}`;
  const image = options.ogImage ?? `${SEO_CONFIG.siteUrl}/opengraph-image`;
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    authors: options.authors?.map((name) => ({ name })),
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: options.canonical ?? absoluteUrl,
      languages: {
        'en-US': options.canonical ?? absoluteUrl,
        'x-default': options.canonical ?? absoluteUrl,
      },
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: absoluteUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type,
      images: [
        {
          url: image,
          width: SEO_CONFIG.ogImage.width,
          height: SEO_CONFIG.ogImage.height,
          alt: options.title,
          type: SEO_CONFIG.ogImage.type,
        },
      ],
      ...(type === 'article'
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime ?? options.publishedTime,
            authors: options.authors ?? [SEO_CONFIG.organization.name],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      title: options.title,
      description: options.description,
      images: [image],
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: { 'theme-color': SEO_CONFIG.themeColor },
  };
}
