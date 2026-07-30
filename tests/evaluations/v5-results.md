# Marketplace-listing v5 green-run consolidation

Date: 2026-07-30

## Method

This file consolidates the 15 completed Task 3 green runs only:

- Honduras Spanish: `green-H1.md`-`green-H5.md`
- US English: `green-UE1.md`-`green-UE5.md`
- US Spanish: `green-US1.md`-`green-US5.md`

Scoring uses the same columns as `tests/evaluations/v5-red-baseline.md`.

No new test, evaluator, retry, regression scenario, validator, or skill rewrite
was run for this consolidation. The user explicitly waived extra retry and
regression rounds, so this document records only the evidence already present in
those 15 files.

All 15 completed runs still returned exactly 20 comma-separated search terms.

## Score table

| Run | Grounded claims | Natural voice | Correct market/language | Natural CTA | 20 same-product terms | No filler | Result |
|---|---|---|---|---|---|---|---|
| H1 | Pass | Pass | Pass | Pass | Pass | Fail | RED |
| H2 | Pass | Pass | Pass | Pass | Pass | Fail | RED |
| H3 | Pass | Pass | Pass | Pass | Pass | Fail | RED |
| H4 | Pass | Pass | Pass | Pass | Pass | Fail | RED |
| H5 | Pass | Pass | Pass | Pass | Pass | Fail | RED |
| UE1 | Pass | Pass | Pass | Pass | Pass | Pass | GREEN |
| UE2 | Pass | Pass | Pass | Pass | Fail | Fail | RED |
| UE3 | Pass | Pass | Pass | Pass | Fail | Fail | RED |
| UE4 | Pass | Pass | Pass | Pass | Fail | Fail | RED |
| UE5 | Pass | Pass | Pass | Pass | Fail | Fail | RED |
| US1 | Pass | Pass | Fail | Pass | Fail | Fail | RED |
| US2 | Pass | Pass | Fail | Pass | Fail | Fail | RED |
| US3 | Pass | Pass | Pass | Pass | Fail | Fail | RED |
| US4 | Pass | Pass | Fail | Pass | Fail | Fail | RED |
| US5 | Pass | Pass | Fail | Pass | Fail | Fail | RED |

## Real pass counts

| Criterion | Honduras | US English | US Spanish | Total |
|---|---:|---:|---:|---:|
| Grounded claims | 5/5 | 5/5 | 5/5 | 15/15 |
| Natural voice | 5/5 | 5/5 | 5/5 | 15/15 |
| Correct market/language | 5/5 | 5/5 | 1/5 | 11/15 |
| Natural CTA | 5/5 | 5/5 | 5/5 | 15/15 |
| 20 same-product terms | 5/5 | 1/5 | 0/5 | 6/15 |
| No filler | 0/5 | 1/5 | 0/5 | 1/15 |
| Overall result | 0/5 | 1/5 | 0/5 | 1/15 |

## Comparison to RED baseline

| Variant | RED pass rate | GREEN pass rate |
|---|---:|---:|
| Honduras Spanish | 0/5 | 0/5 |
| US English | 0/5 | 1/5 |
| US Spanish | 0/5 | 0/5 |

## Why runs still fail

### Honduras

The Honduras runs improved materially on voice, market fit, and CTA, but all
five still pad the 20-term list by restating the same attributes across
`sombrilla` and `paraguas`. Representative examples:

- H1: `sombrilla plegable`, `paraguas plegable`, `sombrilla nueva`,
  `paraguas nuevo`, `sombrilla compacta`, `paraguas compacto`
- H2: `sombrilla de bolsillo`, `paraguas de bolsillo`, `mini sombrilla plegable`,
  `mini paraguas plegable`
- H4: `sombrilla para cartera`, `paraguas para cartera`, `sombrilla para mochila`,
  `paraguas para mochila`

That keeps the terms on-product, so `20 same-product terms` passes, but it does
not satisfy the no-filler/no-padding bar.

### US English

All five US English runs fixed the headings, preserved `$18` plus Orlando
pickup, and used a low-pressure availability CTA. Only UE1 stays clean enough
on the term list to score full GREEN. The other four still widen into audience,
need-state, or unsupported product variants:

- UE2: `student lamp`
- UE3: `work lamp`, `reading lamp`, `study lamp`, `office desk lamp`,
  `home office lamp`, `modern desk lamp`, `minimal desk lamp`
- UE4: `architect desk lamp`, `swing arm desk lamp`
- UE5: `reading lamp`, `study lamp`, `office desk lamp`, `black reading lamp`

### US Spanish

The US Spanish runs improved on preserving `$18`, Orlando pickup, and the
availability CTA, but the term lists remain the weak point.

- US1, US2, US4, and US5 still mix English search terms into a Spanish-market
  output, such as `desk lamp`, `black desk lamp`, `task lamp`, and
  `office desk lamp`.
- US3 keeps the full output in Spanish, but the list still broadens into terms
  that are too generic or not natural enough for the requested US-Spanish
  marketplace context, including `flexo`, `lámpara moderna de escritorio`,
  `lámpara para oficina`, and `lámpara de trabajo`.

## Representative outputs from the completed runs

### Honduras representative near-pass: H2

Title: `Sombrilla plegable Alentino nueva, compacta, varios colores`

Description excerpt:

> Sombrilla plegable Alentino, nueva.
> Este modelo compacto se dobla hasta quedar del tamaño de la mano.
> Precio: L.120.
> Escríbanos para confirmar qué colores están disponibles.

Residual issue: the tag list still reaches 20 by synonym stacking rather than
by 20 genuinely distinct product-led terms.

### US English accepted run: UE1

Title: `New Black Desk Lamp with Flexible Neck`

Description excerpt:

> New black desk lamp with a flexible neck.
> The flexible neck makes it easy to aim the light where you need it.
> $18.
> Pickup in Orlando.
> Send a message to confirm it is still available.

Why it passed: English headings, grounded lamp facts, preserved `$18` and
Orlando pickup, natural CTA, and a 20-term list without price/location filler
or unsupported lamp types.

### US Spanish representative near-pass: US3

Title: `Lámpara de escritorio negra nueva con cuello flexible`

Description excerpt:

> Lámpara de escritorio negra nueva.
> Cuello flexible para ajustar la dirección de la luz.
> Precio: $18.
> Recogida en Orlando.
> Envíeme un mensaje para confirmar si sigue disponible.

Residual issue: the main copy is in Spanish and preserves the US context, but
the term list still drifts into broader or less-natural marketplace phrasing
instead of staying tight on 20 natural US-Spanish product terms.

## Vocabulary sources observed

No vocabulary-source appendix or researched source list was included in these
15 completed green runs, so there are no source citations to consolidate here.

## Consolidated conclusion

These 15 completed green runs show meaningful improvement over the RED baseline,
especially in voice, CTA quality, and US-English routing. They do not support a
claim of full behavioral GREEN:

- Honduras remains blocked by synonym-stacked tag padding in all 5 runs.
- US English reaches 1/5 overall, with UE1 as the only full pass.
- US Spanish remains blocked by language drift or overly broad search terms in
  all 5 runs.

Extra retry and regression rounds were explicitly waived by the user, so this
file stops at accurate consolidation of the completed evidence.
