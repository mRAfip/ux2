import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projects',
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
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // enables crop + focus options
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Content Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
        name: "coverVideo",
        title: "Cover Video",
        type: "url",
        description: "Optional. MP4 URL for background hero section.",
    }),
  ],
});
