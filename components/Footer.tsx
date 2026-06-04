import Link from "next/link";

const COLUMNS = [
  {
    title: "المنتج",
    links: [
      { label: "الوحدات", href: "/modules" },
      { label: "كيف يعمل", href: "/how-it-works" },
      { label: "التطبيق ولوحة التحكم", href: "/app" },
      { label: "التكاملات", href: "/integrations" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "نبذة عنا", href: "/about" },
      { label: "قصص النجاح", href: "/case-studies" },
      { label: "تواصل معنا", href: "/contact" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { label: "مركز المساعدة", href: "#" },
      { label: "الأسئلة الشائعة", href: "#" },
      { label: "حالة النظام", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-[15px] font-extrabold text-white">
                I
              </span>
              <span className="text-[18px] font-extrabold">
                I Do <span className="text-primary-600">Enterprise</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/65">
              نظام متكامل لإدارة جميع عمليات منشأتك — وحدات مترابطة، بيانات
              واحدة، وتحكم كامل من مكان واحد.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-[15px] font-bold text-white">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 I Do Enterprise. جميع الحقوق محفوظة.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="hover:text-white">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
