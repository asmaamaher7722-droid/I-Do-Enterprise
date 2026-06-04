import Button from "./Button";

interface CTASectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryLabel = "اطلب عرض تجريبي",
  primaryHref = "/contact",
  secondaryLabel = "تواصل معنا",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-navy-gradient">
      <div className="container-x section-y">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-semibold text-white/90">
              {eyebrow}
            </span>
          )}
          <h2 className="text-[26px] font-extrabold leading-tight text-white md:text-[32px] lg:text-[40px]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[15px] leading-7 text-white/75 md:text-[18px] md:leading-8">
              {subtitle}
            </p>
          )}
          <div className="mt-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button href={primaryHref} variant="primary" withArrow fullWidth>
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              surface="dark"
              fullWidth
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
