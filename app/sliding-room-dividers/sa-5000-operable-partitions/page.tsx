import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { sa5000 } from "@/content/products/sliding";

export const metadata: Metadata = buildMetadata(sa5000.seo, "/sliding-room-dividers/sa-5000-operable-partitions/");

export default function SA5000Page() {
  return <ProductDetailTemplate content={sa5000} />;
}
