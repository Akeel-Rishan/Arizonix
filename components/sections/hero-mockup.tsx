'use client';

import { motion } from 'framer-motion';

interface HeroMockupProps {
  reducedMotion: boolean;
}

const activityRows = ['w-4/5', 'w-3/5', 'w-2/3'] as const;
const chartBars = ['h-12', 'h-20', 'h-16', 'h-28', 'h-24', 'h-32'] as const;

export function HeroMockup({ reducedMotion }: HeroMockupProps) {
  return (
    <motion.div
      animate={reducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
      aria-hidden="true"
      className="mx-auto w-full max-w-4xl"
      data-reduced-motion={reducedMotion}
      data-testid="hero-mockup"
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 7, ease: 'easeInOut', repeat: Infinity }
      }
    >
      <div className="glass-panel overflow-hidden bg-navy-950/70 p-2 shadow-glow-purple sm:p-3">
        <div className="overflow-hidden rounded-[calc(1.25rem-0.25rem)] border border-white/10 bg-navy-900/80">
          <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4 sm:h-12">
            <span className="size-2 rounded-full bg-brand-blue/70 sm:size-2.5" />
            <span className="size-2 rounded-full bg-brand-purple/70 sm:size-2.5" />
            <span className="size-2 rounded-full bg-brand-cyan/70 sm:size-2.5" />
            <div className="ml-3 h-2.5 w-24 rounded-full bg-white/10 sm:w-40" />
          </div>

          <div className="grid min-h-64 grid-cols-[4rem_1fr] sm:min-h-80 sm:grid-cols-[9rem_1fr]">
            <div className="border-r border-white/10 p-3 sm:p-4">
              <div className="mb-6 size-8 rounded-lg bg-gradient-to-br from-brand-blue/50 to-brand-purple/50" />
              <div className="space-y-3">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    className="flex items-center gap-2 rounded-lg bg-white/5 p-2"
                    key={item}
                  >
                    <span className="size-2.5 shrink-0 rounded-sm bg-brand-cyan/30" />
                    <span className="hidden h-2 flex-1 rounded-full bg-white/10 sm:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="h-3 w-24 rounded-full bg-white/20 sm:w-36" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-white/10 sm:w-24" />
                </div>
                <div className="h-8 w-20 rounded-lg bg-gradient-to-r from-brand-blue/40 to-brand-purple/40 sm:w-28" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[0, 1, 2].map((item) => (
                  <div
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                    key={item}
                  >
                    <div className="size-5 rounded-md bg-brand-cyan/20" />
                    <div className="mt-3 h-2 w-2/3 rounded-full bg-white/20" />
                    <div className="mt-2 h-3 w-1/2 rounded-full bg-gradient-to-r from-brand-blue/40 to-brand-purple/40" />
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 h-2 w-24 rounded-full bg-white/20" />
                  <div className="flex h-28 items-end gap-2 sm:h-36">
                    {chartBars.map((height, index) => (
                      <div
                        className={`flex-1 rounded-t-md bg-gradient-to-t from-brand-blue/30 via-brand-purple/40 to-brand-cyan/60 ${height}`}
                        key={`${height}-${index}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:block">
                  <div className="mb-4 h-2 w-20 rounded-full bg-white/20" />
                  <div className="space-y-4">
                    {activityRows.map((width, index) => (
                      <div className="flex items-center gap-3" key={width}>
                        <span className="size-7 rounded-full bg-brand-blue/20" />
                        <span
                          className={`h-2 rounded-full bg-white/10 motion-safe:animate-pulse ${width}`}
                          style={{ animationDelay: `${index * 180}ms` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
