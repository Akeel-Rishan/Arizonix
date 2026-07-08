import Link from 'next/link';

import type { SanityAnnouncementBanner } from '@/lib/sanity/types';
export function AnnouncementBanner({
  banner,
}: {
  banner: SanityAnnouncementBanner | null;
}) {
  if (!banner?.enabled) return null;
  return (
    <aside
      aria-live="polite"
      className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-4 py-2 text-center text-sm font-medium text-white"
    >
      {banner.message}
      {banner.link ? (
        <>
          {' '}
          <Link className="underline" href={banner.link}>
            {banner.linkText ?? 'Learn more'}
          </Link>
        </>
      ) : null}
    </aside>
  );
}
