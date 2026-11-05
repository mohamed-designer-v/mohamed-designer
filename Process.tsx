import { useI18n } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useI18n();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="marquee-wrap relative border-y border-white/10 bg-gradient-to-r from-brand/10 via-brand-2/10 to-brand-3/10 py-4">
      <div className="marquee-track gap-10">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              {item}
            </span>
            <span className="text-brand-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
