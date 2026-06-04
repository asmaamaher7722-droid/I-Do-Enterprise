# I Do Enterprise — Component Cheat-Sheet

> One-page quick reference. Full spec: **DESIGN_SYSTEM.md** · Tokens: **tokens.css / tokens.json**. RTL-first.

## Section blueprint (use for every section)
```
┌──────────────────────────────────────────────┐
│            ( eyebrow pill — blue )            │  ← center
│        Heading navy + ONE blue word           │  ← H2 / 40px / 800
│            muted subtitle, 1 line             │  ← 18px
│                                               │  ← 48–64px gap
│   [ ░░ content: card grid / split / device ]  │
│                                               │  ← 48–64px gap
│             ( ◄ Pill CTA — blue )             │  ← center
└──────────────────────────────────────────────┘
Section padding: 96–120px ↕ · Container: 1280px · Bg alternates white↔#F4F6FE↔blue↔navy
```

## Buttons (all pills · arrow points ◄ left)
| Variant | Fill | Text | Where |
|---|---|---|---|
| Primary | `--color-primary` | white | Default section CTA |
| Inverse | white | `--color-primary` | On hero/blue bg |
| Glow | light-blue + `--glow-cta` | navy | Final dark CTA |
| Nav | `--color-primary` (small) | white | Navbar (far left) |
| Text link | none | blue + chevron ‹ | "Read full story" |
Height: 48–56px (section) / 40px (nav) · Padding-x: 28–40px · Radius: 999px

## Cards (white · radius 20px · `--shadow-md` · padding 24–32px)
| Card | Layout (RTL) |
|---|---|
| **Hero feature** | icon tile RIGHT + title + 1-line sub |
| **Feature row** | text right · icon tile LEFT (trailing) |
| **Module** | gradient icon tile top → blue title → muted desc |
| **Step** | tinted square + center icon + numbered blue circle badge corner; title+desc below; connector line |
| **Stat metric** | big number (800) + small label, grouped 3-up |
| **Success story** | image panel RIGHT (overlay+category+name) · 3 cols LEFT: Problem→Solution→Results + 3 stats + text link |
| **Sector** | image top + circle icon on seam + blue title + desc |
| **Partner** | centered logo, in carousel (◄ ► + dots) |
| **Floating info** | small white card: icon + label + value (annotates devices) |
Hover: lift −2…−4px + deeper shadow.

## Badges & status (pills)
| Type | Fill / Text |
|---|---|
| Eyebrow | `--color-primary-50` / `--color-primary` (+ leading dot) |
| Completed | `--color-success-bg` / `--color-success` |
| In progress | `--color-info-bg` / `--color-info` |
| Pending | `--color-warning-bg` / `--color-warning` |
| Problem/alert | `--color-danger-bg` / `--color-danger` |

## Icon tiles
- **Gradient rounded square** (radius 16px) + white glyph → category identity (see category gradients).
- **Solid blue rounded square** → feature icons.
- **White circle + colored line icon** → sectors, footer.

## Color quick-grab
`primary #1E50C8` · `accent #2C7BE5` · `heading #1A2A4A` · `text #3F4A60` · `muted #6B7588`
`tint bg #F4F6FE` · `navy-900 #0C1A38` · `success #1FA45C` · `warning #B0822E` · `danger #DC2F36`

## Type quick-grab (desktop)
H1 52/800 · H2 40/800 (two-tone) · H3 22/700 · lead 18/400 · body 16/400 (lh 1.8) · small 14 · eyebrow 14/600 · stat 36/800
Font: **Tajawal/Cairo** · **Western numerals** (1,248 not ١٢٤٨)

## Spacing quick-grab (4px base)
card gap **24** · card padding **24–32** · heading→content **48–64** · content→CTA **48–64** · section ↕ **96–120**

## RTL checklist ✅
- [ ] `dir="rtl"`, text-align right, logical margins (`inline-start/end`)
- [ ] Logo + 1st nav item RIGHT · primary nav action LEFT
- [ ] Sequences flow R→L (steps 01→04, story Problem→Results)
- [ ] "Next/more" arrows point ◄ left; mirror chevrons, NOT logos/checks/media
- [ ] Western numerals; Latin/email/phone wrapped LTR (`.ltr` / bidi isolate)
- [ ] Charts & progress fill from the right
- [ ] Body line-height ≥ 1.7

## Page order (top → bottom)
Navbar → Hero (gradient+devices) → About split → Modules (tint) → 4 Steps → App showcase (blue panel) → Success stories → Sectors (tint, 4×2) → Partners carousel → Dark CTA → Footer (navy)
