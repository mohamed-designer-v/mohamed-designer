import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, LANGS, type Dict, type Lang } from "@/lib/translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  dir: "rtl" | "ltr";
  isRtl: boolean;
};

const I18nContext = createContext<Ctx | null>(null);

const detect = (): Lang => {
  if (typeof window === "undefined") return "ar";
  const saved = window.localStorage.getItem("md-lang") as Lang | null;
  if (saved && LANGS.some((l) => l.code === saved)) return saved;
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("fr")) return "fr";
  return "en";
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("md-lang", l);
  }, []);

  const value = useMemo<Ctx>(() => {
    const meta = LANGS.find((l) => l.code === lang)!;
    return {
      lang,
      setLang,
      t: dict[lang],
      dir: meta.dir,
      isRtl: meta.dir === "rtl",
    };
  }, [lang, setLang]);

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.title = dict[lang].meta.title;
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
