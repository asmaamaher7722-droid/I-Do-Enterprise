# About Page — UX Architecture & Content Structure
### صفحة "من نحن" — I Do Enterprise

> **Single source of truth:** `DESIGN_SYSTEM.md`. Every section below maps to existing design-system components, tokens, and the RTL rules — no new patterns are invented.
> **Scope:** UX architecture + content structure only. No code, no UI mockups.
> **Direction:** Arabic-first, **RTL**. English/numerals follow the bidi rules in DESIGN_SYSTEM §10.

---

## 1. Page Goal

**Primary goal:** Convert credibility into a demo request. The homepage sells *what* the product does; the About page sells *who* is behind it and *why they can be trusted* with an enterprise's entire operation.

**Specific objectives**
1. Establish **trust & legitimacy** for a Saudi enterprise/government audience (real company, real mission, real backing).
2. Communicate **identity** — mission, vision, values — clearly and confidently.
3. Differentiate: explain **why "one connected platform"** is the founding belief, not a feature.
4. Provide **proof** — numbers, sectors, partners, outcomes — that de-risks the buying decision.
5. Funnel every scroll depth toward **one conversion action: اطلب عرض تجريبي (Request a demo)**, with **تواصل معنا (Contact us)** as the secondary action.

**Success signals:** demo-request submissions from this page, scroll depth to the impact/values sections, clicks into success stories / sectors, time-on-page for considered buyers.

---

## 2. User Journey

**Entry points**
- Top nav → **من نحن** (primary).
- Footer → "المزيد عنا → من نحن".
- Homepage "اعرف المزيد" (About section CTA).
- External: search / partner referral / sales deck link.

**Primary personas** (B2B, KSA enterprise & public sector)
- **Operations / Facility Director** — wants proof the platform actually unifies field + management.
- **CFO / Procurement** — wants stability, security, no hidden cost, vendor credibility.
- **CIO / IT** — wants integration story, uptime, data protection.
- **Government / Enterprise buyer** — wants compliance, governance, local presence.

**Journey stages (top → bottom of page)**

| Stage | User mindset | Page answers it with |
|---|---|---|
| **1. Arrive / Orient** | "Who are these people?" | About Hero — identity statement + intro + primary CTA. |
| **2. Understand purpose** | "What do they believe in?" | Story → Mission & Vision. |
| **3. Judge character** | "Are their values aligned with ours?" | Values grid. |
| **4. Evaluate substance** | "What actually makes them different?" | Why I Do Enterprise (differentiators). |
| **5. De-risk** | "Can I trust them at scale?" | Impact numbers → Journey/milestones → Partners → Security/trust. |
| **6. See it work** | "Has it worked for others like me?" | Sectors served + Success-story teaser. |
| **7. Decide / Act** | "OK — let's talk." | Final dark CTA band → demo / contact. |

**Exit / conversion paths:** Request demo (primary, repeated), Contact us (secondary), View success stories, View sectors, View modules.

---

## 3. Information Architecture

**Where it sits in the site**
```
Home
├─ من نحن (About)              ← THIS PAGE
│   └─ (in-page anchors, see below)
├─ الموديولات (Modules)
├─ بدأ التشغيل (How it works)
├─ الصناعات (Sectors)
├─ قصص النجاح (Success stories)
├─ الأسئلة الشائعة (FAQ)
└─ تواصل معنا (Contact)
```

**In-page anchor navigation** (optional sticky sub-nav, reuses eyebrow-pill styling, RTL order right→left):
`قصتنا · رؤيتنا ورسالتنا · قيمنا · لماذا نحن · أثرنا · رحلتنا · شركاؤنا`

**Content hierarchy (depth)**
- **L1 — Identity:** Hero statement, intro.
- **L2 — Purpose & character:** Story, Mission/Vision, Values.
- **L3 — Proof & substance:** Differentiators, Impact numbers, Journey, Partners, Security.
- **L4 — Application:** Sectors, Success stories.
- **L5 — Conversion:** Final CTA, Footer.

**Cross-links out:** Values/differentiators → Modules; Impact → Success stories; Sectors block → Sectors page. Each is a **text-link (‹)** per the CTA system, not a competing primary button.

---

## 4. Section Hierarchy

Background tone alternates per DESIGN_SYSTEM §9 (white ↔ `#F4F6FE` ↔ blue ↔ navy). Every section uses the standard template: **eyebrow → two-tone heading → subtitle → content → (optional) CTA**.

