const CONSENT_KEY = 'arizonix-cookie-consent';

export type CookieConsentValue = 'accepted' | 'declined';

export function getAnalyticsConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'declined' ? value : null;
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === 'accepted';
}

export function setAnalyticsConsent(value: CookieConsentValue) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(
    new CustomEvent(
      value === 'accepted'
        ? 'cookie-consent-accepted'
        : 'cookie-consent-declined',
    ),
  );
}

export function initializeAnalytics(onAccepted: () => void) {
  if (hasAnalyticsConsent()) onAccepted();
}
