# I Do Enterprise — Design System

> **Source of truth.** Extracted from the homepage (the master design reference). Every future page must conform to the tokens, components, and rules below.
> **Language / direction:** Arabic-first, **RTL by default**. English is a secondary, inline-LTR exception.
> **Note on values:** Colors and sizes are sampled visually from the reference screenshots. Treat them as the working spec; reconcile with brand/Figma source files where available before locking tokens.

---

## 1. Design Language

**Personality:** Modern enterprise SaaS — clean, trustworthy, data-driven, "calm corporate." Premium but not flashy.

**Core principles**

| Principle | How it shows up |
|---|---|
| **Clarity first** | Generous whitespace, one idea per section, strong heading hierarchy, short supporting copy. |
| **Soft & rounded** | Everything has rounded corners; buttons are full pills; no hard edges. Soft, diffuse shadows give a light "floating" feel. |
| **Blue = brand = trust** | Blue carries every primary action, accent, and highlighted word. Navy carries authority (headings, dark sections). |
| **Product-led proof** | Real device mockups (laptop + phone) and dashboard UI are hero assets in 3 sections. The product sells itself. |
| **Light, airy depth** | Layered cards float above tinted backgrounds with blue-tinted shadows and subtle gradients. Minimal borders — elevation is done with shadow, not strokes. |
| **Tech connectivity motif** | The constellation/network graphic (nodes + lines) in the hero signals "everything connected in one platform." |
| **Rhythmic sectioning** | Background tone alternates (white → light lavender → blue → dark) to pace a long page. |

**Repeating section template** (used by nearly every section):

```
[ Eyebrow pill (badge) ]
[ Two-tone heading: navy + blue ]
[ Muted subtitle, 1 line ]
[ Content: card grid / split layout / devices ]
[ Centered pill CTA ]
```

---

## 2. Color Palette

### 2.1 Brand / Primary

| Token | Approx. Hex | Usage |
|---|---|---|
| `--color-primary` | `#1E50C8` | Primary buttons, links, active states, key icons. |
| `--color-primary-hover` | `#1A45AD` | Button hover / pressed. |
| `--color-accent-blue` | `#2C7BE5` | The *highlighted word* in two-tone headings; brighter accents, links. |
| `--color-primary-50` | `#EAF1FF` | Eyebrow badge fill, light icon backgrounds, soft section tints. |
| `--color-primary-100` | `#DCE8FF` | Hover tints, chips, secondary surfaces. |

### 2.2 Navy / Neutrals (headings & dark surfaces)

| Token | Approx. Hex | Usage |
|---|---|---|
| `--color-navy-900` | `#0C1A38` | Darkest — footer / final CTA background base. |
| `--color-navy-800` | `#14264C` | Dark gradient top, dark section surfaces. |
| `--color-heading` | `#1A2A4A` | Default heading color (the navy half of two-tone headings). |
| `--color-text` | `#3F4A60` | Body text on light backgrounds. |
| `--color-text-muted` | `#6B7588` | Subtitles, descriptions, captions. |
| `--color-text-subtle` | `#94A3B8` | Meta, placeholder, disabled. |
| `--color-border` | `#E6EAF2` | Hairline dividers, subtle card edges. |

### 2.3 Surfaces / Backgrounds

| Token | Approx. Hex | Usage |
|---|---|---|
| `--bg-page` | `#FFFFFF` | Default page background. |
| `--bg-tint` | `#F4F6FE` | Alternating section background (lavender/very light blue). |
| `--bg-card` | `#FFFFFF` | All cards. |
| `--bg-hero-gradient` | `linear-gradient(180deg, #6FA8E6 0%, #3E73CF 55%, #EAF2FC 100%)` | Hero: sky-blue → blue → fades to light at the base. |
| `--bg-blue-section` | `linear-gradient(135deg, #3E78D8 0%, #2C5FBF 100%)` | App-showcase rounded panel + "Know more" surfaces. |
| `--bg-dark-section` | `radial/linear from #14264C → #0C1A38` | Final CTA + footer. |

### 2.4 Status / Semantic

