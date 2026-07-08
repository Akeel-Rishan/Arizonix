import {
  Calendar,
  CheckCircle2,
  Globe,
  Mail,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

import { ContactMapPlaceholder } from './contact-map-placeholder';
const cards = [
  [
    Mail,
    'EMAIL US',
    'hello@arizonix.com',
    'We respond within 2 business hours',
    'mailto:hello@arizonix.com',
  ],
  [
    Calendar,
    'SCHEDULE A CALL',
    'Book a 30-min Call',
    'Choose a time that works for you',
    'https://calendly.com',
  ],
  [
    MessageSquare,
    'WHATSAPP',
    'Available via WhatsApp',
    'Quick questions, fast answers',
    'https://wa.me/',
  ],
  [
    Globe,
    'REMOTE-FIRST',
    'Serving Clients Worldwide',
    'Based across Americas, Europe & Asia',
    null,
  ],
] as const;
export function ContactInfoSection() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-white">
        Prefer to reach out directly?
      </h2>
      <div className="space-y-4">
        {cards.map(([Icon, label, value, detail, href], index) => (
          <article
            className="glass-panel flex gap-4 rounded-xl p-5"
            key={label}
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${index % 3 === 0 ? 'bg-brand-blue/10 text-brand-blue' : index % 3 === 1 ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-cyan/10 text-brand-cyan'}`}
            >
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs tracking-wide text-slate-500">{label}</p>
              {href ? (
                <a
                  className="font-medium text-white hover:text-brand-cyan"
                  href={href}
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
        <ShieldCheck className="size-6 text-brand-cyan" />
        <h3 className="mt-3 font-bold text-white">Our Response Commitment</h3>
        <ul className="mt-3 space-y-2">
          {[
            'Your inquiry reviewed within 4 business hours',
            'Personalized response — not a template email',
            'Detailed proposal delivered within 48 hours',
          ].map((item) => (
            <li className="flex gap-2 text-sm text-slate-300" key={item}>
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ContactMapPlaceholder />
    </section>
  );
}
