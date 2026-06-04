import Link from "next/link";
import { iconMap, IconName, ArrowForward } from "./Icons";

export type Tint =
  | "blue"
  | "teal"
  | "orange"
  | "purple"
  | "green"
  | "indigo"
  | "slate"
  | "rose";

/** Exported so diagrams / flow nodes reuse the exact same tint tiles. */
export const tintClasses: Record<Tint, string> = {
  blue: "bg-primary-100 text-primary-600",
  teal: "bg-[#E3F7F4] text-teal",
  orange: "bg-[#FFF1E6] text-orange",
  purple: "bg-[#F0EBFF] text-purple",
  green: "bg-[#E3F6EC] text-[#1FA45C]",
  indigo: "bg-[#EAEAFE] text-[#5650D6]",
  slate: "bg-[#EDF1F7] text-[#5C6477]",
  rose: "bg-[#FCE9EC] text-[#E04848]",
};

interface ModuleCardProps {
  icon: IconName;
  tint: Tint;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export default function ModuleCard({
  icon,
  tint,
  title,
  description,
  href = "#",
  linkLabel = "التفاصيل",
}: ModuleCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className="group flex min-h-[200px] flex-col rounded-card border border-hairline bg-white p-6 shadow-md transition-all duration-150 hover:-translate-y-1 hover:border-[#D4E0F5] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-tile ${tintClasses[tint]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-[20px] font-bold leading-7 text-strong">
        {title}
      </h3>
      <p className="mb-4 line-clamp-2 text-[15px] leading-6 text-muted">
        {description}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold text-primary-600">
        {linkLabel}
        <ArrowForward className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