| Token | Approx. Hex | Usage |
|---|---|---|
| `--color-success` | `#1FA45C` | "Completed", positive deltas (+24%), Results column. |
| `--color-warning` | `#B0822E` | "Pending / On-hold" badges (amber-brown). |
| `--color-danger` | `#DC2F36` | "Problem" label, overdue, alerts. |
| `--color-info` | `#1E50C8` | "In progress", Solution label. |

### 2.5 Accent set (module / category icon tiles)

These appear as **gradient rounded-square tiles** with a white glyph. Use sparingly, as category identity only.

| Category | Gradient (approx.) |
|---|---|
| Accounting | Purple `#8B6DF0 → #6D4FE0` |
| Real estate | Orange `#F5A24A → #ED8636` |
| Assets | Blue `#3B82F6 → #1E50C8` |
| Maintenance | Slate `#8A93A6 → #5C6477` |
| Cleaning | Green `#34C27E → #1FA45C` |
| Medical / Health | Red/coral `#F26D6D → #E04848` |
| Government | Gold/bronze `#D9A441 → #C08A2E` |
| Universities | Violet `#7C5CFC` |

---

## 3. Typography

**Script:** Arabic primary. Use a modern geometric Arabic sans with a heavy display weight. The reference matches the **Tajawal / Cairo / IBM Plex Sans Arabic** family of shapes.

- **Recommended primary:** `Tajawal` (clean, geometric, strong heavy weights) — or `Cairo` as an alternative.
- **Latin / numerals fallback:** a neutral grotesque (`Inter`, `IBM Plex Sans`) — used for "I Do Enterprise", brand names, and digits.
- **Digits:** Reference uses **Western Arabic numerals** (1,248 / 78% / +24%), *not* Eastern (١٢٤٨). Keep Western digits across the product.

### 3.1 Weights
`Bold/ExtraBold (700–800)` for headings · `Medium (500)` for sub-labels & buttons · `Regular (400)` for body.

### 3.2 Type scale (desktop)

| Role | Size | Weight | Line-height | Color | Notes |
|---|---|---|---|---|---|
| Display / H1 (hero) | 48–56px | 800 | 1.35 | White (on hero) | Tightly stacked 3–4 lines. |
| H2 (section heading) | 38–44px | 800 | 1.4 | Navy + Blue (two-tone) | One word/phrase highlighted in blue. |
| H3 (card / step title) | 20–22px | 700 | 1.4 | Navy or Blue | Module titles use blue. |
| Subtitle / lead | 16–18px | 400 | 1.8 | `--color-text-muted` | One line, centered under H2. |
| Body | 15–16px | 400 | 1.8 | `--color-text` | Arabic needs generous line-height. |
| Small / caption | 13–14px | 400–500 | 1.6 | `--color-text-muted` | Card descriptions, meta. |
| Eyebrow (badge) | 13–14px | 600 | 1 | `--color-primary` | Inside pill, often with a leading dot. |
| Stat number | 28–40px | 800 | 1.1 | Navy/Blue | Dashboard & story metrics. |

**Two-tone heading rule:** heading text is `--color-heading` (navy) with a single key phrase set in `--color-accent-blue`. Example: **منصة إدارة مؤسسية** (navy) **موحدة ومتكاملة** (blue).

> Mobile: scale H1 → ~32–36px, H2 → ~28–30px, body stays 15–16px. Maintain ≥1.7 line-height for Arabic.

---

## 4. Spacing System

**Base unit: 4px.** All spacing is a multiple of 4 (preferred steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120).

| Token | px | Use |
|---|---|---|
| `space-1` | 4 | Icon-to-text micro gaps. |
| `space-2` | 8 | Inline chips, badge padding. |
| `space-3` | 12 | Tight stacks. |
| `space-4` | 16 | Default in-card gap. |
| `space-6` | 24 | Card padding, grid gaps. |
| `space-8` | 32 | Large card padding, gap between heading & grid. |
| `space-12` | 48 | Eyebrow → heading → subtitle block. |
| `space-16` | 64 | Sub-section spacing. |
| `space-24` | 96 | **Section vertical padding (min).** |
| `space-30` | 120 | **Section vertical padding (spacious).** |

