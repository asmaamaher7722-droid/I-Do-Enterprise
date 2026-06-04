interface StatsBlockProps {
  value: string;
  label: string;
  tone?: "light" | "dark";
}

export default function StatsBlock({
  value,
  label,
  tone = "light",
}: StatsBlockProps) {
  const valueColor = tone === "dark" ? "text-white" : "text-primary-600";
  const labelColor = tone === "dark" ? "text-white/70" : "text-muted";

  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={`text-[36px] font-extrabold leading-none md:text-[44px] lg:text-[48px] ${valueColor}`}
      >
        {value}
      </span>
      <span className={`mt-3 text-[15px] font-medium ${labelColor}`}>
        {label}
      </span>
    </div>
  );
}
