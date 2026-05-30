export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        label: "Sliding Room Dividers",
        href: "/sliding-room-dividers/",
        children: [
          { label: "SA-1 Series", href: "/sliding-room-dividers/sa-1-series/" },
          { label: "SA-2 Series", href: "/sliding-room-dividers/sa-2-series/" },
          { label: "SA-3000 Operable", href: "/sliding-room-dividers/sa-3000-operable-partitions/" },
          { label: "SA-5000 Operable", href: "/sliding-room-dividers/sa-5000-operable-partitions/" },
        ],
      },
      {
        label: "Folding Room Dividers",
        href: "/folding-room-dividers/",
        children: [
          { label: "FD-1000 Standard", href: "/folding-room-dividers/fd-1000/" },
          { label: "FD-1500 Deluxe", href: "/folding-room-dividers/fd-1500/" },
          { label: "BW-1500 Barnwood", href: "/folding-room-dividers/bw-1500-barnwood/" },
        ],
      },
      {
        label: "Modular Wall Systems",
        href: "/modular-wall-systems/",
        children: [
          { label: "FP-1000 Economy", href: "/modular-wall-systems/fp-1000/" },
          { label: "FP-1200 Clean Room", href: "/modular-wall-systems/fp-1200/" },
          { label: "FP-1500 Standard", href: "/modular-wall-systems/fp-1500/" },
          { label: "FP-2500 Heavy Duty", href: "/modular-wall-systems/fp-2500/" },
        ],
      },
      { label: "Clean Room Dividers", href: "/clean-room-dividers/" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Installation Guide", href: "/installation-guide/" },
      { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
      { label: "Product Videos", href: "/product-videos/" },
    ],
  },
  {
    label: "Why Us",
    children: [
      { label: "Why Choose Us", href: "/why-choose-us/" },
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Customer Reviews", href: "/customer-reviews/" },
    ],
  },
];

export const footerNavigation = {
  products: [
    { label: "Sliding Room Dividers", href: "/sliding-room-dividers/" },
    { label: "Folding Room Dividers", href: "/folding-room-dividers/" },
    { label: "Modular Wall Systems", href: "/modular-wall-systems/" },
    { label: "Clean Room Dividers", href: "/clean-room-dividers/" },
  ],
  resources: [
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Fabric & Finish Options", href: "/fabric-and-finish-options/" },
    { label: "Product Videos", href: "/product-videos/" },
  ],
  company: [
    { label: "Why Choose Us", href: "/why-choose-us/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Customer Reviews", href: "/customer-reviews/" },
    { label: "Get a Quote", href: "/get-a-quote/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const allRoutes = [
  "/",
  "/sliding-room-dividers/",
  "/sliding-room-dividers/sa-1-series/",
  "/sliding-room-dividers/sa-2-series/",
  "/sliding-room-dividers/sa-3000-operable-partitions/",
  "/sliding-room-dividers/sa-5000-operable-partitions/",
  "/folding-room-dividers/",
  "/folding-room-dividers/fd-1000/",
  "/folding-room-dividers/fd-1500/",
  "/folding-room-dividers/bw-1500-barnwood/",
  "/modular-wall-systems/",
  "/modular-wall-systems/fp-1000/",
  "/modular-wall-systems/fp-1200/",
  "/modular-wall-systems/fp-1500/",
  "/modular-wall-systems/fp-2500/",
  "/clean-room-dividers/",
  "/installation-guide/",
  "/fabric-and-finish-options/",
  "/product-videos/",
  "/why-choose-us/",
  "/case-studies/",
  "/customer-reviews/",
  "/get-a-quote/",
  "/contact/",
];
