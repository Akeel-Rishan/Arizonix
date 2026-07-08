'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const acceptRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  useEffect(() => {
    setMounted(true);
    if (!window.localStorage.getItem('arizonix-cookie-consent')) setShow(true);
  }, []);
  useEffect(() => {
    if (show) acceptRef.current?.focus();
  }, [show]);
  const choose = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem('arizonix-cookie-consent', value);
    setShow(false);
  };
  if (!mounted) return null;
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          animate={{ y: 0 }}
          aria-label="Cookie consent"
          aria-live="polite"
          className="glass-panel fixed inset-x-0 bottom-0 z-50 flex flex-col items-start justify-between gap-4 rounded-none border-t border-white/10 px-6 py-4 md:flex-row md:items-center"
          exit={{ y: 120 }}
          initial={{ y: 120 }}
          role="dialog"
        >
          <div className="flex gap-3 text-sm text-slate-300">
            <Cookie className="size-5 shrink-0 text-brand-cyan" />
            <p>
              We use cookies to improve your experience and analyze traffic. See
              our{' '}
              <Link className="text-brand-blue underline" href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <Button
              className="flex-1"
              onClick={() => choose('declined')}
              size="sm"
              variant="outline"
            >
              Decline
            </Button>
            <Button
              className="flex-1"
              onClick={() => choose('accepted')}
              ref={acceptRef}
              size="sm"
            >
              Accept All
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
