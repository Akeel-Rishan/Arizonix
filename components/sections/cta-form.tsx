'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  useForm,
  type FieldError,
  type UseFormRegisterReturn,
} from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Analytics } from '@/lib/analytics/events';
import { AnimatePresence, motion, useReducedMotion } from '@/lib/framer-motion';
import { ctaFormSchema, type CTAFormValues } from '@/lib/schemas/contact';
import { cn } from '@/lib/utils';

const services = [
  'AI Automation Solutions',
  'AI Agents & Chatbots',
  'Web Application Development',
  'Mobile App Development',
  'Enterprise Software',
  'Custom Software Development',
  'Cloud Solutions',
  'UI/UX Design',
  'Other',
];

const budgets = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000+',
];

const referralOptions = [
  'Google Search',
  'LinkedIn',
  'Referral from a client',
  'Social Media',
  'Cold Outreach',
  'Other',
];

const fieldClassName =
  'w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue';

interface FieldShellProps {
  children: React.ReactNode;
  error?: FieldError;
  id: keyof CTAFormValues;
  label: string;
  required?: boolean;
}

function FieldShell({
  children,
  error,
  id,
  label,
  required = false,
}: FieldShellProps) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-medium text-slate-300"
        htmlFor={id}
      >
        {label}
        {required ? <span className="text-red-400"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p
          className="mt-1 text-xs text-red-400"
          id={`${id}-error`}
          role="alert"
        >
          {error.message}
        </p>
      ) : null}
    </div>
  );
}

function getFieldClasses(error: FieldError | undefined, isValid: boolean) {
  return cn(
    fieldClassName,
    error && 'border-red-500/70 focus:border-red-500 focus:ring-red-500/50',
    isValid && 'border-brand-cyan/50',
  );
}

function fieldAccessibility(
  id: keyof CTAFormValues,
  error: FieldError | undefined,
  required: boolean,
) {
  return {
    'aria-describedby': error ? `${id}-error` : undefined,
    'aria-invalid': Boolean(error),
    'aria-required': required || undefined,
  };
}

