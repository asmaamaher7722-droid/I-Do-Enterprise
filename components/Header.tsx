"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

/* Nav labels follow the home reference. Every item resolves to a real route
   (no 404s): industries → the home "sectors" section, FAQ → the demo page. */
const NAV = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الموديولات", href: "/modules" },
  { label: "بدأ التشغيل", href: "/how-it-works" },
  { label: "شركاؤنا", href: "/integrations" },
  { label: "الصناعات", href: "/#sectors" },
  { label: "قصص النجاح", href: "/case-studies" },
  { label: "الأسئلة الشائعة", href: "/contact#faq" },
];

/* Twin circular brand marks (recreated — no logo asset files exist). */
function BrandLogo() {
  return (
    <Link href="/" aria-label="I DO Enterprise" className="flex items-center gap-2.5">
      {/* "d" mark — solid gradient circle */}
      <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="idoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2E6BF0" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="21" fill="url(#idoG)" />
        <path
          d="M27 12 v13 a7 7 0 1 1 -7 -7"
          fill="none"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-7 w-px bg-hairline" />
      {/* "i" verified mark — ring circle */}
      <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill="#fff" stroke="#2563EB" strokeWidth="2.6" />
        <circle cx="22" cy="14" r="2.7" fill="#2563EB" />
        <rect x="19.3" y="19" width="5.4" height="13" rx="2.7" fill="#2563EB" />
      </svg>
    </Link>
  );
}

function LangSwitch({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="اللغة: العربية"
      className={`flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1.5 text-[13px] font-bold text-strong transition-colors hover:bg-surface-light ${className}`}
    >
      <svg viewBox="0 0 24 16" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#1A7A3D" />
        <rect x="4" y="5.6" width="16" height="1.1" rx="0.5" fill="#fff" />
        <rect x="5.5" y="8.8" width="11" height="1.7" rx="0.8" fill="#fff" />
        <rect x="14.5" y="9.1" width="3" height="1" rx="0.5" fill="#fff" />
      </svg>
      <span className="ltr">AR</span>
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Brand marks sit on the right edge in RTL */}
        <BrandLogo />

        {/* Centered desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[14px] font-semibold text-strong transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Left cluster: language switch + primary CTA */}
        <div className="hidden items-center gap-3 xl:flex">
          <LangSwitch />
          <Button href="/contact" variant="primary">
            تواصل معنا
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="القائمة"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline xl:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-strong" />
            <span className="block h-0.5 w-5 bg-strong" />
            <span className="block h-0.5 w-5 bg-strong" />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-hairline bg-white xl:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[16px] font-semibold text-strong hover:bg-surface-light"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <LangSwitch />
              <Button href="/contact" variant="primary" fullWidth>
                تواصل معنا
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