**Rules**
- **Section vertical rhythm:** 96–120px top & bottom on desktop (≈64px mobile).
- **Heading block:** eyebrow → 16px → H2 → 16px → subtitle → 48–64px → content.
- **Content → CTA:** 48–64px between the card grid and the centered CTA button.
- **Card grid gap:** 24px desktop.
- **Card internal padding:** 24–32px.

---

## 5. Grid System

- **Container max-width:** ~1200–1280px, centered, with 24px gutters (16px mobile).
- **Columns:** 12-column fluid grid, 24px gutter.
- **Content is centered** in the column; section headers are centered, content blocks (cards) span the container.

### Column counts by component (desktop → tablet → mobile)

| Block | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero feature cards | 3 | 3 | 1 (stack) |
| About feature rows | 1 (full-width rows) | 1 | 1 |
| Module cards | 5 | 2–3 | 1 |
| Step cards (how it works) | 4 (with connector line) | 2 | 1 (vertical, connector becomes vertical) |
| App-showcase floating cards | flanking device (3 L / 3 R) | stack below device | stack |
| Success-story cards | 1 (internal 3-col split) | 1 (stack internal) | 1 |
| Sector cards | 4 × 2 | 2 | 1 |
| Footer columns | 4 (3 link cols + logo) | 2 | 1 |

---

## 6. Card Styles

**Shared card recipe**
- Background: `#FFFFFF`
- Radius: **16–20px** (`--radius-card`)
- Shadow: soft, large-blur, blue-tinted, low opacity (see §11)
- Border: usually none; optional 1px `--color-border` on flat/tinted cards
- Padding: 24–32px
- Hover: slight lift (translateY -2 to -4px) + deeper shadow

### Card variants

| Variant | Where | Anatomy |
|---|---|---|
| **Feature card (hero)** | Hero bottom | Row: blue icon tile on the **leading (right)** edge + title + one-line subtitle. White, strong shadow, floats over hero. |
| **Feature row** | About section | Full-width tinted/white row: title + description right-aligned, icon tile at the **trailing (left)** edge. |
| **Module card** | Modules | Vertical: gradient icon tile (top) → blue title → muted description. Centered or right-aligned text. |
| **Step card** | How it works | Tinted light-blue rounded square holding a centered line icon, with a **numbered blue circle badge** at the top corner; title + desc below; connected by a horizontal line. |
| **Stat / metric card** | Dashboards, stories | Big number (800) + small muted label. Often grouped 3-up. |
| **Success-story card** | Stories | Horizontal split: **image panel on the right** (overlay + category badge top + company name bottom) · **content on the left** = 3 columns (Problem / Solution / Results) + a row of 3 stat metrics + "read full story" text link. |
| **Sector card** | Sectors | Image top half + white bottom half; a **circular white icon badge overlaps the seam**; blue title + muted description below. Short blue underline accent above title. |
| **Partner logo card** | Partners | White rounded card, centered grayscale/brand logo, used in a horizontal carousel. |
| **Floating info card** | Device mockups | Small white pill/card with icon + label + value (e.g., "+24% كفاءة التشغيل"); used to annotate product screenshots. |

---

## 7. CTA Patterns

All CTAs are **full pills** (`border-radius: 999px`). Directional arrows point **left (←)** = "forward" in RTL.

| Variant | Style | Context |
|---|---|---|
| **Primary (solid blue)** | `--color-primary` fill, white text, pill, with left arrow. Soft blue shadow. | Default section CTA ("عرض الكل", "اعرف المزيد", "استكشف…"). |
| **Inverse (white)** | White fill, blue text, pill, left arrow. | On the blue/gradient hero ("اطلب عرض تجريبي"). |
| **Glow CTA** | Light-blue fill on dark navy with a soft glow/halo. | Final dark CTA section. |
| **Nav button** | Small solid blue pill, white text. | "تواصل معنا" in the top nav (far left). |
| **Text link** | Blue text + small chevron (‹). No fill. | "اقرأ القصة كاملة", inline secondary actions. |

