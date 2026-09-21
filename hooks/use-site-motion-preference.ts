'use client';

import { useReducedMotion as useSystemReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'arizonix-reduce-motion';
const DATA_ATTRIBUTE = 'data-reduce-motion';

export function useSiteMotionPreference() {
  const systemReducedMotion = useSystemReducedMotion();
  const [siteReducedMotion, setSiteReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) === 'true';
    setSiteReducedMotion(stored);
    setMounted(true);
    if (stored) {
      document.documentElement.setAttribute(DATA_ATTRIBUTE, 'true');
    }
  }, []);

  const setReduceMotion = useCallback((value: boolean) => {
    setSiteReducedMotion(value);
    window.localStorage.setItem(STORAGE_KEY, String(value));
    if (value) {
      document.documentElement.setAttribute(DATA_ATTRIBUTE, 'true');
    } else {
      document.documentElement.removeAttribute(DATA_ATTRIBUTE);
    }
  }, []);

  const toggleMotion = useCallback(() => {
    setReduceMotion(!siteReducedMotion);
  }, [setReduceMotion, siteReducedMotion]);

  return {
    isPaused: siteReducedMotion,
    mounted,
    setReduceMotion,
    shouldReduceMotion: Boolean(systemReducedMotion) || siteReducedMotion,
    siteReducedMotion,
    toggleMotion,
  };
}

export function useShouldReduceMotion(): boolean {
  return useSiteMotionPreference().shouldReduceMotion;
}
