import type { Metadata } from "next";
import type { ReactNode, SVGProps } from "react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { iconMap, type IconName } from "@/components/Icons";
import { tintClasses, type Tint } from "@/components/ModuleCard";

export const metadata: Metadata = {
  title: "التطبيق ولوحات التحكم — I Do Enterprise",
  description:
    "تجربة متكاملة عبر جميع الأجهزة — لوحات تحكم تنفيذية، مركز عمليات، تطبيق ميداني، وإدارة أصول، كلها على مصدر بيانات واحد في الوقت الحقيقي.",
};

/* ════════════════ Reusable UI primitives (recreated UI, not images) ════════════════ */
function BrowserFrame({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-mockup">
      <div className="flex items-center justify-between border-b border-hairline bg-surface-light px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        </span>
        {title ? (
          <span className="rounded-md bg-white px-3 py-1 text-[11px] font-semibold text-muted">{title}</span>
        ) : null}
        <span className="w-12" />
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

function PhoneFrame({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="w-[230px] shrink-0 rounded-[30px] border-[6px] border-[#0C1A38] bg-[#0C1A38] shadow-mockup">
      <div className="relative overflow-hidden rounded-[24px] bg-white">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0C1A38]" />
        <div className="flex items-center justify-between px-5 pb-1 pt-2 text-[10px] font-bold text-strong">
          <span className="ltr">9:41</span>
          <span className="flex items-center gap-1 text-text-subtle">
            <span className="h-2 w-3 rounded-[2px] border border-text-subtle" />
          </span>
        </div>
        {title ? (
          <div className="px-4 pb-2 text-[13px] font-extrabold text-strong">{title}</div>
        ) : null}
        <div className="px-3 pb-4">{children}</div>
      </div>
    </div>
  );
}

function KpiTile({ delta, value, label, tint }: { delta?: string; value: string; label: string; tint: Tint }) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-2.5">
      {delta ? (
        <span className={`inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-bold ${tintClasses[tint]}`}>
          <span className="ltr">{delta}</span>
        </span>
      ) : null}
      <div className="mt-1.5 text-[18px] font-extrabold text-strong">
        <span className="ltr">{value}</span>
      </div>
      <div className="text-[10px] text-muted">{label}</div>
    </div>
  );
}

function Bars({ accent = "#2563EB", data = [40, 55, 48, 62, 52, 70, 60, 76, 68, 82, 74, 92] }: { accent?: string; data?: number[] }) {
  return (
    <div className="flex h-20 items-end justify-between gap-1">
      {data.map((h, i) => (
        <div
          key={i}
          className="w-full rounded-t-sm"
          style={{ height: `${h}%`, backgroundColor: i === data.length - 1 ? accent : "#C9D9F7" }}
        />
      ))}
    </div>
  );
}

function Line({ accent = "#2563EB" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-20 w-full">
      <polyline
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="0,32 14,24 28,27 42,16 56,20 70,10 85,14 100,7"
      />
      <line x1="0" y1="39" x2="100" y2="39" stroke="#E6ECF5" strokeWidth="1" />
    </svg>
  );
}

function Donut({ pct, accent, label }: { pct: number; accent: string; label?: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E6ECF5" strokeWidth="3.5" />
        <circle
          cx="18"
          cy="18"
          r="15.5"
          fill="none"
          stroke={accent}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={`${(pct * 0.974).toFixed(1)} 100`}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-[16px] font-extrabold text-strong">
          <span className="ltr">{pct}%</span>
        </div>
        {label ? <div className="text-[9px] text-muted">{label}</div> : null}
      </div>
    </div>
  );
}

function ProgressRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[10px]">
        <span className="text-muted">{label}</span>
        <span className="ltr font-bold" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-light2">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

