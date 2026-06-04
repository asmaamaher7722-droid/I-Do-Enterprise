"use client";

import { useEffect, useState } from "react";
import { MODULE_CATEGORIES } from "@/lib/modules";

/* Sticky category sub-nav with lightweight scroll-spy.
   Lets evaluators jump straight to their domain; keeps a demo CTA in reach. */
export default function CategoryNav() {
  const [active, setActive] = useState(MODULE_CATEGORIES[0]?.id ?? "");

  useEffect(() => {
    const sections = MODULE_CATEGORIES.map((c) =>
      document.getElementById(`cat-${c.id}`),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("cat-", ""));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-40 border-b border-hairline bg-white/95 backdrop-blur md:top-20">
      <div className="container-x py-3">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {MODULE_CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <a
                key={c.id}
                href={`#cat-${c.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                  isActive
                    ? "bg-primary-600 text-white"
                    : "text-muted hover:bg-surface-light hover:text-strong"
                }`}
              >
                {c.eyebrow}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
