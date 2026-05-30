import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { sa3000 } from "@/content/products/sliding";

export const metadata: Metadata = buildMetadata(sa3000.seo, "/sliding-room-dividers/sa-3000-operable-partitions/");

export default function SA3000Page() {
  return <ProductDetailTemplate content={sa3000} />;
}
