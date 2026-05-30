import type { CategoryContent, ProductDetailContent } from "@/types";

export const foldingCategory: CategoryContent = {
  slug: "folding-room-dividers",
  headline: "Folding Room Dividers — Freestanding, Portable, No Installation Required",
  keyMessage: "No tracks, no installation. Roll anywhere, fold for storage, configure into corners.",
  intro:
    "Our folding room dividers are freestanding on rubber casters — no floor tracks, no installation required. Roll them to any location, fold into a compact stack for storage, and configure into L, U, or corner layouts with 180° swivel hinges. Up to 5 panels connect for a maximum suggested unit width of 32 feet.",
  products: [
    {
      name: "FD-1000 Standard",
      slug: "fd-1000",
      description: "Affordable freestanding divider with painted wood paneling faces.",
      keySpec: "1¼″ panels, max 8′ height",
      href: "/folding-room-dividers/fd-1000/",
      imageAlt: "FD-1000 standard folding room divider",
    },
    {
      name: "FD-1500 Deluxe",
      slug: "fd-1500",
      description: "Acoustic fabric faces on medium-density soundboard.",
      keySpec: "Enhanced sound reduction",
      href: "/folding-room-dividers/fd-1500/",
      imageAlt: "FD-1500 deluxe folding room divider",
    },
    {
      name: "BW-1500 Barnwood",
      slug: "bw-1500-barnwood",
      description: "Reclaimed barnwood panels in three authentic wood styles.",
      keySpec: "Distinctive rustic aesthetic",
      href: "/folding-room-dividers/bw-1500-barnwood/",
      imageAlt: "BW-1500 barnwood folding divider",
    },
  ],
  faqs: [
    {
      question: "Do folding dividers require floor tracks?",
      answer: "No. Folding dividers are completely freestanding on 3-inch rubber-tired casters. No installation is required.",
    },
    {
      question: "What is the maximum height?",
      answer: "Panels are available up to 8 feet total height. 6′ 6″ is the tallest height that rolls through a standard doorway.",
    },
    {
      question: "How many panels can connect?",
      answer: "Up to 5 panels can connect for a maximum suggested unit width of 32 feet.",
    },
  ],
  relatedLinks: [
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Folding Room Dividers | Portable, Freestanding, No Tracks",
    description:
      "Freestanding folding room dividers on casters. No tracks, no installation. Roll anywhere, fold for storage. 40 fabric colors. Factory direct pricing.",
    keywords: ["folding room dividers", "portable room dividers", "freestanding room dividers", "room dividers on casters"],
  },
};

