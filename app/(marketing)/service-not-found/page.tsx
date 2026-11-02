import type { Metadata } from 'next';

import { ServiceNotFound } from '@/components/pages/services/service-not-found';

export const metadata: Metadata = {
  title: 'Service Not Found',
  robots: { index: false, follow: false },
};

export default ServiceNotFound;
