import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'
import {fragmentField} from '../primitives/anchorField'

export const menuSection = defineType({
  name: 'menuSection',
  title: 'Menu',
  type: 'object',
  icon: MenuIcon,
  fields: [
    fragmentField,
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Center image',
      type: 'imageWithAlt',
      description: 'Optional image displayed between menu columns',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'menuCategory'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title, subtitle: 'Menu'}),
  },
})
