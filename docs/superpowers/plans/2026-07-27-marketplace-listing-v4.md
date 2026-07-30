# Marketplace Listing v4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade `marketplace-listing` to audit screenshots of Honduran
Facebook Marketplace listings and produce trustworthy, natural, copy-ready
replacements without AI-flavored language or unsupported claims.

**Architecture:** Keep `SKILL.md` as a concise workflow and output contract.
Move detailed voice/marketing guidance and screenshot-audit criteria into two
one-level reference files. Use a dependency-free Node validator plus fresh-agent
behavioral evaluations to verify structure, evidence discipline, output shape,
and anti-slop behavior before updating the active installation.

**Tech Stack:** Markdown Agent Skill, YAML metadata, Node.js 24 built-ins, Git,
fresh Codex subagents for behavioral evaluations.

## Global Constraints

- Write plain, neutral Spanish for a broad Honduran audience.
- Use cordial `usted`; do not use voseo or forced Honduran slang.
- Product claims must be confirmed by the user or directly visible.
- Never infer material, durability, comfort, authenticity, hidden condition,
  measurements, performance, compatibility, or history.
- Audit output order is `Qué cambiar`, `Título mejorado`,
  `Descripción mejorada`, `Etiquetas`.
- Every tag line contains exactly 20 distinct comma-separated search terms.
- Preserve price unless the user explicitly requests research.
- Reuse the approved local shop block verbatim without exposing private data.
- Do not claim that copy is the only reason an item failed to sell.
- Keep references one level deep from `SKILL.md`.

---

## File Structure

- `SKILL.md`: trigger metadata, mode selection, evidence model, core workflow,
  output contract, and final quality gate.
- `references/voice-and-marketing.md`: natural Honduran register, grounded
  marketing rules, machine-language patterns, and one complete example.
- `references/audit-checklist.md`: screenshot inspection criteria, confidence
  wording, and prioritization.
- `agents/openai.yaml`: Codex UI metadata and default prompt.
- `datos-tienda.example.md`: generic shop-profile template with no unsupported
  platform claims.
- `README.md`: public repository description and v4 usage examples.
- `INSTALL.md`: cross-runtime installation and update instructions.
- `tests/validate-skill.mjs`: deterministic package validation.
- `tests/scenarios/*.md`: reusable behavioral evaluation prompts.
- `tests/evaluations/*.md`: concise RED/GREEN results without private data.

### Task 1: Capture RED behavioral baselines

**Files:**
- Create: `tests/scenarios/sparse-evidence.md`
- Create: `tests/scenarios/unsold-audit.md`
- Create: `tests/scenarios/batch-listings.md`
- Create: `tests/evaluations/baseline-v3.md`

**Interfaces:**
- Consumes: current v3 `SKILL.md` at the branch baseline.
- Produces: observed failure patterns that the v4 wording must address.

- [ ] **Step 1: Write the sparse-evidence scenario**

Use this exact task:

```markdown
Use the current marketplace-listing skill.

The only confirmed facts are: the photo shows a blue dress; the seller says it
is new and available in M and L. Write the finished Marketplace listing.

Do not ask questions. Make it persuasive enough to sell tomorrow.
```

The pressure is the explicit request to persuade despite sparse evidence. A
failure is any invented material, opacity, comfort, fit, durability, quality, or
use-case claim.

- [ ] **Step 2: Write the unsold-audit scenario**

Use this exact task:

```markdown
Use the current marketplace-listing skill.

I am sharing a screenshot of an unsold listing. Visible text:
Title: "Hermoso vestido super elegante y versátil"
Price: L. 450
Description: "Vestido fresco y cómodo, ideal para cualquier ocasión. Cuenta
con un diseño que brinda comodidad y estilo."
Visible facts: blue dress, new, sizes M and L. No view or message metrics are
shown.

Tell me what to change and give me the improved publication with 20 tags.
```

A failure is missing audit feedback, declaring why it did not sell, changing the
price, or retaining/inventing machine-like claims.

- [ ] **Step 3: Write the batch scenario**

Use two items with disjoint facts:

```markdown
Use the current marketplace-listing skill. Improve both unsold listings.

Item 1: black men's polo, new with visible tag, sizes M and L, L. 300.
Item 2: sealed 128 GB USB flash drive; brand and transfer speed are not readable,
L. 180.

For each item return what to change, title, description, and exactly 20 tags.
Do not research prices.
```

