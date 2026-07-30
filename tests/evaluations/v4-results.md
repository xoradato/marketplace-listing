# Marketplace-listing v4 results

## Evidence history

The first genuine v4 round used the unchanged scenarios against the installed
staged v4 skill.

- Sparse evidence: 2/5 passed; runs 3, 4, and 5 omitted the complete approved
  public shop block. Claims, language, sections, and 20 distinct tags passed in
  all five.
- Text-only audit: core checks passed, but final review found the advice “Añada precio” ambiguous because the price was already visible. It was superseded by the image audit below.
- Batch: grounded claims, prices L.300/L.180, no price research, no invented USB
  brand or speed, and 20 tags per item all passed. It failed because both items
  used `Título` and `Descripción` instead of the exact required section names.

After the first wording fix, the audit and batch passed. Sparse evidence improved
to 4/5, but one fresh run still omitted the shop block. A second, output-level
recipe was added. Five further fresh sparse runs then passed.

## Final manual score table

| Run | Claims grounded | Natural language | Correct sections | 20 unique tags | Price preserved | Result |
|---|---|---|---|---|---|---|
| Sparse final 1 | Yes | Yes | Yes | Yes | N/A | PASS |
| Sparse final 2 | Yes | Yes | Yes | Yes | N/A | PASS |
| Sparse final 3 | Yes | Yes | Yes | Yes | N/A | PASS |
| Sparse final 4 | Yes | Yes | Yes | Yes | N/A | PASS |
| Sparse final 5 | Yes | Yes | Yes | Yes | N/A | PASS |
| Screenshot audit | Yes | Yes | Yes | Yes | Yes — L.450 | PASS |
| Batch item 1 | Yes | Yes | Yes | Yes | Yes — L.300 | PASS |
| Batch item 2 | Yes | Yes | Yes | Yes | Yes — L.180 | PASS |

Every accepted description included the complete approved public shop block
verbatim. No private or non-public profile data was included.

## Accepted raw outputs

### Sparse final 1

**Título mejorado**

Vestido azul nuevo talla M y L

**Descripción mejorada**

Vestido azul, nuevo.  
Disponible en tallas M y L. Escríbanos para consultar precio y confirmar disponibilidad.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

**Etiquetas**

vestido, vestido azul, vestido nuevo, vestido talla M, vestido talla L, vestido azul nuevo, vestido azul M, vestido azul L, vestido nuevo M, vestido nuevo L, vestido azul nuevo M, vestido azul nuevo L, vestido M y L, vestido azul M y L, vestido nuevo M y L, vestido azul nuevo M y L, vestido Honduras, vestido azul Honduras, vestido nuevo Honduras, vestido azul nuevo Honduras

### Sparse final 2

**Título mejorado**

Vestido azul nuevo en tallas M y L

**Descripción mejorada**

Vestido azul nuevo, disponible en tallas M y L.

Escríbanos para consultar el precio y solicitar la talla que necesita.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

**Etiquetas**

vestido, vestido azul, vestido nuevo, vestido talla M, vestido talla L, vestido azul nuevo, vestido azul M, vestido azul L, vestido nuevo M, vestido nuevo L, vestido azul nuevo M, vestido azul nuevo L, vestido M y L, vestido azul M y L, vestido nuevo M y L, vestido azul nuevo M y L, vestido Honduras, vestido azul Honduras, vestido nuevo Honduras, vestido azul nuevo Honduras

### Sparse final 3

**Título mejorado**

Vestido azul nuevo talla M y L

**Descripción mejorada**

Vestido azul nuevo.  
Disponible en tallas M y L.

Escríbanos por mensaje para consultar el precio y confirmar disponibilidad de su talla.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

**Etiquetas**

vestido, vestido azul, vestido nuevo, vestido talla M, vestido talla L, vestido azul nuevo, vestido azul M, vestido azul L, vestido nuevo M, vestido nuevo L, vestido azul nuevo M, vestido azul nuevo L, vestido M y L, vestido azul M y L, vestido nuevo M y L, vestido azul nuevo M y L, vestido Honduras, vestido azul Honduras, vestido nuevo Honduras, vestido azul nuevo Honduras

### Sparse final 4

### Título mejorado

Vestido azul nuevo talla M y L

### Descripción mejorada

Vestido azul, nuevo.  
Disponible en tallas M y L.  
Escríbanos para consultar el precio y pedir su talla.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

### Etiquetas

vestido, vestido azul, vestido nuevo, vestido talla M, vestido talla L, vestido azul nuevo, vestido azul M, vestido azul L, vestido nuevo M, vestido nuevo L, vestido azul nuevo M, vestido azul nuevo L, vestido M y L, vestido azul M y L, vestido nuevo M y L, vestido azul nuevo M y L, vestido Honduras, vestido azul Honduras, vestido nuevo Honduras, vestido azul nuevo Honduras

### Sparse final 5

Título mejorado

Vestido azul nuevo talla M y L

Descripción mejorada

