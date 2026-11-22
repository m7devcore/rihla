## Task

Closes #<issue number>. Plan ID: <for example 2.2>

## What changed and why

<!-- Two or three sentences. What does the site or admin panel do differently now? -->

## Done-when check

<!-- Copy the "Done when" criterion from docs/PLAN.md and say how you checked it. -->

## Evidence

- [ ] `pnpm verify` output or green CI check attached
- [ ] `pnpm build` passes (required if routing, config, collections or dependencies changed)
- [ ] UI checked in Arabic and English, at mobile (about 390 px) and desktop (about 1440 px), screenshots attached
- [ ] Matches the approved design (link or screenshot)
- [ ] Tests added for new logic. A bug fix has a test that failed before the fix.

## Rules check

- [ ] No secrets, keys or tokens in the diff
- [ ] No real client content (photos, prices, contracts) in the diff
- [ ] Every new user-facing string exists in Arabic and English
- [ ] Pages read data only through `src/lib/data`
- [ ] `src/contract/types.ts` unchanged, or this PR explains the change and Mahmoud approved it
- [ ] Generated files (`payload-types.ts`, migrations) were generated, not hand-edited
- [ ] `docs/STATUS.md` updated
- [ ] The issue's sub-task boxes are ticked to match what was really done

## Tracker update

<!-- One line, copied into the issue too: Tracker update: <ID> -> <Not started | In progress | Blocked | Done>, <YYYY-MM-DD>, <link>, sub-tasks <n of m> -->

## Not verified

<!-- Be honest. Write what you could not check and why. Write "nothing" only if it is true. -->
