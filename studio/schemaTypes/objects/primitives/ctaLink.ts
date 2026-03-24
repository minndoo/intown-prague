import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const ctaLink = defineType({
  name: 'ctaLink',
  title: 'Call to Action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal anchor', value: 'internal'},
          {title: 'External URL', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'external',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https', 'tel', 'mailto']}),
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'anchor',
      title: 'Anchor',
      type: 'string',
      description: 'Section anchor ID (e.g. "contact")',
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
  ],
  preview: {
    select: {title: 'label'},
  },
})
