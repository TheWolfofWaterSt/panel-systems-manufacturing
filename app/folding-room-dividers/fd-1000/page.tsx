import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductDetailTemplate } from "@/components/templates/PageTemplates";
import { fd1000 } from "@/content/products/folding";

export const metadata: Metadata = buildMetadata(fd1000.seo, "/folding-room-dividers/fd-1000/");

export default function FD1000Page() {
  return <ProductDetailTemplate content={fd1000} />;
}
