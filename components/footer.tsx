import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_DOMAIN } from "@/lib/content";
import { footerServiceLinks, footerStudioLinks } from "@/lib/routes";
import { WHATSAPP_DISPLAY, WHATSAPP_TEL, waDefault } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/#top" className="flex items-center gap-2.5">
            <Image
              src="/logo-white.png"
              alt="RR DESIGN"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-[15px] font-bold">RR DESIGN</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Sayt hazırlanması və DM Bot · Bakı, Azərbaycan
          </p>
          <p className="mt-2 text-sm text-white/55">
            <a href={WHATSAPP_TEL} className="hover:text-copper">
              {WHATSAPP_DISPLAY}
            </a>
          </p>
          <address className="mt-2 text-sm not-italic text-white/45">
            Bakı, Azərbaycan · {SITE_DOMAIN}
          </address>
        </div>
        <nav aria-label="Xidmətlər">
          <p className="text-xs font-semibold tracking-wide text-white/45">
            Xidmətlər
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-copper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Studiya">
          <p className="text-xs font-semibold tracking-wide text-white/45">
            Studiya
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerStudioLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-copper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-white/45">
        © 2026 RR DESIGN. Bütün hüquqlar qorunur.
      </p>
    </footer>
  );
}
