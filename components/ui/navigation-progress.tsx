'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { LoadingVisual } from '@/components/ui/loading-visual';

const OVERLAY_DELAY_MS = 180;
const SAFETY_TIMEOUT_MS = 10000;

export function NavigationProgress() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayTimer = useRef<number>();
  const safetyTimer = useRef<number>();

  const clearTimers = useCallback(() => {
    if (overlayTimer.current !== undefined) {
      window.clearTimeout(overlayTimer.current);
    }
    if (safetyTimer.current !== undefined) {
      window.clearTimeout(safetyTimer.current);
    }
    overlayTimer.current = undefined;
    safetyTimer.current = undefined;
  }, []);

  const finishNavigation = useCallback(() => {
    clearTimers();
    setIsNavigating(false);
    setShowOverlay(false);
  }, [clearTimers]);

  const startNavigation = useCallback(() => {
    clearTimers();
    setIsNavigating(true);
    overlayTimer.current = window.setTimeout(
      () => setShowOverlay(true),
      OVERLAY_DELAY_MS,
    );
    safetyTimer.current = window.setTimeout(
      finishNavigation,
      SAFETY_TIMEOUT_MS,
    );
  }, [clearTimers, finishNavigation]);

  useEffect(() => {
    finishNavigation();
  }, [finishNavigation, pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (
        !anchor ||
        anchor.download ||
        anchor.target === '_blank' ||
        anchor.dataset.noRouteLoader !== undefined
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname) {
        return;
      }

      startNavigation();
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', startNavigation);
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', startNavigation);
      clearTimers();
    };
  }, [clearTimers, startNavigation]);

  return (
    <>
      <span
        aria-hidden="true"
        className="route-loader-progress"
        data-active={isNavigating || undefined}
      >
        <span />
      </span>
      {showOverlay ? (
        <div
          aria-label="Loading the next page"
          aria-live="polite"
          className="route-loader-overlay"
          role="status"
        >
          <LoadingVisual />
        </div>
      ) : null}
    </>
  );
}
