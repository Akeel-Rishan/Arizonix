'use client';
import { CheckCircle2, MessageSquare } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
export function ContactHero() {
  return (
    <Section className="pb-10 pt-24 md:pt-28">
      <div className="container mx-auto px-4 text-center md:text-left">
        <Badge className="gap-2" variant="gradient">
          <MessageSquare className="size-4" />
          Get In Touch
        </Badge>
        <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Let&apos;s Build Something
          <br />
          <span className="text-gradient">Remarkable Together</span>
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
          {[
            'Free 30-minute consultation',
            'Proposal within 48 hours',
            "No contracts until you're ready",
          ].map((item) => (
            <span
              className="flex items-center gap-2 text-sm text-slate-300"
              key={item}
            >
              <CheckCircle2 className="size-4 text-brand-cyan" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