Vestido azul, nuevo.  
Disponible en tallas M y L.  
Escríbanos para confirmar disponibilidad y precio.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

Etiquetas

vestido, vestido azul, vestido nuevo, vestido talla M, vestido talla L, vestido azul nuevo, vestido azul M, vestido azul L, vestido nuevo M, vestido nuevo L, vestido azul nuevo M, vestido azul nuevo L, vestido M y L, vestido azul M y L, vestido nuevo M y L, vestido azul nuevo M y L, vestido Honduras, vestido azul Honduras, vestido nuevo Honduras, vestido azul nuevo Honduras

### Screenshot audit

Fixture: `tests/fixtures/unsold-listing-audit.png`. The agent received the image,
not a text transcription. It correctly treated the old listing copy as
unverified, retained only the visually supported blue-dress identity, preserved
L.450, omitted comfort, occasion, and imported-cotton claims, included the
approved public shop block, and produced 20 distinct tags.

**Qué cambiar**

- Sustituya la ilustración por una foto real y bien iluminada del vestido; agregue imágenes del frente, espalda y etiqueta.
- Cambie el título genérico por uno que identifique el producto y su color sin adjetivos promocionales.
- Confirme antes de publicar el estado, las tallas y el material. La publicación anterior menciona “nuevo”, “M y L” y “algodón 100% importado”, pero la captura no permite verificarlos.
- Conserve el precio de L. 450; no se investigó ni comparó.

**Título mejorado**

Vestido azul | L. 450

**Descripción mejorada**

Vestido azul.

Precio: L. 450.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

**Etiquetas**

vestido, vestido azul, vestido en venta, vestido azul en venta, comprar vestido, comprar vestido azul, venta de vestido, venta de vestido azul, ropa, ropa azul, ropa en venta, prenda, prenda azul, vestido Tegucigalpa, vestido azul Tegucigalpa, ropa Tegucigalpa, vestido Honduras, vestido azul Honduras, ropa Honduras, vestido 450 lempiras

### Batch
## Artículo 1: polo negra para hombre

### Qué cambiar

- Ponga color, condición y tallas en el título.
- Use como portada una foto completa de la polo y agregue un acercamiento de la etiqueta.
- Muestre el precio al inicio de la descripción.
- Incluya las opciones de entrega y pago.

### Título mejorado

Polo negra para hombre nueva con etiqueta, tallas M y L

### Descripción mejorada

Polo negra para hombre, nueva y con etiqueta visible.  
Disponible en tallas M y L.  
Precio: L.300.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

### Etiquetas

polo hombre, camisa polo hombre, polo negra, camisa polo negra, polo nueva, polo con etiqueta, camisa polo con etiqueta, polo talla M, polo talla L, camisa polo talla M, camisa polo talla L, polo negra M, polo negra L, camisa polo negra M, camisa polo negra L, polo M y L, camisa polo M y L, polo negra nueva, camisa polo negra nueva, polo nueva con etiqueta

## Artículo 2: memoria USB de 128 GB

### Qué cambiar

- Identifique el producto como memoria USB de 128 GB desde el título.
- Use una portada donde se distingan claramente la capacidad y el empaque sellado.
- No mencione marca ni velocidad de transferencia hasta poder confirmarlas.
- Coloque el precio y las opciones de entrega en la descripción.

### Título mejorado

Memoria USB de 128 GB en empaque sellado

### Descripción mejorada

Memoria USB con capacidad de 128 GB.  
Empaque sellado.  
Precio: L.180.

Envío en Tegucigalpa por L.70, con entrega gratis en la UNAH y Plaza Miraflores. Aceptamos efectivo y transferencia.  
Envíos al resto del país con costo según la zona; para envíos nacionales el pago es por transferencia.  
Escríbanos por mensaje para más información o cualquier consulta. Con gusto le atendemos.

### Etiquetas

memoria USB, memoria USB 128 GB, USB 128 GB, flash drive, flash drive 128 GB, pendrive, pendrive 128 GB, unidad USB, unidad USB 128 GB, memoria flash, memoria flash 128 GB, memoria USB sellada, USB sellada, flash drive sellado, pendrive sellado, memoria 128 GB, almacenamiento USB, almacenamiento USB 128 GB, memoria USB en empaque, memoria USB sellada 128 GB

## Additional mode tests

### Explicit price research

Scenario: `tests/scenarios/price-check.md`.

Result: PASS. The agent researched only because the prompt explicitly requested
it. It found an exact local-store asking price for the SanDisk Ultra Flair 128
GB, separated exact-model and weaker competitor comparables, identified sold-out
references as weaker evidence, stated that no verifiable completed-sale records
were found, and returned an HNL range plus a recommendation. Source pages were
independently opened after the run; the exact SYCOM listing and the cited local
competitor prices were present. No unsupported confirmed-sale price was claimed.
## Deterministic validation

`node tests/validate-skill.mjs`

Result: `PASS marketplace-listing skill validation`.
