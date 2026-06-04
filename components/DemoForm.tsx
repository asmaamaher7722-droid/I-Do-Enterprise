"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const SECTORS = ["الحكومة", "المطارات", "المستشفيات", "الجامعات", "المراكز التجارية", "منشآت متعددة المواقع", "أخرى"];
const SITES = ["موقع واحد", "2 - 5 مواقع", "6 - 20 موقعًا", "أكثر من 20 موقعًا"];
const STAFF = ["أقل من 50", "50 - 200", "200 - 1000", "أكثر من 1000"];

type Form = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  sector: string;
  sites: string;
  staff: string;
  goal: string;
};

const EMPTY: Form = { name: "", company: "", role: "", email: "", phone: "", sector: "", sites: "", staff: "", goal: "" };

const inputCls =
  "w-full rounded-[10px] border bg-white px-4 py-2.5 text-[15px] text-strong outline-none transition-colors placeholder:text-muted focus:border-primary-600 focus:ring-2 focus:ring-primary-100";

function Label({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-[13px] font-semibold text-strong">
      {children}
      {required ? <span className="text-[#DC2F36]"> *</span> : null}
    </label>
  );
}

function Chevron() {
  return (
    <svg
      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function DemoForm() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  function validate() {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim()) e.name = "هذا الحقل مطلوب";
    if (!form.company.trim()) e.company = "هذا الحقل مطلوب";
    if (!form.email.trim()) e.email = "هذا الحقل مطلوب";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "يرجى إدخال بريد إلكتروني صالح";
    if (!form.phone.trim()) e.phone = "هذا الحقل مطلوب";
    if (!form.sector) e.sector = "يرجى اختيار القطاع";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  }

  const errCls = (k: keyof Form) => (errors[k] ? "border-[#DC2F36]" : "border-[#D4DBE8]");

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-card border border-hairline bg-white p-8 text-center shadow-lg md:p-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4F6EC] text-[#1FA45C]">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <h3 className="text-[22px] font-extrabold text-strong">تم استلام طلبك بنجاح</h3>
        <p className="max-w-sm text-[15px] leading-7 text-muted">
          شكرًا لك. سيتواصل معك أحد مختصي الحلول لدينا خلال يوم عمل واحد لتحديد موعد العرض التجريبي.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
          className="mt-2 text-[14px] font-semibold text-primary-600 hover:opacity-80"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-card border border-hairline bg-white p-6 shadow-lg md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label required>الاسم الكامل</Label>
          <input className={`${inputCls} ${errCls("name")}`} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="مثال: أحمد العبدالله" />
          {errors.name ? <p className="mt-1 text-[12px] text-[#DC2F36]">{errors.name}</p> : null}
        </div>
        <div>
          <Label required>اسم الشركة</Label>
          <input className={`${inputCls} ${errCls("company")}`} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="اسم المنشأة" />
          {errors.company ? <p className="mt-1 text-[12px] text-[#DC2F36]">{errors.company}</p> : null}
        </div>
        <div>
          <Label>المسمى الوظيفي</Label>
          <input className={`${inputCls} border-[#D4DBE8]`} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="مثال: مدير العمليات" />
        </div>
        <div>
          <Label required>البريد الإلكتروني</Label>
          <input type="email" dir="ltr" className={`${inputCls} ${errCls("email")} text-start`} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="name@company.com" />
          {errors.email ? <p className="mt-1 text-[12px] text-[#DC2F36]">{errors.email}</p> : null}
        </div>
        <div>
          <Label required>رقم الهاتف</Label>
          <input type="tel" dir="ltr" className={`${inputCls} ${errCls("phone")} text-start`} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+966 5X XXX XXXX" />
          {errors.phone ? <p className="mt-1 text-[12px] text-[#DC2F36]">{errors.phone}</p> : null}
        </div>
        <div>
          <Label required>القطاع</Label>
          <div className="relative">
            <select className={`${inputCls} ${errCls("sector")} appearance-none ${form.sector ? "" : "text-muted"}`} value={form.sector} onChange={(e) => set("sector", e.target.value)}>
              <option value="" disabled>اختر القطاع</option>
              {SECTORS.map((s) => (
                <option key={s} value={s} className="text-strong">{s}</option>
              ))}
            </select>
            <Chevron />
          </div>
          {errors.sector ? <p className="mt-1 text-[12px] text-[#DC2F36]">{errors.sector}</p> : null}
        </div>
        <div>
          <Label>عدد المواقع</Label>
          <div className="relative">
            <select className={`${inputCls} border-[#D4DBE8] appearance-none ${form.sites ? "" : "text-muted"}`} value={form.sites} onChange={(e) => set("sites", e.target.value)}>
              <option value="" disabled>اختر العدد</option>
              {SITES.map((s) => (
                <option key={s} value={s} className="text-strong">{s}</option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>
        <div>
          <Label>عدد الموظفين</Label>
          <div className="relative">
            <select className={`${inputCls} border-[#D4DBE8] appearance-none ${form.staff ? "" : "text-muted"}`} value={form.staff} onChange={(e) => set("staff", e.target.value)}>
              <option value="" disabled>اختر العدد</option>
              {STAFF.map((s) => (
                <option key={s} value={s} className="text-strong">{s}</option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label>ما الذي ترغب في تحسينه؟</Label>
          <textarea
            className={`${inputCls} border-[#D4DBE8] min-h-[110px] resize-y`}
            value={form.goal}
            onChange={(e) => set("goal", e.target.value)}
            placeholder="أخبرنا باختصار عن التحديات التي تواجه منشأتك..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-primary-600 px-7 py-3.5 text-[16px] font-semibold text-white shadow-md transition-all duration-150 hover:bg-primary-700 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        احجز العرض التجريبي
      </button>
      <p className="mt-3 text-center text-[12px] text-muted">
        بياناتك آمنة · بدون أي التزام · نتواصل معك خلال يوم عمل واحد
      </p>
    </form>
  );
}
