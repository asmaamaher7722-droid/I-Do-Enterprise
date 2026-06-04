import type { Metadata } from "next";
import type { SVGProps } from "react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import StatsBlock from "@/components/StatsBlock";
import CTASection from "@/components/CTASection";
import DashboardMockup from "@/components/DashboardMockup";
import { iconMap, type IconName } from "@/components/Icons";
import { STEPS } from "@/lib/modules";

export const metadata: Metadata = {
  title: "كيف يعمل النظام — I Do Enterprise",
  description:
    "من الاستكشاف حتى التشغيل الكامل في خطوات واضحة — تعرّف على نموذج التشغيل، مراحل التهيئة، والدعم الذي يرافقك في كل خطوة.",
};

/* ── Local chevron (matches Icons.tsx stroke style) — used only by the FAQ ── */
function Chevron(p: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* ── Page content (the only net-new content; styled entirely from existing tokens) ── */

const STEP_DETAILS: {
  num: string;
  icon: IconName;
  title: string;
  highlight: string;
  paragraph: string;
  points: { icon: IconName; label: string; sub: string }[];
  link: { label: string; href: string };
}[] = [
  {
    num: "01",
    icon: "compass",
    title: "استكشف المنصة و",
    highlight: "تعرّف على إمكاناتها",
    paragraph:
      "تعرّف على الوحدات والإمكانيات المتاحة، وكيف يربط النظام جميع عمليات منشأتك في منصة واحدة موحّدة.",
    points: [
      { icon: "compass", label: "جولة في الوحدات", sub: "تعرّف على ما يناسب منشأتك" },
      { icon: "chart", label: "الإمكانيات والمزايا", sub: "رؤية واضحة لما يقدمه النظام" },
      { icon: "link", label: "نموذج التشغيل الموحّد", sub: "كيف تترابط العمليات معًا" },
    ],
    link: { label: "استكشف الوحدات", href: "/modules" },
  },
  {
    num: "02",
    icon: "shield",
    title: "احجز عرضًا ",
    highlight: "تجريبيًا مخصصًا",
    paragraph:
      "تواصل مع فريقنا للحصول على عرض عملي للنظام ومناقشة احتياجات منشأتك ومطابقتها مع إمكانات المنصة.",
    points: [
      { icon: "users", label: "عرض عملي مباشر", sub: "من فريق متخصص" },
      { icon: "sliders", label: "مطابقة الاحتياجات", sub: "حلول مهيأة لمنشأتك" },
      { icon: "shield", label: "إجابات واضحة", sub: "دون أي التزام" },
    ],
    link: { label: "اطلب عرض تجريبي", href: "/contact" },
  },
  {
    num: "03",
    icon: "sliders",
    title: "تهيئة النظام ",
    highlight: "بما يناسب منشأتك",
    paragraph:
      "نُعدّ النظام بما يتوافق مع هيكل منشأتك وعملياتها، مع نقل بياناتك وربط أنظمتك الحالية بسلاسة وأمان.",
    points: [
      { icon: "sliders", label: "إعداد مخصص", sub: "حسب هيكل منشأتك" },
      { icon: "sync", label: "نقل البيانات", sub: "دون فقدان أو ازدواجية" },
      { icon: "link", label: "ربط الأنظمة", sub: "تكامل مع أدواتك الحالية" },
    ],
    link: { label: "تعرّف على التكاملات", href: "/integrations" },
  },
  {
    num: "04",
    icon: "rocket",
    title: "ابدأ التشغيل و",
    highlight: "تابع الأداء لحظيًا",
    paragraph:
      "انطلق في إدارة عملياتك اليومية من الميدان، وتابع الأداء واتخذ القرارات من لوحة تحكم موحّدة في الوقت الفعلي.",
    points: [
      { icon: "rocket", label: "انطلاقة سلسة", sub: "دعم كامل عند البدء" },
      { icon: "gauge", label: "متابعة الأداء", sub: "مؤشرات لحظية" },
      { icon: "chart", label: "قرارات مبنية على البيانات", sub: "تقارير دقيقة" },
    ],
    link: { label: "شاهد التطبيق ولوحة التحكم", href: "/app" },
  },
];

const FLOW: { icon: IconName; stage: string; title: string; desc: string }[] = [
  {
    icon: "users",
    stage: "الميدان",
    title: "التقاط وتنفيذ",
    desc: "فرق الميدان تنفّذ المهام وترفع التحديثات والصور مباشرة من موقع العمل.",
  },
  {
    icon: "link",
    stage: "المنصة",
    title: "ربط وأتمتة",
    desc: "المنصة توحّد البيانات وتربط جميع العمليات والوحدات تلقائيًا في مكان واحد.",
  },
  {
    icon: "gauge",
    stage: "الإدارة",
    title: "متابعة وقرار",
    desc: "الإدارة تراقب الأداء وتتخذ القرارات من لوحة تحكم لحظية وشاملة.",
  },
];

const SHOWCASE: { icon: IconName; label: string }[] = [
  { icon: "sync", label: "متابعة العمليات لحظيًا" },
  { icon: "users", label: "توزيع المهام على الفريق" },
  { icon: "chart", label: "تقارير وتحليلات دقيقة" },
  { icon: "box", label: "رفع الصور والتقارير" },
];

const ONBOARDING: { num: string; icon: IconName; title: string; desc: string }[] = [
  { num: "01", icon: "compass", title: "تحليل واكتشاف", desc: "نفهم عملياتك واحتياجاتك ونحدد نطاق التطبيق بدقة." },
  { num: "02", icon: "sliders", title: "الإعداد والتهيئة", desc: "نُعدّ النظام والوحدات بما يناسب هيكل منشأتك." },
  { num: "03", icon: "sync", title: "نقل البيانات والتكاملات", desc: "ننقل بياناتك ونربط أنظمتك الحالية بأمان." },
  { num: "04", icon: "rocket", title: "التدريب والانطلاق", desc: "ندرّب فرقك ونطلق النظام دون توقف لعملياتك." },
];

const WE_DO = ["الإعداد والتهيئة الكاملة", "نقل البيانات الحالية بأمان", "ربط الأنظمة والتكاملات", "تدريب الفرق على النظام"];
const YOU_DO = ["تحديد المسؤولين عن المشروع", "تزويدنا بالبيانات الأساسية", "اعتماد هيكل العمليات", "مشاركة الفرق في التدريب"];

const SUPPORT: { icon: IconName; title: string; desc: string }[] = [
  { icon: "users", title: "فريق نجاح مخصص", desc: "يرافقك خطوة بخطوة من الإعداد حتى التشغيل الكامل." },
  { icon: "sliders", title: "تدريب الفرق", desc: "جلسات تدريب عملية لاستخدام أمثل لكل وحدة." },
  { icon: "sync", title: "دعم متعدد القنوات", desc: "استجابة سريعة عبر قنوات الدعم المختلفة." },
];

const TRUST: { icon: IconName; label: string }[] = [
  { icon: "link", label: "دعم متعدد اللغات" },
  { icon: "gauge", label: "وقت تشغيل 99.9%" },
  { icon: "shield", label: "بيانات آمنة ومحمية" },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "كم يستغرق تطبيق النظام؟",
    a: "يعتمد ذلك على حجم منشأتك ونطاق التطبيق، لكن الإعداد الأساسي يتم خلال فترة قصيرة بفضل فريق التهيئة المخصص ونهج الإطلاق التدريجي.",
  },
  {
    q: "هل سيؤثر التطبيق على سير عملياتنا؟",
    a: "لا، نتبع نهج إطلاق تدريجي يضمن استمرارية عملياتك دون توقف، مع الانتقال السلس من أنظمتك الحالية.",
  },
  {
    q: "كيف يتم نقل بياناتنا الحالية؟",
    a: "نتولّى نقل بياناتك بأمان ودون ازدواجية، مع التحقق من سلامتها واكتمالها قبل الانطلاق الفعلي.",
  },
  {
    q: "هل تتكامل المنصة مع أنظمتنا الحالية؟",
    a: "نعم، توفّر المنصة تكاملات مرنة تتيح ربط أنظمتك وأدواتك الحالية للعمل ضمن منظومة واحدة موحّدة.",
  },
  {
    q: "ما الدعم المتاح بعد الإطلاق؟",
    a: "يرافقك فريق نجاح مخصص ودعم متعدد القنوات وتدريب مستمر لفرقك لضمان أفضل استفادة من النظام.",
  },
  {
    q: "هل بياناتنا آمنة؟",
    a: "نعم، بياناتك مشفّرة ومحمية وفق أعلى معايير الأمان، مع نسخ احتياطي دوري وتحكم كامل في الصلاحيات.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ───────── A · Hero ───────── */}
      <section className="bg-hero-gradient">
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col gap-6 text-white">
            <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
              كيف يعمل النظام
            </span>
            <h1 className="text-[32px] font-extrabold leading-tight md:text-[44px] lg:text-[56px]">
              من الاستكشاف إلى{" "}
              <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                التشغيل الكامل
              </span>
            </h1>
            <p className="max-w-prose text-[16px] leading-8 text-white/80 md:text-[18px]">
              مسار واضح ومنخفض المخاطر يربط عمليات منشأتك في منصة واحدة — خطوات
              بسيطة، تهيئة مدروسة، ودعم كامل دون توقف لعملياتك.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" withArrow>
                اطلب عرض تجريبي
              </Button>
              <Button href="#steps" variant="secondary" surface="dark">
                استكشف الخطوات
              </Button>
            </div>
          </div>

          <div className="lg:ps-6">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ───────── B · The 4-step journey (overview) ───────── */}
      <section id="steps" className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="كيف يعمل النظام"
            title={
              <>
                أربع خطوات نحو الإدارة{" "}
                <span className="text-primary-600">المثالية</span>
              </>
            }
            subtitle="ابدأ رحلتك مع I Do Enterprise في خطوات بسيطة لإدارة وتشغيل منشأتك بكفاءة."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.num} className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -start-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-[13px] font-bold text-white">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="mb-2 text-[18px] font-bold text-strong">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-6 text-muted">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── C · Step deep-dives ×4 ───────── */}
      {STEP_DETAILS.map((d, idx) => {
        const Icon = iconMap[d.icon];
        const textFirst = idx % 2 === 0;
        const bg = idx % 2 === 0 ? "bg-surface-light" : "bg-white";

        return (
          <section key={d.num} className={`section-y ${bg}`}>
            <div className="container-x grid items-center gap-12 lg:grid-cols-2">
              {/* Text side */}
              <div className={`flex flex-col gap-6 ${textFirst ? "" : "lg:order-2"}`}>
                <span className="eyebrow w-fit">{`الخطوة ${d.num}`}</span>
                <h2 className="text-[26px] font-extrabold leading-tight text-strong md:text-[32px] lg:text-[40px]">
                  {d.title}
                  <span className="text-primary-600">{d.highlight}</span>
                </h2>
                <p className="max-w-prose text-[16px] leading-8 text-muted">
                  {d.paragraph}
                </p>
                <ul className="flex flex-col gap-4">
                  {d.points.map((c) => {
                    const CapIcon = iconMap[c.icon];
                    return (
                      <li key={c.label} className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                          <CapIcon className="h-5 w-5" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[16px] font-semibold text-strong">
                            {c.label}
                          </span>
                          <span className="text-[14px] text-muted">{c.sub}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <Button href={d.link.href} variant="text" withArrow>
                    {d.link.label}
                  </Button>
                </div>
              </div>

              {/* Visual side */}
              <div className={`${textFirst ? "lg:order-2" : "lg:order-1"} lg:px-4`}>
                <div className="relative">
                  <DashboardMockup />
                  <span className="absolute -top-4 end-4 flex h-12 w-12 items-center justify-center rounded-tile bg-white text-primary-600 shadow-lg">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="absolute -top-4 start-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-[16px] font-extrabold text-white shadow-lg">
                    {d.num}
                  </span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ───────── D · Operating model ───────── */}
      <section id="model" className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="نموذج التشغيل"
            title={
              <>
                حلقة واحدة تربط الميدان{" "}
                <span className="text-primary-600">بالإدارة</span>
              </>
            }
            subtitle="من تنفيذ المهام في الميدان إلى المتابعة واتخاذ القرار من الإدارة — كل ذلك في منظومة واحدة."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {FLOW.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div
                  key={f.stage}
                  className="relative flex flex-col items-start gap-4 rounded-card border border-hairline bg-white p-6 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="eyebrow">{f.stage}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-strong">{f.title}</h3>
                  <p className="text-[14px] leading-6 text-muted">{f.desc}</p>
                  {i < FLOW.length - 1 && (
                    <span className="absolute -start-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm lg:flex">
                      <ArrowLeftMini />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <Button href="/app" variant="text" withArrow>
              شاهد التطبيق ولوحة التحكم
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── E · In action (app & dashboard showcase) ───────── */}
      <section className="bg-hero-gradient">
        <div className="container-x section-y flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="تطبيق ذكي ولوحة تحكم متكاملة"
            title={
              <>
                تنفيذ في الميدان... ومتابعة لحظية من{" "}
                <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                  الإدارة
                </span>
              </>
            }
            subtitle="تابع عملياتك من أي مكان عبر التطبيق، وأدِر منشأتك من خلال لوحة تحكم شاملة."
          />

          <div className="mt-14 w-full max-w-3xl">
            <DashboardMockup />
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHOWCASE.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-card border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tile bg-white text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-semibold text-white">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="primary" withArrow>
              اطلب عرض تجريبي
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── F · Onboarding & configuration ───────── */}
      <section id="onboarding" className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="التهيئة والإطلاق"
            title={
              <>
                إطلاق سلس بدون توقف{" "}
                <span className="text-primary-600">لعملياتك</span>
              </>
            }
            subtitle="نتولّى الإعداد ونقل البيانات والتدريب، ضمن مراحل واضحة تضمن انتقالًا آمنًا."
          />

          {/* Phase timeline */}
          <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ONBOARDING.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={p.num} className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -top-2 -start-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-[13px] font-bold text-white">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="mb-2 text-[18px] font-bold text-strong">{p.title}</h3>
                  <p className="text-[14px] leading-6 text-muted">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* What we do / what you do */}
          <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: "ما نتولّاه نحن", items: WE_DO },
              { title: "ما نحتاجه منك", items: YOU_DO },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-card border border-hairline bg-surface-light p-6 md:p-8"
              >
                <h3 className="mb-5 text-[18px] font-bold text-strong">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                      </span>
                      <span className="text-[15px] text-strong">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/integrations" variant="text" withArrow>
              تعرّف على التكاملات
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── G · Support & success ───────── */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="الدعم"
            title={
              <>
                لست وحدك في{" "}
                <span className="text-primary-600">كل خطوة</span>
              </>
            }
            subtitle="فريق متخصص ودعم مستمر يرافقانك من اليوم الأول وطوال رحلة التشغيل."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {SUPPORT.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.title}
                  className="flex flex-col items-start gap-3 rounded-card bg-white p-6 shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold text-strong">{s.title}</h3>
                  <p className="text-[14px] leading-6 text-muted">{s.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {TRUST.map((t) => {
              const Icon = iconMap[t.icon];
              return (
                <div
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-[14px] font-semibold text-strong shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary-600" />
                  {t.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── H · Proof band ───────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <StatsBlock value="%98" label="رضا العملاء" />
            <StatsBlock value="99.9%" label="وقت التشغيل" />
            <StatsBlock value="24/7" label="دعم متواصل" />
            <StatsBlock value="+20" label="منشأة تثق بنا" />
          </div>
        </div>
      </section>

      {/* ───────── I · Process FAQ ───────── */}
      <section id="faq" className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="الأسئلة الشائعة"
            title={
              <>
                أسئلة شائعة عن{" "}
                <span className="text-primary-600">التشغيل</span>
              </>
            }
            subtitle="أكثر ما يسأل عنه أصحاب المنشآت قبل البدء — بإجابات واضحة ومباشرة."
          />
          <div className="mt-12 flex w-full max-w-prose flex-col gap-4">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-card border border-hairline bg-white px-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16px] font-bold text-strong">
                  {f.q}
                  <Chevron className="h-5 w-5 shrink-0 text-primary-600 transition-transform duration-150 group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-[15px] leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="text" withArrow>
              لديك سؤال آخر؟ تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── J · Final CTA ───────── */}
      <CTASection
        eyebrow="جاهز للبدء؟"
        title={
          <>
            ابدأ في ربط عمليات منشأتك وتحقيق{" "}
            <span className="text-primary-600">تحكم كامل</span> اليوم
          </>
        }
        subtitle="خطوات بسيطة، دعم كامل، وإطلاق بدون تعقيد — احجز عرضك التجريبي الآن."
      />
    </>
  );
}

/* Small left arrow used inside the operating-model connector (RTL "flows to") */
function ArrowLeftMini(p: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}
