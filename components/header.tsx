"use client";

import { useState } from "react";
import Image from "next/image";
import { waDefault } from "@/lib/whatsapp";

const links = [
  { href: "#saheler", label: "Sahələr" },
  { href: "#xidmetler", label: "Xidmətlər" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        Əsas məzmuna keç
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="RR Design"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight">
              RR Design
            </span>
            <span className="block text-[11px] text-mute">Bakı · Studio</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[14px] font-medium text-ink/70 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-cta px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-cta-deep sm:inline-flex"
          >
            WhatsApp-a yaz
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label="Menyu"
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
        <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cta"
            >
              WhatsApp-a yaz
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
