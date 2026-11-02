import Link from 'next/link';

import { ServiceIcon } from '@/components/layout/service-icon';
import { getServiceHref, type Service } from '@/lib/services-data';

interface ServicesMegaMenuProps {
  onNavigate: () => void;
  services: readonly Service[];
}

export function ServicesMegaMenu({
  onNavigate,
  services,
}: ServicesMegaMenuProps) {
  return (
    <div className="fixed left-1/2 top-16 z-20 w-[min(60rem,calc(100vw-3rem))] -translate-x-1/2 pt-3">
      <div
        className="overflow-hidden rounded-xl2 border border-white/15 bg-navy-950 p-3 shadow-2xl shadow-navy-950/70"
        role="menu"
      >
        <div className="grid grid-cols-2 gap-1 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              className="group flex min-w-0 gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              href={getServiceHref(service)}
              key={service.slug}
              onClick={onNavigate}
              role="menuitem"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand-blue/20 bg-brand-blue/10 text-brand-cyan transition-colors duration-200 group-hover:border-brand-cyan/40 group-hover:text-white">
                <ServiceIcon className="size-4" icon={service.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-100 transition-colors duration-200 group-hover:text-white">
                  {service.name}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-300">
                  {service.shortDescription}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
