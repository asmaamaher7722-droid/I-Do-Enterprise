# How It Works — UX Architecture & Content Structure
### صفحة "كيف يعمل النظام" — I Do Enterprise
*(Nav label: **بدأ التشغيل** · sitemap #3)*

> **Single source of truth:** `DESIGN_SYSTEM.md`. This page is the **full-page expansion of the homepage's 4-step "كيف يعمل النظام" section** — same steps, same components, deeper detail. No new visual language.
> **Scope:** UX architecture + content structure only. No code, no UI, no Figma.
> **Direction:** Arabic-first, **RTL** (DS §10).

---

# Page Goal

**Objective:** Remove the single biggest enterprise objection — *"how hard is this to actually adopt and run?"* — by showing a clear, low-risk path from first look to full operation, then converting that confidence into a **demo request**.

The homepage shows *what* the platform does and *that* it works in 4 steps. This page proves the **process is simple, guided, and safe**: what happens at each step, how the platform operates day-to-day (field ↔ platform ↔ management loop), how onboarding/configuration works, and what support surrounds the customer.

**Target user intent** (mid-to-late funnel)
- "I'm interested, but I don't understand the *process* of getting started."
- "How complex is implementation? Will it disrupt our current operations?"
- "What's the real day-to-day workflow once it's live?"
- "How long until we're operational, and what do *we* have to do vs. what does the vendor do?"
- "Who supports us during rollout?"

**Conversion logic:** This is a **de-risking page**. Every section reduces perceived effort/risk and ends pointing at the same primary action — `اطلب عرض تجريبي`. Secondary intent routes to **App & Dashboard**, **Modules**, **Integrations**, and **Contact**.

**Success signals:** demo requests from this page, scroll-through to the onboarding/support sections, clicks into App & Dashboard / Integrations, reduced bounce vs. homepage for considered buyers.

---

# User Journey

**Entry points**
- Top nav → **بدأ التشغيل**.
- Homepage 4-step section → "اعرف المزيد / كيف يعمل النظام".
- Footer → "المزيد عنا / كيف يعمل النظام".
- From Modules or App & Dashboard ("how do we get this running?").

**Primary personas** (KSA enterprise & public sector — DS audience)
- **Operations / Facility Director** — needs proof rollout won't disrupt field operations.
- **CIO / IT** — needs the configuration, data-migration, and integration story.
- **CFO / Procurement** — needs predictable timeline, low effort, no hidden complexity.
- **Project sponsor / change owner** — needs to see training & support.

**Journey stages (top → bottom)**

| Stage | User mindset | Section that answers it |
|---|---|---|
| 1. Orient | "What will this page tell me?" | Hero |
| 2. See the path | "What's the overall journey?" | The 4-Step Journey (overview) |
| 3. Go deep | "What exactly happens in each step?" | Step deep-dives ×4 |
| 4. Understand the model | "How does it actually work once live?" | Operating model (field ↔ platform ↔ management) |
| 5. See it in motion | "What does a real day look like?" | In-action showcase |
| 6. De-risk rollout | "How hard/long is setup? What's required of us?" | Onboarding & configuration timeline |
| 7. Trust the partner | "Who helps us through it?" | Support & success |
| 8. Resolve doubts | "I still have process questions." | Process FAQ teaser |
| 9. Act | "OK — show me." | Final CTA |

**Exit / conversion paths:** Request demo (primary, repeated), Contact (secondary), explore App & Dashboard / Modules / Integrations (lateral, text-links).

---

# Information Architecture

**Position in site**
```
Home
├─ من نحن (About)
├─ الموديولات (Modules)
├─ بدأ التشغيل / كيف يعمل النظام (How It Works)   ← THIS PAGE
├─ التطبيق ولوحة التحكم (App & Dashboard)
├─ التكاملات (Integrations)
├─ قصص النجاح (Case Studies)
└─ تواصل معنا / اطلب عرض (Contact / Request Demo)
```

**In-page anchor sub-nav** (optional sticky, eyebrow-pill styling, RTL order right→left):
`الخطوات الأربع · كيف يعمل النظام · التهيئة والإطلاق · الدعم`

**Content hierarchy (depth)**
- **L1 — Orientation:** Hero.
- **L2 — The path:** 4-step overview + step deep-dives.
- **L3 — The model:** operating loop + in-action showcase.
- **L4 — The rollout:** onboarding/configuration timeline + support.
- **L5 — Reassurance & conversion:** process FAQ, final CTA, footer.

**Cross-links out (quiet text-links, never competing with primary CTA):**
Operating model → **App & Dashboard**; Step "تهيئة النظام" → **Integrations** & **Modules**; In-action → **Case Studies**; Support → **Contact**.

---

# Section Hierarchy

Background tone alternates per DS §9 (white ↔ `#F4F6FE` ↔ blue ↔ navy). Every section uses the standard template: **eyebrow → two-tone heading → subtitle → content → (optional) CTA**.

| # | Section (AR / EN) | Background | DS component reused | CTA |
|---|---|---|---|---|
| 0 | Navbar | White | Top navbar | "تواصل معنا" nav pill |
| 1 | **Hero — كيف يعمل النظام** | Hero gradient + network motif | Hero block (text + supporting visual) | **Primary: اطلب عرض تجريبي** + secondary text link |
| 2 | **The 4-Step Journey — أربع خطوات نحو الإدارة المثالية** | White | Numbered step timeline (the homepage component) | — |
| 3 | **Step deep-dives ×4 — تفاصيل كل خطوة** | alternating White / Tint | Split layout (text + visual) per step; feature rows | text links → Demo / Modules |
| 4 | **Operating model — كيف يعمل النظام فعليًا** | Tint `#F4F6FE` | 3-stage flow (feature rows / icon tiles): الميدان ← المنصة ← الإدارة | text link → App & Dashboard |
| 5 | **In action — تنفيذ في الميدان ومتابعة لحظية** | Blue gradient panel | App-showcase panel (devices + floating cards) | Inverse (white) CTA: اطلب عرض تجريبي |
| 6 | **Onboarding & configuration — التهيئة والإطلاق** | White | Numbered timeline (4 phases) + feature rows | text link → Integrations |
| 7 | **Support & success — الدعم طوال الرحلة** | Tint | Feature rows + trust-badge row | text link → Contact |
| 8 | **Process FAQ — أسئلة شائعة عن التشغيل** | White | Accordion (text-only, new pattern — see "New content") | text link → full FAQ |
| 9 | **Final CTA — ابدأ التشغيل اليوم** | Dark navy + glow | Dark CTA banner | **Glow CTA: اطلب عرض تجريبي** + microcopy |
| 10 | Footer | Dark navy | Footer | Footer links |

---

# Content Blocks

### 1 — Hero (كيف يعمل النظام)
- **Eyebrow:** `كيف يعمل النظام`
- **Heading (two-tone):** e.g. **من الاستكشاف إلى** (navy) **التشغيل الكامل** (blue).
- **Lead:** 2 lines — a guided, low-risk path that connects your operations in one platform without disrupting the field.
- **Supporting visual:** the 4-step flow rendered as the device/network motif (decorative — no essential copy inside, DS §12).
- **Actions:** Primary pill `اطلب عرض تجريبي` (◄) · secondary text link `تواصل معنا`.
- *Optional micro-strip:* 3 reassurance stats (`إطلاق سريع` · `دعم مخصص` · `بدون توقف للعمليات`).

### 2 — The 4-Step Journey (overview)
- **Eyebrow:** `كيف يعمل النظام`
- **Heading (two-tone):** **أربع خطوات نحو** (navy) **الإدارة المثالية** (blue) *(identical to homepage for continuity).*
- **Subtitle:** ابدأ رحلتك مع I Do Enterprise في خطوات بسيطة.
- **Content:** the **numbered connected timeline** (RTL 01→04, right→left), reused verbatim:
  1. **استكشف المنصة** — تعرّف على الموديولات والإمكانيات.
  2. **احجز عرض تجريبي** — عرض عملي ومناقشة احتياجات منشأتك.
  3. **تهيئة النظام** — إعداد يناسب هيكل منشأتك وعملياتها.
  4. **ابدأ التشغيل** — إدارة العمليات اليومية ومتابعة الأداء.

### 3 — Step deep-dives ×4 (تفاصيل كل خطوة)
Four alternating split sections (image side flips per step for rhythm; RTL-respecting). Each block:
- **Step badge:** numbered blue circle (matches timeline).
- **Heading:** the step title.
- **Body:** 2–3 lines on *what happens, who's involved, what the customer gets*.
- **Mini feature rows (2–3):** concrete sub-points (icon tile + line).
- **Visual:** relevant product/illustration.
- Suggested depth:
  - **01 استكشف المنصة** → modules tour, capabilities, fit-check → link `استكشف الموديولات ‹`.
  - **02 احجز عرض تجريبي** → tailored live demo, needs discovery, Q&A → link `اطلب عرض تجريبي ‹`.
  - **03 تهيئة النظام** → org structure setup, data import, integrations, roles/permissions → link `التكاملات ‹`.
  - **04 ابدأ التشغيل** → go-live, daily field execution + management monitoring, reports → link `التطبيق ولوحة التحكم ‹`.

### 4 — Operating model (كيف يعمل النظام فعليًا)
- **Eyebrow:** `نموذج التشغيل`
- **Heading (two-tone):** **حلقة واحدة** (navy) **تربط الميدان بالإدارة** (blue).
- **3-stage flow** (icon tiles + feature rows, RTL right→left):
  **الميدان (Field)** → **المنصة (Platform)** → **الإدارة (Management)**.
  Each stage: icon tile + title + 1 line (capture & execute → unify & automate → monitor & decide in real time).
- **Link:** `شاهد التطبيق ولوحة التحكم ‹`.

### 5 — In action (تنفيذ في الميدان ومتابعة لحظية)
- **Background:** blue gradient panel (radius 36) — reuses the homepage app-showcase.
- **Eyebrow (white pill):** `تطبيق ذكي ولوحة تحكم متكاملة`
- **Heading (white):** تنفيذ في الميدان… ومتابعة لحظية من الإدارة.
- **Content:** laptop + phone mockups with **floating feature cards** (reused): متابعة لحظية · توزيع المهام · تحديث الحالة · رفع الصور والتقارير.
- **CTA:** Inverse white pill `اطلب عرض تجريبي`.

### 6 — Onboarding & configuration (التهيئة والإطلاق)
*Enterprise de-risk core.*
- **Eyebrow:** `التهيئة والإطلاق`
- **Heading (two-tone):** **إطلاق سلس** (navy) **بدون توقف لعملياتك** (blue).
- **Numbered timeline — 4 phases** (reuse step cards): **تحليل واكتشاف** → **الإعداد والتهيئة** → **نقل البيانات والتكاملات** → **التدريب والانطلاق (Go-live)**. Each with a short "what we do / what you do" line.
- **Supporting feature rows:** ما نتولّاه نحن مقابل ما تحتاجه منك (clarity on effort split); typical timeline; zero-disruption rollout.
- **Link:** `تعرّف على التكاملات ‹`.

### 7 — Support & success (الدعم طوال الرحلة)
- **Eyebrow:** `الدعم`
- **Heading (two-tone):** **لست وحدك** (navy) **في كل خطوة** (blue).
- **Feature rows:** فريق نجاح مخصص · تدريب الفرق · دعم متعدد القنوات · مكتبة موارد.
- **Trust-badge row (reused):** `دعم متعدد اللغات` · `وقت تشغيل 99.9%` · `بيانات آمنة ومحمية`.
- **Link:** `تواصل معنا ‹`.

### 8 — Process FAQ (أسئلة شائعة عن التشغيل)
- **Eyebrow:** `الأسئلة الشائعة`
- **Heading (two-tone):** **أسئلة شائعة** (navy) **عن التشغيل** (blue).
- **Accordion** of 4–6 process questions (timeline, disruption, data migration, training, security, what's required from us).
- **Link:** `كل الأسئلة الشائعة ‹` → FAQ page.

### 9 — Final CTA (ابدأ التشغيل اليوم)
- **Background:** dark navy + glow.
- **Heading (white):** ابدأ في ربط عمليات منشأتك وتحقيق تحكم كامل اليوم.
- **Subtitle:** خطوات بسيطة، دعم كامل، وإطلاق بدون تعقيد.
- **CTA:** Glow pill `اطلب عرض تجريبي` (◄).
- **Microcopy:** `بدون عقود · بدون رسوم مخفية`.
- **Trust badges** above/below button.

### 10 — Footer
Shared footer (unchanged).

---

# CTA Strategy

One primary action, funneled across the journey; everything else is a quieter text-link (DS §7).

| Location | CTA | Type | Destination |
|---|---|---|---|
| Navbar | تواصل معنا | Nav pill | Contact |
| Hero (1) | **اطلب عرض تجريبي** | **Primary** | Demo form |
| Hero (1) | تواصل معنا | Text link | Contact |
| Step 01 (3) | استكشف الموديولات ‹ | Text link | Modules |
| Step 02 (3) | اطلب عرض تجريبي ‹ | Text link | Demo form |
| Step 03 (3) | التكاملات ‹ | Text link | Integrations |
| Step 04 (3) | التطبيق ولوحة التحكم ‹ | Text link | App & Dashboard |
| Operating model (4) | شاهد التطبيق ولوحة التحكم ‹ | Text link | App & Dashboard |
| In action (5) | **اطلب عرض تجريبي** | **Inverse** (on blue) | Demo form |
| Onboarding (6) | تعرّف على التكاملات ‹ | Text link | Integrations |
| Support (7) | تواصل معنا ‹ | Text link | Contact |
| Process FAQ (8) | كل الأسئلة الشائعة ‹ | Text link | FAQ |
| Final CTA (9) | **اطلب عرض تجريبي** | **Glow** | Demo form |

**Rhythm:** primary demo CTA at **top (Hero)**, **mid (In action)**, **bottom (Final)** — one commitment point per journey third. Lateral text-links carry exploratory intent without diluting the primary action.

---

# Desktop Structure (≥1024px)

- **Container:** max 1280px, 24px gutters, 12-col (DS §5). Section padding 96–120px. Headings centered.

| Section | Desktop layout |
|---|---|
| Hero | Split: heading + CTA **right**, flow visual + network motif **left**; optional 3 micro-stats below lead. |
| 4-step overview | 4 step cards in one row, horizontal connector, numbers **right→left**. |
| Step deep-dives | 2-col split per step; image side **alternates** each step for rhythm; mini feature rows stacked. |
| Operating model | 3 stages in a horizontal flow (right→left) with connectors. |
| In action | Blue panel; devices centered; floating cards flank L/R. |
| Onboarding | 4 phase cards in a row (connector) + feature rows below. |
| Support | Feature rows + trust-badge trio in a row. |
| Process FAQ | Centered accordion, ~720px max width. |
| Final CTA | Centered glow button on dark panel; trust badges in a row. |
| Footer | 4 columns. |

- **Optional sticky in-page sub-nav** after Hero (anchors centered, RTL order).

---

# Mobile Structure (≤768px)

- **Container:** full width, 16px gutters; type scale shrinks (H1 ~34, H2 ~28 per tokens); section padding ~64px. **Single column**, RTL reading order preserved.

| Section | Mobile behavior |
|---|---|
| Navbar | Logo right + hamburger; RTL menu; "تواصل معنا" inside. |
| Hero | Stack: heading + full-width CTA first, visual below; micro-stats wrap. |
| 4-step overview | Timeline becomes **vertical**; connector top→bottom; number badges align right. |
| Step deep-dives | Each step stacks: visual then text (or text-first); mini rows stack. |
| Operating model | 3 stages stack vertically; connector vertical (arrows point downward). |
| In action | Devices stack; floating cards become a stacked list below. |
| Onboarding | Phase timeline vertical; feature rows stack. |
| Support | Feature rows stack; trust badges stack. |
| Process FAQ | Full-width accordion. |
| Final CTA | Full-width glow button; trust badges stack; microcopy below. |
| Footer | Columns stack; contact first. |

- **CTAs:** primary buttons **full-width** on mobile; text-links inline. Touch targets ≥44px; pills keep 999px radius. Sub-nav (if used) → horizontally scrollable RTL chip row or folds into menu.

---

# Reused Components

Pulled directly from the homepage / `DESIGN_SYSTEM.md` — no reinterpretation:

- **Top navbar** & **footer** (shared shells).
- **Hero block** (gradient + network motif + device/visual + headline + CTA).
- **Eyebrow pill**, **two-tone heading**, **muted subtitle**.
- **Numbered step timeline** (4-step journey *and* onboarding phases) — the exact "كيف يعمل النظام" component.
- **Split layout** (text + visual) for step deep-dives and operating model.
- **Feature rows** (icon tile + title + desc) for sub-points, operating model, support.
- **Icon tiles** (solid-blue for features; treatment per DS §6).
- **App-showcase panel** (blue gradient, devices, floating feature cards) for the "in action" section.
- **Trust-badge row** for support/security.
- **CTA system** (primary / inverse / glow / nav / text-link, ◄ arrows, pills).
- **Dark CTA banner** for the final conversion section.
- **Tokens** (`tokens.css` / `tokens.json`) for all color, type, spacing, radius, shadow, motion.

### New content — only if absolutely required
- **Accordion (Process FAQ):** the only pattern not on the homepage. Keep it **text-only and on-system** — eyebrow + two-tone heading, rows divided by the existing `--color-border` hairline, blue chevron (‹) using CTA-link styling, `--radius-card` container, `--shadow-sm`. No new colors, no new type. *If an accordion is undesirable, replace with a 2-column grid of Q&A text blocks using existing styles — no new component needed.*

---

# Consistency Checklist

- ✅ Reuses only existing components (navbar, hero, eyebrow, two-tone heading, step timeline, split layouts, feature rows, app-showcase panel, trust badges, dark CTA, footer).
- ✅ Same section template, background alternation (white↔`#F4F6FE`↔blue↔navy), and 96–120px rhythm as the homepage.
- ✅ Reuses the homepage "أربع خطوات نحو الإدارة المثالية" steps **verbatim** for narrative continuity.
- ✅ Same CTA system: pills, ◄ arrows, primary/inverse/glow/text-link hierarchy; one funneled primary action.
- ✅ Same tokens for color, type, spacing, radius, shadow (`tokens.css`/`tokens.json`).
- ✅ Full RTL compliance (DS §10): right-leading layout, R→L sequencing (steps & flows), Western numerals, LTR bidi-isolation for brand names/email/phone, charts/flows mirror right→left.
- ✅ Conversion-focused enterprise-SaaS logic: page de-risks adoption and routes every third to `اطلب عرض تجريبي`.
- ✅ No new design language, no random sections; the **only** net-new element (Process FAQ accordion) is optional and styled entirely from existing tokens.
