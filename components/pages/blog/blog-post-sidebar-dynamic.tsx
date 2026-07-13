'use client';

import dynamic from 'next/dynamic';

const BlogPostSidebar = dynamic(
  () =>
    import('@/components/pages/blog/blog-post-sidebar').then(
      (module) => module.BlogPostSidebar,
    ),
  { loading: () => <div className="w-[280px]" />, ssr: false },
);

export { BlogPostSidebar };
