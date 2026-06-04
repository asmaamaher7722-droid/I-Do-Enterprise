/* Shared dashboard UI primitives — recreated UI (not images).
   Used to compose realistic, on-brand dashboards across marketing pages
   (e.g. /app, /integrations). All styling comes from the existing tokens. */
import type { ReactNode } from "react";
import { iconMap, type IconName } from "@/components/Icons";
import { tintClasses, type Tint } from "@/components/ModuleCard";

export function BrowserFrame({ title, children }: { title?: string; children: ReactNode }) {
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

export function PhoneFrame({ title, children }: { title?: string; children: ReactNode }) {
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

export function KpiTile({ delta, value, label, tint }: { delta?: string; value: string; label: string; tint: Tint }) {
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

export function Bars({ accent = "#2563EB", data = [40, 55, 48, 62, 52, 70, 60, 76, 68, 82, 74, 92] }: { accent?: string; data?: number[] }) {
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

export function Line({ accent = "#2563EB" }: { accent?: string }) {
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

export function Donut({ pct, accent, label }: { pct: number; accent: string; label?: string }) {
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

export function ProgressRow({ label, pct, color }: { label: string; pct: number; color: string }) {
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
export function StatusPill({ label, kind = "info" }: { label: string; kind?: keyof typeof PILL }) {
  return <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${PILL[kind]}`}>{label}</span>;
}

export function InsightCard({ icon, title, text, className = "" }: { icon: IconName; title: string; text: string; className?: string }) {
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

export function Panel({ title, action, children }: { title: string; action?: string; children: ReactNode }) {
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

export function FeatureList({ items }: { items: { icon: IconName; title: string; desc: string }[] }) {
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
