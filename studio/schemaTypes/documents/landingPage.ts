import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero',
      type: 'heroSection',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({type: 'introSection'}),
        defineArrayMember({type: 'featureGridSection'}),
        defineArrayMember({type: 'imageTextSection'}),
        defineArrayMember({type: 'statsSection'}),
        defineArrayMember({type: 'gallerySection'}),
        defineArrayMember({type: 'testimonialSection'}),
        defineArrayMember({type: 'faqSection'}),
        defineArrayMember({type: 'ctaSection'}),
        defineArrayMember({type: 'contactSection'}),
      ],
      options: {
        insertMenu: {
          views: [{name: 'grid'}],
        },
      },
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})
