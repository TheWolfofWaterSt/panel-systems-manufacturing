import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustPageTemplate } from "@/components/templates/PageTemplates";
import { customerReviews } from "@/content/resources/index";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviewSchema } from "@/lib/seo/schema";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = buildMetadata(customerReviews.seo, "/customer-reviews/");

export default function CustomerReviewsPage() {
  return (
    <>
      <TrustPageTemplate content={customerReviews} />
      <JsonLd data={reviewSchema(testimonials)} />
    </>
  );
}
