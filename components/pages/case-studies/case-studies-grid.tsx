import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { CaseStudyCard } from '@/components/pages/case-studies/case-study-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityCaseStudy } from '@/lib/sanity/types';
export function CaseStudiesGrid({ caseStudies }: { caseStudies: SanityCaseStudy[] }) { return <Section><Container>{caseStudies.length ? <MotionStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{caseStudies.map((study) => <MotionItem className="h-full" key={study.slug}><CaseStudyCard coverImageUrl={study.coverImage ? sanityImage(study.coverImage, { width: 800, quality: 85 }) : undefined} study={study} /></MotionItem>)}</MotionStagger> : <div className="py-20 text-center"><h2 className="text-2xl font-bold text-white">Case studies are being prepared.</h2><p className="mt-3 text-slate-400">In the meantime, explore our portfolio for project previews.</p><Button className="mt-6" href="/portfolio">Explore Portfolio</Button></div>}</Container></Section>; }
