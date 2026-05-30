import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fp1500 } from "@/content/products/modular";

export const metadata: Metadata = buildMetadata(fp1500.seo, "/modular-wall-systems/fp-1500/");

export default function FP1500Page() {
  return <ProductDetailTemplate content={fp1500} />;
}
