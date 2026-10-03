import type { ReactNode } from 'react';

import { LegalHero } from './legal-hero';
export function LegalLayout({
  children,
  intro,
  lastUpdated,
  title,
}: {
  children: ReactNode;
  intro: string;
  lastUpdated: string;
  title: string;
}) {
  return (
    <div>
      <div className="container mx-auto max-w-5xl px-4 pb-24">
        <LegalHero intro={intro} lastUpdated={lastUpdated} title={title} />
        {children}
      </div>
    </div>
  );
}
