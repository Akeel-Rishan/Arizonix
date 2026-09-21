'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import type { RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

interface ScreenshotLightboxProps {
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  projectTitle: string;
  screenshots: string[];
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export default function ScreenshotLightbox({
  activeIndex,
  onClose,
  onNext,
  onPrev,
  projectTitle,
  screenshots,
  triggerRef,
}: ScreenshotLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = 'screenshot-lightbox-title';
  const src = screenshots[activeIndex];

  const handleClose = useCallback(() => {
    onClose();
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, [onClose, triggerRef]);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onPrev();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onNext();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, onNext, onPrev]);

  if (!src) return null;

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
      ref={dialogRef}
      role="dialog"
    >
      <h2 className="sr-only" id={titleId}>
        {projectTitle} screenshot {activeIndex + 1} of {screenshots.length}
      </h2>
      <button
        aria-label="Close screenshot viewer"
        className="glass-panel absolute right-4 top-4 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
        onClick={handleClose}
        ref={closeButtonRef}
        type="button"
      >
        <X aria-hidden="true" className="size-5" />
      </button>

      {screenshots.length > 1 ? (
        <button
          aria-label={`Previous screenshot (${activeIndex === 0 ? screenshots.length : activeIndex} of ${screenshots.length})`}
          className="glass-panel absolute left-3 top-1/2 z-10 flex min-h-14 min-w-14 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 sm:left-4"
          onClick={onPrev}
          type="button"
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
        </button>
      ) : null}

      <div className="relative h-[80vh] w-[90vw] max-w-6xl overflow-hidden rounded-lg">
        <Image
          alt={`${projectTitle} screenshot ${activeIndex + 1} of ${screenshots.length}`}
          className="object-contain"
          fill
          priority
          sizes="90vw"
          src={src}
        />
      </div>

      {screenshots.length > 1 ? (
        <>
          <button
            aria-label={`Next screenshot (${activeIndex + 1 === screenshots.length ? 1 : activeIndex + 2} of ${screenshots.length})`}
            className="glass-panel absolute right-3 top-1/2 z-10 flex min-h-14 min-w-14 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 sm:right-4"
            onClick={onNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="size-6" />
          </button>
          <p
            aria-atomic="true"
            aria-live="polite"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80"
          >
            {activeIndex + 1} / {screenshots.length}
          </p>
        </>
      ) : null}
    </div>
  );
}
