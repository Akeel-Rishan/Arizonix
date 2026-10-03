import type { Metadata } from 'next';

import { LegalLayout } from '@/components/pages/legal/legal-layout';
import { PrivacyContent } from '@/lib/legal/privacy-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/privacy' },
  title: 'Privacy Policy',
  description:
    'How Arizonix collects, uses, retains, and protects personal information.',
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

export default function PrivacyPage() {
  return (
    <LegalLayout
      intro="This notice explains what information we collect, why we use it, and the choices and rights available to you."
      lastUpdated="October 3, 2026"
      title="Privacy Policy"
    >
      <PrivacyContent />
    </LegalLayout>
  );
}
