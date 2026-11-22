# Implementation plan: Sky Key Tours website (Rihla)

Last updated: 2026-11-22. Launch date: **2026-12-22**. Work window: 2026-11-23 to 2026-12-22 (four weeks).

This is the English version of the plan. The Arabic version lives in the shared Drive folder `sky-key-tours/00_Project-Management`. If the two ever disagree, ask Mahmoud which one is current, then fix the other.

Live progress is tracked in GitHub issues (one per task ID below) and summarised in [`STATUS.md`](./STATUS.md). How every task is carried out is defined in [`WORKFLOW.md`](./WORKFLOW.md) and [`../AGENTS.md`](../AGENTS.md).

## Summary

| Item | Detail |
| --- | --- |
| Goal | Bilingual (Arabic/English) website for Sky Key Tours, a Turkey-based destination management company. B2B (partner agencies) first, travellers second. The company's own staff manage content through an Arabic admin panel. |
| Window | 4 weeks, 2026-11-23 to 2026-12-22 |
| Mahmoud | Accountable for the backend, database, wiring, deployment and review of Stefano's code. About 15 hours a week. |
| Stefano | Company content, images, programs, data entry in the admin panel, and small, well-defined code tasks. About 7 hours a week (one hour a day). |
| AI agents | May carry out any engineering task below under [`WORKFLOW.md`](./WORKFLOW.md). A task's owner stays the accountable human; the human gates in the workflow always apply. |
| Already done | Repository scaffold, Payload collections, Arabic admin panel, Cloudflare D1 and R2 resources, three design artboards (home, program, destination) |
| Stack | Payload CMS 4 (beta, pinned) and Next.js on Cloudflare Workers, D1 database, R2 media storage |
| Shared contract | `src/contract/types.ts` is the agreed shape of the data. The frontend reads data only through `src/lib/data`. |

## Milestones

| Date | Milestone |
| --- | --- |
| 2026-11-25 | First deployment to Cloudflare |
| 2026-11-26 | Company approves the three designs |
| 2026-12-06 | Core pages finished on demo data |
| 2026-12-09 | Site reads from the admin panel database |
| 2026-12-18 | Company signs off on content |
| 2026-12-22 | Launch |

## Phase 1: Setup and foundations (2026-11-23 to 2026-11-29)

Done when: a staging site is live on Cloudflare, Stefano can log in to the admin panel, and the company has approved the designs. Hours: Mahmoud 14, Stefano 7.

| ID | Task | Owner | Hours | Due | Done when |
| --- | --- | --- | --- | --- | --- |
| 1.1 | Connect the repository to Cloudflare (Workers Builds) and deploy a first version with secrets set as environment variables | Mahmoud | 4 | 2026-11-25 | A public workers.dev URL serves the site and `/admin` loads. No secret is in the repository. |
| 1.2 | Run the database migration on the real D1 database and create Stefano's admin account | Mahmoud | 1 | 2026-11-25 | Stefano can log in to the deployed `/admin`. |
| 1.3 | Frontend base: RTL and LTR layout, fonts, colors and spacing from the design | Mahmoud | 5 | 2026-11-27 | Layout renders correctly in Arabic (RTL) and English (LTR) at mobile and desktop widths. Tokens match the approved design. |
| 1.4 | Shared components: header, footer, two WhatsApp buttons (traveller and agency) | Mahmoud | 3 | 2026-11-28 | Both buttons open WhatsApp with a message that depends on page and language. Numbers come from Site Settings. |
| 1.5 | Show the designs to the company and collect feedback | Mahmoud + Stefano | 1 + 1 | 2026-11-26 | Written approval or a list of requested changes. |
| 1.6 | Set up Stefano's computer: Node, pnpm, clone, run the site locally (with Mahmoud's help) | Stefano | 1 | 2026-11-24 | `pnpm dev` runs and the home page opens locally. |
| 1.7 | Collect company content in a Drive folder outside the repository: countries and cities, programs, logos, photos | Stefano | 4 | 2026-11-29 | Folder `01_Client-Content` contains the agreed list, named and organised. |
| 1.8 | First code task: add two programs in Arabic to the demo data (`src/lib/data/mocks`) through a pull request | Stefano | 1 | 2026-11-29 | PR merged. Both programs appear on the local site. |

## Phase 2: Build the pages (2026-11-30 to 2026-12-06)

Done when: all core pages work on demo data and real data entry has started. Hours: Mahmoud 15, Stefano 7.

| ID | Task | Owner | Hours | Due | Done when |
| --- | --- | --- | --- | --- | --- |
| 2.1 | Home page from the design: hero, destinations, featured programs, why work with us | Mahmoud | 5 | 2026-12-02 | Matches the approved design in AR and EN at mobile and desktop widths. |
| 2.2 | Program page: gallery, daily itinerary, includes and excludes, two WhatsApp buttons | Mahmoud | 4 | 2026-12-04 | Renders any program from the data layer. No price is shown while `pricesEnabled` is off. |
| 2.3 | Destination page with cities and program and hotel filters | Mahmoud | 3 | 2026-12-05 | Filters narrow the lists correctly. |
| 2.4 | Programs list page with search and filters | Mahmoud | 3 | 2026-12-06 | Search and filters work in both languages. |
| 2.5 | Enter destinations, cities and hotels in the admin panel | Stefano | 3 | 2026-12-04 | Entries exist in Arabic. Required fields are filled. |
| 2.6 | Upload images and write the first programs in Arabic | Stefano | 2 | 2026-12-06 | First programs are complete in the admin panel. |
| 2.7 | Code task: partner logos strip component (`PartnerLogos`) using demo data | Stefano | 2 | 2026-12-06 | Component renders in AR and EN. Mahmoud has reviewed the PR. |

