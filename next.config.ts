import type { NextConfig } from "next";

const redirects = [
  {
    source: "/movable-partitions",
    destination: "/sliding-room-dividers/sa-3000-operable-partitions/",
    permanent: true,
  },
  {
    source: "/movable-partitions/fd-1000-fd-1500-movable-partitions",
    destination: "/folding-room-dividers/",
    permanent: true,
  },
  {
    source: "/modular-wall-system",
    destination: "/modular-wall-systems/",
    permanent: true,
  },
  {
    source: "/why-choose-panel-systems-manufacturing-for-your-room-dividers",
    destination: "/why-choose-us/",
    permanent: true,
  },
  {
    source: "/what-our-clients-say",
    destination: "/customer-reviews/",
    permanent: true,
  },
  {
    source: "/window-panels",
    destination: "/",
    permanent: true,
  },
  {
    source: "/assembly-instructions-video",
    destination: "/product-videos/",
    permanent: true,
  },
  {
    source: "/get-a-quote",
    destination: "/contact/",
    permanent: true,
  },
  {
    source: "/get-a-quote/:path*",
    destination: "/contact/",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
