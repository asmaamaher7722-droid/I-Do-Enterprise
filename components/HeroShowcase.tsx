/* Hero product showcase — fully recreated UI (no images exist in the repo).
   A "Welcome to IDO" launcher on a laptop + an overlapping phone task-summary,
   matching the home reference. All styling comes from the existing tokens. */
import { iconMap, type IconName } from "@/components/Icons";

/* ── Launcher tiles (recreated module grid) ───────────────────────── */
type Tile = { label: string; icon: IconName; color: string };

const TILES: Tile[] = [
  { label: "الرئيسية", icon: "building", color: "#2563EB" },
  { label: "العقارات", icon: "mapPin", color: "#0FB6A0" },
  { label: "الأصول", icon: "box", color: "#F08A24" },
  { label: "المهام", icon: "tasks", color: "#7C5CFC" },
  { label: "الموظفون", icon: "users", color: "#1FA45C" },
  { label: "الصيانة", icon: "wrench", color: "#5650D6" },
  { label: "المالية", icon: "wallet", color: "#E04848" },
  { label: "المشتريات", icon: "cart", color: "#0EA5E9" },
  { label: "المستندات", icon: "doc", color: "#2563EB" },
  { label: "العقود", icon: "receipt", color: "#0FB6A0" },
  { label: "الموردون", icon: "compass", color: "#F08A24" },
  { label: "التقارير", icon: "chart", color: "#7C5CFC" },
  { label: "الجرد", icon: "layers", color: "#1FA45C" },
  { label: "الحضور", icon: "clock", color: "#5650D6" },
  { label: "الجدولة", icon: "calendar", color: "#E04848" },
  { label: "الأمن", icon: "lock", color: "#0EA5E9" },
  { label: "التحليلات", icon: "gauge", color: "#2563EB" },
  { label: "الإشعارات", icon: "bell", color: "#0FB6A0" },
  { label: "البحث", icon: "search", color: "#F08A24" },
  { label: "قاعدة البيانات", icon: "database", color: "#7C5CFC" },
  { label: "التكاملات", icon: "link", color: "#1FA45C" },
  { label: "الذكاء", icon: "sparkles", color: "#5650D6" },
  { label: "الطاقة", icon: "bolt", color: "#E04848" },
  { label: "الجودة", icon: "shield", color: "#0EA5E9" },
  { label: "النطاق", icon: "globe", color: "#2563EB" },
  { label: "الاتصالات", icon: "phone", color: "#0FB6A0" },
  { label: "الإعدادات", icon: "cog", color: "#F08A24" },
  { label: "التحكم", icon: "sliders", color: "#7C5CFC" },
];

function IdoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary-600 text-[10px] font-extrabold text-white">
        i
      </span>
      <span className="text-[11px] font-extrabold tracking-tight text-strong ltr">i-do</span>
    </span>
  );
}

function Laptop() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Screen */}
      <div className="rounded-[16px] border-[10px] border-[#222c44] bg-[#222c44] shadow-mockup">
        <div className="overflow-hidden rounded-[6px] bg-white">
          {/* App top bar */}
          <div className="flex items-center justify-between border-b border-hairline bg-surface-light px-3 py-2">
            <IdoMark />
            <div className="flex items-center gap-2">
              <span className="hidden h-4 w-4 rounded bg-white shadow-sm sm:block" />
              <span className="hidden h-4 w-4 rounded bg-white shadow-sm sm:block" />
              <span className="flex items-center gap-1.5 rounded-full bg-white px-1.5 py-0.5 shadow-sm">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-[8px] font-bold text-white">
                  ع
                </span>
                <span className="hidden text-[8px] font-semibold text-muted sm:block">مدير النظام</span>
              </span>
            </div>
          </div>

          {/* Launcher */}
          <div className="bg-gradient-to-b from-[#EEF3FF] to-white px-3 pb-4 pt-3">
            <div className="text-center">
              <div className="text-[13px] font-extrabold text-strong ltr">Welcome to IDO</div>
              <div className="text-[9px] text-muted">اختر وحدة للبدء</div>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-1.5">
              {TILES.map((t) => {
                const Icon = iconMap[t.icon];
                return (
                  <div
                    key={t.label}
                    className="flex flex-col items-center gap-1 rounded-lg border border-hairline bg-white px-1 py-1.5"
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-md"
                      style={{ backgroundColor: `${t.color}1A`, color: t.color }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="w-full truncate text-center text-[6.5px] font-semibold leading-none text-muted">
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hinge / base */}
      <div className="relative left-1/2 h-3 w-[114%] -translate-x-1/2 rounded-b-[10px] bg-gradient-to-b from-[#cdd5e4] to-[#9aa6bd]">
        <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#8b97ad]" />
      </div>
    </div>
  );
}

function StatCell({ value, label, dot, tint }: { value: string; label: string; dot: string; tint: string }) {
  return (
    <div className="rounded-lg border border-hairline bg-white px-2 py-2">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-extrabold text-strong ltr">{value}</span>
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: dot }} />
      </div>
      <div className="mt-0.5 text-[8px] font-semibold" style={{ color: tint }}>
        {label}
      </div>
    </div>
  );
}

function MaintRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-hairline bg-white px-2 py-1.5">
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary-100 text-primary-600">
          {iconMap.wrench({ className: "h-3 w-3" })}
        </span>
        <span className="text-[8px] font-semibold text-strong">{label}</span>
      </span>
      <span className="text-muted">{iconMap.compass({ className: "h-3 w-3" })}</span>
    </div>
  );
}

function Phone() {
  return (
    <div className="w-[178px] rounded-[26px] border-[5px] border-[#0C1A38] bg-[#0C1A38] shadow-mockup">
      <div className="relative overflow-hidden rounded-[21px] bg-surface-light">
        <span className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-[#0C1A38]" />

        {/* status + greeting */}
        <div className="bg-white px-3 pb-2 pt-3">
          <div className="flex items-center justify-between text-[8px] font-bold text-strong">
            <span className="ltr">12:00</span>
            <span className="h-1.5 w-3 rounded-[1px] border border-text-subtle" />
          </div>
          <div className="mt-1.5">
            <div className="text-[10px] font-extrabold text-strong">صباح الخير، فهد</div>
            <div className="text-[7px] text-muted">استكشف مهامك الآن</div>
          </div>
        </div>

        <div className="px-2.5 pb-2.5">
          {/* summary card */}
          <div className="rounded-xl border border-hairline bg-white p-2">
            <div className="mb-1.5">
              <div className="text-[8.5px] font-extrabold text-strong">ملخص أعمالك</div>
              <div className="text-[7px] text-muted">تقدّم مهامك الحالية</div>
            </div>
            <div className="mb-2 flex gap-1 text-[7px] font-semibold">
              <span className="rounded-full bg-primary-600 px-2 py-0.5 text-white">يومي</span>
              <span className="rounded-full bg-surface-light px-2 py-0.5 text-muted">أسبوعي</span>
              <span className="rounded-full bg-surface-light px-2 py-0.5 text-muted">شهري</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <StatCell value="3" label="قيد الانتظار" dot="#2563EB" tint="#2563EB" />
              <StatCell value="2" label="قيد التنفيذ" dot="#F08A24" tint="#B0822E" />
              <StatCell value="1" label="متأخرة" dot="#E04848" tint="#DC2F36" />
              <StatCell value="0" label="منجزة" dot="#1FA45C" tint="#1FA45C" />
            </div>
          </div>

          {/* maintenance list */}
          <div className="mt-2">
            <div className="mb-1 text-[8.5px] font-extrabold text-strong">الصيانة</div>
            <div className="flex flex-col gap-1">
              <MaintRow label="أمر عمل صيانة" />
              <MaintRow label="جدولة صيانة وقائية" />
              <MaintRow label="مهمة صيانة تصحيحية" />
            </div>
          </div>
        </div>

        {/* tab bar */}
        <div className="flex items-center justify-around border-t border-hairline bg-white px-2 py-1.5 text-text-subtle">
          {iconMap.building({ className: "h-3 w-3 text-primary-600" })}
          {iconMap.calendar({ className: "h-3 w-3" })}
          <span className="flex h-6 w-6 -translate-y-1 items-center justify-center rounded-full bg-primary-600 text-white shadow-md">
            {iconMap.layers({ className: "h-3 w-3" })}
          </span>
          {iconMap.search({ className: "h-3 w-3" })}
          {iconMap.cog({ className: "h-3 w-3" })}
        </div>
      </div>
    </div>
  );
}

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <Laptop />
      {/* Phone overlaps the lower-left of the laptop */}
      <div className="absolute -bottom-8 left-0 hidden -translate-x-2 sm:block lg:-left-6">
        <Phone />
      </div>
    </div>
  );
}
