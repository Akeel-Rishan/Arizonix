'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
export function ServiceDetailCTA({ serviceName }: { serviceName: string }) { return <Section className="py-20" variant="aurora"><Container><motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}><Badge className="gap-2" variant="gradient"><Sparkles className="size-4" />Ready To Get Started?</Badge><h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">Let&apos;s Build Your {serviceName} Solution</h2><p className="mx-auto mt-4 max-w-xl text-slate-300">Get a free consultation and detailed proposal for your {serviceName} project. We&apos;ll review your requirements and have a customized plan ready within 48 hours.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact" icon={ArrowRight} iconPosition="right" size="lg">Get a Free Quote</Button><Button href="/contact#schedule" icon={Calendar} size="lg" variant="secondary">Schedule a Call</Button></div><p className="mt-4 text-sm text-slate-400">🟢 Currently accepting new projects — limited capacity available.</p></motion.div></Container></Section>; }
