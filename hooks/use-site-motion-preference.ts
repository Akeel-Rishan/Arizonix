'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'arizonix-motion-preference';

export function useSiteMotionPreference() {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsPaused(window.localStorage.getItem(STORAGE_KEY) === 'paused');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion =
      isPaused ? 'paused' : 'enabled';
    window.localStorage.setItem(STORAGE_KEY, isPaused ? 'paused' : 'enabled');
  }, [isPaused]);

  const toggleMotion = useCallback(() => {
    setIsPaused((current) => !current);
  }, []);

  return { isPaused, toggleMotion };
}
