import type { MetadataRoute } from "next";
import { seo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RR DESIGN",
    short_name: "RR DESIGN",
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F3EEE4",
    theme_color: "#C44512",
    lang: "az",
    icons: [
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
