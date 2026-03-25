import {defineField, defineType} from 'sanity'
import {SplitHorizontalIcon} from '@sanity/icons'
import {fragmentField} from '../primitives/anchorField'

export const imageTextSection = defineType({
  name: 'imageTextSection',
  title: 'Image + Text',
  type: 'object',
  icon: SplitHorizontalIcon,
  fields: [
    fragmentField,
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Image + Text'}),
  },
})
