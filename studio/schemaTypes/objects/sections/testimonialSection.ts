import {defineField, defineType} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'
import {fragmentField} from '../primitives/anchorField'

export const testimonialSection = defineType({
  name: 'testimonialSection',
  title: 'Testimonials',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    fragmentField,
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [{type: 'testimonialItem'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Testimonials', subtitle: 'Testimonials'}),
  },
})
