import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { sa2Series, sa2ComparisonRows } from "@/content/products/sliding";

export const metadata: Metadata = buildMetadata(sa2Series.seo, "/sliding-room-dividers/sa-2-series/");

export default function SA2SeriesPage() {
  return (
    <ProductDetailTemplate
      content={sa2Series}
      comparisonHeaders={sa2Series.modelComparisonHeaders}
      comparisonRows={sa2ComparisonRows}
    />
  );
}
