import { CheckCircle2 } from 'lucide-react';

import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

const values = [
  ['Engineering Excellence', "We write code we're proud to put our name on — clean, tested, documented, and built to last."],
  ['Client Success First', 'Our success is measured exclusively by the outcomes we deliver for our clients, not by the lines of code we ship.'],
  ['Radical Transparency', 'No black-box development. Clients have full visibility into progress, blockers, and decisions at all times.'],
  ['Continuous Innovation', "We invest in staying at the frontier of technology so our clients always benefit from what's next."],
  ['Long-Term Thinking', 'We build for the next 5 years, not the next sprint. Every architecture decision considers future scale.'],
];

export function MissionValues() {
  return <Section id="values" variant="aurora"><Container><SectionHeading description="Every decision we make as a company flows from these core principles." eyebrow="WHAT DRIVES US" title={<>Our Mission, Vision &amp; <span className="text-gradient">Values</span></>} /><MotionStagger className="mt-14"><MotionItem><div className="glass-panel rounded-xl2 p-10 text-center md:p-16"><p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Mission</p><p className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-snug text-white md:text-3xl">To build the intelligent software infrastructure that empowers ambitious businesses to grow faster, operate smarter, and compete globally.</p><div className="mx-auto mt-8 h-0.5 w-24 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan" /></div></MotionItem><div className="mt-8 grid gap-8 lg:grid-cols-2"><MotionItem className="h-full"><div className="glass-panel h-full rounded-xl2 p-8"><p className="text-xs font-semibold uppercase tracking-widest text-brand-purple">Vision</p><h3 className="mt-3 text-xl font-bold text-white">The Technology Partner Every Ambitious Business Deserves</h3><p className="mt-3 text-sm leading-7 text-slate-400">We envision a world where every company — regardless of size or stage — has access to the same caliber of software engineering that powers the world&apos;s leading technology companies.</p></div></MotionItem><MotionItem className="h-full"><div className="glass-panel h-full rounded-xl2 p-8"><p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Core Values</p><ul className="mt-4 space-y-4">{values.map(([name, description]) => <li className="flex items-start gap-3" key={name}><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-cyan" /><span><strong className="block text-sm text-white">{name}</strong><span className="mt-1 block text-xs leading-5 text-slate-400">{description}</span></span></li>)}</ul></div></MotionItem></div></MotionStagger></Container></Section>;
}
