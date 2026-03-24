import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
      options: {
        list: [
          {title: 'Instagram', value: 'instagram'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Twitter / X', value: 'twitter'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'TripAdvisor', value: 'tripadvisor'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({scheme: ['https']}),
    }),
  ],
  preview: {
    select: {title: 'platform', subtitle: 'url'},
  },
})
