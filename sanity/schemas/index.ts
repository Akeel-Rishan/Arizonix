import blogPost from '@/sanity/schemas/blog-post';
import caseStudy from '@/sanity/schemas/case-study';
import faqItem from '@/sanity/schemas/faq-item';
import industry from '@/sanity/schemas/industry';
import portfolioProject from '@/sanity/schemas/portfolio-project';
import service from '@/sanity/schemas/service';
import siteSettings from '@/sanity/schemas/site-settings';
import teamMember from '@/sanity/schemas/team-member';
import testimonial from '@/sanity/schemas/testimonial';

export const schemaTypes = [
  service,
  portfolioProject,
  caseStudy,
  blogPost,
  testimonial,
  teamMember,
  faqItem,
  industry,
  siteSettings,
];
