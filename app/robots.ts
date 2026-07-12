import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/', '/_next/', '/*?*preview='],
      },
    ],
    sitemap: 'https://arizonix.com/sitemap.xml',
    host: 'https://arizonix.com',
  };
}
