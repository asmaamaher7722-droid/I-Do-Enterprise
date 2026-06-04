import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ModuleCard from "@/components/ModuleCard";
import StatsBlock from "@/components/StatsBlock";
import CTASection from "@/components/CTASection";
import HeroShowcase from "@/components/HeroShowcase";
import { iconMap } from "@/components/Icons";
import { MODULES, STEPS, SECTORS } from "@/lib/modules";

const HERO_FEATURES = [
  { icon: "gauge", title: "رؤية كاملة", desc: "متابعة الأداء في الوقت الحقيقي" },
  { icon: "mapPin", title: "سيطرة حقيقية", desc: "بالإحداثيات والبيانات ببساطة" },
  { icon: "sparkles", title: "ذكاء اصطناعي مدمج", desc: "يدعمك في اتخاذ القرارات أدق" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-hero-gradient">
        {/* network / constellation pattern (left) */}
        <svg
          className="pointer-events-none absolute -left-10 top-0 hidden h-[520px] w-[620px] text-white/25 lg:block"
          viewBox="0 0 620 520"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth="1">
            <path d="M60 80 L180 140 L120 260 L60 80 M180 140 L300 90 L300 220 L180 140 M120 260 L240 320 L300 220 M240 320 L160 420 L120 260 M300 220 L420 260 L380 380 L240 320 M420 260 L520 180 M380 380 L460 460" />
          </g>
          <g fill="currentColor">
            {[
              [60, 80], [180, 140], [120, 260], [300, 90], [300, 220],
              [240, 320], [160, 420], [420, 260], [520, 180], [380, 380], [460, 460],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3.5 : 2.5} />
            ))}
          </g>
        </svg>

        {/* faint city skyline (bottom) */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-full text-white/[0.08]"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 180 V120 H40 V90 H70 V120 H110 V70 H150 V40 H175 V70 H210 V110 H250 V140 H300 V60 H330 V30 H355 V60 H400 V100 H450 V130 H520 V80 H560 V50 H585 V80 H640 V120 H700 V150 H760 V90 H800 V55 H825 V90 H880 V125 H950 V100 H1000 V70 H1025 V100 H1080 V130 H1140 V110 H1200 V180 Z" />
        </svg>

        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Text — right column in RTL */}
          <div className="flex flex-col gap-6 text-white">
            <h1 className="text-[30px] font-extrabold leading-[1.25] md:text-[42px] lg:text-[50px]">
              منصة تشغيل مؤسسي ذكي تربط جميع عمليات منشأتك في نظام واحد
            </h1>
            <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
              تحكم كامل في العمليات، الأصول، والموردين مع رؤية لحظية وقرارات مبنية
              على البيانات.
            </p>
            <div>
              <Button href="/contact" variant="primary" surface="dark" withArrow>
                اطلب عرض تجريبي
              </Button>
            </div>
          </div>

          {/* Product showcase — left column in RTL */}
          <div className="relative pb-10 lg:pb-0 lg:ps-6">
            <HeroShowcase />
          </div>
        </div>

        {/* Floating feature cards */}
        <div className="container-x relative pb-14 lg:pb-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_FEATURES.map((f) => {
              const Icon = iconMap[f.icon];
              return (
                <div
                  key={f.title}
                  className="flex items-center justify-between gap-3 rounded-card border border-white/40 bg-white/95 px-5 py-4 shadow-lg backdrop-blur"
                >
                  <div>
                    <div className="text-[16px] font-extrabold text-strong">{f.title}</div>
                    <div className="mt-0.5 text-[13px] leading-5 text-muted">{f.desc}</div>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Modules grid ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="المميزات"
            title={
              <>
                نظام متكامل لإدارة جميع{" "}
                <span className="text-primary-600">عملياتك</span>
              </>
            }
            subtitle="مجموعة وحدات تعمل معًا بانسجام لتغطي كل جوانب إدارة منشأتك."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <ModuleCard
                key={m.id}
                icon={m.icon}
                tint={m.tint}
                title={m.title}
                description={m.description}
                href={`/modules#${m.id}`}
              />
            ))}
          </div>
          <div className="mt-12">
            <Button href="/modules" variant="secondary" withArrow>
              عرض الكل
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="section-y bg-surface-light">
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

      {/* ───────── Stats / proof ───────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <StatsBlock value="+20" label="منشأة تثق بنا" />
            <StatsBlock value="%98" label="رضا العملاء" />
            <StatsBlock value="24/7" label="دعم متواصل" />
            <StatsBlock value="+6" label="وحدات متكاملة" />
          </div>
        </div>
      </section>

      {/* ───────── Sectors ───────── */}
      <section id="sectors" className="section-y bg-surface-light scroll-mt-24">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="القطاعات"
            title={
              <>
                القطاعات التي{" "}
                <span className="text-primary-600">نخدمها</span>
              </>
            }
            subtitle="حلول مهيأة لمختلف القطاعات والمنشآت متعددة المواقع."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.slice(0, 6).map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.id}
                  className="overflow-hidden rounded-card border border-hairline bg-white shadow-md"
                >
                  <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-[#DCE7FB] to-[#EEF3FF]">
                    <Icon className="h-10 w-10 text-primary-600/60" />
                    <span className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] font-bold text-strong">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted">{s.fit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Partners strip ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="شركاؤنا"
            title={
              <>
                مع أفضل الشركاء، نصنع فرقًا{" "}
                <span className="text-primary-600">حقيقيًا</span>
              </>
            }
          />
          <div className="mt-10 grid w-full grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 lg:grid-cols-5">
            {["KAFD", "Riyadh", "Sela", "Aramco", "NEOM"].map((p) => (
              <div
                key={p}
                className="flex h-14 items-center justify-center rounded-xl border border-hairline bg-surface-light text-[16px] font-extrabold text-muted"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <CTASection
        title={
          <>
            ابدأ في ربط عمليات منشأتك وتحقيق{" "}
            <span className="text-primary-600">تحكم كامل</span> اليوم
          </>
        }
        subtitle="انضم إلى المنشآت التي تدير عملياتها بكفاءة عبر منصة واحدة."
      />
    </>
  );
}
