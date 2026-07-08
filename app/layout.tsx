import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import { CookieConsent } from '@/components/ui/cookie-consent';
import CursorGlow from '@/components/ui/cursor-glow';
import { PageTransition } from '@/components/ui/page-transition';
import { getSiteSettings } from '@/lib/sanity/fetch';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arizonix',
  description: 'Premium AI & Software Engineering Solutions',
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
    <html lang="en">
      <body className={inter.variable}>
        <AnnouncementBanner banner={siteSettings?.announcementBanner ?? null} />
        <CursorGlow />
        <Header />
        <div className="pt-20">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
