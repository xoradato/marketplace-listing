# Marketplace Listing: Natural Copy, Two Markets, and Public Presentation

## Status and relationship to v4

This specification refines and supersedes the language, search-term, public
presentation, and market-specific parts of
`2026-07-27-marketplace-listing-v4-design.md`. The v4 evidence, privacy,
auditing, pricing, batch, and shop-profile safeguards remain in force unless
this document explicitly changes them.

## Objective

Make `marketplace-listing` genuinely useful to an ordinary seller who supplies
a product photo or listing screenshot plus the text they already have. The
skill should improve the presentation so it is clear, natural, trustworthy, and
more likely to invite a legitimate availability question without sounding like
AI-generated advertising.

Support two markets:

- Honduras, in plain neutral Spanish.
- United States, in natural plain English unless the user explicitly requests
  Spanish.

The skill remains a compact instruction package, not an application, content
platform, analytics product, or full marketing suite.

## Core user flow

1. The user supplies a product photo, a listing screenshot, existing text, or
   any combination of these.
2. The skill reads the visible information and preserves the existing price.
3. The skill identifies the market from an explicit request or clear listing
   evidence. If the market is still ambiguous and would change currency,
   language, delivery wording, or research, it asks one short question:
   `¿Honduras o Estados Unidos?`
4. The skill audits the current presentation when a prior listing is supplied.
5. It returns a title and a short natural description. When minimum product
   evidence is available, it also returns exactly 20 grounded search terms. The
   result should require no cleanup before copying.

No separate graphical interface, account system, marketplace integration, or
configuration wizard is required.

## Market behavior

### Honduras

- Use neutral Spanish and a cordial `usted` register.
- Use natural seller language rather than formal customer-service prose.
- Preserve lempira prices and Honduras delivery or payment facts.
- Reuse the approved `datos-tienda.md` public block verbatim when present.
- Use Honduran product vocabulary when it differs from generic Spanish.

### United States

- Use natural, concise US English by default.
- Preserve dollar prices, pickup, shipping, payment, and condition details.
- Do not insert a Honduras shop block or Honduras-specific terms.
- Use the transaction details supplied in the listing or request.
- If the user requests Spanish, write the entire response in natural US Spanish,
  including section headings, while keeping US currency, location, pickup, and
  shipping context.

The selected market affects wording and vocabulary, not the evidence standard.
The skill must never translate an unsupported claim into a supported one.

## Price research

Preserve the displayed or supplied price unless the user explicitly requests a
price check. For Honduras, use recent comparable Honduras listings or stores and
report the result in lempiras. For the United States, use recent comparable US
listings or stores and report the result in dollars. In either market, match the
product, model, condition, and included items as closely as possible and
distinguish asking prices from confirmed sale prices.

## Natural, conversion-oriented copy

The customer-facing result should sound like a real person describing an item
on their phone. It should not read like an audit report, a product catalog, or
a copywriting template.

Each description should normally use four to seven short lines:

1. Identify the product, condition, and strongest confirmed differentiator.
2. Explain one concrete buying reason supported by the facts.
3. Add decision-relevant details such as size, model, included items, colors,
   price, pickup, delivery, shipping, or payment when known.
4. End with a low-pressure, natural availability invitation.

Examples of acceptable invitations:

- `Escríbanos para confirmar qué colores están disponibles.`
- `Send a message to confirm it is still available.`

The description must not mechanically include every line type when evidence is
missing. It must omit unsupported details instead of filling space.

Avoid:

- Administrative language such as `no hay evidencia para recomendar`,
  `principal ventaja`, or `posible bloqueador` inside customer-facing copy.
- Copywriting formulas, stacked adjectives, fake urgency, guarantees,
  unsupported quality claims, and repetitive benefit endings.
- Generic filler such as `perfect for any occasion`, `great addition`,
  `high quality`, `ideal para`, `cuenta con`, or `brinda`.
- Calls to action that sound scripted or demand a purchase.

Audit bullets may use evidence language, but they must still be direct and
helpful: say what is unclear and what to change.

## Search-term rules

Return exactly 20 distinct comma-separated terms under the market-appropriate
section heading. The terms help describe how a buyer may search for this same
product; they are not a promise about Facebook's ranking system.

Use, in priority order:

1. The product's direct name and real synonyms used in the selected market.
2. Confirmed brand, model, condition, size, color, material, or other useful
   attributes.
3. Natural combinations buyers currently use for that same product.

When browsing or search tools are available, perform one lightweight current
vocabulary check using a market-relevant source such as manufacturer
terminology, retailer category wording, a current comparable listing, or search
suggestions. Consult a second source only when the terminology is unfamiliar,
ambiguous, or differs between markets. This check applies to the search terms,
not to every section of the listing. Use sources only to validate query
language, never to import unsupported product claims. Do not claim access to
Facebook search volume or internal ranking data.

