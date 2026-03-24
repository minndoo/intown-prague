import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const featureGridSection = defineType({
  name: 'featureGridSection',
  title: 'Feature Grid',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'featureCard'}],
      validation: (rule) => rule.required().min(1).max(12),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Feature Grid'}),
  },
})
