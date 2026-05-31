import { HeroSection, CTASection } from "@/components/sections/HeroSection";
import { ProductCategoryGrid } from "@/components/cards/ProductCard";
import { SavingsStory, ProcessSteps } from "@/components/sections/SavingsStory";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { homepageFaqs } from "@/content/faqs/homepage";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

const homepageProducts = [
  {
    name: "Sliding Room Dividers",
    slug: "sliding",
    description: "Slide open in seconds. From economy gypsum-core to heavy-duty double-panel construction. Heights to 14′.",
    keySpec: "Heights to 14′",
    href: "/sliding-room-dividers/",
    imageAlt: "Sliding room dividers in a commercial installation",
    imageSrc: images.homepage.sliding,
  },
  {
    name: "Operable Partitions",
    slug: "sa-3000",
    description: "Push all panels into a closet or adjacent room. Floor clear in minutes, no ceiling beams.",
    keySpec: "Through-wall storage",
    href: "/sliding-room-dividers/sa-3000-operable-partitions/",
    imageAlt: "Operable partition panel components",
    imageSrc: images.homepage.operable,
  },
  {
    name: "Folding Room Dividers",
    slug: "folding",
    description: "Freestanding on rubber casters. Roll to any location, fold into a compact stack. No tracks required.",
    keySpec: "No installation",
    href: "/folding-room-dividers/",
    imageAlt: "Folding room dividers in a banquet hall",
    imageSrc: images.homepage.folding,
  },
  {
    name: "Modular Wall Systems",
    slug: "modular",
    description: "Semi-permanent walls removable by anyone with basic carpentry skills. Ideal for offices and factories.",
    keySpec: "DIY-installable",
    href: "/modular-wall-systems/",
    imageAlt: "Modular wall system with glass and fabric panels",
    imageSrc: images.homepage.modular,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Commercial Room Dividers — Direct from the Manufacturer. Save 50–75%."
        subheadline="Custom-built to your exact dimensions. Floor-supported — no ceiling beams needed. DIY-installable. Serving churches, schools, offices, and factories nationwide for over 30 years."
      />

      <ProductCategoryGrid
        title="Find Your Room Divider System"
        subtitle="Factory-direct systems for every space, budget, and installation requirement."
        products={homepageProducts}
      />

      <SavingsStory />
      <IndustriesGrid />

      <TestimonialsSection />

      <ProcessSteps />

      <FAQSection
        items={homepageFaqs}
        viewAllHref="/why-choose-us/"
      />

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Shipping Nationwide from Elk Mound, Wisconsin"
            subtitle="We manufacture and ship directly to customers across the United States. Every product is custom-built in our Wisconsin facility to your exact specifications."
          />
          <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-2">Call us directly</p>
            <PhoneLink variant="prominent" />
            <p className="mt-4 text-sm text-slate-600">
              Our owner, {siteConfig.owner}, answers the phone.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
