import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Cities: CollectionConfig = {
  slug: 'cities',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'country', 'hasPage'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    slugField,
    { name: 'country', type: 'relationship', relationTo: 'countries', required: true },
    {
      name: 'hasPage',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Show a standalone page for this city.' },
    },
    coverField,
  ],
}
