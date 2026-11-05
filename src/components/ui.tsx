export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Mohamed Designer"
    >
      <rect width="48" height="48" fill="#E23D1E" />
      <path
        d="M6 42V6h9l9 15 9-15h9v36h-9V22l-9 15-9-15v20z"
        fill="#F2EDE4"
      />
    </svg>
  );
}

export function Stamp({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`animate-stamp ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path
          id="stamp-arc"
          d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
          fill="none"
        />
      </defs>
      <circle cx="60" cy="60" r="58.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        fill="currentColor"
        fontSize="8.5"
        letterSpacing="3"
        fontFamily='"IBM Plex Mono", monospace'
      >
        <textPath href="#stamp-arc" startOffset="0">
          {text}
        </textPath>
      </text>
      <path
        d="M60 43.5v33M43.5 60h33"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="60" cy="60" r="4.5" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.32c0-4.46 3.63-8.09 8.21-8.09zM8.5 6.9c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.13.17 1.76 2.8 4.33 3.8 2.14.83 2.58.67 3.05.62.46-.04 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.56.12-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.35-.76-1.85-.2-.48-.4-.42-.55-.42h-.01z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="2.6"
        y="4.8"
        width="18.8"
        height="14.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M2.6 5.6 12 13l9.4-7.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PlateLabel({
  plate,
  label,
  tone = "ink",
}: {
  plate: string;
  label: string;
  tone?: "ink" | "paper";
}) {
  const color = tone === "paper" ? "text-paper/70" : "text-taupe";
  const line = tone === "paper" ? "bg-paper/30" : "bg-ink/25";
  return (
    <div className="flex items-center gap-4">
      <span className={`num text-xs font-semibold ${color}`}>{plate}</span>
      <span className={`h-px w-8 ${line}`} />
      <span className={`label ${color}`}>{label}</span>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const copy = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="label px-7 text-ink">{it}</span>
          <svg width="7" height="7" viewBox="0 0 7 7" aria-hidden="true">
            <rect width="7" height="7" fill="#14110E" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative flex overflow-hidden border-y-2 border-ink bg-vermilion py-3.5">
      <div className="animate-marquee flex w-max">
        {copy("a")}
        {copy("b")}
      </div>
    </div>
  );
}
