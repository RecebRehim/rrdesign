import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { marketingPages } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/seo";

const page = marketingPages.about;

export const metadata: Metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function HaqqimizdaPage() {
  return <MarketingPageView page={page} />;
}
