import { Section } from '@/components/ui/section';
const items = [
  [
    'How quickly will you respond to my inquiry?',
    'We review inquiries within 4 business hours and deliver detailed proposals within 48 hours of our initial call.',
  ],
  [
    'Is the consultation really free with no commitment?',
    'Absolutely. The 30-minute consultation is completely free, with no pressure or obligation to proceed.',
  ],
  [
    'What information should I include in my message?',
    'Include the problem, your users, rough timeline, and any existing technical context. A budget range is optional but helpful.',
  ],
];
export function ContactFAQStrip() {
  return (
    <Section className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-xl font-bold text-white">
          Quick Answers
        </h2>
        {items.map(([question, answer]) => (
          <article
            className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-2 md:gap-8"
            key={question}
          >
            <h3 className="flex gap-3 font-semibold text-white">
              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-xs text-brand-blue"
              >
                Q
              </span>
              {question}
            </h3>
            <p className="flex gap-3 text-sm leading-6 text-slate-400">
              <span
                aria-hidden="true"
                className="glass-panel flex size-6 shrink-0 items-center justify-center rounded-full text-xs"
              >
                A
              </span>
              {answer}
            </p>
          </article>
        ))}
        <p className="mt-8 text-center text-sm text-slate-400">
          Have a specific question?{' '}
          <a
            className="text-brand-blue underline underline-offset-2"
            href="mailto:support@arizonix.tech"
          >
            support@arizonix.tech
          </a>
        </p>
      </div>
    </Section>
  );
}
