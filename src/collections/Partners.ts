import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: { singular: { ar: 'شريك', en: 'Partner' }, plural: { ar: 'الشركاء', en: 'Partners' } },
  admin: { group: { ar: 'الإعدادات', en: 'Settings' }, useAsTitle: 'name' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'name', label: { ar: 'الاسم', en: 'Name' }, type: 'text', required: true },
    { name: 'logo', label: { ar: 'الشعار', en: 'Logo' }, type: 'upload', relationTo: 'media', required: true },
    { name: 'url', label: { ar: 'الرابط', en: 'URL' }, type: 'text' },
    { name: 'order', label: { ar: 'الترتيب', en: 'Order' }, type: 'number', defaultValue: 100 },
  ],
}
