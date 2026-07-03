import { DeviceMockup } from '@/components/sections/device-mockup';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { PortfolioDisplayProject } from '@/lib/portfolio-display';

export function IndustryCaseStudyHighlight({ industryName, project }: { industryName: string; project?: PortfolioDisplayProject }) {
  return <Section><Container>{project ? <div className="glass-panel grid overflow-hidden rounded-xl2 lg:grid-cols-2"><div className="min-h-72 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30"><DeviceMockup bgColor={project.mockupBgColor} device={project.device} /></div><div className="p-8 lg:p-12"><p className="text-xs font-semibold tracking-widest text-brand-cyan">FEATURED CASE STUDY</p><h2 className="mt-3 text-3xl font-bold text-white">{project.title}</h2><p className="mt-4 text-slate-400">{project.solution}</p><dl className="mt-6 flex gap-5">{project.results.slice(0, 3).map((result) => <div key={result.label}><dd className="text-gradient text-xl font-bold">{result.metric}</dd><dt className="text-xs text-slate-500">{result.label}</dt></div>)}</dl><Button className="mt-7" href={`/portfolio/${project.slug}`} size="sm">Read Full Case Study</Button></div></div> : <div className="glass-panel rounded-xl2 p-8 text-center"><h2 className="text-xl font-bold text-white">Proven {industryName} experience</h2><p className="mt-3 text-sm text-slate-400">We&apos;ve built solutions for {industryName} clients — case studies are being prepared. Contact us to discuss relevant examples.</p><Button className="mt-5" href="/contact" variant="outline">Request Relevant Work</Button></div>}</Container></Section>;
}
