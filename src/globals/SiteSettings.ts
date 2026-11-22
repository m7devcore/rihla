import type { GlobalConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: publicRead, update: authenticated },
  fields: [
    { name: 'brandName', type: 'text', required: true, localized: true },
    { name: 'whatsappTraveller', type: 'text', required: true, admin: { description: 'Digits only, with country code.' } },
    { name: 'whatsappAgency', type: 'text', required: true, admin: { description: 'Digits only, with country code.' } },
    { name: 'whatsappSecond', type: 'text', admin: { description: 'Optional second number.' } },
    {
      name: 'social',
      type: 'array',
      fields: [
        { name: 'platform', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'offices',
      type: 'array',
      fields: [
        { name: 'country', type: 'text', required: true, localized: true },
        { name: 'city', type: 'text', required: true, localized: true },
        { name: 'address', type: 'text', localized: true },
      ],
    },
    { name: 'metaPixelId', type: 'text' },
    { name: 'ga4Id', type: 'text' },
    {
      name: 'pricesEnabled',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'When off, prices are hidden everywhere on the site.' },
    },
  ],
}
