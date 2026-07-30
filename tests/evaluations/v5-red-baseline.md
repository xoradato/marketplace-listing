# Marketplace-listing v5 RED baseline

## Method

This baseline records 15 genuine fresh-agent runs against the unchanged v4
skill: five Honduras Spanish runs (`H1`-`H5`), five United States English runs
(`UE1`-`UE5`), and five United States Spanish runs (`US1`-`US5`). The two United
States variants received `tests/fixtures/us-desk-lamp-listing.png`.

A criterion passes only when the complete output satisfies it. For the
search-term columns, `20 same-product terms` checks that there are exactly 20
distinct entries and every entry still refers to the product or a supported
product attribute. `No filler` separately rejects price, location, pickup,
broad-need, invented-audience, and near-duplicate count padding.

## Score table

| Run | Grounded claims | Natural voice | Correct market/language | Natural CTA | 20 same-product terms | No filler | Result |
|---|---|---|---|---|---|---|---|
| H1 | Pass | Fail | Pass | Pass | Pass | Fail | RED |
| H2 | Pass | Fail | Pass | Pass | Pass | Fail | RED |
| H3 | Pass | Fail | Fail | Pass | Pass | Fail | RED |
| H4 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| H5 | Pass | Fail | Pass | Pass | Pass | Fail | RED |
| UE1 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| UE2 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| UE3 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| UE4 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| UE5 | Pass | Fail | Fail | Fail | Pass | Fail | RED |
| US1 | Fail | Fail | Fail | Fail | Fail | Fail | RED |
| US2 | Pass | Fail | Fail | Fail | Fail | Fail | RED |
| US3 | Fail | Fail | Fail | Fail | Fail | Fail | RED |
| US4 | Pass | Fail | Fail | Fail | Fail | Fail | RED |
| US5 | Pass | Fail | Fail | Fail | Pass | Fail | RED |

## Real pass counts

| Criterion | Honduras | US English | US Spanish | Total |
|---|---:|---:|---:|---:|
| Grounded claims | 5/5 | 5/5 | 3/5 | 13/15 |
| Natural voice | 0/5 | 0/5 | 0/5 | 0/15 |
| Correct market/language | 3/5 | 0/5 | 0/5 | 3/15 |
| Natural CTA | 4/5 | 0/5 | 0/5 | 4/15 |
| 20 same-product terms | 5/5 | 5/5 | 1/5 | 11/15 |
| No filler | 0/5 | 0/5 | 0/5 | 0/15 |
| Overall result | 0/5 | 0/5 | 0/5 | 0/15 |

All 15 runs returned exactly 20 comma-separated, textually distinct entries.
US1-US4 nevertheless fail the same-product criterion because at least one entry
is only fulfillment or location filler, such as `pickup Orlando`, `Orlando`, or
`recogida en Orlando`, rather than a product term.

## Quoted failure evidence

### Honduras

- All five descriptions use a mechanically factual catalog cadence. H1 begins
  `"Sombrilla plegable Alentino, nueva."` and continues as one fact per line:
  `"Modelo compacto..."`, `"Cabe..."`, `"Disponible..."`, `"Sirve..."`, and
  `"Precio: L.120."` It never turns the compact size into a naturally worded
  buying reason.
- H3 mixes administrative English labels into a Spanish audit:
  `"**Observed:** el anuncio actual no lo incluye."`
- H4 is not copy-ready Spanish because the raw output contains replacement
  characters, including `"Qu� cambiar"` and `"Escr�banos"`.
- Search-term padding is systematic. H1/H2 repeat the same attributes across
  `sombrilla` and `paraguas`; H5 permutes the same words in
  `"sombrilla plegable Alentino"`, `"sombrilla nueva Alentino"`,
  `"sombrilla compacta Alentino"`, and `"sombrilla pequeña Alentino"`.
- H3 adds prohibited price and location filler:
  `"sombrilla L.120"` and `"sombrilla Honduras"`.

### United States English

- Every run uses Honduras-only Spanish headings for an English response:
  `"Qué cambiar"`, `"Título mejorado"`, `"Descripción mejorada"`, and
  `"Etiquetas"`.
- Every description ends without an availability invitation. UE3 ends with
  `"Pickup in Orlando."`
- UE1, UE3, UE4, and UE5 add location, pickup, or price filler such as
  `"desk lamp Orlando"`, `"desk lamp pickup Orlando"`, and
  `"desk lamp $18"`.
- UE2 avoids location and price but pads the count with near-duplicate
  permutations such as `"black flexible neck desk lamp"`,
  `"black flexible desk lamp"`, and `"black flexible neck lamp"`.
- UE5 expands into unsupported need states/audiences:
  `"office desk lamp"`, `"study lamp"`, and `"bedside desk lamp"`.

### United States Spanish

- All five runs violate the request to respond completely in Spanish by mixing
  English search terms such as `"desk lamp"`, `"black desk lamp"`, and
  `"flexible desk lamp"` into the output.
