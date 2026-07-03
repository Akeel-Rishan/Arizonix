import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Industry Name',
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (lucide-react)',
      type: 'string',
    }),
    defineField({
      name: 'stat',
      title: 'Impact Stat',
      type: 'string',
      description: "e.g. '40% faster patient onboarding'",
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      options: { list: ['blue', 'purple', 'cyan'] },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({
      name: 'fullPageContent',
      title: 'Industry Page Content',
      type: 'array',
      of: [{ type: 'block' }],
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
  preview: { select: { title: 'name', subtitle: 'stat' } },
});