export function CTAForm() {
  const reducedMotion = Boolean(useReducedMotion());
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const {
    formState: { errors, isSubmitting, touchedFields },
    handleSubmit,
    register,
    watch,
  } = useForm<CTAFormValues>({
    defaultValues: {
      budget: '',
      businessEmail: '',
      companyName: '',
      description: '',
      fullName: '',
      phone: '',
      referral: '',
      service: '',
      website_url: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(ctaFormSchema),
  });
  const description = watch('description') ?? '';

  const onSubmit = async (values: CTAFormValues) => {
    setSubmitError(null);
    Analytics.contactFormStart();

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      if (response.status === 429) {
        setSubmitError("You've submitted too many requests. Please wait a few minutes before trying again.");
        return;
      }
      const result = (await response.json()) as { error?: string; success?: boolean };
      if (!response.ok || !result.success) throw new Error(result.error ?? 'Contact request failed');
      Analytics.contactFormSubmit(values.service, values.budget);
      setSubmittedName(values.fullName.trim().split(/\s+/)[0]);
    } catch {
      Analytics.contactFormError(values.service);
      setSubmitError(
        'Something went wrong. Please try again or email us at hello@arizonix.com',
      );
    }
  };

  const inputProps = (
    id: keyof CTAFormValues,
    registration: UseFormRegisterReturn,
    required: boolean,
  ) => ({
    ...registration,
    ...fieldAccessibility(id, errors[id], required),
    className: getFieldClasses(
      errors[id],
      Boolean(touchedFields[id] && !errors[id]),
    ),
    id,
  });

  return (
    <div aria-live="polite">
      <AnimatePresence initial={false} mode="wait">
        {submittedName ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            aria-live="polite"
            className="flex min-h-[36rem] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            key="success"
            role="status"
            transition={{ duration: reducedMotion ? 0 : 0.35 }}
          >
            {/* Honeypot — hidden visually, but intentionally present for bots. */}
            <div aria-hidden="true" style={{ left: '-9999px', position: 'absolute', top: '-9999px' }} tabIndex={-1}>
              <label htmlFor="website_url_field">Website URL</label>
              <input autoComplete="off" id="website_url_field" tabIndex={-1} type="text" {...register('website_url')} />
            </div>
            <CheckCircle2 className="size-16 text-brand-cyan" />
            <h3 className="mt-6 text-2xl font-bold text-white">
              Message Received!
            </h3>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              Thank you, {submittedName}! We&apos;ll review your project details
              and get back to you within 48 hours with a personalized response.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              In the meantime, feel free to schedule a call directly on
              Calendly.
            </p>
            <Button
              className="mt-6"
              href="https://calendly.com"
              rel="noopener noreferrer"
              target="_blank"
              variant="secondary"
            >
              Schedule on Calendly
            </Button>
          </motion.div>
        ) : (
          <motion.form
            animate={{ opacity: 1 }}
            aria-label="Project inquiry form"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            key="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FieldShell
                error={errors.fullName}
                id="fullName"
                label="Full Name"
                required
              >
                <input
                  autoComplete="name"
                  type="text"
                  {...inputProps('fullName', register('fullName'), true)}
                />
              </FieldShell>
              <FieldShell
                error={errors.businessEmail}
                id="businessEmail"
                label="Business Email"
                required
              >
                <input
                  autoComplete="email"
                  type="email"
                  {...inputProps(
                    'businessEmail',
                    register('businessEmail'),
                    true,
                  )}
                />
              </FieldShell>
              <FieldShell
                error={errors.companyName}
                id="companyName"
                label="Company Name"
                required
              >
                <input
                  autoComplete="organization"
                  type="text"
                  {...inputProps('companyName', register('companyName'), true)}
                />
              </FieldShell>
              <FieldShell error={errors.phone} id="phone" label="Phone Number">
                <input
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  {...inputProps('phone', register('phone'), false)}
                />
              </FieldShell>
              <FieldShell
                error={errors.service}
                id="service"
                label="Service Interested In"
                required
              >
                <select {...inputProps('service', register('service'), true)}>
                  <option className="bg-navy-900" value="">
                    Select a service...
                  </option>
                  {services.map((service) => (
                    <option
                      className="bg-navy-900"
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </FieldShell>
              <FieldShell
                error={errors.budget}
                id="budget"
                label="Project Budget"
                required
              >
                <select {...inputProps('budget', register('budget'), true)}>
                  <option className="bg-navy-900" value="">
                    Select budget range...
                  </option>
                  {budgets.map((budget) => (
                    <option className="bg-navy-900" key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </FieldShell>
            </div>

            <div className="mt-4">
              <FieldShell
                error={errors.description}
                id="description"
                label="Project Description"
                required
              >
                <textarea
                  maxLength={1000}
                  placeholder="Tell us about your project — what problem are you solving, who are your users, and what does success look like for your business?"
                  rows={4}
                  {...inputProps('description', register('description'), true)}
                />
                <p className="mt-1 text-right text-xs text-slate-500">
                  {description.length} / 1000
                </p>
              </FieldShell>
            </div>

            <div className="mt-4">
              <FieldShell
                error={errors.referral}
                id="referral"
                label="How did you hear about us?"
              >
                <select
                  {...inputProps('referral', register('referral'), false)}
                >
                  <option className="bg-navy-900" value="">
                    Select an option...
                  </option>
                  {referralOptions.map((option) => (
                    <option className="bg-navy-900" key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FieldShell>
            </div>

            {submitError ? (
              <div
                className="glass-panel mt-5 flex items-start gap-3 rounded-xl border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
                role="alert"
              >
                <AlertCircle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                />
                {submitError}
              </div>
            ) : null}

            <p className="mt-6 text-center text-xs text-slate-500">
              🔒 Your information is secure and will never be shared with third
              parties.
            </p>
            <Button
              aria-disabled={isSubmitting}
              aria-label={
                isSubmitting
                  ? 'Sending your inquiry...'
                  : 'Send Project Inquiry'
              }
              className="mt-3 w-full"
              icon={Send}
              loading={isSubmitting}
              size="lg"
              type="submit"
              variant="primary"
            >
              {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
            </Button>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              By submitting, you agree to our{' '}
              <Link
                className="text-slate-400 underline hover:text-white"
                href="/privacy"
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                className="text-slate-400 underline hover:text-white"
                href="/terms"
              >
                Terms of Service
              </Link>
              .
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
