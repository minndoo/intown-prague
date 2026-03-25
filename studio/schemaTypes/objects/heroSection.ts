import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'tagline',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'tagline'},
  },
})
