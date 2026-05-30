import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CategoryPageTemplate } from "@/components/templates/PageTemplates";
import { modularCategory } from "@/content/products/modular";

export const metadata: Metadata = buildMetadata(modularCategory.seo, "/modular-wall-systems/");

export default function ModularWallSystemsPage() {
  return <CategoryPageTemplate content={modularCategory} />;
}
