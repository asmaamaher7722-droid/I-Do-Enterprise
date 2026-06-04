import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { iconMap, type IconName } from "@/components/Icons";
import { tintClasses, type Tint } from "@/components/ModuleCard";
import {
  BrowserFrame,
  KpiTile,
  Line,
  Donut,
  StatusPill,
  Panel,
  FeatureList,
} from "@/components/dash";

export const metadata: Metadata = {
  title: "التكاملات والشركاء — I Do Enterprise",
  description:
    "يتكامل I DO Enterprise مع أنظمة الموارد البشرية والمالية وERP والأجهزة الذكية وأنظمة الأمن لإنشاء منظومة تشغيل مترابطة بالكامل على مصدر بيانات واحد.",
};

/* ════════════════ Section data ════════════════ */
const SYSTEMS: { icon: IconName; label: string; tint: Tint }[] = [
  { icon: "layers", label: "أنظمة ERP", tint: "blue" },
  { icon: "users", label: "الموارد البشرية", tint: "teal" },
  { icon: "wallet", label: "الأنظمة المالية", tint: "purple" },
  { icon: "receipt", label: "أنظمة الرواتب", tint: "green" },
  { icon: "bolt", label: "أجهزة IoT", tint: "orange" },
  { icon: "lock", label: "التحكم بالوصول", tint: "rose" },
  { icon: "shield", label: "أنظمة الأمن", tint: "blue" },
  { icon: "bell", label: "البريد والتنبيهات", tint: "teal" },
  { icon: "chart", label: "ذكاء الأعمال BI", tint: "purple" },
  { icon: "link", label: "واجهات API", tint: "green" },
];

const FLOW: { icon: IconName; title: string; sub: string }[] = [
  { icon: "globe", title: "الأنظمة الخارجية", sub: "ERP · HR · IoT · أمن" },
  { icon: "link", title: "I DO Enterprise", sub: "طبقة التكامل" },
  { icon: "database", title: "طبقة البيانات الموحدة", sub: "مصدر واحد للحقيقة" },
  { icon: "chart", title: "لوحات التحكم", sub: "رؤية لحظية" },
  { icon: "sparkles", title: "رؤى الذكاء الاصطناعي", sub: "تنبؤ وتوصيات" },
  { icon: "check", title: "قرارات الأعمال", sub: "أسرع وأدق" },
];

const BENEFITS: { icon: IconName; tint: Tint; title: string; desc: string }[] = [
  { icon: "rocket", tint: "teal", title: "نشر أسرع", desc: "تكامل جاهز يختصر زمن التطبيق من أشهر إلى أسابيع." },
  { icon: "layers", tint: "blue", title: "بلا جزر بيانات", desc: "كل أنظمتك تتحدث معًا — لا بيانات معزولة أو مكررة." },
  { icon: "wallet", tint: "purple", title: "تكاليف تكامل أقل", desc: "تكاملات جاهزة وواجهات موحدة تخفض كلفة الربط والصيانة." },
  { icon: "sync", tint: "green", title: "مزامنة لحظية", desc: "تتدفق البيانات بين الأنظمة في الوقت الحقيقي." },
  { icon: "gauge", tint: "orange", title: "قرارات أفضل", desc: "صورة موحدة وكاملة تدعم قرارات مبنية على بيانات حيّة." },
  { icon: "building", tint: "rose", title: "قابلية توسع مؤسسية", desc: "أضف أنظمة ومواقع جديدة دون إعادة بناء البنية." },
];

const TRUST: { icon: IconName; title: string; desc: string }[] = [
  { icon: "lock", title: "واجهات API آمنة", desc: "مصادقة قائمة على الرموز وتشفير TLS لكل اتصال." },
  { icon: "shield", title: "أمان مؤسسي", desc: "حماية على مستوى المؤسسة للبيانات أثناء النقل والتخزين." },
  { icon: "database", title: "حوكمة البيانات", desc: "إطار حوكمة يضمن الامتثال للوائح المحلية والدولية." },
  { icon: "users", title: "صلاحيات حسب الدور", desc: "تحكم دقيق في من يصل لأي بيانات أو تكامل." },
  { icon: "tasks", title: "سجلات تدقيق", desc: "توثيق كامل لكل عملية تكامل ومزامنة." },
  { icon: "sync", title: "توفر عالٍ", desc: "بنية سحابية بوقت تشغيل 99.9% ونسخ احتياطي تلقائي." },
];

