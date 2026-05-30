import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fp2500 } from "@/content/products/modular";

export const metadata: Metadata = buildMetadata(fp2500.seo, "/modular-wall-systems/fp-2500/");

export default function FP2500Page() {
  return <ProductDetailTemplate content={fp2500} />;
}
