import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { waLink } from "@/lib/config";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-3">
      <span className="h-1.5 w-1.5 rounded-full grad-brand" />
      {children}
    </span>
  );
}

export function SectionHead({
  tag,
  title,
  text,
  center = true,
}: {
  tag: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-2xl",
        center ? "mx-auto text-center" : "text-start",
      )}
    >
      <Eyebrow>{tag}</Eyebrow>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-white/60">{text}</p>}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "wa" | "outline";
  external?: boolean;
  ariaLabel?: string;
};

export function Btn({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  external,
  ariaLabel,
}: BtnProps) {
  const styles = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-3/70",
    variant === "primary" &&
      "grad-brand text-white shadow-[0_18px_40px_-18px_rgba(124,92,255,0.9)] hover:shadow-[0_24px_50px_-18px_rgba(192,92,255,0.9)] hover:brightness-110",
    variant === "wa" &&
      "bg-[#25D366] text-[#062b16] shadow-[0_18px_40px_-18px_rgba(37,211,102,0.8)] hover:brightness-110",
    variant === "ghost" &&
      "glass text-white hover:border-white/30 hover:bg-white/10",
    variant === "outline" &&
      "border border-white/15 text-white/80 hover:border-brand-3/60 hover:text-white",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={styles}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

/** Anchor styled as a button that opens WhatsApp with a prefilled message. */
export function WaBtn({
  message,
  children,
  className,
  variant = "wa",
  ariaLabel,
}: {
  message: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "wa" | "outline";
  ariaLabel?: string;
}) {
  return (
    <Btn href={waLink(message)} external variant={variant} className={className} ariaLabel={ariaLabel}>
      {children}
    </Btn>
  );
}

export function GlowBlob({
  className,
  color = "bg-brand/30",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[110px]",
        color,
        className,
      )}
    />
  );
}

export function GridPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
      }}
    />
  );
}
