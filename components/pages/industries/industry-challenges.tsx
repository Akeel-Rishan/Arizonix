import { ArrowRight } from 'lucide-react';

import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { IndustryChallenge } from '@/lib/industry-detail-data';
export function IndustryChallenges({ challenges }: { challenges?: IndustryChallenge[] }) { if (!challenges?.length) return null; return <Section id="challenges"><Container><SectionHeading description="The domain problems we help teams solve with focused engineering and practical automation." eyebrow="YOUR CHALLENGES" title={<>We Understand What&apos;s <span className="text-gradient">Holding You Back</span></>} /><MotionStagger className="mt-12 grid gap-6 lg:grid-cols-3">{challenges.map((challenge) => <MotionItem className="h-full" key={challenge.title}><article className="glass-panel h-full rounded-xl2 p-7"><h3 className="text-xl font-bold text-white">{challenge.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{challenge.description}</p><div className="my-5 border-t border-white/10" /><p className="flex gap-2 text-sm leading-6 text-slate-300"><ArrowRight className="mt-1 size-4 shrink-0 text-brand-cyan" />{challenge.solution}</p></article></MotionItem>)}</MotionStagger></Container></Section>; }
