import type { Field } from 'payload'

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: { position: 'sidebar', description: 'Lowercase, hyphens only. Used in the page URL.' },
}

export const coverField: Field = {
  name: 'cover',
  type: 'upload',
  relationTo: 'media',
  required: true,
}
