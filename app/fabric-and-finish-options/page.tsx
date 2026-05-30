import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ResourcePageTemplate } from "@/components/templates/PageTemplates";
import { fabricOptions } from "@/content/resources/index";

export const metadata: Metadata = buildMetadata(fabricOptions.seo, "/fabric-and-finish-options/");

export default function FabricOptionsPage() {
  return <ResourcePageTemplate content={fabricOptions} />;
}
