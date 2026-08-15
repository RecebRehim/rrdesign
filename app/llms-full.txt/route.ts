import { getLlmsFullTxt } from "@/lib/seo";

export function GET() {
  return new Response(getLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
