# Marketplace Listing v5 Natural Multimarket Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Release a compact Marketplace listing skill that turns photos, screenshots, and existing copy into natural, evidence-grounded listings for Honduras and the United States, then present and publish it with a restrained Utility Blue GitHub README.

**Architecture:** Keep behavior in `SKILL.md` with focused language and audit references; use Markdown scenarios plus a Node core-only validator for deterministic checks and fresh-agent evaluations for behavioral checks. Keep visual design confined to three README assets, publish a clean one-root Git history, and copy the verified tracked files into the active installation without touching its ignored private profile.

**Tech Stack:** Markdown skill package, YAML metadata, Node.js core modules, SVG, PNG, Git, GitHub.

## Global Constraints

- The package remains a skill, not an application, website, account system, or Marketplace integration.
- Honduras output uses natural neutral Spanish and `usted`; United States output uses natural US English unless Spanish is requested.
- Existing prices are preserved unless price research is explicitly requested; research uses the selected market and currency.
- Product claims must be confirmed or directly visible; unsupported material, durability, performance, authenticity, measurements, compatibility, and history are omitted.
- Descriptions normally contain four to seven short product-copy lines and end with a low-pressure availability invitation when evidence permits.
- Search terms describe only the same product: direct names, real synonyms, confirmed attributes, and current natural combinations.
- Exactly 20 distinct search terms are returned only when minimum evidence supports them; evidence takes priority over count.
- Available browsing performs one lightweight current vocabulary check and a second check only when terminology is ambiguous or market-dependent.
- The Honduras approved shop block remains verbatim; it never appears in United States output.
- Utility Blue styling is restricted to the README hero, before/after graphic, and 1280×640 social preview.
- Claude Code compatibility remains documented; only historical `Co-Authored-By: Claude ...` trailers are removed.
- No private profile data, visual-companion files, fake metrics, testimonials, or sales guarantees enter the public tree.

---

## File Map

- `SKILL.md`: routing, market selection, evidence gate, output contract, pricing, tag workflow, and final quality gate.
- `references/voice-and-marketing.md`: positive Spanish/English voice recipes, natural CTA patterns, and prohibited robotic language.
- `references/audit-checklist.md`: direct screenshot-audit language and market-aware checks.
- `tests/validate-skill.mjs`: deterministic package, contract, privacy, metadata, and visual-asset checks.
- `tests/scenarios/natural-honduras-relist.md`: Alentino umbrella regression scenario.
- `tests/scenarios/us-english-relist.md`: United States English regression scenario.
- `tests/scenarios/us-spanish-relist.md`: United States Spanish regression scenario.
- `tests/scenarios/search-terms-grounding.md`: same-product vocabulary and no-filler regression scenario.
- `tests/fixtures/us-desk-lamp-listing.png`: generic US image-plus-copy fixture without personal data.
- `tests/evaluations/v5-red-baseline.md`: pre-change fresh-agent failure evidence.
- `tests/evaluations/v5-results.md`: post-change repeated behavioral results.
- `README.md`: public product-first explanation, workflow, examples, installation, limits, and tests.
- `INSTALL.md`: two-market usage and installation instructions.
- `agents/openai.yaml`: neutral multimarket display metadata.
- `assets/readme-hero.svg`: Utility Blue README hero.
- `assets/before-after.svg`: generic umbrella before/after comparison.
- `assets/social-preview.png`: 1280×640 GitHub social preview.

---

### Task 1: Capture the v5 RED Contract and Behavioral Baseline

**Files:**
- Create: `tests/scenarios/natural-honduras-relist.md`
- Create: `tests/scenarios/us-english-relist.md`
- Create: `tests/scenarios/us-spanish-relist.md`
- Create: `tests/scenarios/search-terms-grounding.md`
- Create: `tests/fixtures/us-desk-lamp-listing.png`
- Create: `tests/evaluations/v5-red-baseline.md`
- Modify: `tests/validate-skill.mjs:13-99`

**Interfaces:**
- Consumes: current v4 worktree skill and the approved v5 specification.
- Produces: deterministic v5 contract failures and four reusable behavioral prompts.

- [ ] **Step 1: Create the generic United States image fixture**

