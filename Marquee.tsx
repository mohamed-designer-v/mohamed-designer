import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/config";
import { useCountUp } from "@/lib/hooks";
import { IconArrow, IconStar, IconWhatsApp } from "@/components/Icons";
import { GlowBlob, GridPattern, WaBtn } from "@/components/ui";
import { WORK_IMAGES } from "@/lib/work-images";

function StatItem({ value, label }: { value: string; label: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = m?.[1] ?? "";
  const num = m ? Number(m[2]) : 0;
  const suffix = m?.[3] ?? "";
  const { ref, value: shown } = useCountUp(num || 1);
  return (
    <div className="rounded-2xl glass p-4 text-center card-hover">
      <span
        ref={ref}
        className="block bg-gradient-to-b from-white to-white/50 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl"
        dir="ltr"
      >
        {prefix}
        {shown}
        {suffix}
      </span>
      <span className="mt-1 block text-[11px] font-medium text-white/50 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <GridPattern />
      <GlowBlob className="-top-24 start-[-8rem] h-[26rem] w-[26rem]" color="bg-brand/35" />
      <GlowBlob className="top-32 end-[-10rem] h-[30rem] w-[30rem]" color="bg-brand-2/25" />
      <GlowBlob className="bottom-0 start-1/3 h-72 w-72" color="bg-brand-3/15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="reveal inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </span>

          <p className="reveal mt-7 text-sm font-bold uppercase tracking-[0.28em] text-white/45">
            {t.hero.hello}
          </p>

          <h1
            className="reveal mt-3 text-[2.4rem] font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-[4rem]"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            <span className="grad-text">{t.hero.title}</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            {t.hero.text}
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-3.5"
            style={{ ["--reveal-delay" as string]: "240ms" }}
          >
            <WaBtn message={t.contact.title}>
              <IconWhatsApp className="h-5 w-5" />
              {t.hero.cta}
            </WaBtn>
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-2xl glass px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              {t.hero.cta2}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>

          <div className="reveal mt-6 flex items-center gap-3 text-xs text-white/45">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5" dir="ltr">
              {CONTACT.phoneLocal}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span dir="ltr">{CONTACT.email}</span>
          </div>

          <div
            className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            style={{ ["--reveal-delay" as string]: "320ms" }}
          >
            {t.hero.stats.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        {/* Visual collage */}
        <div
          className="reveal relative mx-auto mb-14 w-full max-w-lg lg:mb-0"
          style={{ ["--reveal-delay" as string]: "200ms" }}
        >
          <div className="absolute inset-6 rounded-full grad-brand opacity-30 blur-[70px]" aria-hidden />
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 ring-glow">
              <img
                src={WORK_IMAGES.logo}
                alt="Brand identity design by Mohamed Designer"
                loading="eager"
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-3">
                  {t.work.cats.branding}
                </p>
                <p className="mt-1 text-lg font-extrabold text-white">{t.work.items[0].title}</p>
              </div>
            </div>

            <div className="absolute -bottom-8 end-2 w-32 overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:end-[-1.5rem] sm:w-40">
              <img
                src={WORK_IMAGES.social}
                alt="Social media design"
                loading="lazy"
                className="h-24 w-full object-cover sm:h-28"
              />
            </div>

            <div className="absolute -bottom-6 -start-4 w-44 rounded-2xl glass p-4 shadow-2xl animate-float sm:-start-8">
              <div className="flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-2 text-xs font-bold text-white">5.0 / 5.0</p>
              <p className="text-[11px] text-white/50">{t.reviews.tag}</p>
            </div>

            <div
              className="absolute -top-5 -end-2 rounded-2xl glass px-4 py-3 shadow-2xl animate-float sm:-end-6"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/45">
                {t.hero.role1}
              </p>
              <p className="text-sm font-extrabold grad-text">{t.hero.role2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
