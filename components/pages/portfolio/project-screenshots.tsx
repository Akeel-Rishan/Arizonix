'use client';

import { ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { lazy, Suspense, useCallback, useRef, useState } from 'react';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

const ScreenshotLightbox = lazy(
  () => import('@/components/pages/portfolio/screenshot-lightbox'),
);

export function ProjectScreenshots({
  projectTitle,
  screenshots,
}: {
  projectTitle: string;
  screenshots: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = useCallback((index: number) => {
    triggerRef.current = thumbnailRefs.current[index];
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);
  const handlePrev = useCallback(() => {
    setActiveIndex((index) =>
      index === 0 ? screenshots.length - 1 : index - 1,
    );
  }, [screenshots.length]);
  const handleNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % screenshots.length);
  }, [screenshots.length]);

  if (!screenshots.length) return null;

  return (
    <Section id="screenshots">
      <Container>
        <SectionHeading eyebrow="THE PRODUCT" title="See It In Action" />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {screenshots.slice(0, 6).map((src, index) => (
            <button
              className="group relative aspect-video overflow-hidden rounded-xl"
              key={src}
              onClick={() => openLightbox(index)}
              ref={(node) => {
                thumbnailRefs.current[index] = node;
              }}
              type="button"
            >
              <Image
                alt={`${projectTitle} screenshot ${index + 1}`}
                className="object-cover transition group-hover:scale-105"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={src}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 opacity-0 transition group-hover:opacity-100">
                <ZoomIn className="size-8 text-white" />
              </span>
            </button>
          ))}
        </div>
      </Container>
      {lightboxOpen ? (
        <Suspense fallback={null}>
          <ScreenshotLightbox
            activeIndex={activeIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={handleNext}
            onPrev={handlePrev}
            projectTitle={projectTitle}
            screenshots={screenshots}
            triggerRef={triggerRef}
          />
        </Suspense>
      ) : null}
    </Section>
  );
}
