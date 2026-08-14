"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import { INSTAGRAM_DM, INSTAGRAM_URL } from "@/lib/content";

const links = [
  { href: "#work", key: "work" as const },
  { href: "#services", key: "services" as const },
  { href: "#process", key: "process" as const },
  { href: "#faq", key: "faq" as const },
];

export function Header() {
  const { copy, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-ink/8 bg-paper/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-ink/70 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {copy.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-ink/10 bg-card p-0.5 text-[11px] font-semibold">
            {(["az", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 uppercase ${
                  lang === code ? "bg-ink text-paper" : "text-mute"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href={INSTAGRAM_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-3.5 py-2 text-[13px] font-semibold text-paper hover:bg-copper sm:inline-flex"
          >
            {copy.cta.dm}
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-ink/8 bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {copy.nav[item.key]}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper"
            >
              {copy.cta.dm}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
