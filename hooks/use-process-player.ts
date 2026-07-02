'use client';

import { useCallback, useEffect, useState } from 'react';

export interface UseProcessPlayerOptions {
  isInView: boolean;
  stepDuration: number;
  totalSteps: number;
}

export function useProcessPlayer({
  isInView,
  stepDuration,
  totalSteps,
}: UseProcessPlayerOptions) {
  const [activeStep, setActiveStepState] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isInView || !isPlaying || totalSteps < 1) return;

    const timeout = window.setTimeout(() => {
      setActiveStepState((currentStep) =>
        currentStep === null || currentStep >= totalSteps ? 1 : currentStep + 1,
      );
    }, stepDuration);

    return () => window.clearTimeout(timeout);
  }, [activeStep, isInView, isPlaying, stepDuration, totalSteps]);

  const setActiveStep = useCallback((step: number | null) => {
    setIsPlaying(false);
    setActiveStepState(step);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((current) => !current);
  }, []);

  const pause = useCallback(() => setIsPlaying(false), []);

  return { activeStep, isPlaying, pause, setActiveStep, togglePlay };
}
