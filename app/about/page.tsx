import type { Metadata } from "next";
import type { SVGProps } from "react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumb from "@/components/Breadcrumb";
import { iconMap, type IconName, ArrowForward } from "@/components/Icons";
import { tintClasses, type Tint } from "@/components/ModuleCard";

export const metadata: Metadata = {
  title: "نبذة عنا — I Do Enterprise",
  description:
    "I DO Enterprise منصة ذكاء اصطناعي متكاملة تمكّن المؤسسات من إدارة العمليات والمرافق والأصول والموارد البشرية في نظام واحد موحد، مع رؤية لحظية وقرارات مبنية على البيانات.",
};

/* ───────────────── Content (editable in one place) ───────────────── */
const HERO_BADGES = [
  "ISO 27001 لحماية البيانات",
  "متوافق مع اللوائح الحكومية",
  "+50 مؤسسة تثق بنا",
];

const FEATURES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "clock", title: "رؤية فورية", desc: "لوحة تحكم موحدة تعرض جميع عمليات منشأتك في الوقت الفعلي." },
  { icon: "link", title: "ربط الأعمال", desc: "تكامل سلس بين جميع الإدارات والفرق والمواقع في منظومة واحدة." },
  { icon: "layers", title: "منصة واحدة", desc: "كل ما تحتاجه لإدارة منشأتك في مكان واحد دون تعقيدات." },
];

const SPOKES: { icon: IconName; label: string; tint: Tint }[] = [
  { icon: "wrench", label: "إدارة الصيانة", tint: "blue" },
  { icon: "box", label: "إدارة الأصول", tint: "orange" },
  { icon: "users", label: "الموارد البشرية", tint: "teal" },
  { icon: "cart", label: "إدارة المشتريات", tint: "green" },
  { icon: "chart", label: "تقارير وتحليلات", tint: "purple" },
  { icon: "building", label: "إدارة المرافق", tint: "rose" },
];

const CHALLENGES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "layers", title: "تشتت الأنظمة", desc: "تعدد الأنظمة والأدوات المنفصلة يجعل الحصول على صورة موحدة أمراً شبه مستحيل." },
  { icon: "clock", title: "تأخر التقارير", desc: "التقارير اليدوية تستغرق وقتاً طويلاً وتصدر بعد فوات الأوان لاتخاذ قرارات فعلية." },
  { icon: "search", title: "ضعف الرؤية", desc: "غياب الرؤية اللحظية على الأصول والمرافق والعمليات يؤدي إلى قرارات مبنية على بيانات قديمة." },
  { icon: "tasks", title: "العمليات اليدوية", desc: "الاعتماد على الأوراق والجداول اليدوية يرفع التكاليف ويزيد احتمالية الخطأ بشكل كبير." },
  { icon: "mapPin", title: "تعدد المواقع", desc: "إدارة مواقع متعددة بدون ربط مركزي يُصعّب التنسيق ويُضعف الكفاءة التشغيلية." },
  { icon: "wallet", title: "ارتفاع التكاليف", desc: "الازدواجية في الجهود وضعف تتبع الأصول يولّدان تسرباً مالياً مستمراً يصعب قياسه." },
];

const PROBLEMS = [
  "أنظمة منفصلة لكل قسم دون ربط أو تكامل",
  "تقارير يدوية متأخرة لا تعكس الوضع الفعلي",
  "صعوبة إدارة مواقع متعددة من مكان واحد",
  "ضياع البيانات وصعوبة تتبع الأصول والمعدات",
  "قرارات مبنية على حدس لا على بيانات فعلية",
  "تكاليف تشغيل مرتفعة وموارد مهدرة",
];
const SOLUTIONS = [
  "منصة موحدة تجمع جميع الأقسام في نظام واحد متكامل",
  "تقارير آنية تُولّد تلقائياً مع تنبيهات فورية",
  "لوحة تحكم مركزية تُشرف على جميع المواقع بسهولة",
  "تتبع رقمي دقيق لكل أصل مع سجل كامل للتاريخ",
  "ذكاء اصطناعي يُحلل البيانات ويقدم توصيات ذكية",
  "تحسين تلقائي للموارد يُخفض التكاليف بنسبة تصل 35%",
];

