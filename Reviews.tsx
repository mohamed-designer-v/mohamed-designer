import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/config";
import { GlowBlob, Section, SectionHead, WaBtn } from "@/components/ui";
import { IconCheck, IconWhatsApp } from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function Packages() {
  const { t } = useI18n();

  return (
    <Section id="packages" className="bg-ink-2/40">
      <GlowBlob className="top-0 end-1/4 h-80 w-80" color="bg-brand/20" />
      <div className="container-x relative">
        <SectionHead tag={t.packages.tag} title={t.packages.title} text={t.packages.text} />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {t.packages.items.map((p, i) => {
            const featured = i === 1;
            return (
              <article
                key={p.name}
                className={cn(
                  "reveal relative flex flex-col rounded-3xl border p-8 card-hover",
                  featured
                    ? "border-brand/45 bg-gradient-to-b from-brand/15 to-white/[0.03] lg:-mt-4 lg:mb-4"
                    : "border-white/10 bg-white/[0.035]",
                )}
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                {featured && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full grad-brand px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white rtl:translate-x-1/2">
                    {t.packages.popular}
                  </span>
                )}
                <h3 className="text-lg font-extrabold">{p.name}</h3>
                <p className="mt-2 min-h-10 text-sm text-white/55">{p.text}</p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                    {t.packages.from}
                  </span>
                  <span className="text-3xl font-black grad-text">{p.price}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-3">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`${t.packages.order}: ${p.name} (${p.price})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold transition",
                    featured
                      ? "grad-brand text-white hover:brightness-110"
                      : "border border-white/15 text-white hover:border-brand-3/60 hover:bg-white/5",
                  )}
                >
                  <IconWhatsApp className="h-4 w-4" />
                  {t.packages.order}
                </a>
              </article>
            );
          })}
        </div>

        <p className="reveal mt-8 text-center text-sm text-white/50">{t.packages.custom}</p>
        <div className="reveal mt-5 flex justify-center">
          <WaBtn message={t.packages.custom} variant="ghost">
            <IconWhatsApp className="h-5 w-5" />
            {t.nav.cta}
          </WaBtn>
        </div>
      </div>
    </Section>
  );
}
