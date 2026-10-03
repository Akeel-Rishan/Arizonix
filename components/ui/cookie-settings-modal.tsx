'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

import {
  getAnalyticsConsent,
  setAnalyticsConsent,
} from '@/lib/analytics/consent';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookieSettingsModal({
  isOpen,
  onClose,
}: CookieSettingsModalProps) {
  const [analyticsConsent, setAnalyticsConsentState] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const analyticsSwitchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    setAnalyticsConsentState(getAnalyticsConsent() === 'accepted');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    analyticsSwitchRef.current?.focus();

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSave = () => {
    setAnalyticsConsent(analyticsConsent ? 'accepted' : 'declined');
    onClose();
  };

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href]',
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      aria-labelledby="cookie-settings-title"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={trapFocus}
      role="dialog"
    >
      <div
        className="glass-panel w-full max-w-md rounded-xl2 border border-white/15 p-6 shadow-2xl"
        ref={dialogRef}
      >
        <h2
          className="mb-2 text-lg font-bold text-white"
          id="cookie-settings-title"
        >
          Cookie Settings
        </h2>
        <p className="mb-4 text-sm leading-6 text-slate-400">
          Choose whether we may use analytics cookies. Your choice takes effect
          immediately and can be changed at any time.
        </p>

        <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
          <div>
            <p className="text-sm font-medium text-white">Essential Cookies</p>
            <p className="mt-0.5 text-xs leading-5 text-slate-400">
              Required for the website to function and remember your choice.
              These cannot be disabled.
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-brand-cyan">
            Always On
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Analytics Cookies</p>
            <p className="mt-0.5 text-xs leading-5 text-slate-400">
              Google Analytics 4 helps us understand how visitors use the site.
              We do not use advertising cookies.
            </p>
          </div>
          <button
            aria-checked={analyticsConsent}
            aria-label="Allow analytics cookies"
            className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 ${
              analyticsConsent ? 'bg-brand-blue' : 'bg-white/20'
            }`}
            onClick={() => setAnalyticsConsentState((current) => !current)}
            ref={analyticsSwitchRef}
            role="switch"
            type="button"
          >
            <span
              aria-hidden="true"
              className={`inline-block size-5 rounded-full bg-white shadow transition-transform duration-200 ${
                analyticsConsent ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            className="min-h-11 flex-1 rounded-lg border border-white/20 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="min-h-11 flex-1 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            onClick={handleSave}
            type="button"
          >
            Save Preferences
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          See our{' '}
          <Link
            className="text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            href="/privacy"
          >
            Privacy Policy
          </Link>{' '}
          for more information.
        </p>
      </div>
    </div>
  );
}
