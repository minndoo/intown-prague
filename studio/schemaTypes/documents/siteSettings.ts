import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'navigation', title: 'Navigation'},
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
      name: 'logo',
      title: 'Logo',
      type: 'imageWithAlt',
      group: 'general',
      description: 'Main logo (e.g. red version) used in the header and footer',
    }),
    defineField({
      name: 'logoWithText',
      title: 'Logo with text',
      type: 'imageWithAlt',
      group: 'general',
      description: 'Logo with site name text, used in the header',
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo (light)',
      type: 'imageWithAlt',
      group: 'general',
      description: 'Light/white logo used as decorative icon above section headings',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
      group: 'general',
      description: 'Use {year} for the current year, e.g. "© {year} InTown"',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation links',
      type: 'array',
      of: [{type: 'navLink'}],
      group: 'navigation',
      description: 'Links shown in the header navigation bar',
    }),
    defineField({
      name: 'reservationLink',
      title: 'Reservation link',
      type: 'ctaLink',
      group: 'navigation',
      description: 'CTA button shown in the header',
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
