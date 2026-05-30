import { allRoutes } from "@/lib/navigation";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap() {
  const base = getSiteUrl();
  return allRoutes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route.includes("get-a-quote") ? 0.9 : 0.8,
  }));
}
