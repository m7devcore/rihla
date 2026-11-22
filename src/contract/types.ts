// Shared contract between backend and frontend. Change only by agreement.
export type Locale = 'ar' | 'en'

export interface MediaRef { url: string; alt: string }

export interface ProgramDay { title: string; description: string }

export interface Program {
  id: string
  slug: string
  title: string
  summary: string
  durationDays: number
  countrySlug: string
  citySlugs: string[]
  badge?: 'staff-pick' | 'popular' | 'new'
  featured: boolean
  order: number
  cover: MediaRef
  gallery: MediaRef[]
  days: ProgramDay[]
  included: string[]
  excluded: string[]
  agencyNotes?: string
  // Only present when SiteSettings.pricesEnabled is true
  price?: { from: number; currency: string }
}

export interface City { id: string; slug: string; name: string; countrySlug: string; cover: MediaRef; hasPage: boolean }

export interface Country {
  id: string
  slug: string
  name: string
  summary: string
  hasOfficialOffice: boolean
  cover: MediaRef
}

export interface Hotel {
  id: string
  name: string
  stars: 3 | 4 | 5
  type: 'hotel' | 'resort' | 'apartment' | 'boutique'
  amenities: string[]
  familyFriendly: boolean
  citySlug: string
  cover: MediaRef
}

export interface Article { id: string; slug: string; title: string; excerpt: string; tag: string; cover: MediaRef; publishedAt: string }

export interface Office { country: string; city: string; address?: string }

export interface SiteSettings {
  brandName: string
  whatsappTraveller: string
  whatsappAgency: string
  whatsappSecond?: string
  social: { platform: string; url: string }[]
  offices: Office[]
  metaPixelId?: string
  ga4Id?: string
  pricesEnabled: boolean
}

export interface ProgramFilters { countrySlug?: string; citySlug?: string; familyFriendly?: boolean; featuredOnly?: boolean }
