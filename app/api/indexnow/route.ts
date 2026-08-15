import { submitIndexNow } from "@/lib/indexnow";

export async function GET() {
  const result = await submitIndexNow();

  return Response.json(result, {
    status: result.skipped ? 200 : result.ok ? 200 : 502,
  });
}
