import type { Locale } from '@/contract/types'

// Demo data stores text in both languages. The data layer returns one string per locale,
// so pages never see both. Arabic is the fallback.
export type Localized<T> = { ar: T; en: T }

export function localize<T>(locale: Locale, value: Localized<T>): T {
  return value[locale] ?? value.ar
}
