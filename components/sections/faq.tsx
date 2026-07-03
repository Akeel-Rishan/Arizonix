'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MessageCircle, PhoneCall } from 'lucide-react';
import { useMemo, useState } from 'react';

import { FAQItem } from '@/components/sections/faq-item';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { FAQCategory } from '@/lib/faq-data';
import { fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

const ALL_CATEGORIES = 'All';

export function FAQ({ faqData }: { faqData: FAQCategory[] }) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set());

  const visibleCategories =
    activeCategory === ALL_CATEGORIES
      ? faqData
      : faqData.filter((category) => category.label === activeCategory);

  // Generate FAQPage JSON-LD from the single typed data source.
  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.flatMap((category) =>
        category.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      ),
    }),
    [faqData],
  );

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setOpenItems(new Set());
  };

  const toggleItem = (itemId: string) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  return (
    <Section id="faq" variant="default">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
        id="faq-schema"
        type="application/ld+json"
      />

      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            description="Can't find what you're looking for? Schedule a free call and we'll answer any question about your specific project."
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title={
              <>
                Everything You{' '}
                <span className="text-gradient">Need To Know</span>
              </>
            }
          />

          <motion.div
            className="mt-10 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
          >
            <div className="flex w-max min-w-full flex-nowrap justify-start gap-2 md:justify-center">
              {[
                ALL_CATEGORIES,
                ...faqData.map((category) => category.label),
              ].map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    aria-pressed={isActive}
                    className={cn(
                      'glass-panel shrink-0 rounded-full px-4 py-2 text-sm font-semibold outline-none transition duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
                      isActive
                        ? 'gradient-border text-white shadow-glow-blue'
                        : 'text-slate-400',
                    )}
                    key={category}
                    onClick={() => selectCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: 8 }}
              key={activeCategory}
              transition={{ duration: 0.25 }}
            >
              {visibleCategories.map((category, categoryIndex) => (
                <div
                  className={cn(categoryIndex > 0 && 'mt-10')}
                  key={category.id}
                >
                  {activeCategory === ALL_CATEGORIES ? (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {category.label}
                    </p>
                  ) : null}

                  <div>
                    {category.items.map((item, itemIndex) => (
                      <FAQItem
                        isFirst={itemIndex === 0}
                        isOpen={openItems.has(item.id)}
                        item={item}
                        key={item.id}
                        onToggle={() => toggleItem(item.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="glass-panel mt-14 rounded-xl2 p-6 text-center sm:p-8"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.35 }}
            whileInView="visible"
          >
            <MessageCircle
              aria-hidden="true"
              className="mx-auto size-8 text-brand-blue"
            />
            <h3 className="mt-4 text-xl font-bold text-white">
              Still have questions?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Schedule a free 30-minute consultation — no commitment, no sales
              pressure. Just honest answers to your questions.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                className="w-full sm:w-auto"
                href="/contact"
                icon={PhoneCall}
                size="lg"
                variant="primary"
              >
                Schedule Free Call
              </Button>
              <Button
                className="w-full sm:w-auto"
                href="/contact"
                icon={Mail}
                size="lg"
                variant="ghost"
              >
                Send Us a Message
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
