import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import { CookieConsent } from '@/components/ui/cookie-consent';
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
  const siteSettings = await getSiteSettings().catch(() => null);
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AnnouncementBanner banner={siteSettings?.announcementBanner ?? null} />
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
