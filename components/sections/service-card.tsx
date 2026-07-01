'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { fadeInUp } from '@/lib/motion';
import { getServiceHref, type Service } from '@/lib/services-data';

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div className="h-full" variants={fadeInUp}>
      <Link
        className="group block h-full rounded-xl2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-navy-950"
        href={getServiceHref(service)}
      >
        <Card className="relative h-full" hover>
          <ArrowUpRight
            aria-hidden="true"
            className="absolute right-6 top-6 size-5 translate-y-1 text-brand-cyan opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          />

          <CardHeader className="pr-9">
            <span className="mb-4 flex size-12 shrink-0 items-center justify-center self-start rounded-xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/15 via-brand-purple/15 to-brand-cyan/15 text-brand-cyan shadow-glow-blue transition duration-300 group-hover:scale-105 group-hover:border-brand-cyan/40 group-hover:from-brand-blue/30 group-hover:via-brand-purple/30 group-hover:to-brand-cyan/30 group-hover:text-white">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm leading-7 text-slate-300">
              {service.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
