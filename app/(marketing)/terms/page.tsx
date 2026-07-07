import type { Metadata } from 'next';
import {
  LegalContent,
  type LegalSection,
} from '@/components/pages/legal/legal-content';
import { LegalLayout } from '@/components/pages/legal/legal-layout';
export const metadata: Metadata = {
  title: 'Terms of Service — Arizonix',
  description: 'The terms governing use of the Arizonix website and services.',
  robots: { index: true, follow: false },
};
export const revalidate = 86400;
// LEGAL NOTE: Review this content with a qualified lawyer before launch. Placeholder content only.
const data: [string, string][] = [
  ['acceptance', 'Acceptance of Terms'],
  ['services', 'Description of Services'],
  ['website-use', 'Website Use'],
  ['intellectual-property', 'Intellectual Property'],
  ['client-engagements', 'Client Engagements'],
  ['payment', 'Payment Terms'],
  ['confidentiality', 'Confidentiality'],
  ['warranties', 'Warranties'],
  ['limitation', 'Limitation of Liability'],
  ['indemnification', 'Indemnification'],
  ['termination', 'Termination'],
  ['governing-law', 'Governing Law'],
  ['contact', 'Contact'],
];
const sections: LegalSection[] = data.map(([id, title]) => ({
  id,
  title,
  body: [
    (
      {
        acceptance:
          'By accessing arizonix.com or engaging our services, you agree to these terms.',
        services:
          'Arizonix provides software development, AI automation, design, and consulting. Individual projects are governed by separate statements of work.',
        'website-use':
          'You may use this website lawfully. Scraping, malicious access, disruption, and attempts to compromise systems are prohibited.',
        'intellectual-property':
          'Website content belongs to Arizonix. Client deliverables transfer according to the applicable agreement after full payment.',
        'client-engagements':
          'Scope, responsibilities, milestones, acceptance criteria, and delivery terms are defined in each signed statement of work.',
        payment:
          'Fees and payment schedules are defined in project agreements. Late or unpaid invoices may pause delivery.',
        confidentiality:
          'Each party will protect confidential information and use it only for the agreed business purpose.',
        warranties:
          'Services are provided with reasonable professional care. Additional warranties, if any, appear in the applicable agreement.',
        limitation:
          'To the maximum extent permitted by law, liability is limited to fees paid under the relevant engagement.',
        indemnification:
          'Each party remains responsible for claims arising from its own unlawful actions or material breach.',
        termination:
          'Engagements may be terminated under the conditions in the applicable statement of work. Accrued payment obligations survive termination.',
        'governing-law':
          'The governing law and dispute process will be specified in the applicable client agreement.',
        contact:
          'Questions about these terms may be sent to legal@arizonix.com.',
      } as Record<string, string>
    )[id],
  ],
}));
export default function TermsPage() {
  return (
    <LegalLayout
      intro="These terms govern use of our website and professional services."
      title="Terms of Service"
    >
      <LegalContent sections={sections} />
    </LegalLayout>
  );
}
