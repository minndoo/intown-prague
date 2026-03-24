import {defineField, defineType} from 'sanity'
import {LaunchIcon} from '@sanity/icons'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Call to Action',
  type: 'object',
  icon: LaunchIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cta',
      title: 'Button',
      type: 'ctaLink',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Call to Action'}),
  },
})
