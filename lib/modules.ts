import type { IconName } from "@/components/Icons";
import type { Tint } from "@/components/ModuleCard";

export interface ModuleItem {
  id: string;
  icon: IconName;
  tint: Tint;
  title: string;
  description: string;
}

export const MODULES: ModuleItem[] = [
  {
    id: "finance",
    icon: "wallet",
    tint: "blue",
    title: "الإدارة المالية",
    description:
      "إدارة الميزانيات والمصروفات والفواتير ومتابعة التدفقات المالية لحظة بلحظة.",
  },
  {
    id: "operations",
    icon: "gauge",
    tint: "teal",
    title: "إدارة العمليات",
    description:
      "تنظيم العمليات اليومية وتوزيع المهام ومتابعة الأداء عبر جميع الفرق.",
  },
  {
    id: "assets",
    icon: "box",
    tint: "orange",
    title: "إدارة الأصول",
    description:
      "حصر وتتبع أصول المنشأة مع سجل كامل لكل أصل من الاقتناء حتى الاستبعاد.",
  },
  {
    id: "maintenance",
    icon: "wrench",
    tint: "orange",
    title: "الصيانة والتشغيل",
    description:
      "جدولة الصيانة الوقائية وإدارة بلاغات الأعطال ومتابعة فرق التشغيل ميدانيًا.",
  },
  {
    id: "reports",
    icon: "chart",
    tint: "purple",
    title: "التقارير والتحليلات",
    description:
      "لوحات تحكم وتقارير دقيقة تساعدك على اتخاذ القرار الصحيح في الوقت المناسب.",
  },
  {
    id: "users",
    icon: "users",
    tint: "purple",
    title: "المستخدمون والصلاحيات",
    description:
      "إدارة المستخدمين والأدوار والصلاحيات بمرونة كاملة وبأمان على مستوى المؤسسة.",
  },
];

export interface DeepDive {
  id: string;
  icon: IconName;
  tint: Tint;
  eyebrow: string;
  title: string;
  highlight: string;
  paragraph: string;
  capabilities: { icon: IconName; label: string; sub: string }[];
}

export const DEEP_DIVES: DeepDive[] = [
  {
    id: "finance",
    icon: "wallet",
    tint: "blue",
    eyebrow: "الإدارة المالية",
    title: "تحكم كامل في ",
    highlight: "ماليّة منشأتك",
    paragraph:
      "وحدة مالية متكاملة تربط الميزانيات بالمصروفات الفعلية وتمنحك صورة واضحة عن الوضع المالي في كل لحظة.",
    capabilities: [
      { icon: "wallet", label: "الميزانيات والمصروفات", sub: "تتبع لحظي للبنود" },
      { icon: "chart", label: "تقارير مالية فورية", sub: "رؤية واضحة للأداء" },
      { icon: "shield", label: "ضوابط واعتمادات", sub: "موافقات متعددة المستويات" },
    ],
  },
  {
    id: "operations",
    icon: "gauge",
    tint: "teal",
    eyebrow: "إدارة العمليات",
    title: "تشغيل أكثر ",
    highlight: "كفاءة وانسيابية",
    paragraph:
      "نظّم عملياتك اليومية ووزّع المهام وتابع تنفيذها ميدانيًا، مع تنبيهات لحظية تبقي الجميع على المسار.",
    capabilities: [
      { icon: "sliders", label: "توزيع المهام", sub: "بحسب الفريق والموقع" },
      { icon: "sync", label: "متابعة لحظية", sub: "تحديث الحالة فوريًا" },
      { icon: "users", label: "تنسيق الفرق", sub: "تعاون عبر الأقسام" },
    ],
  },
  {
    id: "assets",
    icon: "box",
    tint: "orange",
    eyebrow: "إدارة الأصول والصيانة",
    title: "أصول مُدارة و",
    highlight: "صيانة بلا توقف",
    paragraph:
      "احصر أصولك وتتبع حالتها، وجدول الصيانة الوقائية قبل وقوع الأعطال للحفاظ على استمرارية التشغيل.",
    capabilities: [
      { icon: "box", label: "حصر وتتبع الأصول", sub: "سجل كامل لكل أصل" },
      { icon: "wrench", label: "صيانة وقائية", sub: "جدولة تلقائية" },
      { icon: "shield", label: "بلاغات الأعطال", sub: "معالجة سريعة" },
    ],
  },
];

export interface Sector {
  id: string;
  icon: IconName;
  title: string;
  fit: string;
}

