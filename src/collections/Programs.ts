import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Programs: CollectionConfig = {
  slug: 'programs',
  labels: { singular: { ar: 'برنامج', en: 'Program' }, plural: { ar: 'البرامج', en: 'Programs' } },
  admin: { group: { ar: 'المحتوى', en: 'Content' }, useAsTitle: 'title', defaultColumns: ['title', 'country', 'durationDays', 'featured', 'order'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', label: { ar: 'العنوان', en: 'Title' }, type: 'text', required: true, localized: true },
    slugField,
    { name: 'summary', label: { ar: 'نبذة', en: 'Summary' }, type: 'textarea', localized: true },
    { name: 'durationDays', label: { ar: 'عدد الأيام', en: 'Duration (days)' }, type: 'number', required: true, min: 1 },
    { name: 'country', label: { ar: 'الدولة', en: 'Country' }, type: 'relationship', relationTo: 'countries', required: true },
    { name: 'cities', label: { ar: 'المدن', en: 'Cities' }, type: 'relationship', relationTo: 'cities', hasMany: true },
    {
      name: 'badge',
      type: 'select',
      options: [
        { label: 'Staff pick', value: 'staff-pick' },
        { label: 'Popular', value: 'popular' },
        { label: 'New', value: 'new' },
      ],
    },
    { name: 'featured', label: { ar: 'مميّز', en: 'Featured' }, type: 'checkbox', defaultValue: false },
    { name: 'order', label: { ar: 'الترتيب', en: 'Order' }, type: 'number', defaultValue: 100, admin: { description: { ar: 'الأرقام الأصغر تظهر أولاً.', en: 'Lower numbers appear first.' } } },
    coverField,
    {
      name: 'gallery', label: { ar: 'معرض الصور', en: 'Gallery' },
      type: 'array',
      fields: [{ name: 'image', label: { ar: 'الصورة', en: 'Image' }, type: 'upload', relationTo: 'media', required: true }],
    },
    {
      name: 'days', label: { ar: 'البرنامج اليومي', en: 'Daily itinerary' },
      type: 'array',
      fields: [
        { name: 'title', label: { ar: 'العنوان', en: 'Title' }, type: 'text', required: true, localized: true },
        { name: 'description', label: { ar: 'الوصف', en: 'Description' }, type: 'textarea', localized: true },
      ],
    },
    { name: 'included', label: { ar: 'يشمل', en: 'Included' }, type: 'array', fields: [{ name: 'item', label: { ar: 'البند', en: 'Item' }, type: 'text', required: true, localized: true }] },
    { name: 'excluded', label: { ar: 'لا يشمل', en: 'Excluded' }, type: 'array', fields: [{ name: 'item', label: { ar: 'البند', en: 'Item' }, type: 'text', required: true, localized: true }] },
    {
      name: 'agencyNotes', label: { ar: 'ملاحظات للوكالات', en: 'Agency notes' },
      type: 'textarea',
      localized: true,
      admin: { description: { ar: 'تظهر للوكالات في صفحة البرنامج.', en: 'Shown to travel agencies on the program page.' } },
    },
    {
      name: 'price', label: { ar: 'السعر', en: 'Price' },
      type: 'group',
      admin: { description: { ar: 'تظهر بالموقع فقط عند تفعيل "إظهار الأسعار" في إعدادات الموقع.', en: 'Only displayed on the site when "Prices enabled" is on in Site Settings.' } },
      fields: [
        { name: 'from', label: { ar: 'من', en: 'From' }, type: 'number' },
        { name: 'currency', label: { ar: 'العملة', en: 'Currency' }, type: 'text', defaultValue: 'USD' },
      ],
    },
  ],
}
