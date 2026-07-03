import { groq } from 'next-sanity';

/** Fetches every service in configured display order. */
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id, name, "slug": slug.current, shortDescription, description, icon, featured, order
}`;

/** Fetches homepage-featured services in configured display order. */
export const featuredServicesQuery = groq`*[_type == "service" && featured == true] | order(order asc) {
  _id, name, "slug": slug.current, shortDescription, description, icon
}`;

/** Fetches every portfolio project in configured display order. */
export const portfolioProjectsQuery = groq`*[_type == "portfolioProject"] | order(order asc) {
  _id, title, "slug": slug.current, category, featured, tags, challenge, solution,
  results, device, mainImage, screenshots, testimonial, fullCaseStudy, seo
}`;

/** Fetches homepage-featured portfolio projects in configured display order. */
export const featuredProjectsQuery = groq`*[_type == "portfolioProject" && featured == true] | order(order asc) {
  _id, title, "slug": slug.current, category, tags, challenge, solution,
  results, device, mainImage, testimonial
}`;

/** Fetches all testimonials in configured display order. */
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id, name, role, company, industry, avatar, rating, quote, project,
  result, color, featured
}`;

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc) {
  _id, name, role, department, photo, bio, featured, order, social
}`;

/** Fetches homepage FAQ items grouped by category and display order. */
export const faqItemsQuery = groq`*[_type == "faqItem" && featured == true] | order(category asc, order asc) {
  _id, question, answer, category, order
}`;

/** Fetches every industry in configured display order. */
export const industriesQuery = groq`*[_type == "industry"] | order(order asc) {
  _id, name, "slug": slug.current, description, icon, stat, color, order
}`;

/** Fetches all blog post summaries, newest first. */
export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt,
  author, categories, tags, readingTime, featured
}`;

/** Fetches at most three featured blog post summaries, newest first. */
export const featuredBlogPostsQuery = groq`*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt,
  author, categories, readingTime
}`;

/** Fetches the singleton global site settings document. */
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName, siteTagline, defaultSeo, contactInfo, socialLinks, announcementBanner
}`;

/** Fetches one service by the required $slug parameter. */
export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id, name, "slug": slug.current, shortDescription, description, icon,
  fullPageContent, seo
}`;

/** Fetches one portfolio project by the required $slug parameter. */
export const projectBySlugQuery = groq`*[_type == "portfolioProject" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, category, tags, challenge, solution,
  results, mainImage, screenshots, device, testimonial, fullCaseStudy, seo
}`;

export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, client, industry, summary,
  coverImage, publishedAt, featured
}`;

export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, client, industry, summary,
  coverImage, publishedAt, featured, content,
  relatedProject->{title, "slug": slug.current, category, tags, results}, seo
}`;

/** Fetches one complete blog post by the required $slug parameter. */
export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt, updatedAt,
  author, categories, tags, readingTime, content, seo
}`;
