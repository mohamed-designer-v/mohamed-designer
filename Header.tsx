import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, waLink } from "@/lib/config";
import { IconUp, IconWhatsApp } from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function FloatingActions() {
  const { t } = useI18n();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent"
      >
        <div
          className="h-full grad-brand transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed bottom-5 z-[65] flex flex-col items-center gap-3 end-5">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.float.top}
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-ink-2/90 text-white/80 shadow-xl backdrop-blur transition-all duration-300 hover:border-brand-3/60 hover:text-white",
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0",
          )}
        >
          <IconUp className="h-5 w-5" />
        </button>

        <a
          href={waLink(t.contact.title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.float.wa}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-[#062b16] shadow-[0_18px_40px_-14px_rgba(37,211,102,0.75)] transition hover:scale-105"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl bg-[#25D366]/50 animate-pulse-ring"
          />
          <IconWhatsApp className="relative h-7 w-7" />
          <span className="pointer-events-none absolute end-16 whitespace-nowrap rounded-xl border border-white/10 bg-ink-2/95 px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl backdrop-blur transition group-hover:opacity-100">
            {t.float.wa} · {CONTACT.phoneLocal}
          </span>
        </a>
      </div>
    </>
  );
}
