# marketplace-listing

A [Claude Code](https://claude.com/claude-code) skill that turns photos of an item into a ready-to-post **Facebook Marketplace listing, localized for Honduras** — title, description, shipping block, and search tags, in cordial Honduran Spanish.

You send photos and a couple of facts; Claude returns the finished post, ready to copy and paste. No marketing plans, no fluff — the listing **is** the answer.

## What it does

- **Photo-driven.** Claude reads the item type, color, material, brand, and condition from your photos and only asks for what it can't see (sizes, price, exact model). It never invents flaws or specs — a made-up detail that's wrong at pickup kills the sale.
- **Search-first titles.** Written the way buyers type into the search bar (`Tenis Nike hombre 9.5`), not catalog-style, no `🔥 OFERTA`.
- **20 real search tags.** Every listing ends with a `Para búsqueda:` line of 20 varied, comma-separated terms — category, synonyms, regional words, and use-case searches — ready to paste as-is. Marketplace indexes the text; this is how buyers find the post.
- **A voice that sells without shouting.** Cordial "usted", plain Spanish anyone in Honduras reads easily. Neutral and impartial: concrete details over hype — no stacked superlatives, no emoji storms, no fake urgency, no voseo or slang.
- **Your shop data, given once.** Shipping policy, delivery points, payment methods, and a standard closing live in a local `datos-tienda.md` file. Claude reuses it verbatim in every listing and never re-asks. The file is gitignored — your contact info never leaves your machine.
- **Realistic local pricing.** For new electronics, Claude researches local comps (Marketplace Honduras, Encuentra24, local stores) and suggests a fair range in lempiras — never anchored to eBay/US prices, which inflate everything. For everything else, your price is slotted in, no research theater.
- **Delivers, doesn't orchestrate.** One item at a time, finished. No process narration, no executive summaries, no "next steps" menus.

## Example output

> **Vestido azul casual talla M y L**
>
> Vestido azul de corte casual, fresco y cómodo para el diario o para salir.
> La tela cae bonito y no se transparenta. Nuevo, en talla M y L.
> Hacemos envíos a todo Honduras, pago contra entrega. Aceptamos efectivo o transferencia.
> Escríbanos por mensaje si necesita otra talla o color. Con gusto le atendemos.
>
> Para búsqueda: vestido azul, vestido casual, vestido de dama, ropa de mujer, vestido talla M, vestido talla L, …

## How it works

1. **Listing** — Claude reads `datos-tienda.md` (your fixed shop profile), reads your photos, asks one short batch of questions at most, and writes the post: title, grounded description, your shipping/contact block, and the 20-term tag line.
2. **Pricing** (optional) — only for new electronics: 4–8 local comps, a sell-fast / fair / suggested range in HNL, with the comps listed so you can sanity-check. Otherwise your price goes straight in.

Either stage can run alone.

## Install

See **[INSTALL.md](INSTALL.md)**. Short version:

```bash
git clone https://github.com/xoradato/marketplace-listing.git ~/.claude/skills/marketplace-listing
cd ~/.claude/skills/marketplace-listing
cp datos-tienda.example.md datos-tienda.md   # then fill in your shop data
```

Then ask Claude Code things like *"ayúdame a vender este vestido"* (with photos) or run `/marketplace-listing`.

## Adapting it outside Honduras

The skill is deliberately localized: lempiras, Tegucigalpa delivery points, Honduran search habits, no voseo. If you sell elsewhere, edit `SKILL.md` (pricing sources, register/voseo rules) and your `datos-tienda.md` — the structure carries over to any country's Marketplace.

## Files

| File | Purpose | Committed? |
|---|---|---|
| `SKILL.md` | The skill itself | Yes |
| `datos-tienda.example.md` | Template for your shop profile | Yes |
| `datos-tienda.md` | **Your** real shop data (contact, shipping) | No — gitignored |
