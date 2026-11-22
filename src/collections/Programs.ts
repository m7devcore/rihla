import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'country', 'durationDays', 'featured', 'order'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField,
    { name: 'summary', type: 'textarea', localized: true },
    { name: 'durationDays', type: 'number', required: true, min: 1 },
    { name: 'country', type: 'relationship', relationTo: 'countries', required: true },
    { name: 'cities', type: 'relationship', relationTo: 'cities', hasMany: true },
    {
      name: 'badge',
      type: 'select',
      options: [
        { label: 'Staff pick', value: 'staff-pick' },
        { label: 'Popular', value: 'popular' },
        { label: 'New', value: 'new' },
      ],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number', defaultValue: 100, admin: { description: 'Lower numbers appear first.' } },
    coverField,
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
    {
      name: 'days',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
    { name: 'included', type: 'array', fields: [{ name: 'item', type: 'text', required: true, localized: true }] },
    { name: 'excluded', type: 'array', fields: [{ name: 'item', type: 'text', required: true, localized: true }] },
    {
      name: 'agencyNotes',
      type: 'textarea',
      localized: true,
      admin: { description: 'Shown to travel agencies on the program page.' },
    },
    {
      name: 'price',
      type: 'group',
      admin: { description: 'Only displayed on the site when "Prices enabled" is on in Site Settings.' },
      fields: [
        { name: 'from', type: 'number' },
        { name: 'currency', type: 'text', defaultValue: 'USD' },
      ],
    },
  ],
}
