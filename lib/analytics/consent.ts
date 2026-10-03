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

function removeGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => /^(_ga|_gid|_gat)/.test(name));
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`];

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    }
  }
}

export function setAnalyticsConsent(value: CookieConsentValue) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_KEY, value);

  if (value === 'declined') removeGoogleAnalyticsCookies();

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