Render a 1200×800 PNG from temporary untracked HTML. The image must show a
simple black desk-lamp silhouette and this weak listing text:

```text
Amazing lamp must have
$18
Perfect for any room. High quality and super useful.
Pickup in Orlando
```

Save it as `tests/fixtures/us-desk-lamp-listing.png`. Do not include a seller
name, avatar, phone number, Facebook logo, or real account interface.

- [ ] **Step 2: Add the four exact regression scenarios**

```markdown
# tests/scenarios/natural-honduras-relist.md
Use the marketplace-listing skill from this worktree.
Market: Honduras.

The current unsold listing says:
"Sombrilla plegable marca Alentino, nueva. El modelo pequeño se dobla y queda
del tamaño de la mano. Cabe en la cartera, la mochila o la guantera del carro.
Viene en varios colores. Sirve para el agua y para el sol."

Confirmed facts: Alentino brand, new condition, compact model folds to hand
size, fits a purse/backpack/glovebox, several colors, rain and sun use, L.120.
Audit it and return natural copy that invites an availability question plus
exactly 20 grounded same-product search terms.
```

```markdown
# tests/scenarios/us-english-relist.md
Use the marketplace-listing skill from this worktree.
Market: United States. Respond in English.
Attached fixture: `tests/fixtures/us-desk-lamp-listing.png`.

The product photo and current post show a black desk lamp. The seller confirms
it is new, has a flexible neck, costs $18, and is available for pickup in
Orlando. Current title: "Amazing lamp must have". Current description:
"Perfect for any room. High quality and super useful."

Audit the post and return the improved listing with exactly 20 grounded
same-product search terms. Do not add shipping, bulb type, material, dimensions,
brightness, or compatibility.
```

```markdown
# tests/scenarios/us-spanish-relist.md
Use the marketplace-listing skill from this worktree.
Mercado: Estados Unidos. Responda completamente en español.
Captura adjunta: `tests/fixtures/us-desk-lamp-listing.png`.

La foto y el anuncio muestran una lámpara de escritorio negra. El vendedor
confirma que es nueva, tiene cuello flexible, cuesta $18 y se recoge en Orlando.
Mejore la publicación y entregue exactamente 20 términos de búsqueda del mismo
producto. No agregue envío, tipo de bombillo, material, medidas, potencia ni
compatibilidad.
```

```markdown
# tests/scenarios/search-terms-grounding.md
Use the marketplace-listing skill from this worktree.
Market: Honduras.

Confirmed product facts: Alentino compact folding umbrella, new, several
colors, rain and sun use, L.120. Produce final copy and exactly 20 search terms.
Validate current product vocabulary when a search tool is available.

Reject unrelated complementary products, broad need states, buy/price/location
filler, invented audiences, and unsupported features. Do not claim access to
Facebook search volume or ranking data.
```

- [ ] **Step 3: Extend the deterministic contract before changing the skill**

Add these required files and phrases to `tests/validate-skill.mjs`:

```js
for (const file of [
  "tests/scenarios/natural-honduras-relist.md",
  "tests/scenarios/us-english-relist.md",
  "tests/scenarios/us-spanish-relist.md",
  "tests/scenarios/search-terms-grounding.md",
  "tests/fixtures/us-desk-lamp-listing.png",
]) requireFile(file);

for (const phrase of [
  "United States",
  "What to change",
  "Improved title",
  "Improved description",
  "Search terms",
  "lightweight current vocabulary check",
  "evidence takes priority",
]) {
  if (!skill.toLowerCase().includes(phrase.toLowerCase())) {
    failures.push(`SKILL.md missing v5 contract phrase: ${phrase}`);
  }
}

for (const phrase of ["Estados Unidos", "United States"]) {
  if (!readme.includes(phrase) || !install.includes(phrase)) {
    failures.push(`public docs missing market phrase: ${phrase}`);
  }
}
```

- [ ] **Step 4: Run deterministic validation and confirm RED**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: FAIL for missing United States headings, vocabulary-check language,
and two-market public documentation.

- [ ] **Step 5: Run five fresh-agent baselines per language/market variant**

