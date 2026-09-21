'use client';
import { useMemo, useState } from 'react';

import { PortfolioCard } from '@/components/sections/portfolio-card';
import { AnimatePresence, motion, useReducedMotion } from '@/lib/framer-motion';
import type { PortfolioProject } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';
export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
 const filters = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], [projects]); const [active, setActive] = useState('All'); const reduced = useReducedMotion(); const visible = projects.filter((p) => active === 'All' || p.category === active);
 return <><div className="mt-10 overflow-x-auto pb-2"><div className="mx-auto flex w-max gap-2">{filters.map((filter) => <button className={cn('glass-panel rounded-full px-4 py-2 text-sm font-semibold', active === filter ? 'gradient-border text-white' : 'text-slate-400')} key={filter} onClick={() => setActive(filter)} type="button">{filter}</button>)}</div></div><motion.div className="mt-10 grid gap-6 lg:grid-cols-2" layout><AnimatePresence mode="popLayout">{visible.map((project) => <motion.div animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1 }} initial={{ opacity: 1, y: reduced ? 0 : 20 }} key={project.id} layout><PortfolioCard project={project} /></motion.div>)}</AnimatePresence></motion.div></>;
}
