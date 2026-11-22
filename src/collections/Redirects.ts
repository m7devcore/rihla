import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  labels: { singular: { ar: 'تحويل', en: 'Redirect' }, plural: { ar: 'التحويلات', en: 'Redirects' } },
  admin: { group: { ar: 'الإعدادات', en: 'Settings' }, useAsTitle: 'from', defaultColumns: ['from', 'to', 'type'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'from', label: { ar: 'من', en: 'From' }, type: 'text', required: true, unique: true, admin: { description: { ar: 'المسار القديم، مثل /old-page', en: 'Old path, e.g. /old-page' } } },
    { name: 'to', label: { ar: 'إلى', en: 'To' }, type: 'text', required: true, admin: { description: { ar: 'المسار الجديد أو رابط كامل.', en: 'New path or full URL.' } } },
    {
      name: 'type', label: { ar: 'النوع', en: 'Type' },
      type: 'select',
      defaultValue: '301',
      options: [
        { label: '301 Permanent', value: '301' },
        { label: '302 Temporary', value: '302' },
      ],
    },
  ],
}
