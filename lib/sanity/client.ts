import { createClient } from 'next-sanity';

import { validateEnv } from '@/lib/env';

validateEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion)
  throw new Error('Invalid Sanity configuration.');

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  timeout: 2000,
  useCdn: process.env.NODE_ENV === 'production',
});

export const previewClient = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.SANITY_API_TOKEN || undefined,
  timeout: 5000,
  useCdn: false,
});

export const getClient = (preview = false) =>
  preview ? previewClient : client;
