'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ServiceCard } from '@/components/sections/service-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { staggerContainer } from '@/lib/motion';
import {
  getServiceHref,
  services,
  type ServiceSlug,
} from '@/lib/services-data';

const FEATURED_SERVICE_SLUGS: readonly ServiceSlug[] = [
  'ai-automation-solutions',
  'ai-agents-chatbots',
  'web-application-development',
  'mobile-application-development',
  'custom-software-development',
  'cloud-solutions',
];

const featuredServices = services
  .filter((service) => FEATURED_SERVICE_SLUGS.includes(service.slug))
  .toSorted(
    (first, second) =>
      FEATURED_SERVICE_SLUGS.indexOf(first.slug) -
      FEATURED_SERVICE_SLUGS.indexOf(second.slug),
  );

const additionalServices = services.filter(
  (service) => !FEATURED_SERVICE_SLUGS.includes(service.slug),
);

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          description="From strategy through delivery, Arizonix brings together software engineering and practical AI capabilities around the outcomes that matter most to your business."
          eyebrow="What We Do"
          title={
            <>
              Solutions Built For <span className="text-gradient">Growth</span>
            </>
          }
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          data-testid="featured-services-grid"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.12 }}
          whileInView="visible"
        >
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        <div className="mt-12 text-center lg:mt-14">
          <p className="text-sm font-medium text-slate-500">Also available:</p>
          <div
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
            data-testid="additional-services"
          >
            {additionalServices.map((service) => (
              <Link
                className="group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                href={getServiceHref(service)}
                key={service.slug}
              >
                <Badge
                  className="transition duration-200 group-hover:border-brand-cyan/40 group-hover:bg-white/5 group-hover:text-white"
                  variant="outline"
                >
                  {service.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href="/services"
            icon={ArrowRight}
            iconPosition="right"
            variant="outline"
          >
            Explore All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
