# AGENTS.md

Instructions for AI coding agents (and a quick orientation for humans) working on **Rihla**, the Sky Key Tours website. Read this file fully before touching code. The full procedure is in [`docs/WORKFLOW.md`](./docs/WORKFLOW.md) and the task list is in [`docs/PLAN.md`](./docs/PLAN.md).

## What this project is

An open-source, bilingual (Arabic default, English second) website and CMS for a Turkey-based travel company (destination management company). B2B partner agencies are the main audience, travellers are secondary. Company staff edit content in an Arabic admin panel. Launch date: **2026-12-22**.

Stack: Payload CMS 4 (beta, versions pinned) and Next.js on Cloudflare Workers through OpenNext. D1 (SQLite) is the database, R2 stores media. TypeScript, pnpm.

People: **Mahmoud** (GitHub `m7devcore`) leads, owns the backend and merges to `main`. **Stefano** supplies content and takes small code tasks. The plan's task IDs (`1.1` ... `4.8`) are the unit of work.

## Commands

| Command | Use |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Local site and admin at http://localhost:3000 and /admin |
| `pnpm verify` | **The gate.** Lint, type-check and tests. Must pass before any PR. |
| `pnpm lint` / `pnpm typecheck` / `pnpm test` | The three parts of the gate |
| `pnpm build` | Production build. Run it when you change routing, config, collections or dependencies. |
| `pnpm generate:types` | Regenerate `src/payload-types.ts` after changing collections |
| `pnpm payload migrate:create <name>` | Create a database migration after changing collections |

Node must be `^24.22.3` or `>=26.13.1`, and pnpm 11 (not 12). If the local Node is older, say so in the PR rather than working around engine checks.

## Architecture and ownership

```
src/contract/types.ts      Shared data shapes. Change only by agreement (see rules).
src/lib/data/              The ONLY place the frontend gets data from. Mocks now, Payload Local API later.
src/lib/data/mocks/        Demo data. Public and safe to commit.
src/collections, globals   Payload schema (backend).
src/access/                Access control (backend).
src/app/(frontend)/        Public site (frontend).
src/app/(payload)/         Payload admin shell. custom.css has the RTL fix.
src/migrations/            Generated. Never hand-edit.
src/payload-types.ts       Generated. Never hand-edit.
```

Backend (Mahmoud): `src/collections`, `src/globals`, `src/access`, `src/payload.config.ts`, `src/lib/data`, migrations, deployment. Frontend and content (Stefano, small tasks): components, translation strings, demo data in `src/lib/data/mocks`. An agent may work in any area its assigned task requires, but must not edit files outside the task's scope.

## Hard rules

1. **Contract first.** Pages import data only from `src/lib/data`, never from Payload or from mocks directly. Changing `src/contract/types.ts` needs its own small PR that says what changed and why, approved by Mahmoud before dependent work lands.
2. **No secrets in the repository.** Keys, tokens, passwords and IDs of tracking accounts live in environment variables or in the admin panel's Site Settings. `.env` is never committed. If you see a secret in a diff, stop and report it.
3. **No real client content in the repository.** Real photos, prices, contracts and exports stay in Drive (`01_Client-Content`) or in the admin panel. Only demo data is committed. `seed/private/` and `exports/` are ignored on purpose.
4. **Arabic first.** Every user-facing string exists in Arabic and English. The default locale is `ar` with `en` as fallback. Layouts must work right-to-left. Use logical CSS properties (`margin-inline-start`, `padding-inline`, `inset-inline-*`) rather than `left` and `right`.
5. **Admin panel stays Arabic-ready.** New collections and fields get labels in `{ ar, en }` form, like the existing ones.
6. **Prices are off.** The `pricesEnabled` setting is off by default. No component may show a price unless it checks that setting.
7. **Do not upgrade pinned versions** (Payload 4 beta, Next, React, wrangler) before launch unless an issue asks for it.
8. **Generated files are generated.** Run the generator, do not edit by hand. A migration that was already deployed is never edited. Create a new one.
9. **One task per branch and PR.** No drive-by refactors. If you spot something else worth fixing, open a separate issue.
10. **Do not merge your own pull request** and do not push to `main`. A human merges.

## Definition of done

A task is done only when all of these are true and you can show the evidence:

- The task's "Done when" criterion in `docs/PLAN.md` is met, and you checked it against the running site, not only against the code.
- `pnpm verify` passes. `pnpm build` passes if the task touched routing, config, collections or dependencies.
- UI work was looked at in a browser in **Arabic and English**, at **mobile (about 390 px) and desktop (about 1440 px)** widths, and it matches the approved design (see `docs/design/README.md`).
- New logic has tests (Vitest). A bug fix has a test that failed before the fix.
- No secrets, no real client content, no unrelated changes in the diff.
- The pull request template is filled in honestly, including what you did not verify.

"It should work" is not evidence. Paste the command output or attach the screenshot.

## When to stop and ask a human

Stop, write down the question in the issue, and wait when:

- the task is ambiguous or two parts of the plan conflict;
- you need a secret, an account, DNS access or any credential;
- you would change the contract, delete data, or touch production configuration;
- a design decision is not covered by the approved designs;
- the same fix has failed twice. Do not keep guessing.

Prefer a clear question over a confident guess. Never invent company facts (programs, prices, addresses, partner names). Use clearly marked demo data instead.

## Reporting

When you finish a session, update `docs/STATUS.md` (current phase, what is done, what is next, known problems) in your PR. Keep entries short and factual.

After every task or status change, write a `Tracker update:` line in the issue and the PR, in the format given in [`docs/WORKFLOW.md`](./docs/WORKFLOW.md#the-tracker). Work through the issue's Sub-tasks checklist in order. If a sub-task fails twice, stop and ask (see "When to stop and ask a human").
