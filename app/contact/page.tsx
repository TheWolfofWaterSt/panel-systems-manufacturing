import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata(
  {
    title: "Contact Panel Systems Manufacturing",
    description:
      "Contact Scott Mueller at Panel Systems Manufacturing. (800) 257-1190. Elk Mound, Wisconsin. Installation support available by phone.",
  },
  "/contact/",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Contact Panel Systems Manufacturing"
        subheadline="Questions about our room dividers, installation support, or a custom quote — we're here to help. Our owner answers the phone."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Get in Touch</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium text-slate-500">Owner</dt>
                  <dd className="text-lg text-navy-900 font-semibold">{siteConfig.owner}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Phone</dt>
                  <dd><PhoneLink variant="prominent" /></dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg text-navy-900 hover:text-amber-600">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Address</dt>
                  <dd className="text-navy-900">{siteConfig.address.full}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-slate-500">Fax</dt>
                  <dd className="text-navy-900">{siteConfig.fax}</dd>
                </div>
              </dl>

              <p className="mt-8 text-slate-600">
                Installation support is available by phone. Call Scott directly if you have questions during installation.
              </p>

              <div className="mt-8 aspect-video rounded-lg overflow-hidden border border-slate-200">
                <iframe
                  title="Panel Systems Manufacturing location map"
                  src="https://maps.google.com/maps?q=E9954+County+Road+M,+Elk+Mound,+WI+54739&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
