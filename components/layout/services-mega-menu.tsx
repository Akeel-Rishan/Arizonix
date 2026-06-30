import { motion } from 'framer-motion';
import Link from 'next/link';

import type { ServiceLink } from '@/components/layout/nav-data';
import { ServiceIcon } from '@/components/layout/service-icon';
import { scaleIn } from '@/lib/motion';

interface ServicesMegaMenuProps {
  onNavigate: () => void;
  services: readonly ServiceLink[];
}

export function ServicesMegaMenu({
  onNavigate,
  services,
}: ServicesMegaMenuProps) {
  return (
    <div className="fixed left-1/2 top-[4.75rem] w-[min(60rem,calc(100vw-3rem))] -translate-x-1/2">
      <motion.div
        animate="visible"
        className="glass-panel overflow-hidden bg-navy-950/90 p-3 shadow-glow-purple"
        exit="exit"
        initial="hidden"
        role="menu"
        variants={scaleIn}
      >
        <div className="grid grid-cols-2 gap-1 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              className="group flex min-w-0 gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              href={service.href}
              key={service.href}
              onClick={onNavigate}
              role="menuitem"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand-blue/20 bg-brand-blue/10 text-brand-cyan transition-colors duration-200 group-hover:border-brand-cyan/40 group-hover:text-white">
                <ServiceIcon className="size-4" name={service.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-100 transition-colors duration-200 group-hover:text-white">
                  {service.name}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-400">
                  {service.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
