import { Code2, Laptop, TrendingUp } from 'lucide-react';

import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

const culture = [
  { eyebrow: 'How We Work', title: 'Async & Remote-First', body: 'Our team works asynchronously across time zones. No unnecessary meetings — deep work is protected, communication is intentional, and documentation is a first-class priority.', icon: Laptop, styles: 'border-brand-blue/20 bg-brand-blue/10 text-brand-blue hover:shadow-glow-blue' },
  { eyebrow: 'How We Build', title: 'Senior Engineers Only', body: "We don't hire juniors to train on client projects. Every engineer on your project has years of production experience across multiple technology stacks and industries.", icon: Code2, styles: 'border-brand-purple/20 bg-brand-purple/10 text-brand-purple hover:shadow-glow-purple' },
  { eyebrow: 'How We Grow', title: 'Continuous Learning', body: 'We dedicate 20% of our engineering time to research, experimentation, and staying at the frontier of AI and software development practices.', icon: TrendingUp, styles: 'border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan hover:shadow-glow-cyan' },
];

export function CultureSection() {
  return <Section id="culture"><Container><SectionHeading description="The habits and standards that shape every engagement." eyebrow="OUR CULTURE" title={<>How We Do <span className="text-gradient">Our Best Work</span></>} /><MotionStagger className="mt-14 grid gap-6 md:grid-cols-3">{culture.map(({ body, eyebrow, icon: Icon, styles, title }) => <MotionItem className="h-full" key={title}><article className="glass-panel h-full rounded-xl2 p-8 transition duration-300 hover:-translate-y-1"><span className={`flex size-12 items-center justify-center rounded-xl border ${styles}`}><Icon className="size-6" /></span><p className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-400">{eyebrow}</p><h3 className="mt-2 text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{body}</p></article></MotionItem>)}</MotionStagger></Container></Section>;
}
