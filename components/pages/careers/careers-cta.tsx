'use client';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
export function CareersCTA() {
  return (
    <Section className="py-20" variant="aurora">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-brand-cyan">
          DON&apos;T SEE THE RIGHT ROLE?
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white">
          We Always Want To Hear From{' '}
          <span className="text-gradient">Exceptional Engineers</span>
        </h2>
        <p className="mt-5 text-slate-300">
          If you believe you&apos;d be a great fit, join our talent pool and
          we&apos;ll reach out when the right opportunity appears.
        </p>
        <Button
          className="mt-7"
          href="mailto:careers@arizonix.com?subject=Speculative%20Application"
          icon={Mail}
        >
          Send a Speculative Application
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          Please include your CV, portfolio, and the kind of work you&apos;re
          looking for.
        </p>
      </div>
    </Section>
  );
}
