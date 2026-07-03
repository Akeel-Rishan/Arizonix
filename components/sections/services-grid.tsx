'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { fadeInUp, staggerContainer } from '@/lib/motion';
export function ServicesGrid({ children }: { children: ReactNode[] }) { return <motion.div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8" initial="hidden" variants={staggerContainer} viewport={{ once: true, amount: 0.12 }} whileInView="visible">{children.map((child, index) => <motion.div className="h-full" key={index} variants={fadeInUp}>{child}</motion.div>)}</motion.div>; }
