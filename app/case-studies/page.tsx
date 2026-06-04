import type { Metadata } from "next";
import type { SVGProps } from "react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { iconMap, type IconName, ArrowForward } from "@/components/Icons";
import { tintClasses, type Tint } from "@/components/ModuleCard";
import { BrowserFrame, KpiTile, Bars, Panel } from "@/components/dash";

export const metadata: Metadata = {
  title: "قصص النجاح — I Do Enterprise",
  description:
    "نتائج حقيقية لمؤسسات تدير عملياتها بذكاء — اكتشف كيف ساعدت منصة I DO Enterprise على تحسين الكفاءة وتقليل التكاليف ورفع جودة الخدمات.",
};

/* ════════════════ Content ════════════════ */
const FEATURED = {
  industry: "المطارات",
  company: "هيئة مطارات إقليمية",
  challenge:
    "تشغيل معقّد عبر صالات ومواقع متعددة، مع صعوبة في تتبع الأصول الحرجة وبطء في الاستجابة للبلاغات الميدانية وارتفاع تكاليف الصيانة الطارئة.",
  solution:
    "توحيد العمليات والأصول والصيانة والموردين على منصة واحدة، مع لوحات تحكم لحظية وتطبيق ميداني للفنيين وتنبيهات ذكية مبنية على الذكاء الاصطناعي.",
  results: [
    { value: "35%", label: "أسرع في زمن الاستجابة" },
    { value: "28%", label: "خفض التكاليف التشغيلية" },
    { value: "40%", label: "ارتفاع الالتزام بالـSLA" },
    { value: "50%", label: "تقليل العمليات اليدوية" },
  ],
};

const STORIES: {
  industry: string;
  tint: Tint;
  icon: IconName;
  company: string;
  problem: string;
  modules: string[];
  result: { value: string; label: string };
}[] = [
  {
    industry: "القطاع الحكومي",
    tint: "blue",
    icon: "building",
    company: "جهة حكومية كبرى",
    problem: "تشتّت الأنظمة وضعف الحوكمة وبطء في اتخاذ القرار.",
    modules: ["العمليات", "الأصول", "الصلاحيات"],
    result: { value: "45%", label: "أسرع في اتخاذ القرار" },
  },
  {
    industry: "المطارات",
    tint: "teal",
    icon: "mapPin",
    company: "هيئة مطارات إقليمية",
    problem: "تعدد المواقع وصعوبة مراقبة العمليات لحظيًا.",
    modules: ["العمليات", "الصيانة", "التحليلات"],
    result: { value: "35%", label: "أسرع في الاستجابة" },
  },
  {
    industry: "المستشفيات",
    tint: "rose",
    icon: "shield",
    company: "مدينة طبية متكاملة",
    problem: "صيانة حرجة لأصول طبية لا تحتمل التوقف.",
    modules: ["الأصول", "الصيانة", "الجودة"],
    result: { value: "99.9%", label: "جاهزية الأجهزة الحرجة" },
  },
  {
    industry: "الجامعات",
    tint: "purple",
    icon: "users",
    company: "جامعة بحرم واسع",
    problem: "مرافق واسعة ومتعددة يصعب تشغيلها بكفاءة.",
    modules: ["المرافق", "الأصول", "المالية"],
    result: { value: "30%", label: "خفض تكاليف المرافق" },
  },
  {
    industry: "المراكز التجارية",
    tint: "orange",
    icon: "cart",
    company: "مجمع تجاري كبير",
    problem: "إدارة مستأجرين وخدمات وعقود متفرقة.",
    modules: ["العقود", "العمليات", "المالية"],
    result: { value: "25%", label: "رفع رضا المستأجرين" },
  },
  {
    industry: "متعدد المواقع",
    tint: "green",
    icon: "layers",
    company: "مجموعة متعددة المواقع",
    problem: "غياب الربط المركزي بين الفروع والفرق.",
    modules: ["العمليات", "التحليلات", "الصلاحيات"],
    result: { value: "50%", label: "تقليل العمل اليدوي" },
  },
];

