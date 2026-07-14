'use client';

import dynamic from 'next/dynamic';

import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { PerformanceObserver } from '@/components/monitoring/performance-observer';
import { MotionPreferenceToggle } from '@/components/ui/motion-preference-toggle';

const CookieConsent = dynamic(
  () =>
    import('@/components/ui/cookie-consent').then(
      (module) => module.CookieConsent,
    ),
  { ssr: false },
);
const CursorGlow = dynamic(() => import('@/components/ui/cursor-glow'), {
  ssr: false,
});

export function ClientEffects() {
  return (
    <>
      <CursorGlow />
      <CookieConsent />
      <AnalyticsProvider />
      <PerformanceObserver />
      <MotionPreferenceToggle />
    </>
  );
}
