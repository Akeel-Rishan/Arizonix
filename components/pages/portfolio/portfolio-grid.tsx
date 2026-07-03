'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { PortfolioGridCard } from '@/components/pages/portfolio/portfolio-grid-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { PortfolioDisplayProject } from '@/lib/portfolio-display';
import { cn } from '@/lib/utils';
export function PortfolioGrid({ projects }: { projects: PortfolioDisplayProject[] }) { const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], [projects]); const [active, setActive] = useState('All'); const visible = projects.filter((project) => active === 'All' || project.category === active); return <Section id="portfolio-grid"><Container><div className="overflow-x-auto pb-2"><div className="flex w-max gap-2">{categories.map((category) => <button aria-pressed={active === category} className={cn('glass-panel rounded-full px-4 py-2 text-sm font-semibold', active === category ? 'gradient-border text-white' : 'text-slate-400')} key={category} onClick={() => setActive(category)} type="button">{category}</button>)}</div></div><p className="mt-6 text-sm text-slate-500">{active === 'All' ? `Showing ${visible.length} of ${projects.length} projects` : `Showing ${visible.length} ${active} projects`}</p>{visible.length ? <motion.div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3" layout role="list"><AnimatePresence mode="popLayout">{visible.map((project) => <motion.div animate={{ opacity: 1, y: 0 }} className="h-full" exit={{ opacity: 0 }} initial={{ opacity: 0, y: 16 }} key={project.slug} layout><PortfolioGridCard project={project} /></motion.div>)}</AnimatePresence></motion.div> : <div className="py-20 text-center"><Search className="mx-auto size-12 text-slate-600" /><h2 className="mt-4 text-xl font-bold text-white">No projects in this category yet</h2><p className="mt-2 text-slate-400">Check back soon or explore all projects.</p><Button className="mt-5" onClick={() => setActive('All')} variant="outline">View All Projects</Button></div>}</Container></Section>; }
