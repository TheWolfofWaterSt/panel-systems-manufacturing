import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { bw1500 } from "@/content/products/folding";

export const metadata: Metadata = buildMetadata(bw1500.seo, "/folding-room-dividers/bw-1500-barnwood/");

export default function BW1500Page() {
  return <ProductDetailTemplate content={bw1500} />;
}
