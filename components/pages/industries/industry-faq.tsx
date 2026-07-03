'use client';

import { useState } from 'react';

import { FAQItem } from '@/components/sections/faq-item';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export function IndustryFAQ({ industryName, items }: { industryName: string; items: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  return <Section><Container><div className="mx-auto max-w-4xl"><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title={`${industryName} Solutions`} /><div className="mt-10">{items.map((item, index) => { const id = `industry-faq-${index}`; return <FAQItem isFirst={index === 0} isOpen={open.has(id)} item={{ ...item, category: industryName, id }} key={id} onToggle={() => setOpen((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; })} />; })}</div></div></Container></Section>;
}
