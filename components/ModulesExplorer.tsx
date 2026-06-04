"use client";

import { useState } from "react";
import ModuleCard from "./ModuleCard";
import { MODULES } from "@/lib/modules";

const FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "finance", label: "المالية" },
  { key: "operations", label: "العمليات" },
  { key: "assets", label: "الأصول" },
  { key: "maintenance", label: "الصيانة" },
  { key: "reports", label: "التقارير" },
  { key: "users", label: "المستخدمون" },
];

export default function ModulesExplorer() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? MODULES : MODULES.filter((m) => m.id === active);

  return (
    <div className="flex flex-col items-center">
      {/* Filter pills */}
      <div className="no-scrollbar -mx-6 flex w-[calc(100%+3rem)] gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:w-full sm:flex-wrap sm:justify-center sm:px-0">
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                isActive
                  ? "bg-primary-600 text-white shadow-md"
                  : "border border-hairline bg-white text-strong hover:bg-surface-light2"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((m) => (
          <ModuleCard
            key={m.id}
            icon={m.icon}
            tint={m.tint}
            title={m.title}
            description={m.description}
            href={`#${m.id}`}
          />
        ))}
      </div>
    </div>
  );
}
