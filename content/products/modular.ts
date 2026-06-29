import type { CategoryContent, ProductDetailContent } from "@/types";

export const modularCategory: CategoryContent = {
  slug: "modular-wall-systems",
  headline: "Modular Wall Systems — Semi-Permanent, Fully Removable",
  keyMessage: "Install it yourself. Move it yourself. No contractor required.",
  intro:
    "Our FP modular wall systems use standard 50-inch panels connected with aluminum channels, with custom panels to fill the gap and match your exact room width. Install with basic carpentry skills — no contractor required. Maximum panel height is 14 feet with maintenance-free anodized aluminum frames.",
  products: [
    {
      name: "FP-1000 Economy",
      slug: "fp-1000",
      description: "Most economical modular wall — gypsum core, paintable sheetrock finish.",
      keySpec: "1¼″ panels, paintable",
      href: "/modular-wall-systems/fp-1000/",
      imageAlt: "FP-1000 economy modular wall",
    },
    {
      name: "FP-1200 Clean Room",
      slug: "fp-1200",
      description: "FRP Structoglas faces — wipe clean, ideal for factories and clean rooms.",
      keySpec: "Washable FRP faces",
      href: "/modular-wall-systems/fp-1200/",
      imageAlt: "FP-1200 clean room modular wall",
    },
    {
      name: "FP-1500 Standard",
      slug: "fp-1500",
      description: "Steel and honeycomb construction — lighter, more rigid, better sound reduction.",
      keySpec: "Steel / honeycomb core",
      href: "/modular-wall-systems/fp-1500/",
      imageAlt: "FP-1500 standard modular wall",
    },
    {
      name: "FP-2500 Heavy Duty",
      slug: "fp-2500",
      description: "2¾″ double-thick panels — the heaviest-duty modular wall we make.",
      keySpec: "Up to 2¾″ thickness",
      href: "/modular-wall-systems/fp-2500/",
      imageAlt: "FP-2500 heavy duty modular wall",
    },
  ],
  faqs: [
    {
      question: "Do modular walls include a suspended ceiling?",
      answer: "No. Our modular wall systems do not include a suspended ceiling. If an overhead finish is needed, a suspended ceiling is suggested as a separate addition.",
    },
    {
      question: "Can I move the walls later?",
      answer: "Yes. FP modular walls are designed to be removable and reconfigurable by anyone with basic carpentry skills.",
    },
  ],
  relatedLinks: [
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Clean Room Dividers", href: "/clean-room-dividers/" },
    { label: "Get a Free Quote", href: "/contact/" },
  ],
  seo: {
    title: "Modular Wall Systems | Removable, DIY-Installable Walls",
    description:
      "Semi-permanent modular wall systems you install yourself. Heights to 14′, custom-fit panels. Save 50–75% factory direct from Wisconsin.",
    keywords: ["modular wall systems", "removable wall panels", "demountable walls"],
  },
};

export const fp1000: ProductDetailContent = {
  slug: "fp-1000",
  category: "modular",
  categoryLabel: "Modular Wall Systems",
  categoryHref: "/modular-wall-systems/",
  series: "FP-1000",
  headline: "FP-1000 Economy Modular Wall System",
  keyMessage: "The most economical modular wall system — gypsum core, paintable sheetrock finish.",
  intro: "The FP-1000 delivers simple, paintable modular walls at the lowest price point — ideal for offices and facilities that need basic space division without premium acoustic requirements.",
  models: [{
    name: "FP-1000",
    tagline: "Economy modular wall",
    specs: [
      { label: "Thickness", value: "1¼″" },
      { label: "Construction", value: "Acoustical fabric faces laminated to 3/8″ sheetrock back to back" },
      { label: "Max Height", value: "14 feet" },
      { label: "Max Panel Width", value: "4′ 2″" },
    ],
  }],
  options: ["Doors", "Glass inserts", "Marker boards"],
  relatedProducts: [
    { label: "FP-1500 Standard — Better Acoustics", href: "/modular-wall-systems/fp-1500/" },
    { label: "Installation Guide", href: "/installation-guide/" },
  ],
  quoteModelParam: "fp-1000",
  faqs: [],
  seo: { title: "FP-1000 Economy Modular Wall System", description: "Most economical modular wall system. Gypsum core, paintable sheetrock finish. DIY-installable. Factory direct." },
};

