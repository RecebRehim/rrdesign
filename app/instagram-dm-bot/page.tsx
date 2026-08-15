import type { Metadata } from "next";
import { MarketingPageView } from "@/components/marketing-page";
import { marketingPages } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/seo";

const page = marketingPages.dmbot;

export const metadata: Metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function InstagramDmBotPage() {
  return <MarketingPageView page={page} />;
}
