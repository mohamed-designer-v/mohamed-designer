import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHead } from "@/components/ui";
import { IconChevron } from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-ink-2/40">
      <div className="container-x">
        <SectionHead tag={t.faq.tag} title={t.faq.title} />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "reveal overflow-hidden rounded-2xl border transition-colors",
                  isOpen
                    ? "border-brand/40 bg-brand/[0.07]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20",
                )}
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className="text-base font-bold">{item.q}</span>
                  <IconChevron
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-3 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-white/65">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
