import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { describe, expect, it } from 'vitest'

// `.claude/skills` is what agents load; `skills` is the visible copy for people.
// The only file allowed to differ is skills/README.md.
function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? listFiles(full) : [full]
  })
}

function read(root: string) {
  return Object.fromEntries(
    listFiles(root)
      .map((file) => relative(root, file))
      .filter((file) => file !== 'README.md')
      .sort()
      .map((file) => [file, readFileSync(join(root, file), 'utf8')]),
  )
}

describe('skills copies', () => {
  it('keeps .claude/skills and skills identical', () => {
    const agentCopy = read(join(process.cwd(), '.claude', 'skills'))
    const visibleCopy = read(join(process.cwd(), 'skills'))
    expect(Object.keys(visibleCopy)).toEqual(Object.keys(agentCopy))
    expect(visibleCopy).toEqual(agentCopy)
  })
})
