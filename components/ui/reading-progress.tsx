'use client';
import { useEffect, useRef } from 'react';
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      if (ref.current) ref.current.style.width = `${progress}%`;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', scroll);
      if (frame) cancelAnimationFrame(frame);
    };
  });
  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
      ref={ref}
    />
  );
}
