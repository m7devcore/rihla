import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField } from './fields'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  labels: { singular: { ar: 'فندق', en: 'Hotel' }, plural: { ar: 'الفنادق', en: 'Hotels' } },
  admin: { group: { ar: 'الوجهات', en: 'Destinations' }, useAsTitle: 'name', defaultColumns: ['name', 'city', 'stars', 'type'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', label: { ar: 'الاسم', en: 'Name' }, type: 'text', required: true, localized: true },
    { name: 'city', label: { ar: 'المدينة', en: 'City' }, type: 'relationship', relationTo: 'cities', required: true },
    {
      name: 'stars', label: { ar: 'النجوم', en: 'Stars' },
      type: 'select',
      required: true,
      options: [
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
      ],
    },
    {
      name: 'type', label: { ar: 'النوع', en: 'Type' },
      type: 'select',
      required: true,
      defaultValue: 'hotel',
      options: [
        { label: 'Hotel', value: 'hotel' },
        { label: 'Resort', value: 'resort' },
        { label: 'Apartment', value: 'apartment' },
        { label: 'Boutique', value: 'boutique' },
      ],
    },
    {
      name: 'amenities', label: { ar: 'المرافق', en: 'Amenities' },
      type: 'array',
      fields: [{ name: 'label', label: { ar: 'الاسم', en: 'Label' }, type: 'text', required: true, localized: true }],
    },
    { name: 'familyFriendly', label: { ar: 'مناسب للعائلات', en: 'Family friendly' }, type: 'checkbox', defaultValue: false },
    coverField,
  ],
}
