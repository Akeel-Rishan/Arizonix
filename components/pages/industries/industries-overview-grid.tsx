import { HelpCircle } from 'lucide-react';

import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { IndustryOverviewCard } from '@/components/pages/industries/industry-overview-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { industryDetailData } from '@/lib/industry-detail-data';
import type { SanityIndustry } from '@/lib/sanity/types';
export function IndustriesOverviewGrid({ industries }: { industries: SanityIndustry[] }) { return <Section id="industries-grid"><Container><MotionStagger className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">{industries.map((industry) => <MotionItem className="h-full" key={industry.slug}><IndustryOverviewCard detail={industryDetailData[industry.slug]} industry={industry} /></MotionItem>)}</MotionStagger><div className="glass-panel mx-auto mt-16 max-w-2xl rounded-xl2 p-8 text-center"><HelpCircle className="mx-auto size-8 text-brand-blue" /><h2 className="mt-4 text-xl font-bold text-white">Don&apos;t see your industry?</h2><p className="mt-3 text-sm leading-6 text-slate-400">We&apos;ve built software for industries not listed here. Our engineering principles apply universally — the domain knowledge is something we acquire through deep collaboration with your team.</p><Button className="mt-6" href="/contact">Tell Us About Your Industry</Button></div></Container></Section>; }
