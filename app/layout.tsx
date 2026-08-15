import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { INSTAGRAM_URL } from "@/lib/content";
import { getJsonLd, seo } from "@/lib/seo";
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
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
    default: seo.title,
    template: seo.template,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "RR DESIGN", url: INSTAGRAM_URL }],
  creator: "RR DESIGN",
  publisher: "RR DESIGN",
  category: "Web design",
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: "az_AZ",
    type: "website",
    siteName: "RR DESIGN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { "az-AZ": "/", "x-default": "/" },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
