import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CategoryPageTemplate } from "@/components/templates/PageTemplates";
import { foldingCategory } from "@/content/products/folding";

export const metadata: Metadata = buildMetadata(foldingCategory.seo, "/folding-room-dividers/");

export default function FoldingRoomDividersPage() {
  return <CategoryPageTemplate content={foldingCategory} />;
}