**Button sizing:** height ~48–56px (large/section CTA), ~40px (nav). Horizontal padding ~28–40px. Label weight 500–700.

**Placement:** section CTAs are **centered** below content. Supporting microcopy ("بدون عقود · بدون رسوم مخفية") sits directly under the final CTA in muted text.

---

## 8. Component Library (inventory)

**Navigation & shell**
1. **Top navbar** — white, sticky. Logo top-**right**; links flow right→left; language toggle (AR + flag); primary "Contact us" pill at the far **left**.
2. **Footer** — dark navy, 4 columns (Contact · More about us · Products · Logo+blurb+social), bottom copyright bar. Headings white, links muted, icons in circular tiles.

**Content primitives**
3. **Eyebrow badge** — pill, `--color-primary-50` fill, blue text, often a leading dot; centered above headings.
4. **Two-tone section heading** (navy + blue).
5. **Subtitle / lead** (muted, centered).
6. **Icon tile** — gradient rounded square (category) or solid-blue rounded square (feature), white glyph.
7. **Circular icon badge** — white circle holding a colored line icon (sector cards, footer).

**Cards** (see §6): Feature card · Feature row · Module card · Step card · Stat card · Success-story card · Sector card · Partner card · Floating info card.

**Actions:** Primary / Inverse / Glow / Nav button / Text link (see §7).

**Status & data**
8. **Status badge** — pill: Completed (green), In-progress (blue), Pending (amber). Soft tinted fill + colored text.
9. **Progress bar** — thin rounded track with colored fill (green for efficiency).
10. **Stat metric** — number + label, grouped 3-up.
11. **Charts** — dashboard style: blue **bar chart**, **line chart** (blue/multi-series), **donut chart** (multi-segment). Rounded bar caps, soft gridlines. (Used inside device mockups.)

**Marketing structures**
12. **Hero block** — gradient bg + network motif + city silhouette + laptop & phone mockups + headline + CTA + 3 feature cards.
13. **Step/timeline** — 4 numbered step cards joined by a connector line (RTL: 01 right → 04 left).
14. **App showcase panel** — large blue rounded container with devices centered and floating feature cards flanking, plus App Store / Google Play badges + QR code.
15. **Logo carousel** — partner cards with left/right arrows + pagination dots.
16. **Trust badges row** — icon + label trio (multi-language support · 99.9% uptime · secure data).
17. **Dark CTA banner** — navy, glow button, microcopy, trust badges, white heading.

**Decorative**
18. **Device mockups** (laptop / phone), **network/constellation graphic**, **city skyline**, **gradient blobs** — illustrative only; never carry essential text.

---

## 9. Section Hierarchy (page rhythm)

| # | Section | Background | Key elements |
|---|---|---|---|
| 0 | **Navbar** | White | Logo R, nav, AR toggle, Contact pill L. |
| 1 | **Hero** | Blue gradient + network motif | Headline, CTA (white), device mockups, 3 feature cards. |
| 2 | **About — من نحن** | White | Split: dashboard L / text + 3 feature rows R, blue CTA. |
| 3 | **Modules — الموديولات** | Light tint `#F4F6FE` | Eyebrow + two-tone H2 + 5 module cards + "View all" CTA. |
| 4 | **How it works — كيف يعمل النظام** | White | 4 connected numbered step cards. |
| 5 | **App showcase** | Blue gradient rounded panel | Devices + floating cards + store badges + QR. |
| 6 | **Success stories — قصص النجاح** | White | 3 split story cards + "View all" CTA. |
| 7 | **Sectors — القطاعات** | Light tint | 4×2 image sector cards + CTA. |
| 8 | **Partners — شركاء النجاح** | White | Logo carousel + arrows + dots. |
| 9 | **Final CTA** | Dark navy + glow | Glow button, trust badges, white heading. |
| 10 | **Footer** | Dark navy | 4 columns + copyright. |

**Background alternation:** White → White → Tint → White → Blue → White → Tint → White → Dark → Dark. Use tone changes to separate adjacent white sections; never place two identical full-bleed blues back-to-back without a white break.

