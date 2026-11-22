import type { Field } from 'payload'

export const slugField: Field = {
  name: 'slug', label: { ar: 'الرابط (slug)', en: 'Slug' },
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: { position: 'sidebar', description: { ar: 'أحرف إنجليزية صغيرة وشرطات فقط. تظهر في رابط الصفحة.', en: 'Lowercase, hyphens only. Used in the page URL.' } },
}

export const coverField: Field = {
  name: 'cover', label: { ar: 'صورة الغلاف', en: 'Cover image' },
  type: 'upload',
  relationTo: 'media',
  required: true,
}
