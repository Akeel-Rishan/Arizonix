import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from '@/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.',
  );
}

export default defineConfig({
  name: 'arizonix-studio',
  title: 'Arizonix CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('portfolioProject').title(
              'Portfolio Projects',
            ),
            S.documentTypeListItem('caseStudy').title('Case Studies'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('teamMember').title('Team Members'),
            S.documentTypeListItem('faqItem').title('FAQ Items'),
            S.documentTypeListItem('industry').title('Industries'),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    actions: (previousActions, context) =>
      context.schemaType === 'siteSettings'
        ? previousActions.filter((action) =>
            ['publish', 'discardChanges', 'restore'].includes(
              action.action ?? '',
            ),
          )
        : previousActions,
    newDocumentOptions: (previousOptions) =>
      previousOptions.filter((option) => option.templateId !== 'siteSettings'),
  },
});
