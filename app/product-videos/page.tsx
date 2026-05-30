import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ResourcePageTemplate } from "@/components/templates/PageTemplates";
import { productVideos } from "@/content/resources/index";

export const metadata: Metadata = buildMetadata(productVideos.seo, "/product-videos/");

export default function ProductVideosPage() {
  return <ResourcePageTemplate content={productVideos} />;
}