A failure is dropping an item, mixing facts between items, inventing USB speed
or brand, or omitting any output section.

- [ ] **Step 4: Run five independent v3 repetitions of the sparse scenario**

Spawn five fresh agents with no shared history. Give each the v3 skill path and
the exact sparse scenario. Save each final response verbatim under a heading in
`tests/evaluations/baseline-v3.md`.

- [ ] **Step 5: Run one v3 repetition of each broader scenario**

Run `unsold-audit.md` and `batch-listings.md` with fresh agents. Append their
outputs verbatim to the baseline report.

- [ ] **Step 6: Score and summarize the RED failures**

Add a table with these columns:

```markdown
| Run | Invented claim | AI-language tell | Wrong output shape | Price changed | Notes |
```

The baseline is RED when at least one specified acceptance criterion fails.
Record exact phrases that reveal each failure; do not replace raw outputs with
only a summary.

- [ ] **Step 7: Commit the RED artifacts**

```powershell
git add tests/scenarios tests/evaluations/baseline-v3.md
git commit -m "test: capture marketplace skill v3 failures"
```

### Task 2: Add deterministic structural validation

**Files:**
- Create: `tests/validate-skill.mjs`

**Interfaces:**
- Consumes: repository root files.
- Produces: exit code `0` with `PASS marketplace-listing skill validation`, or
  exit code `1` with one line per failed invariant.

- [ ] **Step 1: Write the validator before v4 implementation**

Implement a dependency-free Node script that:

```javascript
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const requireFile = (file) => {
  if (!fs.existsSync(path.join(root, file))) failures.push(`missing ${file}`);
};

for (const file of [
  "SKILL.md",
  "references/voice-and-marketing.md",
  "references/audit-checklist.md",
  "agents/openai.yaml",
  "datos-tienda.example.md",
]) requireFile(file);

const skill = read("SKILL.md");
const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!frontmatter) {
  failures.push("SKILL.md frontmatter missing");
} else {
  const keys = [...frontmatter[1].matchAll(/^([a-zA-Z0-9_-]+):/gm)]
    .map((match) => match[1]);
  if (keys.join(",") !== "name,description") {
    failures.push(`frontmatter keys must be name,description; got ${keys}`);
  }
  if (!/^description:\s*>?-?\s*\r?\n?\s*Use when/m.test(frontmatter[1]) &&
      !/^description:\s*Use when/m.test(frontmatter[1])) {
    failures.push("description must start with Use when");
  }
}

for (const phrase of [
  "Qué cambiar",
  "Título mejorado",
  "Descripción mejorada",
  "Etiquetas",
  "exactly 20",
  "confirmed",
  "visible",
  "unknown",
]) {
  if (!skill.toLowerCase().includes(phrase.toLowerCase())) {
    failures.push(`SKILL.md missing contract phrase: ${phrase}`);
  }
}

for (const unsupported of [
  "Marketplace has no real tag field",
  "Marketplace indexes the text",
  "Facebook penaliza poner el número",
  "Exactly one selling line",
]) {
  if (skill.includes(unsupported)) {
    failures.push(`unsupported or unsafe rule remains: ${unsupported}`);
  }
}

if (skill.split(/\r?\n/).length > 220) {
  failures.push("SKILL.md exceeds 220 lines");
}

const trackedText = [
  "SKILL.md",
  "datos-tienda.example.md",
  "README.md",
  "INSTALL.md",
].filter((file) => fs.existsSync(path.join(root, file)))
  .map(read)
  .join("\n");
if (/\b(?:\+?504[\s.-]?)?[23789]\d{3}[\s.-]?\d{4}\b/.test(trackedText)) {
  failures.push("private shop phone appears in tracked documentation");
}

if (failures.length) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log("PASS marketplace-listing skill validation");
```

- [ ] **Step 2: Run the validator and verify RED**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: exit code `1`, including failures for missing reference/agent files and
the old frontmatter or unsafe rules.

- [ ] **Step 3: Commit the failing validator**

```powershell
git add tests/validate-skill.mjs
git commit -m "test: define marketplace skill v4 invariants"
```

### Task 3: Implement the minimal v4 skill

**Files:**
- Modify: `SKILL.md`
- Create: `references/voice-and-marketing.md`
- Create: `references/audit-checklist.md`
- Create: `agents/openai.yaml`

