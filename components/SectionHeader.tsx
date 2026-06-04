interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeaderProps) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-start";
  const titleColor = tone === "dark" ? "text-white" : "text-strong";
  const subColor = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className={`flex max-w-prose flex-col gap-4 ${alignCls}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`text-[26px] font-extrabold leading-tight md:text-[32px] lg:text-[40px] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] leading-7 md:text-[18px] md:leading-8 ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