const IMPACT: { value: string; label: string }[] = [
  { value: "+100", label: "موقع مُدار" },
  { value: "99.9%", label: "توفر المنصة" },
  { value: "+850K", label: "أمر عمل مُنفّذ" },
  { value: "+2.4B", label: "ريال من الأصول المُدارة" },
];

const BEFORE = ["أنظمة منفصلة لكل قسم", "تقارير يدوية متأخرة", "رؤية غائبة عن العمليات", "تكاليف تشغيل مرتفعة"];
const AFTER = ["منصة واحدة متكاملة", "تقارير لحظية آلية", "رؤية كاملة في الوقت الحقيقي", "تكاليف أقل وكفاءة أعلى"];
const DELTAS = [
  { value: "−28%", label: "التكاليف التشغيلية" },
  { value: "+40%", label: "الالتزام بالخدمة" },
  { value: "−50%", label: "العمل اليدوي" },
];

const REASONS: { icon: IconName; tint: Tint; title: string; desc: string }[] = [
  { icon: "layers", tint: "blue", title: "عمليات موحّدة", desc: "كل العمليات على منصة واحدة بمصدر بيانات واحد." },
  { icon: "bolt", tint: "teal", title: "رؤية لحظية", desc: "لوحات تحكم تعرض أداء منشأتك في الوقت الفعلي." },
  { icon: "sparkles", tint: "purple", title: "قرارات بالذكاء الاصطناعي", desc: "رؤى تنبؤية وتوصيات استباقية فوق بياناتك." },
  { icon: "wallet", tint: "orange", title: "تكاليف أقل", desc: "أتمتة وتحسين الموارد يخفضان الهدر التشغيلي." },
  { icon: "shield", tint: "rose", title: "حوكمة أفضل", desc: "صلاحيات وسجلات تدقيق تضمن الشفافية والمساءلة." },
  { icon: "building", tint: "green", title: "قابلية التوسّع", desc: "بنية تنمو مع منشأتك عبر آلاف المستخدمين والمواقع." },
];

const TRUST: { icon: IconName; title: string; desc: string }[] = [
  { icon: "shield", title: "أمان مؤسسي", desc: "تشفير شامل وحماية على مستوى المؤسسة للبيانات." },
  { icon: "database", title: "حوكمة البيانات", desc: "إطار حوكمة يضمن جودة البيانات والامتثال." },
  { icon: "check", title: "الامتثال", desc: "توافق مع اللوائح المحلية والدولية." },
  { icon: "tasks", title: "سجلات التدقيق", desc: "توثيق كامل لكل إجراء داخل النظام." },
  { icon: "building", title: "دعم متعدد المواقع", desc: "إدارة جميع فروعك ومواقعك من مكان واحد." },
];

/* Local glyphs */
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