**Interfaces:**
- Consumes: `datos-tienda.md` when present, user screenshots/photos/text, and the
  RED failure phrases from Task 1.
- Produces: either audit-plus-rewrite or final-listing-only output.

- [ ] **Step 1: Replace the frontmatter**

Use only:

```yaml
---
name: marketplace-listing
description: Use when creating, auditing, renewing, or rewriting Marketplace and classified listings for buyers in Honduras, especially from item photos, screenshots of unsold posts, raw product details, or requests to improve titles, descriptions, search terms, buyer trust, or local pricing.
---
```

- [ ] **Step 2: Write the mode and evidence workflow**

Keep these observable branches in `SKILL.md`:

```markdown
## Choose the mode

- New listing: create from photos and confirmed facts.
- Audit/relist: inspect the existing post, explain visible improvements, then
  provide the replacement.
- Final copy only: omit analysis when the user asks only for copy-ready text.
- Price check: research only when explicitly requested.

## Evidence gate

Classify every candidate product claim as:
- Confirmed: supplied by the user or readable from evidence.
- Visible: directly observable without a quality or performance judgment.
- Unknown: everything else.

Use confirmed and visible claims. Omit or ask about unknown claims.
```

Explicitly list the high-risk unknown categories from Global Constraints.

- [ ] **Step 3: Write the positive output recipe**

Use a structural contract rather than a long prohibition list:

```markdown
## Output

For each audited item:
1. Qué cambiar — 2–5 prioritized, actionable bullets.
2. Título mejorado — one search-clear title.
3. Descripción mejorada — copy-ready body plus the approved shop block.
4. Etiquetas — exactly 20 distinct comma-separated terms.

For final-copy-only requests, return sections 2–4.
For batches, complete all required sections for one item before the next.
```

- [ ] **Step 4: Add the final quality gate**

Require a silent reread that verifies:

- Every claim has confirmed or visible support.
- The title identifies the product without hype.
- The body answers decision-relevant questions without filler.
- Price is unchanged unless research was requested.
- Shop block is verbatim.
- Tag count is exactly 20 with no duplicates.
- No banned machine-language pattern from the voice reference remains.

- [ ] **Step 5: Create Codex interface metadata**

Create:

```yaml
interface:
  display_name: "Marketplace Listing Honduras"
  short_description: "Audita y mejora publicaciones para Honduras"
  default_prompt: "Use $marketplace-listing to review these Marketplace screenshots and return prioritized improvements plus clean, trustworthy replacement listings."

policy:
  allow_implicit_invocation: true
```

- [ ] **Step 6: Create the voice and marketing reference**

Include:

- Trust-first marketing principles.
- Cordial Honduran register and `usted`.
- Named machine-language patterns found in the RED outputs.
- Grounded alternatives using facts.
- One complete audit/rewrite example that does not add facts absent from its
  input.

- [ ] **Step 7: Create the audit reference**

Cover search clarity, first impression, buyer confidence, readability,
conversion friction, and possible non-copy blockers. Define:

```markdown
Observed: directly supported by the screenshot.
Possible blocker: plausible but not proven by the screenshot.
Unknown: requires metrics, comparables, or user confirmation.
```

Require the audit to say what to change, not to claim why the item failed.

- [ ] **Step 8: Run deterministic validation**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: `PASS marketplace-listing skill validation`.

- [ ] **Step 9: Commit the minimal v4**

```powershell
git add SKILL.md references agents/openai.yaml
git commit -m "feat: audit and rewrite Honduran marketplace listings"
```

### Task 4: Update package metadata and public documentation

**Files:**
- Modify: `datos-tienda.example.md`
- Modify: `README.md`
- Modify: `INSTALL.md`

**Interfaces:**
- Consumes: the completed v4 workflow.
- Produces: discoverable Codex metadata and accurate public usage instructions.

- [ ] **Step 1: Verify Codex interface metadata**

Confirm `agents/openai.yaml` still matches the implemented v4 workflow and that
its default prompt explicitly mentions `$marketplace-listing`.

- [ ] **Step 2: Make the example profile factual**

Keep placeholders for city, delivery, payment, and closing. Replace any universal
claim that Facebook penalizes phone numbers with a user-configurable preference:

```markdown
## Contacto público
- [Indique si desea publicar teléfono o dirigir a los compradores a mensajes.]
```

- [ ] **Step 3: Update README and INSTALL**

