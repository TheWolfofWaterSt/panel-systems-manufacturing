import type { ResourcePageContent, TrustPageContent, USPItem } from "@/types";

export const installationGuide: ResourcePageContent = {
  slug: "installation-guide",
  headline: "Installation Guide — Room Dividers, Modular Walls & Folding Dividers",
  intro:
    "If you can use a level and a drill, you can install our systems. Every order includes complete instructions and CAD drawings. Questions during installation? Call Scott directly at (800) 257-1190.",
  sections: [
    {
      title: "Sliding Room Divider Installation",
      content: "Follow these steps for SA series sliding systems:",
      items: [
        "Install ceiling track alignment guides (if included for your model)",
        "Secure floor track to the subfloor with provided fasteners",
        "Hang panels on floor track rollers",
        "Install door panels and adjust alignment",
        "Test full open/close cycle and adjust as needed",
      ],
    },
    {
      title: "Modular Wall Installation",
      content: "FP modular wall systems connect with aluminum channels:",
      items: [
        "Layout panel positions according to your CAD drawing",
        "Connect standard 50″ panels with aluminum channels",
        "Install custom-width end panel to match exact room width",
        "Secure top and bottom connections",
        "Install doors, glass inserts, or marker boards as specified",
      ],
    },
    {
      title: "Folding Divider Setup",
      content: "Folding dividers require no installation — simply:",
      items: [
        "Unfold panels and connect hinge pins (up to 5 panels)",
        "Engage casters or stabilizing feet",
        "Position divider and configure corner/L/U layouts using 180° swivel hinges",
        "Fold and roll to storage when not in use",
      ],
    },
  ],
  relatedLinks: [
    { label: "Product Videos", href: "/product-videos/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
    { label: "Contact for Support", href: "/contact/" },
  ],
  seo: {
    title: "Room Divider Installation Guide | DIY Instructions",
    description: "Step-by-step installation guide for sliding, modular, and folding room dividers. CAD drawings and phone support included with every order.",
  },
};

export const fabricOptions: ResourcePageContent = {
  slug: "fabric-and-finish-options",
  headline: "Fabric Colors, Finishes & Panel Options",
  intro: "Two stock colors. Forty custom options. Marker boards, glass inserts, and barnwood also available.",
  sections: [
    {
      title: "Stock Fabric Colors",
      content: "Flagstone and Taffy are in-stock for the fastest lead time on acoustical fabric-faced panels.",
    },
    {
      title: "Custom Fabric Colors",
      content: "Approximately 40 additional colors are available at a small upcharge. Tell us your color preference when you request a quote.",
    },
    {
      title: "Special Facings & Add-Ons",
      content: "Available options vary by product line:",
      items: [
        "Marker boards",
        "Glass inserts (single and insulated)",
        "Barnwood panels (FD-1500 option)",
        "FRP Structoglas faces (FP-1200, clean room systems)",
        "Sheetrock facing — paintable (FD series)",
        "ADA-compatible swinging doors",
      ],
    },
  ],
  relatedLinks: [
    { label: "Sliding Room Dividers", href: "/sliding-room-dividers/" },
    { label: "Folding Room Dividers", href: "/folding-room-dividers/" },
    { label: "Get a Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Fabric Colors & Finish Options | Room Divider Panels",
    description: "Stock and custom fabric colors, marker boards, glass inserts, barnwood, and FRP finishes for Panel Systems room dividers.",
  },
};

export const productVideos: ResourcePageContent = {
  slug: "product-videos",
  headline: "See Our Room Dividers in Action",
  intro: "Watch our room dividers in real installations. No Flash required — all videos play directly in your browser.",
  sections: [],
  videos: [
    {
      title: "SA-1000 with Built-In Door",
      description: "Demonstrates the SA-1000 sliding room divider with a built-in door panel in a commercial installation.",
      productSlug: "sa-1",
    },
    {
      title: "SA-3000 Assembly & Installation",
      description: "Step-by-step look at SA-3000 operable partition assembly and through-wall storage operation.",
      productSlug: "sa-3000",
    },
  ],
  relatedLinks: [
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Room Divider Product Videos | See Systems in Action",
    description: "Watch SA-1000 and SA-3000 room divider videos. See our floor-supported systems in real installations before you request a quote.",
  },
};

export const whyChooseUsUsps: USPItem[] = [
  { icon: "factory", title: "Factory-Direct Pricing", description: "We manufacture and sell directly to you. No dealer, no distributor, no catalog markups." },
  { icon: "floor", title: "Floor-Supported Design", description: "No ceiling beams, no structural engineering, no costly installation crews." },
  { icon: "wrench", title: "DIY-Installable with Support", description: "Complete instructions, CAD drawings, and personal phone support from the owner." },
  { icon: "ruler", title: "Custom-Built to Exact Dimensions", description: "Every panel is manufactured to your room's exact length and floor-to-ceiling height." },
  { icon: "savings", title: "50–75% Documented Savings", description: "Customers consistently save 50–75% compared to ceiling-suspended alternatives." },
  { icon: "replace", title: "Individual Panel Replacement", description: "Replace a single damaged panel — not the entire system." },
  { icon: "door", title: "Independent Panel Sliding", description: "Any panel becomes a door. Flexible access throughout your divided space." },
  { icon: "track", title: "Maintenance-Free Aluminum", description: "Anodized aluminum tracks and frames require no painting or upkeep." },
  { icon: "board", title: "Tackable Bulletin Board Surface", description: "Acoustical fabric faces double as tackable bulletin boards." },
  { icon: "ada", title: "ADA-Compatible Door Options", description: "Swinging door options available to meet accessibility requirements." },
];

export const whyChooseUs: TrustPageContent = {
  slug: "why-choose-us",
  headline: "Why Choose Panel Systems Manufacturing for Your Room Dividers?",
  intro: "Thirty years. Every installation completed. No distributor. No overhead. Just the product you need at the price you deserve.",
  usps: whyChooseUsUsps,
  relatedLinks: [
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Customer Reviews", href: "/customer-reviews/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Why Choose Us | Direct Manufacturer Room Dividers",
    description: "Factory-direct room dividers with 50–75% savings. Floor-supported, DIY-installable, custom-built. 30+ years, every installation completed.",
    keywords: ["direct manufacturer room dividers", "room dividers without ceiling beams", "DIY room divider installation"],
  },
};

export const caseStudiesPage: TrustPageContent = {
  slug: "case-studies",
  headline: "Room Divider Case Studies — Real Savings for Real Institutions",
  intro: "Real numbers. Real institutions. Real savings. These documented examples show why institutional buyers choose Panel Systems Manufacturing over ceiling-suspended alternatives.",
  testimonialIds: ["pepin-county", "kenosha-bible-church"],
  relatedLinks: [
    { label: "Customer Reviews", href: "/customer-reviews/" },
    { label: "Why Choose Us", href: "/why-choose-us/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
  ],
  seo: {
    title: "Room Divider Case Studies | Documented Cost Savings",
    description: "Real case studies: a school saved 50–75% vs. ceiling-suspended quotes. Church acoustic comparison test results. Factory direct room dividers.",
    keywords: ["room divider cost savings", "affordable operable partitions", "church room dividers cost"],
  },
};

export const customerReviews: TrustPageContent = {
  slug: "customer-reviews",
  headline: "What Our Customers Say About Panel Systems Manufacturing",
  intro: "Hear directly from churches, schools, and county governments who made the switch to factory-direct room dividers.",
  testimonialIds: ["pepin-county", "kenosha-bible-church"],
  relatedLinks: [
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Get a Free Quote", href: "/get-a-quote/" },
    { label: "Contact", href: "/contact/" },
  ],
  seo: {
    title: "Customer Reviews | Room Divider Testimonials",
    description: "Read testimonials from Pepin County Economic Development, Kenosha Bible Church, and other institutional customers. Factory direct room dividers.",
  },
};
