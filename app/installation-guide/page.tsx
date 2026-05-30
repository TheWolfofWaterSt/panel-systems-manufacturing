import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ResourcePageTemplate } from "@/components/templates/PageTemplates";
import { installationGuide } from "@/content/resources/index";

export const metadata: Metadata = buildMetadata(installationGuide.seo, "/installation-guide/");

export default function InstallationGuidePage() {
  return <ResourcePageTemplate content={installationGuide} />;
}
