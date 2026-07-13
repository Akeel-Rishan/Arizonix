'use client';

import { useEffect } from 'react';

import { Analytics } from '@/lib/analytics/events';

export function PerformanceObserver() {
  useEffect(() => {
    let cancelled = false;

    void import('web-vitals').then(
      ({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
        if (cancelled) return;
        const report = (metric: { id: string; name: string; value: number }) => {
          Analytics.webVital(metric.name, metric.value, metric.id);
        };
        onCLS(report);
        onFCP(report);
        onINP(report);
        onLCP(report);
        onTTFB(report);
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