Run `natural-honduras-relist.md`, `us-english-relist.md`, and
`us-spanish-relist.md` five times each with fresh agents reading the unchanged
worktree skill. Attach `tests/fixtures/us-desk-lamp-listing.png` to both US
variants. Score every run with this table:

```markdown
| Run | Grounded claims | Natural voice | Correct market/language | Natural CTA | 20 same-product terms | No filler | Result |
|---|---|---|---|---|---|---|---|
```

Expected RED evidence:

- Honduras outputs remain overly administrative or mechanically factual.
- United States outputs use Honduras-only Spanish rules, headings, or shop data.
- Current tags use location, price, `buy/comprar`, or repetitive count-padding.

- [ ] **Step 6: Save the real baseline evidence**

Write `tests/evaluations/v5-red-baseline.md` with:

- the 15-run score table;
- one representative output from each variant;
- quoted failure phrases;
- a summary that states which acceptance criteria are RED.

- [ ] **Step 7: Commit the RED tests**

```powershell
git add tests/scenarios tests/evaluations/v5-red-baseline.md tests/validate-skill.mjs
git commit -m "test: capture natural multimarket listing failures"
```

---

### Task 2: Implement the Minimal Two-Market Skill Behavior

**Files:**
- Modify: `SKILL.md`
- Modify: `references/voice-and-marketing.md`
- Modify: `references/audit-checklist.md`
- Modify: `datos-tienda.example.md`

**Interfaces:**
- Consumes: v5 contract phrases and scenario acceptance criteria from Task 1.
- Produces: market-aware routing, natural copy rules, grounded tags, and safe profile behavior.

- [ ] **Step 1: Replace Honduras-only routing with compact market selection**

Use this behavior in `SKILL.md`:

```markdown
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
```

- [ ] **Step 2: Add the natural description recipe**

Add this exact operating rule to `SKILL.md` and expand it with examples in
`references/voice-and-marketing.md`:

```markdown
Write the product copy as four to seven short, naturally varied lines when the
facts support them:
1. Name the product, condition, and strongest confirmed differentiator.
2. Give one concrete, evidence-backed reason to consider it.
3. Add decision details such as model, size, included items, color, price,
   pickup, delivery, shipping, or payment when known.
4. End with a low-pressure availability invitation.

Do not force a line when evidence is missing. Customer-facing copy must not use
audit language such as `no hay evidencia`, `principal ventaja`, or `posible
bloqueador`.
```

Add paired natural CTA examples:

```markdown
- Honduras: `Escríbanos para confirmar qué colores están disponibles.`
- United States: `Send a message to confirm it is still available.`
```

- [ ] **Step 3: Implement grounded search-term generation**

Use this exact priority and fallback in `SKILL.md`:

```markdown
## Search-term grounding

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
evidence takes priority: return supported copy, name the needed fact, and do not
pad the term list.
```

- [ ] **Step 4: Add language-appropriate output headings and pricing**

Define both heading sets in `SKILL.md`:

```markdown
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
```

Define explicit price research:

```markdown
Research price only when explicitly requested. Use recent Honduras comparables
and HNL for Honduras; use recent US comparables and USD for the United States.
Match product, model, condition, and included items, and distinguish asking
prices from verified completed sales. Preserve the supplied price otherwise.
```

- [ ] **Step 5: Make audit wording direct and keep profile scope safe**

Update `references/audit-checklist.md` so audit bullets say what is unclear and
what to change without customer-facing administrative language. Update
`datos-tienda.example.md` to state that its approved block is Honduras-specific
and is not inserted into United States output.

- [ ] **Step 6: Run deterministic validation**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: remaining failures concern README/INSTALL market documentation only;
all `SKILL.md` v5 contract phrases pass.

- [ ] **Step 7: Commit the minimal behavior**

```powershell
git add SKILL.md references/voice-and-marketing.md references/audit-checklist.md datos-tienda.example.md
git commit -m "feat: add natural Honduras and US listing modes"
```

---

### Task 3: Drive the Skill to Behavioral GREEN

**Files:**
- Modify: `SKILL.md` only if a scored failure requires a minimal rule change.
- Modify: `references/voice-and-marketing.md` only if a voice failure recurs.
- Create: `tests/evaluations/v5-results.md`