const PILL: Record<string, string> = {
  success: "bg-[#E4F6EC] text-[#1FA45C]",
  warning: "bg-[#F7EEDD] text-[#B0822E]",
  info: "bg-primary-100 text-primary-600",
  danger: "bg-[#FBE7E8] text-[#DC2F36]",
};
function StatusPill({ label, kind = "info" }: { label: string; kind?: keyof typeof PILL }) {
  return <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${PILL[kind]}`}>{label}</span>;
}

function InsightCard({ icon, title, text, className = "" }: { icon: IconName; title: string; text: string; className?: string }) {
  const Icon = iconMap[icon];
  return (
    <div className={`flex w-[230px] items-start gap-2.5 rounded-tile border border-hairline bg-white p-3 shadow-lg ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[12px] font-bold text-strong">{title}</div>
        <div className="text-[10px] leading-4 text-muted">{text}</div>
      </div>
    </div>
  );
}

function Panel({ title, action, children }: { title: string; action?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-bold text-strong">{title}</span>
        {action ? <span className="text-[10px] font-semibold text-primary-600">{action}</span> : null}
      </div>
      {children}
    </div>
  );
}

/* Feature list beside a dashboard */
function FeatureList({ items }: { items: { icon: IconName; title: string; desc: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((f) => {
        const Icon = iconMap[f.icon];
        return (
          <li key={f.title} className="flex items-start gap-4 rounded-tile bg-surface-light p-4">
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
  );
}

/* ════════════════ Recreated dashboards ════════════════ */
function ExecutiveDash() {
  return (
    <BrowserFrame title="I DO Enterprise — لوحة القيادة التنفيذية">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KpiTile delta="+8%" value="2.4M" label="الإيرادات" tint="purple" />
          <KpiTile delta="+5%" value="94%" label="كفاءة التشغيل" tint="teal" />
          <KpiTile delta="+3%" value="98%" label="امتثال SLA" tint="green" />
          <KpiTile delta="+6%" value="91%" label="صحة الأصول" tint="blue" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <Panel title="النظرة المالية" action="آخر 12 شهر">
              <Line accent="#7C5CFC" />
            </Panel>
          </div>
          <Panel title="امتثال SLA">
            <Donut pct={98} accent="#1FA45C" label="هذا الشهر" />
          </Panel>
        </div>
        <Panel title="أداء القوى العاملة">
          <div className="space-y-2">
            <ProgressRow label="فريق الصيانة" pct={96} color="#0FB6A0" />
            <ProgressRow label="فريق العمليات" pct={88} color="#2563EB" />
            <ProgressRow label="فريق المرافق" pct={92} color="#7C5CFC" />
          </div>
        </Panel>
      </div>
    </BrowserFrame>
  );
}

function OpsDash() {
  const orders = [
    { t: "صيانة مكيف — المبنى A", s: "قيد التنفيذ", k: "warning" as const },
    { t: "استبدال مضخة — الطابق 3", s: "مكتمل", k: "success" as const },
    { t: "فحص الإنذار — الجناح B", s: "معلق", k: "info" as const },
    { t: "تسرب مياه — الموقف", s: "حرج", k: "danger" as const },
  ];
  const sites = [
    { name: "المقر الرئيسي", status: "تشغيل طبيعي", c: "#1FA45C" },
    { name: "الفرع الشرقي", status: "تنبيه نشط", c: "#B0822E" },
    { name: "المستودع المركزي", status: "تشغيل طبيعي", c: "#1FA45C" },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — مركز التحكم بالعمليات">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KpiTile value="124" label="أوامر عمل مفتوحة" tint="blue" />
          <KpiTile value="38" label="طلبات خدمة" tint="teal" />
          <KpiTile value="56" label="مهام اليوم" tint="purple" />
          <KpiTile value="3" label="بلاغات حرجة" tint="rose" />
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-[#F4DADB] bg-[#FDF4F4] p-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FBE7E8] text-[#DC2F36]">
            <span className="h-2 w-2 rounded-full bg-[#DC2F36]" />
          </span>
          <span className="text-[11px] font-semibold text-strong">بلاغ حرج: تسرب مياه — الموقف B · تم الإسناد للفريق</span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Panel title="أوامر العمل" action="عرض الكل">
            <div className="space-y-2">
              {orders.map((o) => (
                <div key={o.t} className="flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] text-text">{o.t}</span>
                  <StatusPill label={o.s} kind={o.k} />
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="مراقبة المواقع">
            <div className="space-y-2.5">
              {sites.map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[11px] text-text">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.c }} />
                    {s.name}
                  </span>
                  <span className="text-[10px] text-muted">{s.status}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AssetDash() {
  const assets = [
    { name: "مبرّد مركزي C-03", s: "جيد", k: "success" as const },
    { name: "مولد كهربائي G-12", s: "يحتاج صيانة", k: "warning" as const },
    { name: "مصعد E-05", s: "جيد", k: "success" as const },
    { name: "مضخة P-21", s: "حرج", k: "danger" as const },
  ];
  return (
    <BrowserFrame title="I DO Enterprise — إدارة المرافق والأصول">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <KpiTile value="3,210" label="إجمالي الأصول" tint="blue" />
          <KpiTile value="48" label="صيانة وقائية مجدولة" tint="teal" />
          <KpiTile value="87%" label="استغلال المساحات" tint="purple" />
          <KpiTile value="91%" label="صحة الأصول" tint="green" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <Panel title="سجل الأصول" action="عرض الكل">
              <div className="space-y-2">
                {assets.map((a) => (
                  <div key={a.name} className="flex items-center justify-between gap-2">
                    <span className="truncate text-[11px] text-text">{a.name}</span>
                    <StatusPill label={a.s} kind={a.k} />
                  </div>
                ))}
              </div>
            </Panel>
          </div>
          <Panel title="استغلال المساحات">
            <Donut pct={87} accent="#7C5CFC" label="المتوسط" />
          </Panel>
        </div>
        <Panel title="صحة الأصول حسب الفئة">
          <div className="space-y-2">
            <ProgressRow label="أنظمة التكييف" pct={94} color="#0FB6A0" />
            <ProgressRow label="الأنظمة الكهربائية" pct={88} color="#2563EB" />
            <ProgressRow label="أنظمة السباكة" pct={82} color="#7C5CFC" />
          </div>
        </Panel>
      </div>
    </BrowserFrame>
  );
}

/* Mobile screens */
function PhoneWorkOrders() {
  const tasks = [
    { t: "صيانة مكيف", site: "المبنى A · 10:00", k: "warning" as const, s: "قيد التنفيذ" },
    { t: "فحص مضخة", site: "الطابق 3 · 11:30", k: "info" as const, s: "جديد" },
    { t: "استبدال فلتر", site: "الجناح B · 13:00", k: "success" as const, s: "مكتمل" },
  ];
  return (
    <PhoneFrame title="أوامر العمل">
      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.t} className="rounded-xl border border-hairline bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold text-strong">{t.t}</span>
              <StatusPill label={t.s} kind={t.k} />
            </div>
            <div className="mt-1 text-[10px] text-muted">{t.site}</div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function PhoneChecklist() {
  const items = [
    { t: "التحقق من مستوى الزيت", done: true },
    { t: "فحص الضغط", done: true },
    { t: "تنظيف الفلاتر", done: false },
    { t: "تسجيل القراءات", done: false },
  ];
  return (
    <PhoneFrame title="فحص ميداني">
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.t} className="flex items-center gap-2.5 rounded-xl border border-hairline bg-white p-3">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-md ${
                it.done ? "bg-[#1FA45C] text-white" : "border border-hairline bg-surface-light"
              }`}
            >
              {it.done ? (
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              ) : null}
            </span>
            <span className={`text-[12px] ${it.done ? "text-muted line-through" : "font-semibold text-strong"}`}>{it.t}</span>
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-primary-100 py-2.5 text-[12px] font-bold text-primary-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          رفع صورة
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneAsset() {
  return (
    <PhoneFrame title="مسح الأصل">
      <div className="space-y-3">
        <div className="relative flex h-28 items-center justify-center rounded-xl border-2 border-dashed border-primary-200 bg-surface-light">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M4 12h16" />
          </svg>
        </div>
        <div className="rounded-xl border border-hairline bg-white p-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold text-strong">مبرّد مركزي C-03</span>
            <StatusPill label="جيد" kind="success" />
          </div>
          <div className="mt-1 text-[10px] text-muted">
            الرمز: <span className="ltr">AST-2031</span> · المبنى A
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 py-2.5 text-[12px] font-bold text-white">
          تسجيل قراءة جديدة
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1FA45C]" />
          يعمل دون اتصال · ستتم المزامنة تلقائيًا
        </div>
      </div>
    </PhoneFrame>
  );
}

/* Ecosystem diagram — one platform across user types */
const ECO: { icon: IconName; label: string; sub: string; tint: Tint }[] = [
  { icon: "layers", label: "لوحة الويب", sub: "تحكم شامل", tint: "blue" },
  { icon: "phone", label: "تطبيق الجوال", sub: "ميداني متصل", tint: "teal" },
  { icon: "chart", label: "النظرة التنفيذية", sub: "مؤشرات واتجاهات", tint: "purple" },
  { icon: "wrench", label: "العمليات الميدانية", sub: "تنفيذ لحظي", tint: "orange" },
];
const ECO_POS = [
  { t: 4, l: 50 },
  { t: 50, l: 92 },
  { t: 96, l: 50 },
  { t: 50, l: 8 },
];
function EcoHub() {
  return (
    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-hero-gradient text-center text-white shadow-lg">
      <span className="ltr text-[14px] font-extrabold">I DO</span>
      <span className="mt-0.5 text-[10px] leading-tight text-white/85">قاعدة بيانات<br />واحدة</span>
    </div>
  );
}
function EcoCard({ e }: { e: (typeof ECO)[number] }) {
  const Icon = iconMap[e.icon];
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-card border border-hairline bg-white p-4 shadow-md">
      <span className={`flex h-11 w-11 items-center justify-center rounded-tile ${tintClasses[e.tint]}`}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[14px] font-bold text-strong">{e.label}</span>
      <span className="text-[11px] text-muted">{e.sub}</span>
    </div>
  );
}
function Ecosystem() {
  return (
    <>
      <div className="relative mx-auto hidden h-[420px] w-full max-w-[520px] lg:block">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          {ECO_POS.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.l} y2={p.t} stroke="#C9D9F7" strokeWidth="0.5" strokeDasharray="2 2" />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <EcoHub />
        </div>
        {ECO.map((e, i) => (
          <div
            key={e.label}
            className="absolute w-[150px] -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${ECO_POS[i].t}%`, left: `${ECO_POS[i].l}%` }}
          >
            <EcoCard e={e} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6 lg:hidden">
        <EcoHub />
        <div className="grid w-full grid-cols-2 gap-3">
          {ECO.map((e) => (
            <EcoCard key={e.label} e={e} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ════════════════ Static section data ════════════════ */
const BENEFITS: { icon: IconName; tint: Tint; title: string; desc: string }[] = [
  { icon: "bolt", tint: "teal", title: "رؤية في الوقت الحقيقي", desc: "تابع كل عملياتك لحظيًا عبر لوحات تحكم موحدة وتنبيهات فورية." },
  { icon: "gauge", tint: "blue", title: "قرارات أسرع", desc: "بيانات حيّة ورؤى ذكية تختصر زمن اتخاذ القرار بشكل ملموس." },
  { icon: "users", tint: "purple", title: "تعاون أفضل", desc: "فرق الإدارة والميدان والموردون يعملون على نفس المعلومة." },
  { icon: "wrench", tint: "green", title: "تقليل وقت التعطل", desc: "صيانة وقائية وتنبؤ بالأعطال يحافظان على استمرارية التشغيل." },
  { icon: "chart", tint: "orange", title: "إنتاجية أعلى", desc: "أتمتة المهام وسير العمل تحرر فرقك للتركيز على ما يهم." },
  { icon: "wallet", tint: "rose", title: "خفض التكاليف التشغيلية", desc: "تحسين استخدام الموارد وتتبع دقيق يقلّلان الهدر المالي." },
];

const TRUST: { icon: IconName; title: string; desc: string }[] = [
  { icon: "shield", title: "أمان مؤسسي", desc: "تشفير شامل وحماية على مستوى المؤسسة للبيانات أثناء النقل والتخزين." },
  { icon: "tasks", title: "سجلات تدقيق", desc: "توثيق كامل لكل إجراء داخل النظام لضمان الشفافية والمساءلة." },
  { icon: "lock", title: "صلاحيات حسب الدور", desc: "وصول مضبوط لكل مستخدم بحسب دوره وموقعه داخل المؤسسة." },
  { icon: "building", title: "دعم متعدد المواقع", desc: "إدارة جميع فروعك ومواقعك من منصة واحدة مركزية." },
  { icon: "database", title: "بنية سحابية", desc: "توفر عالٍ ووقت تشغيل 99.9% مع نسخ احتياطي تلقائي." },
];

const AI_CARDS: { icon: IconName; title: string; text: string }[] = [
  { icon: "sparkles", title: "صيانة تنبؤية", text: "احتمال تعطّل المبرّد C-03 خلال 14 يوم — يُنصح بجدولة صيانة وقائية." },
  { icon: "bolt", title: "كشف الانحرافات", text: "استهلاك كهرباء غير معتاد في المبنى B تجاوز المعدل بنسبة 23%." },
  { icon: "chart", title: "توصية ذكية", text: "إعادة جدولة المهام الميدانية تقلّل زمن التنقل بنسبة 18%." },
];

/* Cross-device synchronization roles */
const ROLES: { icon: IconName; tint: Tint; role: string; task: string }[] = [
  { icon: "chart", tint: "purple", role: "تنفيذي", task: "يرى المؤشرات والاتجاهات لاتخاذ القرار" },
  { icon: "gauge", tint: "blue", role: "مدير", task: "يوزّع المهام ويتابع الأداء لحظيًا" },
  { icon: "wrench", tint: "teal", role: "فني", task: "ينفّذ من الميدان عبر تطبيق الجوال" },
  { icon: "cart", tint: "green", role: "مورد", task: "يستلم الطلبات ويحدّث حالة التنفيذ" },
];

/* ════════════════ Page ════════════════ */
export default function AppDashboardPage() {
  const Database = iconMap.database;
  return (
    <>
      {/* 1 · Hero */}
      <section className="bg-hero-gradient">
        <div className="container-x py-16 lg:py-24">
          <Breadcrumb tone="dark" items={[{ label: "الرئيسية", href: "/" }, { label: "التطبيق ولوحات التحكم" }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                التطبيق ولوحات التحكم
              </span>
              <h1 className="text-[30px] font-extrabold leading-tight md:text-[40px] lg:text-[48px]">
                منصة واحدة...{" "}
                <span className="underline decoration-white/40 decoration-4 underline-offset-8">
                  تجربة متكاملة عبر جميع الأجهزة
                </span>
              </h1>
              <p className="max-w-prose text-[16px] leading-8 text-white/85 md:text-[18px]">
                إدارة العمليات والمرافق والأصول والقوى العاملة من خلال لوحات تحكم
                ذكية وتطبيقات ميدانية متصلة في الوقت الحقيقي.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" surface="dark" withArrow>
                  اطلب عرض تجريبي
                </Button>
                <Button href="/modules" variant="secondary" surface="dark">
                  استكشف المنصة
                </Button>
              </div>
            </div>

            <div className="relative lg:ps-4">
              <ExecutiveDash />
              <div className="absolute -bottom-8 -start-6 hidden lg:block">
                <div className="origin-bottom-left scale-[0.62]">
                  <PhoneWorkOrders />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Unified experience overview */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="منظومة واحدة"
            title={
              <>
                منصة واحدة،{" "}
                <span className="text-primary-600">تجربة لكل مستخدم</span>
              </>
            }
            subtitle="من المدير التنفيذي إلى الفني في الميدان — الجميع يعمل من نفس البيانات عبر الواجهة الأنسب له."
          />
          <div className="mt-12 w-full">
            <Ecosystem />
          </div>
        </div>
      </section>

      {/* 3 · Executive dashboard experience */}
      <section className="section-y bg-surface-light">
        <div className="container-x">
          <SectionHeader
            eyebrow="النظرة التنفيذية"
            title={
              <>
                لوحة قيادة <span className="text-primary-600">تنفيذية متكاملة</span>
              </>
            }
            subtitle="كل ما يحتاجه القائد لاتخاذ القرار في شاشة واحدة — مؤشرات لحظية، أداء مالي، والتزام بالخدمة."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <ExecutiveDash />
              <InsightCard
                icon="sparkles"
                title="توصية ذكية"
                text="جدولة صيانة وقائية للمبرّد C-03 قبل الذروة الصيفية."
                className="absolute -top-6 -start-4 hidden lg:flex"
              />
              <InsightCard
                icon="bolt"
                title="أداء فوري"
                text="ارتفاع كفاءة التشغيل +12% مقارنة بالشهر الماضي."
                className="absolute -bottom-6 -end-4 hidden lg:flex"
              />
            </div>
            <FeatureList
              items={[
                { icon: "bolt", title: "مؤشرات لحظية", desc: "نظرة فورية على أهم مؤشرات الأداء عبر كل الإدارات." },
                { icon: "wallet", title: "النظرة المالية", desc: "إيرادات وتكاليف وموازنات في رسم بياني واحد واضح." },
                { icon: "shield", title: "امتثال SLA", desc: "متابعة مستويات الخدمة والتنبيه عند أي انحراف." },
                { icon: "sparkles", title: "رؤى الذكاء الاصطناعي", desc: "توصيات استباقية مبنية على تحليل بياناتك الفعلية." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4 · Operations control center */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="مركز العمليات"
            title={
              <>
                مركز تحكم <span className="text-primary-600">للعمليات اليومية</span>
              </>
            }
            subtitle="يدير المشرف أوامر العمل والبلاغات والمهام ويراقب كل المواقع من شاشة واحدة."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <OpsDash />
            </div>
            <div className="lg:order-1">
              <FeatureList
                items={[
                  { icon: "wrench", title: "أوامر العمل", desc: "إنشاء وإسناد ومتابعة أوامر العمل حتى الإغلاق." },
                  { icon: "bell", title: "طلبات الخدمة", desc: "استقبال البلاغات وتحويلها لأوامر عمل تلقائيًا." },
                  { icon: "mapPin", title: "مراقبة المواقع", desc: "حالة تشغيلية لحظية لكل موقع وفرع." },
                  { icon: "tasks", title: "تتبع المهام", desc: "توزيع المهام على الفرق ومتابعة التقدم." },
                  { icon: "shield", title: "إدارة الحوادث", desc: "تصعيد البلاغات الحرجة ومعالجتها بسرعة." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Mobile workforce application */}
      <section className="section-y bg-surface-light">
        <div className="container-x">
          <SectionHeader
            eyebrow="تطبيق الميدان"
            title={
              <>
                تطبيق ميداني <span className="text-primary-600">للقوى العاملة</span>
              </>
            }
            subtitle="ينفّذ الفنيون مهامهم من الميدان مباشرة — فحوصات، أوامر عمل، ومسح أصول، حتى دون اتصال."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex items-end justify-center gap-4">
              <div className="hidden sm:block">
                <PhoneChecklist />
              </div>
              <PhoneWorkOrders />
              <div className="hidden md:block">
                <PhoneAsset />
              </div>
            </div>
            <FeatureList
              items={[
                { icon: "tasks", title: "الفحوصات الميدانية", desc: "قوائم فحص رقمية موجّهة خطوة بخطوة." },
                { icon: "wrench", title: "أوامر العمل والمرفقات", desc: "تنفيذ المهام وإرفاق الصور من الموقع." },
                { icon: "box", title: "مسح الأصول", desc: "تعرّف على الأصل فورًا عبر مسح الرمز." },
                { icon: "sync", title: "العمل دون اتصال", desc: "تابع العمل بلا إنترنت مع مزامنة تلقائية لاحقًا." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6 · Facility & asset management */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="المرافق والأصول"
            title={
              <>
                إدارة كاملة <span className="text-primary-600">للمرافق والأصول</span>
              </>
            }
            subtitle="سجل أصول دقيق، صيانة وقائية مجدولة، ومتابعة لصحة الأصول واستغلال المساحات."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <AssetDash />
            </div>
            <div className="lg:order-1">
              <FeatureList
                items={[
                  { icon: "box", title: "سجل الأصول", desc: "حصر شامل لكل أصل مع سجل كامل لتاريخه." },
                  { icon: "sync", title: "الصيانة الوقائية", desc: "جدولة تلقائية تمنع الأعطال قبل وقوعها." },
                  { icon: "layers", title: "استغلال المساحات", desc: "قياس وتحسين استخدام المساحات والمواقع." },
                  { icon: "gauge", title: "صحة الأصول", desc: "مؤشر صحة لكل فئة مع تنبيهات استباقية." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7 · AI-powered experience */}
      <section className="section-y bg-navy-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="الذكاء الاصطناعي"
            title={
              <>
                ذكاء يعمل{" "}
                <span className="text-primary-600">فوق كل بياناتك</span>
              </>
            }
            subtitle="طبقة ذكاء اصطناعي تتنبأ بالأعطال، تكشف الانحرافات، وتجيب على أسئلتك بلغتك الطبيعية."
          />

          <div className="relative mt-12 w-full max-w-4xl">
            <div
              className="pointer-events-none absolute inset-0 -z-0 mx-auto h-full w-2/3 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(86,80,214,0.55), transparent 70%)" }}
              aria-hidden
            />
            {/* NL query bar */}
            <div className="relative z-10 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 backdrop-blur-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <iconMap.sparkles className="h-5 w-5" />
              </span>
              <span className="text-[15px] text-white/85">
                اسأل بياناتك: ما الأصول التي تجاوزت ميزانية الصيانة هذا الربع؟
              </span>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {AI_CARDS.map((c) => {
                const Icon = iconMap[c.icon];
                return (
                  <div key={c.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-white p-5 shadow-lg">
                    <span className="flex h-11 w-11 items-center justify-center rounded-tile bg-[#EAEAFE] text-[#5650D6]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-[16px] font-bold text-strong">{c.title}</h3>
                    <p className="text-[13px] leading-6 text-muted">{c.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Cross-device synchronization */}
      <section className="section-y bg-white">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="مزامنة عبر الأجهزة"
            title={
              <>
                الجميع يعمل من{" "}
                <span className="text-primary-600">مصدر بيانات واحد</span>
              </>
            }
            subtitle="كل دور يرى ما يخصّه عبر الجهاز الأنسب له — والكل متزامن لحظيًا على نفس البيانات."
          />
          <div className="mt-12 w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {ROLES.map((r) => {
                const Icon = iconMap[r.icon];
                return (
                  <div key={r.role} className="flex flex-col items-center gap-3 rounded-card border border-hairline bg-white p-5 text-center shadow-md">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-tile ${tintClasses[r.tint]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-[16px] font-bold text-strong">{r.role}</span>
                    <span className="text-[13px] leading-6 text-muted">{r.task}</span>
                  </div>
                );
              })}
            </div>
            <div className="mx-auto my-5 h-6 w-px bg-hairline" aria-hidden />
            <div className="flex items-center justify-center gap-3 rounded-card border border-primary-100 bg-[#F4F8FF] p-5 text-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-tile bg-primary-100 text-primary-600">
                <Database className="h-6 w-6" />
              </span>
              <span className="text-[15px] font-bold text-strong">
                مصدر بيانات واحد — كل تحديث ينعكس فورًا لدى الجميع
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · Platform benefits */}
      <section className="section-y bg-surface-light">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            eyebrow="الفوائد"
            title={
              <>
                قيمة ملموسة{" "}
                <span className="text-primary-600">في كل يوم تشغيل</span>
              </>
            }
            subtitle="تجربة موحّدة عبر الأجهزة تترجم مباشرةً إلى نتائج تشغيلية أفضل."
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

      {/* 10 · Product trust (dark navy) */}
      <section className="section-y bg-navy-gradient">
        <div className="container-x flex flex-col items-center">
          <SectionHeader
            tone="dark"
            eyebrow="الموثوقية المؤسسية"
            title="بُنيت للمؤسسات التي لا تقبل المساومة"
            subtitle="أمان وحوكمة على مستوى المؤسسة تحمي بياناتك وتضمن استمرارية تشغيلك."
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

      {/* 11 · Final CTA */}
      <CTASection
        eyebrow="جاهز للبدء؟"
        title={
          <>
            شاهد <span className="text-primary-600 ltr">I DO Enterprise</span> أثناء العمل
          </>
        }
        subtitle="اكتشف كيف يمكن لمنصة واحدة أن توحد جميع عمليات منشأتك."
      />
    </>
  );
}
