import Link from "next/link";
import { ArrowForward } from "./Icons";

type Variant = "primary" | "secondary" | "text";
type Surface = "light" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  surface?: Surface;
  withArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

function classes(variant: Variant, surface: Surface, fullWidth?: boolean) {
  const widthCls = fullWidth ? "w-full justify-center" : "";

  if (variant === "text") {
    const color =
      surface === "dark" ? "text-white" : "text-primary-600";
    return `group inline-flex items-center gap-2 text-[15px] font-semibold ${color} transition-colors hover:opacity-80 ${widthCls}`;
  }

  const baseBtn =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[16px] font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

  if (variant === "primary") {
    const prim =
      surface === "dark"
        ? "bg-white text-primary-600 hover:bg-white/90"
        : "bg-primary-600 text-white hover:bg-primary-700";
    return `${baseBtn} ${prim} shadow-md active:translate-y-px ${widthCls}`;
  }

  // secondary
  const sec =
    surface === "dark"
      ? "border-[1.5px] border-white/70 text-white hover:bg-white/10"
      : "border-[1.5px] border-primary-600 text-primary-600 hover:bg-primary-100";
  return `${baseBtn} bg-transparent ${sec} ${widthCls}`;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  surface = "light",
  withArrow = false,
  fullWidth = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${classes(variant, surface, fullWidth)} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowForward className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
      )}
    </Link>
  );
}
