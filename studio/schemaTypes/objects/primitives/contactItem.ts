import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const contactItem = defineType({
  name: 'contactItem',
  title: 'Location',
  type: 'object',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'locationName',
      title: 'Location name',
      type: 'string',
      description: 'e.g. "InTown Prague"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening hours',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {title: 'locationName', subtitle: 'address'},
  },
})
