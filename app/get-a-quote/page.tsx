import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero, CTASection } from "@/components/sections/HeroSection";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { QuoteFormWithSearchParams } from "./QuoteFormClient";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { siteConfig } from "@/lib/site-config";
import { RelatedLinks } from "@/components/cards/ProductCard";

export const metadata: Metadata = buildMetadata(
  {
    title: "Get a Free Custom Room Divider Quote",
    description:
      "Request a free custom quote for commercial room dividers. Tell us your product preference, room length, and ceiling height. Factory direct — save 50–75%.",
  },
  "/get-a-quote/",
);

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        headline="Get a Free Custom Quote"
        subheadline="We custom-build every system to your exact room dimensions. Give us three things and we'll give you a price."
        keyMessage="Three pieces of information. One quote. No obligation."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: "1", text: "Which product you're interested in" },
                  { step: "2", text: "Overall room length" },
                  { step: "3", text: "Floor-to-ceiling height" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <span className="w-8 h-8 bg-amber-500 text-navy-900 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </span>
                    <p className="text-sm text-navy-900 font-medium pt-1">{item.text}</p>
                  </div>
                ))}
              </div>

              <Suspense fallback={<QuoteForm variant="full" />}>
                <QuoteFormWithSearchParams />
              </Suspense>
            </div>

            <aside className="bg-navy-900 text-white rounded-lg p-8 h-fit">
              <h2 className="text-xl font-semibold mb-6">Why Request a Quote?</h2>
              <ul className="space-y-4 text-white/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  Factory-direct pricing — no middleman markup
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  In business {siteConfig.yearsInBusiness} years
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  Every installation completed
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  Custom-built to your exact dimensions
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 mb-2">Questions first?</p>
                <p className="font-semibold mb-2">Call Scott directly:</p>
                <PhoneLink variant="header" className="text-amber-400 hover:text-amber-300 text-xl" />
              </div>
            </aside>
          </div>

          <div className="mt-12">
            <RelatedLinks
              links={[
                { label: "Why Choose Us", href: "/why-choose-us/" },
                { label: "Case Studies", href: "/case-studies/" },
                { label: "Product Videos", href: "/product-videos/" },
              ]}
              title="Still researching?"
            />
          </div>
        </Container>
      </section>

      <CTASection headline="Prefer to Talk? Give Us a Call." primaryLabel="Call Now" primaryHref={`tel:${siteConfig.phoneTel}`} />
    </>
  );
}
