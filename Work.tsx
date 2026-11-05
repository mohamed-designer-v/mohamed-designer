import { useI18n } from "@/lib/i18n";
import { Section, SectionHead } from "@/components/ui";
import { IconQuote, IconStar } from "@/components/Icons";

export default function Reviews() {
  const { t } = useI18n();

  return (
    <Section id="reviews">
      <div className="container-x">
        <SectionHead tag={t.reviews.tag} title={t.reviews.title} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <figure
              key={r.name}
              className="reveal relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 card-hover"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <IconQuote className="h-8 w-8 text-brand/50" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                “{r.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((s) => (
                  <IconStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full grad-brand text-sm font-black text-white">
                  {r.name.slice(0, 1)}
                </span>
                <span>
                  <span className="block text-sm font-bold">{r.name}</span>
                  <span className="block text-xs text-white/45">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
