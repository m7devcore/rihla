// Demo data only. Real client content lives outside this repo.
import type { Article, City, Country, Hotel, Program, ProgramDay, SiteSettings } from '@/contract/types'
import type { Localized } from '../localize'

// A program as stored in the demo data: the text fields hold both languages.
export type ProgramSource = Omit<Program, 'title' | 'summary' | 'days' | 'included' | 'excluded' | 'agencyNotes'> & {
  title: Localized<string>
  summary: Localized<string>
  days: Localized<ProgramDay[]>
  included: Localized<string[]>
  excluded: Localized<string[]>
  agencyNotes?: Localized<string>
}

const img = (alt: string) => ({ url: '/placeholder.svg', alt })

export const countries: Country[] = [
  { id: 'c1', slug: 'demo-country-a', name: 'Demo Country A', summary: 'Demo summary.', hasOfficialOffice: true, cover: img('Demo A') },
  { id: 'c2', slug: 'demo-country-b', name: 'Demo Country B', summary: 'Demo summary.', hasOfficialOffice: false, cover: img('Demo B') },
]

export const cities: City[] = [
  { id: 'ci1', slug: 'demo-city-1', name: 'Demo City 1', countrySlug: 'demo-country-a', cover: img('City 1'), hasPage: true },
  { id: 'ci2', slug: 'demo-city-2', name: 'Demo City 2', countrySlug: 'demo-country-a', cover: img('City 2'), hasPage: false },
  { id: 'ci3', slug: 'demo-city-3', name: 'Demo City 3', countrySlug: 'demo-country-b', cover: img('City 3'), hasPage: false },
]

// Program text is stored in Arabic and English. The data layer picks one per locale (see ../localize.ts).
export const programs: ProgramSource[] = [
  {
    id: 'p1', slug: 'demo-program-1', durationDays: 5,
    title: { ar: 'برنامج تجريبي 1', en: 'Demo Program 1' },
    summary: { ar: 'ملخص تجريبي.', en: 'Demo summary.' },
    countrySlug: 'demo-country-a', citySlugs: ['demo-city-1', 'demo-city-2'], badge: 'staff-pick', featured: true, order: 1,
    cover: img('Program 1'), gallery: [],
    days: {
      ar: [{ title: 'اليوم 1', description: 'نص تجريبي.' }, { title: 'اليوم 2', description: 'نص تجريبي.' }],
      en: [{ title: 'Day 1', description: 'Demo.' }, { title: 'Day 2', description: 'Demo.' }],
    },
    included: { ar: ['بند تجريبي'], en: ['Demo item'] },
    excluded: { ar: ['بند تجريبي'], en: ['Demo item'] },
    agencyNotes: { ar: 'ملاحظات تجريبية للوكالات.', en: 'Demo agency notes.' },
  },
  {
    id: 'p2', slug: 'demo-program-2', durationDays: 7,
    title: { ar: 'برنامج تجريبي 2', en: 'Demo Program 2' },
    summary: { ar: 'ملخص تجريبي.', en: 'Demo summary.' },
    countrySlug: 'demo-country-b', citySlugs: ['demo-city-3'], badge: 'new', featured: false, order: 2,
    cover: img('Program 2'), gallery: [],
    days: { ar: [{ title: 'اليوم 1', description: 'نص تجريبي.' }], en: [{ title: 'Day 1', description: 'Demo.' }] },
    included: { ar: [], en: [] },
    excluded: { ar: [], en: [] },
  },
]

export const hotels: Hotel[] = [
  { id: 'h1', name: 'Demo Hotel', stars: 4, type: 'hotel', amenities: ['Pool'], familyFriendly: true, citySlug: 'demo-city-1', cover: img('Hotel') },
]

export const articles: Article[] = [
  { id: 'a1', slug: 'demo-article', title: 'Demo Article', excerpt: 'Demo.', tag: 'Guide', cover: img('Article'), publishedAt: '2026-01-01' },
]

export const settings: SiteSettings = {
  brandName: 'Rihla Demo',
  whatsappTraveller: '000000000000',
  whatsappAgency: '000000000000',
  social: [],
  offices: [{ country: 'Demo Country A', city: 'Demo City 1' }],
  pricesEnabled: false,
}
