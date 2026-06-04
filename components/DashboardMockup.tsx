/* A recreated dashboard UI mockup built from real markup — not an image.
   Lightweight + parametrized so every section reuses ONE component:
   pass `variant` (bars | line | donut), an `accent` hex, and 3 `kpis`. */

interface DashboardMockupProps {
  accent?: string;
  variant?: "bars" | "line" | "donut";
  kpis?: string[];
}

const KPI_COLORS = ["text-primary-600", "text-teal", "text-orange"];
const DEFAULT_KPIS = ["1٬248", "986", "262"];

export default function DashboardMockup({
  accent = "#2563EB",
  variant = "bars",
  kpis = DEFAULT_KPIS,
}: DashboardMockupProps = {}) {
  const bars = [42, 68, 54, 80, 61, 90, 73];

  return (
    <div className="relative w-full">
      {/* Browser / app frame */}
      <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-mockup">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-hairline bg-surface-light px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ms-3 h-5 w-40 rounded-md bg-white" />
        </div>

        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Sidebar */}
          <div className="col-span-3 hidden flex-col gap-3 sm:flex">
            <div className="h-8 rounded-lg bg-primary-100" />
            <div className="h-6 rounded-lg bg-surface-light" />
            <div className="h-6 rounded-lg bg-surface-light" />
            <div className="h-6 rounded-lg bg-surface-light" />
            <div className="h-6 rounded-lg bg-surface-light" />
          </div>

          {/* Content */}
          <div className="col-span-12 flex flex-col gap-4 sm:col-span-9">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {kpis.slice(0, 3).map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-hairline bg-white p-3"
                >
                  <div className="mb-2 h-2 w-10 rounded bg-surface-light2" />
                  <div className={`text-[18px] font-extrabold ${KPI_COLORS[i]}`}>
                    <span className="ltr">{v}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl border border-hairline bg-white p-4">
              <div className="mb-4 h-2 w-24 rounded bg-surface-light2" />

              {variant === "bars" && (
                <div className="flex h-28 items-end justify-between gap-2">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-md"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? accent : "#C9D9F7",
                      }}
                    />
                  ))}
                </div>
              )}

              {variant === "line" && (
                <svg
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="h-28 w-full"
                >
                  <polyline
                    fill="none"
                    stroke={accent}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,32 16,24 33,27 50,15 66,19 83,8 100,12"
                  />
                  <line
                    x1="0"
                    y1="39"
                    x2="100"
                    y2="39"
                    stroke="#E6ECF5"
                    strokeWidth="1"
                  />
                </svg>
              )}

              {variant === "donut" && (
                <div className="flex h-28 items-center justify-center">
                  <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#E6ECF5"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke={accent}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="68 100"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent card — top */}
      <div className="absolute -top-5 start-6 hidden rounded-tile border border-hairline bg-white px-4 py-3 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-[#E3F7F4]" />
          <div>
            <div className="h-2 w-16 rounded bg-surface-light2" />
            <div className="mt-1 h-2 w-10 rounded bg-surface-light" />
          </div>
        </div>
      </div>

      {/* Floating accent card — bottom */}
      <div className="absolute -bottom-5 end-6 hidden rounded-tile border border-hairline bg-white px-4 py-3 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span
            className="h-8 w-8 rounded-lg"
            style={{ backgroundColor: `${accent}1A` }}
          />
          <div>
            <div className="h-2 w-16 rounded bg-surface-light2" />
            <div className="mt-1 h-2 w-10 rounded bg-surface-light" />
          </div>
        </div>
      </div>
    </div>
  );
}
