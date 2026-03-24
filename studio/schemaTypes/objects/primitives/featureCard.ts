import {defineField, defineType} from 'sanity'

export const featureCard = defineType({
  name: 'featureCard',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image.image',
    },
  },
})
