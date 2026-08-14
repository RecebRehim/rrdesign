"use client";

import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import { INSTAGRAM_URL } from "@/lib/content";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-mute">{copy.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-copper"
          >
            {copy.contact.handle}
          </a>
          <p className="text-mute">
            © {new Date().getFullYear()} RR Design. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