When browsing is unavailable, use grounded common product vocabulary and do not
claim that live validation occurred. If the runtime requires citations, place a
brief `Vocabulary sources` or `Fuentes de vocabulario` note after the copy-ready
tag line so the line itself remains clean.

Do not use:

- Unrelated complementary products.
- Broad need-state expansion.
- Generic `buy`, `price`, `for sale`, location, or marketplace filler.
- Invented audiences, occasions, compatibility, brands, models, or attributes.
- Near-duplicate phrases whose only purpose is reaching a count.

If the supplied evidence is too sparse for 20 honest terms, ask one compact
batch for the most useful missing identifiers or attributes before producing
the final list. If the answer is still insufficient, the evidence rule takes
priority over the count: return the supported title and description, explain
which fact is still needed, and do not fabricate or pad a 20-term line.

## Output contract

For a Honduras audit:

1. `Qué cambiar`
2. `Título mejorado`
3. `Descripción mejorada`
4. `Etiquetas`

For a United States audit in English:

1. `What to change`
2. `Improved title`
3. `Improved description`
4. `Search terms`

For a United States request in Spanish, use the Honduras section headings while
keeping all product, currency, pickup, shipping, and vocabulary decisions in
the US market context.

New-listing and final-copy requests omit the audit section. Each item in a batch
repeats the complete language-appropriate headings. When minimum evidence is
available, search terms remain one comma-separated line containing exactly 20
distinct entries.

## Public GitHub presentation

The GitHub README and its three public image assets use the approved **Utility
Blue** direction. It should feel familiar to Facebook sellers and open-source
users: simple, practical, and trustworthy rather than futuristic or AI-branded.
This visual system does not introduce a website, application interface, skill
output styling, or additional brand surfaces.

Visual system:

- White and very light blue surfaces.
- Deep navy text and an accessible Facebook-adjacent blue accent without
  copying Facebook trademarks or interface chrome.
- Clean sans-serif typography.
- Compact cards, restrained corner radii, thin borders, and no decorative
  gradients.
- Product and before/after evidence take priority over illustrations.

The README should contain:

1. A concise hero explaining the outcome in human terms.
2. A visual before/after listing example.
3. The three-step flow: upload, review, copy.
4. Honduras and United States support.
5. A real example with title, short description, and 20 search terms.
6. Installation for Codex and Claude Code.
7. Privacy, evidence, and no-sales-guarantee boundaries.
8. Tests and contribution information.

Public assets should be limited to what materially improves comprehension:

- One README hero graphic.
- One before/after graphic.
- One 1280×640 GitHub social preview derived from the same design system.

Do not add a marketing website, animated demo, testimonials, fake metrics, or
extra branding pages.

## Credits, compatibility, and repository history

- Keep accurate Codex and Claude Code compatibility instructions.
- Remove historical `Co-Authored-By: Claude ...` trailers as requested.
- Do not remove compatibility references merely because they mention Claude.
- Treat history rewriting and force-pushing as the final release phase after the
  skill, tests, README, and assets are verified.
- Create a recoverable local backup before rewriting history.
- Publish only a verified history that excludes previously removed private shop
  data.
- Force-push only the intended repository and branch after confirming GitHub
  access and the exact remote target.

## Verification

The implementation is acceptable only when:

1. Existing structural validation passes.
2. A Honduras umbrella relist produces natural Spanish, a clear availability
   invitation, and no administrative or copywriter language.
3. A United States item supplied as a photo plus weak English copy produces
   natural US English without Honduras-specific text.
4. A United States request in Spanish preserves US market context.
5. Unsupported material, durability, performance, authenticity, measurements,
   or compatibility claims are not introduced.
6. Every final example with minimum evidence contains exactly 20 distinct,
   same-product search terms and none of the prohibited filler categories.
7. Live vocabulary validation, when available, uses a current market-relevant
   source and a second source when terminology is ambiguous, without claiming
   search volume.
8. Price remains unchanged unless research was explicitly requested; requested
   research uses market-correct comparables and currency.
9. The Honduras shop block remains verbatim where applicable and never appears
   in US output.
10. Batch, sparse-evidence, screenshot-audit, price-check, and privacy tests
    continue to pass.
11. README assets remain readable on desktop and mobile-width GitHub views and
    meet WCAG AA contrast for meaningful text.
12. The installed skill matches the verified source revision.

## Non-goals

- Building a standalone application or web service.
- Posting directly to Facebook Marketplace.
- Scraping private Facebook data.
- Predicting sales or guaranteeing messages.
- Inventing product facts to increase persuasion.
- Building keyword-volume analytics.
- Adding markets beyond Honduras and the United States in this revision.
