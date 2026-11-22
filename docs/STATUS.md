# Status

Updated at the end of every working session, in the same pull request as the work. Keep it short and factual.

Last updated: 2026-11-22 (evening)

## Current phase

Phase 1: Setup and foundations (2026-11-23 to 2026-11-29). See [`PLAN.md`](./PLAN.md).

## Done

- Repository scaffold on Payload 4 (beta) and Next.js for Cloudflare Workers
- Shared contract `src/contract/types.ts` and a mock-backed data layer in `src/lib/data`
- Payload collections: programs, countries, cities, hotels, articles, albums, partners, testimonials, redirects, media, users, and the Site Settings global
- Arabic and English localization, Arabic admin interface, RTL fix for admin popups
- Cloudflare D1 database and R2 bucket created, initial migration generated
- Three design artboards (home, program, destination) prepared for company approval
- Delivery plan (Arabic and English) and workflow documents; both plans are in Drive `00_Project-Management`
- CI runs `pnpm verify` on every push and pull request
- Branch protection ruleset `protect-main` is on (PR, `verify`, one code-owner approval); a direct push was tested and rejected
- Stefano (`StefanoAshraf`) added as a collaborator
- GitHub issues #2 to #31 created, one per plan task, each with a Sub-tasks checklist; labels `phase-1` to `phase-4`, `backend`, `frontend`, `content`, `blocked`, `launch-blocker`, `needs-decision` exist
- Master Tracker spreadsheet created (Dashboard, Tasks, Setup log, Milestones, Company needs, Risks)

## Next

- 1.1 Connect the repository to Cloudflare and deploy a first version
- 1.2 Run the migration on D1 and create Stefano's admin account
- 1.5 Show the designs to the company

## Known problems

- The language switcher in the admin panel does not respond to clicks. Workaround: set the `payload-lng` cookie.
- The repository is not deployed yet, so the deployment path (Payload 4 beta on Workers) is untested.
- Local Node must meet the `engines` range or `pnpm` prints warnings.

## Open questions

- Has the company already approved the designs?
