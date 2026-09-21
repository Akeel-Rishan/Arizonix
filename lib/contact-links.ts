export function getCalendlyUrl(value?: string | null): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const isCalendly =
      url.hostname === 'calendly.com' || url.hostname.endsWith('.calendly.com');
    const hasBookingPath = url.pathname.replaceAll('/', '').length > 0;
    return url.protocol === 'https:' && isCalendly && hasBookingPath
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

export function getWhatsAppUrl(value?: string | null): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const hasRecipient = url.pathname.replace(/\D/g, '').length >= 7;
    return url.protocol === 'https:' && url.hostname === 'wa.me' && hasRecipient
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}
