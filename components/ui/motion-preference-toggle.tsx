'use client';

import { Pause, Play } from 'lucide-react';

import { useSiteMotionPreference } from '@/hooks/use-site-motion-preference';

export function MotionPreferenceToggle() {
  const { isPaused, toggleMotion } = useSiteMotionPreference();
  const Icon = isPaused ? Play : Pause;

  return (
    <button
      aria-pressed={isPaused}
      className="fixed bottom-4 left-4 z-40 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-navy-950/85 px-4 py-2 text-xs font-semibold text-slate-100 shadow-lg shadow-navy-950/30 backdrop-blur transition hover:border-brand-cyan/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
      onClick={toggleMotion}
      type="button"
    >
      <Icon aria-hidden="true" className="size-4" />
      {isPaused ? 'Resume animations' : 'Pause animations'}
    </button>
  );
}
