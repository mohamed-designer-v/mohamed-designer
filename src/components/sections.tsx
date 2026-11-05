import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  type Content,
  type Lang,
  type Project,
} from "../i18n";
import {
  ArrowIcon,
  InstagramIcon,
  MailIcon,
  Marquee,
  PlateLabel,
  Stamp,
  WhatsAppIcon,
} from "./ui";

import heroImg from "../assets/images/hero.jpg";
import w1 from "../assets/images/work-01.jpg";
import w2 from "../assets/images/work-02.jpg";
import w3 from "../assets/images/work-03.jpg";
import w4 from "../assets/images/work-04.jpg";
import w5 from "../assets/images/work-05.jpg";
import w6 from "../assets/images/work-06.jpg";

const WORK_IMAGES = [w1, w2, w3, w4, w5, w6];

type Props = { c: Content; lang: Lang };

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

/* ---------------------------------------------------------------- HERO */

export function Hero({ c, lang }: Props) {
  const outline = lang === "ar" ? "text-vermilion" : "text-outline-ink";
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-end overflow-hidden border-b-2 border-ink lg:min-h-[100svh]"
      >
        {/* printed image plane, bleeding off the inline-end edge */}
        <div className="absolute inset-y-0 end-0 w-full lg:w-[54%]">
          <img
            src={heroImg}
            alt="Risograph posters pinned to a studio wall"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-paper/72 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/55 to-transparent lg:block rtl:bg-gradient-to-l" />
          <div className="absolute inset-0 bg-vermilion/10 mix-blend-multiply" />
        </div>

        <Stamp
          text="GRAPHIC DESIGN · IDENTITY · PRINT · MOHAMED · "
          className="absolute end-8 top-28 z-20 hidden h-[124px] w-[124px] text-ink/80 mix-blend-multiply lg:block"
        />

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="relative z-10 px-6 pb-10 pt-28 sm:px-10 lg:px-16 lg:pb-14"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <span className="label text-ink">{c.hero.eyebrow}</span>
            <span className="label hidden text-taupe sm:inline">
              ↓ {c.hero.scroll}
            </span>
            <span className="inline-flex items-center gap-2 border border-ink/30 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vermilion opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-vermilion" />
              </span>
              <span className="label text-ink">{c.hero.available}</span>
            </span>
          </motion.div>

          {/* the headline group multiplies into the printed image plane */}
          <div className="mix-blend-multiply">
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-7"
            >
              <span className="block font-display text-[clamp(3.1rem,14.5vw,12.5rem)] font-extrabold leading-[0.82] tracking-[-0.045em] text-ink">
                MOHAMED
              </span>
              <span
                className={`mt-1 block font-display text-[clamp(1.95rem,7.2vw,5.6rem)] font-bold leading-[1] tracking-[-0.02em] ${outline}`}
              >
                {c.hero.role}
              </span>
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-[42ch] text-[clamp(1rem,1.45vw,1.22rem)] leading-[1.75] text-ink-soft">
              {c.hero.lead}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#request"
                className="group inline-flex items-center gap-3 border-2 border-ink bg-ink px-7 py-4 text-paper transition-colors duration-300 hover:bg-vermilion hover:border-vermilion"
              >
                <span className="label">{c.hero.ctaRequest}</span>
                <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
              </a>
              <a
                href="#works"
                className="ink-fill inline-flex items-center gap-3 border-2 border-ink px-7 py-4 transition-colors duration-300"
              >
                <span className="label">{c.hero.ctaWork}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Marquee items={c.marquee} />
    </>
  );
}

/* --------------------------------------------------------------- ABOUT */

