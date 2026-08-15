import Image from "next/image";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_DOMAIN } from "@/lib/content";
import { waDefault } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo-white.png"
              alt="RR DESIGN"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-[15px] font-bold">RR DESIGN</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Website & Automation · Bakı
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-copper"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-copper"
          >
            WhatsApp
          </a>
          <p className="text-white/45">
            © 2026 RR DESIGN. Bütün hüquqlar qorunur. {SITE_DOMAIN}
          </p>
        </div>
      </div>
    </footer>
  );
}