const REASONS: { icon: IconName; tint: Tint; title: string; desc: string }[] = [
  { icon: "bolt", tint: "teal", title: "رؤية فورية", desc: "مراقبة لحظية لجميع العمليات مع لوحات تحكم تفاعلية وتنبيهات آنية عند الانحراف." },
  { icon: "sparkles", tint: "purple", title: "قرارات مدعومة بالذكاء الاصطناعي", desc: "محرك ذكاء اصطناعي مدمج يُحلل البيانات ويقدم توصيات استباقية لتحسين الأداء." },
  { icon: "layers", tint: "blue", title: "عمليات موحدة", desc: "توحيد جميع العمليات التشغيلية في منصة واحدة، من الصيانة إلى الموارد البشرية إلى المشتريات." },
  { icon: "building", tint: "rose", title: "قابلية التوسع المؤسسي", desc: "بنية مرنة تنمو مع منشأتك وتدعم آلاف المستخدمين والمواقع دون أي تعقيد." },
  { icon: "wallet", tint: "orange", title: "تخفيض التكاليف التشغيلية", desc: "أتمتة العمليات وتحسين استخدام الموارد يخفضان التكاليف التشغيلية بشكل ملموس." },
  { icon: "mapPin", tint: "green", title: "إدارة متعددة المواقع", desc: "إدارة جميع فروعك ومواقعك من لوحة تحكم مركزية واحدة بكل سهولة." },
];

const IMPACT: { value: string; label: string; sub: string; icon: IconName; tint: Tint }[] = [
  { value: "98%", label: "امتثال SLA", sub: "معدل الالتزام باتفاقيات الخدمة", icon: "shield", tint: "teal" },
  { value: "35%", label: "توفير في التكاليف", sub: "تقليل التكاليف التشغيلية", icon: "wallet", tint: "green" },
  { value: "40%", label: "قرارات أسرع", sub: "متوسط تحسن سرعة القرار", icon: "bolt", tint: "blue" },
  { value: "24/7", label: "مراقبة مستمرة", sub: "دعم وتشغيل على مدار الساعة", icon: "clock", tint: "rose" },
  { value: "+50", label: "مؤسسة تثق بنا", sub: "عملاء في القطاعين العام والخاص", icon: "building", tint: "purple" },
  { value: "60%", label: "تقليل الأعطال", sub: "بفضل الصيانة الاستباقية", icon: "wrench", tint: "orange" },
];

const TRUST: { icon: IconName; title: string; desc: string }[] = [
  { icon: "sparkles", title: "رؤى مدعومة بالذكاء الاصطناعي", desc: "محرك ذكاء اصطناعي يُحلل أنماط البيانات ويُصدر تنبيهات استباقية قبل حدوث المشكلات." },
  { icon: "tasks", title: "سجلات التدقيق", desc: "توثيق كامل لكل إجراء في النظام مع سجلات تدقيق لا يمكن تعديلها لضمان المساءلة." },
  { icon: "users", title: "التحكم بالصلاحيات", desc: "نظام صلاحيات دقيق مبني على الأدوار يضمن وصول كل موظف فقط لما يحتاجه." },
  { icon: "database", title: "حوكمة البيانات", desc: "إطار متكامل لحوكمة البيانات يضمن امتثالك للوائح المحلية والدولية في حماية البيانات." },
  { icon: "lock", title: "بنية آمنة بالكامل", desc: "تشفير من طرف إلى طرف مع بروتوكولات أمان من المستوى المؤسسي تحافظ على سرية بياناتك." },
];
const COMPLIANCE = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "NCA متوافق", "هيئة الاتصالات معتمد"];

/* ───────────────── Tiny local glyphs (no new shared icons) ───────────────── */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};
const CheckMark = (p: SVGProps<SVGSVGElement>) => (
  <svg {...stroke} {...p}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);
