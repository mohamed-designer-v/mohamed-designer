import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LANGS } from "@/lib/translations";
import { CONTACT, waLink } from "@/lib/config";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { IconChevron, IconGlobe, IconMenu, IconWhatsApp, IconClose, Logo } from "@/components/Icons";
import { cn } from "@/utils/cn";

const SECTIONS = ["home", "about", "services", "work", "process", "packages", "contact"];

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.nav.language}
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:bg-white/10",
          compact && "w-full justify-between px-4 py-3",
        )}
      >
        <span className="inline-flex items-center gap-2">
          <IconGlobe className="h-4 w-4 text-brand-3" />
          <span className={cn(lang === "ar" && "font-bold")}>{current.label}</span>
        </span>
        <IconChevron className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-ink-2/95 p-1.5 shadow-2xl backdrop-blur-xl">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition",
                l.code === lang
                  ? "bg-brand/20 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <span>{l.label}</span>
              <span className="text-[10px] font-bold tracking-widest text-white/40">
                {l.short}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t, isRtl } = useI18n();
  const scrolled = useScrolled(30);
  const active = useActiveSection(SECTIONS);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const links = SECTIONS.map((id) => ({
    id,
    label: (t.nav as unknown as Record<string, string>)[id] ?? id,
  }));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink/80 py-2.5 backdrop-blur-xl"
            : "border-b border-transparent py-4",
        )}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <Logo className="h-10 w-10 shrink-0" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight">
                Mohamed <span className="grad-text">Designer</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {t.meta.subtitle}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "relative rounded-xl px-3.5 py-2 text-sm font-semibold transition",
                  active === l.id
                    ? "text-white"
                    : "text-white/55 hover:text-white",
                )}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full grad-brand" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LangSwitch />
            </div>
            <a
              href={waLink(`${t.contact.title} — ${CONTACT.brand}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl grad-brand px-4 py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_-14px_rgba(124,92,255,0.9)] transition hover:brightness-110 md:inline-flex"
            >
              <IconWhatsApp className="h-4 w-4" />
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label={t.nav.open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          menu ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMenu(false)}
          className={cn(
            "absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-300",
            menu ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 w-[82%] max-w-sm border-white/10 bg-ink-2 p-6 shadow-2xl transition-transform duration-400 ease-out",
            isRtl ? "start-0 border-e" : "end-0 border-s",
            menu
              ? "translate-x-0"
              : isRtl
                ? "-translate-x-full"
                : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="font-extrabold">Mohamed Designer</span>
            </div>
            <button
              type="button"
              onClick={() => setMenu(false)}
              aria-label={t.nav.close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1.5">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenu(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-semibold transition",
                  active === l.id
                    ? "bg-brand/20 text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-6">
            <LangSwitch compact />
          </div>

          <a
            href={waLink(`${t.contact.title} — ${CONTACT.brand}`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenu(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 font-bold text-[#062b16]"
          >
            <IconWhatsApp className="h-5 w-5" />
            {t.nav.cta}
          </a>
          <p className="mt-6 text-center text-sm text-white/40" dir="ltr">
            {CONTACT.phoneLocal}
          </p>
        </div>
      </div>
    </>
  );
}
