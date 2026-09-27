'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect, useRef } from 'react';

export function MainContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (document.activeElement?.tagName === 'BODY') return;
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <main id="main-content" ref={mainRef} tabIndex={-1}>
      {children}
    </main>
  );
}
