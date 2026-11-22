# Rihla (رحلة)

Open-source bilingual (Arabic / English) website and CMS for travel agencies and destination management companies (DMCs). Built on Payload CMS and Next.js, designed to run on Cloudflare.

> **Status: early development.** The structure below describes what Rihla is being built to do. Nothing here is released yet.

## Why Rihla

Most travel agency sites in the Arab world are built once and then depend on a developer for every change. Rihla gives agency staff a simple admin panel to manage trips, destinations, hotels and articles themselves, while giving visitors a fast, right-to-left-first website.

It is built for B2B first (partner agencies and corporate clients), with B2C (individual travellers) as a secondary audience.

## Planned features

- Arabic and English from day one, with full RTL and LTR support
- Trip programs with day-by-day itineraries, inclusions and exclusions, and an optional section for partner agencies
- Destinations as hubs: countries and cities, each collecting its own programs, hotels, articles and photos
- Hotels with filters (country, city, stars, family-friendly)
- Blog, photo albums of real trips, partner logos and testimonials
- WhatsApp-first contact: separate "traveller" and "agency" buttons with a pre-filled message per page and language
- Optional pricing, switched off by default through a single feature flag
- Analytics and consent: Cloudflare Web Analytics, WhatsApp click events, optional Meta Pixel and GA4 behind a cookie banner
- SEO: sitemap, hreflang, structured data and redirect management from the admin panel
- Branding, contact numbers and tracking IDs are settings in the admin panel, not code

## Stack

- [Payload CMS](https://payloadcms.com) and [Next.js](https://nextjs.org)
- [Cloudflare](https://www.cloudflare.com) Workers (deployment), D1 (database) and R2 (media)
- TypeScript

## Getting started

Setup instructions will be added once the first version of the codebase lands.

## Project rules

- **No secrets in the repository.** Keys and tokens live in environment variables. See `.env.example`.
- **Content lives in the database, not in code.** The repository ships only demo seed data.
- **Brand is configuration.** Company name, logo, colours and contact details are set in the admin panel.

## Contributing

Issues and pull requests are welcome once the first version is out. Until then, feel free to open an issue with ideas or questions.

How the project is run, for humans and AI agents:

- [`AGENTS.md`](./AGENTS.md): rules, commands and definition of done
- [`docs/WORKFLOW.md`](./docs/WORKFLOW.md): the procedure for every task, with review and human gates
- [`docs/PLAN.md`](./docs/PLAN.md): the four-week delivery plan with task IDs
- [`docs/STATUS.md`](./docs/STATUS.md): current progress
- [`docs/design/`](./docs/design/README.md): design reference

## License

[MIT](./LICENSE)

## Project structure

- `src/contract/types.ts` — shared types between backend and frontend (change by agreement only)
- `src/lib/data/` — data layer; the frontend imports only from here. Currently returns mock data from `src/lib/data/mocks/`; the backend replaces the bodies with the Payload Local API
- `src/collections/` — Payload collections (backend)
- `src/app/(frontend)/` — public site (frontend)
- `wrangler.jsonc` — Cloudflare Workers config (replace `DATABASE_ID` with your D1 database id)

## Getting started

Requires Node `^24.22.3 || >=26.13.1` and pnpm.

```bash
cp .env.example .env   # set PAYLOAD_SECRET
pnpm install
pnpm dev
```

Note: the scaffold is based on Payload's official Cloudflare D1 template, which currently targets Payload 4 (beta).
