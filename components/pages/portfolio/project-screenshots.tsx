'use client';
import { ZoomIn } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
export function ProjectScreenshots({ projectTitle, screenshots }: { projectTitle: string; screenshots: string[] }) { if (!screenshots.length) return null; return <Section id="screenshots"><Container><SectionHeading eyebrow="THE PRODUCT" title="See It In Action" /><div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{screenshots.slice(0, 6).map((src, index) => <a className="group relative aspect-video overflow-hidden rounded-xl" href={src} key={src} rel="noopener noreferrer" target="_blank"><Image alt={`${projectTitle} screenshot ${index + 1}`} className="object-cover transition group-hover:scale-105" fill sizes="(max-width:768px) 100vw, 33vw" src={src} /><span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 opacity-0 transition group-hover:opacity-100"><ZoomIn className="size-8 text-white" /></span></a>)}</div></Container></Section>; }
