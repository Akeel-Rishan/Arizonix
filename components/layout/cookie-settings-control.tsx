'use client';

import { useCallback, useRef, useState } from 'react';

import { CookieSettingsModal } from '@/components/ui/cookie-settings-modal';

export function CookieSettingsControl({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <>
      <button
        aria-haspopup="dialog"
        className={className}
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        type="button"
      >
        Cookie Settings
      </button>
      <CookieSettingsModal isOpen={isOpen} onClose={close} />
    </>
  );
}
