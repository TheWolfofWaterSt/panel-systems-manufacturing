import type { CategoryContent, ProductDetailContent } from "@/types";

export const slidingCategory: CategoryContent = {
  slug: "sliding-room-dividers",
  headline: "Sliding Room Dividers — Custom Built, Factory Direct",
  keyMessage: "Three panel systems — economy to heavy-duty. All floor-supported, all custom-built.",
  intro:
    "Our sliding room dividers provide fast, flexible space division for churches, schools, offices, and commercial facilities. Every system is floor-supported — no ceiling beams required — and custom-manufactured to your exact room dimensions at our Wisconsin facility.",
  decisionGuide: [
    {
      title: "Standard spaces up to 14′",
      description: "Most churches, classrooms, and offices need reliable sound reduction without premium pricing.",
      recommendation: "SA-1 Series (SA-1000 or SA-1500)",
    },
    {
      title: "Maximum sound reduction",
      description: "Large fellowship halls, open-plan offices, and commercial facilities with demanding acoustic requirements.",
      recommendation: "SA-2 Series (SA-2000 or SA-2500)",
    },
    {
      title: "Full floor clearance needed",
      description: "When panels must disappear completely — stored through a wall into a closet or adjacent room.",
      recommendation: "SA-3000 Operable Partitions",
    },
  ],
  comparisonHeaders: ["Feature", "SA-1 Series", "SA-2 Series", "SA-3000"],
  comparisonTable: {
    feature: "",
    values: [],
  },
  products: [
    {
      name: "SA-1 Series",
      slug: "sa-1-series",
      description: "The most affordable and most popular sliding room dividers we make.",
      keySpec: "Max height 10′–14′",
      href: "/sliding-room-dividers/sa-1-series/",
      imageAlt: "SA-1 Series sliding room divider",
    },
    {
      name: "SA-2 Series",
      slug: "sa-2-series",
      description: "Double-thickness panels for maximum sound reduction and commercial durability.",
      keySpec: "2¾″ double-panel construction",
      href: "/sliding-room-dividers/sa-2-series/",
      imageAlt: "SA-2 Series heavy duty sliding divider",
    },
    {
      name: "SA-3000 Operable Partitions",
      slug: "sa-3000-operable-partitions",
      description: "One handle, one push — every panel stores through the wall.",
      keySpec: "Through-wall storage, max 14′",
      href: "/sliding-room-dividers/sa-3000-operable-partitions/",
      imageAlt: "SA-3000 operable partition system",
    },
  ],
  faqs: [
    {
      question: "How long does installation take?",
      answer:
        "Most sliding divider installations can be completed in a day or two with basic carpentry skills. We provide step-by-step instructions and CAD drawings with every order.",
    },
    {
      question: "What is the maximum height for sliding dividers?",
      answer:
        "SA-1000 supports up to 10′ heights. SA-1500, SA-2 Series, and SA-3000 support heights up to 14′.",
    },
    {
      question: "How do sound reduction levels differ between models?",
      answer:
        "SA-1 Series provides solid performance for most institutional applications. SA-2 Series adds double-thickness construction with dead air space for superior acoustics in larger or noisier environments.",
    },
  ],
  relatedLinks: [
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
    { label: "Get a Free Quote", href: "/contact/" },
  ],
  inlineCta: "Not sure which model fits your room? Call (800) 257-1190 — our owner will help.",
  seo: {
    title: "Commercial Sliding Room Dividers | Floor-Supported, Factory Direct",
    description:
      "Custom-built sliding room dividers and operable partitions. Floor-supported, no ceiling beams. Heights to 14′. Save 50–75% direct from the manufacturer.",
    keywords: [
      "commercial sliding room dividers",
      "sliding room dividers for churches",
      "operable partitions floor supported",
    ],
  },
};

export const slidingComparisonRows = [
  { feature: "Max Height", values: ["10′–14′", "14′", "14′"] },
  { feature: "Panel Thickness", values: ["1¼″", "2¾″", "2¾″"] },
  { feature: "Core Construction", values: ["Gypsum / Steel-Honeycomb", "Double-panel w/ dead air", "Double-panel w/ dead air"] },
  { feature: "Track Type", values: ["Floor track", "Permanent or removable", "1 7/8″ removable"] },
  { feature: "Best For", values: ["Economy to standard", "Max sound reduction", "Through-wall storage"] },
];

