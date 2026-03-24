import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact',
  type: 'object',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locations',
      type: 'array',
      of: [{type: 'contactItem'}],
      validation: (rule) => rule.required().min(1).max(4),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Contact'}),
  },
})