- US1 changes confirmed pickup into unsupported delivery:
  `"Entrega en Orlando."` US3 similarly asks to
  `"coordinar la entrega"` even though only pickup was confirmed.
- The only CTAs are not low-pressure availability invitations. US1 says
  `"Si desea coordinar la compra"` and US3 says
  `"Si desea coordinar la entrega"`; the other three runs provide no CTA.
- US1-US4 include non-product fulfillment/location entries:
  `"pickup Orlando"`, `"Orlando"`, or `"recogida en Orlando"`.
- US5 keeps all 20 entries product-referential but still uses prohibited filler:
  `"lámpara $18"` and `"lámpara Orlando"`.

## Representative raw outputs

### Honduras representative: H3

```text
Qué cambiar

- Agregue el precio al título para que se vea desde la búsqueda. **Observed:** el anuncio actual no lo incluye.
- Pase las características a líneas cortas y deje claro que es plegable y compacta. **Observed:** esa información está en un párrafo largo.
- Indique los colores disponibles y cierre invitando a consultar disponibilidad. **Observed:** hay varios colores, pero no se pide confirmar cuál está disponible.

Título mejorado

Sombrilla plegable Alentino nueva compacta L.120

Descripción mejorada

Sombrilla plegable marca Alentino, nueva.
Modelo compacto que se dobla hasta quedar del tamaño de la mano.
Cabe en cartera, mochila o guantera del carro.
Disponible en varios colores. Sirve para lluvia y sol.
Precio: L.120.
Escríbanos para confirmar el color disponible.

Etiquetas

sombrilla plegable, sombrilla Alentino, sombrilla nueva, sombrilla compacta, sombrilla de mano, sombrilla para cartera, sombrilla para mochila, sombrilla para guantera, sombrilla para carro, sombrilla para lluvia, sombrilla para sol, sombrilla varios colores, sombrilla L.120, sombrilla Honduras, sombrilla plegable Alentino, sombrilla plegable nueva, sombrilla compacta nueva, sombrilla plegable compacta, sombrilla lluvia sol, sombrilla de colores
```

### United States English representative: UE3

```text
Qué cambiar

- Observed: Replace the current title with the product name and the flexible neck so buyers know what the item is right away.
- Observed: Remove generic phrases from the description and state the confirmed facts only.
- Observed: Keep the price and pickup location in the body so the key details are easy to find.
- Possible blocker: The current post does not mention that the lamp is new, which can lower buyer confidence.

Título mejorado

Black desk lamp with flexible neck, new

Descripción mejorada

Black desk lamp, new.
Flexible neck.
$18.
Pickup in Orlando.

Etiquetas

desk lamp, black desk lamp, new desk lamp, new black desk lamp, flexible neck desk lamp, black flexible neck desk lamp, desk light, black desk light, new desk light, flexible neck lamp, black lamp, new lamp, desk lamp Orlando, black desk lamp Orlando, new desk lamp Orlando, flexible neck desk lamp Orlando, desk lamp pickup Orlando, black desk lamp pickup, desk lamp $18, black desk lamp $18
```

### United States Spanish representative: US1

```text
Qué cambiar

- Cambie el título en inglés y cortado por uno que diga claramente qué se vende. Observed.
- Quite frases generales no comprobadas y deje solo estado, color, precio y entrega. Observed.
- Agregue desde el inicio que es nueva, negra, con cuello flexible y que la entrega es en Orlando. Buyer confidence.

Título mejorado

Lámpara de escritorio negra nueva con cuello flexible

Descripción mejorada

Lámpara de escritorio negra, nueva.
Con cuello flexible.
Precio: $18.
Entrega en Orlando.
Si desea coordinar la compra, escríbame con gusto.

Etiquetas

lámpara de escritorio, lampara de escritorio, lámpara negra, lampara negra, lámpara nueva, lampara nueva, lámpara con cuello flexible, lampara con cuello flexible, cuello flexible, lámpara de mesa, lampara de mesa, desk lamp, black desk lamp, flexible desk lamp, lámpara escritorio negra, lampara escritorio negra, lámpara escritorio nueva, lámpara negra Orlando, pickup Orlando, Orlando
```

## RED summary

The pre-change behavioral contract is RED in all 15 runs, but not because every
dimension failed. Grounding remained strong in 13/15 runs and every run reached
20 distinct entries. The recurring failures are natural voice (0/15), filler
control (0/15), market/language routing (3/15), and availability CTAs (4/15).

The evidence confirms these acceptance criteria are RED:

1. Honduras output is not yet consistently natural, fully Spanish, copy-ready,
   and free of count padding.
2. United States English output does not use English headings or a natural
   availability invitation.
3. United States Spanish output does not stay completely Spanish and sometimes
   converts pickup into unsupported delivery.
4. Search terms do not yet exclude price, location, pickup, broad need-state,
   and near-duplicate filler.
