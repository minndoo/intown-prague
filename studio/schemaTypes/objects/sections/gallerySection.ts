import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const gallerySection = defineType({
  name: 'gallerySection',
  title: 'Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (rule) => rule.required().min(1).max(20),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Gallery', subtitle: 'Gallery'}),
  },
})
