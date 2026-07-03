import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';

import { CTAContactInfo } from '@/components/sections/cta-contact-info';
import { CTAForm } from '@/components/sections/cta-form';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import type { SanitySiteSettings } from '@/lib/sanity/types';

const trustSignals = [
  'Free 30-minute strategy consultation',
  'Detailed proposal within 48 hours',
  "No contracts until you're 100% ready",
];

export function FinalCTA({ siteSettings }: { siteSettings: SanitySiteSettings | null }) {
  return (
    <Section
      className="relative overflow-hidden border-y border-white/10"
      id="contact-cta"
      variant="aurora"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 opacity-50 blur-3xl motion-reduce:animate-none"
      />

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Badge className="gap-2" variant="gradient">
              <Sparkles aria-hidden="true" className="size-4" />
              Start Your Project Today
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Ready To Build Something{' '}
              <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Join 40+ companies who chose Arizonix as their technology partner.
              Let&apos;s discuss your project — no commitment, no pressure, just
              a conversation about how we can help you grow.
            </p>

            <ul className="mt-6 space-y-3">
              {trustSignals.map((signal) => (
                <li
                  className="flex items-center gap-3 text-base text-slate-300"
                  key={signal}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 shrink-0 text-brand-cyan"
                  />
                  {signal}
                </li>
              ))}
            </ul>

            <CTAContactInfo contactInfo={siteSettings?.contactInfo} />

            <div className="mt-8">
              <a
                className="glass-panel min-h-13 inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:w-auto"
                href={siteSettings?.contactInfo?.calendlyUrl ?? 'https://calendly.com'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Calendar aria-hidden="true" className="size-4" />
                Schedule a Call on Calendly
              </a>
              <p className="mt-2 text-xs text-slate-500">
                Usually responds within 2 business hours
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-xl2 p-4 sm:p-6 md:p-8">
            <CTAForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
