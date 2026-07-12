import type { Metadata } from 'next';

import { ContactFAQStrip } from '@/components/pages/contact/contact-faq-strip';
import { ContactFormSection } from '@/components/pages/contact/contact-form-section';
import { ContactHero } from '@/components/pages/contact/contact-hero';
import { ContactInfoSection } from '@/components/pages/contact/contact-info-section';
export const metadata: Metadata = {
  alternates: { canonical: 'https://arizonix.com/contact' },
  title: 'Contact Arizonix — Start Your Project',
  description:
    "Get in touch with Arizonix. Tell us about your project and we'll respond within 48 hours with a detailed proposal.",
  openGraph: {
    title: 'Contact Arizonix — Start Your Project Today',
    description:
      'Get a detailed proposal within 48 hours. Free consultation, no commitment.',
    type: 'website',
    url: 'https://arizonix.com/contact',
  },
};
export const revalidate = 86400;
export default function ContactPage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Arizonix',
      url: 'https://arizonix.com/contact',
      mainEntity: {
        '@type': 'Organization',
        name: 'Arizonix',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'hello@arizonix.com',
          availableLanguage: 'English',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://arizonix.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: 'https://arizonix.com/contact',
        },
      ],
    },
  ];
  return (
    <main>
      {schemas.map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <ContactHero />
      <div className="container mx-auto grid gap-10 px-4 pb-12 lg:grid-cols-[1fr_480px]">
        <ContactInfoSection />
        <ContactFormSection />
      </div>
      <ContactFAQStrip />
    </main>
  );
}
