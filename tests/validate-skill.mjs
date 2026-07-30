import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { execFileSync } from "node:child_process";

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
  "tests/fixtures/unsold-listing-audit.png",
  "tests/scenarios/screenshot-image-audit.md",
  "tests/scenarios/price-check.md",
  "README.md",
  "INSTALL.md",
  "assets/readme-hero.svg",
  "assets/before-after.svg",
  "assets/social-preview.png",
]) requireFile(file);

for (const file of [
  "tests/scenarios/natural-honduras-relist.md",
  "tests/scenarios/us-english-relist.md",
  "tests/scenarios/us-spanish-relist.md",
  "tests/scenarios/search-terms-grounding.md",
  "tests/fixtures/us-desk-lamp-listing.png",
]) requireFile(file);

for (const [file, phrases] of [
  ["assets/readme-hero.svg", ["<svg", "<title", "Honduras", "United States"]],
  ["assets/before-after.svg", ["<svg", "<title", "Antes", "Después"]],
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

const contractPhrases = [
  "Qué cambiar",
  "Título mejorado",
  "Descripción mejorada",
  "Etiquetas",
  "exactly 20",
  "confirmed",
  "visible",
  "unknown",
  "existing listing copy",
  "every item's description contains that block",
];
for (const phrase of contractPhrases) {
  if (!skill.toLowerCase().includes(phrase.toLowerCase())) {
    failures.push(`SKILL.md missing contract phrase: ${phrase}`);
  }
}

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

const orderedSections = [
  "Qué cambiar",
  "Título mejorado",
  "Descripción mejorada",
  "Etiquetas",
].map((section) => skill.indexOf(section));
if (orderedSections.some((position) => position < 0) ||
    orderedSections.some((position, index) => index > 0 && position <= orderedSections[index - 1])) {
  failures.push("SKILL.md output sections are missing or out of order");
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

const readme = read("README.md");
const install = read("INSTALL.md");
for (const phrase of ["Estados Unidos", "United States"]) {
  if (!readme.includes(phrase) || !install.includes(phrase)) {
    failures.push(`public docs missing market phrase: ${phrase}`);
  }
}
for (const [file, text] of [["README.md", readme], ["INSTALL.md", install]]) {
  for (const phrase of ["exactamente 20", "datos-tienda.md", "precio"]) {
    if (!text.toLowerCase().includes(phrase.toLowerCase())) {
      failures.push(`${file} missing documented contract phrase: ${phrase}`);
    }
  }
}

const metadata = read("agents/openai.yaml");
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

const textExtensions = new Set([".md", ".mjs", ".js", ".json", ".yaml", ".yml", ".txt"]);
const trackedFiles = execFileSync("git", ["ls-files", "-z"], { cwd: root })
  .toString("utf8")
  .split("\0")
  .filter(Boolean)
  .filter((file) => textExtensions.has(path.extname(file).toLowerCase()));
const phoneLike = /\b(?:\+?504[\s.-]?)?[23789]\d{3}[\s.-]?\d{4}\b/g;
const encodedPhoneLike = /[23789]\d{3}\[\-\\s\]\?\d{4}/g;
for (const file of trackedFiles) {
  if (path.basename(file).toLowerCase() === "datos-tienda.md") continue;
  const trackedText = fs.readFileSync(path.join(root, file), "utf8");
  const matches = trackedText.match(phoneLike) ?? trackedText.match(encodedPhoneLike);
  if (matches) failures.push(`possible private phone appears in tracked file: ${file}`);
}

if (failures.length) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log("PASS marketplace-listing skill validation");