| # | Section (AR / EN) | Background | DS component reused | CTA |
|---|---|---|---|---|
| 0 | Navbar | White | Top navbar | "تواصل معنا" pill (nav) |
| 1 | **About Hero — من نحن** | Hero gradient + network motif | Hero block (text + supporting visual) | **Primary: اطلب عرض تجريبي** + secondary text link |
| 2 | **Our Story — قصتنا** | White | Split layout (text + visual) | text link → Modules |
| 3 | **Vision & Mission — رؤيتنا ورسالتنا** | Tint `#F4F6FE` | 2 feature cards / split | — |
| 4 | **Our Values — قيمنا** | White | Module-style card grid (3–4) | — |
| 5 | **Why I Do Enterprise — لماذا نحن** | Tint | Feature rows (icon + title + desc) | text link → Modules |
| 6 | **Our Impact — أثرنا بالأرقام** | Blue gradient panel | Stat-metric band (4 stats) | Inverse (white) CTA: اطلب عرض تجريبي |
| 7 | **Our Journey — رحلتنا** | White | Numbered timeline (step cards) | — |
| 8 | **Sectors we serve — القطاعات التي نخدمها** | Tint | Sector cards (condensed 4) | Primary CTA → Sectors page |
| 9 | **Partners — شركاء النجاح** | White | Logo carousel | — |
| 10 | **Trust & Security — الأمان والموثوقية** | White | Trust-badge row + feature rows | — |
| 11 | **Success-story teaser — قصص نجاح** | Tint | 1–2 success-story cards | Primary CTA → Success stories |
| 12 | **Final CTA — ابدأ اليوم** | Dark navy + glow | Dark CTA banner | **Glow CTA: اطلب عرض تجريبي** + microcopy |
| 13 | Footer | Dark navy | Footer | Footer links |

---

## 5. Content Blocks (per section)

### 1 — About Hero (من نحن)
- **Eyebrow:** `من نحن`
- **Heading (two-tone):** identity statement, e.g. **نُعيد تعريف** (navy) **التشغيل المؤسسي** (blue).
- **Lead paragraph:** 2–3 lines — what I Do Enterprise is and the belief behind it (one platform that connects operations, assets, suppliers).
- **Supporting visual:** brand/network motif or product collage (decorative — no essential copy inside, per DS §12).
- **Actions:** Primary pill `اطلب عرض تجريبي` (◄) · secondary text link `تواصل معنا`.
- *Optional micro-stats strip* under the lead (3 inline stats) for instant credibility.

### 2 — Our Story (قصتنا)
- **Eyebrow:** `قصتنا`
- **Heading (two-tone):** e.g. **بدأنا من** (navy) **مشكلة حقيقية** (blue).
- **Body:** 1–2 short paragraphs — the founding problem (fragmented, disconnected operations) → the insight → the solution.
- **Visual:** split-layout image/illustration (right) + text (left) per RTL.
- **Link:** `اكتشف الموديولات ‹`.

### 3 — Vision & Mission (رؤيتنا ورسالتنا)
- **Eyebrow:** `رؤيتنا ورسالتنا`
- **Two cards** (white, radius 20, `--shadow-md`):
  - **الرؤية (Vision):** aspirational one-liner + supporting sentence. Icon tile (eye/compass).
  - **الرسالة (Mission):** practical one-liner + supporting sentence. Icon tile (target/link).
- Optionally a single supporting line tying to Saudi Vision 2030 / operational excellence.

### 4 — Our Values (قيمنا)
- **Eyebrow:** `قيمنا`
- **Heading (two-tone):** **القيم التي** (navy) **توجّهنا** (blue).
- **Card grid (3–4 module-style cards)**, each: gradient icon tile + title + 1-line description. Suggested values:
  1. **التكامل / Integration** — كل شيء مترابط في نظام واحد.
  2. **الشفافية / Transparency** — رؤية لحظية وقرارات مبنية على البيانات.
  3. **البساطة / Simplicity** — قوة المؤسسة بواجهة سهلة.
  4. **الموثوقية / Reliability** — بيانات آمنة وتشغيل مستقر.