const XMark = (p: SVGProps<SVGSVGElement>) => (
  <svg {...stroke} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const AlertTri = (p: SVGProps<SVGSVGElement>) => (
  <svg {...stroke} {...p}>
    <path d="M12 4l9 16H3l9-16z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);

/* App-store style badges (recreated — no trademark image assets) */
function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href="#"
        className="flex items-center gap-2 rounded-xl bg-[#0C1A38] px-4 py-2.5 text-white transition-opacity hover:opacity-90"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.33.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.73-4.13zM14.7 4.9c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z" />
        </svg>
        <span className="ltr text-start leading-tight">
          <span className="block text-[10px] text-white/70">Download on the</span>
          <span className="block text-[15px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-xl bg-[#0C1A38] px-4 py-2.5 text-white transition-opacity hover:opacity-90"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M4 3.5v17l13-8.5z" />
        </svg>
        <span className="ltr text-start leading-tight">
          <span className="block text-[10px] text-white/70">GET IT ON</span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

/* ───────────────── Hub & spoke diagram (what-is visual) ───────────────── */
const HUB_POS = [
  { t: 5, l: 50 },
  { t: 31, l: 11 },
  { t: 73, l: 11 },
  { t: 95, l: 50 },
  { t: 73, l: 89 },
  { t: 31, l: 89 },
];

function HubNode() {
  return (
    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-hero-gradient text-white shadow-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
      <span className="ltr mt-1 text-[15px] font-extrabold">IDO AI</span>
    </div>
  );
}

function SpokeCard({ s }: { s: (typeof SPOKES)[number] }) {
  const Icon = iconMap[s.icon];
  return (
    <div className="flex flex-col items-center gap-2 rounded-card border border-hairline bg-white p-3 shadow-md">
      <span className={`flex h-10 w-10 items-center justify-center rounded-tile ${tintClasses[s.tint]}`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-center text-[13px] font-bold text-strong">{s.label}</span>
    </div>
  );
}

function HubSpoke() {
  return (
    <>
      {/* Desktop: radial ring with dashed connectors */}
      <div className="relative mx-auto hidden h-[440px] w-full max-w-[460px] lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {HUB_POS.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.l}
              y2={p.t}
              stroke="#C9D9F7"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <HubNode />
        </div>
        {SPOKES.map((s, i) => (
          <div
            key={s.label}
            className="absolute w-[128px] -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${HUB_POS[i].t}%`, left: `${HUB_POS[i].l}%` }}
          >
            <SpokeCard s={s} />
          </div>
        ))}
      </div>

      {/* Mobile: hub on top + grid of spokes */}
      <div className="flex flex-col items-center gap-6 lg:hidden">
        <HubNode />
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
          {SPOKES.map((s) => (
            <SpokeCard key={s.label} s={s} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ───────────────── Hero dashboard (recreated UI, not an image) ───────────────── */
const HERO_KPIS: { delta: string; value: string; label: string; tint: Tint }[] = [
  { delta: "+5%", value: "94%", label: "كفاءة التشغيل", tint: "teal" },
  { delta: "+8%", value: "2,340", label: "الأصول المُدارة", tint: "purple" },
  { delta: "+3%", value: "98%", label: "الالتزام بالخدمة", tint: "green" },
  { delta: "+12%", value: "124", label: "طلبات الصيانة", tint: "blue" },
];
const MODULE_STATUS: { label: string; pct: number; color: string }[] = [
  { label: "الصيانة", pct: 98, color: "#1FA45C" },
  { label: "الأصول", pct: 94, color: "#2563EB" },
  { label: "الموارد البشرية", pct: 87, color: "#7C5CFC" },
  { label: "المشتريات", pct: 91, color: "#0FB6A0" },
];
const HERO_REPORTS: { t: string; s: string; cls: string }[] = [
  { t: "صيانة مكيف — المبنى A", s: "قيد التنفيذ", cls: "bg-[#F7EEDD] text-[#B0822E]" },
  { t: "استبدال مضخة المياه — الطابق 3", s: "مكتمل", cls: "bg-[#E4F6EC] text-[#1FA45C]" },
  { t: "فحص نظام الحريق — الجناح B", s: "معلق", cls: "bg-primary-100 text-primary-600" },
];
const RAIL: IconName[] = ["layers", "box", "users", "tasks", "shield"];

function HeroDashboard() {
  const bars = [40, 55, 48, 62, 52, 70, 60, 76, 68, 82, 74, 92];
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-white text-strong shadow-mockup">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-surface-light px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        </span>
        <span className="rounded-md bg-white px-3 py-1 text-[11px] font-semibold text-muted">
          <span className="ltr">I DO Enterprise</span> — لوحة التحكم الموحدة
        </span>
      </div>

      <div className="flex">
        {/* Icon rail (right in RTL) */}
        <div className="flex flex-col items-center gap-3 border-s border-hairline bg-surface-light/60 px-2 py-4">
          {RAIL.map((ic, i) => {
            const Icon = iconMap[ic];
            return (
              <span
                key={ic}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  i === 0 ? "bg-primary-600 text-white" : "text-text-subtle"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            );
          })}
        </div>

        {/* Main */}
        <div className="flex-1 space-y-3 p-3">
          {/* KPIs */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {HERO_KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-hairline bg-white p-2.5">
                <span className={`inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-bold ${tintClasses[k.tint]}`}>
                  <span className="ltr">{k.delta}</span>
                </span>
                <div className="mt-1.5 text-[18px] font-extrabold text-strong">
                  <span className="ltr">{k.value}</span>
                </div>
                <div className="text-[10px] text-muted">{k.label}</div>
              </div>
            ))}
          </div>

          {/* Module status + monthly chart */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-hairline bg-white p-3">
              <div className="mb-2 text-[11px] font-bold text-strong">حالة الموديولات</div>
              <div className="space-y-2">
                {MODULE_STATUS.map((m) => (
                  <div key={m.label}>
                    <div className="mb-1 flex items-center justify-between text-[10px]">
                      <span className="text-muted">{m.label}</span>
                      <span className="ltr font-bold" style={{ color: m.color }}>
                        {m.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-light2">
                      <div className="h-full rounded-full" style={{ width: `${m.pct}%`, backgroundColor: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-hairline bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold text-strong">أداء العمليات الشهري</span>
                <span className="ltr text-[10px] text-text-subtle">2025</span>
              </div>
              <div className="flex h-20 items-end justify-between gap-1">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-sm"
                    style={{ height: `${h}%`, backgroundColor: i === bars.length - 1 ? "#2563EB" : "#C9D9F7" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Latest reports */}
          <div className="rounded-xl border border-hairline bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-strong">آخر البلاغات</span>
              <span className="text-[10px] font-semibold text-primary-600">عرض الكل</span>
            </div>
            <div className="space-y-2">
              {HERO_REPORTS.map((r) => (
                <div key={r.t} className="flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] text-text">{r.t}</span>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.cls}`}>
                    {r.s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Page ───────────────── */
export default function AboutPage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-24">
          <Breadcrumb tone="dark" items={[{ label: "الرئيسية", href: "/" }, { label: "من نحن" }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                منصة مؤسسية متكاملة
              </span>
              <h1 className="text-[30px] font-extrabold leading-tight md:text-[40px] lg:text-[48px]">
                منصة تشغيل مؤسسي ذكي موحدة لجميع عمليات منشأتك
              </h1>
              <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
                <span className="ltr font-semibold">I DO Enterprise</span> هي منصة
                ذكاء اصطناعي متكاملة تمكّن المؤسسات من إدارة العمليات والمرافق
                والأصول والموارد البشرية في نظام واحد موحد، مع رؤية لحظية وقرارات
                مبنية على البيانات.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" surface="dark" withArrow>
                  اطلب عرض تجريبي
                </Button>
                <Button href="/modules" variant="secondary" surface="dark">
                  استكشف المنصة
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2.5">
                {HERO_BADGES.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white/90"
                  >
                    <CheckMark className="h-3.5 w-3.5 text-[#5BE3A7]" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:ps-4">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* 2 · What is I Do Enterprise */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <HubSpoke />
          </div>
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-[26px] font-extrabold leading-tight text-strong md:text-[32px] lg:text-[40px]">
              منصة إدارة مؤسسية{" "}
              <span className="text-primary-600">موحدة ومتكاملة</span>
            </h2>
            <p className="text-[16px] leading-8 text-muted md:text-[17px]">
              <span className="ltr font-semibold text-strong">I DO Enterprise</span>{" "}
              هي منصة ذكية متكاملة تمكّن المؤسسات والشركات من إدارة جميع عملياتها
              التشغيلية بكفاءة عالية وشفافية كاملة، من خلال واجهة رقمية سهلة
              الاستخدام مدعومة بالذكاء الاصطناعي.
            </p>
            <ul className="flex flex-col gap-3">
              {FEATURES.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <li
                    key={f.title}
                    className="flex items-start gap-4 rounded-tile bg-surface-light p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[16px] font-bold text-strong">{f.title}</span>
                      <span className="text-[14px] leading-6 text-muted">{f.desc}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <div>
              <Button href="/modules" variant="primary" withArrow>
                اعرف المزيد
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Challenges of traditional operations */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="التحديات"
            title={
              <>
                تحديات التشغيل المؤسسي{" "}
                <span className="text-[#DC2F36]">التقليدي</span>
              </>
            }
            subtitle="المؤسسات الكبرى تعاني من تشتت العمليات وضعف الرؤية، وهذا ما دفعنا لبناء حل شامل يحل كل هذه التحديات."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <div
                  key={c.title}
                  className="flex flex-col gap-4 rounded-card border border-hairline bg-white p-6 shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-tile bg-[#FBE7E8] text-[#DC2F36]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[18px] font-bold text-strong">{c.title}</h3>
                  <p className="text-[15px] leading-7 text-muted">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · Problem → Solution */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="المشكلة والحل"
            title={
              <>
                من التحدي إلى{" "}
                <span className="text-primary-600">الحل المتكامل</span>
              </>
            }
            subtitle="نفس التحدّيات تتكرر في كل منشأة كبيرة — وهذه هي الطريقة التي تحلّها بها المنصة."
          />
          <div className="mt-12 grid w-full gap-8 lg:grid-cols-2">
            {/* Challenges (right in RTL) */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-tile bg-[#FBE7E8] text-[#DC2F36]">
                  <AlertTri className="h-5 w-5" />
                </span>
                <h3 className="text-[18px] font-bold text-[#DC2F36]">التحديات الشائعة</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {PROBLEMS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 rounded-tile border border-[#F4DADB] bg-[#FDF4F4] p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBE7E8] text-[#DC2F36]">
                      <XMark className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-6 text-strong">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Solutions (left in RTL) */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                  <ArrowForward className="h-5 w-5" />
                </span>
                <h3 className="text-[18px] font-bold text-primary-600">
                  حلول <span className="ltr">I DO Enterprise</span>
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {SOLUTIONS.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 rounded-tile border border-primary-100 bg-[#F4F8FF] p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <CheckMark className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-6 text-strong">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Why choose us */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="لماذا تختار I DO Enterprise؟"
            title={
              <>
                ست مزايا <span className="text-primary-600">تُميّزنا</span>
              </>
            }
            subtitle="منصة مصممة خصيصاً للمؤسسات التي تدير عمليات معقدة وتطمح لتحقيق أعلى مستويات الكفاءة."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => {
              const Icon = iconMap[r.icon];
              return (
                <div
                  key={r.title}
                  className="flex flex-col gap-4 rounded-card border border-hairline bg-white p-6 shadow-md transition-all duration-150 hover:-translate-y-1 hover:border-[#D4E0F5] hover:shadow-lg"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-tile ${tintClasses[r.tint]}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[18px] font-bold leading-7 text-strong">{r.title}</h3>
                  <p className="text-[15px] leading-7 text-muted">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 · Impact numbers */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="أثرنا بالأرقام"
            title={
              <>
                أرقام تثبت <span className="text-primary-600">قوة المنصة</span>
              </>
            }
            subtitle="نتائج موثقة من عملائنا في القطاع الحكومي والمستشفيات والمطارات والمراكز التجارية."
          />
          <div className="mt-12 grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
            {IMPACT.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 rounded-card border border-hairline bg-white p-6 text-center shadow-md"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-tile ${tintClasses[s.tint]}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[34px] font-extrabold leading-none text-primary-600 md:text-[40px]">
                    <span className="ltr">{s.value}</span>
                  </span>
                  <span className="text-[16px] font-bold text-strong">{s.label}</span>
                  <span className="text-[13px] leading-6 text-muted">{s.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 · Trust & Security */}
      <section className="section-y bg-hero-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="الأمان والموثوقية"
            title="ثقتك هي أولويتنا القصوى"
            subtitle="بنية أمان مؤسسية متكاملة تُحافظ على سرية بياناتك وتضمن استمرارية عملياتك دون انقطاع."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST.map((t) => {
              const Icon = iconMap[t.icon];
              return (
                <div
                  key={t.title}
                  className="flex flex-col gap-3 rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-white/15 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold text-white">{t.title}</h3>
                  <p className="text-[13px] leading-6 text-white/75">{t.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {COMPLIANCE.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[14px] font-semibold text-white/90"
              >
                <CheckMark className="h-4 w-4 text-[#5BE3A7]" />
                <span className="ltr">{c}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Final CTA */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[36px] bg-hero-gradient px-6 py-16 text-center text-white md:px-12 lg:py-20">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
              ابدأ اليوم
            </span>
            <h2 className="mx-auto mt-5 max-w-[760px] text-[28px] font-extrabold leading-tight md:text-[36px] lg:text-[44px]">
              ابدأ رحلة التحول التشغيلي اليوم
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-8 text-white/85 md:text-[18px]">
              وحّد العمليات والمرافق والأصول والقوى العاملة في منصة واحدة مدعومة
              بالذكاء الاصطناعي.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" surface="dark" withArrow>
                اطلب عرض تجريبي
              </Button>
              <Button href="/modules" variant="secondary" surface="dark">
                استكشف المنصة
              </Button>
            </div>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
