// Data layer: frontend imports ONLY from here.
// Today it reads mocks; backend swaps the bodies for the Payload Local API without changing signatures.
import type { Article, Country, City, Hotel, Locale, Program, ProgramFilters, SiteSettings } from '@/contract/types'
import { articles, cities, countries, hotels, programs, settings } from './mocks'
import type { ProgramSource } from './mocks'
import { localize } from './localize'

// Turns a stored program into the contract shape for one locale, like Payload's Local API does.
function toProgram(locale: Locale, p: ProgramSource): Program {
  const { title, summary, days, included, excluded, agencyNotes, ...rest } = p
  return {
    ...rest,
    title: localize(locale, title),
    summary: localize(locale, summary),
    days: localize(locale, days),
    included: localize(locale, included),
    excluded: localize(locale, excluded),
    ...(agencyNotes ? { agencyNotes: localize(locale, agencyNotes) } : {}),
  }
}

export async function getPrograms(locale: Locale, filters: ProgramFilters = {}): Promise<Program[]> {
  return programs
    .filter((p) => (filters.countrySlug ? p.countrySlug === filters.countrySlug : true))
    .filter((p) => (filters.citySlug ? p.citySlugs.includes(filters.citySlug) : true))
    .filter((p) => (filters.featuredOnly ? p.featured : true))
    .sort((a, b) => a.order - b.order)
    .map((p) => toProgram(locale, p))
}

export async function getProgramBySlug(locale: Locale, slug: string): Promise<Program | null> {
  const p = programs.find((p) => p.slug === slug)
  return p ? toProgram(locale, p) : null
}

export async function getCountries(_locale: Locale): Promise<Country[]> {
  return countries
}

export async function getCountryWithCities(_locale: Locale, slug: string): Promise<{ country: Country; cities: City[] } | null> {
  const country = countries.find((c) => c.slug === slug)
  return country ? { country, cities: cities.filter((c) => c.countrySlug === slug) } : null
}

export async function getHotels(_locale: Locale, citySlug?: string): Promise<Hotel[]> {
  return citySlug ? hotels.filter((h) => h.citySlug === citySlug) : hotels
}

export async function getArticles(_locale: Locale, limit?: number): Promise<Article[]> {
  return limit ? articles.slice(0, limit) : articles
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return settings
}
