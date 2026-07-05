'use client';

import { useState } from 'react';

import { FAQItem } from '@/components/sections/faq-item';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { aiFaqItems } from '@/lib/ai-faq-data';

export function AIFAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <Section id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="AI FAQ"
          title={
            <>
              Common Questions About{' '}
              <span className="text-gradient">AI Automation</span>
            </>
          }
        />
        <div className="glass-panel mt-10 rounded-xl2 px-5 sm:px-8">
          {aiFaqItems.map((item, index) => (
            <FAQItem
              isFirst={index === 0}
              isOpen={openItems.has(item.id)}
              item={item}
              key={item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