export const SECTORS: Sector[] = [
  { id: "commercial", icon: "building", title: "المراكز التجارية", fit: "العمليات · الأصول · المالية" },
  { id: "health", icon: "shield", title: "المستشفيات والمنشآت الصحية", fit: "الصيانة · العمليات · التقارير" },
  { id: "hospitality", icon: "compass", title: "الفنادق والضيافة", fit: "العمليات · المالية · المستخدمون" },
  { id: "education", icon: "users", title: "الجامعات والقطاع التعليمي", fit: "الأصول · العمليات · التقارير" },
  { id: "government", icon: "building", title: "الجهات والخدمات الحكومية", fit: "الصيانة · الأصول · الصلاحيات" },
  { id: "industrial", icon: "box", title: "القطاع الصناعي", fit: "الأصول · الصيانة · التقارير" },
];

export interface Step {
  num: string;
  icon: IconName;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  { num: "01", icon: "compass", title: "استكشف المنصة", description: "تعرّف على الوحدات والإمكانيات المتاحة وكيف تخدم منشأتك." },
  { num: "02", icon: "shield", title: "احجز عرضًا تجريبيًا", description: "تواصل مع فريقنا لمطابقة النظام مع احتياجاتك." },
  { num: "03", icon: "sliders", title: "تهيئة النظام", description: "نُعدّ النظام بما يناسب هيكل منشأتك وعملياتها." },
  { num: "04", icon: "rocket", title: "ابدأ التشغيل", description: "ابدأ إدارة عملياتك اليومية ومتابعة الأداء بكفاءة." },
];

/* ============================================================
   Modules page — platform architecture registry
   Single source of truth for: the /modules page, the sticky
   category nav, and the future /modules/[slug] detail pages.
   CMS-ready: edit copy here; the page sections map over it.
   ============================================================ */

export type DashVariant = "bars" | "line" | "donut";
export type LayerRole = "intelligence" | "operational" | "governance";

export interface ModuleLink {
  slug: string;
  icon: IconName;
  title: string;
  oneLiner: string;
}

export interface ModuleCategory {
  id: string;
  num: string;
  layer: LayerRole;
  icon: IconName;
  tint: Tint;
  eyebrow: string; // category name — used in nav + section eyebrow
  title: string; // section heading (navy part)
  highlight: string; // section heading (blue part)
  subtitle: string;
  dashVariant: DashVariant;
  dashAccent: string;
  dashKpis: string[];
  modules: ModuleLink[];
}

