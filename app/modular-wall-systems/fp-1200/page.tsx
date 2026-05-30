import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fp1200 } from "@/content/products/modular";

export const metadata: Metadata = buildMetadata(fp1200.seo, "/modular-wall-systems/fp-1200/");

export default function FP1200Page() {
  return <ProductDetailTemplate content={fp1200} />;
}
