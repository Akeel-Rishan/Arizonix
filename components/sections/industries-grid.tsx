'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { fadeInUp, staggerContainer } from '@/lib/motion';
export function IndustriesGrid({ children }: { children: ReactNode[] }) { return <motion.ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-6" initial="hidden" variants={staggerContainer} viewport={{ once: true, amount: 0.12 }} whileInView="visible">{children.map((child, index) => <motion.li className="h-full" key={index} variants={fadeInUp}>{child}</motion.li>)}</motion.ul>; }