**Interfaces:**
- Consumes: unchanged scenarios from Task 1 and the implemented behavior from Task 2.
- Produces: repeated evidence that all three language/market variants satisfy the spec.

- [ ] **Step 1: Run five fresh Honduras evaluations**

Pass `tests/scenarios/natural-honduras-relist.md` and the worktree skill to five
fresh agents. Require:

- grounded Alentino umbrella facts and L.120;
- natural Spanish without administrative or copywriter formulas;
- a low-pressure availability question;
- exactly 20 same-product terms without `comprar`, price, location, unrelated
  products, or invented attributes.

- [ ] **Step 2: Run five fresh US English evaluations**

Pass `tests/scenarios/us-english-relist.md`, the worktree skill, and
`tests/fixtures/us-desk-lamp-listing.png` to five fresh agents. Require:

- all output and headings in natural US English;
- $18 and Orlando pickup preserved;
- no Honduras block, HNL, shipping, bulb, material, dimensions, brightness, or
  compatibility claims;
- exactly 20 same-product search terms.

- [ ] **Step 3: Run five fresh US Spanish evaluations**

Pass `tests/scenarios/us-spanish-relist.md`, the worktree skill, and
`tests/fixtures/us-desk-lamp-listing.png` to five fresh agents. Require:

- Spanish headings and customer copy;
- US dollar and Orlando pickup context;
- no Honduras block or invented lamp facts;
- exactly 20 same-product terms in natural Spanish used in the US context.

- [ ] **Step 4: Apply only failure-driven wording changes**

For every failed criterion, quote the failure, identify the missing or weak
instruction, make the smallest edit, and rerun five fresh agents for that
variant. Do not add a rule for a behavior that already passes.

- [ ] **Step 5: Save the GREEN evidence**

Create `tests/evaluations/v5-results.md` with the same score columns as the RED
baseline, representative accepted outputs for all three variants, vocabulary
sources used by researched runs, and a final comparison:

```markdown
| Variant | RED pass rate | GREEN pass rate |
|---|---:|---:|
| Honduras Spanish | 0/5 | 5/5 |
| US English | 0/5 | 5/5 |
| US Spanish | 0/5 | 5/5 |
```

Use the actual RED pass counts if a variant performed better than the expected
baseline.

- [ ] **Step 6: Run the full existing regression set**

Run fresh checks for:

- `tests/scenarios/sparse-evidence.md`;
- `tests/scenarios/screenshot-image-audit.md` with its PNG fixture;
- `tests/scenarios/batch-listings.md`;
- `tests/scenarios/price-check.md`.

Verify the approved Honduras shop block remains verbatim, prices remain
unchanged without explicit research, and the US mode never receives that block.

- [ ] **Step 7: Commit behavioral GREEN**

```powershell
git add SKILL.md references/voice-and-marketing.md tests/evaluations/v5-results.md
git commit -m "test: verify natural multimarket listing behavior"
```

---

### Task 4: Build the Utility Blue Public Presentation

**Files:**
- Create: `assets/readme-hero.svg`
- Create: `assets/before-after.svg`
- Create: `assets/social-preview.png`
- Modify: `README.md`
- Modify: `INSTALL.md`
- Modify: `agents/openai.yaml`
- Modify: `tests/validate-skill.mjs`

**Interfaces:**
- Consumes: verified behavior and accepted example outputs from Task 3.
- Produces: a product-first public README, exact install guidance, multimarket metadata, and three visual assets.

- [ ] **Step 1: Add failing visual and documentation assertions**

Add the three assets to `requireFile`, then add:

```js
for (const [file, phrases] of [
  ["assets/readme-hero.svg", ["<svg", "<title>", "Honduras", "United States"]],
  ["assets/before-after.svg", ["<svg", "<title>", "Antes", "Después"]],
]) {
  if (fs.existsSync(path.join(root, file))) {
    const text = read(file);
    for (const phrase of phrases) {
      if (!text.includes(phrase)) failures.push(`${file} missing: ${phrase}`);
    }
  }
}

const socialPreviewPath = path.join(root, "assets/social-preview.png");
if (fs.existsSync(socialPreviewPath)) {
  const socialPreview = fs.readFileSync(socialPreviewPath);
  if (socialPreview.toString("hex", 0, 8) !== "89504e470d0a1a0a") {
    failures.push("assets/social-preview.png is not PNG");
  } else {
    const width = socialPreview.readUInt32BE(16);
    const height = socialPreview.readUInt32BE(20);
    if (width !== 1280 || height !== 640) {
      failures.push(`social preview must be 1280x640; got ${width}x${height}`);
    }
  }
}

const tracked = execFileSync("git", ["ls-files"], { cwd: root })
  .toString("utf8")
  .split(/\r?\n/)
  .filter(Boolean);
if (tracked.some((file) => file.startsWith(".superpowers/"))) {
  failures.push("visual companion files must not be tracked");
}
```

