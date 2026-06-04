import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ModuleCard from "@/components/ModuleCard";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { iconMap } from "@/components/Icons";
import {
  getAllModuleSlugs,
  getModuleBySlug,
} from "@/lib/modules";

interface Params {
  params: { slug: string };
}

/* Pre-render every known module — adding a real detail page later
   means only fleshing out the body below; routing already works. */
export function generateStaticParams() {
  return getAllModuleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const found = getModuleBySlug(params.slug);
  if (!found) return { title: "الموديول غير موجود — I Do Enterprise" };
  return {
    title: `${found.module.title} — I Do Enterprise`,
    description: found.module.oneLiner,
  };
}

export default function ModuleDetailPage({ params }: Params) {
  const found = getModuleBySlug(params.slug);
  if (!found) notFound();

  const { module, category } = found;
  const Icon = iconMap[module.icon];
  const siblings = category.modules.filter((m) => m.slug !== module.slug);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-20">
          <Breadcrumb
            tone="dark"
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "الموديولات", href: "/modules" },
              { label: category.eyebrow, href: `/modules#cat-${category.id}` },
              { label: module.title },
            ]}
          />
          <div className="mt-8 flex max-w-3xl flex-col gap-6 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-tile bg-white/15 text-white">
              <Icon className="h-7 w-7" />
            </span>
            <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
              {category.eyebrow}
            </span>
            <h1 className="text-[32px] font-extrabold leading-tight md:text-[44px] lg:text-[52px]">
              {module.title}
            </h1>
            <p className="max-w-prose text-[16px] leading-8 text-white/80 md:text-[18px]">
              {module.oneLiner}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" withArrow>
                اطلب عرض تجريبي
              </Button>
              <Button href="/modules" variant="secondary" surface="dark">
                كل الموديولات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Placeholder body (replace with full detail later) ───────── */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-card border border-hairline bg-surface-light p-8 text-center md:p-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
              <Icon className="h-7 w-7" />
            </span>
            <h2 className="text-[22px] font-extrabold text-strong md:text-[28px]">
              الصفحة التفصيلية لهذا الموديول قيد الإنشاء
            </h2>
            <p className="max-w-prose text-[15px] leading-8 text-muted md:text-[16px]">
              نُجهّز شرحًا كاملًا لـ«{module.title}» بالشاشات والإمكانات والتكاملات.
              في هذه الأثناء، يسعدنا أن نعرض لك الموديول مباشرةً ضمن المنصة الموحّدة.
            </p>
            <div className="mt-2">
              <Button href="/contact" variant="primary" withArrow>
                احجز عرضًا تجريبيًا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Related modules in the same category ───────── */}
      {siblings.length > 0 && (
        <section className="section-y bg-surface-light">
          <div className="container-x flex flex-col items-center">
            <SectionHeader
              eyebrow={category.eyebrow}
              title={
                <>
                  موديولات أخرى في{" "}
                  <span className="text-primary-600">نفس الفئة</span>
                </>
              }
              subtitle="موديولات تعمل جنبًا إلى جنب على نفس قاعدة البيانات الموحّدة."
            />
            <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((m) => (
                <ModuleCard
                  key={m.slug}
                  icon={m.icon}
                  tint={category.tint}
                  title={m.title}
                  description={m.oneLiner}
                  href={`/modules/${m.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── CTA ───────── */}
      <CTASection
        title={
          <>
            جاهز لرؤية{" "}
            <span className="text-primary-600">{module.title}</span> أثناء العمل؟
          </>
        }
        subtitle="احجز عرضًا تجريبيًا وشاهد كيف يتكامل هذا الموديول مع بقية المنصة."
      />
    </>
  );
}
