export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: { _ref: string };
  hotspot?: Record<string, unknown>;
}

export interface SanityBlock {
  _type: 'block';
  [key: string]: unknown;
}

export interface SanitySEO {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface SanityService {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon?: string;
  featured: boolean;
  order: number;
  fullPageContent?: SanityBlock[];
  seo?: SanitySEO;
}

export interface SanityProjectResult {
  metric: string;
  label: string;
}

export interface SanityTestimonialQuote {
  quote: string;
  author: string;
  role: string;
  avatar?: SanityImage;
}

export interface SanityPortfolioProject {
  _id: string;
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  tags: string[];
  challenge: string;
  solution: string;
  results: SanityProjectResult[];
  device: 'desktop' | 'tablet' | 'mobile';
  mainImage?: SanityImage;
  screenshots?: SanityImage[];
  testimonial?: SanityTestimonialQuote;
  fullCaseStudy?: Array<SanityBlock | SanityImage>;
  seo?: SanitySEO;
}

export interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  industry?: string;
  summary?: string;
  coverImage?: SanityImage;
  publishedAt?: string;
  featured: boolean;
  content?: Array<SanityBlock | SanityImage | Record<string, unknown>>;
  relatedProject?: SanityPortfolioProject;
  seo?: SanitySEO;
}

export interface SanityCaseStudyFull
  extends Omit<SanityCaseStudy, 'relatedProject'> {
  relatedProject?: {
    title: string;
    slug: string;
    category: string;
    tags: string[];
    results: SanityProjectResult[];
  };
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar?: SanityImage;
  rating: number;
  quote: string;
  project: string;
  result: string;
  featured: boolean;
  color: 'blue' | 'purple' | 'cyan';
}

export interface SanityFAQItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface SanityIndustry {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  stat: string;
  color: 'blue' | 'purple' | 'cyan';
  order: number;
  fullPageContent?: SanityBlock[];
  seo?: SanitySEO;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: SanityImage;
  publishedAt: string;
  updatedAt?: string;
  author?: { name: string; avatar?: SanityImage; bio?: string };
  categories: string[];
  tags: string[];
  readingTime?: number;
  featured: boolean;
  content?: Array<SanityBlock | SanityImage>;
  seo?: SanitySEO;
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  department: string;
  photo?: SanityImage;
  bio?: string;
  featured: boolean;
  order: number;
  social?: { linkedin?: string; github?: string; twitter?: string };
}

export interface SanityContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  calendlyUrl?: string;
}

export interface SanitySocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface SanityAnnouncementBanner {
  enabled: boolean;
  message?: string;
  link?: string;
  linkText?: string;
}

export interface SanitySiteSettings {
  siteName: string;
  siteTagline?: string;
  defaultSeo?: SanitySEO;
  contactInfo?: SanityContactInfo;
  socialLinks?: SanitySocialLinks;
  announcementBanner?: SanityAnnouncementBanner;
}
