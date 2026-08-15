import { INDEXNOW_KEY, publicPages } from "@/lib/routes";
import { getSiteUrl } from "@/lib/site-url";

export function getIndexNowKeyLocation(siteUrl = getSiteUrl()) {
  return `${siteUrl}/${INDEXNOW_KEY}.txt`;
}

export function getPublicPageUrls(siteUrl = getSiteUrl()) {
  return publicPages
    .filter((page) => page.path !== "/llms.txt")
    .map((page) => (page.path === "/" ? siteUrl : `${siteUrl}${page.path}`));
}

export async function submitIndexNow(urls?: string[]) {
  const siteUrl = getSiteUrl();
  if (siteUrl.includes("localhost")) {
    return { ok: false, skipped: true, status: 0 };
  }

  const host = new URL(siteUrl).host;
  const urlList = urls ?? getPublicPageUrls(siteUrl);

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: getIndexNowKeyLocation(siteUrl),
      urlList,
    }),
  });

  return { ok: response.ok, skipped: false, status: response.status };
}
