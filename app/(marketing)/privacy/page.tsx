import type { Metadata } from 'next';

import {
  LegalContent,
  type LegalSection,
} from '@/components/pages/legal/legal-content';
import { LegalLayout } from '@/components/pages/legal/legal-layout';
export const metadata: Metadata = {
  title: 'Privacy Policy — Arizonix',
  description:
    'How Arizonix collects, uses, and protects your personal information.',
  robots: { index: true, follow: false },
};
export const revalidate = 86400;
// LEGAL NOTE: Review this content with a qualified lawyer before launch. Placeholder content only.
const sections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: [
      'Arizonix (“we,” “us,” or “our”) operates arizonix.com and provides AI automation and software engineering services. This policy explains how we collect, use, disclose, and safeguard information.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly and limited technical data generated when you use our website.',
    ],
    bullets: [
      'Name, email, company, phone number, and project details',
      'Newsletter subscription email address',
      'IP address, browser type, pages visited, and analytics events',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: [
      'We use information to respond to inquiries, deliver services and proposals, send communications you requested, improve our website, and comply with legal obligations.',
    ],
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    body: [
      'We do not sell, trade, or rent personal information. We may share necessary information with confidential service providers including Resend, Sanity, Vercel, Upstash, and analytics providers.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    body: [
      'We use HTTPS encryption, secure infrastructure, and access controls. No internet transmission or storage method can be guaranteed completely secure.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: [
      'Depending on your location, you may request access, correction, deletion, portability, or restriction of processing. Email privacy@arizonix.com to exercise these rights.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: [
      'We use essential cookies and may use analytics or preference cookies with consent. You can decline optional cookies through our consent banner or browser settings.',
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    body: [
      'We retain inquiry data only while needed for business and legal purposes, subscriber data until unsubscribe, and analytics according to provider retention settings.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    body: [
      'Our services are not directed to children under 13 and we do not knowingly collect their personal information.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this policy and will post the revised date prominently on this page.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [
      'Questions or privacy requests can be sent to privacy@arizonix.com.',
    ],
  },
];
export default function PrivacyPage() {
  return (
    <LegalLayout
      intro="This policy explains what information we collect and how we protect it."
      title="Privacy Policy"
    >
      <LegalContent sections={sections} />
    </LegalLayout>
  );
}
