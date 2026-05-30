/** MVP image registry — maps content keys to files in /public/images/ */

const base = "/images";

export const images = {
  heroHomepage: `${base}/hero-homepage.png`,
  homepage: {
    sliding: `${base}/homepage-sliding-room-dividers.png`,
    operable: `${base}/homepage-operable-partitions.png`,
    folding: `${base}/homepage-folding-room-dividers.png`,
    modular: `${base}/homepage-modular-wall-systems.png`,
  },
  products: {
    "sa-1-series": `${base}/product-sa-1-series.png`,
    "sa-2-series": `${base}/product-sa-2-series.png`,
    "sa-3000-operable-partitions": `${base}/product-sa-3000-operable-partitions.png`,
    "sa-5000-operable-partitions": `${base}/product-sa-3000-operable-partitions.png`,
    "fd-1000": `${base}/product-fd-1000.png`,
    "fd-1500": `${base}/product-fd-1500.png`,
    "bw-1500-barnwood": `${base}/product-bw-1500-barnwood.png`,
    "fp-1000": `${base}/homepage-modular-wall-systems.png`,
    "fp-1200": `${base}/product-cl-1000.png`,
    "fp-1500": `${base}/homepage-modular-wall-systems.png`,
    "fp-2500": `${base}/homepage-modular-wall-systems.png`,
    "cl-1000": `${base}/product-cl-1000.png`,
    "sa-1200": `${base}/product-cl-1000.png`,
    "fp-1200-clean-room": `${base}/product-cl-1000.png`,
    "clean-room-dividers": `${base}/product-cl-1000.png`,
    sliding: `${base}/homepage-sliding-room-dividers.png`,
    folding: `${base}/homepage-folding-room-dividers.png`,
    modular: `${base}/homepage-modular-wall-systems.png`,
    "sa-3000": `${base}/product-sa-3000-operable-partitions.png`,
  },
} as const;

export const categoryHeroImages: Record<string, string> = {
  "sliding-room-dividers": `${base}/homepage-sliding-room-dividers.png`,
  "folding-room-dividers": `${base}/homepage-folding-room-dividers.png`,
  "modular-wall-systems": `${base}/homepage-modular-wall-systems.png`,
  "clean-room-dividers": `${base}/product-cl-1000.png`,
};

export function getProductImage(slug: string): string | undefined {
  return images.products[slug as keyof typeof images.products];
}

export function withImage<T extends { slug: string; imageAlt: string }>(
  item: T,
  imageKey?: string,
): T & { imageSrc: string } {
  const key = imageKey ?? item.slug;
  const imageSrc = getProductImage(key) ?? images.heroHomepage;
  return { ...item, imageSrc };
}