Run `node tests/validate-skill.mjs`.

Expected: FAIL because the three assets and two-market public copy are absent.

- [ ] **Step 2: Create the README hero and before/after SVGs**

Use only these visual tokens:

```css
--navy: #142C4D;
--blue: #2067D5;
--blue-soft: #EAF2FF;
--canvas: #F6F9FF;
--white: #FFFFFF;
--muted: #5C6D84;
--border: #CEDBF0;
```

Requirements for both SVGs:

- embedded `<title>` and `<desc>`;
- native SVG shapes and text only;
- no external images, fonts, scripts, gradients, Facebook logo, or seller data;
- readable at 375 px width;
- hero message: `Publicaciones claras. Sin sonar a robot.`;
- market chips: `Honduras · ES` and `United States · EN / ES`;
- before/after uses the generic Alentino umbrella facts and no seller identity.

- [ ] **Step 3: Render the 1280×640 social preview**

Create a temporary untracked Utility Blue HTML composition in the active visual
companion session, render it at exactly 1280×640 with the browser, and save the
PNG as `assets/social-preview.png`. Use this exact text:

```text
MARKETPLACE LISTING
Mejore su publicación sin sonar a robot.
Fotos + texto → título, descripción y búsquedas útiles
Honduras · Estados Unidos
```

Inspect the PNG with the image viewer and reject clipping, low contrast,
misaligned cards, tiny text, or AI-style decoration.

- [ ] **Step 4: Rewrite the README around the verified user flow**

Use this section order:

```markdown
![Marketplace Listing](assets/readme-hero.svg)

# Marketplace Listing

Publicaciones claras para personas que solo tienen una foto, una captura o el
texto que ya usaron.

## Antes y después
![Antes y después](assets/before-after.svg)

## Cómo funciona
1. Suba la foto o captura y pegue el texto actual.
2. Reciba cambios concretos y una versión natural.
3. Copie el título, la descripción y los términos de búsqueda.

## Mercados
### Honduras
### United States

## Ejemplo real
## Lo que protege
## Instalación
## Perfil local de Honduras
## Pruebas
## Límites
## Contribuir
```

Use one accepted Honduras example and one concise US example from
`tests/evaluations/v5-results.md`. Do not add performance percentages,
testimonials, ranking promises, or a marketing-site CTA.

- [ ] **Step 5: Update installation and metadata**

Set `agents/openai.yaml` to:

```yaml
interface:
  display_name: "Marketplace Listing"
  short_description: "Mejora publicaciones para Honduras y EE. UU."
  default_prompt: "Use $marketplace-listing to review this Marketplace photo, screenshot, or existing copy and return a natural, evidence-grounded replacement for the selected market."

policy:
  allow_implicit_invocation: true
```

Replace the old metadata assertion in `tests/validate-skill.mjs` with:

```js
for (const phrase of [
  "Marketplace Listing",
  "Honduras y EE. UU.",
  "$marketplace-listing",
  "allow_implicit_invocation: true",
]) {
  if (!metadata.includes(phrase)) {
    failures.push(`agents/openai.yaml missing: ${phrase}`);
  }
}
```

Update `INSTALL.md` with Honduras/United States usage, English and Spanish US
behavior, market-correct pricing, and the rule that `datos-tienda.md` is a local
Honduras profile.

- [ ] **Step 6: Verify responsive visual quality and deterministic checks**

Inspect the hero, before/after, and social preview at 375, 768, and 1440 px.
Run:

```powershell
node tests/validate-skill.mjs
git diff --check
```

Expected:

