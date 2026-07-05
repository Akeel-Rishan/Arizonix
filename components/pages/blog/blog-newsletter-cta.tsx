import { Sparkles } from 'lucide-react';

import { NewsletterInlineForm } from '@/components/ui/newsletter-inline-form';
export function BlogNewsletterCTA() {
  return (
    <aside className="gradient-border glass-panel my-12 rounded-xl2 p-8 text-center">
      <Sparkles className="mx-auto size-8 text-brand-blue" />
      <h2 className="mt-3 text-xl font-bold text-white">
        Enjoying this article?
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
        Subscribe for practical insights on AI, software engineering, and
        technology that drives growth.
      </p>
      <NewsletterInlineForm className="mx-auto mt-5 max-w-md" />
    </aside>
  );
}
