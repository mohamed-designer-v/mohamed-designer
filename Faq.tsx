import { useI18n } from "@/lib/i18n";
import { GlowBlob, Section, SectionHead, WaBtn } from "@/components/ui";
import { IconBadge, IconCheck, IconWhatsApp } from "@/components/Icons";
import { STUDIO_IMAGE } from "@/lib/work-images";

const TOOLS = [
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Figma",
  "After Effects",
  "Lightroom",
];

export default function About() {
  const { t } = useI18n();

  return (
    <Section id="about">
      <GlowBlob className="top-10 start-[-6rem] h-80 w-80" color="bg-brand-2/20" />
      <div className="container-x">
        <SectionHead tag={t.about.tag} title={t.about.title} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="absolute -inset-3 rounded-[2.4rem] grad-brand opacity-20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={STUDIO_IMAGE}
                alt="Design workspace"
                loading="lazy"
                className="h-[24rem] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-7 end-4 flex items-center gap-3 rounded-2xl glass px-5 py-4 shadow-2xl sm:end-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl grad-brand text-white">
                <IconBadge className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-none" dir="ltr">
                  +6
                </span>
                <span className="text-[11px] text-white/55">{t.hero.stats[0].label}</span>
              </span>
            </div>
          </div>

          <div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <p className="text-white/70">{t.about.p1}</p>
            <p className="mt-4 text-white/60">{t.about.p2}</p>
            <p className="mt-4 text-white/60">{t.about.p3}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.about.list.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {t.about.tools}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-brand-3/50 hover:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <WaBtn message={t.contact.title} variant="primary">
                <IconWhatsApp className="h-5 w-5" />
                {t.about.download}
              </WaBtn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
