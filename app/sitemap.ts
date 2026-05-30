import { allRoutes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route.includes("get-a-quote") ? 0.9 : 0.8,
  }));
}
