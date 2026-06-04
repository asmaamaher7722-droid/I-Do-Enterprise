import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import DemoForm from "@/components/DemoForm";
import FaqAccordion from "@/components/FaqAccordion";
import { iconMap, type IconName } from "@/components/Icons";
import { BrowserFrame, KpiTile, Bars, Panel, ProgressRow, StatusPill } from "@/components/dash";

export const metadata: Metadata = {
  title: "اطلب عرضًا تجريبيًا | I Do Enterprise",
  description:
    "احجز عرضًا تجريبيًا مخصصًا لمنشأتك وتعرّف على كيفية ربط جميع عملياتك في نظام تشغيل مؤسسي واحد.",
};

const HERO_POINTS = [
  "عرض حي مخصّص لقطاع منشأتك",
  "إجابات عن أسئلتك التقنية والتشغيلية",
  "خطة تطبيق مقترحة بخطوات واضحة",
];

const STEPS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "phone", title: "نتواصل معك", desc: "يتواصل أحد مختصي الحلول خلال يوم عمل واحد لتحديد الموعد المناسب." },
  { icon: "users", title: "جلسة اكتشاف", desc: "نفهم طبيعة منشأتك وتحدياتك التشغيلية لتخصيص العرض بدقة." },
  { icon: "gauge", title: "عرض مخصّص", desc: "نعرض المنصة على بيانات شبيهة بواقعك مع خطة تطبيق مقترحة." },
];

const BENEFITS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "gauge", title: "رؤية موحّدة", desc: "شاهد كيف تجتمع العمليات والأصول والموردون في لوحة واحدة." },
  { icon: "bolt", title: "تطبيق سريع", desc: "نموذج تشغيل جاهز يختصر زمن الإطلاق إلى أسابيع لا أشهر." },
  { icon: "shield", title: "أمان وامتثال", desc: "صلاحيات دقيقة وسجل تدقيق كامل يطابق متطلبات المؤسسات." },
  { icon: "layers", title: "تكامل مرن", desc: "ربط سلس مع أنظمة ERP و IoT والأنظمة القائمة لديك." },
  { icon: "users", title: "دعم مخصّص", desc: "فريق نجاح عملاء يرافقك من التهيئة حتى التشغيل الكامل." },
  { icon: "chart", title: "عائد واضح", desc: "مؤشرات قابلة للقياس على الكفاءة والتكلفة منذ الأشهر الأولى." },
];

const TRUST_STATS = [
  { value: "+20", label: "منشأة تثق بنا" },
  { value: "%98", label: "رضا العملاء" },
  { value: "24/7", label: "دعم متواصل" },
  { value: "+39", label: "وحدة متكاملة" },
];