export const MODULE_CATEGORIES: ModuleCategory[] = [
  {
    id: "operations",
    num: "01",
    layer: "operational",
    icon: "gauge",
    tint: "blue",
    eyebrow: "العمليات",
    title: "تشغيل يومي ",
    highlight: "مترابط وميداني",
    subtitle:
      "من البلاغ حتى الإغلاق — أوامر عمل وطلبات خدمة ومهام موزّعة على الفرق ومتابعة لحظية عبر كل المواقع.",
    dashVariant: "bars",
    dashAccent: "#2563EB",
    dashKpis: ["845", "156", "%92"],
    modules: [
      { slug: "cmms", icon: "wrench", title: "إدارة الصيانة وأوامر العمل", oneLiner: "أوامر عمل تلقائية وجدولة وتتبع ميداني." },
      { slug: "service-requests", icon: "bell", title: "طلبات الخدمة والبلاغات", oneLiner: "استقبال البلاغات وتحويلها لأوامر عمل." },
      { slug: "field-operations", icon: "mapPin", title: "العمليات الميدانية", oneLiner: "إدارة الفرق الميدانية عبر كل المواقع." },
      { slug: "task-management", icon: "tasks", title: "إدارة المهام وسير العمل", oneLiner: "توزيع المهام ومسارات الاعتماد." },
      { slug: "soft-services", icon: "check", title: "النظافة والخدمات المساندة", oneLiner: "جدولة ومتابعة الخدمات المساندة." },
      { slug: "quality-safety", icon: "shield", title: "الجودة والسلامة", oneLiner: "متابعة معايير الجودة والسلامة (QHSE)." },
    ],
  },
  {
    id: "facilities-assets",
    num: "02",
    layer: "operational",
    icon: "box",
    tint: "teal",
    eyebrow: "المرافق والأصول",
    title: "أصول ومرافق ",
    highlight: "تحت السيطرة",
    subtitle:
      "حصر وتتبع الأصول طوال دورة حياتها، وإدارة المرافق والمساحات والعقارات مع صيانة وقائية تمنع الأعطال.",
    dashVariant: "bars",
    dashAccent: "#0FB6A0",
    dashKpis: ["3٬210", "%87", "48"],
    modules: [
      { slug: "cafm", icon: "building", title: "إدارة المرافق CAFM", oneLiner: "تشغيل المرافق والمباني بكفاءة." },
      { slug: "asset-management", icon: "box", title: "إدارة الأصول", oneLiner: "دورة حياة كاملة لكل أصل." },
      { slug: "space-management", icon: "layers", title: "إدارة المساحات", oneLiner: "تخطيط واستغلال المساحات والمخططات." },
      { slug: "real-estate", icon: "building", title: "العقارات والوحدات", oneLiner: "إدارة الوحدات وعقود الإيجار." },
      { slug: "preventive-maintenance", icon: "sync", title: "الصيانة الوقائية", oneLiner: "جدولة وقائية تمنع الأعطال قبل وقوعها." },
      { slug: "inventory", icon: "layers", title: "المخزون وقطع الغيار", oneLiner: "متابعة المخزون وقطع الغيار." },
    ],
  },
  {
    id: "finance",
    num: "03",
    layer: "operational",
    icon: "wallet",
    tint: "purple",
    eyebrow: "المالية والفوترة",
    title: "تحكم مالي ",
    highlight: "كامل وشفّاف",
    subtitle:
      "اربط الموازنات بالمصروفات الفعلية، وأصدر الفواتير، واصرف الرواتب، وراقب التكاليف لكل موقع لحظة بلحظة.",
    dashVariant: "line",
    dashAccent: "#7C5CFC",
    dashKpis: ["2.4M", "%24", "%78"],
    modules: [
      { slug: "accounting", icon: "wallet", title: "المحاسبة والقيود", oneLiner: "قيود ودفاتر مالية دقيقة." },
      { slug: "billing", icon: "receipt", title: "الفوترة والتحصيل", oneLiner: "إصدار الفواتير ومتابعة التحصيل." },
      { slug: "payroll", icon: "wallet", title: "صرف الرواتب", oneLiner: "احتساب وصرف الرواتب بدقة." },
      { slug: "budgeting", icon: "chart", title: "الموازنات والتكاليف", oneLiner: "تخطيط الموازنات وضبط التكاليف." },
      { slug: "tax-benefits", icon: "receipt", title: "الضرائب والمزايا", oneLiner: "إدارة الضرائب والمزايا والامتثال." },
    ],
  },
  {
    id: "workforce",
    num: "04",
    layer: "operational",
    icon: "users",
    tint: "orange",
    eyebrow: "الموارد البشرية",
    title: "قوى عاملة ",
    highlight: "منظّمة ومنتجة",
    subtitle:
      "خطّط القوى العاملة، وأدِر ملفات الموظفين والحضور والورديات والإجازات، وتابع الإنتاجية عبر الفرق.",
    dashVariant: "bars",
    dashAccent: "#F08A24",
    dashKpis: ["1٬024", "%96", "32"],
    modules: [
      { slug: "workforce", icon: "users", title: "إدارة القوى العاملة", oneLiner: "تخطيط وتوزيع القوى العاملة." },
      { slug: "hr", icon: "users", title: "إدارة الموظفين", oneLiner: "ملفات الموظفين ودورة حياتهم." },
      { slug: "attendance", icon: "clock", title: "الحضور والانصراف", oneLiner: "تتبع الحضور والوقت بدقة." },
      { slug: "scheduling", icon: "calendar", title: "الجدولة والورديات", oneLiner: "جدولة الورديات وتغطية المواقع." },
      { slug: "leaves", icon: "calendar", title: "الإجازات والاعتمادات", oneLiner: "إدارة طلبات الإجازات واعتمادها." },
    ],
  },
  {
    id: "procurement",
    num: "05",
    layer: "operational",
    icon: "cart",
    tint: "green",
    eyebrow: "المشتريات والموردين",
    title: "مشتريات وموردون ",
    highlight: "بلا تسرّب",
    subtitle:
      "أدِر الموردين والعقود وأوامر الشراء وعروض الأسعار، وقِس أداء كل مورد مقابل مستويات الخدمة المتفق عليها.",
    dashVariant: "donut",
    dashAccent: "#1FA45C",
    dashKpis: ["%18", "64", "%93"],
    modules: [
      { slug: "vendors", icon: "building", title: "إدارة الموردين", oneLiner: "سجل موردين موحّد وتأهيل." },
      { slug: "contracts", icon: "doc", title: "إدارة العقود", oneLiner: "دورة حياة العقود والتنبيه بالتجديد." },
      { slug: "purchasing", icon: "cart", title: "المشتريات وأوامر الشراء", oneLiner: "أوامر الشراء ودورة الاعتماد." },
      { slug: "rfq", icon: "doc", title: "طلبات عروض الأسعار", oneLiner: "مناقصات وعروض أسعار منظمة." },
      { slug: "vendor-performance", icon: "chart", title: "أداء الموردين وSLA", oneLiner: "تقييم الموردين ومستويات الخدمة." },
    ],
  },
  {
    id: "system-admin",
    num: "06",
    layer: "governance",
    icon: "cog",
    tint: "slate",
    eyebrow: "إدارة النظام",
    title: "حوكمة وأمان ",
    highlight: "على مستوى المؤسسة",
    subtitle:
      "تحكّم مركزي في المستخدمين والأدوار والصلاحيات والهيكل متعدد المواقع، مع سجل تدقيق كامل وحوكمة للبيانات.",
    dashVariant: "bars",
    dashAccent: "#5C6477",
    dashKpis: ["1٬480", "42", "100%"],
    modules: [
      { slug: "users-roles", icon: "users", title: "المستخدمون والصلاحيات", oneLiner: "أدوار وصلاحيات دقيقة لكل مستخدم." },
      { slug: "access-control", icon: "lock", title: "أذونات الوصول", oneLiner: "تحكم في الوصول حسب الدور والموقع." },
      { slug: "org-structure", icon: "building", title: "الهيكل والمواقع المتعددة", oneLiner: "هيكل تنظيمي يدعم تعدد المواقع." },
      { slug: "configuration", icon: "cog", title: "الإعدادات والتهيئة", oneLiner: "تهيئة النظام حسب طبيعة منشأتك." },
      { slug: "audit-log", icon: "shield", title: "سجل التدقيق", oneLiner: "سجل كامل لكل إجراء داخل النظام." },
      { slug: "security", icon: "lock", title: "الأمن وحوكمة البيانات", oneLiner: "أمن البيانات والامتثال والحوكمة." },
    ],
  },
  {
    id: "analytics-ai",
    num: "07",
    layer: "intelligence",
    icon: "sparkles",
    tint: "indigo",
    eyebrow: "التحليلات والذكاء",
    title: "ذكاء يعمل ",
    highlight: "فوق بياناتك",
    subtitle:
      "لوحات موحّدة وتقارير آلية وتنبؤ بالأعطال وكشف للانحرافات — وطبقة ذكاء تقدّم توصيات عملية أعلى كل الموديولات.",
    dashVariant: "line",
    dashAccent: "#5650D6",
    dashKpis: ["%24", "12", "6"],
    modules: [
      { slug: "dashboards", icon: "chart", title: "لوحات التحكم الموحدة", oneLiner: "لوحات موحدة لكل العمليات." },
      { slug: "predictive", icon: "sparkles", title: "التنبؤ بالأعطال", oneLiner: "تنبؤ ذكي بالأعطال قبل وقوعها." },
      { slug: "anomaly", icon: "bolt", title: "كشف الانحرافات", oneLiner: "رصد الشذوذ والانحرافات تلقائيًا." },
      { slug: "nl-query", icon: "search", title: "الاستعلام باللغة الطبيعية", oneLiner: "اسأل بياناتك بلغتك مباشرة." },
      { slug: "auto-reports", icon: "doc", title: "التقارير الآلية", oneLiner: "تقارير تُنشأ وتُرسل تلقائيًا." },
      { slug: "recommendations", icon: "sparkles", title: "التوصيات الذكية", oneLiner: "توصيات عملية لتحسين الأداء." },
    ],
  },
];

