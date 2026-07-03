import type { Metadata } from 'next';

import { PortfolioCTA } from '@/components/pages/portfolio/portfolio-cta';
import { PortfolioGrid } from '@/components/pages/portfolio/portfolio-grid';
import { PortfolioHero } from '@/components/pages/portfolio/portfolio-hero';
import { portfolioProjects as fallback } from '@/lib/portfolio-data';
import type { PortfolioDisplayProject } from '@/lib/portfolio-display';
import { portfolioColor } from '@/lib/portfolio-display';
import { getPortfolioProjects } from '@/lib/sanity/fetch';
import { sanityImage } from '@/lib/sanity/image';
export const metadata: Metadata = { title: 'Portfolio — Real Projects, Real Results | Arizonix', description: "Explore Arizonix's portfolio of enterprise software, AI automation, mobile applications, and web platforms. Each project measured by the business outcomes it delivered.", openGraph: { title: 'Portfolio — Arizonix', description: 'Real projects. Measurable results. Explore how Arizonix has helped 40+ companies build software that drives growth.', type: 'website', url: 'https://arizonix.com/portfolio' } };
export const revalidate = 3600;
export default async function PortfolioPage() { const cms = await getPortfolioProjects().catch(() => []); const projects: PortfolioDisplayProject[] = cms.length ? cms.map((p) => ({ id: p._id, slug: p.slug, title: p.title, category: p.category, categoryColor: portfolioColor(p.category), tags: p.tags, challenge: p.challenge, solution: p.solution, results: p.results, device: p.device, mockupBgColor: portfolioColor(p.category), testimonial: p.testimonial, mainImageUrl: p.mainImage ? sanityImage(p.mainImage, { width: 900, quality: 85 }) : null })) : fallback.map((p) => ({ ...p, slug: p.id })); const data = [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Arizonix Portfolio', itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, description: p.challenge, url: `https://arizonix.com/portfolio/${p.slug}` })) }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arizonix.com' }, { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://arizonix.com/portfolio' }] }]; return <main><script dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} type="application/ld+json" /><PortfolioHero /><PortfolioGrid projects={projects} /><PortfolioCTA /></main>; }
