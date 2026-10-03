import { escapeHtml } from '@/lib/email/escape-html';

export interface NewsletterConfirmationData {
  email: string;
  postalAddress: string;
  unsubscribeUrl: string;
}

export function newsletterConfirmationTemplate(
  raw: NewsletterConfirmationData,
): string {
  const email = escapeHtml(raw.email);
  const postalAddress = escapeHtml(raw.postalAddress);
  const unsubscribeUrl = escapeHtml(raw.unsubscribeUrl);

  return `<!doctype html>
<html lang="en">
<body style="margin:0;background:#0a0a12;color:#e2e8f0;font-family:Arial,sans-serif;padding:32px">
  <main style="margin:auto;max-width:560px;border-radius:12px;background:#111827;padding:32px;text-align:center">
    <h1 style="color:#fff">You're subscribed!</h1>
    <p>Welcome to Arizonix updates on AI, software engineering, case studies, and industry trends.</p>
    <p style="color:#64748b">Subscribed as ${email}</p>
    <p style="margin-top:32px;text-align:center;color:#64748b;font-size:12px;line-height:1.6">
      You received this email because you subscribed to Arizonix updates.<br>
      <a href="${unsubscribeUrl}" style="color:#60a5fa;text-decoration:underline">Unsubscribe from newsletter emails</a>
    </p>
    <p style="margin-top:24px;text-align:center;color:#475569;font-size:11px;line-height:1.6">
      Arizonix Technologies · ${postalAddress}
    </p>
  </main>
</body>
</html>`;
}
