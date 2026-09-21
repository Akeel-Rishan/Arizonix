import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ServiceCard } from '@/components/sections/service-card';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { SanityService } from '@/lib/sanity/types';
import { services as staticServices } from '@/lib/services-data';

export interface ServiceDisplay { name: string; slug: string; shortDescription: string; description: string; iconName: string }
export function Services({ services }: { services: SanityService[] }) {
  const items: ServiceDisplay[] = services.length ? services.map((s) => ({ name: s.name, slug: s.slug, shortDescription: s.shortDescription, description: s.description, iconName: s.icon ?? 'Code2' })) : staticServices.map((s) => ({ ...s, iconName: s.icon.displayName ?? s.icon.name ?? 'Code2' }));
  const featured = items.slice(0, 6);
  const additional = items.slice(6);
  return <Section id="services"><Container><SectionHeading description="From strategy through delivery, Arizonix brings together software engineering and practical AI capabilities around the outcomes that matter most to your business." eyebrow="What We Do" title={<>Solutions Built For <span className="text-gradient">Growth</span></>} /><ServicesGrid>{featured.map((service) => <ServiceCard key={service.slug} service={service} />)}</ServicesGrid><div className="mt-12 text-center lg:mt-14"><p className="text-sm font-medium text-slate-400">Also available:</p><div className="mt-5 flex flex-wrap items-center justify-center gap-3">{additional.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><Badge variant="outline">{service.name}</Badge></Link>)}</div></div><div className="mt-10 flex justify-center"><Link className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white" href="/services">Explore All Services <ArrowRight className="size-4" /></Link></div></Container></Section>;
}
