import { Mail, MapPin, Phone } from 'lucide-react';

import type { SanityContactInfo } from '@/lib/sanity/types';

export function CTAContactInfo({ contactInfo }: { contactInfo?: SanityContactInfo }) {
  const email = contactInfo?.email ?? 'support@arizonix.tech';
  const rawPhone = contactInfo?.phone?.trim();
  const normalizedPhone = rawPhone?.replace(/\D/g, '');
  const phone =
    normalizedPhone && !/^1?5550{6,}$/.test(normalizedPhone)
      ? rawPhone
      : undefined;
  return (
    <div className="mt-8 max-w-lg">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Or reach us directly
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mt-5 space-y-4">
        <a
          className="group flex items-center gap-3 text-white transition hover:text-brand-blue"
          href={`mailto:${email}`}
        >
          <span className="glass-panel flex size-10 shrink-0 items-center justify-center rounded-lg border-brand-blue/20 bg-brand-blue/10">
            <Mail aria-hidden="true" className="size-4 text-brand-blue" />
          </span>
          {email}
        </a>
        {phone ? (
          <a
            className="group flex items-center gap-3 text-white transition hover:text-brand-purple"
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
          >
            <span className="glass-panel flex size-11 shrink-0 items-center justify-center rounded-lg border-brand-purple/20 bg-brand-purple/10">
              <Phone aria-hidden="true" className="size-4 text-brand-purple" />
            </span>
            {phone}
          </a>
        ) : null}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="glass-panel flex size-10 shrink-0 items-center justify-center rounded-lg border-brand-cyan/20 bg-brand-cyan/10">
            <MapPin aria-hidden="true" className="size-4 text-brand-cyan" />
          </span>
          Available Worldwide · Remote-First
        </div>
      </div>
    </div>
  );
}
