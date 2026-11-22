import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'tag', 'publishedAt'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField,
    { name: 'excerpt', type: 'textarea', localized: true },
    { name: 'tag', type: 'text', localized: true },
    coverField,
    { name: 'content', type: 'richText', localized: true },
    { name: 'publishedAt', type: 'date', required: true, defaultValue: () => new Date().toISOString() },
  ],
}
