---
name: marketplace-listing
description: Use when creating, auditing, renewing, or rewriting Marketplace and classified listings for buyers in Honduras or the United States, especially from item photos, screenshots of unsold posts, raw product details, or requests to improve titles, descriptions, search terms, buyer trust, or local pricing.
---

# Marketplace Listing Honduras and United States

Use the user's photos, screenshots, text, and supplied facts to create a clear,
trustworthy listing for the selected market. Read `datos-tienda.md` when
present. If it contains a complete approved public Honduras shop block, include
that block verbatim in every Honduras description; this is mandatory. Never
expose private or non-public profile data outside the approved public block.

## Select market and language

- Honduras: neutral Spanish with `usted`; preserve HNL, local delivery, and the
  approved Honduras shop block.
- United States: natural US English by default; preserve USD, pickup, shipping,
  and payment facts. If Spanish is requested, write the entire response in
  Spanish while keeping US context.
- Infer the market only from explicit or clear evidence. When ambiguity changes
  language, currency, delivery, or research, ask once: `¿Honduras o Estados
  Unidos?`
- Never paste a Honduras shop block into United States output.

## Choose the mode

- New listing: create from photos and confirmed facts.
- Audit/relist: inspect the existing post, explain visible improvements, then
  provide the replacement.
- Final copy only: omit analysis when the user asks only for copy-ready text.
- Price check: research only when explicitly requested.

## Evidence gate

Classify every candidate product claim as:

- confirmed: stated by the user as a current product fact outside old copy.
- visible: directly observable without a quality or performance judgment.
- unknown: everything else.

Use confirmed and visible claims. Omit or ask about unknown claims. Treat
material, durability, comfort, authenticity, hidden condition, measurements,
performance, compatibility, product history, and intended use as unknown unless
evidence supports them.

Existing listing copy is evidence of what the old post says, not confirmation
that its claims are true. During audits, carry a claim forward only when the
user confirms it separately or it is directly visible without inference. Treat
all other claims from the old title or description as unknown.

## Workflow

1. Read visible information before asking questions.
2. Ask once, in one compact batch, only for facts needed for a trustworthy
   listing; continue without blocking on optional details.
3. Preserve the displayed or supplied price unless price research was requested.
4. For an audit, describe observable changes and possible blockers without
   claiming to know why a listing failed.
5. For batches, finish every section for one item before starting the next.

## Output

Honduras or Spanish US output:
1. `Qué cambiar`
2. `Título mejorado`
3. `Descripción mejorada`
4. `Etiquetas`

English US output:
1. `What to change`
2. `Improved title`
3. `Improved description`
4. `Search terms`

For each audited item, return the four sections above using the heading set
that matches the market and language.
For new listings, return sections 2–4.
For final-copy-only requests, return sections 2–4.
For batches, complete all required sections for one item before the next. Repeat
the exact required section names for every item; do not shorten or rename them.

Before generating `Etiquetas` or `Search terms`, if `datos-tienda.md` contains
a complete approved public Honduras shop block and the selected market is
Honduras, paste the entire block unchanged after the product copy. Do not send
the response until every item's description contains that block. Never insert
that block into United States output.

Build the title from the product identity and useful, supported attributes.

Write the product copy as four to seven short, naturally varied lines when the
facts support them:
1. Name the product, condition, and strongest confirmed differentiator.
2. Give one concrete, evidence-backed reason to consider it.
3. Add decision details such as model, size, included items, color, price,
   pickup, delivery, shipping, or payment when known.
4. End with a low-pressure availability invitation.

Do not force a line when evidence is missing. Customer-facing copy must not use
audit language such as `no hay evidencia`, `principal ventaja`, or `posible
bloqueador`. If the facts are sparse, keep only the supported lines.

## Search-term grounding

Generate exactly 20 distinct terms only when minimum evidence supports them.
Generate terms only for this same product, in this order:
1. Direct product name and real market synonyms.
2. Confirmed brand, model, condition, size, color, material, or useful feature.
3. Natural current combinations buyers use for the same product.

When browsing is available, perform one lightweight current vocabulary check.
Use a second market-relevant source only when terminology is unfamiliar,
ambiguous, or market-dependent. Sources validate wording, never product claims.
Never claim Facebook search-volume or ranking access.
If the runtime requires citations, place a brief vocabulary-source note after
the clean copy-ready search-term line.

Exclude complementary products, broad need states, buy/price/location filler,
invented audiences, unsupported compatibility, and near-duplicates added only
to reach 20. If minimum evidence is still missing after one compact question,
evidence takes priority: return supported copy, name the needed fact, and do
not pad the term list.

## Price check

Research price only when explicitly requested. Use recent Honduras comparables
and HNL for Honduras; use recent US comparables and USD for the United States.
Match product, model, condition, and included items, and distinguish asking
prices from verified completed sales. Preserve the supplied price otherwise.

## Voice and marketing

Use the guidance in `references/voice-and-marketing.md`. Write in a cordial,
plain Honduran register with `usted` for Honduras, and in natural plain US
English for United States output unless Spanish was requested. Use facts and
information quality rather than hype. Avoid decorative adjectives, fake
urgency, emoji storms, excessive punctuation, unsupported superlatives, and
machine-language patterns.

## Audit checklist

Use `references/audit-checklist.md` for screenshot audits. Cover search clarity,
first impression, buyer confidence, readability, conversion friction, and
possible non-copy blockers. Say what to change and what is unclear; label the
evidence instead of claiming a proven cause.

## Final quality gate

Before responding, silently reread and verify:

- Every claim has confirmed or visible support.
- The title identifies the product without hype.
- The body uses four to seven short, naturally varied lines when the facts
  support them and never forces unsupported filler.
- Customer-facing copy contains no audit language such as `no hay evidencia`,
  `principal ventaja`, or `posible bloqueador`.
- Price is unchanged unless research was requested.
- When `datos-tienda.md` has a complete approved public Honduras shop block,
  every Honduras description includes it verbatim; no private or non-public
  profile data appears; United States output never includes it.
- Every batch item repeats the exact required section names without shortening
  or renaming them.
- Tag count is exactly 20 with no duplicates when minimum evidence supports it;
  otherwise the missing fact is named and the term list is not padded.
- No banned machine-language pattern from the voice reference remains.