export function About({ c }: Props) {
  return (
    <section id="about" className="scroll-mt-20 border-b-2 border-ink">
      <div className="grid lg:grid-cols-12">
        <div className="border-b-2 border-ink px-6 py-16 sm:px-10 lg:col-span-7 lg:border-b-0 lg:border-e-2 lg:px-16 lg:py-24">
          <PlateLabel plate="01" label={c.about.label} />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-[16ch] font-display text-[clamp(2.15rem,5.2vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            {c.about.title}
          </motion.h2>
          <div className="mt-9 grid gap-6 text-[1.02rem] leading-[1.85] text-ink-soft md:grid-cols-2 md:gap-10">
            <p>{c.about.p1}</p>
            <p>{c.about.p2}</p>
          </div>
        </div>

        {/* dense stats table, treated as a printed spec sheet */}
        <div className="bg-paper-2 px-6 py-12 sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
          <span className="label text-taupe">FIG. 01 — INDEX</span>
          <dl className="mt-8">
            {c.about.stats.map((s, i) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-6 first:border-t first:border-ink/15"
              >
                <dt className="text-sm text-taupe">{s.k}</dt>
                <dd className="num text-[clamp(2.4rem,5.6vw,3.6rem)] font-semibold leading-none tracking-tight">
                  {s.v}
                </dd>
                <span className="num text-[10px] text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-2 w-2 bg-vermilion" />
            <p className="label text-taupe">
              {c.about.label} — Mohamed Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ SERVICES */

export function Services({ c }: Props) {
  return (
    <section id="services" className="scroll-mt-20 border-b-2 border-ink">
      <div className="px-6 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <PlateLabel plate="02" label={c.services.label} />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
            {c.services.title}
          </h2>
          <p className="max-w-[38ch] text-[1.02rem] leading-[1.8] text-taupe">
            {c.services.intro}
          </p>
        </div>
      </div>

      <ul className="mt-14">
        {c.services.items.map((s) => (
          <li key={s.n}>
            <a
              href="#request"
              className="ink-fill group grid grid-cols-1 items-baseline gap-x-8 gap-y-3 border-t border-ink/15 px-6 py-8 transition-colors duration-300 sm:px-10 lg:grid-cols-12 lg:px-16 lg:py-10"
            >
              <span className="num text-sm text-vermilion group-hover:text-ink lg:col-span-1">
                {s.n}
              </span>
              <h3 className="font-display text-[clamp(1.55rem,3.4vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] lg:col-span-4">
                {s.title}
              </h3>
              <p className="max-w-[52ch] text-[0.98rem] leading-[1.8] text-taupe lg:col-span-6 lg:text-[1.02rem] group-hover:text-ink">
                {s.desc}
              </p>
              <span className="flex items-center gap-2 lg:col-span-1 lg:justify-end">
                <ArrowIcon className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 rtl:rotate-180 rtl:translate-x-2 rtl:group-hover:translate-x-0" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="border-t border-ink/15" />
    </section>
  );
}

/* --------------------------------------------------------------- WORKS */

const SPANS = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
];
const ASPECTS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[16/11]",
  "aspect-[16/11]",
];

export function Works({ c }: Props) {
  const [filterIdx, setFilterIdx] = useState(0);
  const filters = useMemo(
    () => [c.works.all, ...c.works.filters],
    [c.works.all, c.works.filters],
  );
  const active = filters[filterIdx] ?? c.works.all;

  const shown = useMemo(() => {
    const list: (Project & { img: string })[] = c.works.projects.map(
      (p, i) => ({ ...p, img: WORK_IMAGES[i] }),
    );
    return filterIdx === 0 ? list : list.filter((p) => p.cat === active);
  }, [c.works.projects, filterIdx, active]);

  return (
    <section id="works" className="scroll-mt-20 border-b-2 border-ink">
      <div className="px-6 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <PlateLabel plate="03" label={c.works.label} />
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
              {c.works.title}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-[1.8] text-taupe">
              {c.works.intro}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f, fi) => {
              const on = fi === filterIdx;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilterIdx(fi)}
                  className={`label border px-4 py-2.5 transition-colors duration-300 ${
                    on
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/25 text-ink hover:border-vermilion hover:bg-vermilion hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 sm:px-10 lg:px-16 lg:pb-24">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden border-2 border-ink bg-paper-2 ${
                SPANS[i % SPANS.length]
              }`}
            >
              <div className={`relative w-full overflow-hidden ${ASPECTS[i % ASPECTS.length]}`}>
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.tag}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-vermilion/0 transition-colors duration-500 group-hover:bg-vermilion/12 mix-blend-multiply" />
                <span className="num absolute start-0 top-0 bg-ink px-3 py-1.5 text-[11px] text-paper">
                  {p.year}
                </span>
              </div>
              <div className="flex items-start justify-between gap-5 border-t-2 border-ink px-5 py-5">
                <div>
                  <h3 className="font-display text-[1.45rem] font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-taupe">
                    {p.desc}
                  </p>
                </div>
                <span className="label shrink-0 whitespace-nowrap border border-ink/20 px-2.5 py-1.5 text-taupe">
                  {p.cat}
                </span>
              </div>
              <div className="flex items-center gap-2 border-t border-ink/15 bg-paper px-5 py-3">
                <span className="h-1.5 w-1.5 bg-vermilion" />
                <span className="label text-taupe">{p.tag}</span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- PROCESS */

export function Process({ c }: Props) {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-b-2 border-ink bg-paper-2"
    >
      <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <PlateLabel plate="04" label={c.process.label} />
        <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2.2rem,5.6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {c.process.title}
        </h2>
        <ol className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {c.process.steps.map((s) => (
            <li key={s.n} className="bg-paper-2 p-7 lg:p-8">
              <div className="flex items-baseline gap-4">
                <span className="num text-[2.6rem] font-semibold leading-none text-vermilion">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-ink/20" />
              </div>
              <h3 className="mt-6 font-display text-[1.35rem] font-bold leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-taupe">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- REQUEST */

const ERR: Record<Lang, { name: string; details: string }> = {
  ar: { name: "المرجو كتابة الاسم", details: "المرجو كتابة تفاصيل المشروع" },
  fr: {
    name: "Merci d’indiquer votre nom",
    details: "Merci de décrire le projet",
  },
  en: {
    name: "Please enter your name",
    details: "Please describe the project",
  },
};

function buildMessage(
  lang: Lang,
  d: { name: string; service: string; details: string; budget: string },
) {
  if (lang === "ar")
    return `السلام عليكم Mohamed،\nأنا ${d.name}.\n\n• الخدمة المطلوبة: ${d.service}\n• الميزانية: ${d.budget}\n\nالتفاصيل:\n${d.details}\n\n(أرسلت الطلب من موقع Mohamed Designer)`;
  if (lang === "fr")
    return `Bonjour Mohamed,\nJe suis ${d.name}.\n\n• Service : ${d.service}\n• Budget : ${d.budget}\n\nDétails :\n${d.details}\n\n(Envoyé depuis votre site Mohamed Designer)`;
  return `Hello Mohamed,\nI am ${d.name}.\n\n• Service: ${d.service}\n• Budget: ${d.budget}\n\nDetails:\n${d.details}\n\n(Sent from your Mohamed Designer website)`;
}

export function RequestSection({ c, lang }: Props) {
  const [name, setName] = useState("");
  const [service, setService] = useState(c.request.serviceOptions[0]);
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState(c.request.budgets[1]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setService(c.request.serviceOptions[0]);
    setBudget(c.request.budgets[1]);
    setError(null);
  }, [c.request.serviceOptions, c.request.budgets]);

  const fieldClass =
    "w-full border border-ink/25 bg-paper px-4 py-3.5 text-[0.98rem] text-ink outline-none transition-colors duration-200 focus:border-vermilion";

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError(ERR[lang].name);
    if (!details.trim()) return setError(ERR[lang].details);
    setError(null);
    const msg = buildMessage(lang, {
      name: name.trim(),
      service,
      details: details.trim(),
      budget,
    });
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <section id="request" className="scroll-mt-20 border-b-2 border-ink">
      <div className="grid lg:grid-cols-12">
        <div className="px-6 py-16 sm:px-10 lg:col-span-7 lg:border-e-2 lg:border-ink lg:px-16 lg:py-24">
          <PlateLabel plate="05" label={c.request.label} />
          <h2 className="mt-8 max-w-[17ch] font-display text-[clamp(2.15rem,5.2vw,4.15rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            {c.request.title}
          </h2>
          <p className="mt-6 max-w-[48ch] text-[1.02rem] leading-[1.85] text-taupe">
            {c.request.lead}
          </p>

          <form onSubmit={submit} className="mt-10 grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2.5">
              <span className="label text-taupe">{c.request.name}</span>
              <input
                className={fieldClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={c.request.phName}
              />
            </label>

            <label className="grid gap-2.5">
              <span className="label text-taupe">{c.request.service}</span>
              <select
                className={fieldClass}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {c.request.serviceOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2.5 sm:col-span-2">
              <span className="label text-taupe">{c.request.details}</span>
              <textarea
                rows={5}
                className={`${fieldClass} resize-y`}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={c.request.phDetails}
              />
            </label>

            <label className="grid gap-2.5">
              <span className="label text-taupe">{c.request.budget}</span>
              <select
                className={fieldClass}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                {c.request.budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex items-end">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-between gap-4 border-2 border-ink bg-ink px-6 py-4 text-paper transition-colors duration-300 hover:border-vermilion hover:bg-vermilion"
              >
                <span className="label">{c.request.submit}</span>
                <WhatsAppIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {error && (
            <p className="mt-5 border-s-2 border-vermilion bg-vermilion/10 px-4 py-3 text-sm text-vermilion-dark">
              {error}
            </p>
          )}
          {sent && !error && (
            <p className="mt-5 border-s-2 border-ink bg-paper-2 px-4 py-3 text-sm text-ink-soft">
              WhatsApp — {PHONE_DISPLAY}
            </p>
          )}
        </div>

        {/* direct-contact panel */}
        <aside className="flex flex-col justify-between gap-10 bg-vermilion px-6 py-14 text-paper sm:px-10 lg:col-span-5 lg:px-14 lg:py-24">
          <div>
            <span className="label text-ink">WHATSAPP — 24H</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="num mt-6 block text-[clamp(1.9rem,4.6vw,3.15rem)] font-semibold leading-none tracking-tight transition-opacity duration-300 hover:opacity-80"
              dir="ltr"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-6 max-w-[34ch] text-[1.02rem] leading-[1.8] text-ink">
              {c.request.note}
            </p>
          </div>

          <div className="grid gap-3">
            <span className="label text-ink">{c.request.or}</span>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between gap-4 border border-ink/40 px-5 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <span className="flex items-center gap-3">
                <MailIcon className="h-5 w-5" />
                <span className="text-sm break-all">{EMAIL}</span>
              </span>
              <ArrowIcon className="h-4 w-4 shrink-0 rtl:rotate-180" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border border-ink/40 px-5 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <span className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5" />
                <span className="text-sm">{INSTAGRAM_HANDLE}</span>
              </span>
              <ArrowIcon className="h-4 w-4 shrink-0 rtl:rotate-180" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- CONTACT */

export function ContactSection({ c }: Props) {
  const rows = [
    {
      label: c.contact.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <MailIcon className="h-6 w-6" />,
    },
    {
      label: c.contact.instaLabel,
      value: INSTAGRAM_HANDLE,
      href: INSTAGRAM_URL,
      icon: <InstagramIcon className="h-6 w-6" />,
    },
    {
      label: c.contact.waLabel,
      value: PHONE_DISPLAY,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: <WhatsAppIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-paper">
      <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <PlateLabel plate="06" label={c.contact.label} tone="paper" />
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[15ch] font-display text-[clamp(2.35rem,6.4vw,5.25rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            {c.contact.title}
          </h2>
          <p className="max-w-[38ch] text-[1.02rem] leading-[1.85] text-paper/70">
            {c.contact.lead}
          </p>
        </div>

        <ul className="mt-14">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-paper/20 py-7 transition-colors duration-300 hover:bg-vermilion"
              >
                <span className="label w-32 shrink-0 text-paper/80 group-hover:text-paper">
                  {r.label}
                </span>
                <span className="flex items-center gap-4">
                  <span className="text-paper/70 transition-colors group-hover:text-paper">
                    {r.icon}
                  </span>
                  <span className="font-display text-[clamp(1.35rem,3.6vw,2.5rem)] font-bold leading-none tracking-[-0.02em] break-all">
                    {r.value}
                  </span>
                </span>
                <ArrowIcon className="ms-auto h-6 w-6 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 rtl:rotate-180 rtl:translate-x-3 rtl:group-hover:translate-x-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-paper/20 px-6 py-8 text-paper/70 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="label">
          © {new Date().getFullYear()} MOHAMED DESIGNER — {c.contact.rights}
        </p>
        <a href="#home" className="label hover:text-paper">
          ↑ BACK TO TOP
        </a>
      </div>
    </section>
  );
}
