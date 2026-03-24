import {defineField, defineType} from 'sanity'
import {BarChartIcon} from '@sanity/icons'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      type: 'array',
      of: [{type: 'statItem'}],
      validation: (rule) => rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Stats', subtitle: 'Stats'}),
  },
})
