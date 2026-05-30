import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CategoryPageTemplate } from "@/components/templates/PageTemplates";
import { cleanRoomCategory } from "@/content/products/clean-room";

export const metadata: Metadata = buildMetadata(cleanRoomCategory.seo, "/clean-room-dividers/");

export default function CleanRoomDividersPage() {
  return <CategoryPageTemplate content={cleanRoomCategory} />;
}