const FAQ = [
  {
    q: "هل العرض التجريبي مجاني وبدون التزام؟",
    a: "نعم، العرض التجريبي مجاني تمامًا وبدون أي التزام. هدفه أن تتعرّف على المنصة وتقيّم مدى ملاءمتها لاحتياجات منشأتك.",
  },
  {
    q: "كم تستغرق جلسة العرض التجريبي؟",
    a: "تستغرق الجلسة عادةً بين 30 و45 دقيقة، ويمكن تخصيصها حسب القطاع والوحدات التي تهمّك، مع وقت كافٍ للأسئلة.",
  },
  {
    q: "هل يمكن تخصيص العرض حسب قطاع منشأتي؟",
    a: "بالتأكيد. نعدّ العرض ببيانات وسيناريوهات قريبة من واقع قطاعك — سواء كان منشآت حكومية أو مطارات أو مستشفيات أو مراكز تجارية.",
  },
  {
    q: "ما الذي يحدث بعد العرض التجريبي؟",
    a: "نزوّدك بخطة تطبيق مقترحة وتقدير زمني واضح، دون أي ضغط للاتخاذ الفوري للقرار. القرار يبقى لك ووفق جاهزية منشأتك.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ───────── Hero + Form ───────── */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container-x grid items-start gap-12 py-14 lg:grid-cols-2 lg:py-20">
          {/* Text — right column in RTL */}
          <div className="flex flex-col gap-6 text-white lg:pt-6">
            <Breadcrumb
              items={[{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }]}
              tone="dark"
            />
            <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
              اطلب عرضًا تجريبيًا
            </span>
            <h1 className="text-[30px] font-extrabold leading-[1.25] md:text-[40px] lg:text-[46px]">
              شاهد منصة I Do Enterprise على واقع منشأتك
            </h1>
            <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
              احجز عرضًا تجريبيًا مخصّصًا وتعرّف على كيفية ربط عملياتك وأصولك
              ومورديك في نظام تشغيل واحد يمنحك رؤية لحظية وقرارات أدق.
            </p>
            <ul className="flex flex-col gap-3">
              {HERO_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Form — left column in RTL */}
          <div className="relative">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* ───────── What happens next ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="ماذا بعد طلبك"
            title={
              <>
                ثلاث خطوات بسيطة نحو{" "}
                <span className="text-primary-600">عرضك التجريبي</span>
              </>
            }
            subtitle="عملية واضحة وسريعة، بدون تعقيد وبدون التزام."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.title}
                  className="relative flex flex-col items-center rounded-card border border-hairline bg-white p-7 text-center shadow-sm"
                >
                  <span className="absolute -top-3 end-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-[18px] font-bold text-strong">{s.title}</h3>
                  <p className="text-[14px] leading-6 text-muted">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Why request a demo ───────── */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="لماذا العرض التجريبي"
            title={
              <>
                قرار مبني على{" "}
                <span className="text-primary-600">رؤية واضحة</span>
              </>
            }
            subtitle="العرض التجريبي أسرع طريقة لتقييم المنصة على واقع منشأتك الفعلي."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = iconMap[b.icon];
              return (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-card border border-hairline bg-white p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-strong">{b.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-muted">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Platform preview ───────── */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeader
              align="start"
              eyebrow="ما الذي ستراه"
              title={
                <>
                  لوحة تحكم واحدة لكل{" "}
                  <span className="text-primary-600">عملياتك</span>
                </>
              }
              subtitle="نعرض عليك بيانات حيّة شبيهة بواقع منشأتك: مؤشرات الأداء، حالة الأصول، والمهام في الوقت الحقيقي."
            />
            <ul className="flex flex-col gap-3">
              {[
                "مؤشرات تشغيلية لحظية عبر جميع المواقع",
                "متابعة الأصول والصيانة من مكان واحد",
                "تنبيهات ذكية وقرارات مبنية على البيانات",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-strong">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <BrowserFrame title="لوحة التحكم — I Do Enterprise">
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2.5">
                <KpiTile delta="+12%" value="1٬248" label="أوامر العمل" tint="blue" />
                <KpiTile delta="+4%" value="%98" label="جاهزية الأصول" tint="green" />
                <KpiTile delta="-8%" value="42" label="مهام متأخرة" tint="orange" />
              </div>
              <Panel title="أداء العمليات" action="آخر 12 شهرًا">
                <Bars />
              </Panel>
              <Panel title="حالة المواقع">
                <div className="flex flex-col gap-2.5">
                  <ProgressRow label="المقر الرئيسي" pct={92} color="#1FA45C" />
                  <ProgressRow label="فرع الشمال" pct={74} color="#2563EB" />
                  <ProgressRow label="فرع الميناء" pct={58} color="#F08A24" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <StatusPill label="تشغيل طبيعي" kind="success" />
                  <StatusPill label="صيانة مجدولة" kind="warning" />
                  <StatusPill label="تنبيه نشط" kind="danger" />
                </div>
              </Panel>
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ───────── Trust ───────── */}
      <section className="bg-navy-gradient">
        <div className="container-x section-y">
          <div className="mx-auto mb-10 max-w-prose text-center">
            <h2 className="text-[24px] font-extrabold leading-tight text-white md:text-[30px]">
              منشآت رائدة تدير عملياتها مع I Do Enterprise
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-white/75 md:text-[16px]">
              نلتزم بحماية بياناتك ولا نشاركها مع أي طرف. بياناتك تُستخدم فقط لتجهيز
              عرضك التجريبي.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="text-[34px] font-extrabold text-white md:text-[44px]">
                  <span className="ltr">{s.value}</span>
                </span>
                <span className="mt-1 text-[14px] text-white/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="section-y bg-white scroll-mt-24">
        <div className="container-x">
          <div className="mx-auto flex max-w-[760px] flex-col items-center">
            <SectionHeader
              eyebrow="الأسئلة الشائعة"
              title={
                <>
                  إجابات عن أكثر ما{" "}
                  <span className="text-primary-600">يهمّك</span>
                </>
              }
            />
            <div className="mt-10 w-full">
              <FaqAccordion items={FAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTASection
        title={
          <>
            جاهز لرؤية منصتك{" "}
            <span className="text-primary-600">على أرض الواقع؟</span>
          </>
        }
        subtitle="اطلب عرضك التجريبي اليوم وابدأ رحلة التحول التشغيلي لمنشأتك."
        primaryLabel="احجز العرض التجريبي"
        primaryHref="#"
        secondaryLabel="استكشف الوحدات"
        secondaryHref="/modules"
      />
    </>
  );
}
