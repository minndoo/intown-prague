import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'
import {fragmentField} from '../primitives/anchorField'

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    fragmentField,
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'faqItem'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'FAQ'}),
  },
})
