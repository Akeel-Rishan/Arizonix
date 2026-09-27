import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { navigation } from '@/components/layout/nav-data';
import { ServiceIcon } from '@/components/layout/service-icon';
import { getServiceHref } from '@/lib/services-data';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  isServicesOpen: boolean;
  onClose: () => void;
  onToggleServices: () => void;
}

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

export function MobileNav({
  isOpen,
  isServicesOpen,
  onClose,
  onToggleServices,
}: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-white/10 bg-navy-950/95 px-5 pb-8 pt-6 backdrop-blur-xl lg:hidden">
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex min-h-full max-w-2xl flex-col"
      >
        <div className="flex-1 space-y-2">
          {navigation.map((item) =>
            item.type === 'services' ? (
              <div key={item.label}>
                <button
                  aria-controls="mobile-services"
                  aria-expanded={isServicesOpen}
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-xl font-semibold text-slate-100 transition-colors duration-200 hover:bg-white/5 hover:text-white',
                    focusStyles,
                  )}
                  onClick={onToggleServices}
                  type="button"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'size-5 transition-transform duration-200',
                      isServicesOpen && 'rotate-180',
                    )}
                  />
                </button>

                {isServicesOpen ? (
                  <div
                    className="grid gap-1 overflow-hidden pb-3 pl-3 pt-2 sm:grid-cols-2"
                    id="mobile-services"
                  >
                    {item.services.map((service) => (
                      <Link
                        className={cn(
                          'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white',
                          focusStyles,
                        )}
                        href={getServiceHref(service)}
                        key={service.slug}
                        onClick={onClose}
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-cyan">
                          <ServiceIcon className="size-4" icon={service.icon} />
                        </span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                className={cn(
                  'block rounded-xl px-4 py-3 text-xl font-semibold text-slate-100 transition-colors duration-200 hover:bg-white/5 hover:text-white',
                  focusStyles,
                )}
                href={item.href}
                key={item.href}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <Link
          className={cn(
            'mt-8 flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-6 py-3 text-base font-semibold text-white shadow-glow-blue transition duration-200 hover:brightness-110',
            focusStyles,
          )}
          href="/contact"
          onClick={onClose}
        >
          Schedule a Call
        </Link>
      </nav>
    </div>
  );
}
