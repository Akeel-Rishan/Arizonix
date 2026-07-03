import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

import { MotionReveal } from '@/components/pages/about/about-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { PortfolioDisplayProject } from '@/lib/portfolio-display';
import { portableTextComponents } from '@/lib/sanity/portable-text-components';
export function ProjectChallengeSolution({ content, project }: { content?: PortableTextBlock[]; project: PortfolioDisplayProject }) { return <Section id="challenge"><Container><div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-2"><MotionReveal direction="left"><p className="text-xs font-semibold tracking-widest text-brand-cyan">THE CHALLENGE</p><h2 className="mt-3 text-3xl font-bold text-white">What Problem Were We Solving?</h2><p className="mt-5 leading-7 text-slate-300">{project.challenge}</p><div className="mt-5 flex flex-wrap gap-2">{[project.category, ...project.tags].map((tag) => <span className="glass-panel rounded-full px-3 py-1 text-xs text-slate-400" key={tag}>{tag}</span>)}</div></MotionReveal><MotionReveal direction="right"><p className="text-xs font-semibold tracking-widest text-brand-purple">OUR SOLUTION</p><h2 className="mt-3 text-3xl font-bold text-white">How We Approached It</h2><p className="mt-5 leading-7 text-slate-300">{project.solution}</p>{content?.length ? <div className="cms-prose mt-6"><PortableText components={portableTextComponents} value={content} /></div> : <p className="mt-5 text-sm italic text-slate-500">Full case study coming soon.</p>}</MotionReveal></div></Container></Section>; }
