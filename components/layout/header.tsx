'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { MobileNav } from '@/components/layout/mobile-nav';
import { navigation } from '@/components/layout/nav-data';
import { ServicesMegaMenu } from '@/components/layout/services-mega-menu';
import { cn } from '@/lib/utils';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        isServicesOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(
    () => () => {
      if (servicesCloseTimerRef.current) {
        clearTimeout(servicesCloseTimerRef.current);
      }
    },
    [],
  );

  const cancelDesktopMenuClose = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
  };

  const openDesktopMenu = () => {
    cancelDesktopMenuClose();
    setIsServicesOpen(true);
  };

  const closeDesktopMenu = () => {
    cancelDesktopMenuClose();
    setIsServicesOpen(false);
  };

  const scheduleDesktopMenuClose = () => {
    cancelDesktopMenuClose();
    servicesCloseTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, 180);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-20 border-b border-transparent transition-[background-color,border-color,box-shadow] duration-300',
        isServicesOpen
          ? 'border-white/10 bg-navy-950 shadow-lg shadow-navy-950/20'
          : (isScrolled || isMobileOpen) &&
              'border-white/10 bg-navy-950/80 shadow-lg shadow-navy-950/20 backdrop-blur-xl',
      )}
      data-scrolled={isScrolled}
      ref={headerRef}
    >
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-6 xl:px-8">
        <Link
          aria-label="Arizonix home"
          className={cn(
            'flex shrink-0 items-center gap-2 rounded-lg',
            focusStyles,
          )}
          href="/"
          onClick={closeDesktopMenu}
        >
          <span className="relative h-8 w-36 overflow-hidden rounded-lg sm:w-44">
            <Image
              alt="Arizonix"
              className="object-contain object-left"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              src="/images/arizonix-navbar-logo-transparent-v2.png"
            />
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 lg:flex xl:gap-5"
        >
          {navigation.map((item) =>
            item.type === 'services' ? (
              <div
                className="relative"
                key={item.label}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsServicesOpen(false);
                  }
                }}
                onMouseEnter={openDesktopMenu}
                onMouseLeave={scheduleDesktopMenuClose}
              >
                <button
                  aria-controls="services-mega-menu"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    'group relative flex items-center gap-1 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 after:absolute after:inset-x-1 after:bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-cyan after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100',
                    focusStyles,
                  )}
                  onClick={() => setIsServicesOpen((isOpen) => !isOpen)}
                  onFocus={openDesktopMenu}
                  type="button"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'size-4 transition-transform duration-200',
                      isServicesOpen && 'rotate-180',
                    )}
                  />
                </button>

                {isServicesOpen ? (
                  <div id="services-mega-menu">
                    <ServicesMegaMenu
                      onNavigate={closeDesktopMenu}
                      services={item.services}
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                className={cn(
                  'relative py-3 text-sm font-medium text-slate-300 transition-colors duration-200 after:absolute after:inset-x-1 after:bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-cyan after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100',
                  focusStyles,
                )}
                href={item.href}
                key={item.href}
                onClick={closeDesktopMenu}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            className={cn(
              'flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-4 py-2.5 text-sm font-semibold text-white shadow-glow-blue transition duration-200 hover:brightness-110 xl:px-5',
              focusStyles,
            )}
            href="/contact"
            onClick={closeDesktopMenu}
          >
            Schedule a Call
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition-colors duration-200 hover:border-brand-cyan/40 hover:text-white lg:hidden',
            focusStyles,
          )}
          onClick={() => setIsMobileOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {isServicesOpen ? (
        <div
          aria-hidden="true"
          className="fixed inset-x-0 bottom-0 top-20 z-10 hidden bg-navy-950/70 backdrop-blur-sm lg:block"
          onClick={closeDesktopMenu}
        />
      ) : null}

      <div id="mobile-navigation">
        <MobileNav
          isOpen={isMobileOpen}
          isServicesOpen={isMobileServicesOpen}
          onClose={closeMobileMenu}
          onToggleServices={() => setIsMobileServicesOpen((isOpen) => !isOpen)}
        />
      </div>
    </header>
  );
}