```text
PASS marketplace-listing skill validation
```

- [ ] **Step 7: Commit the public presentation**

```powershell
git add README.md INSTALL.md agents/openai.yaml assets tests/validate-skill.mjs
git commit -m "docs: present the natural multimarket workflow"
```

---

### Task 5: Verify the Release Candidate and Update the Active Installation

**Files:**
- Verify: all tracked files.
- Update in place: `C:\Users\Alejandro\.agents\skills\marketplace-listing\` tracked package files.
- Preserve unchanged: `C:\Users\Alejandro\.agents\skills\marketplace-listing\datos-tienda.md`.

**Interfaces:**
- Consumes: verified source tree from Tasks 1–4.
- Produces: a tested active installation whose package files match the release candidate.

- [ ] **Step 1: Run the complete release-candidate checks**

```powershell
node tests/validate-skill.mjs
git diff --check
git status --short
git grep -n -I -E "[23789][0-9]{3}[- .]?[0-9]{4}"
```

Expected:

- validator passes;
- diff check has no output;
- `.superpowers/` is untracked and no other unexpected changes remain;
- tracked-tree grep returns no private phone-like string.

- [ ] **Step 2: Record the exact verified source revision**

```powershell
$verifiedRevision = git rev-parse HEAD
$verifiedTree = git rev-parse "HEAD^{tree}"
Write-Output "revision=$verifiedRevision tree=$verifiedTree"
```

Record both hashes in the final handoff and use the same revision for history
cleanup and installation.

- [ ] **Step 3: Export only tracked release files**

```powershell
$exportRoot = Join-Path $env:TEMP "marketplace-listing-v5-export"
if (Test-Path -LiteralPath $exportRoot) {
  throw "Refusing to reuse existing export directory: $exportRoot"
}
New-Item -ItemType Directory -Path $exportRoot | Out-Null
git archive --format=zip --output="$exportRoot\release.zip" HEAD
Expand-Archive -LiteralPath "$exportRoot\release.zip" -DestinationPath "$exportRoot\files"
```

- [ ] **Step 4: Preserve and update the active installation**

Confirm the destination is exactly:

```powershell
$installRoot = "C:\Users\Alejandro\.agents\skills\marketplace-listing"
$resolvedInstall = (Resolve-Path -LiteralPath $installRoot).Path
if ($resolvedInstall -ne $installRoot) {
  throw "Unexpected install path: $resolvedInstall"
}
$profilePath = Join-Path $installRoot "datos-tienda.md"
$profileHashBefore = if (Test-Path -LiteralPath $profilePath) {
  (Get-FileHash -Algorithm SHA256 -LiteralPath $profilePath).Hash
}
```

Copy each tracked file from `$exportRoot\files` into the same relative path
under `$installRoot`, creating parent directories as needed. Do not delete
untracked files and do not copy `.git` or `.superpowers`.

- [ ] **Step 5: Verify the installation and private profile**

Run:

```powershell
node "C:\Users\Alejandro\.agents\skills\marketplace-listing\tests\validate-skill.mjs"
$profileHashAfter = if (Test-Path -LiteralPath $profilePath) {
  (Get-FileHash -Algorithm SHA256 -LiteralPath $profilePath).Hash
}
if ($profileHashBefore -ne $profileHashAfter) {
  throw "datos-tienda.md changed during installation"
}
```

Compare SHA-256 hashes for every exported file against its installed copy.
Expected: all files match and the profile hash is unchanged.

- [ ] **Step 6: Remove only the verified temporary export**

Resolve `$exportRoot`, verify it is a direct child of `$env:TEMP` and its leaf
name is `marketplace-listing-v5-export`, then remove that directory. Do not
remove or reset the active repository, its `.git`, its worktrees, or its private
profile.

---

### Task 6: Publish a Clean GitHub History and Release

**Files:**
- Publish: the exact verified tree from Task 5.
- Upload: `assets/social-preview.png`.
- Preserve locally: pre-cleanup Git history under a private backup ref.

**Interfaces:**
- Consumes: verified revision/tree hashes, GitHub access, exact `origin`, and approved history-rewrite scope.
- Produces: clean public `main`, repository metadata, social preview, and v5.0.0 release.

- [ ] **Step 1: Confirm GitHub access and the exact remote**

Verify:

```powershell
git remote get-url origin
git ls-remote --heads origin refs/heads/main
```

Expected remote:

```text
https://github.com/xoradato/marketplace-listing.git
```

Use the connected GitHub integration for metadata and release operations. If it
is not callable, request installation of the recommended GitHub plugin before
continuing.

- [ ] **Step 2: Create a recoverable local backup ref**

```powershell
$backupRef = "refs/backup/pre-public-v5-july-29-2026"
if (git show-ref --verify --quiet $backupRef) {
  throw "Backup ref already exists: $backupRef"
}
git update-ref $backupRef HEAD
git rev-parse $backupRef
```

Do not push this backup ref.

- [ ] **Step 3: Create a clean one-root release commit**

```powershell
$verifiedTree = git rev-parse "HEAD^{tree}"
$releaseMessage = @"
Marketplace Listing v5

