// Demo data only. Real client content lives outside this repo.
import type { Article, City, Country, Hotel, Program, SiteSettings } from '@/contract/types'

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

export const programs: Program[] = [
  {
    id: 'p1', slug: 'demo-program-1', title: 'Demo Program 1', summary: 'Demo summary.', durationDays: 5,
    countrySlug: 'demo-country-a', citySlugs: ['demo-city-1', 'demo-city-2'], badge: 'staff-pick', featured: true, order: 1,
    cover: img('Program 1'), gallery: [],
    days: [{ title: 'Day 1', description: 'Demo.' }, { title: 'Day 2', description: 'Demo.' }],
    included: ['Demo item'], excluded: ['Demo item'], agencyNotes: 'Demo agency notes.',
  },
  {
    id: 'p2', slug: 'demo-program-2', title: 'Demo Program 2', summary: 'Demo summary.', durationDays: 7,
    countrySlug: 'demo-country-b', citySlugs: ['demo-city-3'], badge: 'new', featured: false, order: 2,
    cover: img('Program 2'), gallery: [], days: [{ title: 'Day 1', description: 'Demo.' }],
    included: [], excluded: [],
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
