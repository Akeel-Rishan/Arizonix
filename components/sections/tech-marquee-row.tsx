'use client';

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import type { TechItem } from '@/lib/tech-stack-data';
import { cn } from '@/lib/utils';

export type MarqueeDirection = 'left' | 'right';

export interface TechMarqueeRowProps {
  className?: string;
  direction?: MarqueeDirection;
  duration?: number;
  items: readonly TechItem[];
}

export interface TechChipProps {
  item: TechItem;
}

export function TechChip({ item }: TechChipProps) {
  const Icon = item.icon;

  return (
    <div className="glass-panel flex shrink-0 items-center gap-2.5 !rounded-full px-4 py-2.5 text-sm font-medium text-slate-200 sm:gap-3 sm:px-6 sm:py-3 sm:text-base">
      <Icon aria-hidden="true" className="size-4 text-brand-cyan sm:size-5" />
      <span className="whitespace-nowrap">{item.name}</span>
    </div>
  );
}

export function TechMarqueeRow({
  className,
  direction = 'left',
  duration = 36,
  items,
}: TechMarqueeRowProps) {
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const group = firstGroupRef.current;
    if (!group) return;

    const measure = () => {
      const width = group.getBoundingClientRect().width;
      setLoopWidth(width);
      x.set(direction === 'left' ? 0 : -width);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(group);

    return () => observer.disconnect();
  }, [direction, x]);

  useAnimationFrame((_time, delta) => {
    if (isPaused || loopWidth === 0) return;

    const distance = (loopWidth / Math.max(duration, 1)) * (delta / 1000);
    const current = x.get();

    if (direction === 'left') {
      const next = current - distance;
      x.set(next <= -loopWidth ? next + loopWidth : next);
    } else {
      const next = current + distance;
      x.set(next >= 0 ? next - loopWidth : next);
    }
  });

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
      data-direction={direction}
      data-paused={isPaused}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {[0, 1].map((groupIndex) => (
          <div
            className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6"
            key={groupIndex}
            ref={groupIndex === 0 ? firstGroupRef : undefined}
          >
            {items.map((item) => (
              <TechChip item={item} key={`${groupIndex}-${item.name}`} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