---

## 10. RTL Rules

**Direction & layout**
- `dir="rtl"` on the document root; **text-align: right** by default.
- Reading flow is **right → left**: logo and first nav item are right-most; the primary nav action sits at the far **left**.
- Mirror all directional layout: leading edge = **right**, trailing edge = **left**. Padding/margins use logical properties (`margin-inline-start/end`) so they flip automatically.
- Ordered/sequenced items flow R→L: step numbers run **01 (right) → 04 (left)**; story columns run **Problem (right) → Solution → Results (left)**.

**Icons & arrows**
- "Forward / next / more" arrows point **left (←)**; "back / previous" point **right (→)**. Carousel "next" advances leftward.
- **Mirror directional icons** (arrows, chevrons, send, list-indent). **Do not mirror** logos, media controls, checkmarks, or universally-oriented glyphs (clock, magnifier).
- Icon-in-card placement is intentional and varies by component — match the reference: hero feature cards place the icon on the **right (leading)**; about feature rows place it on the **left (trailing)**; module/step/sector icons are **centered**.

**Typography & bidi**
- Use **Western Arabic numerals** (1,248 — not ١٢٤٨) for all stats, dates, prices.
- Latin runs stay **LTR inside RTL** (brand names "I Do Enterprise", "KAFD", "sela"; email `hello@i-do.sa`; phone `+966 11 000 0000`). Wrap with bidi isolation so they don't reorder.
- Phone numbers and emails render LTR even when right-aligned.
- Punctuation and quotation follow Arabic conventions; line-height ≥ 1.7 for Arabic body.

**Components**
- Charts, tables, and progress bars mirror: axis/labels start at the right; progress fills from the right.
- Form fields: labels right-aligned, inputs RTL, but free-form LTR content (URLs, codes) inside fields stays LTR.
- Shadows and gradients are direction-agnostic but the blue hero gradient/network motif sits on the **left** as counterweight to right-aligned headline copy — mirror this balance, not literal pixels, on new pages.

---

## 11. Elevation, Radius & Effects (reference tokens)

**Radius**
| Token | px | Use |
|---|---|---|
| `--radius-pill` | 999 | Buttons, badges, status pills. |
| `--radius-icon` | 14–16 | Gradient/solid icon tiles. |
| `--radius-card` | 16–20 | Cards. |
| `--radius-panel` | 32–40 | Large feature panels (app showcase, dark CTA). |

**Shadows** (soft, blue-tinted, low opacity)
| Token | Approx. | Use |
|---|---|---|
| `--shadow-sm` | `0 2px 8px rgba(30,80,200,0.06)` | Subtle cards, nav. |
| `--shadow-md` | `0 8px 24px rgba(30,80,200,0.10)` | Default cards. |
| `--shadow-lg` | `0 18px 48px rgba(20,40,80,0.14)` | Floating cards over imagery / hero. |

**Other effects**
- **Glow CTA:** outer blue glow `0 0 40px rgba(60,120,230,0.45)` on dark.
- **Gradients:** smooth 2-stop, low-contrast; never harsh. Hero adds a white network overlay + faint city skyline.
- **Image overlays:** sector/story images use a navy/blue translucent overlay so white text stays legible.
- **Transitions:** 150–250ms ease for hover lift, color, and shadow changes.

---

## 12. Do / Don't

**Do**
- Reuse the section template (eyebrow → two-tone H2 → subtitle → content → centered CTA).
- Keep one blue accent word per heading.
- Float white cards with soft blue shadows over tinted/blue backgrounds.
- Use pills for every button and badge; left-pointing arrows.
- Alternate background tones to pace long pages.

**Don't**
- Don't use hard borders for emphasis — use elevation.
- Don't mix Eastern Arabic numerals.
- Don't left-align Arabic body or place the primary nav action on the right.
- Don't introduce new accent hues outside the category set.
- Don't put essential copy inside decorative graphics or device mockups.

---

*Maintain this document as components evolve. When a new page introduces a pattern not covered here, add it as a named component with its tokens rather than improvising per-page styles.*
