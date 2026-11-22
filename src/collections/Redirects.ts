import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: { useAsTitle: 'from', defaultColumns: ['from', 'to', 'type'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'from', type: 'text', required: true, unique: true, admin: { description: 'Old path, e.g. /old-page' } },
    { name: 'to', type: 'text', required: true, admin: { description: 'New path or full URL.' } },
    {
      name: 'type',
      type: 'select',
      defaultValue: '301',
      options: [
        { label: '301 Permanent', value: '301' },
        { label: '302 Temporary', value: '302' },
      ],
    },
  ],
}
