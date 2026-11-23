import { describe, expect, it } from 'vitest'
import { getProgramBySlug, getPrograms } from './index'

describe('bilingual demo programs', () => {
  it('returns Arabic text for ar', async () => {
    const programs = await getPrograms('ar')
    expect(programs.map((p) => p.title)).toEqual(['برنامج تجريبي 1', 'برنامج تجريبي 2'])
    expect(programs[0].days[0].title).toBe('اليوم 1')
  })

  it('returns English text for en', async () => {
    const programs = await getPrograms('en')
    expect(programs.map((p) => p.title)).toEqual(['Demo Program 1', 'Demo Program 2'])
    expect(programs[0].days[0].title).toBe('Day 1')
  })

  it('returns plain strings, never both languages', async () => {
    const [first] = await getPrograms('ar')
    expect(typeof first.title).toBe('string')
    expect(typeof first.summary).toBe('string')
    expect(first.included).toEqual(['بند تجريبي'])
  })

  it('looks up one program by slug in the requested locale', async () => {
    expect((await getProgramBySlug('en', 'demo-program-1'))?.title).toBe('Demo Program 1')
    expect((await getProgramBySlug('ar', 'demo-program-2'))?.title).toBe('برنامج تجريبي 2')
    expect(await getProgramBySlug('ar', 'missing')).toBeNull()
  })

  it('keeps optional agency notes only when the program has them', async () => {
    expect((await getProgramBySlug('ar', 'demo-program-1'))?.agencyNotes).toBe('ملاحظات تجريبية للوكالات.')
    expect(await getProgramBySlug('ar', 'demo-program-2')).not.toHaveProperty('agencyNotes')
  })
})
