import type { Metadata } from "next";
import type { SVGProps } from "react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ModuleCard, { tintClasses } from "@/components/ModuleCard";
import StatsBlock from "@/components/StatsBlock";
import CTASection from "@/components/CTASection";
import DashboardMockup from "@/components/DashboardMockup";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryNav from "@/components/CategoryNav";
import { iconMap } from "@/components/Icons";
import {
  MODULE_CATEGORIES,
  TOTAL_MODULES,
  FLOW_STEPS,
  CAPABILITIES,
  MATRIX_COLUMNS,
  COMPARISON,
  MODULES_CASE_STUDY,
} from "@/lib/modules";

export const metadata: Metadata = {
  title: "الموديولات — منصة I Do Enterprise الموحّدة",
  description:
    "سبع فئات من الموديولات المترابطة — العمليات، المرافق والأصول، المالية، الموارد البشرية، المشتريات، إدارة النظام، والتحليلات والذكاء الاصطناعي — على قاعدة بيانات واحدة.",
};

/* Tiny inline glyphs used only on this page (kept local — no new shared icons). */
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
const TrendUp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...stroke} {...p}>
    <path d="M4 16l5-5 3 3 7-7" />
    <path d="M16 7h4v4" />
  </svg>
);
const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...stroke} {...p}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export default function ModulesPage() {
  const operational = MODULE_CATEGORIES.filter((c) => c.layer === "operational");
  const intelligence = MODULE_CATEGORIES.find((c) => c.layer === "intelligence")!;
  const governance = MODULE_CATEGORIES.find((c) => c.layer === "governance")!;
  const IntelIcon = iconMap[intelligence.icon];
  const GovIcon = iconMap[governance.icon];
  const DataIcon = iconMap.database;

  return (
    <>
      {/* ───────── 1 · Hero ───────── */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-24">
          <Breadcrumb
            tone="dark"
            items={[{ label: "الرئيسية", href: "/" }, { label: "الموديولات" }]}
          />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
                الموديولات · منصة واحدة موحّدة
              </span>
              <h1 className="text-[32px] font-extrabold leading-tight md:text-[44px] lg:text-[56px]">
                كل عملياتك في{" "}
                <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                  منصة واحدة متكاملة
                </span>
              </h1>
              <p className="max-w-prose text-[16px] leading-8 text-white/80 md:text-[18px]">
                سبع فئات من الموديولات المترابطة تغطّي العمليات، المرافق، المالية،
                الموارد البشرية، والمشتريات — تعمل كلها على قاعدة بيانات واحدة.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" withArrow>
                  اطلب عرض تجريبي
                </Button>
                <Button href="#architecture" variant="secondary" surface="dark">
                  استكشف المعمارية
                </Button>
              </div>
            </div>

            <div className="lg:ps-6">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 2 · Platform at a glance ───────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <StatsBlock value="7" label="فئات رئيسية" />
            <StatsBlock value={`+${TOTAL_MODULES}`} label="موديول متكامل" />
            <StatsBlock value="1" label="قاعدة بيانات موحّدة" />
            <StatsBlock value="24/7" label="متابعة لحظية" />
          </div>
        </div>
      </section>

      {/* ───────── 3 · Platform architecture ───────── */}
      <section id="architecture" className="section-y scroll-mt-36 bg-navy-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="بنية المنصة"
            title={
              <>
                منظومة واحدة،{" "}
                <span className="text-primary-600">سبع منظومات تعمل كقطعة واحدة</span>
              </>
            }
            subtitle="طبقة ذكاء أعلى الموديولات، قاعدة بيانات موحّدة في القلب، وحوكمة وأمان في الأساس."
          />

          <div className="mt-12 flex w-full max-w-4xl flex-col items-stretch gap-3">
            {/* Intelligence layer */}
            <div className="rounded-card border border-[#7C76E8]/40 bg-[#5650D6]/20 p-5 shadow-[0_0_40px_rgba(86,80,214,0.25)]">
              <div className="flex items-center justify-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-white/15 text-white">
                  <IntelIcon className="h-6 w-6" />
                </span>
                <div className="text-start">
                  <div className="text-[16px] font-bold text-white">
                    {intelligence.eyebrow}
                  </div>
                  <div className="text-[13px] text-white/70">
                    رؤى تنبؤية · كشف انحرافات · لوحات موحّدة
                  </div>
                </div>
              </div>
            </div>

            <span className="mx-auto h-5 w-px bg-white/25" aria-hidden />

            {/* Operational pillars */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {operational.map((c) => {
                const Icon = iconMap[c.icon];
                return (
                  <div
                    key={c.id}
                    className="flex flex-col items-center gap-2 rounded-tile border border-white/10 bg-[#14264C] p-4 text-center transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-tile ${tintClasses[c.tint]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[13px] font-semibold leading-5 text-white">
                      {c.eyebrow}
                    </span>
                  </div>
                );
              })}
            </div>

            <span className="mx-auto h-5 w-px bg-white/25" aria-hidden />

            {/* Unified data core */}
            <div className="flex items-center justify-center gap-3 rounded-card border border-white/10 bg-[#14264C] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                <DataIcon className="h-6 w-6" />
              </span>
              <span className="text-[15px] font-bold text-white">
                قاعدة البيانات الموحدة — مصدر واحد للحقيقة
              </span>
            </div>

            {/* Governance base */}
            <div className="flex items-center justify-center gap-3 rounded-card border border-white/10 bg-[#0F1F3D] p-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-tile ${tintClasses[governance.tint]}`}
              >
                <GovIcon className="h-5 w-5" />
              </span>
              <span className="text-[14px] font-semibold text-white/85">
                {governance.eyebrow} والأمن — صلاحيات · هيكل · سجل تدقيق
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/contact" variant="text" surface="dark" withArrow>
              شاهد المنصة في عرض حي
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── 4 · Sticky category nav ───────── */}
      <CategoryNav />

      {/* ───────── 5 · Category sections ───────── */}
      {MODULE_CATEGORIES.map((cat, idx) => {
        const dashFirst = idx % 2 === 0;
        const bg = idx % 2 === 0 ? "bg-white" : "bg-surface-light";
        return (
          <section
            key={cat.id}
            id={`cat-${cat.id}`}
            className={`section-y scroll-mt-36 ${bg}`}
          >
            <div className="container-x">
              <SectionHeader
                eyebrow={`${cat.eyebrow} · ${cat.modules.length} موديولات`}
                title={
                  <>
                    {cat.title}
                    <span className="text-primary-600">{cat.highlight}</span>
                  </>
                }
                subtitle={cat.subtitle}
              />

              <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
                <div
                  className={`lg:self-center ${dashFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  <DashboardMockup
                    variant={cat.dashVariant}
                    accent={cat.dashAccent}
                    kpis={cat.dashKpis}
                  />
                </div>

                <div
                  className={`grid gap-6 sm:grid-cols-2 ${dashFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  {cat.modules.map((m) => (
                    <ModuleCard
                      key={m.slug}
                      icon={m.icon}
                      tint={cat.tint}
                      title={m.title}
                      description={m.oneLiner}
                      href={`/modules/${m.slug}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ───────── 6 · How modules work together ───────── */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="كيف تعمل الموديولات معًا"
            title={
              <>
                حدث واحد…{" "}
                <span className="text-primary-600">يتدفق عبر المنصة بالكامل</span>
              </>
            }
            subtitle="تابع بلاغ عطل واحد وهو ينتقل تلقائيًا بين الموديولات — دون إعادة إدخال ودون أنظمة منفصلة."
          />

          <div className="no-scrollbar mt-12 flex w-full items-stretch overflow-x-auto pb-2">
            {FLOW_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.num} className="flex items-stretch">
                  <div className="flex w-[210px] shrink-0 flex-col gap-3 rounded-card border border-hairline bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-tile ${tintClasses[step.tint]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-[12px] font-bold text-white">
                        <span className="ltr">{step.num}</span>
                      </span>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-primary-600">
                        {step.role}
                      </div>
                      <div className="text-[16px] font-bold text-strong">
                        {step.title}
                      </div>
                    </div>
                    <p className="text-[13px] leading-5 text-muted">{step.desc}</p>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="flex shrink-0 items-center px-1 text-[#C9D5EA]">
                      <ChevronLeft className="h-5 w-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Unified data core caption */}
          <div className="mt-6 flex w-full max-w-3xl flex-col items-center gap-3 rounded-card border border-hairline bg-white p-5 text-center sm:flex-row sm:justify-center sm:text-start">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
              <DataIcon className="h-6 w-6" />
            </span>
            <p className="text-[15px] font-semibold text-strong">
              قاعدة بيانات واحدة — لا إعادة إدخال، ولا أنظمة منفصلة.
            </p>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-[14px] text-muted">
            <GovIcon className="h-4 w-4 text-primary-600" />
            كل خطوة محكومة بالصلاحيات ومسجّلة في سجل التدقيق.
          </p>

          <div className="mt-10">
            <Button href="/contact" variant="primary" withArrow>
              اطلب عرض تجريبي
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── 7 · One platform vs. point tools ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="لماذا منصة موحّدة"
            title={
              <>
                منصّة واحدة…{" "}
                <span className="text-primary-600">بدل عشرة أنظمة منفصلة</span>
              </>
            }
            subtitle="التكامل ليس ميزة إضافية — إنه الفرق بين بيانات تعمل لصالحك وأنظمة تستنزف وقتك."
          />

          <div className="mt-12 grid w-full gap-6 lg:grid-cols-3">
            {COMPARISON.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <div
                  key={c.title}
                  className="flex flex-col gap-5 rounded-card border border-hairline bg-white p-6 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-[18px] font-bold text-strong">{c.title}</h3>
                  </div>
                  <div className="flex items-start gap-3 rounded-tile bg-[#E4F6EC] p-3">
                    <CheckMark className="mt-0.5 h-5 w-5 shrink-0 text-[#1FA45C]" />
                    <span className="text-[14px] leading-6 text-strong">
                      {c.unified}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-tile bg-surface-light p-3">
                    <XMark className="mt-0.5 h-5 w-5 shrink-0 text-[#9AA7BD]" />
                    <span className="text-[14px] leading-6 text-muted">
                      {c.separate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── 8 · Platform-wide capabilities + coverage matrix ───────── */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="إمكانات لكل موديول"
            title={
              <>
                كل موديول{" "}
                <span className="text-primary-600">جاهز للمؤسسات</span>
              </>
            }
            subtitle="نفس القدرات المؤسسية متوفّرة في كل موديول دون استثناء — لا موديولات من الدرجة الثانية."
          />

          <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {CAPABILITIES.map((cap) => {
              const Icon = iconMap[cap.icon];
              return (
                <div
                  key={cap.label}
                  className="flex flex-col items-center gap-3 rounded-card border border-hairline bg-white p-4 text-center shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-semibold leading-5 text-strong">
                    {cap.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Coverage matrix */}
          <div className="mt-8 w-full overflow-x-auto rounded-card border border-hairline bg-white shadow-md">
            <table className="w-full min-w-[640px] border-collapse text-center">
              <thead>
                <tr className="bg-surface-light text-[14px] text-strong">
                  <th className="p-4 text-start font-bold">الفئة</th>
                  {MATRIX_COLUMNS.map((col) => (
                    <th key={col} className="p-4 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODULE_CATEGORIES.map((c, i) => (
                  <tr
                    key={c.id}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAFBFE]"}
                  >
                    <td className="p-4 text-start text-[14px] font-semibold text-strong">
                      {c.eyebrow}
                    </td>
                    {MATRIX_COLUMNS.map((col) => (
                      <td key={col} className="p-4">
                        <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#E4F6EC] text-[#1FA45C]">
                          <CheckMark className="h-3.5 w-3.5" />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── 9 · Enterprise readiness / trust band ───────── */}
      <section className="section-y bg-navy-gradient">
        <div className="container-x flex flex-col items-center text-center">
          <span className="eyebrow">جاهزية مؤسسية</span>
          <h2 className="mt-4 text-[26px] font-extrabold leading-tight text-white md:text-[32px] lg:text-[40px]">
            جاهزة للمؤسسات{" "}
            <span className="text-primary-600">منذ اليوم الأول</span>
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-7 text-white/75 md:text-[18px] md:leading-8">
            أمان وحوكمة على مستوى المؤسسة — لأن قطاعات مثل الحكومة والمطارات
            والمستشفيات لا تقبل أقل من ذلك.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "ISO 27001",
              "SOC 2",
              "GDPR",
              "%99.9 وقت تشغيل",
              "استضافة داخل المملكة",
              "تسجيل دخول موحّد SSO",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[14px] font-semibold text-white/90"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="text" surface="dark" withArrow>
              تحدث مع مختص حلول
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── 10 · Proof (one case study + outbound to Industries) ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="قصص النجاح"
            title={
              <>
                نتائج حقيقية على{" "}
                <span className="text-primary-600">المنصة الموحّدة</span>
              </>
            }
            subtitle="كيف تترجم الموديولات المترابطة إلى نتائج تشغيلية ملموسة."
          />

          <div className="mt-12 w-full overflow-hidden rounded-card border border-hairline bg-white shadow-md">
            <div className="grid lg:grid-cols-2">
              {/* Image / brand panel (RIGHT in RTL) */}
              <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#2E6BF0] to-[#0F2540] p-6 text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[13px] font-semibold">
                  {(() => {
                    const Icon = iconMap.building;
                    return <Icon className="h-4 w-4" />;
                  })()}
                  {MODULES_CASE_STUDY.industryTag}
                </span>
                <span className="text-[22px] font-extrabold">
                  {MODULES_CASE_STUDY.company}
                </span>
              </div>

              {/* Content (LEFT) */}
              <div className="grid gap-6 p-6 sm:grid-cols-3">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#DC2F36]">
                    <AlertTri className="h-4 w-4" /> المشكلة
                  </div>
                  <p className="text-[14px] leading-6 text-muted">
                    {MODULES_CASE_STUDY.problem}
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-primary-600">
                    {(() => {
                      const Icon = iconMap.sparkles;
                      return <Icon className="h-4 w-4" />;
                    })()}{" "}
                    الحل
                  </div>
                  <p className="text-[14px] leading-6 text-muted">
                    {MODULES_CASE_STUDY.solution}
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#1FA45C]">
                    <TrendUp className="h-4 w-4" /> النتائج
                  </div>
                  <div className="flex flex-col gap-3">
                    {MODULES_CASE_STUDY.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-[22px] font-extrabold text-primary-600">
                          <span className="ltr">{r.value}</span>
                        </div>
                        <div className="text-[12px] text-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Button href={MODULES_CASE_STUDY.href} variant="text" withArrow>
                    اقرأ القصة كاملة
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/industries" variant="text" withArrow>
              هذه الموديولات تخدم قطاعات متعددة — استكشف قطاعك
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── 11 · Final CTA ───────── */}
      <CTASection
        eyebrow="جاهز للبدء؟"
        title={
          <>
            اربط كل موديولاتك على{" "}
            <span className="text-primary-600">منصة واحدة</span> اليوم
          </>
        }
        subtitle="احجز عرضًا تجريبيًا وشاهد كيف تعمل الموديولات معًا على بيانات منشأتك الحقيقية."
      />
    </>
  );
}
