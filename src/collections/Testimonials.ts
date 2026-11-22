import type { CollectionConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: { useAsTitle: 'author' },
  access: { read: publicRead, create: authenticated, update: authenticated, delete: authenticated },
  fields: [
    { name: 'author', type: 'text', required: true },
    { name: 'text', type: 'textarea', required: true, localized: true },
    { name: 'platform', type: 'text', admin: { description: 'e.g. Instagram, Google' } },
    { name: 'sourceUrl', type: 'text', admin: { description: 'Link to the original post/review.' } },
  ],
}
