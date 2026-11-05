import { I18nProvider, useI18n } from "@/lib/i18n";
import { useReveal } from "@/lib/hooks";
import { waLink } from "@/lib/config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

function CtaBand() {
  const { t } = useI18n();
  return (
    <div className="container-x">
      <div className="reveal grain relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-brand/25 via-brand-2/15 to-brand-3/15 px-7 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-white/20 blur-[90px]" />
        <h2 className="relative text-3xl font-black tracking-tight sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">{t.contact.waText}</p>
        <a
          href={waLink(t.contact.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-sm font-black text-ink shadow-2xl transition hover:scale-[1.03]"
        >
          {t.nav.cta}
        </a>
      </div>
    </div>
  );
}

function Site() {
  useReveal();
  return (
    <div className="relative min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Process />
        <Packages />
        <Reviews />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}
