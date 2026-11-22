import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField } from './fields'

export const Albums: CollectionConfig = {
  slug: 'albums',
  admin: { useAsTitle: 'title' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    coverField,
    {
      name: 'images',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
  ],
}
