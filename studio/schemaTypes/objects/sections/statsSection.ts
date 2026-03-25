import {defineField, defineType} from 'sanity'
import {BarChartIcon} from '@sanity/icons'
import {fragmentField} from '../primitives/anchorField'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    fragmentField,
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
