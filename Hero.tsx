import { useI18n } from "@/lib/i18n";
import { CONTACT, waLink } from "@/lib/config";
import { IconInstagram, IconMail, IconUp, IconWhatsApp, Logo } from "@/components/Icons";

const SECTIONS = ["home", "about", "services", "work", "process", "packages", "contact"];

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-2/60 pt-16 pb-8">
      <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full grad-brand opacity-15 blur-[100px]" />
      <div className="container-x relative">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span>
                <span className="block text-lg font-extrabold">
                  Mohamed <span className="grad-text">Designer</span>
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  {t.footer.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {t.hero.text}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={waLink(t.contact.title)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-[#25D366]/60 hover:text-[#25D366]"
              >
                <IconWhatsApp className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-3/60 hover:text-brand-3"
              >
                <IconMail className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-2/60 hover:text-brand-2"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              {t.footer.links}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-1">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-white/60 transition hover:text-brand-3"
                  >
                    {(t.nav as unknown as Record<string, string>)[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={waLink(t.contact.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition hover:text-[#25D366]"
                  dir="ltr"
                >
                  {CONTACT.phoneLocal}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-white/70 transition hover:text-brand-3"
                  dir="ltr"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition hover:text-brand-2"
                  dir="ltr"
                >
                  {CONTACT.instagram}
                </a>
              </li>
              <li className="text-white/45">{t.contact.cards[3].value}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} Mohamed Designer — {t.footer.rights}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/70 transition hover:border-brand-3/50 hover:text-white"
          >
            <IconUp className="h-4 w-4" />
            {t.footer.top}
          </button>
        </div>
      </div>
    </footer>
  );
}
