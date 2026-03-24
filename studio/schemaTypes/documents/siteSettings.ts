import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'social', title: 'Social'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [{type: 'socialLink'}],
      group: 'social',
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      description: 'Fallback SEO when pages don\'t define their own',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
