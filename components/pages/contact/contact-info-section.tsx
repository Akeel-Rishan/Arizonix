import {
  Calendar,
  CheckCircle2,
  Globe,
  Mail,
  MessageSquare,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

import { ContactMapPlaceholder } from './contact-map-placeholder';

import { getCalendlyUrl, getWhatsAppUrl } from '@/lib/contact-links';

interface ContactCard {
  detail: string;
  href?: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

export function ContactInfoSection() {
  const calendlyUrl = getCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL);
  const whatsappUrl = getWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL);
  const cards: ContactCard[] = [
    {
      detail: 'We respond within 2 business hours',
      href: 'mailto:hello@arizonix.com',
      icon: Mail,
      label: 'EMAIL US',
      value: 'hello@arizonix.com',
    },
    ...(calendlyUrl
      ? [
          {
            detail: 'Choose a time that works for you',
            href: calendlyUrl,
            icon: Calendar,
            label: 'SCHEDULE A CALL',
            value: 'Book a 30-minute Call',
          },
        ]
      : []),
    ...(whatsappUrl
      ? [
          {
            detail: 'Quick questions, fast answers',
            href: whatsappUrl,
            icon: MessageSquare,
            label: 'WHATSAPP',
            value: 'Chat on WhatsApp',
          },
        ]
      : []),
    {
      detail: 'Based across Americas, Europe & Asia',
      icon: Globe,
      label: 'REMOTE-FIRST',
      value: 'Serving Clients Worldwide',
    },
  ];

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-white">
        Prefer to reach out directly?
      </h2>
      <div className="space-y-4">
        {cards.map(({ detail, href, icon: Icon, label, value }, index) => (
          <article className="glass-panel flex gap-4 rounded-xl p-5" key={label}>
            <span
              aria-hidden="true"
              className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${index % 3 === 0 ? 'bg-brand-blue/10 text-brand-blue' : index % 3 === 1 ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-cyan/10 text-brand-cyan'}`}
            >
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs tracking-wide text-slate-400">{label}</p>
              {href ? (
                <a
                  className="inline-flex min-h-11 items-center font-medium text-white hover:text-brand-cyan"
                  href={href}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                >
                  {value}
                </a>
              ) : (
                <p className="font-medium text-white">{value}</p>
              )}
              <p className="text-sm text-slate-400">{detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="gradient-border glass-panel mt-6 rounded-xl2 p-6">
        <ShieldCheck aria-hidden="true" className="size-6 text-brand-cyan" />
        <h3 className="mt-3 font-bold text-white">Our Response Commitment</h3>
        <ul className="mt-3 space-y-2">
          {[
            'Your inquiry reviewed within 4 business hours',
            'Personalized response, not a template email',
            'Detailed proposal delivered within 48 hours',
          ].map((item) => (
            <li className="flex gap-2 text-sm text-slate-300" key={item}>
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-cyan"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ContactMapPlaceholder />
    </section>
  );
}
