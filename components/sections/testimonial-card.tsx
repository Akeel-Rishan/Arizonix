'use client';

import { Star } from 'lucide-react';

import type { Testimonial, TestimonialColor } from '@/lib/testimonials-data';
import { cn, getInitials } from '@/lib/utils';

export interface TestimonialCardProps {
  isActive: boolean;
  onClick: () => void;
  testimonial: Testimonial;
}

const colorMap: Record<TestimonialColor, { avatar: string; glow: string }> = {
  blue: {
    avatar: 'from-brand-blue to-brand-purple',
    glow: 'shadow-glow-blue',
  },
  purple: {
    avatar: 'from-brand-purple to-brand-cyan',
    glow: 'shadow-glow-purple',
  },
  cyan: {
    avatar: 'from-brand-cyan to-brand-blue',
    glow: 'shadow-glow-cyan',
  },
};

export function StarRating({
  rating,
  small = false,
}: {
  rating: number;
  small?: boolean;
}) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-1"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden="true"
          className={cn(
            small ? 'size-3' : 'size-4',
            index < rating ? 'fill-amber-400 text-amber-400' : 'text-white/15',
          )}
          key={index}
        />
      ))}
    </span>
  );
}

export function TestimonialCard({
  isActive,
  onClick,
  testimonial,
}: TestimonialCardProps) {
  const colors = colorMap[testimonial.color];
  const quoteExcerpt = `${testimonial.quote.slice(0, 80)}${testimonial.quote.length > 80 ? '…' : ''}`;

  return (
    <button
      aria-pressed={isActive}
      className={cn(
        'glass-panel group relative w-[220px] shrink-0 snap-center overflow-hidden rounded-xl p-4 text-left outline-none transition-all duration-300 sm:w-[280px] lg:w-[calc((100%-2rem)/3)]',
        'hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
        isActive && 'gradient-border bg-white/10',
        isActive && colors.glow,
      )}
      onClick={onClick}
      type="button"
    >
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white',
            colors.avatar,
          )}
        >
          {getInitials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">
            {testimonial.name}
          </span>
          <span className="block truncate text-xs text-slate-400">
            {testimonial.company}
          </span>
        </span>
      </span>

      <span className="mt-3 block">
        <StarRating rating={testimonial.rating} small />
      </span>
      <span className="mt-3 line-clamp-3 block text-xs leading-5 text-slate-500">
        {quoteExcerpt}
      </span>
    </button>
  );
}
