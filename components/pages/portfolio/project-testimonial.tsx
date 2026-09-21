'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from '@/lib/framer-motion';
import type { ProjectTestimonial as ProjectTestimonialData } from '@/lib/portfolio-data';
import { getInitials } from '@/lib/utils';

export function ProjectTestimonial({
  avatarUrl,
  projectTitle,
  testimonial,
}: {
  avatarUrl?: null | string;
  projectTitle: string;
  testimonial: ProjectTestimonialData;
}) {
  return (
    <Section>
      <Container>
        <motion.figure
          className="gradient-border glass-panel relative mx-auto max-w-4xl rounded-xl2 p-10 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span
            aria-hidden="true"
            className="absolute left-6 top-4 text-[120px] font-bold text-brand-blue/10"
          >
            “
          </span>
          <span className="relative flex gap-1" role="img">
            <span className="sr-only">5 out of 5 stars</span>
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                aria-hidden="true"
                className="size-4 fill-amber-400 text-amber-400"
                key={index}
              />
            ))}
          </span>
          <blockquote className="relative mt-6 text-xl italic leading-8 text-slate-200 md:text-2xl">
            <p>{testimonial.quote}</p>
          </blockquote>
          <p className="relative mt-4 text-xs italic text-slate-400">
            Regarding the {projectTitle} project
          </p>
          <figcaption className="relative mt-8 flex items-center gap-4">
            {avatarUrl ? (
              <Image
                alt={testimonial.author}
                className="rounded-full object-cover"
                height={56}
                src={avatarUrl}
                width={56}
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-bold text-white"
              >
                {getInitials(testimonial.author)}
              </span>
            )}
            <span>
              <strong className="block text-white">{testimonial.author}</strong>
              <span className="text-sm text-slate-400">
                {testimonial.role}
              </span>
            </span>
          </figcaption>
        </motion.figure>
      </Container>
    </Section>
  );
}
