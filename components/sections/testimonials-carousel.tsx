'use client';

import { useEffect, useRef } from 'react';

import { TestimonialCard } from '@/components/sections/testimonial-card';
import type { Testimonial } from '@/lib/testimonials-data';
import { cn } from '@/lib/utils';

export interface TestimonialsCarouselProps {
  activeIndex: number;
  goTo: (index: number) => void;
  reducedMotion: boolean;
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  activeIndex,
  goTo,
  reducedMotion,
  testimonials,
}: TestimonialsCarouselProps) {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = cardRefs.current[activeIndex];

    if (!carousel || !activeCard) return;

    carousel.scrollTo({
      behavior: reducedMotion ? 'auto' : 'smooth',
      left:
        activeCard.offsetLeft -
        (carousel.clientWidth - activeCard.clientWidth) / 2,
    });
  }, [activeIndex, reducedMotion]);

  return (
    <>
      <ul
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-5 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        role="list"
      >
        {testimonials.map((testimonial, index) => (
          <li
            className="flex shrink-0 snap-center"
            key={testimonial.id}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            role="listitem"
          >
            <TestimonialCard
              isActive={index === activeIndex}
              onClick={() => goTo(index)}
              testimonial={testimonial}
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex h-4 items-center justify-center gap-2">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              aria-label={`Go to testimonial ${index + 1}`}
              aria-pressed={isActive}
              className={cn(
                'h-2 rounded-full outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
                isActive
                  ? 'w-7 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan'
                  : 'w-2 bg-white/20 hover:bg-white/35',
              )}
              key={testimonial.id}
              onClick={() => goTo(index)}
              type="button"
            />
          );
        })}
      </div>
    </>
  );
}
