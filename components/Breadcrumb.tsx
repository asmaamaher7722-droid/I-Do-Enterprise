import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/* RTL breadcrumb: root sits on the RIGHT, current page on the LEFT.
   Separator chevron points LEFT (the RTL "forward" direction). */
export default function Breadcrumb({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const linkColor =
    tone === "dark"
      ? "text-white/70 hover:text-white"
      : "text-muted hover:text-primary-600";
  const currentColor = tone === "dark" ? "text-white" : "text-strong";
  const sepColor = tone === "dark" ? "text-white/40" : "text-[#B7C2D4]";

  return (
    <nav aria-label="مسار التنقل" className="text-[14px]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.href && !isLast ? (
                <Link href={c.href} className={`font-medium transition-colors ${linkColor}`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={`font-semibold ${currentColor}`}>
                  {c.label}
                </span>
              )}
              {!isLast && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={sepColor}
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
