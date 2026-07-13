'use client';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { useReducedMotion } from '@/lib/framer-motion';
export function SmoothScrollLink({
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
}) {
  const reduced = useReducedMotion();
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) return;
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
        }
      }}
    >
      {children}
    </a>
  );
}
