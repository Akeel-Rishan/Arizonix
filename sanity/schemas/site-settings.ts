import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Arizonix',
    }),
    defineField({ name: 'siteTagline', title: 'Site Tagline', type: 'string' }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Default Meta Title' },
        {
          name: 'description',
          type: 'text',
          title: 'Default Meta Description',
          rows: 3,
        },
        { name: 'ogImage', type: 'image', title: 'Default OG Image' },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Contact Email' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
        { name: 'address', type: 'text', title: 'Address' },
        { name: 'calendlyUrl', type: 'url', title: 'Calendly URL' },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'github', type: 'url', title: 'GitHub' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
      ],
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          type: 'boolean',
          title: 'Show Banner',
          initialValue: false,
        },
        { name: 'message', type: 'string', title: 'Banner Message' },
        { name: 'link', type: 'url', title: 'Banner Link (optional)' },
        { name: 'linkText', type: 'string', title: 'Link Text' },
      ],
    }),
  ],
  preview: { select: { title: 'siteName' } },
});
