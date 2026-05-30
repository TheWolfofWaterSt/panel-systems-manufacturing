import type { Metadata } from "next";
import type { PageSEO } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

export function buildMetadata(seo: PageSEO, path: string): Metadata {
  const url = `${getSiteUrl()}${path}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.shortName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.tagline} | ${siteConfig.savingsClaim}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Custom-built commercial room dividers direct from the manufacturer. Floor-supported, DIY-installable systems for churches, schools, offices, and factories. Save 50–75% over ceiling-suspended alternatives.",
};
