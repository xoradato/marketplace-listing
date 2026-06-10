---
name: marketplace-listing
version: 2.3.0
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
**(2) the price** — researched only for new electronics, otherwise the user's
own price slotted in (see Stage 2). Either stage can run alone if that's all
the user wants.

The make-or-break parts are the **Delivery** (give the finished post, not a
conversation about it), the **Voice** (make the item stand out without going
ridiculous) and the **search** (title + tags that match what people type). Don't
skim those.

## Delivery — the listing is the answer, not the conversation

This skill's recurring failure is not the copy — it's everything around it:
narrated process, strategy nobody asked for, and "next steps" instead of a
finished post. The user's verdict on that mode: *"tries to do everything but
accomplishes nothing."*

**The deliverable is one copy-paste-ready listing block per item.** Work back
from that.

- **One item at a time, finished.** Several items → complete the first fully,
  then the next. Never respond with an overview of all of them.
- **No process narration.** Don't open with "Voy a evaluar…" / "Primero
  investigo…". Do the work, show the result.
- **No meta-commentary.** Never explain what was weak in your draft, what you
  changed, or which skills you loaded. If you polish with `humanizer`, do it
  silently.
- **No executive summaries, plans, or strategy** unless the user explicitly
  asks for them. A listing request is not an invitation to redesign the sales
  routine.
- **Don't end with a menu.** No "el siguiente paso natural sería…", no offers
  of extra work. End at the tag line and stop. If something genuinely blocks
  the next item, ask that one thing.
- **Ask once, then produce.** One short batch (AskUserQuestion) for facts the
  photos and profile can't give. Don't block on nice-to-haves.
- Chat in the user's language and keep it brief; the listing itself in Spanish.

| The thought | Do instead |
|---|---|
| "Let me summarize the plan first" | There is no plan. Write the listing. |
| "I'll explain what I improved" | Show the listing; explain only if asked. |
| "This ties into their bigger strategy" | Not asked. This item only. |
| "I'll offer next steps to be helpful" | The finished post IS the help. Stop. |

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
- **Search tags** — every listing ends with one comma-separated line of **20
  varied terms**, ready to copy and paste as-is (see below).
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

### Search tags — 20 real terms, ready to paste
**Every listing ends with the `Para búsqueda: …` line: 20 varied,
comma-separated terms on their own line, ready to copy and paste as-is** — no
brackets or formatting the user would have to clean up. The user fixed the
number at 20: don't shrink it, and never drop the line because it "reads like
SEO" — Marketplace has no real tag field, but the text is indexed, and this
line is how buyers find the post. Don't stuff the terms into the body.

Vary the 20 — not the product name conjugated twenty ways, and no generic or
numbered tags ("sombrilla 1, sombrilla 2"). Use WebSearch to see how people
actually search for this in Honduras, then mix:
- general category (for volume) + specific attributes (for the right buyer)
- synonyms and regional words
- use-case and audience searches people type without naming the product
  ("laptop para clases en línea", "regalo para mamá")

## Voice — make it stand out, grounded (matters most)
There are **two ways to fail**, and the listing must avoid both:

- **Boring** — a flat, generic post (`Vestido azul. Talla M. Nuevo.`) that makes
  a nice item look like nothing special. This loses sales.
- **Ridiculous** — hype, emoji storms, fake urgency, stacked superlatives. This
  reads as a scam.

Aim for the **middle**: sound like a good shop clerk who knows the product well —
confident, warm, and specific. The tone is **cordial but neutral and impartial**:
describe the item as it is and let the real details sell it. Make it look
genuinely appealing, **without shouting.**

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
- **No exaggeration or overfabricated copy.** Don't dress the item up beyond what
  the photos and stated facts support.

**Register — cordial "usted", shop voice, plain Spanish:** `escríbanos`,
`tenemos`, `le ofrecemos`, `con gusto le atendemos`. Write so the average
Honduran reads it without effort — simple everyday words, **no colloquialisms**.
**No voseo, no Honduran slang** — avoid `ocupás` (use `necesita`), `escribime`
(use `escríbanos`), `mirá`, `va pues`, `compráme`. Cordial, not a banasupro
vendor; cordial is not hype.

Keep it **short and scannable for Facebook**: short sentences, one idea per line,
few commas. Appealing does not mean long.

The test: *"Would a tasteful boutique write this — appealing but grounded?"* If it
reads flat, add one real, concrete detail. If it reads like an ad, cut the hype.
For a deeper polish, the `humanizer` skill is worth a pass.

## Stage 2 — Pricing (Honduras only, realistic)
Goal: a **reasonable, non-abusive local price**, not an inflated one.

**Scope: price research is for electronics only, and only when the user hands
over a NEW product.** Everything else — used electronics, clothing, shoes,
general items — gets no research: just slot in the user's price.

- Research **only local markets**: Facebook Marketplace Honduras, Encuentra24,
  Mercado Libre Honduras, local buy/sell groups, and local electronics stores.
  Search in Spanish: item + `Honduras`, `precio`, `nuevo`.
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
> Para búsqueda: vestido azul, vestido casual, vestido de dama, ropa de mujer, vestido talla M, vestido talla L, vestido elegante, vestido para salir, vestido fresco, vestido nuevo, moda mujer, ropa casual de dama, vestido económico, vestido bonito, vestido para el diario, ropa nueva mujer, vestido juvenil, outfit casual, vestido cómodo, vestidos Tegucigalpa.

The flat one makes a nice dress look like nothing. The hype one reads as a scam.
The third makes it appealing with one real detail, keeps the shipping and contact
from the profile, and stays cordial.
