import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: { ar: 'ملف', en: 'File' }, plural: { ar: 'الوسائط', en: 'Media' } },
  admin: { group: { ar: 'المحتوى', en: 'Content' } },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: { ar: 'النص البديل', en: 'Alt text' },
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // These are not supported on Workers yet due to lack of sharp
    crop: false,
    focalPoint: false,
  },
}
