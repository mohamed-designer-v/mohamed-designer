import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconPen = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 19l7-7-3-3-7 7-1 4 4-1Z" />
    <path d="M18 13l-3-3" />
    <path d="M16 6l2-2 3 3-2 2" />
    <path d="M4 20h6" />
  </svg>
);

export const IconSocial = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPrint = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 9V3h12v6" />
    <rect x="3" y="9" width="18" height="7" rx="2" />
    <path d="M6 14h12v7H6z" />
  </svg>
);

export const IconBox = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="M4 7.5l8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l9 5-9 5-9-5 9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconSparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
    <path d="M18.5 15.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" />
  </svg>
);

export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.47.13-.62.15-.15.35-.4.52-.6.13-.15.2-.27.3-.45.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.32 5.08 4.52 2.99 1.2 3.1.87 3.66.82.56-.05 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.58-.35Z" />
    <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.88c0 1.74.45 3.44 1.32 4.94L2 22l5.35-1.4a9.84 9.84 0 0 0 4.69 1.2h.01c5.44 0 9.87-4.43 9.87-9.88A9.83 9.83 0 0 0 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.03-.19-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.53-3.68 8.21-8.19 8.21Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7.5 7.1 5.2a1.6 1.6 0 0 0 1.8 0L20 7.5" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18Z" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2.8 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 16.8l-5.6 3 1.2-6.2L3 9.3l6.3-.8L12 2.8Z" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.6 5.5c-3.3 1.3-5.4 4-5.4 7.7 0 3.2 1.8 5.3 4.3 5.3 2 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.6 0-.8.1.4-1.6 1.6-2.9 3.2-3.7l-1.7-2.6Zm9 0c-3.3 1.3-5.4 4-5.4 7.7 0 3.2 1.8 5.3 4.3 5.3 2 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.6 0-.8.1.4-1.6 1.6-2.9 3.2-3.7l-1.7-2.6Z" />
  </svg>
);

export const IconCopy = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="12" height="12" rx="3" />
    <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6a3 3 0 0 0-3 3v6.5A2.5 2.5 0 0 0 5.5 15" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

export const IconBadge = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9" r="5" />
    <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
  </svg>
);

export const iconMap = {
  pen: IconPen,
  social: IconSocial,
  print: IconPrint,
  box: IconBox,
  layers: IconLayers,
  sparkle: IconSparkle,
};

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="md-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c5cff" />
          <stop offset="55%" stopColor="#c05cff" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#md-g)" />
      <path
        d="M13 33V16.5c0-.9 1.1-1.3 1.7-.7l6.6 6.6c.4.4 1 .4 1.4 0l6.6-6.6c.6-.6 1.7-.2 1.7.7V33"
        fill="none"
        stroke="#0b0b14"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="33.5" cy="17" r="2.2" fill="#0b0b14" />
    </svg>
  );
}
