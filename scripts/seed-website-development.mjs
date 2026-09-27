import { createClient } from '@sanity/client';
import nextEnv from '@next/env';

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !apiVersion || !token) {
  throw new Error(
    'Missing Sanity configuration. Check NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_API_VERSION, and SANITY_API_TOKEN.',
  );
}

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn: false,
});

const span = (key, text, marks = []) => ({
  _key: key,
  _type: 'span',
  marks,
  text,
});

const block = (key, style, text) => ({
  _key: key,
  _type: 'block',
  children: [span(`${key}-span`, text)],
  markDefs: [],
  style,
});

const bullet = (key, text) => ({
  ...block(key, 'normal', text),
  level: 1,
  listItem: 'bullet',
});

const fullPageContent = [
  block(
    'website-intro',
    'normal',
    'Your website should do more than look polished. It should explain your value quickly, earn trust, generate qualified enquiries, and remain fast as your business grows. We design and engineer conversion-focused websites around those outcomes.',
  ),
  block('website-build-heading', 'h2', 'What we build'),
  bullet('website-build-corporate', 'Corporate and company websites'),
  bullet('website-build-product', 'Product and SaaS marketing websites'),
  bullet('website-build-landing', 'Campaign and lead-generation landing pages'),
  bullet(
    'website-build-commerce',
    'Content-rich and commerce-ready experiences',
  ),
  bullet(
    'website-build-redesign',
    'Website redesigns and performance modernisation',
  ),
  block('website-included-heading', 'h2', 'What is included'),
  block(
    'website-included-copy',
    'normal',
    'Every engagement is shaped around your goals, audience, and internal workflow. A typical website project includes strategy, information architecture, responsive interface design, component-based development, CMS integration, analytics setup, search optimisation foundations, quality assurance, deployment, and launch support.',
  ),
  block('website-process-heading', 'h2', 'Our website development process'),
  block('website-process-discovery-heading', 'h3', '1. Discovery and strategy'),
  block(
    'website-process-discovery-copy',
    'normal',
    'We clarify business goals, target audiences, competitors, content requirements, conversion paths, and technical constraints before design begins.',
  ),
  block(
    'website-process-structure-heading',
    'h3',
    '2. Structure and content planning',
  ),
  block(
    'website-process-structure-copy',
    'normal',
    'We organise the sitemap and page hierarchy so visitors can find answers quickly and every important page supports a clear next action.',
  ),
  block('website-process-design-heading', 'h3', '3. UX and visual design'),
  block(
    'website-process-design-copy',
    'normal',
    'We turn the approved structure into responsive, accessible layouts that reflect your brand and maintain a strong visual hierarchy across screen sizes.',
  ),
  block(
    'website-process-engineering-heading',
    'h3',
    '4. Engineering and CMS integration',
  ),
  block(
    'website-process-engineering-copy',
    'normal',
    'We build reusable components, connect the content management system, optimise images and code, and implement forms, analytics, integrations, and structured metadata.',
  ),
  block('website-process-launch-heading', 'h3', '5. Testing and launch'),
  block(
    'website-process-launch-copy',
    'normal',
    'Before launch, we test responsive behaviour, browser compatibility, accessibility, forms, metadata, performance, redirects, and production configuration. We then monitor the release and resolve launch issues quickly.',
  ),
  block(
    'website-quality-heading',
    'h2',
    'Built for speed, accessibility, and discoverability',
  ),
  block(
    'website-quality-copy',
    'normal',
    'Performance and usability are engineering requirements, not finishing touches. We use modern rendering, image optimisation, sensible caching, semantic markup, keyboard-friendly interactions, and technical SEO practices to create a dependable experience for users and search engines.',
  ),
  block(
    'website-technology-heading',
    'h2',
    'Technology selected for the project',
  ),
  block(
    'website-technology-copy',
    'normal',
    'We commonly work with Next.js, React, TypeScript, Tailwind CSS, Sanity, and modern cloud platforms. The final stack is selected according to editing needs, integrations, traffic expectations, security requirements, and long-term maintainability—not trend alone.',
  ),
  block('website-deliverables-heading', 'h2', 'Typical deliverables'),
  bullet(
    'website-deliverable-strategy',
    'Approved sitemap and content structure',
  ),
  bullet('website-deliverable-design', 'Responsive page and component designs'),
  bullet(
    'website-deliverable-system',
    'Reusable design system and UI components',
  ),
  bullet(
    'website-deliverable-cms',
    'Configured CMS with editor-friendly fields',
  ),
  bullet('website-deliverable-seo', 'Technical SEO and analytics foundations'),
  bullet(
    'website-deliverable-deploy',
    'Production deployment and launch checklist',
  ),
  bullet(
    'website-deliverable-handoff',
    'Documentation, training, and handover',
  ),
  block('website-fit-heading', 'h2', 'Who this service is for'),
  block(
    'website-fit-copy',
    'normal',
    'This service is a strong fit for organisations launching a new brand, replacing an outdated website, improving lead generation, consolidating scattered content, or preparing their digital presence for the next stage of growth.',
  ),
  block('website-faq-heading', 'h2', 'Frequently asked questions'),
  block(
    'website-faq-time-heading',
    'h3',
    'How long does a website project take?',
  ),
  block(
    'website-faq-time-copy',
    'normal',
    'Most projects take approximately six to twelve weeks. The exact schedule depends on the number of pages, content readiness, integrations, approval speed, and migration requirements.',
  ),
  block(
    'website-faq-content-heading',
    'h3',
    'Can your team help with website content?',
  ),
  block(
    'website-faq-content-copy',
    'normal',
    'Yes. We can organise existing material, define page-level messaging requirements, and collaborate on conversion-focused copy. The content scope is agreed before the project begins.',
  ),
  block(
    'website-faq-edit-heading',
    'h3',
    'Will we be able to edit the website ourselves?',
  ),
  block(
    'website-faq-edit-copy',
    'normal',
    'Yes. When content editing is required, we configure a CMS around the fields your team actually needs and provide guidance for managing pages safely.',
  ),
  block(
    'website-faq-support-heading',
    'h3',
    'Do you provide support after launch?',
  ),
  block(
    'website-faq-support-copy',
    'normal',
    'Yes. We can provide ongoing maintenance, performance monitoring, content improvements, feature development, and technical support through a separate support arrangement.',
  ),
];

const existing = await client.fetch(
  '*[_type == "service" && slug.current == $slug][0]{_id,name}',
  { slug: 'website-development' },
);

if (existing?._id) {
  await client.patch(existing._id).set({ fullPageContent }).commit();
  console.log(
    `Updated Full Page Content for ${existing.name ?? 'Website Development'}.`,
  );
} else {
  await client.create({
    _id: 'service-website-development',
    _type: 'service',
    description:
      'Conversion-focused corporate and product websites engineered for speed, clarity, and sustainable growth.',
    featured: true,
    fullPageContent,
    icon: 'PanelsTopLeft',
    name: 'Website Development',
    order: 0,
    shortDescription: 'High-performance websites built to convert and scale.',
    slug: { _type: 'slug', current: 'website-development' },
  });
  console.log('Created Website Development with complete Full Page Content.');
}
