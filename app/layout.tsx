import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { INSTAGRAM_URL } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
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
    default: "RR Design — Website & Automation | Bakı",
    template: "%s · RR Design",
  },
  description:
    "Bakıda bizneslər üçün niş website-lər və Instagram DM avtomatlaşdırması. Hazır demo-lar: klinika, təhsil, avto, icarə. Vercel üzərində canlı.",
  keywords: [
    "website Bakı",
    "sayt hazırlanması",
    "Instagram DM avtomatlaşdırma",
    "RR Design",
    "landing page Azərbaycan",
  ],
  authors: [{ name: "RR Design", url: INSTAGRAM_URL }],
  openGraph: {
    title: "RR Design — Website & Automation",
    description:
      "Niş website-lər və DM avtomatlaşdırması. Bakı biznesləri üçün — demo-dan brendə.",
    locale: "az_AZ",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "RR Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "RR Design — Website & Automation",
    description: "Niş website-lər və Instagram DM avtomatlaşdırması · Bakı",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RR Design",
  alternateName: "rrdesign.az",
  description:
    "Website design and Instagram DM automation for businesses in Baku.",
  url: siteUrl,
  sameAs: [INSTAGRAM_URL],
  areaServed: { "@type": "City", name: "Baku" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baku",
    addressCountry: "AZ",
  },
  serviceType: [
    "Website design",
    "Landing pages",
    "Instagram DM automation",
    "WhatsApp sales flow",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="az"
      className={`${bricolage.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
