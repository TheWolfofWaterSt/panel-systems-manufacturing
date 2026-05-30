import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fd1500 } from "@/content/products/folding";

export const metadata: Metadata = buildMetadata(fd1500.seo, "/folding-room-dividers/fd-1500/");

export default function FD1500Page() {
  return <ProductDetailTemplate content={fd1500} />;
}
