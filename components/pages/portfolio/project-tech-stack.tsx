import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getIcon } from '@/lib/icon-map';
export function ProjectTechStack({ tags }: { tags: string[] }) { return <Section className="py-12 md:py-16" id="tech-stack"><Container><div className="flex flex-col items-center justify-between gap-5 md:flex-row"><h2 className="text-lg font-semibold text-slate-400">Built With</h2><div className="flex flex-wrap justify-center gap-3">{tags.map((tag) => { const Icon = getIcon(tag); return <span className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 font-mono text-sm text-slate-300" key={tag}><Icon className="size-4" />{tag}</span>; })}</div></div><p className="mt-5 text-center text-sm text-slate-500 md:text-right">Questions about our tech choices? <Link className="text-brand-blue" href="/contact">Talk to us</Link></p></Container></Section>; }