export const TOTAL_MODULES = MODULE_CATEGORIES.reduce(
  (n, c) => n + c.modules.length,
  0,
);

/** Future-ready lookups for /modules/[slug] detail pages. */
export function getModuleBySlug(slug: string) {
  for (const category of MODULE_CATEGORIES) {
    const module = category.modules.find((m) => m.slug === slug);
    if (module) return { module, category };
  }
  return null;
}

export function getAllModuleSlugs(): string[] {
  return MODULE_CATEGORIES.flatMap((c) => c.modules.map((m) => m.slug));
}

/* ---------- "How modules work together" — one event across the platform ---------- */
export interface FlowStep {
  num: string;
  title: string;
  role: string;
  icon: IconName;
  tint: Tint;
  desc: string;
}

export const FLOW_STEPS: FlowStep[] = [
  { num: "01", title: "بلاغ عطل", role: "العمليات", icon: "bell", tint: "blue", desc: "يُسجَّل البلاغ من الميدان عبر التطبيق." },
  { num: "02", title: "أمر عمل", role: "العمليات", icon: "wrench", tint: "blue", desc: "يتحوّل تلقائيًا إلى أمر عمل ويُسنَد للفني." },
  { num: "03", title: "ربط بالأصل", role: "المرافق والأصول", icon: "box", tint: "teal", desc: "يُربَط بالأصل وسجل صيانته وقطع الغيار." },
  { num: "04", title: "أمر شراء", role: "المشتريات", icon: "cart", tint: "green", desc: "عند الحاجة يصدر أمر شراء لمورد معتمد." },
  { num: "05", title: "تسجيل الوقت", role: "القوى العاملة", icon: "clock", tint: "orange", desc: "يُسجَّل وقت الفني والكفاءات المطلوبة." },
  { num: "06", title: "ترحيل التكلفة", role: "المالية", icon: "wallet", tint: "purple", desc: "تُرحَّل التكلفة لمركز التكلفة وتُصدر الفاتورة." },
  { num: "07", title: "توصية ذكية", role: "التحليلات والذكاء", icon: "sparkles", tint: "indigo", desc: "يُحلَّل الحدث ويُوصى بصيانة وقائية." },
];

