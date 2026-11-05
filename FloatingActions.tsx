import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { CONTACT, mailLink, waLink } from "@/lib/config";
import { GlowBlob, Section, SectionHead } from "@/components/ui";
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconCopy,
  IconInstagram,
  IconMail,
  IconWhatsApp,
} from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function Contact() {
  const { t, isRtl } = useI18n();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const request = `${t.contact.title} — ${CONTACT.brand}`;

  const buildBody = () =>
    [
      `${t.contact.form.name}: ${name}`,
      service ? `${t.contact.form.service}: ${service}` : "",
      budget ? `${t.contact.form.budget}: ${budget}` : "",
      `${t.contact.form.message}: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    window.open(waLink(`${request}\n\n${buildBody()}`), "_blank", "noopener");
  };

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  const cardIcons = {
    whatsapp: IconWhatsApp,
    email: IconMail,
    instagram: IconInstagram,
    time: IconClock,
  } as const;

  const cardHref: Record<string, string> = {
    whatsapp: waLink(request),
    email: mailLink(request, buildBody()),
    instagram: CONTACT.instagramUrl,
  };

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-3/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-3/20";
  const labelCls = "mb-2 block text-xs font-bold uppercase tracking-wider text-white/50";

  return (
    <Section id="contact">
      <GlowBlob className="bottom-0 start-1/3 h-96 w-96" color="bg-brand/25" />
      <div className="container-x relative">
        <SectionHead tag={t.contact.tag} title={t.contact.title} text={t.contact.text} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          {/* Form */}
          <form
            onSubmit={submit}
            className="reveal rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="md-name">
                  {t.contact.form.name}
                </label>
                <input
                  id="md-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.form.namePh}
                  className={cn(inputCls, error && !name.trim() && "border-rose-400/60")}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="md-service">
                  {t.contact.form.service}
                </label>
                <select
                  id="md-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={cn(inputCls, "appearance-none")}
                >
                  <option value="">{t.contact.form.servicePh}</option>
                  {t.contact.services.map((s) => (
                    <option key={s} value={s} className="bg-ink-2">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="md-budget">
                  {t.contact.form.budget}
                </label>
                <select
                  id="md-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={cn(inputCls, "appearance-none")}
                >
                  <option value="">{t.contact.form.budgetPh}</option>
                  {t.contact.budgets.map((b) => (
                    <option key={b} value={b} className="bg-ink-2">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="md-message">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="md-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.form.messagePh}
                  className={cn(inputCls, "resize-none", error && !message.trim() && "border-rose-400/60")}
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                {t.contact.form.required}
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-[#062b16] transition hover:brightness-110 active:scale-[0.98] sm:flex-none"
              >
                <IconWhatsApp className="h-5 w-5" />
                {t.contact.form.submit}
              </button>
              <a
                href={mailLink(request, buildBody())}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 px-6 py-4 text-sm font-bold text-white/80 transition hover:border-brand-3/60 hover:text-white"
              >
                <IconMail className="h-5 w-5" />
                {t.contact.form.email}
              </a>
            </div>
          </form>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <div className="reveal rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-400/15 to-white/[0.02] p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
                {t.contact.waTitle}
              </span>
              <p className="mt-4 text-2xl font-black text-white" dir="ltr">
                {CONTACT.phoneLocal}
              </p>
              <p className="mt-2 text-sm text-white/60">{t.contact.waText}</p>
              <a
                href={waLink(request)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#062b16] transition hover:brightness-110"
              >
                <IconWhatsApp className="h-5 w-5" />
                {t.nav.cta}
              </a>
            </div>

            {t.contact.cards.map((c) => {
              const Icon = cardIcons[c.key as keyof typeof cardIcons];
              const href = cardHref[c.key];
              const canCopy = c.key === "whatsapp" || c.key === "email";
              const Wrapper = href
                ? (p: { children: React.ReactNode; className?: string }) => (
                    <a
                      href={href}
                      target={c.key === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={p.className}
                    >
                      {p.children}
                    </a>
                  )
                : (p: { children: React.ReactNode; className?: string }) => (
                    <div className={p.className}>{p.children}</div>
                  );

              return (
                <Wrapper
                  key={c.key}
                  className="reveal group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand/25 to-brand-3/10 text-brand-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-white/45">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-bold text-white" dir="ltr">
                      {c.value}
                    </span>
                  </span>
                  {canCopy && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        copy(c.value);
                      }}
                      aria-label={t.contact.form.copy}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white/50 transition hover:border-brand-3/50 hover:text-white"
                    >
                      {copied === c.value ? (
                        <IconCheck className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <IconCopy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </Wrapper>
              );
            })}

            <p className="reveal mt-1 text-center text-xs text-white/35" dir={isRtl ? "rtl" : "ltr"}>
              {t.footer.made}
            </p>
          </div>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-24 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-white/15 bg-ink-2/95 px-5 py-2.5 text-sm font-bold text-white shadow-2xl backdrop-blur">
          <span className="inline-flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-emerald-400" />
            {t.contact.form.copied}
          </span>
        </div>
      )}
    </Section>
  );
}