export const fd1000: ProductDetailContent = {
  slug: "fd-1000",
  category: "folding",
  categoryLabel: "Folding Room Dividers",
  categoryHref: "/folding-room-dividers/",
  series: "FD-1000",
  headline: "FD-1000 Standard Folding Room Divider",
  keyMessage: "Affordable freestanding divider. Painted wood paneling, solid building board core.",
  intro:
    "The FD-1000 is our most affordable folding room divider — ideal for churches, schools, and offices that need flexible, portable space division without floor tracks or installation.",
  models: [
    {
      name: "FD-1000",
      tagline: "Standard folding divider",
      specs: [
        { label: "Panel Thickness", value: "1¼″" },
        { label: "Frame", value: "1/16″ aluminum frames" },
        { label: "Faces", value: "Painted wood paneling" },
        { label: "Core", value: "7/8″ building board" },
        { label: "Panel Widths", value: "50″ and 46½″ alternating" },
        { label: "Max Panel Height", value: "8 feet" },
        { label: "Mobility", value: "3″ rubber-tired casters or stabilizing feet" },
      ],
    },
  ],
  options: ["Glass inserts", "Marker boards", "40 fabric colors", "Sheetrock facing (paintable)"],
  faqs: [
    {
      question: "Should I upgrade to the FD-1500?",
      answer: "Choose the FD-1500 if acoustic performance is a priority. It features acoustical fabric faces on medium-density soundboard for better sound reduction.",
    },
  ],
  relatedProducts: [
    { label: "FD-1500 Deluxe — Better Acoustics", href: "/folding-room-dividers/fd-1500/" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
  ],
  quoteModelParam: "fd-1000",
  upgradeNote: { label: "Need better acoustics?", href: "/folding-room-dividers/fd-1500/", description: "Upgrade to FD-1500 Deluxe" },
  seo: {
    title: "FD-1000 Standard Folding Room Divider",
    description: "Affordable freestanding folding room divider. Painted wood paneling, rubber casters, no installation required. Factory direct.",
  },
};

export const fd1500: ProductDetailContent = {
  slug: "fd-1500",
  category: "folding",
  categoryLabel: "Folding Room Dividers",
  categoryHref: "/folding-room-dividers/",
  series: "FD-1500",
  headline: "FD-1500 Deluxe Folding Room Divider",
  keyMessage: "Acoustic fabric faces on medium-density soundboard — sound reduction meets portability.",
  intro:
    "The FD-1500 upgrades the FD-1000 with acoustical fabric faces laminated to medium-density soundboard, delivering meaningful sound reduction in a fully portable, track-free format.",
  models: [
    {
      name: "FD-1500",
      tagline: "Deluxe acoustic folding divider",
      specs: [
        { label: "Panel Thickness", value: "1¼″" },
        { label: "Faces", value: "Acoustical fabric on medium-density soundboard" },
        { label: "Panel Widths", value: "50″ and 46½″ alternating" },
        { label: "Max Panel Height", value: "8 feet" },
        { label: "Fabric Colors", value: "40 options plus two glassboard face colors" },
        { label: "Mobility", value: "3″ rubber-tired casters" },
      ],
    },
  ],
  options: ["Glass inserts", "Marker boards", "Sheetrock facing", "40 fabric colors"],
  relatedProducts: [
    { label: "FD-1000 Standard", href: "/folding-room-dividers/fd-1000/" },
    { label: "BW-1500 Barnwood", href: "/folding-room-dividers/bw-1500-barnwood/" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
  ],
  quoteModelParam: "fd-1500",
  faqs: [],
  seo: {
    title: "FD-1500 Deluxe Folding Room Divider | Acoustic Portable",
    description: "FD-1500 deluxe folding divider with acoustic fabric faces. Portable, freestanding, 40 color options. Factory direct pricing.",
  },
};

export const bw1500: ProductDetailContent = {
  slug: "bw-1500-barnwood",
  category: "folding",
  categoryLabel: "Folding Room Dividers",
  categoryHref: "/folding-room-dividers/",
  series: "BW-1500",
  headline: "BW-1500 Barnwood Folding Room Divider — Reclaimed Wood Panels",
  keyMessage: "Reclaimed barnwood panels — three authentic wood styles — for spaces that need character, not just division.",
  intro:
    "The BW-1500 combines our proven hinge and caster folding system with reclaimed barnwood panels in three distinctive styles — ideal for photo studios, churches, convention exhibits, and upscale offices that demand visual character.",
  models: [
    {
      name: "BW-1500",
      tagline: "Barnwood folding divider",
      specs: [
        { label: "Wood Styles", value: "Mixed species center-cut; skip-planed red weathered siding; mixed species skip-planed rustic" },
        { label: "Panel Thickness", value: "1¼″" },
        { label: "Frame", value: "1/16″ aluminum frames" },
        { label: "Panel Widths", value: "50″ and 46½″ alternating" },
        { label: "Wheels", value: "3″ rubber wheels with step-on brakes" },
        { label: "Hinge System", value: "Same as FD series — 180° swivel for corner configurations" },
      ],
    },
  ],
  applications: ["Photo studio backgrounds", "Church décor", "Convention exhibits", "Upscale offices"],
  options: ["Three barnwood wood styles"],
  relatedProducts: [
    { label: "FD-1500 Deluxe", href: "/folding-room-dividers/fd-1500/" },
    { label: "Folding Room Dividers Overview", href: "/folding-room-dividers/" },
  ],
  quoteModelParam: "bw-1500",
  faqs: [],
  seo: {
    title: "BW-1500 Barnwood Folding Room Divider | Reclaimed Wood",
    description: "BW-1500 barnwood folding dividers with reclaimed wood panels. Three authentic styles. Portable on casters. Factory direct.",
  },
};

export const foldingProducts: Record<string, ProductDetailContent> = {
  "fd-1000": fd1000,
  "fd-1500": fd1500,
  "bw-1500-barnwood": bw1500,
};