const ERP_EXAMPLES = ["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "أنظمة ERP مخصّصة"];
const HR_EXAMPLES = [
  { icon: "users" as IconName, t: "أنظمة الموارد البشرية" },
  { icon: "clock" as IconName, t: "أنظمة الحضور والانصراف" },
  { icon: "receipt" as IconName, t: "منصات الرواتب" },
  { icon: "tasks" as IconName, t: "إدارة القوى العاملة" },
];
const PARTNERS = [
  "SAP", "Oracle", "Microsoft", "Odoo", "AWS", "Azure",
  "Salesforce", "Zoho", "Honeywell", "Siemens", "Cisco", "Twilio",
];

/* ════════════════ Integration-specific visuals ════════════════ */
function IntegrationsConsole() {
  const rows = [
    { t: "نظام ERP — SAP", s: "متصل", k: "success" as const, time: "قبل 2 د" },
    { t: "الموارد البشرية", s: "متصل", k: "success" as const, time: "قبل 5 د" },
    { t: "أجهزة IoT — BMS", s: "مزامنة", k: "info" as const, time: "الآن" },
    { t: "ذكاء الأعمال BI", s: "متصل", k: "success" as const, time: "قبل 1 د" },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — مركز التكاملات">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <KpiTile value="24" label="نظام متصل" tint="blue" />
          <KpiTile value="18.4K" label="مزامنة اليوم" tint="teal" />
          <KpiTile value="1.2s" label="زمن المزامنة" tint="green" />
        </div>
        <Panel title="الأنظمة المتصلة" action="عرض الكل">
          <div className="space-y-2.5">
            {rows.map((r) => (
              <div key={r.t} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-[11px] text-text">
                  <span className="h-2 w-2 rounded-full bg-[#1FA45C]" />
                  {r.t}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[10px] text-text-subtle">{r.time}</span>
                  <StatusPill label={r.s} kind={r.k} />
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </BrowserFrame>
  );
}

/* Section 2 — connected ecosystem (hub + 5 left / 5 right + connectors) */
const FAN_Y = [12, 31, 50, 69, 88];
function EcoChip({ s }: { s: (typeof SYSTEMS)[number] }) {
  const Icon = iconMap[s.icon];
  return (
    <div className="flex items-center gap-2.5 rounded-tile border border-hairline bg-white p-2.5 shadow-md">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tintClasses[s.tint]}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-[13px] font-bold text-strong">{s.label}</span>
    </div>
  );
}
function EcoHub() {
  return (
    <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-hero-gradient text-center text-white shadow-lg">
      <span className="ltr text-[16px] font-extrabold">I DO</span>
      <span className="text-[11px] font-bold text-white">Enterprise</span>
      <span className="mt-0.5 text-[9px] text-white/80">قاعدة بيانات واحدة</span>
    </div>
  );
}
function Ecosystem() {
  const left = SYSTEMS.slice(0, 5);
  const right = SYSTEMS.slice(5, 10);
  return (
    <>
      {/* Desktop fan */}
      <div className="relative mx-auto hidden h-[460px] w-full max-w-[860px] lg:block">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {FAN_Y.map((y, i) => (
            <line key={`l${i}`} x1="50" y1="50" x2="25" y2={y} stroke="#C9D9F7" strokeWidth="0.4" strokeDasharray="2 2" />
          ))}
          {FAN_Y.map((y, i) => (
            <line key={`r${i}`} x1="50" y1="50" x2="75" y2={y} stroke="#C9D9F7" strokeWidth="0.4" strokeDasharray="2 2" />
          ))}
        </svg>
        <div className="absolute inset-y-0 right-0 flex w-[230px] flex-col justify-between py-2">
          {left.map((s) => (
            <EcoChip key={s.label} s={s} />
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <EcoHub />
        </div>
        <div className="absolute inset-y-0 left-0 flex w-[230px] flex-col justify-between py-2">
          {right.map((s) => (
            <EcoChip key={s.label} s={s} />
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center gap-6 lg:hidden">
        <EcoHub />
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {SYSTEMS.map((s) => (
            <EcoChip key={s.label} s={s} />
          ))}
        </div>
      </div>
    </>
  );
}

function ErpDash() {
  const erps = [
    { t: "SAP", s: "متصل", k: "success" as const },
    { t: "Oracle", s: "متصل", k: "success" as const },
    { t: "Microsoft Dynamics", s: "مزامنة", k: "info" as const },
    { t: "Odoo", s: "متصل", k: "success" as const },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — مزامنة أنظمة ERP">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <KpiTile value="18.4K" label="سجلات مُزامنة" tint="blue" />
          <KpiTile value="99.9%" label="دقة المطابقة" tint="green" />
          <KpiTile value="2 د" label="آخر مزامنة" tint="teal" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Panel title="أنظمة ERP المتصلة">
            <div className="space-y-2.5">
              {erps.map((e) => (
                <div key={e.t} className="flex items-center justify-between gap-2">
                  <span className="ltr text-[11px] font-semibold text-text">{e.t}</span>
                  <StatusPill label={e.s} kind={e.k} />
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="البيانات المالية والتشغيلية" action="آخر 12 شهر">
            <Line accent="#2563EB" />
          </Panel>
        </div>
      </div>
    </BrowserFrame>
  );
}

function IotDash() {
  const sensors = [
    { t: "نظام التكييف HVAC", v: "22.4°C", c: "#1FA45C" },
    { t: "عدّاد الطاقة الذكي", v: "84 kW", c: "#2563EB" },
    { t: "نظام إدارة المبنى BMS", v: "طبيعي", c: "#1FA45C" },
    { t: "مستشعر الإشغال", v: "67%", c: "#7C5CFC" },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — البيانات التشغيلية المباشرة">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KpiTile value="22°" label="الحرارة" tint="teal" />
          <KpiTile value="84kW" label="استهلاك الطاقة" tint="blue" />
          <KpiTile value="67%" label="الإشغال" tint="purple" />
          <KpiTile value="1.2k" label="لتر/ساعة المياه" tint="green" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Panel title="الأجهزة المتصلة">
            <div className="space-y-2.5">
              {sensors.map((s) => (
                <div key={s.t} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[11px] text-text">
                    <span className="h-2 w-2 animate-none rounded-full" style={{ backgroundColor: s.c }} />
                    {s.t}
                  </span>
                  <span className="ltr text-[11px] font-bold" style={{ color: s.c }}>
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="استهلاك الطاقة" action="مباشر">
            <Line accent="#0FB6A0" />
          </Panel>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SecurityDash() {
  const events = [
    { t: "دخول — البوابة الرئيسية", s: "مصرّح", k: "success" as const },
    { t: "زائر — الاستقبال", s: "بانتظار", k: "warning" as const },
    { t: "محاولة وصول — المستودع", s: "مرفوض", k: "danger" as const },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — مركز التحكم الأمني">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {["كاميرا 01", "كاميرا 02", "كاميرا 03"].map((c) => (
            <div key={c} className="relative flex h-16 items-center justify-center rounded-lg bg-navy-900">
              <span className="absolute right-1.5 top-1.5 flex items-center gap-1 text-[8px] font-bold text-[#FF5F57]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" /> REC
              </span>
              <iconMap.shield className="h-5 w-5 text-white/30" />
              <span className="absolute bottom-1 text-[8px] text-white/50">{c}</span>
            </div>
          ))}
        </div>
        <Panel title="سجل أحداث الوصول" action="مباشر">
          <div className="space-y-2.5">
            {events.map((e) => (
              <div key={e.t} className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-text">{e.t}</span>
                <StatusPill label={e.s} kind={e.k} />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </BrowserFrame>
  );
}

function ApiPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-900/20 bg-navy-900 shadow-mockup">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ltr ms-3 text-[11px] font-semibold text-white/60">api.i-do.sa</span>
      </div>
      <div className="ltr p-4 text-start font-mono text-[12px] leading-6">
        <div>
          <span className="text-[#5BE3A7]">GET</span>{" "}
          <span className="text-white/90">/api/v1/assets?status=active</span>
        </div>
        <div className="text-white/50">Authorization: Bearer ••••••••</div>
        <div className="mt-3 text-[#5BE3A7]">200 OK</div>
        <pre className="mt-1 whitespace-pre-wrap text-white/80">{`{
  "data": [
    { "id": "AST-2031", "name": "Chiller C-03", "health": 0.94 },
    { "id": "AST-2044", "name": "Generator G-12", "health": 0.71 }
  ],
  "synced_at": "2026-06-04T10:24:00Z"
}`}</pre>
        <div className="mt-4 flex flex-wrap gap-2">
          {["POST /work-orders", "GET /sites", "PATCH /assets/:id", "webhook: sla.breached"].map((e) => (
            <span key={e} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] text-white/70">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════ Page ════════════════ */
export default function IntegrationsPage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-24">
          <Breadcrumb tone="dark" items={[{ label: "الرئيسية", href: "/" }, { label: "التكاملات والشركاء" }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                التكاملات
              </span>
              <h1 className="text-[30px] font-extrabold leading-tight md:text-[40px] lg:text-[48px]">
                اربط جميع أنظمتك في{" "}
                <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                  منصة واحدة موحدة
                </span>
              </h1>
              <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
                يتكامل <span className="ltr font-semibold">I DO Enterprise</span> مع
                أنظمة الموارد البشرية والمالية و<span className="ltr">ERP</span> والأجهزة
                الذكية وأنظمة الأمن والتشغيل لإنشاء منظومة تشغيل مترابطة بالكامل.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" surface="dark" withArrow>
                  اطلب عرض تجريبي
                </Button>
                <Button href="#ecosystem" variant="secondary" surface="dark">
                  استكشف التكاملات
                </Button>
              </div>
            </div>
            <div className="lg:ps-4">
              <IntegrationsConsole />
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Connected enterprise ecosystem */}
      <section id="ecosystem" className="section-y scroll-mt-24 bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="المنظومة المترابطة"
            title={
              <>
                منظومة مؤسسية{" "}
                <span className="text-primary-600">متصلة بالكامل</span>
              </>
            }
            subtitle="تجلس I DO Enterprise في قلب أنظمتك — تتدفق البيانات بينها جميعًا في الوقت الحقيقي."
          />
          <div className="mt-12 w-full">
            <Ecosystem />
          </div>
        </div>
      </section>

      {/* 3 · ERP integrations */}
      <section className="section-y bg-surface-light">
        <div className="container-x">
          <SectionHeader
            eyebrow="أنظمة ERP"
            title={
              <>
                تكامل عميق مع{" "}
                <span className="text-primary-600">أنظمة تخطيط الموارد</span>
              </>
            }
            subtitle="مزامنة ثنائية الاتجاه للبيانات المالية والتشغيلية مع أبرز أنظمة ERP العالمية والمخصّصة."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <ErpDash />
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-8 text-muted">
                اربط دورتك المالية والتشغيلية مباشرة — تتدفق القيود والأوامر
                والموازنات بين <span className="ltr">ERP</span> ومنصة I DO دون إعادة إدخال.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {ERP_EXAMPLES.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2 text-[14px] font-semibold text-strong shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1FA45C]" />
                    <span className="ltr">{e}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · HR & workforce integrations */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="الموارد البشرية"
            title={
              <>
                مزامنة كاملة{" "}
                <span className="text-primary-600">للقوى العاملة</span>
              </>
            }
            subtitle="بيانات الموظفين والحضور والرواتب تتدفق تلقائيًا لتغذية جدولة العمل وأوامر المهام."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              {/* Sync flow */}
              <div className="flex flex-col items-center gap-3 rounded-card border border-hairline bg-surface-light p-8">
                <div className="flex w-full items-center justify-between gap-2">
                  {[
                    { icon: "users" as IconName, t: "نظام الموارد البشرية" },
                    { icon: "link" as IconName, t: "I DO Enterprise" },
                    { icon: "tasks" as IconName, t: "إدارة القوى العاملة" },
                  ].map((n, i, arr) => {
                    const Icon = iconMap[n.icon];
                    return (
                      <div key={n.t} className="flex flex-1 items-center">
                        <div className="flex flex-1 flex-col items-center gap-2 text-center">
                          <span className="flex h-12 w-12 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                            <Icon className="h-6 w-6" />
                          </span>
                          <span className="text-[12px] font-bold text-strong">{n.t}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <iconMap.sync className="mx-1 h-5 w-5 shrink-0 text-primary-600" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2 grid w-full grid-cols-3 gap-2">
                  <KpiTile value="1,024" label="موظف مُزامن" tint="blue" />
                  <KpiTile value="96%" label="دقة الحضور" tint="teal" />
                  <KpiTile value="آني" label="تحديث الرواتب" tint="green" />
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <FeatureList items={HR_EXAMPLES.map((e) => ({ icon: e.icon, title: e.t, desc: "مزامنة تلقائية ثنائية الاتجاه مع منصة I DO." }))} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 · IoT & smart building */}
      <section className="section-y bg-surface-light">
        <div className="container-x">
          <SectionHeader
            eyebrow="إنترنت الأشياء"
            title={
              <>
                بيانات حيّة من{" "}
                <span className="text-primary-600">المباني الذكية</span>
              </>
            }
            subtitle="مستشعرات وعدّادات وأنظمة إدارة مبانٍ تغذّي لوحاتك ببيانات تشغيلية لحظية."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <IotDash />
            <FeatureList
              items={[
                { icon: "bolt", title: "المستشعرات والعدّادات الذكية", desc: "قراءات لحظية للطاقة والمياه ودرجة الحرارة." },
                { icon: "gauge", title: "أنظمة التكييف HVAC", desc: "مراقبة الأداء والتحكم من لوحة موحدة." },
                { icon: "layers", title: "أنظمة إدارة المباني BMS", desc: "ربط كامل لأنظمة المبنى في مكان واحد." },
                { icon: "sync", title: "أجهزة المراقبة", desc: "تدفق مستمر للبيانات إلى لوحات التحكم." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6 · Security & access control */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="الأمن والتحكم بالوصول"
            title={
              <>
                مركز تحكم أمني{" "}
                <span className="text-primary-600">موحّد</span>
              </>
            }
            subtitle="اربط الكاميرات وأنظمة التحكم بالوصول وإدارة الزوار في شاشة أمنية واحدة."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <SecurityDash />
            </div>
            <div className="lg:order-1">
              <FeatureList
                items={[
                  { icon: "shield", title: "كاميرات المراقبة CCTV", desc: "عرض موحّد للكاميرات مع تنبيهات ذكية." },
                  { icon: "lock", title: "التحكم بالوصول", desc: "إدارة الأبواب والصلاحيات مركزيًا." },
                  { icon: "users", title: "إدارة الزوار", desc: "تسجيل وتتبع الزوار عبر كل المواقع." },
                  { icon: "bell", title: "منصات الأمن", desc: "تصعيد البلاغات الأمنية لحظيًا." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7 · Open API platform */}
      <section className="section-y bg-surface-light">
        <div className="container-x">
          <SectionHeader
            eyebrow="منصة API مفتوحة"
            title={
              <>
                واجهات مفتوحة{" "}
                <span className="text-primary-600">لمطوّري المؤسسة</span>
              </>
            }
            subtitle="ابنِ أي تكامل تحتاجه عبر واجهات REST وWebhooks موثّقة بالكامل وآمنة."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <ApiPanel />
            <FeatureList
              items={[
                { icon: "link", title: "واجهات REST", desc: "نقاط نهاية موثّقة لكل موارد المنصة." },
                { icon: "bell", title: "Webhooks", desc: "أحداث فورية تُدفع لأنظمتك عند كل تغيير." },
                { icon: "cog", title: "تكاملات مخصّصة", desc: "مرونة كاملة لبناء سيناريوهاتك الخاصة." },
                { icon: "globe", title: "اتصالات الطرف الثالث", desc: "اربط أي منصة خارجية بسهولة وأمان." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 8 · Data flow & unified visibility */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="تدفق البيانات"
            title={
              <>
                من الأنظمة المتفرقة إلى{" "}
                <span className="text-primary-600">قرار موحّد</span>
              </>
            }
            subtitle="تابع كيف تنتقل المعلومة من أنظمتك الخارجية حتى تصبح قرارًا مدعومًا بالبيانات."
          />
          <div className="mt-12 flex w-full max-w-2xl flex-col items-stretch gap-0">
            {FLOW.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={f.title} className="flex flex-col items-center">
                  <div className="flex w-full items-center gap-4 rounded-card border border-hairline bg-white p-4 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[15px] font-bold text-strong">{f.title}</span>
                      <span className="text-[13px] text-muted">{f.sub}</span>
                    </span>
                    <span className="ms-auto ltr text-[12px] font-bold text-text-subtle">{`0${i + 1}`}</span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <svg viewBox="0 0 24 24" className="my-1 h-5 w-5 text-primary-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M6 13l6 6 6-6" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 · Integration benefits */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="الفوائد"
            title={
              <>
                لماذا التكامل{" "}
                <span className="text-primary-600">مع I DO Enterprise</span>
              </>
            }
            subtitle="تكامل سلس يترجم مباشرةً إلى سرعة، توفير، وقرارات أفضل."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = iconMap[b.icon];
              return (
                <div
                  key={b.title}
                  className="flex flex-col gap-4 rounded-card border border-hairline bg-white p-6 shadow-md transition-all duration-150 hover:-translate-y-1 hover:border-[#D4E0F5] hover:shadow-lg"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-tile ${tintClasses[b.tint]}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[18px] font-bold text-strong">{b.title}</h3>
                  <p className="text-[15px] leading-7 text-muted">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 · Technology & trust (dark navy) */}
      <section className="section-y bg-navy-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="التقنية والموثوقية"
            title="تكامل آمن على مستوى المؤسسة"
            subtitle="كل اتصال محكوم ومُشفّر ومُسجّل — لأن ربط الأنظمة لا يجب أن يفتح ثغرة."
          />
          <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t) => {
              const Icon = iconMap[t.icon];
              return (
                <div key={t.title} className="flex flex-col gap-3 rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-white/15 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold text-white">{t.title}</h3>
                  <p className="text-[14px] leading-6 text-white/75">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 · Partners & technology ecosystem */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="الشركاء"
            title={
              <>
                نتكامل مع أبرز{" "}
                <span className="text-primary-600">أنظمة المؤسسات</span>
              </>
            }
            subtitle="منظومة تكامل واسعة تربطك بالأنظمة والمنصات التي تعتمد عليها مؤسستك."
          />
          <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex h-16 items-center justify-center rounded-card border border-hairline bg-surface-light text-[15px] font-extrabold text-text-subtle grayscale transition-all duration-150 hover:text-muted hover:shadow-sm"
              >
                <span className="ltr">{p}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[13px] text-text-subtle">والمزيد عبر واجهات API المفتوحة — أسماء الأنظمة لأغراض التوضيح.</p>
        </div>
      </section>

      {/* 12 · Final CTA */}
      <CTASection
        eyebrow="جاهز للربط؟"
        title={
          <>
            اجعل جميع أنظمتك تعمل{" "}
            <span className="text-primary-600">كمنصة واحدة</span>
          </>
        }
        subtitle="اربط البيانات والعمليات والأجهزة والفرق في منظومة تشغيل موحدة مدعومة بالذكاء الاصطناعي."
      />
    </>
  );
}