## Phase 3: Wiring and merging (2026-12-07 to 2026-12-13)

Done when: the site reads its data from the admin panel and every page exists in both languages. Hours: Mahmoud 15, Stefano 7.

| ID | Task | Owner | Hours | Due | Done when |
| --- | --- | --- | --- | --- | --- |
| 3.1 | Replace the demo data in `src/lib/data` with Payload Local API calls | Mahmoud | 6 | 2026-12-09 | Every page shows database content. Function signatures are unchanged. |
| 3.2 | Static pages: About, Partners and agencies, Contact | Mahmoud | 3 | 2026-12-10 | Pages exist in both languages and link from the navigation. |
| 3.3 | Blog (list and article) and SEO: titles, descriptions, sitemap, hreflang | Mahmoud | 4 | 2026-12-12 | Sitemap lists all public pages. Every page has the right hreflang pair. |
| 3.4 | Track WhatsApp clicks with Meta Pixel and GA4 (only after consent) | Mahmoud | 2 | 2026-12-13 | A click event is sent after consent and not before. |
| 3.5 | Complete all programs agreed with the company and translate them to English | Stefano | 4 | 2026-12-12 | Every published program has Arabic and English text. |
| 3.6 | Code task: fix and translate interface strings in the translation files | Stefano | 1 | 2026-12-12 | No untranslated string is visible in English mode. |
| 3.7 | Test the site on a phone and log every problem as a GitHub issue | Stefano | 2 | 2026-12-13 | Each problem is an issue with a screenshot. |

## Phase 4: Move, test and launch (2026-12-14 to 2026-12-22)

Done when: the site is live on the official domain, approved by the company, and company staff can update content themselves. Hours: Mahmoud 14, Stefano 7.

| ID | Task | Owner | Hours | Due | Done when |
| --- | --- | --- | --- | --- | --- |
| 4.1 | Connect the official domain to Cloudflare and set up redirects for old URLs, if any (Redirects collection) | Mahmoud | 3 | 2026-12-16 | The domain serves the new site over HTTPS. Old URLs redirect. |
| 4.2 | Performance check and image optimisation on mobile | Mahmoud | 3 | 2026-12-17 | Lighthouse performance on mobile is recorded and any score below 90 has a written reason. |
| 4.3 | Final content review with the company and approval | Stefano | 3 | 2026-12-18 | Written approval from the company. |
| 4.4 | Fix issues found in testing and in the company's feedback | Mahmoud | 5 | 2026-12-19 | No open issue labelled `launch-blocker`. |
| 4.5 | Database and media backup, plus a short Arabic guide to the admin panel for company staff | Mahmoud | 3 | 2026-12-20 | A restorable backup exists. The guide is in the Drive folder. |
| 4.6 | Training session for company staff on the admin panel (with Mahmoud) | Stefano | 2 | 2026-12-20 | Staff have published or edited one item themselves. |
| 4.7 | Final test checklist on phones and browsers, including every WhatsApp button and form | Stefano | 2 | 2026-12-21 | Checklist completed with no open launch blocker. |
| 4.8 | Launch day: switch the domain to the new site and watch the first 24 hours | Mahmoud + Stefano | n/a | 2026-12-22 | Site live. Errors and WhatsApp clicks are monitored for 24 hours. |

## What we need from the company

The biggest risk to the launch date is late answers from the company. Stefano follows these up.

| Needed | Why | Due |
| --- | --- | --- |
| Approval of the three designs (home, program, destination) | We build pages to this look and do not redo them later | 2026-11-26 |
| Countries, cities and official offices the company serves | Site structure and "official office" badges | 2026-11-29 |
| Programs: texts, daily itinerary, includes and excludes | Core content | First programs 2026-12-04, the rest 2026-12-12 |
| Photos and logos (company and partners) | Gallery and partner strip | 2026-12-04 |
| WhatsApp numbers (traveller, agency, second), office addresses, social links | Site Settings and contact buttons | 2026-12-02 |
| Meta Pixel and GA4 IDs, if they exist | Click and visit tracking | 2026-12-12 |
| Access to manage the domain's DNS | Connect the official domain | 2026-12-14 |
| Final approval of content and images | Launch | 2026-12-18 |

## Risks and fallbacks

| Risk | Fallback |
| --- | --- |
| The company is late with approval or content | Launch with fewer programs and add the rest after launch from the admin panel |
| Payload 4 is still beta and may break on deploy or in the admin panel | Test the real deployment in week 1 (task 1.1). Pin the current version. Do not upgrade before launch. |
| The admin language switcher does not respond to clicks | Use the `payload-lng` cookie workaround, explain it to staff, and follow up with the Payload maintainers |
| Stefano has limited time (about 7 hours a week) | His code tasks are small and independent. Mahmoud or an AI agent takes any that slip. |
| Large images slow the site on mobile | Compress before upload. Performance check in task 4.2. |

Deliberately postponed until after launch:

- Price display (the `pricesEnabled` switch exists and is off because the designs have no prices)
- Richer animation and effects than the preliminary designs
- A bigger blog and photo albums
- Any language beyond Arabic and English

## Working rules

- Every task has a GitHub issue named after its ID (for example `1.8`). Nobody starts work without one.
- File ownership is separate. Mahmoud owns the backend and `src/lib/data`. Stefano owns small components, translation files and demo data. Changes to `src/contract/types.ts` need agreement from both.
- Stefano works on a branch per task and opens a pull request. Mahmoud reviews before merging to `main`.
- No secrets or keys in the public repository, ever. Real company content (photos, prices, contracts) stays in Drive and in the admin panel.
- The project is free for the company. They pay only for tools (the domain and Cloudflare services if needed).
- A short weekly meeting (proposed: 20 minutes) reviews what is done and what comes next. Any delay is reported immediately, not at the deadline.
