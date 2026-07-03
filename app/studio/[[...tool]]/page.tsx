'use client';

import { NextStudio } from 'next-sanity/studio';

import config from '@/sanity/sanity.config';

export const dynamic = 'force-dynamic';

// TODO(Phase 5): protect Studio with production authentication and authorization.
export default function StudioPage() {
  return <NextStudio config={config} />;
}
