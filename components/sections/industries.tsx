import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { IndustriesGrid } from '@/components/sections/industries-grid';
import { IndustryCard } from '@/components/sections/industry-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { industries as staticIndustries, type IndustryColor } from '@/lib/industries-data';
import type { SanityIndustry } from '@/lib/sanity/types';
export interface IndustryDisplay { name: string; slug: string; description: string; iconName: string; stat: string; color: IndustryColor }
export function Industries({ industries }: { industries: SanityIndustry[] }) {
 const items: IndustryDisplay[] = industries.length ? industries.map((i) => ({ ...i, iconName: i.icon ?? 'Building2' })) : staticIndustries.map((i) => ({ ...i, iconName: i.icon.displayName ?? i.icon.name ?? 'Building2' }));
 return <Section id="industries"><Container><SectionHeading description="Arizonix designs practical AI and software systems around the realities of each market, combining domain understanding with engineering discipline across 12+ high-impact verticals." eyebrow="INDUSTRIES WE SERVE" title={<>Built For <span className="text-gradient">Every Industry</span> That Matters</>} /><IndustriesGrid>{items.map((industry) => <IndustryCard industry={industry} key={industry.slug} />)}</IndustriesGrid><div className="mt-10 flex justify-center"><Link className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white" href="/industries">Explore All Industries <ArrowRight className="size-4" /></Link></div></Container></Section>;
}
