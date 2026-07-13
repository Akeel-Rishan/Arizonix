'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface ScreenshotLightboxProps {
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  screenshots: string[];
}

export default function ScreenshotLightbox({
  activeIndex,
  onClose,
  onNext,
  onPrev,
  screenshots,
}: ScreenshotLightboxProps) {
  const src = screenshots[activeIndex];
  if (!src) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur"
      role="dialog"
    >
      <button
        aria-label="Close screenshot"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white"
        onClick={onClose}
        type="button"
      >
        <X className="size-5" />
      </button>
      <button
        aria-label="Previous screenshot"
        className="absolute left-4 rounded-full bg-white/10 p-2 text-white"
        onClick={onPrev}
        type="button"
      >
        <ChevronLeft className="size-6" />
      </button>
      <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-xl">
        <Image
          alt={`Project screenshot ${activeIndex + 1}`}
          className="object-contain"
          fill
          priority
          sizes="100vw"
          src={src}
        />
      </div>
      <button
        aria-label="Next screenshot"
        className="absolute right-4 rounded-full bg-white/10 p-2 text-white"
        onClick={onNext}
        type="button"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}
