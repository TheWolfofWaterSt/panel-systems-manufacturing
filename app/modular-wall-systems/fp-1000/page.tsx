import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fp1000 } from "@/content/products/modular";

export const metadata: Metadata = buildMetadata(fp1000.seo, "/modular-wall-systems/fp-1000/");

export default function FP1000Page() {
  return <ProductDetailTemplate content={fp1000} />;
}