### 5 — Why I Do Enterprise (لماذا نحن)
- **Eyebrow:** `لماذا نحن`
- **Heading (two-tone):** **ما الذي** (navy) **يميّزنا** (blue).
- **Feature rows** (reuse About-section row pattern: title + desc, icon tile trailing/left). Reuse the homepage trio and extend:
  - **رؤية فورية** — لوحة تحكم موحدة في الوقت الفعلي.
  - **ربط الأعمال** — تكامل سلس بين الإدارات والفرق والمواقع.
  - **منصة واحدة** — كل ما تحتاجه دون تعقيدات.
  - **ذكاء اصطناعي مدمج** — قرارات أدق وتقارير متقدمة.
- **Link:** `استكشف القدرات ‹`.

### 6 — Our Impact (أثرنا بالأرقام)
- **Background:** blue gradient panel (radius 36).
- **Eyebrow (white pill):** `أثرنا`
- **Heading (white):** أرقام تتحدث عن نتائج.
- **Stat-metric band — 4 stats** (white numbers 800 + light labels), e.g.:
  `99.9% وقت تشغيل` · `8+ قطاعات` · `+X منشأة` · `+X مهمة مُدارة`.
  *(Use placeholder real figures; Western numerals.)*
- **CTA:** Inverse white pill `اطلب عرض تجريبي`.

### 7 — Our Journey (رحلتنا)
- **Eyebrow:** `رحلتنا`
- **Heading (two-tone):** **مسيرة** (navy) **مستمرة من النمو** (blue).
- **Numbered timeline** (reuse connected step cards, RTL order newest→ or earliest→ right). 4 milestones, each: number/year badge + icon + title + short line (e.g., التأسيس → إطلاق المنصة → التوسع القطاعي → الشراكات الكبرى).

### 8 — Sectors we serve (القطاعات التي نخدمها)
- **Eyebrow:** `القطاعات`
- **Heading (two-tone):** **نخدم** (navy) **مختلف القطاعات** (blue).
- **Condensed sector cards (4)** (image top + circle icon + title + desc) — a teaser, not the full 8.
- **CTA:** Primary pill `استكشف القطاعات` → Sectors page.

### 9 — Partners (شركاء النجاح)
- **Eyebrow:** `شركاء النجاح`
- **Heading (two-tone):** **شركاء** (navy) **نفخر بهم** (blue).
- **Logo carousel** (partner cards + ◄ ► arrows + dots).

### 10 — Trust & Security (الأمان والموثوقية)
- **Eyebrow:** `الموثوقية`
- **Heading (two-tone):** **بياناتك** (navy) **آمنة ومحمية** (blue).
- **Trust-badge row** (reuse): `دعم متعدد اللغات` · `وقت تشغيل 99.9%` · `بيانات آمنة ومحمية`.
- Optional 2–3 feature rows: data protection, compliance/governance, reliability.

### 11 — Success-story teaser (قصص نجاح)
- **Eyebrow (with dot):** `نتائج حقيقية · مؤسسات حقيقية`
- **Heading (two-tone):** **قصص** (navy) **نجاح حقيقية** (blue).
- **1–2 success-story cards** (image-right split + Problem/Solution/Results + 3 stat metrics + `اقرأ القصة كاملة ‹`).
- **CTA:** Primary pill `عرض الكل` → Success stories.

### 12 — Final CTA (ابدأ اليوم)
- **Background:** dark navy + glow.
- **Eyebrow (glow pill / white):** short reassurance.
- **Heading (white):** ابدأ في ربط عمليات منشأتك وتحقيق تحكم كامل اليوم.
- **Subtitle:** تحكم كامل، رؤية لحظية، وقرارات مبنية على بيانات — في منصة واحدة.
- **CTA:** Glow pill `اطلب عرض تجريبي` (◄).
- **Microcopy:** `بدون عقود · بدون رسوم مخفية`.
- **Trust badges row** above or below the button.

### 13 — Footer
- Shared footer (4 columns + copyright), unchanged from homepage.

---

## 6. CTA Locations

**Conversion is funneled, not scattered.** One primary action repeated at natural decision points; everything else is a quieter text-link.

