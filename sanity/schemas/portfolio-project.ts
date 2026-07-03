import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'AI Automation',
          'Healthcare',
          'Finance',
          'E-commerce',
          'Construction',
          'Logistics',
          'Education',
          'Manufacturing',
          'Other',
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({
      name: 'tags',
      title: 'Tech Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'results',
      title: 'Business Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'metric',
              type: 'string',
              title: "Metric Value (e.g. '3x')",
            },
            {
              name: 'label',
              type: 'string',
              title: "Metric Label (e.g. 'Lead Conversion Rate')",
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'screenshots',
      title: 'Project Screenshots',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'device',
      title: 'Device Mockup Type',
      type: 'string',
      options: { list: ['desktop', 'tablet', 'mobile'] },
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role & Company' },
        {
          name: 'avatar',
          type: 'image',
          title: 'Author Photo',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'fullCaseStudy',
      title: 'Full Case Study Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
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
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
});
