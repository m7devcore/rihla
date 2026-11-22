# Design reference

Three preliminary artboards prepared for the company's approval. They are a **starting point, not final art**: the real site should feel richer, with motion and more polish, but it must keep this structure, tone and content order.

| File | Page | Notes |
| --- | --- | --- |
| [`home.html`](./home.html) | Home | Navigation, hero, trust bar, four destination cards with "official office" badges, three featured programs, why work with us (for agencies), partner logo placeholders, blog, testimonials, two WhatsApp buttons, footer |
| [`program.html`](./program.html) | Program | Title block, gallery, daily itinerary, includes and excludes, agency box, side card with two WhatsApp buttons, no price, related programs |
| [`destination.html`](./destination.html) | Destination (country) | Country hero, cities, programs with filter buttons, hotels, call to action |

These files are source markup from the design canvas and need its runtime (`support.js`), so they do not render correctly when opened alone. Use them to read the structure, the copy and the style values. Mahmoud has the rendered canvas. Ask him for screenshots if you need to compare visually, and check Drive folder `02_Design`.

## Style values

| Item | Value |
| --- | --- |
| Navy (header, footer, headings) | `#0F2238` |
| Gold (accents, badges, buttons) | `#C9A25E` |
| Background | `#F6F1E7`, with `#EDE5D3` for alternating sections |
| Body text | `#1B2430` |
| Headings font | Amiri |
| Body font | IBM Plex Sans Arabic |
| Direction | Right-to-left first. The English version mirrors the layout. |

## Rules

- Names, programs, counts and partner names in the artboards are placeholders, not company facts. Real content comes from the admin panel.
- No prices appear anywhere. Price display is switched off by the `pricesEnabled` setting.
- Any page not drawn here (programs list, partners, about, contact, blog) should follow the same style. Ask before inventing a new visual direction.
