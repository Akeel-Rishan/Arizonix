import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { portfolioProjects, type PortfolioColor, type PortfolioProject } from '@/lib/portfolio-data';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityPortfolioProject } from '@/lib/sanity/types';
const categoryColor = (category: string): PortfolioColor => category === 'Healthcare' ? 'cyan' : category === 'E-commerce' ? 'purple' : 'blue';
export function PortfolioPreview({ projects }: { projects: SanityPortfolioProject[] }) {
 const items: PortfolioProject[] = projects.length ? projects.map((p) => ({ id: p.slug, title: p.title, category: p.category, categoryColor: categoryColor(p.category), tags: p.tags, challenge: p.challenge, solution: p.solution, results: p.results, device: p.device, mockupBgColor: categoryColor(p.category), testimonial: p.testimonial ?? { quote: '', author: '', role: '' }, mainImageUrl: p.mainImage ? sanityImage(p.mainImage, { width: 800, quality: 85 }) : null, testimonialAvatarUrl: p.testimonial?.avatar ? sanityImage(p.testimonial.avatar, { width: 100, quality: 90 }) : null })) : portfolioProjects;
 return <Section id="portfolio"><Container><SectionHeading description="We don't just build software — we engineer outcomes. Every project is measured by the business impact it delivers." eyebrow="OUR WORK" title={<>Projects That Drive <span className="text-gradient">Real Results</span></>} /><PortfolioGrid projects={items} /><div className="mt-10 flex justify-center"><Link className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white" href="/portfolio">View Full Portfolio <ArrowRight className="size-4" /></Link></div></Container></Section>;
}
