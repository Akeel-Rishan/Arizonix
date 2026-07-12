import { SEO_CONFIG } from '@/lib/seo/seo-config';
type Crumb = { name: string; url: string };
export function buildOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.organization.name,
    legalName: SEO_CONFIG.organization.legalName,
    url: SEO_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SEO_CONFIG.siteUrl}/#logo`,
      url: SEO_CONFIG.organization.logo,
      contentUrl: SEO_CONFIG.organization.logo,
      width: 400,
      height: 100,
      caption: 'Arizonix',
    },
    image: { '@type': 'ImageObject', url: SEO_CONFIG.organization.image },
    description: SEO_CONFIG.siteDescription,
    email: SEO_CONFIG.organization.email,
    telephone: SEO_CONFIG.organization.telephone,
    address: { '@type': 'PostalAddress', ...SEO_CONFIG.organization.address },
    foundingDate: SEO_CONFIG.organization.foundingDate,
    sameAs: SEO_CONFIG.socialProfiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: SEO_CONFIG.organization.email,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@arizonix.com',
        availableLanguage: ['English'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering & AI Services',
      itemListElement: [
        'AI Automation Solutions',
        'Web Application Development',
        'Mobile Application Development',
        'Enterprise Software Development',
        'AI Agents & Chatbots',
        'Cloud Solutions',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}
export function buildWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.siteDescription,
    publisher: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
export function buildBreadcrumbSchema(items: Crumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}
export function buildServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  url?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_CONFIG.siteUrl}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    url: service.url ?? `${SEO_CONFIG.siteUrl}/services/${service.slug}`,
    provider: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    serviceType: service.name,
    areaServed: { '@type': 'Place', name: 'Worldwide' },
  };
}
export function buildArticleSchema(post: {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
  coverImageUrl?: string | null;
  authorName?: string;
  categories?: string[];
  tags?: string[];
  readingTime?: number;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SEO_CONFIG.siteUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt ?? '',
    image: post.coverImageUrl
      ? {
          '@type': 'ImageObject',
          url: post.coverImageUrl,
          width: 1200,
          height: 630,
        }
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: post.authorName
      ? { '@type': 'Person', name: post.authorName }
      : { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    publisher: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SEO_CONFIG.siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
    articleSection: post.categories?.[0] ?? 'Technology',
    wordCount: post.readingTime ? post.readingTime * 200 : undefined,
  };
}
export function buildFAQSchema(
  items: Array<{ question: string; answer: string }>,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
export function buildWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Crumb[];
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SEO_CONFIG.siteUrl}${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: `${SEO_CONFIG.siteUrl}${page.url}`,
    isPartOf: { '@id': `${SEO_CONFIG.siteUrl}/#website` },
    about: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    breadcrumb: page.breadcrumbs
      ? buildBreadcrumbSchema(page.breadcrumbs)
      : undefined,
  };
}
export function buildJobPostingSchema(position: {
  title: string;
  description: string;
  department: string;
  skills: string[];
  postedDate: string;
}): object {
  const valid = new Date(
    new Date(position.postedDate).getTime() + 365 * 86400000,
  )
    .toISOString()
    .split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: position.title,
    description: position.description,
    datePosted: position.postedDate,
    validThrough: valid,
    employmentType: 'FULL_TIME',
    hiringOrganization: { '@id': `${SEO_CONFIG.siteUrl}/#organization` },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' },
    skills: position.skills.join(', '),
    occupationalCategory: position.department,
    applicationContact: {
      '@type': 'ContactPoint',
      contactType: 'Human Resources',
      email: 'careers@arizonix.com',
    },
  };
}
export function buildLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: SEO_CONFIG.organization.name,
    image: SEO_CONFIG.organization.image,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.organization.telephone,
    email: SEO_CONFIG.organization.email,
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$',
    sameAs: SEO_CONFIG.socialProfiles,
  };
}
