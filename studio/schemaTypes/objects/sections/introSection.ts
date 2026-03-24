import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const introSection = defineType({
  name: 'introSection',
  title: 'Intro',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Intro'}),
  },
})
