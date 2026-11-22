import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'
import { coverField, slugField } from './fields'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: { ar: 'مقال', en: 'Article' }, plural: { ar: 'المقالات', en: 'Articles' } },
  admin: { group: { ar: 'المحتوى', en: 'Content' }, useAsTitle: 'title', defaultColumns: ['title', 'tag', 'publishedAt'] },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'title', label: { ar: 'العنوان', en: 'Title' }, type: 'text', required: true, localized: true },
    slugField,
    { name: 'excerpt', label: { ar: 'مقتطف', en: 'Excerpt' }, type: 'textarea', localized: true },
    { name: 'tag', label: { ar: 'التصنيف', en: 'Tag' }, type: 'text', localized: true },
    coverField,
    { name: 'content', label: { ar: 'المحتوى', en: 'Content' }, type: 'richText', localized: true },
    { name: 'publishedAt', label: { ar: 'تاريخ النشر', en: 'Published at' }, type: 'date', required: true, defaultValue: () => new Date().toISOString() },
  ],
}
