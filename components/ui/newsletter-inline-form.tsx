'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

const schema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});
type Values = z.infer<typeof schema>;

export function NewsletterInlineForm({ className }: { className?: string }) {
  const id = useId();
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });
  const submit = async (values: Values) => {
    setApiError(undefined);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as {
        error?: string;
        success?: boolean;
      };
      if (!response.ok || !result.success)
        return setApiError(result.error ?? 'Unable to subscribe.');
      setSuccess(true);
    } catch {
      setApiError('Network error. Please try again.');
    }
  };
  if (success)
    return (
      <p
        className="flex items-center gap-2 text-sm text-brand-cyan"
        role="status"
      >
        <CheckCircle2 className="size-5" />
        Thanks for subscribing!
      </p>
    );
  return (
    <form
      className={cn('w-full', className)}
      noValidate
      onSubmit={handleSubmit(submit)}
    >
      <div className="relative">
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <input
          {...register('email')}
          className="glass-panel h-12 w-full !rounded-full pl-5 pr-14 text-sm text-white outline-none focus:ring-2 focus:ring-brand-cyan"
          id={id}
          placeholder="you@company.com"
          type="email"
        />
        <button
          aria-label="Subscribe to newsletter"
          className="absolute right-1.5 top-1.5 flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </button>
      </div>
      {errors.email ? (
        <p className="mt-2 text-xs text-red-400" role="alert">
          {errors.email.message}
        </p>
      ) : null}
      {apiError ? (
        <p className="mt-2 text-xs text-red-400" role="alert">
          {apiError}
        </p>
      ) : null}
    </form>
  );
}
