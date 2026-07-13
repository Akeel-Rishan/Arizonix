export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GA_ENABLED = Boolean(GA_MEASUREMENT_ID);

export type GtagCommand = 'config' | 'event' | 'js' | 'consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: GtagCommand,
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

export function trackPageview(path: string) {
  if (
    !GA_ENABLED ||
    !GA_MEASUREMENT_ID ||
    typeof window === 'undefined' ||
    !window.gtag
  ) {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    send_page_view: true,
  });
}

export function trackEvent(
  name: string,
  parameters: Record<string, string | number | boolean | undefined> = {},
) {
  if (
    !GA_ENABLED ||
    !GA_MEASUREMENT_ID ||
    typeof window === 'undefined' ||
    !window.gtag
  ) {
    return;
  }

  window.gtag('event', name, parameters);
}
