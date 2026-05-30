import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustPageTemplate } from "@/components/templates/PageTemplates";
import { whyChooseUs } from "@/content/resources/index";

export const metadata: Metadata = buildMetadata(whyChooseUs.seo, "/why-choose-us/");

export default function WhyChooseUsPage() {
  return <TrustPageTemplate content={whyChooseUs} />;
}
