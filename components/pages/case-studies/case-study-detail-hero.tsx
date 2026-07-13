'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { motion } from '@/lib/framer-motion';
import type { SanityCaseStudyFull } from '@/lib/sanity/types';

export function CaseStudyDetailHero({
  coverImageBlurUrl,
  coverImageUrl,
  study,
}: {
  coverImageBlurUrl?: string;
  coverImageUrl?: string;
  study: SanityCaseStudyFull;
}) {
  return (
    <section className="min-h-[60vh]">
      <div className="relative h-[45vh] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30">
        {coverImageUrl ? (
          <Image
            alt={study.title}
            blurDataURL={coverImageBlurUrl}
            className="object-cover"
            fill
            placeholder={coverImageBlurUrl ? 'blur' : 'empty'}
            priority
            sizes="100vw"
            src={coverImageUrl}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950" />
      </div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto -mt-24 max-w-5xl px-4"
        initial={{ opacity: 0, y: 24 }}
      >
        <nav aria-label="Breadcrumb">
          <ol className="flex gap-2 text-sm">
            <li>
              <Link className="text-slate-500" href="/case-studies">
                Case Studies
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white">
              {study.title}
            </li>
          </ol>
        </nav>
        <Badge className="mt-5" variant="outline">
          {study.industry}
        </Badge>
        <p className="mt-4 text-sm uppercase tracking-wide text-brand-cyan">
          {study.client}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          {study.summary}
        </p>
        {study.publishedAt ? (
          <time className="mt-4 block text-sm text-slate-500">
            {new Date(study.publishedAt).toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </time>
        ) : null}
      </motion.div>
    </section>
  );
}
