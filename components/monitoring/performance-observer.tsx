'use client';

import { useEffect } from 'react';

import { Analytics } from '@/lib/analytics/events';

export function PerformanceObserver() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    let cancelled = false;
    const start = () => {
      void import('web-vitals').then(
        ({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
          if (cancelled) return;
          const report = (metric: {
            id: string;
            name: string;
            value: number;
          }) => {
            Analytics.webVital(metric.name, metric.value, metric.id);
          };
          onCLS(report);
          onFCP(report);
          onINP(report);
          onLCP(report);
          onTTFB(report);
        },
      );
    };
    const idleId = window.requestIdleCallback?.(start, { timeout: 3000 });
    const timeoutId =
      idleId === undefined ? window.setTimeout(start, 2000) : undefined;

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
