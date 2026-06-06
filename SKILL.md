---
name: marketplace-listing
version: 2.0.0
description: >
  Use when the user wants to sell something, or to write or rewrite a Facebook
  Marketplace, OLX, Mercado Libre, or classified listing in Honduras. Triggers
  include "help me sell my…", "write a Marketplace listing for…", "how much
  should I sell my … for", "price my…", "is this a fair price", pasting raw item
  details, or sending PHOTOS of an item to post. Covers clothing (tallas), shoes,
  electronics, and general secondhand or resale items. The user supplies their
  own photos; this skill never generates images. Trigger even if the user does
  not say "skill" or name a platform.
compatibility: claude-code
allowed-tools:
  - AskUserQuestion
  - WebSearch
  - WebFetch
  - Read
  - Write
  - Edit
  - Skill
---

# Marketplace Listing (Honduras): Photos → Listing + Local Price

Turn the user's **photos** plus a few facts into **THE listing** — the clean,
cordial, easy-to-find post a real small shop would write. Not a pirate repost,
not an ad, not AI.

Two stages, usually run together: **(1) listing copy** from the photos, and
**(2) local price research**. Either can run alone if that's all the user wants.

The make-or-break parts are the **Voice** (cordial, "usted", shop register) and
the **search** (title + tags that match what people actually type). Don't skim
those.

## Stage 1 — Listing from photos

### Start from the photos
The user sends photos. Look at them first and read off what's visible:

- Item type, color(s), material/texture, style, any visible brand or logo
- Condition cues (new, tags on, wear, damage) and what's included

Use that to fill in details **without interrogating** the user. Then ask only
for what a photo can't show, in **one short batch** (AskUserQuestion), not one
question at a time:

- Sizes / measurements available (`tallas`) — for clothing and shoes
- Price (if they want one shown), exact brand/model if not visible
- Location, and pickup vs. delivery

**Never invent** flaws, specs, measurements, or history that aren't in the photo
or stated by the user. A made-up detail that's wrong at pickup kills the sale.
When something is uncertain, confirm it — don't guess.

### Output format

- **Title** — search-first (see below).
- **Description** — simple, short, scannable (see below).
- **Selling points** — 0–4 short bullets, only if they add something new. Cut, don't pad.
- **Search tags** — one line of real, researched terms (see below).
- **Price** — slotted in if the user wants one (Stage 2).

### Title — search-first, no wasted words
Write it the way a buyer **types it into the search bar**. Front-load the terms
people search: category + the key attribute they'd type.

- Good: `Vestido azul casual talla M y L` · `Tenis Nike hombre 9.5` · `Camisa formal manga larga talla L`
- Color, size, and material go in **only when they're real search terms** — not
  to describe what the photo already shows. If the dress is obviously blue, don't
  spend the title on "color azul"; spend it on words people search.
- No catalog/variant framing (`Producto – nuevo color azul`). No ALL CAPS, no
  `🔥 OFERTA`. That reads as pirate.

### Description — simple, made for Facebook
People don't read paragraphs, least of all on Facebook. Keep it scannable.

- **Short sentences. One idea per line. Few commas** — avoid long comma-chained
  sentences.
- Order: one friendly first line, then the facts (condition, material, sizes
  available, what's included, any real flaw), then how to buy.
- Short bullets are fine. Never a wall of text.
- Close with a cordial, neutral invitation: `Escríbanos si necesita otra talla o
  color.` · `Con gusto le atendemos.`

### Search tags — real, not generic
**Don't** invent generic or numbered tags ("sombrilla 1, sombrilla 2"). Use
WebSearch to see how people actually search for this in Honduras (autocomplete,
common terms, synonyms, regional words). Then give one line of **real** terms:
general category (for volume) + specific attributes (for the right buyer) +
synonyms.

- Example for a blue dress: `vestido azul, vestido casual, vestido de dama, ropa
  de mujer, vestido talla M, vestido elegante`
- Put them on their own line (`Para búsqueda: …`). Don't stuff them into the
  body. Marketplace has no real tag field, but the text is indexed, so the right
  terms help you show up.

## Voice — cordial, "usted", small-shop register (matters most)
Sound like **a cordial small shop**, not an informal street vendor and not an ad.

- Address the buyer as **usted**, plural and warm when closing: `escríbanos`,
  `tenemos`, `le ofrecemos`, `con gusto le atendemos`.
- **No voseo, no Honduran slang.** Avoid `ocupás`/`ocupa` (use `necesita`),
  `escribime` (use `escríbanos`), `mirá`, `va pues`, `te lo dejo en…`,
  `compráme`. Keep it neutral and cordial.
- **Cordial is not hype.** Still no `increíble`, `el mejor precio`, `no te lo
  pierdas`, no ALL CAPS, no emoji pileups (one at most, usually zero).
- **Honest and plain.** State the facts. Name real flaws — it builds trust and
  filters out time-wasters.
- The goal: it reads like **THE listing** from a serious shop, not a pirate
  repost or AI.

Final check: reread and ask, *"Would a cordial, serious shop write this — or does
it smell like an ad, a pirate post, or AI?"* If it smells, simplify. For a deeper
polish, the `humanizer` skill is worth a pass.

## Stage 2 — Pricing (Honduras only, realistic)
Goal: a **realistic local price**, not an inflated one.

- Research **only local markets**: Facebook Marketplace Honduras, Encuentra24,
  Mercado Libre Honduras, local buy/sell groups, and local stores for new
  clothing. Search in Spanish: item + `Honduras`, `precio`, `usado`/`nuevo`.
- **Do NOT anchor on eBay or US prices.** That is what inflates prices and makes
  them absurd for here.
- Pull 4–8 real local comps, each with its condition and source.
- Present in **lempiras (HNL)**. Use USD only as a small side reference, never as
  the base.
- Give a range and one recommendation:
  - **Para vender rápido** — low end of comps.
  - **Justo** — typical asking for this condition.
  - **Precio sugerido** — a notch above fair (~10%) for haggling room; tell the
    user how much room you left.
- Add 1–2 lines of reasoning and list the comps, so they can sanity-check.
- Be honest about limits: this is an estimate from public listings, not a live
  feed. Local demand, timing, and condition move the real number.

If the user already knows the price, skip research and just slot it in.

## Language
Default to **Spanish** — that is who is buying locally. If the user writes in
English or asks for both, give Spanish first, then English, clearly separated.

## Out of scope
- **No image generation.** The user shoots their own photos. You may remind them
  that clear, well-lit photos sell faster — but never offer to create images.

## Example (shape, not a script)
Input: the user sends a photo of a blue dress + *"tengo en M y L, está nuevo"*.

A good listing:

> **Vestido azul casual talla M y L**
>
> Vestido azul, nuevo. Tela fresca y cómoda.
> Disponible en talla M y L.
> Entrega en [su zona] o envío por encomienda.
> Escríbanos si necesita otra talla o color. Con gusto le atendemos.
>
> Para búsqueda: vestido azul, vestido casual, vestido de dama, ropa de mujer, vestido talla M, vestido elegante.
> Precio sugerido: L 450 (rango L 400–500).

Not like:

> 🔥🔥 VESTIDO NUEVO color AZUL 🔵 oferta!!! el mejor precio, escribime ya que se acaban 🏃‍♀️💨

The bad one shouts, uses slang (`escribime`), repeats what the photo already
shows (`color azul`), and reads as pirate. The good one is easy to find, reads in
one glance, and builds trust.
