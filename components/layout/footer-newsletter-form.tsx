'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Analytics } from '@/lib/analytics/events';
import { cn } from '@/lib/utils';

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.'),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function FooterNewsletterForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async ({ email }: NewsletterFormValues) => {
    setApiError(null);
    try {
      const response = await fetch('/api/newsletter', { body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' }, method: 'POST' });
      const result = (await response.json()) as { error?: string; success?: boolean };
      if (!response.ok || !result.success) { setApiError(result.error ?? 'Something went wrong. Please try again.'); return; }
      Analytics.newsletterSubmit('footer');
      reset(); setIsSuccess(true);
    } catch { setApiError('Network error. Please check your connection and try again.'); }
  };

  if (isSuccess) {
    return (
      <p
        className="flex min-h-12 items-center gap-2 text-sm font-medium text-brand-cyan"
        role="status"
      >
        <CheckCircle2 aria-hidden="true" className="size-5" />
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form
      className="w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="relative">
        <label className="sr-only" htmlFor="footer-newsletter-email">
          Email address
        </label>
        <input
          {...register('email')}
          aria-describedby={
            errors.email ? 'footer-newsletter-error' : undefined
          }
          aria-invalid={errors.email ? 'true' : 'false'}
          autoComplete="email"
          className={cn(
            'glass-panel h-12 w-full !rounded-full py-3 pl-5 pr-14 text-sm text-slate-100 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand-blue/70 focus:ring-2 focus:ring-brand-blue/30',
            errors.email && 'border-brand-purple/70',
          )}
          id="footer-newsletter-email"
          placeholder="you@company.com"
          type="email"
        />
        <button
          aria-label="Subscribe to newsletter"
          className="absolute right-0.5 top-0.5 flex size-11 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white shadow-glow-blue transition duration-200 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:cursor-wait disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden="true" className="size-4" />
          )}
        </button>
      </div>
      {errors.email ? (
        <p
          className="mt-2 text-sm text-brand-cyan"
          id="footer-newsletter-error"
          role="alert"
        >
          {errors.email.message}
        </p>
      ) : null}
      {apiError ? <p className="mt-2 text-xs text-red-400" role="alert">{apiError}</p> : null}
    </form>
  );
}
