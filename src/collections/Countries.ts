import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Countries: CollectionConfig = {
  slug: 'countries',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'hasOfficialOffice'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    slugField,
    { name: 'summary', type: 'textarea', localized: true },
    {
      name: 'hasOfficialOffice',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Official office (checked) or coverage only (unchecked).' },
    },
    coverField,
  ],
}
