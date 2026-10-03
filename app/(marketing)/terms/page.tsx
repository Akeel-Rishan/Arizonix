import type { Metadata } from 'next';

import {
  LegalContent,
  type LegalSection,
} from '@/components/pages/legal/legal-content';
import { LegalLayout } from '@/components/pages/legal/legal-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/terms' },
  title: 'Terms of Service',
  description: 'The terms governing use of the Arizonix website and services.',
  robots: { index: false, follow: false },
};

export const revalidate = 86400;

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: [
      'These Terms of Service (“Terms”) are an agreement between you and Arizonix Technologies (“Arizonix,” “we,” “us,” or “our”). By accessing arizonix.com, submitting an inquiry, or using our professional services, you agree to these Terms. If you engage us under a signed proposal, statement of work, or other written agreement, that agreement controls where it conflicts with these website Terms.',
      'You must have legal capacity to enter into these Terms. If you use the website or engage our services for an organization, you represent that you have authority to bind that organization.',
    ],
  },
  {
    id: 'services',
    title: 'Services and Project Agreements',
    body: [
      'Arizonix provides software engineering, web and mobile application development, AI automation, product design, systems integration, and related consulting. Website descriptions are general information and are not a binding offer or guarantee of availability, price, delivery date, or result.',
      'Each client project must be described in a written proposal or statement of work covering its scope, deliverables, assumptions, responsibilities, milestones, acceptance criteria, schedule, and fees. Changes to scope or assumptions may require a written change order, revised delivery schedule, and additional fees.',
    ],
  },
  {
    id: 'website-use',
    title: 'Acceptable Website Use',
    body: [
      'You may use this website only for lawful purposes. You may not attempt unauthorized access, introduce malicious code, interfere with website operation, abuse forms or APIs, scrape the website in a manner that creates an unreasonable load, impersonate another person, or use the website to violate another person’s rights.',
      'We may restrict access when reasonably necessary to protect the website, our systems, our clients, or other users.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    body: [
      'Clients must provide timely access to required information, content, personnel, systems, accounts, approvals, and feedback. Clients are responsible for ensuring that materials and instructions they provide are accurate, lawful, and do not infringe third-party rights.',
      'A delay in client inputs or approvals may extend project dates. Arizonix is not responsible for delays, defects, or additional work caused by incomplete or inaccurate client materials, unavailable third-party services, or changes requested after approval.',
    ],
  },
  {
    id: 'payment',
    title: 'Fees and Payment Terms',
    body: [
      'Unless a signed project agreement states otherwise, projects are billed on a milestone basis: 30% at project start, 40% at the agreed development milestone, and 30% at delivery. Payment terms are net 14 days from the invoice date.',
      'Fees are quoted in United States dollars unless otherwise stated and exclude applicable taxes, bank charges, and third-party costs. Undisputed overdue invoices may result in paused work, withheld delivery, revised project dates, and reasonable collection costs. The client must notify Arizonix of a good-faith invoice dispute before the payment due date.',
    ],
  },
  {
    id: 'acceptance-and-changes',
    title: 'Delivery, Acceptance, and Changes',
    body: [
      'Deliverables are reviewed against the acceptance criteria in the applicable project agreement. If no review period is stated there, the client must report material non-conformities within 10 business days after delivery. Arizonix will use reasonable efforts to correct verified non-conformities within the agreed scope.',
      'Requests outside the agreed scope, including new features, changed integrations, or revisions after approval, will be estimated separately and require written authorization before work begins.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'Arizonix retains ownership of its pre-existing materials, development tools, processes, know-how, reusable components, and general-purpose code. Subject to full payment of all applicable invoices, the client receives ownership of the custom deliverables identified as client-owned in the project agreement.',
      'Third-party and open-source materials remain subject to their respective licenses. Unless the project agreement says otherwise, Arizonix may use general skills, ideas, and know-how retained in unaided memory, provided that doing so does not disclose client confidential information or reproduce client-owned deliverables.',
      'The Arizonix name, logos, website design, and website content may not be copied or used without written permission, except for ordinary browsing and linking to publicly available pages.',
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    body: [
      'Each party must protect the other party’s non-public business, technical, and commercial information using reasonable care and use it only for the relevant engagement. Confidentiality obligations do not apply to information that is public without breach, already lawfully known, independently developed, or lawfully received from another source.',
      'A party may disclose confidential information when legally required, provided it gives notice where permitted and discloses only what is required.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    body: [
      'Projects may depend on hosting platforms, APIs, software libraries, payment providers, AI services, app stores, or other third-party services. Their terms, pricing, availability, and data practices are controlled by their providers and may change. Unless expressly included in a project agreement, the client is responsible for third-party accounts and fees.',
      'Arizonix is not responsible for outages, changes, suspension, or discontinuation of third-party services outside our reasonable control, but we will reasonably assist with mitigation when covered by the applicable project agreement.',
    ],
  },
  {
    id: 'warranties',
    title: 'Warranties and Disclaimers',
    body: [
      'Arizonix will perform professional services with reasonable care and skill. Any additional warranty or support period must be stated in the applicable project agreement.',
      'To the maximum extent permitted by law, the website and any services not covered by an express written warranty are provided “as is” and “as available.” We disclaim implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation. We do not guarantee particular revenue, savings, rankings, conversion rates, or other business outcomes.',
    ],
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, exemplary, punitive, or consequential loss, or for lost profits, revenue, business opportunities, goodwill, or data, arising from these Terms or an engagement, even if advised that such loss was possible.',
      'Our total aggregate liability for any claim arising from these Terms, the website, or professional services shall not exceed the amount paid by you to Arizonix in the 12 months preceding the event giving rise to the claim, or US$1,000, whichever is lower.',
      'Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability for fraud, fraudulent misrepresentation, wilful misconduct, or death or personal injury caused by negligence where applicable law prohibits that limitation.',
    ],
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: [
      'You will defend and indemnify Arizonix against third-party claims, damages, and reasonable costs arising from materials or instructions you provide, your unlawful use of deliverables, or your material breach of these Terms. Arizonix will promptly notify you of a covered claim and provide reasonable cooperation. This obligation does not apply to the extent a claim was caused by Arizonix’s breach or wilful misconduct.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension and Termination',
    body: [
      'Either party may terminate an engagement as permitted by its project agreement. If no termination provision is included, either party may terminate for a material breach that remains uncured 14 days after written notice. Arizonix may suspend work for overdue undisputed invoices, security risks, unlawful instructions, or a material client breach.',
      'On termination, the client must pay for work performed, approved expenses, and non-cancellable commitments through the termination date. Payment, confidentiality, intellectual property, liability, dispute, and other provisions intended by their nature to survive will remain effective.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Events Beyond Reasonable Control',
    body: [
      'Neither party is liable for delay or failure caused by events beyond its reasonable control, including natural disasters, war, civil unrest, widespread internet or utility failures, government action, labor disruption, or material failure of third-party infrastructure. The affected party must notify the other and take reasonable steps to reduce the impact.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Disputes',
    body: [
      'These Terms are governed by the laws of Sri Lanka, without regard to conflict-of-law principles. Any dispute that cannot be resolved through good-faith negotiation shall be submitted to the exclusive jurisdiction of the courts of Colombo, Sri Lanka.',
      'Nothing in these Terms prevents either party from seeking urgent injunctive or protective relief from a court of competent jurisdiction. Mandatory consumer protections that apply to you remain unaffected.',
    ],
  },
  {
    id: 'general',
    title: 'General Terms',
    body: [
      'If a provision is held unenforceable, it will be limited to the minimum extent necessary and the remaining provisions will continue. A failure to enforce a provision is not a waiver. You may not assign an engagement without our written consent; Arizonix may assign it as part of a merger, reorganization, or transfer of substantially all relevant business assets.',
      'These Terms and any applicable signed project agreement constitute the agreement between the parties on their subject matter and replace earlier discussions on that subject. Changes to a signed project agreement must be agreed in writing by authorized representatives.',
    ],
  },
  {
    id: 'updates',
    title: 'Changes to These Terms',
    body: [
      'Last updated: October 3, 2026. We may update these Terms by posting a revised version on this page. Material changes apply prospectively from the stated effective date and do not alter an existing signed project agreement unless agreed in writing.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [
      'Questions about these Terms may be sent to legal@arizonix.com. Arizonix Technologies is remote-first; contact us to request the appropriate legal correspondence address.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      intro="These terms govern use of our website and establish the default terms for professional services unless a signed project agreement says otherwise."
      lastUpdated="October 3, 2026"
      title="Terms of Service"
    >
      <LegalContent sections={sections} />
    </LegalLayout>
  );
}
