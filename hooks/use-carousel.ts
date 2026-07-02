'use client';

import { useCallback, useEffect, useState } from 'react';

export interface UseCarouselOptions {
  autoPlayDuration: number;
  isPaused: boolean;
  totalItems: number;
}

export function useCarousel({
  autoPlayDuration,
  isPaused: pauseOverride,
  totalItems,
}: UseCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const isPaused = pauseOverride || isManuallyPaused;

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      totalItems > 0 ? (current + 1) % totalItems : 0,
    );
  }, [totalItems]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      totalItems > 0 ? (current - 1 + totalItems) % totalItems : 0,
    );
  }, [totalItems]);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalItems) setActiveIndex(index);
    },
    [totalItems],
  );

  const setIsPaused = useCallback((paused: boolean) => {
    setIsManuallyPaused(paused);
  }, []);

  useEffect(() => {
    if (isPaused || totalItems < 2) return;

    const interval = window.setInterval(goNext, autoPlayDuration);
    return () => window.clearInterval(interval);
  }, [activeIndex, autoPlayDuration, goNext, isPaused, totalItems]);

  return {
    activeIndex,
    goNext,
    goPrev,
    goTo,
    isPaused,
    setIsPaused,
  };
}
