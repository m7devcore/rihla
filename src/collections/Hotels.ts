import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField } from './fields'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'city', 'stars', 'type'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'city', type: 'relationship', relationTo: 'cities', required: true },
    {
      name: 'stars',
      type: 'select',
      required: true,
      options: [
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
      ],
    },
    {
      name: 'type',
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
      name: 'amenities',
      type: 'array',
      fields: [{ name: 'label', type: 'text', required: true, localized: true }],
    },
    { name: 'familyFriendly', type: 'checkbox', defaultValue: false },
    coverField,
  ],
}
