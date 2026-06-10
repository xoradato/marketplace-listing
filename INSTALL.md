# Installing the marketplace-listing skill

Requires [Claude Code](https://claude.com/claude-code) (CLI, desktop app, or IDE extension).

## 1. Clone into your personal skills folder

Personal skills live in `~/.claude/skills/` — Claude Code picks them up automatically.

**macOS / Linux:**

```bash
git clone https://github.com/xoradato/marketplace-listing.git ~/.claude/skills/marketplace-listing
```

**Windows (PowerShell):**

```powershell
git clone https://github.com/xoradato/marketplace-listing.git "$env:USERPROFILE\.claude\skills\marketplace-listing"
```

> Prefer a per-project install? Clone into `<your-project>/.claude/skills/marketplace-listing` instead.

## 2. Create your shop profile

The skill reuses your fixed business data (shipping, delivery points, payment, closing line) in every listing, so you only state it once:

```bash
cd ~/.claude/skills/marketplace-listing
cp datos-tienda.example.md datos-tienda.md
```

Open `datos-tienda.md` and fill in your real data. **This file is gitignored** — your contact info stays on your machine and is never pushed.

If you skip this step, Claude will ask for the data the first time and save it there for you.

## 3. Use it

Start Claude Code and either:

- run `/marketplace-listing`, or
- just ask naturally, with photos attached:
  - *"Ayúdame a vender este vestido, tengo en M y L"*
  - *"¿En cuánto vendo este Chromebook nuevo?"*
  - *"Write a Marketplace listing for these shoes"*

The skill triggers on selling/listing/pricing requests automatically — you don't need to name it.

## Updating

```bash
cd ~/.claude/skills/marketplace-listing
git pull
```

Your `datos-tienda.md` is untracked, so updates never touch it.
