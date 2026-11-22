import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField } from './fields'

export const Albums: CollectionConfig = {
  slug: 'albums',
  labels: { singular: { ar: 'ألبوم', en: 'Album' }, plural: { ar: 'الألبومات', en: 'Albums' } },
  admin: { group: { ar: 'المحتوى', en: 'Content' }, useAsTitle: 'title' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', label: { ar: 'العنوان', en: 'Title' }, type: 'text', required: true, localized: true },
    coverField,
    {
      name: 'images', label: { ar: 'الصور', en: 'Images' },
      type: 'array',
      fields: [
        { name: 'image', label: { ar: 'الصورة', en: 'Image' }, type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', label: { ar: 'التعليق', en: 'Caption' }, type: 'text', localized: true },
      ],
    },
  ],
}