Document screenshot audit, evidence discipline, exact output, Codex
`~/.agents/skills/` compatibility, and the local `datos-tienda.md` profile. Do
not claim undocumented indexing behavior or guaranteed sales.

- [ ] **Step 4: Run deterministic validation**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: `PASS marketplace-listing skill validation`.

- [ ] **Step 5: Commit metadata and docs**

```powershell
git add agents datos-tienda.example.md README.md INSTALL.md
git commit -m "docs: publish marketplace listing v4 workflow"
```

### Task 5: Verify GREEN behavior and refactor wording

**Files:**
- Create: `tests/evaluations/v4-results.md`
- Modify if needed: `SKILL.md`
- Modify if needed: `references/voice-and-marketing.md`
- Modify if needed: `references/audit-checklist.md`

**Interfaces:**
- Consumes: the same scenarios and scoring criteria from Task 1.
- Produces: raw v4 outputs, scores, and any minimal wording fixes.

- [ ] **Step 1: Run five fresh v4 repetitions of sparse evidence**

Give five independent agents the v4 skill directory and the unchanged
`sparse-evidence.md` scenario. Save all responses verbatim.

- [ ] **Step 2: Run audit and batch scenarios**

Run one fresh agent per broader scenario using the v4 skill. Save responses
verbatim.

- [ ] **Step 3: Score every result manually**

Use this table:

```markdown
| Run | Claims grounded | Natural language | Correct sections | 20 unique tags | Price preserved | Result |
```

Read every response. Automated phrase counts do not replace manual scoring.

- [ ] **Step 4: Refactor only observed failures**

If an agent invents a claim, misses a section, changes price, uses AI-language,
or outputs the wrong number of tags, tighten the corresponding positive recipe
or evidence gate. Do not add guidance for hypothetical failures.

- [ ] **Step 5: Re-run any failed scenario**

Use a fresh agent and unchanged scenario. Continue until all acceptance criteria
pass without a new failure pattern.

- [ ] **Step 6: Run final deterministic validation**

Run:

```powershell
node tests/validate-skill.mjs
```

Expected: `PASS marketplace-listing skill validation`.

- [ ] **Step 7: Commit evaluations and refinements**

```powershell
git add SKILL.md references tests/evaluations/v4-results.md
git commit -m "test: verify marketplace listing v4 behavior"
```

### Task 6: Review, install, and verify the active copy

**Files:**
- Source: isolated worktree branch `codex/marketplace-listing-v4`
- Active installation: `C:/Users/Alejandro/.agents/skills/marketplace-listing`

**Interfaces:**
- Consumes: verified branch commits and local ignored `datos-tienda.md`.
- Produces: active v4 installation with the same tracked source revision and
  preserved private shop profile.

- [ ] **Step 1: Review the complete branch diff**

Run:

```powershell
git diff main...codex/marketplace-listing-v4 --check
git diff --stat main...codex/marketplace-listing-v4
git status --short
```

Confirm no private data, unexpected generated files, or unrelated edits.

- [ ] **Step 2: Run an independent skill review**

Give a fresh reviewer the specification and complete branch diff. Require
separate findings for spec compliance and instruction quality. Fix all material
findings and rerun validation.

- [ ] **Step 3: Preserve the active local profile**

Confirm `datos-tienda.md` remains ignored and untracked. Record its hash before
installation without printing its contents:

```powershell
Get-FileHash datos-tienda.md -Algorithm SHA256
git check-ignore datos-tienda.md
```

- [ ] **Step 4: Update the active checkout**

Merge the verified branch into the active checkout. Resolve the old local
`compatibility: Codex` customization by using standards-compliant
`agents/openai.yaml`; do not discard its intent.

- [ ] **Step 5: Verify the installed copy**

Run in the active directory:

```powershell
node tests/validate-skill.mjs
Get-FileHash datos-tienda.md -Algorithm SHA256
git status --short --branch
```

The validator must pass and the private profile hash must match Step 3.

- [ ] **Step 6: Confirm discovery**

Verify the active skill has:

- `SKILL.md` with `name: marketplace-listing`.
- `agents/openai.yaml` with implicit invocation enabled.
- No duplicate installed skill with the same name under
  `C:/Users/Alejandro/.codex/skills/`.

- [ ] **Step 7: Report repository state**

Report the installed commit, test evidence, preserved profile, branch status,
and whether commits remain local. Do not push or open a pull request without
explicit authorization.
