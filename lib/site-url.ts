/**
 * Canonical site origin.
 *
 * Order:
 * 1. NEXT_PUBLIC_SITE_URL — optional override (custom domain, e.g. https://rrdesign.az)
 * 2. Vercel production domain — set automatically on Vercel
 * 3. Current Vercel deployment URL — preview + production fallback
 * 4. localhost — only when running `npm run dev` on your machine
 */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_ENV === "production" && production) {
    return `https://${production}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (production) {
    return `https://${production}`;
  }

  return "http://localhost:3000";
}
