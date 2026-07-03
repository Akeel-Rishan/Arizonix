import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (mega-menu)',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'description',
      title: 'Full Description (service card)',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (lucide-react)',
      type: 'string',
      description: "Exact lucide-react icon name e.g. 'Brain', 'Zap', 'Code2'",
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'fullPageContent',
      title: 'Full Page Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text for the dedicated service page',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Meta Title' },
        {
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
        },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: { select: { title: 'name', subtitle: 'shortDescription' } },
});
