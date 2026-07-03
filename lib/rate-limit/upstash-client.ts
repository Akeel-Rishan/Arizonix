import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) throw new Error('Missing Upstash Redis environment variables');

export const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN });
export const contactFormRateLimit = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(3, '1 h'), analytics: true, prefix: 'ratelimit:contact' });
export const newsletterRateLimit = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5, '1 h'), analytics: true, prefix: 'ratelimit:newsletter' });
