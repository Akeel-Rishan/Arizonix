'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';

import type { FAQItem as FAQItemData } from '@/lib/faq-data';
import { cn, renderAnswerWithLinks } from '@/lib/utils';

export interface FAQItemProps {
  isFirst: boolean;
  isOpen: boolean;
  item: FAQItemData;
  onToggle: () => void;
}

export function FAQItem({ isFirst, isOpen, item, onToggle }: FAQItemProps) {
  const reducedMotion = useReducedMotion();
  const answerId = `${item.id}-answer`;
  const questionId = `${item.id}-question`;

  return (
    <div
      className={cn(
        'transition-colors duration-200 hover:bg-white/[0.03]',
        !isFirst && 'border-t border-white/10',
      )}
    >
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        className="group flex min-h-11 w-full items-center justify-between gap-5 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan"
        id={questionId}
        onClick={onToggle}
        type="button"
      >
        <span
          className={cn(
            'text-base font-medium leading-7 transition-colors duration-200 md:text-lg',
            isOpen
              ? 'text-brand-blue'
              : 'text-white group-hover:text-slate-100',
          )}
        >
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'glass-panel flex size-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200',
            isOpen && 'border-brand-blue/30 bg-brand-blue/15 text-brand-blue',
          )}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="flex items-center justify-center"
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
          >
            <Plus className="size-5" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            aria-labelledby={questionId}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            role="region"
            transition={{
              duration: reducedMotion ? 0 : 0.3,
              ease: 'easeInOut',
            }}
          >
            <div className="max-w-3xl pb-6 pr-14 text-base leading-relaxed text-slate-300">
              {renderAnswerWithLinks(item.answer, item.links)}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
