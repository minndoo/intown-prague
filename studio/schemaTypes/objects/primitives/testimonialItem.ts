import {defineField, defineType} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

export const testimonialItem = defineType({
  name: 'testimonialItem',
  title: 'Testimonial',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'e.g. "Food Critic, The Prague Times"',
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'quote',
      media: 'avatar',
    },
  },
})
