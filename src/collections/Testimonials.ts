import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: { ar: 'شهادة عميل', en: 'Testimonial' }, plural: { ar: 'شهادات العملاء', en: 'Testimonials' } },
  admin: { group: { ar: 'الإعدادات', en: 'Settings' }, useAsTitle: 'author' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'author', label: { ar: 'الكاتب', en: 'Author' }, type: 'text', required: true },
    { name: 'text', label: { ar: 'النص', en: 'Text' }, type: 'textarea', required: true, localized: true },
    { name: 'platform', label: { ar: 'المنصة', en: 'Platform' }, type: 'text', admin: { description: { ar: 'مثل Instagram، Google', en: 'e.g. Instagram, Google' } } },
    { name: 'sourceUrl', label: { ar: 'رابط المصدر', en: 'Source URL' }, type: 'text', admin: { description: { ar: 'رابط المنشور أو التقييم الأصلي.', en: 'Link to the original post/review.' } } },
  ],
}