Natural, evidence-grounded Facebook Marketplace listings for Honduras and the United States.
"@
$cleanCommit = $releaseMessage | git commit-tree $verifiedTree
git branch --force release/marketplace-listing-v5-clean $cleanCommit
```

This commit has no historical coauthor trailers and does not reference the old
private-data history.

- [ ] **Step 4: Verify the clean history before pushing**

```powershell
git log --format=fuller release/marketplace-listing-v5-clean
git log --format=%B release/marketplace-listing-v5-clean
git ls-tree -r --name-only release/marketplace-listing-v5-clean
git grep -n -I -E "[23789][0-9]{3}[- .]?[0-9]{4}" release/marketplace-listing-v5-clean
```

Expected:

- exactly one root commit;
- `git log --format=%B` contains no `Co-Authored-By: Claude` trailer;
- no private phone-like string;
- no `.superpowers/` path;
- tree hash equals the verified tree from Task 5.

- [ ] **Step 5: Force-push with an exact lease**

```powershell
$expectedRemoteMain = (git ls-remote origin refs/heads/main).Split()[0]
if ($expectedRemoteMain -notmatch "^[0-9a-f]{40}$") {
  throw "Could not resolve the current remote main SHA"
}
git push --force-with-lease="refs/heads/main:$expectedRemoteMain" origin "release/marketplace-listing-v5-clean:refs/heads/main"
```

Immediately verify `origin/main` resolves to `$cleanCommit`.

- [ ] **Step 6: Update repository presentation**

Set:

```text
Description: Convierte fotos, capturas y texto de Marketplace en publicaciones naturales para Honduras y Estados Unidos.
Topics: facebook-marketplace, marketplace-listing, codex-skill, claude-code-skill, honduras, united-states, copywriting, spanish
Social preview: assets/social-preview.png
```

Keep Claude Code compatibility in README and metadata. Do not add Claude as a
credit or contributor.

- [ ] **Step 7: Create the v5.0.0 release**

Release title:

```text
Marketplace Listing v5.0.0 — Honduras + United States
```

Release notes:

```markdown
## Qué cambia

- Redacción más natural y orientada a preguntas reales de disponibilidad.
- Soporte para Honduras en español.
- Soporte para Estados Unidos en inglés o español.
- Términos de búsqueda del mismo producto, con validación de vocabulario actual.
- Auditorías desde fotos, capturas y texto existente.

## Seguridad

- Conserva precios salvo que se solicite investigación.
- No inventa características del producto.
- Mantiene `datos-tienda.md` fuera del repositorio.
- No garantiza ventas ni afirma conocer el algoritmo de Facebook.
```

- [ ] **Step 8: Perform final remote verification**

Verify the public README renders its two SVGs, the release points to the clean
commit, the social preview is visible, and the public history contains no
Claude coauthor trailer. Note that GitHub contributor statistics may take time
to refresh after a history rewrite.

---

## Final Acceptance

The work is complete only when:

- all deterministic tests pass in source and active installation;
- all repeated v5 behavioral variants are GREEN;
- the active private profile hash is unchanged;
- the public repository contains the exact verified clean tree;
- the README uses only the approved Utility Blue assets;
- GitHub `main` has a clean root history without Claude coauthor trailers;
- v5.0.0 and repository metadata are public and verified.
