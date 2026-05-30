import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { sa1Series, sa1ComparisonRows } from "@/content/products/sliding";

export const metadata: Metadata = buildMetadata(sa1Series.seo, "/sliding-room-dividers/sa-1-series/");

export default function SA1SeriesPage() {
  return (
    <ProductDetailTemplate
      content={sa1Series}
      comparisonHeaders={sa1Series.modelComparisonHeaders}
      comparisonRows={sa1ComparisonRows}
    />
  );
}
