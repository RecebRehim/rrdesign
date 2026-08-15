import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { INSTAGRAM_URL } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import { waDefault } from "@/lib/whatsapp";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  title: {
    default:
      "RR DESIGN | Satış gətirən saytlar və Instagram avtomatlaşdırması | Bakı",
    template: "%s · RR DESIGN",
  },
  description:
    "Yerli bizneslər üçün 24 saata hazır, sahənizə uyğun website və 24/7 DM avtomatlaşdırması. İlk sayt 100 AZN. Bakı.",
  keywords: [
    "website Bakı",
    "sayt hazırlanması",
    "Instagram DM avtomatlaşdırma",
    "RR Design",
    "vizitka sayt 100 AZN",
  ],
  authors: [{ name: "RR DESIGN", url: INSTAGRAM_URL }],
  openGraph: {
    title: "RR DESIGN | Satış gətirən saytlar və Instagram avtomatlaşdırması",
    description:
      "Yerli bizneslər üçün 24 saata hazır, sahənizə uyğun website və 24/7 DM avtomatlaşdırması. İlk sayt 100 AZN. Bakı.",
    locale: "az_AZ",
    type: "website",
    siteName: "RR DESIGN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RR DESIGN | Website & Automation | Bakı",
    description:
      "Yerli bizneslər üçün 24 saata hazır, sahənizə uyğun website və 24/7 DM avtomatlaşdırması. İlk sayt 100 AZN. Bakı.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RR DESIGN",
  alternateName: "rrdesign.az",
  description:
    "Yerli bizneslər üçün sahənizə uyğun website və Instagram DM avtomatlaşdırması. Bakı.",
  url: "https://rrdesign.az",
  image: `${siteUrl}/logo.png`,
  telephone: "+994552591903",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bakı",
    addressCountry: "AZ",
  },
  areaServed: { "@type": "City", name: "Bakı" },
  sameAs: [INSTAGRAM_URL, waDefault],
  priceRange: "100 AZN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="az"
      className={`${bricolage.variable} ${manrope.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
