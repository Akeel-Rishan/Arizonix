'use client';

import { useEffect, useState } from 'react';

import {
  TechChip,
  TechMarqueeRow,
} from '@/components/sections/tech-marquee-row';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { useReducedMotion } from '@/lib/framer-motion';
import { techStack } from '@/lib/tech-stack-data';

const topRow = techStack.slice(0, 6);
const bottomRow = techStack.slice(6);

export function TechShowcase() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  const showStaticLayout = hasMounted && shouldReduceMotion;

  return (
    <Section
      aria-labelledby="technology-showcase-label"
      className="overflow-hidden !py-12 md:!py-16"
      id="technologies"
    >
      <Container>
        <p
          className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          id="technology-showcase-label"
        >
          Technologies We Work With
        </p>

        <ul className="sr-only">
          {techStack.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </Container>

      {showStaticLayout ? (
        <Container
          aria-hidden="true"
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
          data-marquee-mode="static"
        >
          {techStack.map((item) => (
            <TechChip item={item} key={item.name} />
          ))}
        </Container>
      ) : (
        <div
          aria-hidden="true"
          className="mt-8 space-y-4"
          data-marquee-mode="animated"
        >
          <TechMarqueeRow direction="left" duration={34} items={topRow} />
          <TechMarqueeRow direction="right" duration={39} items={bottomRow} />
        </div>
      )}
    </Section>
  );
}
