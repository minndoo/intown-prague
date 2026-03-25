import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const navLink = defineType({
  name: 'navLink',
  title: 'Navigation link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External URL', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https']}),
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'Page path (e.g. "/" or "/about")',
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'fragment',
      title: 'Fragment',
      type: 'string',
      description: 'Section ID to scroll to (e.g. "menu", "contact")',
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
  ],
  preview: {
    select: {title: 'label', linkType: 'linkType', fragment: 'fragment', href: 'href'},
    prepare: ({title, linkType, fragment, href}) => ({
      title,
      subtitle: linkType === 'external' ? href : `#${fragment ?? ''}`,
    }),
  },
})
