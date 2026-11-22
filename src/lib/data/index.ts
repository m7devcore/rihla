// Data layer: frontend imports ONLY from here.
// Today it reads mocks; backend swaps the bodies for the Payload Local API without changing signatures.
import type { Article, Country, City, Hotel, Locale, Program, ProgramFilters, SiteSettings } from '@/contract/types'
import { articles, cities, countries, hotels, programs, settings } from './mocks'

export async function getPrograms(_locale: Locale, filters: ProgramFilters = {}): Promise<Program[]> {
  return programs
    .filter((p) => (filters.countrySlug ? p.countrySlug === filters.countrySlug : true))
    .filter((p) => (filters.citySlug ? p.citySlugs.includes(filters.citySlug) : true))
    .filter((p) => (filters.featuredOnly ? p.featured : true))
    .sort((a, b) => a.order - b.order)
}

export async function getProgramBySlug(_locale: Locale, slug: string): Promise<Program | null> {
  return programs.find((p) => p.slug === slug) ?? null
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
