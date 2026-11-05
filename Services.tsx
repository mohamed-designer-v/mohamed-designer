import { useI18n } from "@/lib/i18n";
import { Section, SectionHead } from "@/components/ui";

export default function Process() {
  const { t } = useI18n();

  return (
    <Section id="process">
      <div className="container-x">
        <SectionHead tag={t.process.tag} title={t.process.title} text={t.process.text} />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute inset-x-8 top-8 hidden h-px bg-gradient-to-r from-brand/10 via-brand-2/60 to-brand-3/10 lg:block"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <div
                key={s.title}
                className="reveal relative text-center lg:text-start"
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ink-2 text-xl font-black grad-text shadow-xl lg:mx-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
