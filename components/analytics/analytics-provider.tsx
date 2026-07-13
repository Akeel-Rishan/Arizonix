'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { initializeAnalytics } from '@/lib/analytics/consent';

const GoogleAnalytics = dynamic(
  () =>
    import('@/components/analytics/google-analytics').then(
      (module) => module.GoogleAnalytics,
    ),
  { ssr: false },
);

export function AnalyticsProvider() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    initializeAnalytics(() => setEnabled(true));
    const enable = () => setEnabled(true);
    const disable = () => setEnabled(false);
    window.addEventListener('cookie-consent-accepted', enable);
    window.addEventListener('cookie-consent-declined', disable);
    return () => {
      window.removeEventListener('cookie-consent-accepted', enable);
      window.removeEventListener('cookie-consent-declined', disable);
    };
  }, []);

  return enabled ? <GoogleAnalytics /> : null;
}
