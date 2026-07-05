import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description:
        'Short description for listing cards and SEO meta description',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated At',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Author Name' },
        {
          name: 'avatar',
          type: 'image',
          title: 'Author Photo',
          options: { hotspot: true },
        },
        { name: 'bio', type: 'text', title: 'Short Bio' },
        {
          name: 'social',
          type: 'object',
          title: 'Social Links',
          fields: [
            { name: 'linkedin', type: 'url', title: 'LinkedIn' },
            { name: 'github', type: 'url', title: 'GitHub' },
            { name: 'twitter', type: 'url', title: 'Twitter / X' },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'AI & Automation',
          'Web Development',
          'Mobile Development',
          'Cloud & Infrastructure',
          'Design',
          'Business & Strategy',
          'Case Studies',
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Block',
          fields: [
            { name: 'code', type: 'text', title: 'Code' },
            {
              name: 'language',
              type: 'string',
              title: 'Language (e.g. typescript, python)',
            },
            { name: 'filename', type: 'string', title: 'Filename (optional)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Meta Title',
          description: 'Defaults to post title if empty',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
          description: 'Defaults to excerpt if empty',
        },
        {
          name: 'ogImage',
          type: 'image',
          title: 'OG Image',
          description: 'Defaults to cover image if empty',
        },
        {
          name: 'noIndex',
          type: 'boolean',
          title: 'No Index (hide from search engines)',
          initialValue: false,
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
});
