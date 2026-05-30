import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CategoryPageTemplate } from "@/components/templates/PageTemplates";
import { slidingCategory, slidingComparisonRows } from "@/content/products/sliding";

export const metadata: Metadata = buildMetadata(slidingCategory.seo, "/sliding-room-dividers/");

export default function SlidingRoomDividersPage() {
  return (
    <CategoryPageTemplate
      content={slidingCategory}
      comparisonHeaders={slidingCategory.comparisonHeaders}
      comparisonRows={slidingComparisonRows}
    />
  );
}
