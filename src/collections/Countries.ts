import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Countries: CollectionConfig = {
  slug: 'countries',
  labels: { singular: { ar: 'دولة', en: 'Country' }, plural: { ar: 'الدول', en: 'Countries' } },
  admin: { group: { ar: 'الوجهات', en: 'Destinations' }, useAsTitle: 'name', defaultColumns: ['name', 'hasOfficialOffice'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', label: { ar: 'الاسم', en: 'Name' }, type: 'text', required: true, localized: true },
    slugField,
    { name: 'summary', label: { ar: 'نبذة', en: 'Summary' }, type: 'textarea', localized: true },
    {
      name: 'hasOfficialOffice', label: { ar: 'مكتب رسمي', en: 'Official office' },
      type: 'checkbox',
      defaultValue: false,
      admin: { description: { ar: 'مكتب رسمي (مفعّل) أو تغطية فقط (غير مفعّل).', en: 'Official office (checked) or coverage only (unchecked).' } },
    },
    coverField,
  ],
}
