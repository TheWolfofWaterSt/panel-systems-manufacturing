import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustPageTemplate } from "@/components/templates/PageTemplates";
import { caseStudiesPage } from "@/content/resources/index";

export const metadata: Metadata = buildMetadata(caseStudiesPage.seo, "/case-studies/");

export default function CaseStudiesPage() {
  return <TrustPageTemplate content={caseStudiesPage} />;
}
