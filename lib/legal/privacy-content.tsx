import {
  LegalContent,
  type LegalSection,
} from '@/components/pages/legal/legal-content';

const privacySections: LegalSection[] = [
  {
    id: 'controller',
    title: 'Who Controls Your Data',
    body: [
      'Arizonix Technologies (referred to as “Arizonix,” “we,” “us,” or “our”) is the data controller responsible for the personal data described in this notice.',
    ],
    bullets: [
      'Legal name: Arizonix Technologies',
      'Registered address: Remote-first — contact us for legal address',
      'Privacy contact: privacy@arizonix.com',
    ],
  },
  {
    id: 'data-collected',
    title: 'Personal Data We Collect',
    body: [
      'We collect only the information needed to operate this website, respond to prospective clients, communicate with subscribers, and maintain the reliability and security of our services.',
    ],
    bullets: [
      'Contact form: your name, business email address, company name, phone number when provided, service and budget selections, referral source, and project description.',
      'Newsletter: your email address only.',
      'Analytics: page views and website interaction events collected through Google Analytics 4 only after you consent to analytics cookies.',
      'Error monitoring: anonymized or minimized technical error, device, browser, and diagnostic data processed through Sentry. We configure Sentry not to intentionally collect default personally identifiable information.',
      'Server logs: IP address, browser type, requested page, and request time. Routine access logs are ordinarily available for 7 days; security-related log records may be retained for up to 30 days.',
    ],
  },
  {
    id: 'purposes-and-legal-bases',
    title: 'Why We Use Your Data and Our Legal Bases',
    body: [
      'Where the GDPR or UK GDPR applies, we process personal data under the following Article 6 legal bases:',
    ],
    bullets: [
      'Contact inquiries — legitimate interests: responding to your inquiry, preparing a proposal, and taking steps toward a potential business relationship.',
      'Newsletter — consent: sending updates that you expressly opted in to receive. You may withdraw consent at any time by unsubscribing.',
      'Google Analytics 4 — consent: understanding website use only after you accept analytics cookies.',
      'Error monitoring and security logs — legitimate interests: diagnosing faults, preventing abuse, and protecting the availability and security of our website.',
    ],
  },
  {
    id: 'processors',
    title: 'Service Providers and Data Processors',
    body: [
      'We use the following service providers to operate the website. They process only the data needed to provide their services and are subject to their contractual and legal safeguards.',
    ],
    bullets: [
      'Vercel Inc. — website hosting and delivery in the United States and other locations; participates in the EU-US Data Privacy Framework.',
      'Sanity Inc. — content management services in the United States; its data processing terms incorporate the European Commission Standard Contractual Clauses.',
      'Resend (Plus Five Five, Inc.) — transactional email delivery in the United States; its data processing addendum incorporates Standard Contractual Clauses.',
      'Upstash Inc. — Redis data storage, with United States and European Union regions available depending on the database configuration.',
      'Sentry (Functional Software, Inc.) — error monitoring in the United States; its data processing terms provide contractual safeguards for international transfers, including Standard Contractual Clauses where applicable.',
      'Google LLC — Google Analytics 4 in the United States and other locations; participates in the EU-US Data Privacy Framework.',
    ],
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    body: [
      'When we transfer your data to processors outside the European Economic Area or the United Kingdom, we rely on Standard Contractual Clauses approved by the European Commission, the UK International Data Transfer Addendum, an applicable adequacy decision, or the EU-US Data Privacy Framework where applicable.',
    ],
  },
  {
    id: 'retention',
    title: 'How Long We Keep Your Data',
    body: [
      'We keep personal data only for the periods below, unless a longer period is required to establish, exercise, or defend legal claims or to comply with law.',
    ],
    bullets: [
      'Contact form submissions: 2 years from submission.',
      'Newsletter subscriber email addresses: until you unsubscribe or request deletion.',
      'Server and security logs: no longer than 30 days.',
      'Google Analytics 4 user-level and event-level data: 14 months.',
      'Sentry error logs: 90 days.',
    ],
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    body: [
      'Depending on where you live, you may have the right to access your personal data, correct inaccurate data, request deletion, restrict processing, receive portable data, or object to processing based on legitimate interests. Where processing relies on consent, you may withdraw that consent at any time without affecting earlier lawful processing.',
      'To exercise a right, email privacy@arizonix.com with “Data Subject Request” in the subject line. We may need to verify your identity before completing the request. We will respond within 30 days, unless applicable law permits an extension.',
      'If you are in the EEA or United Kingdom, you also have the right to lodge a complaint with the data protection supervisory authority in the country where you live or work, or where you believe an infringement occurred.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    body: [
      'Essential storage supports functions such as remembering your cookie preference and does not require consent where it is strictly necessary. Google Analytics 4 is loaded only after you give analytics consent through our cookie banner. You can decline or later withdraw optional consent through your browser storage controls.',
      'We do not use advertising, cross-site behavioral tracking, or targeted-advertising cookies, and we do not sell personal data.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    body: [
      'We use measures designed to protect personal data, including HTTPS encryption, access controls, environment-based secret management, and limited access to production systems. No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    body: [
      'Our website and professional services are intended for businesses and adults. They are not directed to children under 13, and we do not knowingly collect personal data from children. If you believe a child has provided personal data, contact privacy@arizonix.com so we can delete it.',
    ],
  },
  {
    id: 'updates',
    title: 'Changes to This Notice',
    body: [
      'Last updated: October 3, 2026. We will notify you of material changes via the email address on file or through a prominent notice on this page. The date at the top of this page will be updated whenever this notice changes.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'For questions about this notice or our handling of personal data, email privacy@arizonix.com.',
    ],
  },
  {
    id: 'legal-review',
    title: 'Legal Review Notice',
    body: [
      'This privacy notice was last reviewed by Arizonix Technologies on October 3, 2026. We recommend consulting a qualified privacy attorney for advice specific to your business.',
    ],
  },
];

export function PrivacyContent() {
  return <LegalContent sections={privacySections} />;
}
