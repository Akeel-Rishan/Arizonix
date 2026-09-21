import type { ReactNode } from 'react';

import { LegalHero } from './legal-hero';
export function LegalLayout({
  children,
  intro,
  title,
}: {
  children: ReactNode;
  intro: string;
  title: string;
}) {
  return (
    <div>
      <div className="container mx-auto max-w-5xl px-4 pb-24">
        <LegalHero intro={intro} lastUpdated="July 5, 2026" title={title} />
        {children}
      </div>
    </div>
  );
}