export const sa1Series: ProductDetailContent = {
  slug: "sa-1-series",
  category: "sliding",
  categoryLabel: "Sliding Room Dividers",
  categoryHref: "/sliding-room-dividers/",
  series: "SA-1 Series",
  headline: "SA-1 Series Sliding Room Dividers — SA-1000 & SA-1500",
  keyMessage: "The most affordable and most popular sliding room dividers we make.",
  intro:
    "The SA-1 Series delivers reliable space division for churches, schools, and offices at the lowest price point in our sliding line. Choose the SA-1000 for economy applications or the SA-1500 — our most popular model — for enhanced rigidity and sound performance up to 14 feet.",
  models: [
    {
      name: "SA-1000",
      tagline: "Economy — gypsum core construction",
      specs: [
        { label: "Core", value: "Gypsum core panels" },
        { label: "Max Height", value: "10 feet" },
        { label: "Max Panel Width", value: "4′ 2″" },
        { label: "Track", value: "Floor-supported aluminum track" },
        { label: "Panel Thickness", value: "1¼″" },
      ],
    },
    {
      name: "SA-1500",
      tagline: "Most popular — steel and honeycomb core",
      specs: [
        { label: "Core", value: "24-gauge steel with 3/4″ honeycomb" },
        { label: "Max Height", value: "14 feet" },
        { label: "Max Panel Width", value: "4′ 2″" },
        { label: "Track", value: "Floor-supported aluminum track" },
        { label: "Panel Thickness", value: "1¼″" },
      ],
    },
  ],
  modelComparisonHeaders: ["Feature", "SA-1000", "SA-1500"],
  modelComparison: {
    feature: "",
    values: [],
  },
  options: [
    "Special facings and fabric colors",
    "Built-in swinging doors",
    "Glass inserts",
    "Marker boards",
    "40 custom fabric colors",
  ],
  testimonialId: "kenosha-bible-church",
  faqs: [
    {
      question: "How do SA-1000 and SA-1500 compare for sound reduction?",
      answer:
        "The SA-1500's steel and honeycomb core provides better rigidity and sound reduction than the SA-1000's gypsum core. For most fellowship halls and classrooms, the SA-1500 is our recommended choice.",
    },
    {
      question: "What fabric choices are available?",
      answer:
        "Two stock colors (Flagstone and Taffy) ship fastest. Approximately 40 additional custom colors are available at a small upcharge.",
    },
    {
      question: "How do the panels slide?",
      answer:
        "Panels ride on maintenance-free anodized aluminum floor tracks. Any individual panel can slide independently and function as a door.",
    },
  ],
  relatedProducts: [
    { label: "SA-2 Series — Heavy Duty Upgrade", href: "/sliding-room-dividers/sa-2-series/", description: "Double-thickness panels for maximum acoustics" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Product Videos", href: "/product-videos/" },
  ],
  quoteModelParam: "sa-1",
  upgradeNote: { label: "Need better acoustics?", href: "/sliding-room-dividers/sa-2-series/", description: "Consider the SA-2 Series" },
  seo: {
    title: "SA-1000 & SA-1500 Sliding Room Dividers | Economy to Standard",
    description:
      "SA-1 Series sliding room dividers — our most popular line. Gypsum or steel-honeycomb cores, heights to 14′. Factory direct pricing saves 50–75%.",
    keywords: ["SA-1000 room divider", "SA-1500 sliding divider", "economy sliding room divider"],
  },
};

export const sa1ComparisonRows = [
  { feature: "Core", values: ["Gypsum", "Steel / Honeycomb"] },
  { feature: "Max Height", values: ["10′", "14′"] },
  { feature: "Best For", values: ["Budget-conscious projects", "Most popular choice"] },
];

export const sa2Series: ProductDetailContent = {
  slug: "sa-2-series",
  category: "sliding",
  categoryLabel: "Sliding Room Dividers",
  categoryHref: "/sliding-room-dividers/",
  series: "SA-2 Series",
  headline: "SA-2 Series Sliding Room Dividers — SA-2000 & SA-2500",
  keyMessage: "Double-thickness, double-panel construction for maximum sound reduction and commercial durability.",
  intro:
    "When acoustic performance and commercial-grade durability matter most, the SA-2 Series delivers. These 2¾-inch double-panel systems feature a ¼-inch dead air space between panels for superior sound reduction in large fellowship halls, open-plan offices, and demanding commercial environments.",
  models: [
    {
      name: "SA-2000",
      tagline: "Permanent floor track installation",
      specs: [
        { label: "Construction", value: "2¾″ double-panel with ¼″ dead air space" },
        { label: "Max Height", value: "14 feet" },
        { label: "Max Panel Width", value: "4′ 2″" },
        { label: "Track", value: "Permanent floor track" },
        { label: "Frame Finish", value: "Maintenance-free anodized aluminum" },
      ],
    },
    {
      name: "SA-2500",
      tagline: "Removable floor track for full floor access",
      specs: [
        { label: "Construction", value: "2¾″ double-panel with ¼″ dead air space" },
        { label: "Max Height", value: "14 feet" },
        { label: "Max Panel Width", value: "4′ 2″" },
        { label: "Track", value: "Removable floor track" },
        { label: "Frame Finish", value: "Maintenance-free anodized aluminum" },
      ],
    },
  ],
  modelComparisonHeaders: ["Feature", "SA-2000", "SA-2500"],
  options: ["Special facings", "Built-in doors", "Marker boards", "Glass inserts"],
  applications: [
    "Large fellowship halls",
    "Open-plan offices",
    "Commercial facilities",
    "Convention and event spaces",
  ],
  faqs: [
    {
      question: "When should I choose SA-2 over SA-1?",
      answer:
        "Choose SA-2 when you need maximum sound reduction, larger panel spans, or commercial-grade durability. The double-panel construction with dead air space significantly outperforms single-panel systems.",
    },
    {
      question: "Permanent vs. removable track — which do I need?",
      answer:
        "Choose the SA-2000 permanent track if the divider will remain in place long-term. Choose the SA-2500 removable track if you need to completely clear the floor periodically.",
    },
  ],
  relatedProducts: [
    { label: "SA-1 Series — Budget Option", href: "/sliding-room-dividers/sa-1-series/" },
    { label: "SA-3000 Operable Partitions", href: "/sliding-room-dividers/sa-3000-operable-partitions/", description: "If through-wall storage is needed" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
  ],
  quoteModelParam: "sa-2",
  downgradeNote: { label: "Budget a concern?", href: "/sliding-room-dividers/sa-1-series/", description: "See the SA-1 Series" },
  seo: {
    title: "SA-2000 & SA-2500 Heavy Duty Sliding Room Dividers",
    description:
      "SA-2 Series double-thickness sliding dividers for maximum sound reduction. 2¾″ panels, heights to 14′. Factory direct — save 50–75%.",
  },
};

export const sa2ComparisonRows = [
  { feature: "Track Type", values: ["Permanent floor track", "Removable floor track"] },
  { feature: "Construction", values: ["2¾″ double-panel", "2¾″ double-panel"] },
  { feature: "Best For", values: ["Long-term installation", "Periodic full floor access"] },
];

export const sa3000: ProductDetailContent = {
  slug: "sa-3000-operable-partitions",
  category: "sliding",
  categoryLabel: "Sliding Room Dividers",
  categoryHref: "/sliding-room-dividers/",
  series: "SA-3000",
  headline: "SA-3000 Operable Partitions — Through-the-Wall Panel Storage",
  keyMessage: "One handle, one push — every panel stores through the wall. The floor is completely clear.",
  intro:
    "The SA-3000 operable partition system stores every panel through the wall into a closet or adjacent room. With one handle and one push, the entire floor clears in minutes — no ceiling beams, no structural modifications required.",
  models: [
    {
      name: "SA-3000",
      tagline: "Manual push through-wall storage",
      specs: [
        { label: "Panel Construction", value: "2¾″ double-thickness" },
        { label: "Panel Core", value: "Acoustical fabric faces, 24-gauge steel, 1″ fiberglass board, ¼″ dead air space" },
        { label: "Track", value: "1 7/8″ removable floor track" },
        { label: "Max Height", value: "14 feet" },
        { label: "Max Panel Width", value: "4′ 2″" },
      ],
    },
  ],
  options: ["Special facings", "Marker boards"],
  faqs: [
    {
      question: "How does through-wall storage work?",
      answer:
        "Panels slide along floor tracks and pass through an opening in the wall into a storage closet or adjacent room. When fully stored, the main room floor is completely clear.",
    },
    {
      question: "Do I need ceiling beams?",
      answer:
        "No. The SA-3000 is entirely floor-supported. No ceiling beams or structural modifications are required.",
    },
  ],
  relatedProducts: [
    { label: "SA-2 Series", href: "/sliding-room-dividers/sa-2-series/", description: "If through-wall storage is not needed" },
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Product Videos", href: "/product-videos/" },
  ],
  quoteModelParam: "sa-3000",
  videoNote: "See our SA-3000 assembly video on the Product Videos page.",
  seo: {
    title: "SA-3000 Operable Partitions | Through-Wall Room Dividers",
    description:
      "SA-3000 operable partitions store panels through the wall for complete floor clearance. Floor-supported, no ceiling beams. Factory direct pricing.",
    keywords: ["operable partitions", "through wall room dividers", "retractable room dividers"],
  },
};

export const slidingProducts: Record<string, ProductDetailContent> = {
  "sa-1-series": sa1Series,
  "sa-2-series": sa2Series,
  "sa-3000-operable-partitions": sa3000,
};
