import type { FAQItem, ProductDetailContent, Testimonial } from "@/types";
import { siteConfig } from "@/lib/site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    description:
      "Direct manufacturer of custom-built, floor-supported commercial room dividers, operable partitions, and modular wall systems.",
    areaServed: "United States",
  };
}

export function productSchema(product: ProductDetailContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.headline,
    description: product.intro,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `${siteConfig.url}/${product.category === "sliding" ? "sliding-room-dividers" : product.category === "folding" ? "folding-room-dividers" : product.category === "modular" ? "modular-wall-systems" : "clean-room-dividers"}/${product.slug}/`,
    },
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(testimonials: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.author,
      },
      reviewBody: t.quote,
      publisher: {
        "@type": "Organization",
        name: t.organization,
      },
    })),
  };
}
