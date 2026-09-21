import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { PreconnectHints } from '@/components/head/preconnect-hints';
import { ClientEffects } from '@/components/layout/client-effects';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { MainContent } from '@/components/layout/main-content';
import { JsonLd } from '@/components/seo/json-ld';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import { SkipLink } from '@/components/ui/skip-link';
import { getSiteSettings } from '@/lib/sanity/fetch';
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/seo/schema-builder';
import { SEO_CONFIG } from '@/lib/seo/seo-config';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.siteDescription,
  applicationName: SEO_CONFIG.siteName,
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
    languages: { 'en-US': SEO_CONFIG.siteUrl, 'x-default': SEO_CONFIG.siteUrl },
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/images/arizonix-icon-logo-transparent-v2.png',
      },
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        sizes: '512x512',
        url: '/images/arizonix-icon-logo-transparent-v2.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.siteDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Arizonix — AI and Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SEO_CONFIG.twitterHandle,
    creator: SEO_CONFIG.twitterHandle,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.siteDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const siteSettings = await Promise.race([
    getSiteSettings().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 1500)),
  ]);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PreconnectHints />
      </head>
      <body className={inter.variable}>
        <SkipLink />
        <JsonLd
          id="global-schema"
          schema={[buildOrganizationSchema(), buildWebSiteSchema()]}
        />
        <AnnouncementBanner banner={siteSettings?.announcementBanner ?? null} />
        <Header />
        <div className="pt-20">
          <MainContent>{children}</MainContent>
        </div>
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