export const fp1200: ProductDetailContent = {
  slug: "fp-1200",
  category: "modular",
  categoryLabel: "Modular Wall Systems",
  categoryHref: "/modular-wall-systems/",
  series: "FP-1200",
  headline: "FP-1200 Clean Room Modular Wall System",
  keyMessage: "FRP Structoglas plastic faces — wipe clean, resistant to damage, ideal for factories and clean rooms.",
  intro: "The FP-1200 features FRP Structoglas faces laminated to 1-inch rigid fiberglass board — lightweight, easy to clean, and built for factories, food service, and clean room environments.",
  models: [{
    name: "FP-1200",
    tagline: "Clean room modular wall",
    specs: [
      { label: "Thickness", value: "1¼″" },
      { label: "Faces", value: "FRP Structoglas plastic" },
      { label: "Core", value: "1″ rigid fiberglass board" },
      { label: "Max Height", value: "14 feet" },
    ],
  }],
  applications: ["Factories", "Clean rooms", "Food service", "Pharmaceutical facilities"],
  options: ["FRP Structoglas faces"],
  relatedProducts: [
    { label: "Clean Room Dividers", href: "/clean-room-dividers/" },
    { label: "FP-1500 Standard", href: "/modular-wall-systems/fp-1500/" },
  ],
  quoteModelParam: "fp-1200",
  faqs: [],
  seo: { title: "FP-1200 Clean Room Modular Walls | FRP Faces", description: "FP-1200 modular walls with washable FRP Structoglas faces. Ideal for factories and clean rooms. Factory direct." },
};

export const fp1500: ProductDetailContent = {
  slug: "fp-1500",
  category: "modular",
  categoryLabel: "Modular Wall Systems",
  categoryHref: "/modular-wall-systems/",
  series: "FP-1500",
  headline: "FP-1500 Standard Modular Wall System",
  keyMessage: "Steel and honeycomb construction — lighter, more rigid, better sound reduction.",
  intro: "The FP-1500 is our mid-range modular wall system, combining acoustical fabric faces with 24-gauge galvanized steel and a 3/4-inch honeycomb core for improved rigidity and sound performance.",
  models: [{
    name: "FP-1500",
    tagline: "Standard modular wall",
    specs: [
      { label: "Thickness", value: "1¼″" },
      { label: "Construction", value: "Acoustical fabric faces on 24-gauge galvanized steel with 3/4″ honeycomb core" },
      { label: "Max Height", value: "14 feet" },
      { label: "Max Panel Width", value: "4′ 2″" },
    ],
  }],
  options: ["Doors", "Glass inserts", "Marker boards"],
  relatedProducts: [
    { label: "FP-1000 Economy", href: "/modular-wall-systems/fp-1000/" },
    { label: "FP-2500 Heavy Duty", href: "/modular-wall-systems/fp-2500/" },
  ],
  quoteModelParam: "fp-1500",
  faqs: [],
  seo: { title: "FP-1500 Standard Modular Wall System", description: "Steel and honeycomb modular walls with superior sound reduction. DIY-installable. Factory direct pricing." },
};

export const fp2500: ProductDetailContent = {
  slug: "fp-2500",
  category: "modular",
  categoryLabel: "Modular Wall Systems",
  categoryHref: "/modular-wall-systems/",
  series: "FP-2500",
  headline: "FP-2500 Heavy Duty Modular Wall System",
  keyMessage: "2¾″ double-thick panels — the heaviest-duty modular wall system we make.",
  intro: "When maximum acoustic and structural performance is required from a modular system, the FP-2500 delivers with flexible thickness up to 2¾ inches using the same steel and honeycomb construction as the FP-1500.",
  models: [{
    name: "FP-2500",
    tagline: "Heavy duty modular wall",
    specs: [
      { label: "Thickness", value: "Flexible up to 2¾″" },
      { label: "Construction", value: "Same steel/honeycomb as FP-1500" },
      { label: "Max Height", value: "14 feet" },
      { label: "Max Panel Width", value: "4′ 2″" },
    ],
  }],
  options: ["Doors", "Glass inserts", "Marker boards", "All FP series options"],
  relatedProducts: [
    { label: "FP-1500 Standard", href: "/modular-wall-systems/fp-1500/" },
    { label: "SA-2 Series Sliding Dividers", href: "/sliding-room-dividers/sa-2-series/" },
  ],
  quoteModelParam: "fp-2500",
  faqs: [],
  seo: { title: "FP-2500 Heavy Duty Modular Wall System", description: "Heaviest-duty modular wall system. Up to 2¾″ double-thick panels. Factory direct from Wisconsin." },
};

export const modularProducts: Record<string, ProductDetailContent> = {
  "fp-1000": fp1000,
  "fp-1200": fp1200,
  "fp-1500": fp1500,
  "fp-2500": fp2500,
};
