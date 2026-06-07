---
name: marketplace-listing
version: 2.1.0
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

Turn the user's **photos** plus a few facts into **THE listing** — the post that
makes the item look genuinely good and is easy to find. Not a flat generic post,
not hype, not AI.

Two stages, usually run together: **(1) listing copy** from the photos, and
**(2) local price research**. Either can run alone if that's all the user wants.

The make-or-break parts are the **Voice** (make the item stand out without going
ridiculous) and the **search** (title + tags that match what people type). Don't
skim those.

## Stage 1 — Listing from photos

### Shop profile — fixed data, given once (read this FIRST)
The user's fixed business data lives in **`datos-tienda.md`** in this skill's
folder: shipping policy and coverage, pickup location, payment methods, contact,
and a standard closing. The user gave this once. **Read it before writing any
listing and reuse it verbatim — never lose it, never change it, never re-ask
what's already on file.**

- **Shipping/delivery and contact are REQUIRED in every listing.** They come from
  the profile. Never drop them.
- If `datos-tienda.md` is missing, or a field you need is blank, ask the user
  **once**, then save it there so next time it's automatic.
- Item-specific facts (size, price, condition) are NOT shop data — those you
  gather per item, below.

### Start from the photos
The user sends photos. Look at them first and read off what's visible:

- Item type, color(s), material/texture, style, any visible brand or logo
- Condition cues (new, tags on, wear, damage) and what's included

Use that to fill details **without interrogating** the user. Then ask only for
what the profile and photo can't give, in **one short batch** (AskUserQuestion):

- Sizes / measurements available (`tallas`) — for clothing and shoes
- Price (if they want one shown), exact brand/model if not visible
- Anything item-specific you can't see

**Never invent** flaws, specs, measurements, or history not in the photo or
stated by the user. A made-up detail that's wrong at pickup kills the sale. When
unsure, confirm — don't guess.

### Output format

- **Title** — search-first (see below).
- **Description** — makes the item stand out, grounded (see Voice).
- **Shipping + contact** — from the shop profile; always present, never dropped.
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

## Voice — make it stand out, grounded (matters most)
There are **two ways to fail**, and the listing must avoid both:

- **Boring** — a flat, generic post (`Vestido azul. Talla M. Nuevo.`) that makes
  a nice item look like nothing special. This loses sales.
- **Ridiculous** — hype, emoji storms, fake urgency, stacked superlatives. This
  reads as a scam.

Aim for the **middle**: sound like a good shop clerk who knows the product well —
confident, warm, and specific. Make it look genuinely appealing, **without
shouting.**

**Make it stand out (do this):**
- Open with a real hook: the one thing that makes this item nice or useful, in a
  natural line.
- Use concrete, appealing detail grounded in the photo and facts: how the fabric
  falls, the fit, comfort, quality cues, what it pairs with, what occasion it
  suits. **Specifics sell; empty adjectives don't.**
- Be confident and cordial: the item is good and you're glad to offer it.

**Don't go ridiculous (avoid this):**
- No stacked superlatives (`el más hermoso, calidad premium, increíble`).
- No emoji storms, ALL CAPS, or fake urgency (`¡últimas piezas!`, `no te lo pierdas`).
- No lies or invented hype. If you have to inflate it, you've already lost trust.

**Register — cordial "usted", shop voice:** `escríbanos`, `tenemos`,
`le ofrecemos`, `con gusto le atendemos`. **No voseo, no Honduran slang** —
avoid `ocupás` (use `necesita`), `escribime` (use `escríbanos`), `mirá`,
`va pues`, `compráme`. Cordial, not a banasupro vendor; cordial is not hype.

Keep it **short and scannable for Facebook**: short sentences, one idea per line,
few commas. Appealing does not mean long.

The test: *"Would a tasteful boutique write this — appealing but grounded?"* If it
reads flat, add one real, concrete detail. If it reads like an ad, cut the hype.
For a deeper polish, the `humanizer` skill is worth a pass.

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
Input: a photo of a blue dress + *"tengo en M y L, está nuevo."* The shop profile
(`datos-tienda.md`) says: envíos a todo Honduras, contra entrega; pago en efectivo
o transferencia; WhatsApp 9999-9999.

**Flat / generic — don't:**

> Vestido azul. Talla M y L. Nuevo. Escríbanos.

**Ridiculous / hype — don't:**

> 🔥😍 VESTIDO HERMOSO!!! el más lindo y de calidad premium, te vas a enamorar
> reina 👑 ¡no te lo pierdas que se acaban! 🏃‍♀️💨

**Just right — stands out, grounded — do:**

> **Vestido azul casual talla M y L**
>
> Vestido azul de corte casual, fresco y cómodo para el diario o para salir.
> La tela cae bonito y no se transparenta. Nuevo, en talla M y L.
> Hacemos envíos a todo Honduras, pago contra entrega. Aceptamos efectivo o transferencia.
> Escríbanos al 9999-9999 si necesita otra talla o color. Con gusto le atendemos.
>
> Para búsqueda: vestido azul, vestido casual, vestido de dama, ropa de mujer, vestido talla M, vestido elegante.

The flat one makes a nice dress look like nothing. The hype one reads as a scam.
The third makes it appealing with one real detail, keeps the shipping and contact
from the profile, and stays cordial.
