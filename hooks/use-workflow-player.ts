'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

export interface UseWorkflowPlayerProps {
  isInView: boolean;
  resetPause?: number;
  stepDuration: number;
  totalSteps: number;
}

export interface UseWorkflowPlayerReturn {
  activeStep: number;
  completedSteps: ReadonlySet<number>;
  goNext: () => void;
  goPrev: () => void;
  isPlaying: boolean;
  togglePlay: () => void;
}

export function useWorkflowPlayer({
  isInView,
  resetPause = 1000,
  stepDuration,
  totalSteps,
}: UseWorkflowPlayerProps): UseWorkflowPlayerReturn {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goNext = useCallback(() => {
    setIsPlaying(false);
    setActiveStep((currentStep) => (currentStep + 1) % totalSteps);
  }, [totalSteps]);

  const goPrev = useCallback(() => {
    setIsPlaying(false);
    setActiveStep((currentStep) => (currentStep - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  const togglePlay = useCallback(() => {
    setIsPlaying((currentValue) => !currentValue);
  }, []);

  useEffect(() => {
    if (!isInView || !isPlaying) {
      return undefined;
    }

    const delay =
      activeStep === totalSteps - 1 ? stepDuration + resetPause : stepDuration;

    const timeout = window.setTimeout(() => {
      setActiveStep((currentStep) => (currentStep + 1) % totalSteps);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeStep, isInView, isPlaying, resetPause, stepDuration, totalSteps]);

  const completedSteps = useMemo(
    () =>
      new Set(
        Array.from({ length: activeStep }, (_, stepIndex) => stepIndex),
      ) as ReadonlySet<number>,
    [activeStep],
  );

  return {
    activeStep,
    completedSteps,
    goNext,
    goPrev,
    isPlaying,
    togglePlay,
  };
}
