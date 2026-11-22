import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Cities: CollectionConfig = {
  slug: 'cities',
  labels: { singular: { ar: 'مدينة', en: 'City' }, plural: { ar: 'المدن', en: 'Cities' } },
  admin: { group: { ar: 'الوجهات', en: 'Destinations' }, useAsTitle: 'name', defaultColumns: ['name', 'country', 'hasPage'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', label: { ar: 'الاسم', en: 'Name' }, type: 'text', required: true, localized: true },
    slugField,
    { name: 'country', label: { ar: 'الدولة', en: 'Country' }, type: 'relationship', relationTo: 'countries', required: true },
    {
      name: 'hasPage', label: { ar: 'صفحة مستقلة', en: 'Standalone page' },
      type: 'checkbox',
      defaultValue: false,
      admin: { description: { ar: 'إظهار صفحة مستقلة لهذه المدينة.', en: 'Show a standalone page for this city.' } },
    },
    coverField,
  ],
}
