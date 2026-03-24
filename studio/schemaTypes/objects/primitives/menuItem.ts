import {defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      description: 'Price in CZK',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'badge',
      type: 'string',
      description: 'e.g. "BESTSELLER"',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      badge: 'badge',
    },
    prepare: ({title, price, badge}) => ({
      title: badge ? `${title} ★` : title,
      subtitle: price ? `${price} Kč` : undefined,
    }),
  },
})
