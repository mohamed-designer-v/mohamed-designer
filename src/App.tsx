import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTENT, LANGS, type Lang } from "./i18n";
import {
  InstagramIcon,
  MailIcon,
  Monogram,
  WhatsAppIcon,
} from "./components/ui";
import {
  About,
  ContactSection,
  Hero,
  Process,
  RequestSection,
  Services,
  Works,
} from "./components/sections";
import {
  EMAIL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "./i18n";

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [menu, setMenu] = useState(false);
  const c = CONTENT[lang];

  useEffect(() => {
    const el = document.documentElement;
    el.lang = c.htmlLang;
    el.dir = c.dir;
  }, [c.htmlLang, c.dir]);

  const nav = [
    { id: "about", label: c.nav.about },
    { id: "services", label: c.nav.services },
    { id: "works", label: c.nav.works },
    { id: "process", label: c.nav.process },
    { id: "request", label: c.nav.request },
    { id: "contact", label: c.nav.contact },
  ];

  return (
    <div className="relative min-h-screen bg-paper">
      <div className="grain" aria-hidden="true" />

      {/* ---------------------------------------------------------- RAIL */}
      <aside className="fixed inset-y-0 start-0 z-40 hidden w-[88px] flex-col items-center justify-between border-e-2 border-ink bg-paper py-7 lg:flex">
        <a href="#home" aria-label="Mohamed Designer" className="block">
          <Monogram className="h-11 w-11" />
        </a>

        <nav className="flex flex-col items-center">
          <ul className="vert flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="label text-taupe transition-colors duration-300 hover:text-vermilion"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1.5">
            {LANGS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                aria-pressed={lang === l.id}
                title={l.label}
                className={`num h-9 w-9 border text-[11px] font-semibold transition-colors duration-300 ${
                  lang === l.id
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/25 text-taupe hover:border-vermilion hover:text-vermilion"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
          <span className="my-1 h-8 w-px bg-ink/20" />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-taupe transition-colors duration-300 hover:text-vermilion"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-taupe transition-colors duration-300 hover:text-vermilion"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-taupe transition-colors duration-300 hover:text-vermilion"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </aside>

      {/* ----------------------------------------------------- MOBILE BAR */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between gap-3 border-b-2 border-ink bg-paper/95 px-4 backdrop-blur lg:hidden">
        <a href="#home" className="flex items-center gap-2.5">
          <Monogram className="h-8 w-8" />
          <span className="label leading-tight">
            MOHAMED
            <br />
            DESIGNER
          </span>
        </a>
        <div className="flex items-center gap-1.5">
          {LANGS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLang(l.id)}
              aria-pressed={lang === l.id}
              className={`num h-8 min-w-8 border px-2 text-[11px] font-semibold transition-colors ${
                lang === l.id
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/25 text-taupe"
              }`}
            >
              {l.short}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setMenu(true)}
            aria-label="Menu"
            className="ms-1 flex h-8 w-8 flex-col items-center justify-center gap-[5px] border border-ink/25"
          >
            <span className="h-[1.5px] w-4 bg-ink" />
            <span className="h-[1.5px] w-4 bg-ink" />
            <span className="h-[1.5px] w-4 bg-ink" />
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------- MENU SHEET */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink px-6 py-6 text-paper"
          >
            <div className="flex items-center justify-between">
              <Monogram className="h-9 w-9" />
              <button
                type="button"
                onClick={() => setMenu(false)}
                aria-label="Close"
                className="label border border-paper/30 px-4 py-2.5"
              >
                ✕
              </button>
            </div>
            <nav className="mt-10 flex-1">
              <ul>
                {nav.map((n, i) => (
                  <motion.li
                    key={n.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.08, duration: 0.4 }}
                    className="border-b border-paper/15"
                  >
                    <a
                      href={`#${n.id}`}
                      onClick={() => setMenu(false)}
                      className="flex items-baseline gap-5 py-5"
                    >
                      <span className="num text-xs text-paper/50">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[clamp(1.9rem,8vw,2.6rem)] font-bold leading-none tracking-[-0.02em]">
                        {n.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 text-paper/80"
              >
                <WhatsAppIcon className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="label flex items-center gap-2 text-paper/80 break-all"
              >
                <MailIcon className="h-4 w-4" /> {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 text-paper/80"
              >
                <InstagramIcon className="h-4 w-4" /> Mohamed.designer.v
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------- MAIN */}
      <main className="pt-16 lg:ps-[88px] lg:pt-0">
        <Hero c={c} lang={lang} />
        <About c={c} lang={lang} />
        <Services c={c} lang={lang} />
        <Works c={c} lang={lang} />
        <Process c={c} lang={lang} />
        <RequestSection c={c} lang={lang} />
        <ContactSection c={c} lang={lang} />
      </main>

      {/* floating WhatsApp button on mobile */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center border-2 border-ink bg-vermilion text-paper shadow-[4px_4px_0_0_#14110E] transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 lg:hidden"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

    </div>
  );
}
