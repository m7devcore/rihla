import type { GlobalConfig } from 'payload'
import { authenticated, publicRead } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: { ar: 'إعدادات الموقع', en: 'Site Settings' },
  access: { read: publicRead, update: authenticated },
  fields: [
    { name: 'brandName', label: { ar: 'اسم العلامة', en: 'Brand name' }, type: 'text', required: true, localized: true },
    { name: 'whatsappTraveller', label: { ar: 'واتساب المسافرين', en: 'Traveller WhatsApp' }, type: 'text', required: true, admin: { description: { ar: 'أرقام فقط مع رمز الدولة.', en: 'Digits only, with country code.' } } },
    { name: 'whatsappAgency', label: { ar: 'واتساب الوكالات', en: 'Agency WhatsApp' }, type: 'text', required: true, admin: { description: { ar: 'أرقام فقط مع رمز الدولة.', en: 'Digits only, with country code.' } } },
    { name: 'whatsappSecond', label: { ar: 'واتساب إضافي', en: 'Second WhatsApp' }, type: 'text', admin: { description: { ar: 'رقم ثانٍ اختياري.', en: 'Optional second number.' } } },
    {
      name: 'social', label: { ar: 'وسائل التواصل', en: 'Social links' },
      type: 'array',
      fields: [
        { name: 'platform', label: { ar: 'المنصة', en: 'Platform' }, type: 'text', required: true },
        { name: 'url', label: { ar: 'الرابط', en: 'URL' }, type: 'text', required: true },
      ],
    },
    {
      name: 'offices', label: { ar: 'المكاتب', en: 'Offices' },
      type: 'array',
      fields: [
        { name: 'country', label: { ar: 'الدولة', en: 'Country' }, type: 'text', required: true, localized: true },
        { name: 'city', label: { ar: 'المدينة', en: 'City' }, type: 'text', required: true, localized: true },
        { name: 'address', label: { ar: 'العنوان', en: 'Address' }, type: 'text', localized: true },
      ],
    },
    { name: 'metaPixelId', label: { ar: 'معرّف Meta Pixel', en: 'Meta Pixel ID' }, type: 'text' },
    { name: 'ga4Id', label: { ar: 'معرّف GA4', en: 'GA4 ID' }, type: 'text' },
    {
      name: 'pricesEnabled', label: { ar: 'إظهار الأسعار', en: 'Prices enabled' },
      type: 'checkbox',
      defaultValue: false,
      admin: { description: { ar: 'عند الإيقاف تُخفى الأسعار في كل الموقع.', en: 'When off, prices are hidden everywhere on the site.' } },
    },
  ],
}
