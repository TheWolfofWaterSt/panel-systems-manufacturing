import type { CategoryContent, ProductDetailContent } from "@/types";

export const cleanRoomCategory: CategoryContent = {
  slug: "clean-room-dividers",
  headline: "Clean Room Dividers & Modular Rooms — CL-1000 & FP-1200",
  keyMessage: "All-aluminum construction, washable FRP faces, tempered glass inserts — built for clean environments.",
  intro:
    "Panel Systems manufactures clean room dividers and modular rooms for pharmaceutical, food processing, factory, laboratory, and cafeteria environments. All-aluminum extrusions resist rust and require no painting. FRP fiberglass reinforced plastic faces wipe clean and resist damage.",
  products: [
    {
      name: "CL-1000 Clean Room Divider",
      slug: "cl-1000",
      description: "All-aluminum extrusions with FRP faces and tempered glass inserts.",
      keySpec: "Erector-set installation",
      href: "/clean-room-dividers/",
      imageAlt: "CL-1000 clean room divider system",
    },
    {
      name: "FP-1200 Clean Room Modular",
      slug: "fp-1200",
      description: "FRP Structoglas modular walls for clean room applications.",
      keySpec: "Washable FRP faces",
      href: "/modular-wall-systems/fp-1200/",
      imageAlt: "FP-1200 clean room modular wall",
    },
    {
      name: "SA-1200 Sliding Clean Room",
      slug: "sa-1200",
      description: "FRP faces on rigid fiberglass board, max height 10′.",
      keySpec: "Ideal for cafeterias",
      href: "/clean-room-dividers/",
      imageAlt: "SA-1200 sliding clean room divider",
    },
  ],
  faqs: [
    {
      question: "What makes clean room dividers different?",
      answer: "Clean room systems use all-aluminum extrusions (no rust), washable FRP faces, and tempered glass inserts. They are designed for environments where sanitation and durability are critical.",
    },
    {
      question: "Which system is right for my facility?",
      answer: "CL-1000 is ideal for modular clean room enclosures. FP-1200 works for semi-permanent modular walls. SA-1200 sliding dividers suit cafeterias and sanitation-sensitive applications up to 10 feet.",
    },
  ],
  relatedLinks: [
    { label: "FP-1200 Modular Wall System", href: "/modular-wall-systems/fp-1200/" },
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Get a Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Clean Room Dividers & Modular Rooms | FRP, All-Aluminum",
    description: "Clean room dividers with all-aluminum construction and washable FRP faces. CL-1000, FP-1200, SA-1200. Factory direct from Wisconsin.",
    keywords: ["clean room dividers", "FRP room dividers", "modular clean rooms"],
  },
};

export const cleanRoomDetail: ProductDetailContent = {
  slug: "clean-room-dividers",
  category: "clean-room",
  categoryLabel: "Clean Room Dividers",
  categoryHref: "/clean-room-dividers/",
  series: "CL-1000 / FP-1200 / SA-1200",
  headline: "Clean Room Dividers & Modular Rooms",
  keyMessage: "All-aluminum construction, washable FRP faces, tempered glass inserts — built for clean environments.",
  intro:
    "Our clean room product line serves pharmaceutical, food processing, factory, laboratory, and cafeteria buyers who need washable, durable partition systems built to sanitation standards.",
  models: [
    {
      name: "CL-1000",
      tagline: "All-aluminum clean room divider",
      specs: [
        { label: "Frame", value: "All-aluminum extrusions — no rust, no painting" },
        { label: "Faces", value: "FRP fiberglass reinforced plastic" },
        { label: "Glass", value: "Tempered glass inserts (single and insulated)" },
        { label: "Installation", value: "Erector-set-style assembly" },
      ],
    },
    {
      name: "SA-1200",
      tagline: "Sliding clean room variant",
      specs: [
        { label: "Faces", value: "FRP on rigid fiberglass board" },
        { label: "Max Height", value: "10 feet" },
        { label: "Applications", value: "Cafeterias and sanitation-sensitive spaces" },
      ],
    },
  ],
  applications: ["Pharmaceutical", "Food processing", "Factories", "Laboratories", "Cafeterias"],
  options: ["Tempered glass inserts", "Insulated glass inserts", "FRP faces", "All-aluminum extrusions"],
  relatedProducts: [
    { label: "FP-1200 Clean Room Modular", href: "/modular-wall-systems/fp-1200/" },
    { label: "Modular Wall Systems", href: "/modular-wall-systems/" },
    { label: "Installation Guide", href: "/installation-guide/" },
  ],
  quoteModelParam: "clean-room",
  faqs: cleanRoomCategory.faqs,
  seo: cleanRoomCategory.seo,
};
