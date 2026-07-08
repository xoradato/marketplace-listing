---
name: marketplace-listing
version: 3.0.0
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
not hype, and above all not machine-flavored ad-copy.

Two stages, usually run together: **(1) listing copy** from the photos, and
**(2) the price** — researched only for new electronics, otherwise the user's
own price slotted in (see Stage 2). Either stage can run alone if that's all
the user wants.

The make-or-break parts are the **Delivery** (give the finished post, not a
conversation about it), the **Voice** (sound like a person typing a post, not a
copywriter) and the **search** (title + tags that match what people type). Don't
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
- Once the user has approved the assembled shipping + closing block, that exact
  wording is the standard: **reuse the same block verbatim in every listing —
  never reword, trim, or restyle it.** This includes the cordial closing line and
  any profile rule about keeping the phone number out of the public text.
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

## Voice — a person typing a post, not a copywriter (matters most)
There are **three ways to fail**, and the third is the one that actually happens:

- **Boring** — a flat, generic post (`Vestido azul. Talla M. Nuevo.`) with
  nothing a buyer can want.
- **Ridiculous** — hype, emoji storms, fake urgency, stacked superlatives. Reads
  as a scam.
- **Machine** — grammatically perfect ad-copy where every noun carries a
  decorating clause and every line ends by selling a benefit. No human types a
  Marketplace post like that, buyers feel it, and it does not sell. **This is
  the default failure of AI-written Spanish. Treat it as the main enemy.**

### Machine tells — banned, by name
These all come from real failed drafts. If one appears, the line gets rewritten:

| Tell | Example (don't) |
|---|---|
| Adjective pairs bolted to nouns | `fresca y cómoda`, `limpio y discreto`, `elegante y versátil`, `práctico y funcional` |
| Use-case menus | `para el trabajo, clases o una salida casual`, `ideal para cualquier ocasión` |
| Two-branch formulas | `ya sea para X o para Y`, `tanto para X como para Y`, `no solo X sino también Y` |
| Copywriter verbs | `cuenta con`, `brinda`, `ofrece`, `destaca por`, `lo convierte en` |
| Benefit endings everywhere | every line closing with why it's good (`…que aguanta bien el uso diario`) |
| Invented appraisals | facts said `logo bordado al pecho`; the draft added `con un acabado limpio y discreto` — fabricated |
| Metronomic rhythm | three lines in a row with the same shape (noun + comma + decorating clause) |

**Invented appraisals are the worst tell.** If the user didn't say it and the
photo doesn't show it, it does not exist. Quality judgments (`acabado fino`,
`costuras reforzadas`) count as facts — they need a source too.

### What a person sounds like — do
- **Facts carry the post,** grouped the way a person would type them:
  `Camisa tipo polo de hombre, azul marino, nueva con etiqueta.` is one natural
  line — don't shred it into three fragments. Short lines like `Tallas M y G.`
  are fine between fuller ones.
- **Exactly one selling line — required, not optional.** A post that is only a
  spec sheet is the flat failure and loses the sale. Pick the single best real
  detail — something a buyer could verify at pickup or that the photo shows —
  and give it a natural sentence: `la tela no se transparenta`, `el piqué es
  del grueso bueno, no del delgadito`. One real detail sells more than five
  decorated nouns. Can't verify it? Pick another detail, don't invent one.
- **Uneven rhythm:** a fuller line, then a short one. Both uniform rhythms read
  generated — all decorated clauses is machine, and six two-word fragments in a
  row is a spec sheet.
- **The test, line by line:** *would the seller type this on their phone?* A
  line whose only job is to sell gets cut; a post with no life gets its one
  selling line back.

**Register — cordial "usted", shop voice, plain Spanish:** `escríbanos`,
`tenemos`, `con gusto le atendemos`. Write so the average Honduran reads it
without effort — simple everyday words, **no colloquialisms**. **No voseo, no
Honduran slang** — avoid `ocupás` (use `necesita`), `escribime` (use
`escríbanos`), `mirá`, `va pues`. Cordial, not a banasupro vendor; cordial is
not hype.

Keep it **short and scannable for Facebook**: one idea per line, few commas.

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

**Machine / ad-copy — don't (this is the one that actually happens):**

> Vestido azul de corte casual, fresco y cómodo, ideal para el diario o para
> salir. Su tela ligera brinda comodidad y frescura, y su diseño versátil lo
> convierte en una excelente opción para cualquier ocasión.

**Just right — a person typed this — do:**

> **Vestido azul casual talla M y L**
>
> Vestido azul de corte casual, nuevo.
> Tallas M y L.
> La tela cae bonito y no se transparenta.
> Hacemos envíos a todo Honduras, pago contra entrega. Aceptamos efectivo o transferencia.
> Escríbanos al 9999-9999 si necesita otra talla o color. Con gusto le atendemos.
>
> Para búsqueda: vestido azul, vestido casual, vestido de dama, ropa de mujer, vestido talla M, vestido talla L, vestido elegante, vestido para salir, vestido fresco, vestido nuevo, moda mujer, ropa casual de dama, vestido económico, vestido bonito, vestido para el diario, ropa nueva mujer, vestido juvenil, outfit casual, vestido cómodo, vestidos Tegucigalpa.

The flat one gives nothing to want. The hype one reads as a scam. The machine
one is grammatically perfect and sells nothing — every noun is decorated and no
line sounds typed. The last one is mostly bare facts, one verifiable detail
(`no se transparenta`), uneven line lengths, and the profile block intact.
