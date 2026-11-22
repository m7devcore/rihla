import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: { useAsTitle: 'name' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    { name: 'url', type: 'text' },
    { name: 'order', type: 'number', defaultValue: 100 },
  ],
}