/* ---------- Platform-wide capabilities (apply to every module) ---------- */
export const CAPABILITIES: { icon: IconName; label: string }[] = [
  { icon: "phone", label: "تطبيق ميداني (iOS / Android)" },
  { icon: "bolt", label: "رؤية لحظية" },
  { icon: "lock", label: "صلاحيات حسب الدور" },
  { icon: "globe", label: "متعدد المواقع واللغات" },
  { icon: "shield", label: "سجل تدقيق كامل" },
  { icon: "link", label: "واجهات وتكاملات API" },
  { icon: "sparkles", label: "ذكاء اصطناعي مدمج" },
];

export const MATRIX_COLUMNS = ["موبايل", "لحظي", "ذكاء", "تكاملات", "صلاحيات", "تدقيق"];

/* ---------- One platform vs. point tools ---------- */
export interface Comparison {
  icon: IconName;
  title: string;
  unified: string;
  separate: string;
}

export const COMPARISON: Comparison[] = [
  { icon: "database", title: "مصدر واحد للحقيقة", unified: "بيانات موحّدة بلا تطابق يدوي أو تعارض.", separate: "بيانات متفرّقة بين أنظمة لا تتحدث معًا." },
  { icon: "link", title: "بدون ضريبة تكامل", unified: "لا تكاليف ربط أو صيانة واجهات بين موردين.", separate: "تكاليف تكامل وصيانة مستمرة بين الأنظمة." },
  { icon: "layers", title: "تجربة وتقارير موحّدة", unified: "نفس الواجهة والصلاحيات والتقارير في كل مكان.", separate: "واجهات وصلاحيات وتقارير مشتّتة ومتعددة." },
];

/* ---------- Proof (one outcome-focused case study — Industries page owns the rest) ---------- */
export interface CaseStudy {
  industryTag: string;
  company: string;
  problem: string;
  solution: string;
  results: { value: string; label: string }[];
  href: string;
}

export const MODULES_CASE_STUDY: CaseStudy = {
  industryTag: "القطاع الصناعي",
  company: "مجموعة الخليج الصناعية",
  problem:
    "تشغيل غير مترابط وصعوبة تتبع الأداء الميداني، مع تأخر في اكتشاف الأعطال وارتفاع تكاليف الصيانة الطارئة.",
  solution:
    "ربط العمليات والأصول والموردين والعقود في منصة واحدة، مع لوحة تحكم لحظية ترصد أداء كل خط إنتاج وتنبّه عند أي انحراف.",
  results: [
    { value: "%32", label: "خفض تكاليف الصيانة" },
    { value: "%24", label: "رفع كفاءة التشغيل" },
    { value: "%20", label: "تقليل الأعطال" },
  ],
  href: "/case-studies",
};