| Location | CTA | Type | Destination |
|---|---|---|---|
| Navbar | تواصل معنا | Nav pill | Contact |
| Hero (1) | **اطلب عرض تجريبي** | **Primary** | Demo form |
| Hero (1) | تواصل معنا | Text link | Contact |
| Story (2) | اكتشف الموديولات ‹ | Text link | Modules |
| Why us (5) | استكشف القدرات ‹ | Text link | Modules |
| Impact (6) | **اطلب عرض تجريبي** | **Inverse** (on blue) | Demo form |
| Sectors (8) | استكشف القطاعات | Primary | Sectors page |
| Stories (11) | عرض الكل | Primary | Success stories |
| Final CTA (12) | **اطلب عرض تجريبي** | **Glow** | Demo form |
| Footer | section links | Links | Various |

**Rhythm:** primary demo CTA appears at **top (Hero)**, **mid (Impact)**, and **bottom (Final)** — three commitment points, one per journey third. Secondary/text links never compete visually with the primary (per CTA system in DS §7).

---

## 7. Desktop Structure (≥1024px)

- **Container:** max 1280px, 24px gutters, 12-col grid (DS §5).
- **Section rhythm:** 96–120px vertical padding; eyebrow→heading→subtitle centered; content below.
- **Layout per section:**

| Section | Desktop layout |
|---|---|
| Hero | Split: heading + CTA on the **right**, supporting visual + network motif on the **left**; optional 3 micro-stats below lead. |
| Story | 2-col split: image right · text left. |
| Vision & Mission | 2 cards side-by-side. |
| Values | 3–4 cards in one row (grid-gap 24). |
| Why us | Full-width feature rows stacked; icon trailing-left, text right-aligned. |
| Impact | Blue panel, 4 stats in one horizontal band. |
| Journey | 4 step cards in a row joined by a horizontal connector (numbers run **right→left**). |
| Sectors | 4 cards in one row. |
| Partners | Carousel, ~6–7 logo cards visible, arrows flank. |
| Trust | Badge trio in a row + optional rows. |
| Stories | 1–2 full-width split cards (image right, content left). |
| Final CTA | Centered glow button on dark panel; trust badges in a row. |
| Footer | 4 columns. |

- **Optional sticky in-page sub-nav** appears after Hero, anchors centered, RTL order.

---

## 8. Mobile Structure (≤768px)

- **Container:** full width, 16px gutters; type scale shrinks (H1 ~34, H2 ~28 per tokens); section padding ~64px.
- **Everything collapses to a single column**, reading order preserved (RTL, top→bottom).
- **Layout adaptations:**

| Section | Mobile behavior |
|---|---|
| Navbar | Collapses to logo (right) + hamburger; menu opens RTL; "تواصل معنا" pill inside menu. |
| Hero | Stack: heading + CTA first, visual below; micro-stats wrap 1×3 or 3×1. Primary CTA full-width. |
| Story | Stack: visual then text (or text-first for faster value). |
| Vision & Mission | Cards stack vertically. |
| Values | 1 card per row. |
| Why us | Rows stack; icon moves above or stays trailing per row pattern. |
| Impact | Stats stack 2×2 or 1×4 on the blue panel; CTA full-width. |
| Journey | Timeline becomes **vertical**; connector runs top→bottom; number badges align to the right edge (RTL). |
| Sectors | 1 card per row; CTA full-width. |
| Partners | Carousel shows 1–2 logos; swipe + dots. |
| Trust | Badges stack vertically. |
| Stories | Split card stacks: image on top, Problem/Solution/Results stack below; stats wrap. |
| Final CTA | Full-width glow button; trust badges stack; microcopy below. |
| Footer | Columns stack; contact first. |

- **CTAs:** primary buttons go **full-width** on mobile; text links remain inline.
- **Touch targets:** ≥44px height; pill buttons keep 999px radius.
- **In-page sub-nav** (if used) becomes a horizontally scrollable RTL chip row or folds into the menu.

---

## Consistency Guarantees (belongs to the same system)

- ✅ Reuses only existing components: hero block, eyebrow pill, two-tone heading, feature cards/rows, module cards, step timeline, stat band, sector cards, story cards, logo carousel, trust badges, dark CTA, footer.
- ✅ Same section template, background alternation, and 96–120px rhythm as the homepage.
- ✅ Same CTA system (pills, ◄ arrows, primary/inverse/glow/text-link hierarchy).
- ✅ Same tokens (`tokens.css`/`tokens.json`) for color, type, spacing, radius, shadow.
- ✅ Full RTL compliance (DS §10): right-leading layout, R→L sequencing, Western numerals, LTR bidi-isolation for brand names/email/phone.
- ✅ No new colors, no new component patterns, no UI/code introduced.