/* Hero — results overview dashboard */
function ResultsDash() {
  const sectors = [
    { t: "المطارات", v: "+35%", c: "#0FB6A0" },
    { t: "المستشفيات", v: "+40%", c: "#2563EB" },
    { t: "القطاع الحكومي", v: "+45%", c: "#7C5CFC" },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — نظرة على النتائج">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KpiTile value="35%" label="أسرع استجابة" tint="teal" />
          <KpiTile value="28%" label="خفض التكاليف" tint="green" />
          <KpiTile value="40%" label="امتثال SLA" tint="blue" />
          <KpiTile value="50%" label="أقل عمل يدوي" tint="purple" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Panel title="تحسّن الكفاءة عبر الزمن" action="آخر 12 شهر">
            <Bars accent="#2563EB" />
          </Panel>
          <Panel title="أبرز القطاعات">
            <div className="space-y-2.5">
              {sectors.map((s) => (
                <div key={s.t} className="flex items-center justify-between gap-2">
                  <span className="text-[11px] text-text">{s.t}</span>
                  <span className="ltr text-[11px] font-bold" style={{ color: s.c }}>
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════ Page ════════════════ */
export default function CaseStudiesPage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-24">
          <Breadcrumb tone="dark" items={[{ label: "الرئيسية", href: "/" }, { label: "قصص النجاح" }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                قصص النجاح
              </span>
              <h1 className="text-[30px] font-extrabold leading-tight md:text-[40px] lg:text-[48px]">
                نتائج حقيقية لمؤسسات{" "}
                <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                  تدير عملياتها بذكاء
                </span>
              </h1>
              <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
                اكتشف كيف ساعدت منصة <span className="ltr font-semibold">I DO Enterprise</span>{" "}
                المؤسسات على تحسين الكفاءة التشغيلية وتقليل التكاليف ورفع جودة
                الخدمات.
              </p>
              <div>
                <Button href="/contact" variant="primary" surface="dark" withArrow>
                  اطلب عرض تجريبي
                </Button>
              </div>
            </div>
            <div className="lg:ps-4">
              <ResultsDash />
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Featured success story */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="قصة نجاح مميّزة"
            title={
              <>
                كيف وحّدت <span className="text-primary-600">هيئة مطارات</span> عملياتها
              </>
            }
            subtitle="من تشغيل مجزّأ عبر مواقع متعددة إلى منظومة واحدة ذكية بنتائج ملموسة."
          />
          <div className="mt-12 w-full overflow-hidden rounded-card border border-hairline bg-white shadow-md">
            <div className="grid lg:grid-cols-2">
              {/* Brand panel */}
              <div className="relative flex min-h-[260px] flex-col justify-between bg-hero-gradient p-8 text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[13px] font-semibold">
                  <iconMap.mapPin className="h-4 w-4" />
                  {FEATURED.industry}
                </span>
                <div>
                  <div className="text-[24px] font-extrabold">{FEATURED.company}</div>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {FEATURED.results.map((r) => (
                      <div key={r.label} className="rounded-tile bg-white/10 p-3">
                        <div className="text-[22px] font-extrabold">
                          <span className="ltr">{r.value}</span>
                        </div>
                        <div className="text-[11px] leading-4 text-white/80">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Narrative */}
              <div className="flex flex-col gap-5 p-8">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#DC2F36]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FBE7E8]">
                      <XMark className="h-3.5 w-3.5" />
                    </span>
                    التحدّي
                  </div>
                  <p className="text-[14px] leading-7 text-muted">{FEATURED.challenge}</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-primary-600">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-100">
                      <iconMap.sparkles className="h-3.5 w-3.5" />
                    </span>
                    الحل
                  </div>
                  <p className="text-[14px] leading-7 text-muted">{FEATURED.solution}</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#1FA45C]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E4F6EC]">
                      <CheckMark className="h-3.5 w-3.5" />
                    </span>
                    النتائج
                  </div>
                  <p className="text-[14px] leading-7 text-strong">
                    منظومة تشغيل موحّدة بنتائج قابلة للقياس عبر كل المواقع.
                  </p>
                </div>
                <div>
                  <Button href="#stories" variant="text" withArrow>
                    اقرأ المزيد من القصص
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Success stories grid */}
      <section id="stories" className="section-y scroll-mt-24 bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="قصص من كل قطاع"
            title={
              <>
                نتائج موثّقة عبر{" "}
                <span className="text-primary-600">مختلف القطاعات</span>
              </>
            }
            subtitle="كل قطاع له تحدياته — وكل قصة تثبت كيف تتحوّل تلك التحديات إلى نتائج."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.company}
                  className="flex flex-col overflow-hidden rounded-card border border-hairline bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-2 bg-hero-gradient px-5 py-4 text-white">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold">
                      <Icon className="h-3.5 w-3.5" />
                      {s.industry}
                    </span>
                    <span className="text-[13px] font-bold">{s.company}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <p className="text-[14px] leading-6 text-muted">{s.problem}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.modules.map((m) => (
                        <span key={m} className="rounded-full bg-surface-light px-2.5 py-1 text-[11px] font-semibold text-strong">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-end justify-between border-t border-hairline pt-4">
                      <div>
                        <div className="text-[26px] font-extrabold leading-none text-primary-600">
                          <span className="ltr">{s.result.value}</span>
                        </div>
                        <div className="mt-1 text-[12px] text-muted">{s.result.label}</div>
                      </div>
                      <a href="#stories" className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary-600">
                        اقرأ القصة
                        <ArrowForward className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · Results & impact */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="rounded-[36px] bg-navy-gradient px-6 py-14 md:px-12">
            <div className="mx-auto mb-10 flex max-w-prose flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-semibold text-white/90">
                الأثر بالأرقام
              </span>
              <h2 className="text-[26px] font-extrabold leading-tight text-white md:text-[32px] lg:text-[40px]">
                أثر يمتد عبر مئات المواقع
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {IMPACT.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span className="text-[34px] font-extrabold leading-none text-white md:text-[44px]">
                    <span className="ltr">{s.value}</span>
                  </span>
                  <span className="mt-2 text-[14px] text-white/70">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Before vs after transformation */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="التحوّل"
            title={
              <>
                من أنظمة مجزّأة إلى{" "}
                <span className="text-primary-600">منصة موحّدة</span>
              </>
            }
            subtitle="هذا هو الفارق الذي تحدثه المنصة الموحّدة في تشغيل أي منشأة."
          />
          <div className="mt-12 grid w-full items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            {/* Before */}
            <div className="rounded-card border border-hairline bg-white p-7 shadow-md">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-tile bg-[#FBE7E8] text-[#DC2F36]">
                  <XMark className="h-5 w-5" />
                </span>
                <h3 className="text-[18px] font-bold text-strong">قبل: تشغيل مجزّأ</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {BEFORE.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[15px] text-muted">
                    <XMark className="h-4 w-4 shrink-0 text-[#DC2F36]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-md lg:rotate-0">
                <ArrowForward className="h-5 w-5" />
              </span>
            </div>
            {/* After */}
            <div className="rounded-card border border-primary-100 bg-[#F4F8FF] p-7 shadow-md">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-tile bg-[#E4F6EC] text-[#1FA45C]">
                  <CheckMark className="h-5 w-5" />
                </span>
                <h3 className="text-[18px] font-bold text-strong">بعد: منصة موحّدة</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {AFTER.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-[15px] text-strong">
                    <CheckMark className="h-4 w-4 shrink-0 text-[#1FA45C]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4">
            {DELTAS.map((d) => (
              <div key={d.label} className="rounded-card border border-hairline bg-white p-5 text-center shadow-sm">
                <div className="text-[26px] font-extrabold text-primary-600">
                  <span className="ltr">{d.value}</span>
                </div>
                <div className="mt-1 text-[12px] text-muted">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Why customers choose */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="لماذا يختاروننا"
            title={
              <>
                ما الذي يجعل النتائج{" "}
                <span className="text-primary-600">قابلة للتكرار</span>
              </>
            }
            subtitle="ليست نتائج صدفة — بل خصائص مبنية في صميم المنصة."
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
                  <h3 className="text-[18px] font-bold text-strong">{r.title}</h3>
                  <p className="text-[15px] leading-7 text-muted">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 · Trust & enterprise readiness */}
      <section className="section-y bg-navy-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="الجاهزية المؤسسية"
            title="نتائج تثقون بها على بنية تثقون بها"
            subtitle="الأمان والحوكمة والامتثال أساس كل قصة نجاح على المنصة."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST.map((t) => {
              const Icon = iconMap[t.icon];
              return (
                <div key={t.title} className="flex flex-col gap-3 rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-white/15 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold text-white">{t.title}</h3>
                  <p className="text-[13px] leading-6 text-white/75">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 · Final CTA */}
      <CTASection
        eyebrow="انضم إليهم"
        title={
          <>
            كن قصة النجاح{" "}
            <span className="text-primary-600">القادمة</span>
          </>
        }
        subtitle="اكتشف كيف يمكن لـ I DO Enterprise تحويل عمليات منشأتك إلى منظومة أكثر ذكاءً وكفاءة."
      />
    </>
  );
}
