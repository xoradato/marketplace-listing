# Marketplace Listing v4 Design

## Objective

Upgrade `marketplace-listing` so an agent can inspect screenshots or photos of
Facebook Marketplace listings from Honduras, explain what should change, and
produce a clean replacement listing that sounds human, applies practical
marketing principles, and never presents an inference as a product fact.

## Primary use cases

The skill must handle:

1. Creating a new listing from item photos and a few facts.
2. Auditing screenshots of an existing listing and explaining what to improve.
3. Rewriting an unsold listing without assuming that copy was the only problem.
4. Processing several listings in one request, completing each item before
   moving to the next.
5. Evaluating price only when the user explicitly asks for price research.

## Input contract

Accept any combination of:

- Screenshots showing the existing title, description, price, category, photos,
  age, views, saves, or messages.
- Original item photos.
- The current listing text.
- Item facts supplied directly by the user.
- The local shop profile in `datos-tienda.md`.

Read visible information before asking questions. Ask once, in one compact
batch, only when a missing fact prevents a trustworthy listing. Continue without
blocking when the missing information is optional.

## Evidence model

Classify candidate statements internally:

- **Confirmed:** stated by the user or clearly readable in a label, package,
  screenshot, or supplied document.
- **Visible:** directly observable in the image without requiring a quality,
  material, performance, or authenticity judgment.
- **Unknown:** not supplied and not safely observable.

Only confirmed or visible facts may appear as product claims. Treat material,
durability, comfort, authenticity, hidden condition, measurements, performance,
compatibility, and product history as unknown unless supported by evidence.

Marketing language must not upgrade an unknown fact into a claim. When a useful
fact is missing, omit it or ask for it; never replace it with a plausible detail.

## Audit mode

When the user provides an existing listing or says it did not sell, inspect:

1. **Search clarity:** whether the title identifies the product using likely
   buyer language and includes only useful attributes.
2. **First impression:** whether the visible cover image and title make the item
   understandable at a glance.
3. **Buyer confidence:** whether condition, size, model, included accessories,
   delivery, payment, or other relevant facts are missing or unclear.
4. **Readability:** whether the description is repetitive, generic, crowded,
   overly promotional, or machine-like.
5. **Conversion friction:** whether a buyer must ask avoidable questions before
   deciding whether the item fits their need.
6. **Possible non-copy blockers:** price, photo quality, category, location, or
   low demand. Describe these as possibilities unless evidence supports a firm
   conclusion.

Do not claim to know why a listing failed from a screenshot alone. Phrase the
audit as observable changes and prioritized recommendations.

## Output contract

For each item, return these sections in order:

1. `Qué cambiar`
   - Two to five concise, actionable bullets.
   - Lead with the highest-impact visible issue.
   - Distinguish confirmed problems from possible blockers.
2. `Título mejorado`
   - One copy-ready title.
3. `Descripción mejorada`
   - One copy-ready description.
   - Include the approved shop-profile block verbatim when available.
4. `Etiquetas`
   - Exactly 20 relevant search terms.
   - One comma-separated line with no numbering, hashtags, duplicates, or
     cleanup required.

If the user explicitly asks only for the final listing, omit the audit and
return only the copy-ready title, description, and tags.

## Language and voice

Write for a broad Honduran audience:

- Plain, neutral Spanish.
- Cordial shop register using `usted`.
- No voseo and no forced Honduran slang.
- Short, scannable lines with natural variation.
- Concrete nouns and facts instead of decorative adjectives.
- No emoji storms, fake urgency, excessive punctuation, all-caps promotion, or
  unsupported superlatives.
- No copywriter formulas such as `ideal para cualquier ocasión`, `cuenta con`,
  `brinda`, `ofrece`, `ya sea para`, or stacked adjective pairs.

The test for every sentence is: would a trustworthy Honduran seller naturally
type this on their phone, and could the buyer verify the product claim?

## Marketing principles

Apply marketing through information quality rather than hype:

1. Identify the item immediately.
2. Front-load the most useful buyer search terms.
3. State condition and decision-relevant details clearly.
4. Reduce avoidable questions and uncertainty.
5. Present one meaningful, evidence-backed reason to consider the item when one
   exists; do not force a selling line when evidence is insufficient.
6. Make delivery, payment, and contact expectations easy to understand.
7. Keep the call to action low-pressure and consistent with the shop profile.

## Pricing

Preserve the displayed or supplied price unless the user asks for an evaluation.
When price research is requested:

- Use recent, comparable Honduran listings or local stores.
- Match product, model, condition, and included accessories as closely as
  possible.
- Present evidence and distinguish asking prices from confirmed sale prices.
- Give a range and a recommendation in lempiras.
- Never declare a price fair merely because it was supplied.

During a normal audit, price may be named as a possible blocker but must not be
changed or judged without comparable evidence.

## Search terms

Generate the 20 terms from the confirmed product identity, useful attributes,
synonyms, regional vocabulary, buyer intent, and compatible use cases supported
by the facts. Do not fabricate use cases, locations, brands, sizes, models, or
audiences.

Do not make unsupported claims about Facebook's indexing implementation. Treat
the tags as user-requested search terms ready for the field or workflow where
the user pastes them.

## Shop profile and privacy

Read `datos-tienda.md` when present. Reuse the approved delivery, payment, and
closing block verbatim. Do not expose a phone number in public copy when the
profile says to direct buyers to messages.

If the profile is missing, use the supplied listing facts. Do not create or
persist personal business data unless the user requests it and the environment
permits the write.

## Scope

The skill does not:

- Generate replacement product photos.
- Invent product details to make the listing more persuasive.
- Guarantee that a listing will sell.
- Treat copy as the only possible reason an item did not sell.
- Automatically conduct price research for every item.
- Give operational advice about deleting, renewing, or relisting without
  checking current platform behavior when that advice is requested.

## Skill package structure

- `SKILL.md`: concise routing, workflow, evidence rules, output contract, and
  quality gate.
- `references/voice-and-marketing.md`: detailed language patterns, marketing
  principles, and one grounded example.
- `references/audit-checklist.md`: screenshot audit dimensions and confidence
  wording.
- `datos-tienda.example.md`: generic local profile template without personal
  data.
- `agents/openai.yaml`: Codex-facing display metadata.
- `tests/`: deterministic structural checks and behavioral test fixtures that
  do not contain private shop data.

`datos-tienda.md` remains local and gitignored.

## Verification criteria

The revision is acceptable only when:

1. Frontmatter and package structure validate.
2. A screenshot-audit scenario produces actionable feedback plus a complete
   rewrite.
3. A sparse-input scenario does not invent material, performance, comfort, or
   condition claims.
4. A deliberately machine-like source listing is rewritten without banned
   formulas or hype.
5. A batch request returns every item with the complete output contract.
6. Every output fixture contains exactly 20 distinct comma-separated tags.
7. Price is preserved unless research was requested.
8. The approved shop block remains verbatim.
9. Personal `datos-tienda.md` content does not enter tracked files.
10. The installed copy matches the verified source revision.
