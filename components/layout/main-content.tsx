'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect, useRef } from 'react';

import { PageTransition } from '@/components/ui/page-transition';

export function MainContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.activeElement?.tagName === 'BODY') return;
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div id="main-content" ref={mainRef} tabIndex={-1}>
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
