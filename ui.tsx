import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/config";
import { GlowBlob, Section, SectionHead } from "@/components/ui";
import { IconArrow, iconMap } from "@/components/Icons";

export default function Services() {
  const { t } = useI18n();

  return (
    <Section id="services">
      <GlowBlob className="top-24 end-[-6rem] h-96 w-96" color="bg-brand/20" />
      <div className="container-x relative">
        <SectionHead tag={t.services.tag} title={t.services.title} text={t.services.text} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? iconMap.pen;
            return (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 card-hover"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full grad-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand/25 to-brand-3/10 text-brand-3 transition group-hover:scale-110 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-6 text-lg font-bold">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
                <a
                  href={waLink(`${t.contact.title}: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-brand-3"
                >
                  {t.services.order}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
